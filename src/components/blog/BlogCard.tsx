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
    <article className="card-titan-light group relative flex flex-col h-full overflow-hidden">
      {/* Featured Image Container */}
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img
          src={post.featuredImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#04142E]/85 text-[#00D1FF] border border-[#00D1FF]/30 backdrop-blur-md shadow-md">
            {post.primaryCategory}
          </span>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 sm:p-7">
        {/* Meta Bar: Date & Reading Time */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#536477] mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#00D1FF]" />
            <span>{formattedDate}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#3BA9FF]" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-[#071A33] group-hover:text-[#0B1F4B] transition-colors line-clamp-2 mb-3 leading-snug">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-[#536477] text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer: Author & Read Article Button */}
        <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Author */}
          <div className="flex items-center gap-2 text-xs text-[#536477] min-w-0">
            {post.authorAvatar ? (
              <img
                src={post.authorAvatar}
                alt={post.authorName}
                className="w-6 h-6 rounded-full object-cover border border-slate-200"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                <User className="w-3.5 h-3.5 text-[#00D1FF]" />
              </div>
            )}
            <span className="truncate font-semibold text-[#071A33]">{post.authorName}</span>
          </div>

          {/* Read Article Button */}
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F4B] group-hover:text-[#00D1FF] transition-colors shrink-0 ml-2"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
