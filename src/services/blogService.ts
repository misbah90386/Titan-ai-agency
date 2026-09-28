import { BlogPost, NormalizedBlogPost } from '../types/blog';
import { FALLBACK_BLOG_POSTS } from '../data/blogFallbackData';

const DEFAULT_FEATURED_IMAGE =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';

/**
 * Robustly extracts the articles array from any nested API payload shape
 * Supports:
 * - Array: [...]
 * - { data: { blogs: [...] } }
 * - { data: [...] }
 * - { blogs: [...] }
 * - { posts: [...] }
 * - { data: [ { data: { blogs: [...] } } ] } (cached Netlify wrapper)
 */
export function extractRawArticles(payload: any): any[] {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.data?.blogs)) return payload.data.blogs;
  if (Array.isArray(payload.data?.posts)) return payload.data.posts;
  if (Array.isArray(payload.data?.articles)) return payload.data.articles;
  if (Array.isArray(payload.data?.items)) return payload.data.items;
  if (Array.isArray(payload.data)) {
    if (payload.data[0]?.data?.blogs && Array.isArray(payload.data[0].data.blogs)) {
      return payload.data[0].data.blogs;
    }
    return payload.data;
  }
  if (Array.isArray(payload.blogs)) return payload.blogs;
  if (Array.isArray(payload.posts)) return payload.posts;
  if (Array.isArray(payload.articles)) return payload.articles;
  if (Array.isArray(payload.items)) return payload.items;
  if (payload.data && typeof payload.data === 'object' && (payload.data.title || payload.data.slug)) {
    return [payload.data];
  }
  return [];
}

/**
 * Normalizes raw blog post data into a consistent, strictly-typed shape
 */
export function normalizeBlogPost(raw: any, index = 0): NormalizedBlogPost {
  if (!raw) {
    throw new Error('Cannot normalize null or undefined article');
  }

  // Unwrap if nested in a data wrapper
  if (raw && typeof raw === 'object') {
    if (raw.data && typeof raw.data === 'object' && !raw.title && !raw.headline) {
      if (Array.isArray(raw.data.blogs) && raw.data.blogs[0]) {
        raw = raw.data.blogs[0];
      } else if (raw.data.title || raw.data.slug) {
        raw = raw.data;
      }
    }
  }

  const rawTitle =
    raw.title ||
    raw.headline ||
    raw.post_title ||
    raw.name ||
    raw.meta?.seoTitle ||
    raw.meta?.ogTitle;

  const slug =
    raw.slug ||
    (rawTitle
      ? String(rawTitle)
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
      : `article-${index + 1}`);

  // Fallback title derived cleanly from slug if raw title was missing
  const title =
    rawTitle ||
    slug
      .split('-')
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  // Extract categories
  let categories: string[] = [];
  if (Array.isArray(raw.categories)) {
    categories = raw.categories
      .map((c: any) => (typeof c === 'string' ? c : c?.name || c?.title || ''))
      .filter(Boolean);
  } else if (typeof raw.category === 'string') {
    categories = [raw.category];
  } else if (raw.meta?.articleSection) {
    categories = [raw.meta.articleSection];
  }
  if (categories.length === 0) {
    categories = ['AI Agency'];
  }

  // Extract tags
  let tags: string[] = [];
  if (Array.isArray(raw.tags)) {
    tags = raw.tags
      .map((t: any) => (typeof t === 'string' ? t : t?.name || t?.title || ''))
      .filter(Boolean);
  } else if (raw.meta?.articleTags) {
    tags = Array.isArray(raw.meta.articleTags)
      ? raw.meta.articleTags
      : String(raw.meta.articleTags)
          .split(',')
          .map((t) => t.trim());
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
  let readingTime = raw.readingTime || raw.estimatedReadingTime || raw.customFields?.readingTime;
  if (!readingTime) {
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
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
    'Misbah Naeem';
  const authorUrl = raw.authorUrl || raw.author?.url || 'https://titanaiagency.netlify.app/';
  const authorAvatar = raw.authorAvatar || raw.author?.avatar || '';

  // Publication date
  const publishedAt =
    raw.publishedAt ||
    raw.publishDate ||
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
    title,
    slug,
    excerpt:
      raw.excerpt ||
      content.replace(/<[^>]*>/g, '').slice(0, 160).trim() + '...',
    content,
    featuredImage,
    categories,
    primaryCategory: categories[0] || 'AI Agency',
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
      seoTitle: raw.meta?.seoTitle || raw.seoTitle || title,
      seoDescription: raw.meta?.seoDescription || raw.seoDescription || raw.excerpt,
      focusKeyword: raw.meta?.focusKeyword,
      keywords: raw.meta?.keywords,
      ogTitle: raw.meta?.ogTitle || title,
      ogDescription: raw.meta?.ogDescription || raw.excerpt,
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
 * or bundled static articles.
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
        const contentType = response.headers.get('content-type') || '';
        // Skip if server returned HTML (e.g. index.html SPA rewrite when function not deployed)
        if (!contentType.includes('application/json')) {
          continue;
        }

        const payload = await response.json();
        const rawList = extractRawArticles(payload);

        // Filter valid items that have real titles/slugs
        const validArticles = rawList.filter(
          (item) => item && typeof item === 'object' && (item.title || item.headline || item.slug)
        );

        if (validArticles.length > 0) {
          const liveNormalized = validArticles.map((item: any, i: number) => normalizeBlogPost(item, i));

          // Merge with FALLBACK_BLOG_POSTS to ensure all existing articles are preserved and available
          const existingSlugs = new Set(liveNormalized.map((p) => p.slug));
          const complementary = FALLBACK_BLOG_POSTS
            .filter((p) => !existingSlugs.has(p.slug))
            .map((p, i) => normalizeBlogPost(p, liveNormalized.length + i));

          return {
            posts: [...liveNormalized, ...complementary],
            isLive: payload.source === 'uplift',
          };
        }
      }
    } catch {
      // Continue to next endpoint or fallback
    }
  }

  // Graceful client fallback using permanently bundled articles
  return {
    posts: FALLBACK_BLOG_POSTS.map((item, i) => normalizeBlogPost(item, i)),
    isLive: false,
  };
}

/**
 * Requests a single blog article by slug
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<{ post: NormalizedBlogPost | null; isLive: boolean; error?: string }> {
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
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          continue;
        }

        const payload = await response.json();
        let article = payload.article;
        if (!article && payload.data) {
          if (Array.isArray(payload.data?.blogs)) {
            article = payload.data.blogs.find((b: any) => b.slug === slug || b.id === slug);
          } else if (Array.isArray(payload.data)) {
            article = payload.data.find((b: any) => b.slug === slug || b.id === slug);
          } else if (payload.data.slug === slug || payload.data.id === slug) {
            article = payload.data;
          }
        }
        if (!article && Array.isArray(payload)) {
          article = payload.find((b: any) => b.slug === slug || b.id === slug);
        }

        if (article && (article.title || article.slug)) {
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

  // Check fallback articles permanently bundled with the project
  const fallback = FALLBACK_BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
  if (fallback) {
    return {
      post: normalizeBlogPost(fallback),
      isLive: false,
    };
  }

  return { post: null, isLive: false };
}
