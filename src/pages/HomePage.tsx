import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, Cpu, PhoneCall, MessageSquare, Workflow, Layers, Video, MessageCircle, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, Network, Zap, BarChart, Users } from 'lucide-react';
import { TitanHeroDashboard } from '../components/home/TitanHeroDashboard';
import { TitanServicesSection } from '../components/home/TitanServicesSection';
import { FeaturedWork } from '../components/FeaturedWork';
import { TitanInActionSection } from '../components/home/TitanInActionSection';
import { HowTitanWorksSection } from '../components/home/HowTitanWorksSection';
import { IndustryUseCasesSection } from '../components/home/IndustryUseCasesSection';
import { WhyTitanSection } from '../components/home/WhyTitanSection';
import { SmartNeedsSelector } from '../components/home/SmartNeedsSelector';
import { PostContactTrustSection } from '../components/home/PostContactTrustSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { ServiceModal } from '../components/ServiceModal';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn, AnimatedNumber, FloatingParticles } from '../components/motion/MotionComponents';

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
        return (
          <div className="relative flex items-center justify-center">
            <Globe className="w-5 h-5 text-[#00D1FF]" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
          </div>
        );
      case 'seo-optimization':
      case 'seo':
        return (
          <div className="relative flex items-center justify-center">
            <Search className="w-5 h-5 text-[#00D1FF]" />
            <div className="absolute -bottom-1 flex items-end gap-0.5 h-1.5">
              <span className="w-0.5 bg-[#00D1FF] rounded-t-sm animate-bar-1" />
              <span className="w-0.5 bg-[#3BA9FF] rounded-t-sm animate-bar-2" />
              <span className="w-0.5 bg-[#00D1FF] rounded-t-sm animate-bar-3" />
            </div>
          </div>
        );
      case 'ai-agents':
        return (
          <div className="relative flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#00D1FF] animate-node-pulse" />
          </div>
        );
      case 'ai-call-agents':
      case 'ai-voice-agents':
        return (
          <div className="relative flex items-center justify-center gap-0.5">
            <PhoneCall className="w-4 h-4 text-[#00D1FF]" />
            <div className="flex items-center gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 bg-[#00D1FF] rounded-full animate-wave-1" />
              <span className="w-0.5 bg-[#3BA9FF] rounded-full animate-wave-2" />
              <span className="w-0.5 bg-[#00D1FF] rounded-full animate-wave-3" />
            </div>
          </div>
        );
      case 'ai-video-creation':
      case 'ai-video':
        return (
          <div className="relative flex items-center justify-center">
            <Video className="w-5 h-5 text-[#00D1FF]" />
            <span className="absolute inset-0 rounded-full border border-[#00D1FF]/40 animate-ping opacity-75" />
          </div>
        );
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
      
      {/* 1. HERO SECTION (Pure White Base with Soft Light-Blue Gradients & Titan AI Command Dashboard) */}
      <section id="hero-section" className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white text-[#071A33]">
        {/* Minimal Light Digital Grid Pattern */}
        <div className="absolute inset-0 bg-digital-grid opacity-60 pointer-events-none" />
        
        {/* Very soft light-blue gradients & subtle ambient glow orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-[#00D1FF]/10 rounded-full blur-[100px] pointer-events-none animate-ambient-1" />
        <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#3BA9FF]/10 rounded-full blur-[110px] pointer-events-none animate-ambient-2" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column (6 cols): Headline, Copy, Buttons, Trust Element */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
              {/* Badge: "AI Solutions for Modern Businesses" */}
              <FadeIn delay={0.1} direction="none" duration={0.5}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-xs sm:text-[13px] font-semibold text-[#0284C7] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_8px_#00D1FF] animate-pulse" />
                  <span>AI Solutions for Modern Businesses</span>
                </div>
              </FadeIn>

              {/* Main Headline: "AI BUILT FOR BUSINESS." */}
              <FadeIn delay={0.2} direction="up" distance={25} duration={0.7}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.2rem] font-black text-[#071A33] tracking-tight leading-[1.06]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00D1FF]">AI</span> BUILT FOR{' '}
                  <br className="hidden sm:inline" />
                  BUSINESS.
                </h1>
              </FadeIn>

              {/* Supporting Text */}
              <FadeIn delay={0.3} direction="up" distance={20} duration={0.7}>
                <p className="text-base sm:text-lg lg:text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-xl">
                  Websites, AI agents, voice AI and intelligent systems designed to help businesses grow, automate and operate smarter.
                </p>
              </FadeIn>

              {/* Buttons: Primary "Start Your Project" & Secondary "Explore Services" */}
              <FadeIn delay={0.4} direction="up" distance={15} duration={0.7}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                  <a
                    href={heroWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-start-project-btn"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00D1FF] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-base font-bold shadow-[0_4px_18px_rgba(2,132,199,0.28)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>

                  <Link
                    to="/services"
                    id="hero-explore-services-btn"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-sky-50/60 border-2 border-sky-200 hover:border-[#0284C7] text-[#071A33] hover:text-[#0284C7] text-base font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </FadeIn>

              {/* Trust Element below the buttons */}
              <FadeIn delay={0.5} direction="up" distance={10} duration={0.6}>
                <div className="pt-2 text-xs sm:text-sm font-medium text-slate-500 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Websites</span>
                  <span className="text-slate-300">•</span>
                  <span>AI Agents</span>
                  <span className="text-slate-300">•</span>
                  <span>Voice AI</span>
                  <span className="text-slate-300">•</span>
                  <span>Automation</span>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (6 cols): Titan AI Command / Dashboard Visualization */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <FadeIn delay={0.3} direction="up" distance={25} duration={0.8}>
                <TitanHeroDashboard />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK SECTION (Light Case Studies Portfolio) */}
      <FeaturedWork />

      {/* 3. CORE SERVICES SECTION (Clean White / Light Ice Blue) */}
      <TitanServicesSection />

      {/* 4. SEE TITAN IN ACTION (Interactive Demo Previews) */}
      <TitanInActionSection />

      {/* 5. HOW TITAN WORKS (Connected 4-Step Timeline) */}
      <HowTitanWorksSection />

      {/* 6. INDUSTRY USE CASES (Built Around Your Business) */}
      <IndustryUseCasesSection />

      {/* 7. WHY TITAN (5 Core Business Principles) */}
      <WhyTitanSection />

      {/* 8. WHAT ARE YOU TRYING TO IMPROVE (Smart Interactive Selector) */}
      <SmartNeedsSelector />

      {/* 9. TRUST & POST-CONTACT FLOW */}
      <PostContactTrustSection />

      {/* 10. ABOUT PREVIEW SECTION (Corporate Clean Deep Navy Section) */}
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
