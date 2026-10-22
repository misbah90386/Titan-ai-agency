import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageSEO } from '../hooks/usePageSEO';
import { PricingPackagesSection } from '../components/pricing/PricingPackagesSection';
import { AISolutionsSection } from '../components/pricing/AISolutionsSection';
import { WebsiteMaintenanceSection } from '../components/pricing/WebsiteMaintenanceSection';
import { TrustApproachSection } from '../components/pricing/TrustApproachSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn } from '../components/motion/MotionComponents';

export const PricingPage: React.FC = () => {
  const { language, t } = useLanguage();

  usePageSEO({
    title: language === 'ar'
      ? 'باقات وأسعار المواقع والذكاء الاصطناعي | وكالة تيتان'
      : 'Professional Website Packages & Pricing | Titan AI Agency',
    description: language === 'ar'
      ? 'باقات واضحة للمواقع الإلكترونية تبدأ من 500 ريال، وحلول ذكاء اصطناعي مخصصة، وخطط صيانة شهرية تبدأ من 100 ريال للشركات في السعودية.'
      : 'Transparent website packages starting from SAR 500, custom AI solutions, and monthly website care plans from SAR 100/mo for businesses in Saudi Arabia.',
    canonicalPath: '/pricing',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Titan AI Agency Pricing',
      url: 'https://titan-ai-agency.vercel.app/pricing',
      description:
        'Professional website packages, starting from SAR 500, AI automation, and monthly website maintenance for Saudi businesses.',
      provider: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        telephone: '+966534182945',
        url: 'https://titan-ai-agency.vercel.app/'
      }
    }
  });

  return (
    <div id="pricing-page-root" className="min-h-screen bg-[#FFFFFF] text-[#071A33] pt-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#04142E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest mb-6">
              <TitanIcon className="w-4 h-4" />
              <span>{t.pricing.badge}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up" distance={16}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              {t.pricing.heading}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <p className="text-base sm:text-xl text-[#EAF7FF]/90 max-w-3xl mx-auto leading-relaxed font-normal">
              {t.pricing.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Professional Website Packages (Section 1 & 4) */}
      <PricingPackagesSection />

      {/* 3. AI Solutions Section (Section 2) */}
      <AISolutionsSection />

      {/* 4. Website Maintenance Care Plan (Section 3) */}
      <WebsiteMaintenanceSection />

      {/* 5. Trust Approach & Engineering Standards (Section 7) */}
      <TrustApproachSection />

      {/* 6. Frequently Asked Questions (Section 6) */}
      <FAQSection />

      {/* 7. Final Closing Call-to-Action */}
      <FinalCTA />

    </div>
  );
};
