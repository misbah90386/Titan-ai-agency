import React from 'react';
import { Search } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';

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
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-titan-hero text-white border-b border-[#00D1FF]/20">
      {/* Background ambient lighting and digital grid pattern */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Small Label: TITAN INSIGHTS */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-[#00D1FF] text-xs font-mono font-bold uppercase tracking-widest">
            <TitanIcon className="w-4 h-4" />
            <span>TITAN INSIGHTS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
            Insights for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-[#3BA9FF] to-white">
              AI-Powered Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#EAF7FF]/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore practical insights on artificial intelligence, automation, AI agents, websites, and how modern technology helps businesses grow.
          </p>

          {/* Interactive Search */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search insights by topic, keyword, or technology..."
                className="w-full pl-11 pr-4 py-3 bg-[#04142E]/80 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20 transition-all shadow-inner backdrop-blur-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 px-2 py-1 text-xs text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'btn-titan-primary'
                  : 'bg-white/[0.08] text-[#EAF7FF] hover:text-white hover:bg-white/[0.15] border border-white/10'
              }`}
            >
              All Articles {totalArticles > 0 && `(${totalArticles})`}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'btn-titan-primary'
                    : 'bg-white/[0.08] text-[#EAF7FF] hover:text-white hover:bg-white/[0.15] border border-white/10'
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
