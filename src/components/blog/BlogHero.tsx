import React from 'react';
import { Sparkles, Search } from 'lucide-react';

interface BlogHeroProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalArticles: number;
}

export const BlogHero: React.FC<BlogHeroProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalArticles,
}) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Small Label: TITAN INSIGHTS */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>TITAN INSIGHTS</span>
          </div>

          {/* Main Heading: Insights for the AI-Powered Future */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Insights for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              AI-Powered Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore practical insights on artificial intelligence, automation, AI agents, websites, marketing, and how modern technology can help businesses grow.
          </p>

          {/* Interactive Search & Live Counter */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search insights by topic, keyword, or technology..."
                className="w-full pl-11 pr-4 py-3 bg-[#0b0f19] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 px-2 py-1 text-xs text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        {categories.length > 0 && (
          <div className="mt-12 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => onSelectCategory('All')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/50'
                  : 'bg-[#0c101a] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              All Articles {totalArticles > 0 && `(${totalArticles})`}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/50'
                    : 'bg-[#0c101a] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
