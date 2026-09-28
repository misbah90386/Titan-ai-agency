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
    label: 'Demo Project',
    description:
      'A property website concept demonstrating how a real estate business can present its services and encourage enquiries.',
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    domain: 'celebrated-biscuit-a7f671.netlify.app',
    category: 'Website Design & Development',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Real Estate Website Concept and would like to discuss a similar project for my business.',
    highlights: [
      'Clean modern property portfolio presentation',
      'Direct enquiry capture and consultation booking',
      'Fluid responsiveness on mobile, tablet, and desktop'
    ],
    mockupType: 'real-estate'
  },
  {
    id: 'custom-cake-bakery',
    name: 'Custom Cake Bakery Website',
    label: 'Demo Project',
    description:
      'An elegant bakery website concept featuring a cake gallery and a cake customisation interface with estimated pricing and a WhatsApp enquiry flow.',
    url: 'https://sweet-dream-bakes.netlify.app/',
    domain: 'sweet-dream-bakes.netlify.app',
    category: 'Bakery & Food',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Custom Cake Bakery Website demo and would like to discuss a similar project in Bakery & Food.',
    highlights: [
      'Visual cake gallery and customization flow',
      'Interactive pricing estimator and inquiry trigger',
      'Direct WhatsApp order workflow integration'
    ],
    mockupType: 'bakery'
  },
  {
    id: 'chicken-restaurant',
    name: 'Chicken Restaurant Website',
    label: 'Demo Project',
    description:
      'A chicken restaurant website concept showcasing a design approach for a food business.',
    url: 'https://cerulean-begonia-2ecb7d.netlify.app/',
    domain: 'cerulean-begonia-2ecb7d.netlify.app',
    category: 'Restaurant & Food',
    whatsappMessage:
      'Hello TITAN AI AGENCY, I saw your Chicken Restaurant Website demo and would like to discuss a similar project in Restaurant & Food.',
    highlights: [
      'Bold culinary brand identity and visual layout',
      'Structured food menu and dish presentation',
      'Mobile-optimized design built for food customers'
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
  badge = 'Selected Work & Concepts',
  title = 'Explore What We Can Build',
  subtitle = 'Review live demos and concepts illustrating how TITAN AI AGENCY engineers responsive websites, conversational assistants, and automated workflows for businesses.',
}) => {
  const getWhatsAppUrl = (message: string) => {
    return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
  };

  return (
    <section id={id} className="relative py-20 sm:py-28 bg-[#04060b] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            {badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid: 3 columns on wide screens, 2 columns on tablets, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/40 p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl h-full"
            >
              {/* Browser-Style Frame */}
              <div className="rounded-2xl bg-[#080c16] border border-white/[0.1] overflow-hidden shadow-lg flex flex-col">
                
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between px-3 py-2.5 bg-[#0d1322] border-b border-white/[0.08] text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-black/50 text-slate-300 text-[10px] flex items-center gap-1.5 truncate max-w-[170px] sm:max-w-[190px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">{project.domain}</span>
                  </div>
                  <span className="text-[10px] text-blue-400 font-medium shrink-0">Live Demo</span>
                </div>

                {/* Uploaded Screenshot or Illustrative Preview */}
                {project.screenshot ? (
                  <div className="relative group overflow-hidden bg-black/40">
                    <img
                      src={project.screenshot}
                      alt={`${project.name} preview`}
                      className="w-full h-auto aspect-[16/11] object-cover object-top border-b border-white/[0.06] transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="p-2.5 bg-[#0d1322] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Live Website Screenshot</span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-sans font-medium"
                      >
                        <span>Open Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : project.mockupType === 'real-estate' ? (
                  /* 1. Real Estate Illustrative Preview */
                  <div className="p-3.5 sm:p-4 space-y-2.5 bg-gradient-to-b from-[#0b101c] to-[#080c16] flex flex-col justify-between min-h-[220px]">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-blue-400" />
                        <span className="font-bold text-white text-xs tracking-wide">REAL ESTATE DEMO</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <span>Properties</span>
                        <span className="text-blue-400 font-medium">Contact</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#0e1628] border border-white/[0.06] p-2.5 space-y-1.5">
                      <div className="text-[9px] font-mono text-blue-400 uppercase tracking-wider">
                        Architecture & Listings
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Exceptional Homes & Commercial Suites
                      </div>
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[9px] font-semibold">
                          Explore Listings
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-300 text-[9px]">
                          Schedule Tour
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06] space-y-0.5">
                        <div className="text-[8px] font-mono text-emerald-400">FOR SALE</div>
                        <div className="font-semibold text-white truncate text-[10px]">Horizon Penthouse</div>
                        <div className="text-slate-400 text-[9px]">$1.25M · 3 Beds</div>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06] space-y-0.5">
                        <div className="text-[8px] font-mono text-blue-400">COMMERCIAL</div>
                        <div className="font-semibold text-white truncate text-[10px]">Metro Tech Tower</div>
                        <div className="text-slate-400 text-[9px]">Floor 14 Suite</div>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-white/[0.04]">
                      <span>Illustrative Demo Preview</span>
                      <span className="text-blue-400">Live Demo</span>
                    </div>
                  </div>
                ) : project.mockupType === 'bakery' ? (
                  /* 2. Bakery Illustrative Preview */
                  <div className="p-3.5 sm:p-4 space-y-2.5 bg-gradient-to-b from-[#0b101c] to-[#080c16] flex flex-col justify-between min-h-[220px]">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <Cake className="w-3.5 h-3.5 text-pink-400" />
                        <span className="font-bold text-white text-xs tracking-wide">BAKERY DEMO</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <span>Cake Gallery</span>
                        <span className="text-pink-400 font-medium">Customizer</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#140e1c] border border-pink-500/10 p-2.5 space-y-1.5">
                      <div className="text-[9px] font-mono text-pink-400 uppercase tracking-wider">
                        Artisan Bakes & Customizer
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Handcrafted Cakes & Celebration Tier Designs
                      </div>
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-pink-600 text-white text-[9px] font-semibold">
                          Customize Cake
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-300 text-[9px]">
                          Pricing Flow
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06] space-y-0.5">
                        <div className="text-[8px] font-mono text-pink-400">CUSTOM TIER</div>
                        <div className="font-semibold text-white truncate text-[10px]">Velvet Berry Gateau</div>
                        <div className="text-slate-400 text-[9px]">Live Price Estimate</div>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06] space-y-0.5">
                        <div className="text-[8px] font-mono text-amber-400">WEDDING SPEC</div>
                        <div className="font-semibold text-white truncate text-[10px]">Floral 3-Tier Special</div>
                        <div className="text-slate-400 text-[9px]">WhatsApp Enquiry</div>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-white/[0.04]">
                      <span>Illustrative Demo Preview</span>
                      <span className="text-pink-400">Live Demo</span>
                    </div>
                  </div>
                ) : (
                  /* 3. Restaurant Illustrative Preview - Strictly no unverified online ordering, payment, reservations or delivery claims */
                  <div className="p-3.5 sm:p-4 space-y-2.5 bg-gradient-to-b from-[#0b101c] to-[#080c16] flex flex-col justify-between min-h-[220px]">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-bold text-white text-xs tracking-wide">RESTAURANT DEMO</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <span>Signature Menu</span>
                        <span className="text-amber-400 font-medium">Our Story</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#19140c] border border-amber-500/10 p-2.5 space-y-1.5">
                      <div className="text-[9px] font-mono text-amber-400 uppercase tracking-wider">
                        Food Brand Design Approach
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Crispy Recipe & Signature Food Presentation
                      </div>
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-amber-600 text-white text-[9px] font-semibold">
                          Explore Menu
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-300 text-[9px]">
                          Location & Hours
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06] space-y-0.5">
                        <div className="text-[8px] font-mono text-amber-400">SIGNATURE</div>
                        <div className="font-semibold text-white truncate text-[10px]">Crispy Tender Combo</div>
                        <div className="text-slate-400 text-[9px]">Secret Blend Spices</div>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06] space-y-0.5">
                        <div className="text-[8px] font-mono text-rose-400">HOUSE SPECIAL</div>
                        <div className="font-semibold text-white truncate text-[10px]">Smoked Wings Platter</div>
                        <div className="text-slate-400 text-[9px]">Menu Showcase</div>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-white/[0.04]">
                      <span>Illustrative Demo Preview</span>
                      <span className="text-amber-400">Live Demo</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col pt-5 space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    {project.label}
                  </span>
                  <span className="text-xs font-mono text-slate-400 truncate">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed min-h-[4.25rem]">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
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
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] transition-all duration-200"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={getWhatsAppUrl(project.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white text-xs font-medium transition-colors"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
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
