import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  Tag,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '../services/blogService';
import { NormalizedBlogPost } from '../types/blog';
import { useBlogSEO } from '../hooks/useBlogSEO';
import { BlogContentRenderer } from '../components/blog/BlogContentRenderer';
import { RelatedArticles } from '../components/blog/RelatedArticles';
import { BlogCTA } from '../components/blog/BlogCTA';

export const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<NormalizedBlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<NormalizedBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Hook handles complete dynamic SEO, OpenGraph, and JSON-LD structured data
  useBlogSEO(post);

  useEffect(() => {
    let isMounted = true;
    const loadArticle = async () => {
      if (!slug) return;
      setLoading(true);
      setError(null);
      try {
        const [articleResult, allResult] = await Promise.all([
          getBlogPostBySlug(slug),
          getBlogPosts(),
        ]);

        if (!isMounted) return;

        if (articleResult.post) {
          setPost(articleResult.post);
        } else {
          setError('Article not found.');
        }

        setAllPosts(allResult.posts);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Error fetching article:', err);
        setError(err?.message || 'Failed to load article.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadArticle();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignored
    }
  };

  // Format date safely
  const formattedDate = (() => {
    if (!post?.publishedAt) return '';
    try {
      const date = new Date(post.publishedAt);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  })();

  // Loading skeleton for single article
  if (loading) {
    return (
      <div className="min-h-screen bg-[#06080d] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
          <div className="w-32 h-6 bg-slate-800 rounded-md" />
          <div className="w-24 h-6 bg-slate-800 rounded-full" />
          <div className="w-full h-12 bg-slate-800 rounded-lg" />
          <div className="w-3/4 h-8 bg-slate-800 rounded-lg" />
          <div className="flex gap-4">
            <div className="w-28 h-5 bg-slate-800 rounded" />
            <div className="w-28 h-5 bg-slate-800 rounded" />
          </div>
          <div className="aspect-[16/9] w-full bg-slate-800 rounded-2xl" />
          <div className="space-y-4 pt-6">
            <div className="w-full h-4 bg-slate-800 rounded" />
            <div className="w-full h-4 bg-slate-800 rounded" />
            <div className="w-5/6 h-4 bg-slate-800 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // Error or Not Found state
  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#06080d] pt-36 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-5">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-display font-bold text-white">
            {error === 'Article not found.' ? 'Article Not Found' : 'Unable to Load Article'}
          </h1>
          <p className="text-slate-400 text-sm">
            {error === 'Article not found.'
              ? 'The insight you are looking for may have moved, been renamed, or does not exist.'
              : 'A temporary network interruption occurred while loading this article.'}
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#06080d] text-slate-100 pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 pt-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="space-y-6 mb-10">
          {/* Category Pill */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>{post.primaryCategory}</span>
            </span>

            {post.seoScore && (
              <span className="text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                SEO Score: {post.seoScore}/100
              </span>
            )}
          </div>

          {/* Large Article Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          {/* Short Introduction / Excerpt */}
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal border-l-2 border-blue-500/50 pl-4 py-1">
              {post.excerpt}
            </p>
          )}

          {/* Author, Date, Reading Time & Share Bar */}
          <div className="pt-4 border-y border-white/[0.08] py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs sm:text-sm font-mono text-slate-400 flex-wrap">
              {/* Author */}
              <div className="flex items-center gap-2 text-slate-200">
                {post.authorAvatar ? (
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-7 h-7 rounded-full object-cover border border-blue-500/30"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-400" />
                  </div>
                )}
                <span className="font-semibold text-white">{post.authorName}</span>
              </div>

              {/* Publication Date */}
              {formattedDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{formattedDate}</span>
                </div>
              )}

              {/* Estimated Reading Time */}
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Share / Copy Link Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all ml-auto"
              title="Share or copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-slate-900 aspect-[16/9] w-full">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Full Article Content */}
        <div className="my-8">
          <BlogContentRenderer content={post.content} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 pb-4 border-t border-white/[0.08] flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mr-2">
              <Tag className="w-3.5 h-3.5 text-blue-400" />
              <span>TOPICS:</span>
            </div>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-[#0c111e] text-slate-300 border border-white/[0.06]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {post.authorAvatar ? (
            <img
              src={post.authorAvatar}
              alt={post.authorName}
              className="w-14 h-14 rounded-xl object-cover border border-blue-500/30 shrink-0"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-blue-400" />
            </div>
          )}
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-white text-base">
              Written by {post.authorName}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contributing research, technical blueprints, and strategic intelligence on behalf of TITAN AI Agency.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Connect with the engineering team →
              </Link>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <BlogCTA />

        {/* Related Articles */}
        <RelatedArticles currentPost={post} allPosts={allPosts} />
      </div>
    </article>
  );
};
