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
      <div className="min-h-screen bg-[#F8FAFF] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
          <div className="w-32 h-6 bg-slate-200 rounded-md" />
          <div className="w-24 h-6 bg-slate-200 rounded-full" />
          <div className="w-full h-12 bg-slate-200 rounded-lg" />
          <div className="w-3/4 h-8 bg-slate-200 rounded-lg" />
          <div className="flex gap-4">
            <div className="w-28 h-5 bg-slate-200 rounded" />
            <div className="w-28 h-5 bg-slate-200 rounded" />
          </div>
          <div className="aspect-[16/9] w-full bg-slate-200 rounded-2xl" />
          <div className="space-y-4 pt-6">
            <div className="w-full h-4 bg-slate-200 rounded" />
            <div className="w-full h-4 bg-slate-200 rounded" />
            <div className="w-5/6 h-4 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // Error or Not Found state
  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#F8FAFF] pt-36 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-5">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-50 border border-red-500/30 flex items-center justify-center text-red-500">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-display font-bold text-[#071A33]">
            {error === 'Article not found.' ? 'Article Not Found' : 'Unable to Load Article'}
          </h1>
          <p className="text-[#536477] text-sm">
            {error === 'Article not found.'
              ? 'The insight you are looking for may have moved, been renamed, or does not exist.'
              : 'A temporary network interruption occurred while loading this article.'}
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/blog"
              className="btn-titan-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
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
    <article className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-24 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 pt-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#536477] hover:text-[#00D1FF] transition-colors group font-semibold"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#00D1FF]" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="space-y-6 mb-10">
          {/* Category Pill */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF7FF] text-[#0B1F4B] border border-[#3BA9FF]/30">
              <Sparkles className="w-3 h-3 text-[#00D1FF]" />
              <span>{post.primaryCategory}</span>
            </span>

            {post.seoScore && (
              <span className="text-[11px] font-mono text-[#536477] px-2.5 py-0.5 rounded-full bg-white border border-slate-200">
                SEO Score: {post.seoScore}/100
              </span>
            )}
          </div>

          {/* Large Article Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#071A33] tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          {/* Short Introduction / Excerpt */}
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-[#536477] leading-relaxed font-normal border-l-4 border-[#00D1FF] pl-4 py-1">
              {post.excerpt}
            </p>
          )}

          {/* Author, Date, Reading Time & Share Bar */}
          <div className="pt-4 border-y border-slate-200/80 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs sm:text-sm font-mono text-[#536477] flex-wrap">
              {/* Author */}
              <div className="flex items-center gap-2 text-[#071A33]">
                {post.authorAvatar ? (
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-7 h-7 rounded-full object-cover border border-[#3BA9FF]/30"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center">
                    <User className="w-4 h-4 text-[#00D1FF]" />
                  </div>
                )}
                <span className="font-bold text-[#071A33]">{post.authorName}</span>
              </div>

              {/* Publication Date */}
              {formattedDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#00D1FF]" />
                  <span>{formattedDate}</span>
                </div>
              )}

              {/* Estimated Reading Time */}
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#3BA9FF]" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Share / Copy Link Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#EAF7FF] border border-slate-200 text-xs font-semibold text-[#0B1F4B] transition-all ml-auto shadow-sm"
              title="Share or copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-mono">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#00D1FF]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 aspect-[16/9] w-full">
            <img
              src={post.featuredImage}
              alt={
                post.slug === 'how-ai-automation-saves-small-businesses-time-and-money'
                  ? 'AI automation for small businesses – TITAN AI Agency'
                  : post.slug === 'why-every-business-needs-a-professional-website-2026'
                  ? 'Professional business website in 2026 – TITAN AI Agency'
                  : `${post.title} – Professional business website, SEO visibility, and AI automation guide by TITAN AI Agency`
              }
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Full Article Content */}
        <div className="my-8 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/80 shadow-sm">
          <BlogContentRenderer content={post.content} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 pb-4 border-t border-slate-200 flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-xs font-mono text-[#536477] mr-2 font-bold">
              <Tag className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>TOPICS:</span>
            </div>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white text-[#0B1F4B] border border-slate-200 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-10 p-6 rounded-2xl card-titan-light flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {post.authorAvatar ? (
            <img
              src={post.authorAvatar}
              alt={post.authorName}
              className="w-14 h-14 rounded-xl object-cover border border-[#3BA9FF]/30 shrink-0"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-[#00D1FF]" />
            </div>
          )}
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-[#071A33] text-base">
              Written by {post.authorName}
            </h4>
            <p className="text-xs text-[#536477] leading-relaxed">
              Contributing research, technical blueprints, and strategic intelligence on behalf of TITAN AI Agency.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="text-xs font-bold text-[#0B1F4B] hover:text-[#00D1FF] transition-colors"
              >
                Connect with the engineering team →
              </Link>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        {post.slug === 'ai-call-agents-for-business' ? (
          <BlogCTA
            badge="AI CALL AGENT DEMONSTRATION"
            heading={
              <>
                See TITAN AI Call Agent in <span className="text-[#00D1FF]">Action</span>
              </>
            }
            text="Want to see how an AI Call Agent could work for your business? Contact TITAN AI Agency on WhatsApp and request a private demonstration."
            primaryButtonText="Request AI Call Agent Demo"
            primaryWhatsappUrl={`https://wa.me/966534182945?text=${encodeURIComponent(
              'Hi TITAN AI Agency, I saw your AI Call Agent article and would like to see a demo for my business.'
            )}`}
            secondaryButtonText="Explore Our AI Services"
            secondaryButtonLink="/services"
          />
        ) : (
          <BlogCTA />
        )}

        {/* Related Articles */}
        <RelatedArticles currentPost={post} allPosts={allPosts} />
      </div>
    </article>
  );
};
