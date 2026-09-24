import { BlogPost, NormalizedBlogPost } from '../types/blog';
import { FALLBACK_BLOG_POSTS } from '../data/blogFallbackData';

const DEFAULT_FEATURED_IMAGE =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';

/**
 * Normalizes raw Uplift AI / API blog post data into a consistent, strictly-typed shape
 */
export function normalizeBlogPost(raw: any, index = 0): NormalizedBlogPost {
  if (!raw) {
    throw new Error('Cannot normalize null or undefined article');
  }

  const slug =
    raw.slug ||
    (raw.title
      ? raw.title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
      : `article-${index + 1}`);

  // Extract categories
  let categories: string[] = [];
  if (Array.isArray(raw.categories)) {
    categories = raw.categories.map((c: any) =>
      typeof c === 'string' ? c : c?.name || c?.title || ''
    ).filter(Boolean);
  } else if (typeof raw.category === 'string') {
    categories = [raw.category];
  } else if (raw.meta?.articleSection) {
    categories = [raw.meta.articleSection];
  }
  if (categories.length === 0) {
    categories = ['Artificial Intelligence'];
  }

  // Extract tags
  let tags: string[] = [];
  if (Array.isArray(raw.tags)) {
    tags = raw.tags.map((t: any) =>
      typeof t === 'string' ? t : t?.name || t?.title || ''
    ).filter(Boolean);
  } else if (raw.meta?.articleTags) {
    tags = Array.isArray(raw.meta.articleTags)
      ? raw.meta.articleTags
      : String(raw.meta.articleTags).split(',').map((t) => t.trim());
  }

  // Extract content
  const content =
    raw.content ||
    raw.bodyContent ||
    raw.body ||
    raw.html ||
    raw.markdown ||
    raw.excerpt ||
    '';

  // Reading time calculation or fallback
  let readingTime = raw.readingTime || raw.estimatedReadingTime;
  if (!readingTime) {
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    readingTime = `${minutes} min read`;
  } else if (typeof readingTime === 'number') {
    readingTime = `${readingTime} min read`;
  }

  // Author details
  const authorName =
    raw.authorName ||
    raw.author?.name ||
    raw.meta?.articleAuthor ||
    'TITAN AI Team';
  const authorUrl = raw.authorUrl || raw.author?.url || '';
  const authorAvatar = raw.authorAvatar || raw.author?.avatar || '';

  // Publication date
  const publishedAt =
    raw.publishedAt ||
    raw.createdAt ||
    raw.date ||
    new Date().toISOString();

  // Featured Image
  const featuredImage =
    raw.featuredImage ||
    raw.coverImage ||
    raw.image ||
    raw.imageUrl ||
    DEFAULT_FEATURED_IMAGE;

  // Structured Data
  let structuredData = raw.structuredData;
  if (typeof structuredData === 'string') {
    try {
      structuredData = JSON.parse(structuredData);
    } catch {
      structuredData = undefined;
    }
  }

  return {
    id: String(raw.id || raw._id || slug),
    title: raw.title || 'Untitled Insight',
    slug,
    excerpt:
      raw.excerpt ||
      content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
    content,
    featuredImage,
    categories,
    primaryCategory: categories[0] || 'Artificial Intelligence',
    tags,
    authorName,
    authorUrl,
    authorAvatar,
    publishedAt,
    updatedAt: raw.updatedAt,
    readingTime: String(readingTime),
    seoScore: typeof raw.seoScore === 'number' ? raw.seoScore : undefined,
    structuredData,
    meta: {
      seoTitle: raw.meta?.seoTitle || raw.seoTitle,
      seoDescription: raw.meta?.seoDescription || raw.seoDescription,
      focusKeyword: raw.meta?.focusKeyword,
      keywords: raw.meta?.keywords,
      ogTitle: raw.meta?.ogTitle,
      ogDescription: raw.meta?.ogDescription,
      ogType: raw.meta?.ogType || 'article',
      ogUrl: raw.meta?.ogUrl,
      ogSiteName: raw.meta?.ogSiteName || 'TITAN AI AGENCY',
      ogLocale: raw.meta?.ogLocale || 'en_US',
      articleAuthor: raw.meta?.articleAuthor || authorName,
      articleSection: raw.meta?.articleSection || categories[0],
      articleTags: raw.meta?.articleTags || tags,
    },
    freshness: raw.freshness,
    customFields: raw.customFields,
  };
}

/**
 * Requests all blogs via the Netlify serverless function (/.netlify/functions/blogs)
 * or fallback endpoints.
 */
export async function getBlogPosts(): Promise<{ posts: NormalizedBlogPost[]; isLive: boolean; error?: string }> {
  const endpoints = ['/.netlify/functions/blogs', '/api/blogs'];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        const payload = await response.json();
        const rawList = Array.isArray(payload)
          ? payload
          : payload.data || payload.blogs || payload.posts || payload.items || [];

        // Check if explicitly returned an empty array from Uplift
        if (Array.isArray(rawList)) {
          if (rawList.length === 0 && payload.source === 'uplift') {
            return { posts: [], isLive: true };
          }

          if (rawList.length > 0) {
            return {
              posts: rawList.map((item: any, i: number) => normalizeBlogPost(item, i)),
              isLive: payload.source === 'uplift',
            };
          }
        }
      }
    } catch {
      // Continue to next endpoint or fallback
    }
  }

  // Graceful client fallback using TITAN verified agency insights
  return {
    posts: FALLBACK_BLOG_POSTS.map((item, i) => normalizeBlogPost(item, i)),
    isLive: false,
  };
}

/**
 * Requests a single blog article by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<{ post: NormalizedBlogPost | null; isLive: boolean; error?: string }> {
  const endpoints = [
    `/.netlify/functions/blogs?slug=${encodeURIComponent(slug)}`,
    `/api/blogs?slug=${encodeURIComponent(slug)}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        const payload = await response.json();
        const article = payload.article || payload.data || (Array.isArray(payload) ? payload[0] : null);
        if (article) {
          return {
            post: normalizeBlogPost(article),
            isLive: payload.source === 'uplift',
          };
        }
      }
    } catch {
      // Continue to fallback
    }
  }

  // Check fallback articles
  const fallback = FALLBACK_BLOG_POSTS.find((p) => p.slug === slug);
  if (fallback) {
    return {
      post: normalizeBlogPost(fallback),
      isLive: false,
    };
  }

  return { post: null, isLive: false };
}
