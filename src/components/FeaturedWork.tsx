import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronDown, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './motion/MotionComponents';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/projects';

export interface FeaturedWorkProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  id = 'portfolio',
  badge,
  title,
  subtitle,
}) => {
  const { language, isRtl, t } = useLanguage();
  const { openQuote } = useQuote();
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (projectId: string) => {
    setExpandedDetails((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const isAr = language === 'ar';

  const sectionBadge = badge || (isAr ? 'أعمالنا ونماذجنا' : 'OUR PORTFOLIO');
  const sectionTitle = title || (isAr ? 'مواقع حقيقية ونماذج رقمية' : 'Featured Digital Projects');
  const sectionSubtitle = subtitle || (isAr
    ? 'استعرض نماذج مشاريعنا التفاعلية واطلب موقعاً مشابهاً لنشاطك التجاري بنفس الدقة والسرعة.'
    : 'Explore interactive website projects built by Titan and request a similar custom website for your business.');

  const handleRequestSimilar = (project: ProjectItem) => {
    const projectName = isAr ? project.nameAr : project.nameEn;
    openQuote({
      id: 'professional-website',
      name: isAr ? `موقع إلكتروني مشابه لـ: ${projectName}` : `Website similar to: ${projectName}`,
      price: isAr ? 'ابتداءً من 1,200 ريال' : 'From SAR 1,200'
    });
  };

  return (
    <section id={id} data-section="featured-work" className="relative py-14 sm:py-20 lg:py-28 bg-[#F8FAFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]">
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-digital-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>{sectionBadge}</span>
            </div>

            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              {sectionTitle}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#536477] leading-relaxed">
              {sectionSubtitle}
            </p>
          </div>
        </FadeIn>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project, idx) => {
            const isExpanded = !!expandedDetails[project.id];
            const name = isAr ? project.nameAr : project.nameEn;
            const category = isAr ? project.categoryAr : project.categoryEn;
            const description = isAr ? project.descriptionAr : project.descriptionEn;
            const features = isAr ? project.featuresAr : project.featuresEn;
            const problem = isAr ? project.problemAr : project.problemEn;
            const solution = isAr ? project.solutionAr : project.solutionEn;
            const tech = isAr ? project.technologyAr : project.technologyEn;
            const outcome = isAr ? project.outcomeAr : project.outcomeEn;

            return (
              <FadeIn key={project.id} delay={idx * 0.08} direction="up" distance={16} duration={0.48}>
                <div className="card-titan-light group flex flex-col p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#00D1FF]/60 hover:shadow-[0_12px_32px_rgba(2,132,199,0.12)] transition-all duration-300 text-start h-full">
                  
                  {/* Browser Mockup Frame */}
                  <div className="rounded-xl bg-[#04142E] border border-slate-800 overflow-hidden shadow-md flex flex-col group-hover:border-[#00D1FF]/60 transition-all duration-300 mb-5 shrink-0">
                    <div className="flex items-center justify-between px-3 py-2 bg-[#0B1F4B] border-b border-white/[0.08] text-[11px] font-mono text-slate-300" dir="ltr">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-2.5 py-0.5 rounded bg-black/40 text-slate-200 text-[10px] flex items-center gap-1.5 truncate max-w-[170px]">
                        <Globe className="w-3 h-3 text-[#00D1FF] shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>
                      <span className="text-[10px] text-[#00D1FF] font-semibold shrink-0">Demo</span>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={project.screenshotUrl}
                        alt={name}
                        className="w-full h-full object-cover object-top scale-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04142E]/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Top Badges overlay */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                          {category}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-amber-500/90 backdrop-blur-md text-slate-950 shadow-xs">
                          {isAr ? 'نموذج استعراضي (ديمو)' : 'Concept Demo'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex-1 flex flex-col space-y-3.5">
                    
                    {/* Project Title */}
                    <h3 className="font-display text-xl font-bold text-[#071A33] tracking-tight group-hover:text-[#0284C7] transition-colors">
                      {name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {description}
                    </p>

                    {/* Verified Key Features (Up to 3) */}
                    <div className="pt-1 pb-1 space-y-1.5 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                        {isAr ? 'أبرز مميزات المنصة:' : 'Key Verified Features:'}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Case Details */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleDetails(project.id)}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors focus:outline-none py-1 cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isAr ? 'تفاصيل وحل المشكلة' : 'View Problem & Solution'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs animate-in fade-in duration-200">
                          <div>
                            <span className="font-mono font-bold text-rose-600 uppercase tracking-wider block mb-0.5 text-[10px]">
                              {isAr ? 'التحدي والمشكلة:' : 'Problem:'}
                            </span>
                            <p className="text-[#536477] leading-relaxed">{problem}</p>
                          </div>

                          <div>
                            <span className="font-mono font-bold text-[#0284C7] uppercase tracking-wider block mb-0.5 text-[10px]">
                              {isAr ? 'حل تيتان المبتكر:' : 'Titan Solution:'}
                            </span>
                            <p className="text-[#536477] leading-relaxed">{solution}</p>
                          </div>

                          <div>
                            <span className="font-mono font-bold text-slate-700 uppercase tracking-wider block mb-0.5 text-[10px]">
                              {isAr ? 'التقنيات المستخدمة:' : 'Tech Stack:'}
                            </span>
                            <span className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200 text-[#071A33] font-mono text-[10px]">
                              {tech}
                            </span>
                          </div>

                          <div>
                            <span className="font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-0.5 text-[10px]">
                              {isAr ? 'النتيجة والغرض:' : 'Purpose & Outcome:'}
                            </span>
                            <p className="text-[#536477] leading-relaxed italic">{outcome}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 flex flex-col gap-2.5">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-titan-primary w-full min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider shadow-[0_4px_14px_rgba(0,209,255,0.2)] hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300"
                      >
                        <span>{isAr ? 'معاينة الموقع مباشرة' : 'View Live Demo'}</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleRequestSimilar(project)}
                        className="btn-titan-secondary w-full min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold hover:-translate-y-0.5 transition-all duration-300 group/sec cursor-pointer"
                      >
                        <span>{isAr ? 'طلب موقع إلكتروني مشابه' : 'Request Similar Website'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 text-[#0284C7] ${isRtl ? 'rotate-180 group-hover/sec:-translate-x-1' : 'group-hover/sec:translate-x-1'} transition-transform`} />
                      </button>
                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Single Primary Action Button: "Explore All Projects" */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#04142E] hover:bg-[#0B1F4B] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>{isAr ? 'استكشف كافة المشاريع والنماذج' : 'Explore All Projects'}</span>
            <ArrowRight className={`w-4 h-4 text-[#00D1FF] ${isRtl ? 'rotate-180' : ''}`} />
          </Link>
        </div>

      </div>
    </section>
  );
};
