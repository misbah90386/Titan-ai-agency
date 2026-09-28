import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, PhoneCall, MessageSquare, Workflow, Layers, Video, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { HeroShowcaseVisual } from '../components/HeroShowcaseVisual';
import { FeaturedWork } from '../components/FeaturedWork';
import { VideoShowcase } from '../components/VideoShowcase';
import { ProcessSection } from '../components/ProcessSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { ServiceModal } from '../components/ServiceModal';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { usePageSEO } from '../hooks/usePageSEO';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  usePageSEO({
    title: 'Titan AI Agency | AI Automation & AI Solutions for Businesses',
    description:
      'TITAN AI AGENCY builds websites, AI assistants, and automated workflows that help businesses capture enquiries, respond faster, and reduce repetitive work.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Titan AI Agency',
      url: 'https://titanaiagency.netlify.app/',
      logo: 'https://titanaiagency.netlify.app/titan-logo.png',
      description:
        'Titan AI Agency provides AI automation, AI agents, voice AI and digital solutions for businesses.',
      sameAs: ['https://www.instagram.com/titanaiagency.sa?stkn=MWZsZHR5d2Q1Zzdk'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+966534182945',
        contactType: 'sales',
        availableLanguage: ['English', 'Arabic'],
      },
    },
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'websites':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'ai-agents':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'ai-voice-agents':
        return <PhoneCall className="w-5 h-5 text-blue-400" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'business-automation':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'ai-video-creation':
        return <Video className="w-5 h-5 text-blue-400" />;
      case 'custom-ai-solutions':
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const heroWhatsappUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent('Hello TITAN AI AGENCY, I would like to discuss a project for my business.');

  const getServiceRoute = (id: string): string => {
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

  return (
    <div id="home-page-root" className="min-h-screen bg-[#06080d] text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle grid and ambient lighting */}
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Agency Brand Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>TITAN AI AGENCY</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                PROFESSIONAL WEBSITES.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                  SMARTER BUSINESS AUTOMATION.
                </span>
              </h1>

              {/* Exact Requested Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                TITAN AI AGENCY builds websites, AI assistants, and automated workflows that help businesses capture enquiries, respond faster, and reduce repetitive work.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={heroWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-discuss-project-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#featured-work"
                  id="hero-explore-work-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-base border border-white/10 transition-all duration-200"
                >
                  <span>Explore Our Work</span>
                </a>
              </div>

              {/* Value Markers */}
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
                <div>
                  <div className="text-slate-200 font-semibold text-sm">Direct WhatsApp</div>
                  <div className="text-slate-400 text-[11px]">Straightforward chat</div>
                </div>
                <div>
                  <div className="text-slate-200 font-semibold text-sm">30-Day Support</div>
                  <div className="text-slate-400 text-[11px]">Free after launch</div>
                </div>
                <div>
                  <div className="text-slate-200 font-semibold text-sm">Full Ownership</div>
                  <div className="text-slate-400 text-[11px]">Your code & tools</div>
                </div>
              </div>
            </div>

            {/* Right Column: Work Preview Visual (Demonstrating Website, Conversation, Workflow) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroShowcaseVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK SECTION */}
      <FeaturedWork />

      {/* 2.5 VIDEO SHOWCASE SECTION */}
      <VideoShowcase />

      {/* 3. SERVICES SECTION */}
      <section id="services-preview-section" className="relative py-20 sm:py-28 bg-[#05070c] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
                What We Build & Deliver
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Our Core Services
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Practical websites, conversational tools, automated workflows, and AI video content designed to solve genuine business bottlenecks.
              </p>
            </div>
            
            <Link
              to="/services"
              id="view-all-services-header-btn"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group"
            >
              <span>View Full Services Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Seven Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => {
              const whatsappServiceUrl =
                'https://wa.me/966534182945?text=' +
                encodeURIComponent(
                  service.id === 'ai-video-creation'
                    ? 'Hello TITAN AI AGENCY, I am interested in AI video creation for my business.'
                    : `Hello TITAN AI AGENCY, I am interested in ${service.title} for my business.`
                );

              return (
                <div
                  key={service.id}
                  id={`home-service-card-${service.id}`}
                  className="group relative rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-white/[0.08] hover:border-blue-500/40 p-7 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:border-blue-400/40 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <Link
                      to={getServiceRoute(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <span>Learn Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                    </Link>

                    <a
                      href={whatsappServiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      title={`Enquire on WhatsApp about ${service.title}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              id="view-all-services-cta-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white text-sm font-semibold transition-colors"
            >
              <span>Explore Full Service Specifications</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION (From Idea to Launch) */}
      <ProcessSection />

      {/* 5. ABOUT PREVIEW SECTION */}
      <section id="about-preview-section" className="relative py-20 sm:py-28 bg-[#04060a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Agency Background
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                About TITAN AI AGENCY
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                TITAN AI AGENCY was founded by <strong className="text-white font-semibold">Saad Naeem</strong> to help businesses improve their online presence and everyday operations through websites, AI tools, and automation.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Rather than promoting speculative trends or making unsubstantiated claims, we focus on genuine business requirements: diagnosing where your workflows lose time, building dependable software to fix those friction points, and delivering clean, maintainable systems that your business owns completely.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  id="meet-titan-learn-more-btn"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-semibold text-sm transition-colors"
                >
                  <span>Learn More About TITAN & Saad Naeem</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>

            {/* Right Column: Practical Tenets */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-6 sm:p-8 space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  How We Operate
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">1</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Direct Communication</div>
                      <div className="text-xs text-slate-400">Work directly with the builder without intermediary account layers.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">2</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Pragmatic Technology Selection</div>
                      <div className="text-xs text-slate-400">We choose tools to solve verified constraints, never to chase hype.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">3</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Post-Launch Care</div>
                      <div className="text-xs text-slate-400">30 days of free support to verify that everything works as promised.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PRACTICAL & MEASURED</span>
                  <span className="text-blue-400">TITAN AI AGENCY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <FAQSection />

      {/* 7. FINAL CLOSING CTA SECTION */}
      <FinalCTA />

      {/* Modals for Interactive Inspection */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
