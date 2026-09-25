import React, { useState, useEffect, useMemo } from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogLoadingSkeleton } from '../components/blog/BlogLoadingSkeleton';
import { BlogCTA } from '../components/blog/BlogCTA';
import { getBlogPosts } from '../services/blogService';
import { NormalizedBlogPost } from '../types/blog';
import { AlertCircle, RefreshCw, Sparkles, Inbox } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';

export const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<NormalizedBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLive, setIsLive] = useState(false);

  usePageSEO({
    title: 'AI, Automation & Business Insights | Titan AI Agency',
    description:
      'Explore practical insights on artificial intelligence, business automation, AI agents, voice AI, modern web development, and digital scaling strategies.',
    canonicalPath: '/blog',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Titan AI Agency Insights',
      url: 'https://titanaiagency.netlify.app/blog',
      description:
        'Explore practical insights on artificial intelligence, business automation, AI agents, voice AI, modern web development, and digital scaling strategies.',
      publisher: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png',
      },
    },
  });

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getBlogPosts();
      setPosts(result.posts);
      setIsLive(result.isLive);
    } catch (err: any) {
      console.error('Error fetching blog posts:', err);
      setError(err?.message || 'Unable to load articles at this time.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Compute distinct categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      p.categories.forEach((cat) => set.add(cat));
    });
    return Array.from(set);
  }, [posts]);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.categories.includes(selectedCategory) ||
        post.primaryCategory === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.authorName.toLowerCase().includes(q)
      );
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col">
      {/* Blog Hero Section */}
      <BlogHero
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalArticles={posts.length}
      />

      {/* Main Content Area */}
      <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        {/* Loading State */}
        {loading && <BlogLoadingSkeleton count={6} />}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-[#0f1422] border border-red-500/20 text-center space-y-4 shadow-xl">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-semibold text-white">
              Unable to Retrieve Insights
            </h3>
            <p className="text-slate-400 text-sm">
              We encountered an issue synchronizing articles. Please check your network connection or try refreshing.
            </p>
            <button
              onClick={fetchArticles}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry Connection</span>
            </button>
          </div>
        )}

        {/* Empty State (Explicit requirement: "No articles available yet. New insights are coming soon.") */}
        {!loading && !error && posts.length === 0 && (
          <div className="max-w-lg mx-auto p-12 text-center space-y-4 rounded-2xl bg-[#090d16] border border-white/[0.06]">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
              <Inbox className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              No articles available yet. New insights are coming soon.
            </h3>
            <p className="text-sm text-slate-400">
              Our engineering and strategy teams are preparing fresh research. Check back shortly or reach out to TITAN directly on WhatsApp.
            </p>
          </div>
        )}

        {/* Search / Filter Zero State */}
        {!loading && !error && posts.length > 0 && filteredPosts.length === 0 && (
          <div className="max-w-md mx-auto py-16 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              No matching articles found
            </h3>
            <p className="text-sm text-slate-400">
              No insights matched &quot;{searchQuery}&quot; in the {selectedCategory} category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Reset filters and view all
            </button>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Blog CTA Section */}
        <BlogCTA />
      </section>
    </div>
  );
};
