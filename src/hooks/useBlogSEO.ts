import { useEffect } from 'react';
import { NormalizedBlogPost } from '../types/blog';

function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Custom hook to dynamically manage complete SEO, OpenGraph, Twitter,
 * and Schema.org JSON-LD structured data for blog pages.
 */
export function useBlogSEO(post: NormalizedBlogPost | null) {
  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : `${origin}/blog/${post.slug}`;

    // 1. Page Title & Meta Description
    const pageTitle = post.meta.seoTitle || `${post.title} — TITAN AI AGENCY`;
    const metaDescription =
      post.meta.seoDescription || post.excerpt || `${post.title} - Read insights from TITAN AI Agency.`;

    document.title = pageTitle;

    // Standard Description
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);

    // Keywords if provided
    if (post.meta.keywords) {
      const keywordsStr = Array.isArray(post.meta.keywords)
        ? post.meta.keywords.join(', ')
        : String(post.meta.keywords);
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywordsStr);
    }

    // 2. OpenGraph Meta Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', post.meta.ogTitle || pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', post.meta.ogDescription || metaDescription);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', post.meta.ogType || 'article');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', post.meta.ogUrl || currentUrl);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', post.meta.ogSiteName || 'TITAN AI AGENCY');
    if (post.featuredImage) {
      setMetaTag('meta[property="og:image"]', 'property', 'og:image', post.featuredImage);
    }

    // 3. Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', post.meta.ogTitle || pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', post.meta.ogDescription || metaDescription);
    if (post.featuredImage) {
      setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', post.featuredImage);
    }

    // 4. Article Specific Metadata
    if (post.publishedAt) {
      setMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time', post.publishedAt);
    }
    if (post.authorName) {
      setMetaTag('meta[property="article:author"]', 'property', 'article:author', post.authorName);
    }
    if (post.primaryCategory) {
      setMetaTag('meta[property="article:section"]', 'property', 'article:section', post.primaryCategory);
    }
    if (post.tags && post.tags.length > 0) {
      setMetaTag('meta[property="article:tag"]', 'property', 'article:tag', post.tags.join(', '));
    }

    // 5. Schema.org JSON-LD Structured Data
    const scriptId = `jsonld-blog-${post.id}`;
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData =
      post.structuredData || {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
        headline: post.title,
        description: metaDescription,
        image: post.featuredImage ? [post.featuredImage] : undefined,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          '@type': 'Person',
          name: post.authorName,
          url: post.authorUrl || undefined,
        },
        publisher: {
          '@type': 'Organization',
          name: 'TITAN AI AGENCY',
          logo: {
            '@type': 'ImageObject',
            url: `${origin}/titan-logo.png`,
          },
        },
        articleSection: post.primaryCategory,
        keywords: post.tags?.join(', '),
      };

    scriptTag.textContent = JSON.stringify(structuredData, null, 2);

    return () => {
      document.title = previousTitle;
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [post]);
}
