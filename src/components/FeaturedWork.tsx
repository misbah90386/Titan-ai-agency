import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronDown } from 'lucide-react';
import { FadeIn } from './motion/MotionComponents';
import { useLanguage } from '../context/LanguageContext';
import realEstateImage from '../assets/images/Clean navy-and-gold real estate showcase.png';
import bakeryImage from '../assets/images/l_etoile_bakery_showcase_1792370771731.jpg';
import restaurantImage from '../assets/images/chicken_restaurant_showcase_1792371422052.jpg';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technology: string;
  outcome: string;
  isConceptDemo: boolean;
  url: string;
  domain: string;
  whatsappMessage: string;
  screenshotUrl: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'real-estate-concept',
    name: 'Luxury Real Estate Concept',
    category: 'Real Estate & Property',
    description: 'High-performance property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
    problem: 'Property firms struggle to display architectural developments, filter units by buyer preferences, and capture high-intent investor inquiries without slow email delays.',
    solution: 'TITAN engineered a high-performance luxury property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
    technology: 'Website / AI Integration / SEO / WhatsApp',
    outcome: 'Interactive concept prototype validating responsive navigation and friction-free lead capture.',
    isConceptDemo: true,
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    domain: 'celebrated-biscuit-a7f671.netlify.app',
    whatsappMessage: 'Hello TITAN AI AGENCY, I saw your Real Estate Concept Demo and would like to discuss a similar project for my business.',
    screenshotUrl: realEstateImage
  },
  {
    id: 'custom-cake-bakery',
    name: 'Artisanal Bakery & Customizer',
    category: 'Food & Hospitality',
    description: 'Interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    problem: 'Custom cake orders create massive back-and-forth messaging for bakeries, quoting tiers, flavors, and delivery dates manually on busy weekends.',
    solution: 'TITAN built an interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    technology: 'Website / Dynamic Customizer / WhatsApp Routing',
    outcome: 'Eliminates repetitive pricing questions; routes pre-configured orders directly to the baker.',
    isConceptDemo: true,
    url: 'https://sweet-dream-bakes.netlify.app/',
    domain: 'sweet-dream-bakes.netlify.app',
    whatsappMessage: 'Hello TITAN AI AGENCY, I saw your Custom Bakery Concept Demo and would like to discuss an interactive order system.',
    screenshotUrl: bakeryImage
  },
  {
    id: 'chicken-restaurant',
    name: 'Fast-Casual Restaurant Platform',
    category: 'Dining & Hospitality',
    description: 'Mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    problem: 'Outdated PDF menus fail on mobile screens, loading slowly and causing diners to drop off before discovering location, allergen info, and operating hours.',
    solution: 'TITAN engineered a mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    technology: 'Website / Mobile Speed Optimization / Local SEO',
    outcome: 'Fast mobile loading, instant menu access, and smooth local navigation.',
    isConceptDemo: true,
    url: 'https://cerulean-begonia-2ecb7d.netlify.app/',
    domain: 'cerulean-begonia-2ecb7d.netlify.app',
    whatsappMessage: 'Hello TITAN AI AGENCY, I saw your Restaurant Website Demo and would like to discuss a project in dining & food.',
    screenshotUrl: restaurantImage
  }
];

