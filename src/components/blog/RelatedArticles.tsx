import React from 'react';
import { NormalizedBlogPost } from '../../types/blog';
import { BlogCard } from './BlogCard';
import { Sparkles } from 'lucide-react';

interface RelatedArticlesProps {
  currentPost: NormalizedBlogPost;
  allPosts: NormalizedBlogPost[];
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentPost, allPosts }) => {
  // Find up to 3 related articles (excluding the current one)
  const related = allPosts
    .filter((p) => p.id !== currentPost.id && p.slug !== currentPost.slug)
    .sort((a, b) => {
      // Prioritize articles sharing the same primary category
      const aMatches = a.primaryCategory === currentPost.primaryCategory ? 1 : 0;
      const bMatches = b.primaryCategory === currentPost.primaryCategory ? 1 : 0;
      return bMatches - aMatches;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="pt-16 sm:pt-20 border-t border-white/[0.08]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FURTHER READING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Related Insights &amp; Articles
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {related.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
