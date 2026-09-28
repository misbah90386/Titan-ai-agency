import React from 'react';
import { ExternalLink, ArrowRight, Building, Smartphone, Laptop, CheckCircle2 } from 'lucide-react';

export interface ProjectItem {
  id: string;
  name: string;
  label: string;
  description: string;
  url: string;
  category: string;
  highlights: string[];
  screenshot?: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'real-estate-concept',
    name: 'Real Estate Website Concept',
    label: 'Demo Project',
    description:
      'A property website concept demonstrating how a real estate business can present its services and encourage enquiries.',
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    category: 'Website Design & Development',
    highlights: [
      'Clean modern property portfolio presentation',
      'Direct enquiry capture and consultation booking',
      'Fluid responsiveness on mobile, tablet, and desktop',
      'Fast loading speed and intuitive navigation'
    ]
  }
];

export const FeaturedWork: React.FC = () => {
  return (
    <section id="featured-work" className="relative py-20 sm:py-28 bg-[#04060b] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Selected Work & Concepts
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Explore What We Can Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Review live demos and concepts illustrating how TITAN AI AGENCY engineers responsive websites, conversational assistants, and automated workflows for businesses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/40 p-6 sm:p-10 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Project Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      {project.label}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-200"
                    >
                      <span>View Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20saw%20your%20Real%20Estate%20Website%20Concept%20and%20would%20like%20to%20discuss%20a%20similar%20project%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white text-sm font-medium transition-colors"
                    >
                      <span>Discuss a Similar Project</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Illustrative Live Interface Preview Frame */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#080c16] border border-white/[0.1] overflow-hidden shadow-2xl">
                    
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-white/[0.08] text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="px-2.5 sm:px-3 py-1 rounded-md bg-black/50 text-slate-300 text-[11px] sm:text-xs flex items-center gap-1.5 sm:gap-2 truncate max-w-[160px] xs:max-w-[220px] sm:max-w-[280px]">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="truncate">celebrated-biscuit-a7f671.netlify.app</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-blue-400 font-medium shrink-0">Live Demo</span>
                    </div>

                    {/* Interactive Preview Canvas or Uploaded Screenshot */}
                    {project.screenshot ? (
                      <div className="relative group overflow-hidden bg-black/40">
                        <img
                          src={project.screenshot}
                          alt={`${project.name} preview`}
                          className="w-full h-auto aspect-[16/10] object-cover object-top border-b border-white/[0.06] transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="p-3 bg-[#0d1322] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="text-slate-400">Live Website Screenshot</span>
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
                    ) : (
                      <div className="p-4 sm:p-6 space-y-4 bg-gradient-to-b from-[#0b101c] to-[#080c16]">
                        {/* Nav Bar Mock */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-blue-400" />
                            <span className="font-bold text-white text-sm tracking-wide">REAL ESTATE DEMO</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-400">
                            <span className="hover:text-white">Properties</span>
                            <span className="hover:text-white">Commercial</span>
                            <span className="text-blue-400 font-medium">Contact</span>
                          </div>
                        </div>

                        {/* Hero Banner Mock */}
                        <div className="rounded-xl bg-[#0e1628] border border-white/[0.06] p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                          <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                            Premium Real Estate Architecture
                          </div>
                          <div className="text-base sm:text-lg font-bold text-white leading-snug">
                            Find Exceptional Homes & High-Yield Commercial Spaces
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Tailored search, verified listings, and direct scheduling with real estate advisors.
                          </p>
                          
                          <div className="flex items-center gap-2 pt-2">
                            <span className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-semibold">
                              Explore Listings
                            </span>
                            <span className="px-3 py-1 rounded bg-white/[0.05] border border-white/10 text-slate-300 text-xs">
                              Schedule Tour
                            </span>
                          </div>
                        </div>

                        {/* Sample Listings Mini Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                            <div className="text-[10px] font-mono text-emerald-400">FOR SALE</div>
                            <div className="font-bold text-white truncate">The Horizon Penthouse</div>
                            <div className="text-slate-400 text-[11px]">$1,250,000 · 3 Beds</div>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                            <div className="text-[10px] font-mono text-blue-400">COMMERCIAL</div>
                            <div className="font-bold text-white truncate">Metro Tech Tower</div>
                            <div className="text-slate-400 text-[11px]">8,500 sq ft · Floor 14</div>
                          </div>
                        </div>

                        {/* Preview Label Footer */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
                          <span>Illustrative Demo Preview</span>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline flex items-center gap-1"
                          >
                            <span>Open Live Netlify Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