const WHATSAPP_BASE = 'https://wa.me/966534182945?text=';

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
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (projectId: string) => {
    setExpandedDetails((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const sectionBadge = badge || t.featuredWork.badge;
  const sectionTitle = title || t.featuredWork.heading;
  const sectionSubtitle = subtitle || t.featuredWork.subtitle;

  const getLocalizedProject = (p: ProjectItem) => {
    if (language === 'ar') {
      if (p.id === 'real-estate-concept') {
        const ar = t.featuredWork.projects.realEstate;
        return {
          ...p,
          name: ar.name,
          category: ar.category,
          description: ar.solution,
          problem: ar.problem,
          solution: ar.solution,
          outcome: ar.outcome,
          technology: 'موقع إلكتروني / تكامل ذكاء اصطناعي / تهيئة سيو / واتساب',
          whatsappMessage: 'مرحباً وكالة تيتان، اطلعت على نموذج المنصة العقارية وأود مناقشة مشروع مماثل.'
        };
      }
      if (p.id === 'custom-cake-bakery') {
        const ar = t.featuredWork.projects.bakery;
        return {
          ...p,
          name: ar.name,
          category: ar.category,
          description: ar.solution,
          problem: ar.problem,
          solution: ar.solution,
          outcome: ar.outcome,
          technology: 'موقع إلكتروني / مخصص طلبات تفاعلي / توجيه واتساب',
          whatsappMessage: 'مرحباً وكالة تيتان، اطلعت على نموذج مخبز الكيك وأود مناقشة نظام طلبات تفاعلي.'
        };
      }
      if (p.id === 'chicken-restaurant') {
        const ar = t.featuredWork.projects.restaurant;
        return {
          ...p,
          name: ar.name,
          category: ar.category,
          description: ar.solution,
          problem: ar.problem,
          solution: ar.solution,
          outcome: ar.outcome,
          technology: 'موقع إلكتروني / سرعة فائقة للهواتف / سيو محلي',
          whatsappMessage: 'مرحباً وكالة تيتان، اطلعت على نموذج منصة المطاعم وأود مناقشة موقع لمطعمنا.'
        };
      }
    }
    return p;
  };

  const getWhatsAppUrl = (message: string) => {
    return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
  };

  return (
    <section id={id} data-section="featured-work" className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]">
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-digital-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <span>{sectionBadge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              {sectionTitle}
            </h2>

            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              {sectionSubtitle}
            </p>
          </div>
        </FadeIn>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((rawProject, idx) => {
            const project = getLocalizedProject(rawProject);
            const isExpanded = !!expandedDetails[project.id];
            const isRealEstate = project.id === 'real-estate-concept';
            const isBakery = project.id === 'custom-cake-bakery';
            const isRestaurant = project.id === 'chicken-restaurant';

            return (
              <FadeIn key={project.id} delay={idx * 0.08} direction="up" distance={16} duration={0.48}>
                <div className="card-titan-light group flex flex-col p-6 sm:p-7 h-full hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_12px_28px_rgba(2,132,199,0.14)] transition-all duration-220 text-start">
                  
                  {/* Browser Frame with Genuine Screenshot & scale reveal */}
                  <div className="rounded-xl bg-[#04142E] border border-slate-800 overflow-hidden shadow-md flex flex-col group-hover:border-[#00D1FF]/60 group-hover:shadow-[0_8px_24px_rgba(0,209,255,0.2)] transition-all duration-300 mb-5">
                    <div className="flex items-center justify-between px-3 py-2 bg-[#0B1F4B] border-b border-white/[0.08] text-[11px] font-mono text-slate-300" dir="ltr">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-2 py-0.5 rounded bg-black/40 text-slate-200 text-[10px] flex items-center gap-1.5 truncate max-w-[170px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>
                      <span className="text-[10px] text-[#00D1FF] font-semibold shrink-0">Live Demo</span>
                    </div>

                    {/* Screenshot Container with scale animation */}
                    <div className={`relative w-full overflow-hidden bg-slate-950 ${isRealEstate ? 'aspect-[2.14/1]' : isBakery || isRestaurant ? 'aspect-[1.83/1]' : 'h-44'}`}>
                      <img
                        src={project.screenshotUrl}
                        alt={isRealEstate ? 'Luxury real estate demo website with navy and gold design.' : isBakery ? 'L’Étoile bakery website demo with navy and gold design and a floral wedding cake.' : isRestaurant ? 'Restaurant demo website featuring fried chicken, burgers, and family deals.' : project.name}
                        className={`absolute inset-0 w-full h-full ${isRealEstate || isBakery || isRestaurant ? 'object-contain' : 'object-cover'} object-center scale-[1.04] group-hover:scale-100 transition-transform duration-500 ease-out opacity-95 group-hover:opacity-100`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04142E]/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                        <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-xs border border-white/20">
                          {project.category}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/40 font-semibold">
                          {language === 'ar' ? 'معاينة حية' : 'Live Preview'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Concise Card Content */}
                  <div className="flex-1 flex flex-col space-y-3.5">
                    
                    {/* Badge: Concept Demo & Category */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-700 border border-amber-500/30">
                        {t.featuredWork.illustrativeConcept}
                      </span>
                      <span className="text-xs font-mono text-[#536477]">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Name (shown once) */}
                    <h3 className="font-display text-xl font-bold text-[#071A33] tracking-tight group-hover:text-[#0B1F4B] transition-colors">
                      {project.name}
                    </h3>

                    {/* Concise Description */}
                    <p className="text-sm text-[#536477] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Expandable Project Details (Problem / Solution / Technology / Outcome) */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleDetails(project.id)}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors focus:outline-none py-1"
                        aria-expanded={isExpanded}
                      >
                        <span>{language === 'ar' ? 'تفاصيل المشروع' : 'Project details'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs animate-in fade-in duration-250">
                          <div>
                            <span className="font-mono font-bold text-rose-600 uppercase tracking-wider block mb-1">
                              {t.featuredWork.problemLabel}
                            </span>
                            <p className="text-[#536477] leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono font-bold text-[#0284C7] uppercase tracking-wider block mb-1">
                              {t.featuredWork.solutionLabel}
                            </span>
                            <p className="text-[#536477] leading-relaxed">
                              {project.solution}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono font-bold text-[#071A33] uppercase tracking-wider block mb-1">
                              {language === 'ar' ? 'التقنيات المستخدمة:' : 'Technology:'}
                            </span>
                            <span className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200 text-[#071A33] font-mono text-[10px]">
                              {project.technology}
                            </span>
                          </div>

                          <div>
                            <span className="font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                              {t.featuredWork.outcomeLabel}
                            </span>
                            <p className="text-[#536477] leading-relaxed italic">
                              {project.outcome}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="mt-auto pt-5 space-y-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-titan-primary w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider group/btn shadow-[0_4px_14px_rgba(0,209,255,0.25)] hover:shadow-[0_0_22px_rgba(0,209,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <span>{t.featuredWork.openDemo}</span>
                        <ExternalLink className="w-4 h-4 stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={getWhatsAppUrl(project.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-titan-secondary w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold hover:-translate-y-0.5 transition-all duration-300 group/sec"
                      >
                        <span>{t.featuredWork.discussSimilar}</span>
                        <ArrowRight className={`w-3.5 h-3.5 text-[#00D1FF] ${isRtl ? 'rotate-180 group-hover/sec:-translate-x-1' : 'group-hover/sec:translate-x-1'} transition-transform`} />
                      </a>
                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
