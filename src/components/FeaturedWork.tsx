import React from 'react';
import { ExternalLink, ArrowRight, Building, Cake, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

export interface ProjectItem {
  id: string;
  name: string;
  label: string;
  description: string;
  url: string;
  domain: string;
  category: string;
  whatsappMessage: string;
  highlights: string[];
  screenshot?: string;
  mockupType: 'real-estate' | 'bakery' | 'restaurant';
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'real-estate-concept',
    name: 'Real Estate Website Concept',
    label: 'Case Study',
    description:
      'A luxury property portfolio concept demonstrating how a real estate enterprise presents developments and captures qualified investor enquiries.',
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    domain: 'celebrated-biscuit-a7f671.netlify.app',
    category: 'Website Design & Development',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Real Estate Website Concept and would like to discuss a similar project for my business.',
    highlights: [
      'Interactive luxury property showcase and filters',
      'Direct WhatsApp and consultation inquiry workflow',
      'Engineered for fast loading and fluid mobile responsiveness'
    ],
    mockupType: 'real-estate'
  },
  {
    id: 'custom-cake-bakery',
    name: 'Custom Cake Bakery Website',
    label: 'Case Study',
    description:
      'An artisanal bakery platform featuring an interactive visual cake customizer, real-time price estimation, and rapid WhatsApp order checkout.',
    url: 'https://sweet-dream-bakes.netlify.app/',
    domain: 'sweet-dream-bakes.netlify.app',
    category: 'Bakery & Food Solutions',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Custom Cake Bakery Website demo and would like to discuss a similar project in Bakery & Food.',
    highlights: [
      'Tier and flavor customization with instant pricing',
      'Visual gallery optimized for high-conversion browsing',
      'Direct order routing to WhatsApp business line'
    ],
    mockupType: 'bakery'
  },
  {
    id: 'chicken-restaurant',
    name: 'Chicken Restaurant Website',
    label: 'Case Study',
    description:
      'A modern culinary website presenting brand storytelling, structured food menus, opening hours, and direct customer communication channels.',
    url: 'https://cerulean-begonia-2ecb7d.netlify.app/',
    domain: 'cerulean-begonia-2ecb7d.netlify.app',
    category: 'Restaurant & Hospitality',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Chicken Restaurant Website demo and would like to discuss a similar project in Restaurant & Food.',
    highlights: [
      'Appetizing visual hierarchy and signature item spotlights',
      'Clear, accessible menu categorization and pricing',
      'Built specifically for fast mobile customer discovery'
    ],
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
  badge = 'Featured Case Studies & Concepts',
  title = 'Selected Digital Work',
  subtitle = 'Explore interactive case studies demonstrating how TITAN AI AGENCY engineers responsive websites, conversational assistants, and automated workflows built for serious business impact.',
}) => {
  const getWhatsAppUrl = (message: string) => {
    return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
  };

  return (
    <section id={id} className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 overflow-hidden">
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-digital-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
            {badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536477] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="card-titan-light group flex flex-col p-5 sm:p-6 h-full"
            >
              {/* Browser-Style Frame */}
              <div className="rounded-xl bg-[#04142E] border border-slate-800 overflow-hidden shadow-md flex flex-col">
                
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#0B1F4B] border-b border-white/[0.08] text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-black/40 text-slate-200 text-[10px] flex items-center gap-1.5 truncate max-w-[170px] sm:max-w-[190px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse shrink-0" />
                    <span className="truncate">{project.domain}</span>
                  </div>
                  <span className="text-[10px] text-[#00D1FF] font-semibold shrink-0">Live Demo</span>
                </div>

                {/* Project Mockup Representation */}
                {project.mockupType === 'real-estate' ? (
                  <div className="p-4 space-y-3 bg-gradient-to-b from-[#071A33] to-[#04142E] flex flex-col justify-between min-h-[210px] text-white">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#00D1FF]" />
                        <span className="font-bold text-xs tracking-wide text-white">PRIME PROPERTIES</span>
                      </div>
                      <span className="text-[10px] text-[#3BA9FF] font-medium">Verified Portfolio</span>
                    </div>

                    <div className="rounded-lg bg-[#0B1F4B]/90 border border-[#00D1FF]/20 p-3 space-y-1.5">
                      <div className="text-[9px] font-mono text-[#00D1FF] uppercase tracking-wider">
                        Commercial & Luxury Residential
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Modern Architectural Spaces Built for Corporate Expansion
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="px-2 py-0.5 rounded bg-[#00D1FF] text-[#04142E] text-[9px] font-bold">
                          View Units
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[9px]">
                          Book Tour
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                        <div className="text-[8px] font-mono text-[#00D1FF]">FINANCIAL DISTRICT</div>
                        <div className="font-semibold text-white truncate text-[10px]">Horizon Tower</div>
                        <div className="text-slate-300 text-[9px]">Grade-A Commercial</div>
                      </div>
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                        <div className="text-[8px] font-mono text-[#3BA9FF]">WATERFRONT</div>
                        <div className="font-semibold text-white truncate text-[10px]">Marina Suites</div>
                        <div className="text-slate-300 text-[9px]">Executive Living</div>
                      </div>
                    </div>
                  </div>
                ) : project.mockupType === 'bakery' ? (
                  <div className="p-4 space-y-3 bg-gradient-to-b from-[#071A33] to-[#04142E] flex flex-col justify-between min-h-[210px] text-white">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Cake className="w-4 h-4 text-[#3BA9FF]" />
                        <span className="font-bold text-xs tracking-wide text-white">SWEET DREAM BAKERY</span>
                      </div>
                      <span className="text-[10px] text-[#00D1FF] font-medium">Custom Orders</span>
                    </div>

                    <div className="rounded-lg bg-[#0B1F4B]/90 border border-[#3BA9FF]/25 p-3 space-y-1.5">
                      <div className="text-[9px] font-mono text-[#3BA9FF] uppercase tracking-wider">
                        Artisan Bakes & Customizer
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Handcrafted Celebration Cakes with Instant Estimate
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="px-2 py-0.5 rounded bg-[#3BA9FF] text-[#04142E] text-[9px] font-bold">
                          Configure Cake
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[9px]">
                          Price Calculator
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                        <div className="text-[8px] font-mono text-[#00D1FF]">INTERACTIVE</div>
                        <div className="font-semibold text-white truncate text-[10px]">Tier Customizer</div>
                        <div className="text-slate-300 text-[9px]">Live Calculations</div>
                      </div>
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                        <div className="text-[8px] font-mono text-[#3BA9FF]">CHECKOUT</div>
                        <div className="font-semibold text-white truncate text-[10px]">Direct WhatsApp</div>
                        <div className="text-slate-300 text-[9px]">1-Click Order Send</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 space-y-3 bg-gradient-to-b from-[#071A33] to-[#04142E] flex flex-col justify-between min-h-[210px] text-white">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <UtensilsCrossed className="w-4 h-4 text-[#00D1FF]" />
                        <span className="font-bold text-xs tracking-wide text-white">CULINARY SPOTLIGHT</span>
                      </div>
                      <span className="text-[10px] text-[#00D1FF] font-medium">Menu Experience</span>
                    </div>

                    <div className="rounded-lg bg-[#0B1F4B]/90 border border-[#00D1FF]/20 p-3 space-y-1.5">
                      <div className="text-[9px] font-mono text-[#00D1FF] uppercase tracking-wider">
                        Brand Identity & Discovery
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Signature Recipe Showcase & Mobile-First Navigation
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="px-2 py-0.5 rounded bg-[#00D1FF] text-[#04142E] text-[9px] font-bold">
                          Explore Menu
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[9px]">
                          Location & Hours
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                        <div className="text-[8px] font-mono text-[#00D1FF]">SIGNATURE</div>
                        <div className="font-semibold text-white truncate text-[10px]">Crispy Combos</div>
                        <div className="text-slate-300 text-[9px]">Detailed Allergen Info</div>
                      </div>
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                        <div className="text-[8px] font-mono text-[#3BA9FF]">MOBILE SPEED</div>
                        <div className="font-semibold text-white truncate text-[10px]">Sub-Second Load</div>
                        <div className="text-slate-300 text-[9px]">Zero Customer Friction</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col pt-5 space-y-3">
                {/* Unboxed Metadata Line (anti-slop rule) */}
                <div className="flex items-center gap-2 text-xs text-[#536477]">
                  <span className="font-semibold text-[#0B1F4B]">{project.label}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#3BA9FF] font-medium">{project.category}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#071A33] tracking-tight group-hover:text-[#0B1F4B] transition-colors">
                  {project.name}
                </h3>

                <p className="text-[#536477] text-sm leading-relaxed min-h-[4rem]">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#536477]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons Pinned to Bottom */}
                <div className="mt-auto pt-5 space-y-2.5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-titan-primary w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href={getWhatsAppUrl(project.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-titan-secondary w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF]" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
