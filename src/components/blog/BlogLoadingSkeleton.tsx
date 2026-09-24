import React from 'react';

interface BlogLoadingSkeletonProps {
  count?: number;
}

export const BlogLoadingSkeleton: React.FC<BlogLoadingSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#0a0e18]/80 border border-white/[0.06] rounded-2xl overflow-hidden animate-pulse"
        >
          {/* Image placeholder */}
          <div className="aspect-[16/9] w-full bg-slate-800/60 relative overflow-hidden">
            <div className="absolute top-4 left-4 w-24 h-6 rounded-full bg-slate-700/60" />
          </div>

          {/* Content container */}
          <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
            {/* Meta */}
            <div className="flex items-center gap-4">
              <div className="w-24 h-3.5 rounded bg-slate-800/80" />
              <div className="w-16 h-3.5 rounded bg-slate-800/80" />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <div className="w-full h-6 rounded bg-slate-800" />
              <div className="w-3/4 h-6 rounded bg-slate-800" />
            </div>

            {/* Excerpt */}
            <div className="space-y-2 pt-2 flex-grow">
              <div className="w-full h-3.5 rounded bg-slate-800/60" />
              <div className="w-full h-3.5 rounded bg-slate-800/60" />
              <div className="w-2/3 h-3.5 rounded bg-slate-800/60" />
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-800" />
                <div className="w-20 h-3.5 rounded bg-slate-800" />
              </div>
              <div className="w-20 h-4 rounded bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
