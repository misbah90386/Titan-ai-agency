import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, PhoneCall, MessageSquare, Workflow, Layers, Video, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { HeroShowcaseVisual } from '../components/HeroShowcaseVisual';
import { FeaturedWork } from '../components/FeaturedWork';
import { ProcessSection } from '../components/ProcessSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { ServiceModal } from '../components/ServiceModal';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn, AnimatedNumber } from '../components/motion/MotionComponents';

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
        return <Globe className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-agents':
        return <Cpu className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-voice-agents':
        return <PhoneCall className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-5 h-5 text-[#00D1FF]" />;
      case 'business-automation':
        return <Workflow className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-video-creation':
        return <Video className="w-5 h-5 text-[#00D1FF]" />;
      case 'custom-ai-solutions':
      default:
        return <Layers className="w-5 h-5 text-[#00D1FF]" />;
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
    <div id="home-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33]">
      
      {/* 1. HERO SECTION (Dark Premium Navy with Subtle Tech Accents) */}
      <section id="hero-section" className="relative pt-24 pb-10 sm:pt-26 sm:pb-12 lg:pt-24 lg:pb-12 xl:pt-28 xl:pb-14 overflow-hidden bg-titan-hero text-white">
        {/* Subtle grid and understated network node details */}
        <div className="absolute inset-0 bg-digital-grid-dark opacity-15 pointer-events-none" />
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3BA9FF" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path d="M 120 180 L 320 260 L 450 150 L 680 230 L 900 110 L 1150 210" stroke="url(#netGrad)" strokeWidth="1" strokeDasharray="4 6" fill="none" className="animate-network-flow" />
          <path d="M 200 430 L 380 320 L 580 400 L 820 280 L 1020 380" stroke="url(#netGrad)" strokeWidth="1" strokeDasharray="3 5" fill="none" className="animate-network-flow" />
          <circle cx="320" cy="260" r="2.5" fill="#00D1FF" className="animate-node-pulse" />
          <circle cx="450" cy="150" r="2" fill="#3BA9FF" className="animate-node-pulse" />
          <circle cx="680" cy="230" r="2.5" fill="#00D1FF" className="animate-node-pulse" />
          <circle cx="900" cy="110" r="2" fill="#3BA9FF" className="animate-node-pulse" />
          <circle cx="380" cy="320" r="2" fill="#00D1FF" className="animate-node-pulse" />
          <circle cx="580" cy="400" r="2.5" fill="#3BA9FF" className="animate-node-pulse" />
          <circle cx="820" cy="280" r="2" fill="#00D1FF" className="animate-node-pulse" />
        </svg>

        {/* Ambient Slow-Moving Blue/Cyan Glow Orbs */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#00D1FF]/10 rounded-full blur-[130px] pointer-events-none animate-ambient-1" />
        <div className="absolute bottom-6 right-0 w-80 h-80 bg-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none animate-ambient-2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Value Proposition with Staggered Entrance */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-4.5 xl:space-y-5 text-left">
              {/* Step 1 (0.1s): Agency Brand Tag */}
              <FadeIn delay={0.1} direction="none" duration={0.5}>
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.06] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest shadow-[0_0_12px_rgba(0,209,255,0.15)]">
                  <TitanIcon className="w-4 h-4" />
                  <span>TITAN AI AGENCY</span>
                </div>
              </FadeIn>

              {/* Step 2 (0.3s): Headline moves upward from 40px below while fading in */}
              <FadeIn delay={0.3} direction="up" distance={40} duration={0.7}>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.02] sm:leading-[1.03]">
                  PROFESSIONAL WEBSITES.{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-[#38BDF8] to-[#3BA9FF] shimmer-text-sweep">
                    SMARTER BUSINESS AUTOMATION.
                  </span>
                </h1>
              </FadeIn>

              {/* Step 3 (0.5s): Description appears after the heading */}
              <FadeIn delay={0.5} direction="up" distance={30} duration={0.7}>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] text-[#EAF7FF]/90 font-normal leading-relaxed max-w-2xl">
                  TITAN AI AGENCY builds websites, AI assistants, and automated workflows that help businesses capture enquiries, respond faster, and reduce repetitive work.
                </p>
              </FadeIn>

              {/* Step 4 (0.7s): CTA buttons appear last */}
              <FadeIn delay={0.7} direction="up" distance={25} duration={0.7}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                  <a
                    href={heroWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-discuss-project-btn"
                    className="group btn-titan-primary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-3.5 text-base font-bold shadow-[0_4px_18px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 stroke-[2.5]" />
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-[5px] transition-transform duration-250" />
                  </a>

                  <a
                    href="#featured-work"
                    id="hero-explore-work-btn"
                    className="btn-titan-secondary-dark inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3.5 text-base font-semibold hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Explore Our Work</span>
                  </a>
                </div>
              </FadeIn>

              {/* Step 5 (0.7s): Value Markers */}
              <FadeIn delay={0.7} direction="up" distance={16} duration={0.6}>
                <div className="pt-3 mt-1 border-t border-white/[0.08] grid grid-cols-3 gap-3 text-xs font-mono text-[#8FA0BA]">
                  <div>
                    <div className="text-white font-semibold text-xs sm:text-sm">Direct WhatsApp</div>
                    <div className="text-[#8FA0BA] text-[11px]">Straightforward chat</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-xs sm:text-sm">
                      <AnimatedNumber value={30} suffix="-Day" /> Support
                    </div>
                    <div className="text-[#8FA0BA] text-[11px]">Free after launch</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-xs sm:text-sm">
                      <AnimatedNumber value={100} suffix="%" /> Ownership
                    </div>
                    <div className="text-[#8FA0BA] text-[11px]">Your code & tools</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Work Preview Visual */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <FadeIn delay={0.35} direction="up" distance={25} duration={0.7}>
                <HeroShowcaseVisual />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK SECTION (Light Case Studies Portfolio) */}
      <FeaturedWork />

      {/* 3. CORE SERVICES SECTION (Clean White / Light Ice Blue) */}
      <section id="services-preview-section" className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div className="max-w-2xl">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
                  What We Build & Deliver
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
                  Our Core Services
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#536477] leading-relaxed">
                  Practical websites, conversational tools, automated workflows, and AI video content designed to solve genuine business bottlenecks.
                </p>
              </div>
              
              <Link
                to="/services"
                id="view-all-services-header-btn"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F4B] hover:text-[#00D1FF] group transition-colors duration-200"
              >
                <span>View Full Services Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </FadeIn>

          {/* Seven Service Cards with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, idx) => {
              const whatsappServiceUrl =
                'https://wa.me/966534182945?text=' +
                encodeURIComponent(
                  service.id === 'ai-video-creation'
                    ? 'Hello TITAN AI AGENCY, I am interested in AI video creation for my business.'
                    : `Hello TITAN AI AGENCY, I am interested in ${service.title} for my business.`
                );

              return (
                <FadeIn key={service.id} delay={idx * 0.08} direction="up" distance={24}>
                  <div
                    id={`home-service-card-${service.id}`}
                    className="group card-titan-light p-7 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Small blue icon above each service title with subtle hover rotation/glow */}
                      <div className="w-12 h-12 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center mb-5 group-hover:border-[#00D1FF] group-hover:-translate-y-1 group-hover:rotate-2 group-hover:shadow-[0_0_12px_rgba(0,209,255,0.3)] transition-all duration-300">
                        {getServiceIcon(service.id)}
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#071A33] mb-2.5 group-hover:text-[#0B1F4B] transition-colors duration-200">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#536477] leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        to={getServiceRoute(service.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F4B] hover:text-[#00D1FF] transition-colors duration-200 group/link"
                      >
                        <span>Learn Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF] group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>

                      <a
                        href={whatsappServiceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors duration-200 hover:-translate-y-0.5"
                        title={`Enquire on WhatsApp about ${service.title}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2} direction="up">
            <div className="mt-12 text-center">
              <Link
                to="/services"
                id="view-all-services-cta-btn"
                className="group btn-titan-secondary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Full Service Specifications</span>
                <ArrowRight className="w-4 h-4 text-[#00D1FF] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. PROCESS SECTION (From Blueprint to Production) */}
      <ProcessSection />

      {/* 5. ABOUT PREVIEW SECTION (Corporate Clean Deep Navy Section) */}
      <section id="about-preview-section" className="relative py-20 sm:py-28 bg-[#04142E] border-t border-[#00D1FF]/20 text-white overflow-hidden">
        {/* Subtle Ambient Orb */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00D1FF]/5 rounded-full blur-[140px] pointer-events-none animate-ambient-1" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#3BA9FF]/5 rounded-full blur-[130px] pointer-events-none animate-ambient-2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn direction="up">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                  Corporate Background
                </div>
              </FadeIn>

              <FadeIn delay={0.1} direction="up">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  About TITAN AI AGENCY
                </h2>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <p className="text-base sm:text-lg text-[#EAF7FF] leading-relaxed font-normal">
                  TITAN AI AGENCY was founded by <strong className="text-white font-semibold">Saad Naeem</strong> to help businesses improve their online presence and everyday operations through high-performance websites, AI tools, and automation.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-sm sm:text-base text-[#8FA0BA] leading-relaxed">
                  Rather than promoting speculative trends or making unsubstantiated claims, we focus on genuine business requirements: diagnosing where your workflows lose time, building dependable software to fix those friction points, and delivering clean, maintainable systems that your business owns completely.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="pt-2">
                  <Link
                    to="/about"
                    id="meet-titan-learn-more-btn"
                    className="group btn-titan-secondary-dark inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Learn More About TITAN & Saad Naeem</span>
                    <ArrowRight className="w-4 h-4 text-[#00D1FF] group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Practical Tenets */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.25} direction="left" distance={25}>
                <div className="card-titan-dark p-6 sm:p-8 space-y-5 bg-[#0B1F4B]/90 border border-[#00D1FF]/20 shadow-[0_20px_50px_rgba(2,10,24,0.6)]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold">
                    How We Operate
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[#00D1FF] font-bold text-xs">1</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Direct Communication</div>
                        <div className="text-xs text-[#8FA0BA]">Work directly with founder Saad Naeem without intermediary account layers.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#3BA9FF]/10 border border-[#3BA9FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[#3BA9FF] font-bold text-xs">2</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Pragmatic Engineering</div>
                        <div className="text-xs text-[#8FA0BA]">We choose technology to solve verified business constraints, never to chase hype.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[#00D1FF] font-bold text-xs">3</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Post-Launch Care</div>
                        <div className="text-xs text-[#8FA0BA]">30 days of free support to verify that everything operates flawlessly.</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                    <span>PRAGMATIC & MEASURED</span>
                    <span className="text-[#00D1FF] font-semibold">TITAN AI AGENCY</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION (Clean White) */}
      <FAQSection />

      {/* 7. FINAL CLOSING CTA SECTION (Deep Navy) */}
      <FinalCTA />

      {/* Modals for Interactive Inspection */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
