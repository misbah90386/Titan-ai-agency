import { FALLBACK_BLOG_POSTS } from '../../src/data/blogFallbackData';

interface NetlifyEvent {
  httpMethod: string;
  queryStringParameters?: Record<string, string | undefined>;
  headers: Record<string, string | undefined>;
  path: string;
}

interface NetlifyResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

/**
 * Netlify Serverless Function: blogs
 * Securely communicates with the Uplift AI API without exposing UPLIFT_API_TOKEN to the client.
 * Endpoint: /.netlify/functions/blogs (or /api/blogs via redirect)
 */
export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const token = process.env.UPLIFT_API_TOKEN;
  const slug = event.queryStringParameters?.slug;

  // If Uplift API token is configured in Netlify environment variables
  if (token && token.trim() !== '' && token !== 'MY_UPLIFT_API_TOKEN') {
    try {
      const upliftUrl = 'https://api.upliftai.co/api/public/v1/blogs';
      const response = await fetch(upliftUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token.trim()}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.warn(`[Netlify blogs function] Uplift API returned status ${response.status}: ${response.statusText}`);
        return serveFallback(slug, `Uplift AI responded with HTTP ${response.status}`);
      }

      const json = await response.json();
      
      // Robustly extract articles from Uplift payload
      // Supports { data: { blogs: [...] } }, { blogs: [...] }, { data: [...] }, or raw array [...]
      let rawArticles: any[] = [];
      if (Array.isArray(json)) {
        rawArticles = json;
      } else if (Array.isArray(json.data?.blogs)) {
        rawArticles = json.data.blogs;
      } else if (Array.isArray(json.data?.posts)) {
        rawArticles = json.data.posts;
      } else if (Array.isArray(json.data?.articles)) {
        rawArticles = json.data.articles;
      } else if (Array.isArray(json.data)) {
        rawArticles = json.data;
      } else if (Array.isArray(json.blogs)) {
        rawArticles = json.blogs;
      } else if (Array.isArray(json.posts)) {
        rawArticles = json.posts;
      } else if (Array.isArray(json.articles)) {
        rawArticles = json.articles;
      } else if (Array.isArray(json.items)) {
        rawArticles = json.items;
      } else if (json && typeof json === 'object') {
        if (json.title || json.headline || json.slug) {
          rawArticles = [json];
        } else if (json.data && (json.data.title || json.data.headline || json.data.slug)) {
          rawArticles = [json.data];
        }
      }

      // Filter out invalid items that lack title/slug/content
      rawArticles = rawArticles.filter(
        (item) => item && typeof item === 'object' && (item.title || item.headline || item.slug)
      );

      // If specific slug is requested
      if (slug) {
        const found = rawArticles.find(
          (a) => a.slug === slug || a.id === slug || a._id === slug
        );

        if (found) {
          return {
            statusCode: 200,
            headers: {
              ...CORS_HEADERS,
              'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            },
            body: JSON.stringify({
              success: true,
              source: 'uplift',
              article: found,
            }),
          };
        }

        // Check fallback if slug wasn't in Uplift
        const fallbackFound = FALLBACK_BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
        if (fallbackFound) {
          return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({
              success: true,
              source: 'fallback',
              article: fallbackFound,
            }),
          };
        }

        return {
          statusCode: 404,
          headers: CORS_HEADERS,
          body: JSON.stringify({
            success: false,
            error: 'Article not found',
          }),
        };
      }

      // If rawArticles is empty, serve fallback articles to ensure high quality content
      if (rawArticles.length === 0) {
        return serveFallback(undefined, 'Uplift returned 0 articles; using bundled agency articles.');
      }

      return {
        statusCode: 200,
        headers: {
          ...CORS_HEADERS,
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
        body: JSON.stringify({
          success: true,
          source: 'uplift',
          total: rawArticles.length,
          data: rawArticles,
        }),
      };
    } catch (err: any) {
      console.error('[Netlify blogs function] Fetch error communicating with Uplift AI:', err);
      return serveFallback(slug, err?.message || 'Network error connecting to Uplift AI');
    }
  }

  // UPLIFT_API_TOKEN is not yet set in Netlify environment variables
  return serveFallback(slug, 'UPLIFT_API_TOKEN not configured in Netlify environment variables; using bundled agency articles.');
};

function serveFallback(slug?: string, notice?: string): NetlifyResponse {
  if (slug) {
    const found = FALLBACK_BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
    if (found) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          success: true,
          source: 'fallback',
          notice,
          article: found,
        }),
      };
    }

    return {
      statusCode: 404,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        error: 'Article not found',
        notice,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: CORS_HEADERS,
    body: JSON.stringify({
      success: true,
      source: 'fallback',
      notice,
      total: FALLBACK_BLOG_POSTS.length,
      data: FALLBACK_BLOG_POSTS,
    }),
  };
}
