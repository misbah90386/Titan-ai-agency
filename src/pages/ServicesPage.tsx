import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, PhoneCall, MessageSquare, Workflow, Layers, CheckCircle2, Terminal, Shield, Zap, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceModal } from '../components/ServiceModal';
import { ServiceItem } from '../types';
import { FinalCTA } from '../components/FinalCTA';
import { usePageSEO } from '../hooks/usePageSEO';

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const location = useLocation();

  usePageSEO({
    title: 'AI Automation Services & AI Agents | Titan AI Agency',
    description:
      'Explore Titan AI Agency services: AI business automation, autonomous AI agents, voice AI, custom chatbots, high-converting websites, and bespoke technology solutions.',
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Titan AI Agency Services',
      url: 'https://titanaiagency.netlify.app/services',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: 'Websites & 3D Web Development',
          description:
            'High-converting, performance-engineered modern websites with 3D elements and conversion architecture.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 2,
          name: 'AI Agents',
          description:
            'Autonomous multi-step software engines integrated into operational workflows and databases.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 3,
          name: 'AI Voice Agents',
          description:
            'Sub-second low-latency voice conversational systems for outbound lead qualification and inbound customer support.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 4,
          name: 'AI Chatbots',
          description:
            'Knowledge-grounded customer service and lead capture bots with zero-hallucination guardrails.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 5,
          name: 'Business Automation',
          description:
            'Event-driven integration pipelines connecting CRMs, ERPs, billing, and fulfillment operations.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
        {
          '@type': 'Service',
          position: 6,
          name: 'Custom AI Solutions',
          description:
            'Bespoke machine learning architectures, internal productivity tools, and specialized AI systems.',
          provider: { '@type': 'Organization', name: 'Titan AI Agency' },
        },
      ],
    },
  });

  useEffect(() => {
    // Handle anchor hash scrolling e.g. #websites, #ai-agents
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id="services-page-root" className="min-h-screen bg-[#06080d] text-slate-100 pt-28">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Solutions Portfolio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Services & Solutions
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            TITAN designs, engineers, and deploys high-performance digital systems for modern business operations. Explore our full spectrum of specialized capabilities below.
          </p>

          {/* Quick Jump Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {SERVICES_DATA.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.id}`}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                {srv.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 relative rounded-3xl bg-slate-900/30 border border-white/[0.08] hover:border-blue-500/30 p-8 sm:p-12 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Side: Core Description and Subcategories */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30 uppercase">
                      {service.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      SERVICE 0{index + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    {service.overview}
                  </p>

                  {/* Subcategories required by prompt */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      Scope & Modalities Covered:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.subcategories.map((sub, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-sm text-slate-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedService(service)}
                      id={`learn-more-service-${service.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
                    >
                      <span>Inquire About {service.title}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Side: Technical Specs, Deliverables & Stack */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl bg-black/40 border border-white/[0.08] p-6 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        <span>System Deliverables</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        {service.typicalTimeline}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Core Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture Callout */}
                  <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-white block font-medium mb-0.5">Enterprise Guardrails & Standards</strong>
                      All solutions are deployed with strict data isolation, zero arbitrary third-party leaks, and modular maintainable codebases.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

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
