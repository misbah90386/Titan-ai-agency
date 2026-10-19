import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, Cpu, PhoneCall, MessageSquare, Workflow, Layers, Video, MessageCircle, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, Network, Zap, BarChart, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CinematicVideoHero } from '../components/home/CinematicVideoHero';
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
  const { language, isRtl, t } = useLanguage();

  usePageSEO({
    title: language === 'ar' ? 'وكالة تيتان للذكاء الاصطناعي | حلول وأتمتة رقمية للأعمال' : 'Titan AI Agency | AI Automation & AI Solutions for Businesses',
    description: language === 'ar'
      ? 'نطوّر مواقع إلكترونية ومساعدين بالذكاء الاصطناعي ووكلاء للمكالمات وحلول أتمتة تساعدك على عرض خدماتك والرد على الاستفسارات وتقليل المهام المتكررة.'
      : 'TITAN AI AGENCY builds AI-powered websites, search optimization, AI agents, AI call agents, and AI video content that help businesses scale enquiries, respond faster, and reduce repetitive work.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Titan AI Agency',
      url: 'https://titan-ai-agency.vercel.app/',
      logo: 'https://titan-ai-agency.vercel.app/titan-logo.png',
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

  return (
    <div id="home-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33]">
      
      {/* 1. CINEMATIC VIDEO HERO SECTION */}
      <CinematicVideoHero />

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
            <div className="lg:col-span-7 space-y-6 text-start">
              <FadeIn direction="up">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                  {t.aboutPreview.badge}
                </div>
              </FadeIn>

              <FadeIn delay={0.1} direction="up">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {t.aboutPreview.heading}
                </h2>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <p className="text-base sm:text-lg text-[#EAF7FF] leading-relaxed font-normal">
                  {t.aboutPreview.intro}
                </p>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-sm sm:text-base text-[#8FA0BA] leading-relaxed">
                  {t.aboutPreview.desc}
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="pt-2">
                  <Link
                    to="/about"
                    id="meet-titan-learn-more-btn"
                    className="group btn-titan-secondary-dark inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>{t.aboutPreview.cta}</span>
                    <ArrowRight className={`w-4 h-4 text-[#00D1FF] ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-200`} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Practical Tenets */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.25} direction={isRtl ? 'right' : 'left'} distance={16}>
                <div className="card-titan-dark p-6 sm:p-8 space-y-5 bg-[#0B1F4B]/90 border border-[#00D1FF]/20 shadow-[0_20px_50px_rgba(2,10,24,0.6)] text-start">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold">
                    {t.aboutPreview.cardTitle}
                  </div>

                  <div className="space-y-4">
                    {t.aboutPreview.tenets.map((tenet) => (
                      <div key={tenet.num} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/10 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[#00D1FF] font-bold text-xs">{tenet.num}</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{tenet.title}</div>
                          <div className="text-xs text-[#8FA0BA]">{tenet.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                    <span>{language === 'ar' ? 'منهجية عملية وموثوقة' : 'PRAGMATIC & MEASURED'}</span>
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
