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

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Custom hook to dynamically manage complete SEO, OpenGraph, Twitter,
 * and Schema.org JSON-LD structured data for blog pages.
 */
export function useBlogSEO(post: NormalizedBlogPost | null) {
  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    const origin = 'https://titanaiagency.netlify.app';
    const currentUrl = `${origin}/blog/${post.slug}`;
    const defaultImage = `${origin}/titan-logo.png`;

    // 1. Page Title & Meta Description
    const pageTitle = post.meta.seoTitle || `${post.title} | Titan AI Agency`;
    const metaDescription =
      post.meta.seoDescription || post.excerpt || `${post.title} - Read practical AI, automation and technology insights from Titan AI Agency.`;

    document.title = pageTitle;

    // Standard Description
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);

    // Canonical URL
    setCanonical(currentUrl);

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
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', post.meta.ogSiteName || 'Titan AI Agency');
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', post.featuredImage || defaultImage);

    // 3. Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', post.meta.ogTitle || pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', post.meta.ogDescription || metaDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', post.featuredImage || defaultImage);

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
        image: post.featuredImage ? [post.featuredImage] : [defaultImage],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          '@type': 'Person',
          name: post.authorName,
          url: post.authorUrl || undefined,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Titan AI Agency',
          url: 'https://titanaiagency.netlify.app/',
          logo: {
            '@type': 'ImageObject',
            url: defaultImage,
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
