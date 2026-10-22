import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronDown } from 'lucide-react';
import { FadeIn } from '../components/motion/MotionComponents';
import { useLanguage } from '../context/LanguageContext';
import { FEATURED_PROJECTS } from '../data/projects';
import { QuoteModal } from '../components/pricing/QuoteModal';

export const PortfolioPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Real Estate & Property', 'Food & Hospitality', 'Dining & Hospitality'];

  const filteredProjects = activeCategory === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#071A33] mb-4">Our Work</h1>
          <p className="text-lg text-[#536477]">Explore websites and digital experiences created by Titan AI Agency.</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${activeCategory === cat ? 'bg-[#00D1FF] text-[#04142E]' : 'bg-white text-[#071A33] hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card-titan-light p-6 rounded-xl border border-slate-200">
                <img src={project.screenshotUrl} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-[#536477] mb-4">{project.description}</p>
                <div className="flex flex-col gap-3">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-titan-primary w-full text-center py-2">View Live Demo</a>
                    <button onClick={() => setIsQuoteModalOpen(true)} className="btn-titan-secondary w-full text-center py-2">Request Similar Website</button>
                </div>
            </div>
          ))}
        </div>
      </div>
      
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialPackage={{
          id: 'free-quote-inquiry',
          name: language === 'ar' ? 'استشارة وعرض سعر مجاني' : 'Free Project Quote'
        }}
      />
    </div>
  );
};
