import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { NormalizedBlogPost } from '../../types/blog';

interface BlogCardProps {
  post: NormalizedBlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Format publication date nicely
  const formattedDate = (() => {
    try {
      const date = new Date(post.publishedAt);
      if (isNaN(date.getTime())) return 'Recently Published';
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Recently Published';
    }
  })();

  return (
    <article className="group relative flex flex-col h-full bg-[#0a0e18]/80 hover:bg-[#0d1322] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-1">
      {/* Featured Image Container */}
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <img
          src={post.featuredImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-80" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/30 shadow-md">
            {post.primaryCategory}
          </span>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 sm:p-7">
        {/* Meta Bar: Date & Reading Time */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{formattedDate}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-3 leading-snug">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer: Author & Read Article Button */}
        <div className="pt-4 mt-auto border-t border-white/[0.06] flex items-center justify-between gap-2">
          {/* Author */}
          <div className="flex items-center gap-2 text-xs text-slate-400 min-w-0">
            {post.authorAvatar ? (
              <img
                src={post.authorAvatar}
                alt={post.authorName}
                className="w-6 h-6 rounded-full object-cover border border-white/20"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <User className="w-3.5 h-3.5 text-blue-400" />
              </div>
            )}
            <span className="truncate font-medium text-slate-300">{post.authorName}</span>
          </div>

          {/* Read Article Button */}
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors shrink-0 ml-2"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
