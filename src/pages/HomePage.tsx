import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, Cpu, PhoneCall, MessageSquare, Workflow, Layers, Video, MessageCircle, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, Network } from 'lucide-react';
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
      'TITAN AI AGENCY builds AI-powered websites, search optimization, AI agents, AI call agents, and AI video content that help businesses scale enquiries, respond faster, and reduce repetitive work.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Titan AI Agency',
      url: 'https://titanaiagency.netlify.app/',
      logo: 'https://titanaiagency.netlify.app/titan-logo.png',
      description:
        'Titan AI Agency provides AI-powered websites, SEO, custom AI agents, AI call agents, and AI video creation for businesses.',
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
      case 'ai-websites':
      case 'websites':
        return <Globe className="w-5 h-5 text-[#00D1FF]" />;
      case 'seo-optimization':
      case 'seo':
        return <Search className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-agents':
        return <Cpu className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-call-agents':
      case 'ai-voice-agents':
        return <PhoneCall className="w-5 h-5 text-[#00D1FF]" />;
      case 'ai-video-creation':
      case 'ai-video':
        return <Video className="w-5 h-5 text-[#00D1FF]" />;
      default:
        return <Layers className="w-5 h-5 text-[#00D1FF]" />;
    }
  };

  const heroWhatsappUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent('Hello TITAN AI AGENCY, I would like to discuss a project for my business.');

  const getServiceRoute = (id: string): string => {
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
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold mb-3">
                  <TitanIcon className="w-3.5 h-3.5 text-[#00D1FF]" />
                  <span>5 Core Technology Capabilities</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
                  High-Impact AI Solutions Built for Business Growth
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#536477] leading-relaxed">
                  Five interconnected technology pillars engineered to eliminate operational bottlenecks, capture every customer opportunity, and scale your brand authority.
                </p>
              </div>
              
              <Link
                to="/services"
                id="view-all-services-header-btn"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F4B] hover:text-[#00D1FF] group transition-colors duration-200 shrink-0"
              >
                <span>Full Services Specification</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </FadeIn>

          {/* 5 Core Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_DATA.map((service, idx) => {
              const whatsappServiceUrl =
                'https://wa.me/966534182945?text=' +
                encodeURIComponent(
                  `Hello TITAN AI AGENCY, I am interested in ${service.title} (${service.ctaText}) for my business.`
                );

              return (
                <FadeIn key={service.id} delay={idx * 0.08} direction="up" distance={24}>
                  <div
                    id={`home-service-card-${service.id}`}
                    className="group card-titan-light p-7 sm:p-8 flex flex-col justify-between h-full hover:-translate-y-2 hover:scale-[1.015] hover:border-[#00D1FF]/60 hover:shadow-[0_16px_36px_rgba(0,209,255,0.18)] transition-all duration-300"
                  >
                    <div>
                      {/* Service Header: Number + Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center group-hover:border-[#00D1FF] group-hover:-translate-y-0.5 group-hover:shadow-[0_0_14px_rgba(0,209,255,0.35)] transition-all duration-300">
                          {getServiceIcon(service.id)}
                        </div>
                        <span className="font-mono text-xs font-bold text-[#8FA0BA] tracking-widest uppercase">
                          0{idx + 1} // CORE
                        </span>
                      </div>

                      {/* Title & Positioning Headline */}
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A33] mb-2 group-hover:text-[#0B1F4B] transition-colors duration-200">
                        {service.title}
                      </h3>

                      {service.positioning && (
                        <p className="text-xs sm:text-[13px] font-semibold text-[#00D1FF] mb-3 leading-snug">
                          {service.positioning}
                        </p>
                      )}

                      <p className="text-sm text-[#536477] leading-relaxed mb-5">
                        {service.shortDescription}
                      </p>

                      {/* Capabilities Highlights */}
                      <div className="mb-5 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#8FA0BA] font-bold mb-2">
                          Capabilities Include:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.subcategories.slice(0, 4).map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md bg-[#F8FAFF] border border-slate-200/90 text-[11px] font-medium text-[#071A33]"
                            >
                              {sub}
                            </span>
                          ))}
                          {service.subcategories.length > 4 && (
                            <span className="px-2 py-1 rounded-md bg-[#EAF7FF] text-[#0B1F4B] text-[11px] font-mono font-semibold">
                              +{service.subcategories.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Problems Solved Tagline */}
                      {service.problemsSolved && service.problemsSolved.length > 0 && (
                        <div className="mb-6 p-3 rounded-xl bg-[#F8FAFF] border border-slate-200/70">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold mb-1">
                            Solves Common Bottlenecks:
                          </div>
                          <p className="text-xs text-[#536477] line-clamp-2">
                            {service.problemsSolved.slice(0, 2).join(' · ')}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Zone: Primary Specific CTA + WhatsApp Direct */}
                    <div className="pt-4 border-t border-slate-100 space-y-2.5">
                      <Link
                        to={getServiceRoute(service.id)}
                        id={`home-cta-${service.id}`}
                        className="btn-titan-primary w-full py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn shadow-[0_3px_12px_rgba(0,209,255,0.22)] hover:shadow-[0_0_20px_rgba(0,209,255,0.45)] hover:-translate-y-0.5 transition-all duration-250"
                      >
                        <span>{service.ctaText || 'LEARN DETAILS'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-[5px] transition-transform duration-250" />
                      </Link>

                      <div className="flex items-center justify-between text-xs px-1">
                        <Link
                          to={getServiceRoute(service.id)}
                          className="text-[#0B1F4B] hover:text-[#00D1FF] font-semibold transition-colors duration-200"
                        >
                          Explore Scope & Specs
                        </Link>

                        <a
                          href={whatsappServiceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-500 transition-colors duration-200 hover:-translate-y-0.5"
                          title={`WhatsApp consultation for ${service.title}`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Connected AI Ecosystem: Making the 5 services feel unified and powerful */}
          <FadeIn delay={0.2} direction="up">
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#04142E] text-white border border-[#00D1FF]/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-[140px] pointer-events-none" />
              
              <div className="relative max-w-4xl mx-auto text-center space-y-4 mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
                  <Network className="w-3.5 h-3.5" />
                  <span>The TITAN Connected Ecosystem</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  How TITAN’s 5 Core Services Connect to Power Your Business
                </h3>
                <p className="text-sm sm:text-base text-[#8FA0BA] leading-relaxed">
                  These five technologies are not isolated tools. Together, they create an automated growth engine from first discovery to closed client.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <div className="p-5 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-2.5 text-left">
                  <div className="text-xs font-mono text-[#00D1FF] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D1FF]" />
                    <span>01. Attract & Discover</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    AI Websites + Search Optimization
                  </h4>
                  <p className="text-xs text-[#8FA0BA] leading-relaxed">
                    High-ranking SEO visibility brings qualified visitors to your AI-powered website designed for instant conversion and brand authority.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-2.5 text-left">
                  <div className="text-xs font-mono text-[#3BA9FF] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3BA9FF]" />
                    <span>02. Engage & Capture</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    Custom AI Agents + AI Call Agents
                  </h4>
                  <p className="text-xs text-[#8FA0BA] leading-relaxed">
                    24/7 autonomous agents answer questions, qualify leads on web and phone, book appointments, and smoothly transfer to human staff.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-2.5 text-left">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>03. Convert & Scale</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    AI Video Creation + Automation
                  </h4>
                  <p className="text-xs text-[#8FA0BA] leading-relaxed">
                    High-impact marketing videos showcase products and explain services across social channels, compounding organic customer acquisition.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] text-center">
                <Link
                  to="/services"
                  id="view-all-services-cta-btn"
                  className="group btn-titan-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold shadow-[0_4px_16px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)]"
                >
                  <span>Explore All 5 Service Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
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
