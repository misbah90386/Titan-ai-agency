import React from 'react';
import { ExternalLink, ArrowRight, Building, Cake, UtensilsCrossed, CheckCircle2, ShieldAlert } from 'lucide-react';
import { FadeIn } from './motion/MotionComponents';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  technology: string;
  outcome: string;
  isConceptDemo: boolean;
  url: string;
  domain: string;
  whatsappMessage: string;
  mockupType: 'real-estate' | 'bakery' | 'restaurant';
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'real-estate-concept',
    name: 'Luxury Real Estate Concept',
    category: 'Real Estate & Property',
    problem: 'Property firms struggle to display architectural developments, filter units by buyer preferences, and capture high-intent investor inquiries without slow email delays.',
    solution: 'TITAN engineered a high-performance luxury property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
    technology: 'Website / AI Integration / SEO / WhatsApp',
    outcome: 'Interactive concept prototype validating sub-second navigation and friction-free lead capture.',
    isConceptDemo: true,
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    domain: 'celebrated-biscuit-a7f671.netlify.app',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Real Estate Concept Demo and would like to discuss a similar project for my business.',
    mockupType: 'real-estate'
  },
  {
    id: 'custom-cake-bakery',
    name: 'Artisanal Bakery & Customizer',
    category: 'Food & Hospitality',
    problem: 'Custom cake orders create massive back-and-forth messaging for bakeries, quoting tiers, flavors, and delivery dates manually on busy weekends.',
    solution: 'TITAN built an interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    technology: 'Website / Dynamic Customizer / WhatsApp Routing',
    outcome: 'Eliminates repetitive pricing questions; routes pre-configured orders directly to the baker.',
    isConceptDemo: true,
    url: 'https://sweet-dream-bakes.netlify.app/',
    domain: 'sweet-dream-bakes.netlify.app',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Custom Bakery Concept Demo and would like to discuss an interactive order system.',
    mockupType: 'bakery'
  },
  {
    id: 'chicken-restaurant',
    name: 'Fast-Casual Restaurant Platform',
    category: 'Dining & Hospitality',
    problem: 'Outdated PDF menus fail on mobile screens, loading slowly and causing diners to drop off before discovering location, allergen info, and operating hours.',
    solution: 'TITAN engineered a sub-second, mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    technology: 'Website / Mobile Speed Optimization / Local SEO',
    outcome: 'Zero mobile lag, instant menu access, and verified 100% Core Web Vitals speed score.',
    isConceptDemo: true,
    url: 'https://cerulean-begonia-2ecb7d.netlify.app/',
    domain: 'cerulean-begonia-2ecb7d.netlify.app',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Restaurant Website Demo and would like to discuss a project in dining & food.',
    mockupType: 'restaurant'
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
  id = 'featured-work',
  badge = 'Interactive Demonstrations & Case Studies',
  title = 'Case Studies & Concept Demos',
  subtitle = 'Explore realistic working prototypes demonstrating how TITAN engineers websites, AI workflows, and conversion architecture. Concept demos are clearly identified to maintain 100% honesty.',
}) => {
  const getWhatsAppUrl = (message: string) => {
    return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
  };

  return (
    <section id={id} className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]">
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-digital-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <span>{badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.1} direction="up" distance={30} duration={0.7}>
              <div className="card-titan-light group flex flex-col p-6 sm:p-7 h-full hover:-translate-y-2 hover:border-[#00D1FF]/60 hover:shadow-[0_16px_36px_rgba(0,209,255,0.18)] transition-all duration-300">
                
                {/* Browser Frame */}
                <div className="rounded-xl bg-[#04142E] border border-slate-800 overflow-hidden shadow-md flex flex-col group-hover:border-[#00D1FF]/40 transition-colors duration-300 mb-5">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#0B1F4B] border-b border-white/[0.08] text-[11px] font-mono text-slate-300">
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

                  {/* Visual Representation */}
                  <div className="p-4 bg-gradient-to-b from-[#071A33] to-[#04142E] min-h-[170px] text-white flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#00D1FF] uppercase font-bold">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-[#3BA9FF]">
                        Interactive
                      </span>
                    </div>

                    <div className="py-2">
                      <h4 className="font-display font-bold text-base text-white">
                        {project.name}
                      </h4>
                      <p className="text-xs text-[#8FA0BA] line-clamp-2 mt-1">
                        {project.solution}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-[#8FA0BA] pt-2 border-t border-white/10">
                      <span>Live Netlify Host</span>
                      <span className="text-emerald-400">Online</span>
                    </div>
                  </div>
                </div>

                {/* Case Study Structured Format */}
                <div className="flex-1 flex flex-col space-y-3.5">
                  
                  {/* Badge: CONCEPT DEMO clearly labeled */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-700 border border-amber-500/30">
                      CONCEPT DEMO
                    </span>
                    <span className="text-xs font-mono text-[#8FA0BA]">
                      {project.category}
                    </span>
                  </div>

                  {/* Business / Project Name */}
                  <h3 className="font-display text-xl font-bold text-[#071A33] tracking-tight group-hover:text-[#0B1F4B] transition-colors">
                    {project.name}
                  </h3>

                  {/* Problem */}
                  <div className="text-xs space-y-1">
                    <span className="font-mono font-bold text-rose-600 uppercase tracking-wider block">
                      Problem:
                    </span>
                    <p className="text-[#536477] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="text-xs space-y-1">
                    <span className="font-mono font-bold text-[#00D1FF] uppercase tracking-wider block">
                      Solution:
                    </span>
                    <p className="text-[#536477] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Technology */}
                  <div className="text-xs space-y-1">
                    <span className="font-mono font-bold text-[#071A33] uppercase tracking-wider block">
                      Technology:
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#F8FAFF] border border-slate-200 text-[#071A33] font-mono text-[11px] hover:border-[#00D1FF]/60 hover:bg-[#EAF7FF] transition-all duration-200 cursor-default">
                      {project.technology}
                    </span>
                  </div>

                  {/* Outcome */}
                  <div className="text-xs space-y-1 pt-1">
                    <span className="font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                      Outcome:
                    </span>
                    <p className="text-[#536477] leading-relaxed italic">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-5 space-y-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-titan-primary w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider group/btn shadow-[0_4px_14px_rgba(0,209,255,0.25)] hover:shadow-[0_0_22px_rgba(0,209,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>VIEW PROJECT</span>
                      <ExternalLink className="w-4 h-4 stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={getWhatsAppUrl(project.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-titan-secondary w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold hover:-translate-y-0.5 transition-all duration-300 group/sec"
                    >
                      <span>Discuss a Similar Project</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF] group-hover/sec:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
