import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, PhoneCall, MessageSquare, Workflow, Layers, CheckCircle2, Terminal, Shield, MessageCircle, Sparkles, Video } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceModal } from '../components/ServiceModal';
import { ServiceItem } from '../types';
import { ProcessSection } from '../components/ProcessSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const location = useLocation();

  usePageSEO({
    title: 'AI Automation Services & AI Agents | Titan AI Agency',
    description:
      'Explore Titan AI Agency services: Website Design & Development, AI Agents, AI Voice Agents, AI Chatbots, Business Automation, Custom AI Solutions, and AI Video Creation.',
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Titan AI Agency Services',
      url: 'https://titanaiagency.netlify.app/services',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: 'Website Design & Development',
          description:
            'Professional, responsive websites that present your business clearly and make it easy for customers to contact you.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 2,
          name: 'AI Agents',
          description:
            'AI assistants designed to help with specific business tasks and workflows.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 3,
          name: 'AI Voice Agents',
          description:
            'Voice assistants for supported enquiry, appointment, and communication workflows.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 4,
          name: 'AI Chatbots',
          description:
            'Conversational assistants that answer common questions and collect enquiries.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 5,
          name: 'Business Automation',
          description:
            'Connected workflows that reduce repetitive tasks and keep information moving between tools.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 6,
          name: 'Custom AI Solutions',
          description:
            'Tailored systems developed around your business requirements.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 7,
          name: 'AI Video Creation',
          description:
            'Custom AI-generated videos for product showcases, business promotions, property concepts, and social media content.',
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
      case 'websites':
        return '/services/website-design';
      case 'ai-agents':
        return '/services/ai-agents';
      case 'ai-chatbots':
        return '/services/ai-chatbots';
      case 'ai-voice-agents':
        return '/services/ai-voice-agents';
      case 'business-automation':
        return '/services/business-automation';
      case 'ai-video-creation':
        return '/services/ai-video-creation';
      default:
        return `/services#${id}`;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'websites':
        return <Globe className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-agents':
        return <Cpu className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-voice-agents':
        return <PhoneCall className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-6 h-6 text-[#00D1FF]" />;
      case 'business-automation':
        return <Workflow className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-video-creation':
        return <Video className="w-6 h-6 text-[#00D1FF]" />;
      case 'custom-ai-solutions':
      default:
        return <Layers className="w-6 h-6 text-[#00D1FF]" />;
    }
  };

  return (
    <div id="services-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      {/* Header Banner (Dark Premium Navy) */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest mb-6">
            <TitanIcon className="w-4 h-4" />
            <span>Digital Solutions Portfolio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Services & Solutions
          </h1>

          <p className="text-base sm:text-xl text-[#EAF7FF]/90 max-w-3xl mx-auto leading-relaxed font-normal">
            TITAN designs, engineers, and deploys high-performance digital systems for modern business operations. Explore our dedicated capability guides below.
          </p>

          {/* Quick Jump Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {SERVICES_DATA.map((srv) => (
              <Link
                key={srv.id}
                to={getDedicatedPath(srv.id)}
                className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#00D1FF]/40 text-xs font-semibold text-[#EAF7FF] hover:text-[#00D1FF] transition-all flex items-center gap-1.5"
              >
                <span>{srv.title}</span>
                <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown (Light Background with card-titan-light) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {SERVICES_DATA.map((service, index) => {
          const serviceWhatsappUrl =
            'https://wa.me/966534182945?text=' +
            encodeURIComponent(
              service.id === 'ai-video-creation'
                ? 'Hello TITAN AI AGENCY, I am interested in AI video creation for my business.'
                : `Hello TITAN AI AGENCY, I would like to discuss ${service.title} for my business.`
            );

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 card-titan-light p-8 sm:p-12 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Side: Core Description and Subcategories */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#0B1F4B] uppercase tracking-wider block">
                        {service.category} · SERVICE 0{index + 1}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33] tracking-tight">
                        {service.heading || service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#536477] text-base leading-relaxed font-normal">
                    {service.overview}
                  </p>

                  {/* Process note if present */}
                  {service.processNote && (
                    <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 space-y-1.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#0B1F4B] font-bold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#00D1FF]" />
                        <span>Brief & Production Process</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                        {service.processNote}
                      </p>
                    </div>
                  )}

                  {/* Subcategories */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#071A33] font-bold mb-3">
                      {service.id === 'ai-video-creation' ? 'Project Types & Video Formats:' : 'Scope & Capabilities:'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.subcategories.map((sub, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200/80 text-sm font-medium text-[#071A33]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-4">
                    <Link
                      to={getDedicatedPath(service.id)}
                      id={`view-dedicated-guide-${service.id}`}
                      className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold"
                    >
                      <span>Explore Dedicated Guide & Scope</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>

                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-titan-secondary inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Discuss on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSelectedService(service)}
                      id={`learn-more-service-${service.id}`}
                      className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071A33] text-sm font-semibold transition-colors flex items-center gap-1.5"
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
                        Structured Milestones
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

                  {/* Project Terms Note if present */}
                  {service.termsNote && (
                    <div className="p-4 rounded-xl bg-[#F8FAFF] border border-slate-200 text-xs text-[#536477] leading-relaxed">
                      <strong className="text-[#071A33] block font-bold mb-1">Scope & Specification Policy</strong>
                      {service.termsNote}
                    </div>
                  )}

                  {/* Operational Quality Callout */}
                  <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#3BA9FF] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#536477] leading-relaxed">
                      <strong className="text-[#071A33] block font-bold mb-0.5">Reliable & Transparent</strong>
                      All solutions are scoped clearly before launch, tested on real devices, and delivered with 30 days of free support.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQs Section */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Interactive Service Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
