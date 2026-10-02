import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Search,
  Cpu,
  PhoneCall,
  Video,
  CheckCircle2,
  Terminal,
  Shield,
  MessageCircle,
  Sparkles,
  AlertCircle,
  Network
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceModal } from '../components/ServiceModal';
import { ServiceItem } from '../types';
import { ProcessSection } from '../components/ProcessSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn } from '../components/motion/MotionComponents';

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const location = useLocation();

  usePageSEO({
    title: 'AI Services & Core Technology Capabilities | TITAN AI Agency',
    description:
      'Explore TITAN AI AGENCY’s 5 core services: AI-Powered Websites, SEO & AI Search Optimization, Custom AI Agents, AI Call Agents, and AI Video Creation.',
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Titan AI Agency Core Services',
      url: 'https://titanaiagency.netlify.app/services',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: 'AI-Powered Websites',
          description:
            'AI-Powered Websites built to attract, convert and grow with built-in AI chatbots, lead capture, and WhatsApp routing.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 2,
          name: 'SEO & AI Search Optimization',
          description:
            'Get discovered where customers are searching across Google and modern generative AI platforms.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 3,
          name: 'Custom AI Agents',
          description:
            'Specialized AI agents built around your business to handle customer interactions and repetitive digital workflows.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 4,
          name: 'AI Call Agents',
          description:
            'AI voice agents that help your business answer every phone opportunity with appointment booking and human escalation.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 5,
          name: 'AI Video Creation',
          description:
            'Professional AI video content built for business marketing, product showcases, and social media growth.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
      ],
    },
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const getDedicatedPath = (id: string): string => {
    switch (id) {
      case 'ai-websites':
      case 'websites':
        return '/services/website-design';
      case 'seo-optimization':
      case 'seo':
        return '/services/seo';
      case 'ai-agents':
        return '/services/ai-agents';
      case 'ai-call-agents':
      case 'ai-voice-agents':
        return '/services/ai-call-agents';
      case 'ai-video-creation':
      case 'ai-video':
        return '/services/ai-video-creation';
      default:
        return `/services#${id}`;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-websites':
      case 'websites':
        return <Globe className="w-6 h-6 text-[#00D1FF]" />;
      case 'seo-optimization':
      case 'seo':
        return <Search className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-agents':
        return <Cpu className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-call-agents':
      case 'ai-voice-agents':
        return <PhoneCall className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-video-creation':
      case 'ai-video':
        return <Video className="w-6 h-6 text-[#00D1FF]" />;
      default:
        return <Globe className="w-6 h-6 text-[#00D1FF]" />;
    }
  };

  return (
    <div id="services-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      
      {/* 1. HEADER BANNER */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.1} direction="none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest mb-6">
              <TitanIcon className="w-4 h-4" />
              <span>5 Core Technology Capabilities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={30}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              AI Services Built for Modern Businesses
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="text-base sm:text-xl text-[#EAF7FF]/90 max-w-3xl mx-auto leading-relaxed font-normal">
              TITAN designs, engineers, and deploys high-performance digital systems. Five interconnected core services built to attract customers, streamline operations, and drive revenue.
            </p>
          </FadeIn>

          {/* Quick Jump Bar */}
          <FadeIn delay={0.4} direction="up" distance={15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {SERVICES_DATA.map((srv, sIdx) => (
                <a
                  key={srv.id}
                  href={`#${srv.id}`}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#00D1FF]/40 text-xs font-semibold text-[#EAF7FF] hover:text-[#00D1FF] transition-all flex items-center gap-1.5"
                >
                  <span className="font-mono text-[#00D1FF] font-bold">0{sIdx + 1}.</span>
                  <span>{srv.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. DETAILED 5 CORE SERVICES BREAKDOWN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {SERVICES_DATA.map((service, index) => {
          const serviceWhatsappUrl =
            'https://wa.me/966534182945?text=' +
            encodeURIComponent(
              `Hello TITAN AI AGENCY, I would like to discuss ${service.title} (${service.ctaText}) for my business.`
            );

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 card-titan-light p-8 sm:p-12 relative hover:border-[#00D1FF]/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Side: Core Description, Problems Solved, and Capabilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#0B1F4B] uppercase tracking-wider block">
                        {service.category} · CORE SERVICE 0{index + 1}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33] tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {service.positioning && (
                    <div className="p-3.5 rounded-xl bg-[#EAF7FF]/60 border border-[#3BA9FF]/20 text-sm font-semibold text-[#0B1F4B]">
                      “{service.positioning}”
                    </div>
                  )}

                  <p className="text-[#536477] text-base leading-relaxed font-normal">
                    {service.overview}
                  </p>

                  {/* Business Problems Solved Box */}
                  {service.problemsSolved && service.problemsSolved.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Business Problems Solved:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.problemsSolved.map((prob, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-[#536477]">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                            <span>{prob}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Capabilities / Scope */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#071A33] font-bold mb-3">
                      Scope & Key Capabilities:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.subcategories.map((sub, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200/80 text-xs sm:text-sm font-medium text-[#071A33]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Exact Requested CTA */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-4">
                    <Link
                      to={getDedicatedPath(service.id)}
                      id={`view-dedicated-guide-${service.id}`}
                      className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_14px_rgba(0,209,255,0.25)] hover:shadow-[0_0_22px_rgba(0,209,255,0.45)]"
                    >
                      <span>{service.ctaText || 'EXPLORE SPECIFICATIONS'}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>

                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-titan-secondary inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Discussion</span>
                    </a>

                    <button
                      onClick={() => setSelectedService(service)}
                      id={`learn-more-service-${service.id}`}
                      className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071A33] text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>Quick Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF]" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Technical Specs, Deliverables & Stack */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="rounded-2xl bg-[#04142E] text-white p-6 space-y-5 border border-[#00D1FF]/20 shadow-md">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        <span>Included Deliverables</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#8FA0BA]">
                        Milestone Bound
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#EAF7FF] flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00D1FF] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/[0.08]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#8FA0BA] block mb-2 font-bold">
                        Technologies & Standards
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono text-[#EAF7FF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer / Note if present */}
                  {service.disclaimerNote && (
                    <div className="p-4 rounded-xl bg-[#F8FAFF] border border-slate-200 text-xs text-[#536477] leading-relaxed">
                      <strong className="text-[#071A33] block font-bold mb-1">Engineering Transparency</strong>
                      {service.disclaimerNote}
                    </div>
                  )}

                  {/* Quality Callout */}
                  <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#3BA9FF] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#536477] leading-relaxed">
                      <strong className="text-[#071A33] block font-bold mb-0.5">Reliable & Guaranteed</strong>
                      Direct founder engineering, 30 days of free post-launch support, and 100% client IP code ownership.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CONNECTED ECOSYSTEM SECTION */}
      <section className="py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <Network className="w-3.5 h-3.5" />
              <span>Full-Stack Integration</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Five Services. One Connected Growth Engine.
            </h2>
            <p className="text-sm sm:text-base text-[#8FA0BA] leading-relaxed">
              We connect your website, search visibility, conversational agents, telephony, and visual assets so your business captures every opportunity automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#00D1FF] font-bold uppercase tracking-wider block">Stage 1: Discovery</span>
              <h3 className="font-display font-bold text-lg text-white">AI Websites + SEO</h3>
              <p className="text-xs sm:text-sm text-[#8FA0BA] leading-relaxed">
                Customers searching on Google and AI platforms land on a fast, modern digital presence tailored to establish trust and prompt action.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#3BA9FF] font-bold uppercase tracking-wider block">Stage 2: Response</span>
              <h3 className="font-display font-bold text-lg text-white">AI Agents + Voice Call Agents</h3>
              <p className="text-xs sm:text-sm text-[#8FA0BA] leading-relaxed">
                Inbound inquiries across web chat and phone calls are answered in seconds, qualified with business logic, and booked directly into your schedule.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">Stage 3: Growth</span>
              <h3 className="font-display font-bold text-lg text-white">AI Video Creation + Automation</h3>
              <p className="text-xs sm:text-sm text-[#8FA0BA] leading-relaxed">
                Engaging business video content fuels social channels and ads, keeping your pipeline full while automated workflows eliminate administrative overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <ProcessSection />

      {/* 5. FAQS SECTION */}
      <FAQSection />

      {/* 6. FINAL CTA */}
      <FinalCTA />

      {/* Interactive Service Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
