import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CinematicVideoHero } from '../components/home/CinematicVideoHero';
import { SimplifiedServicesSection } from '../components/home/SimplifiedServicesSection';
import { FeaturedWork } from '../components/FeaturedWork';
import { PricingPackagesSection } from '../components/pricing/PricingPackagesSection';
import { WhyTitanSection } from '../components/home/WhyTitanSection';
import { HowTitanWorksSection } from '../components/home/HowTitanWorksSection';
import { FAQSection } from '../components/FAQSection';
import { HomepageContactSection } from '../components/home/HomepageContactSection';
import { QuoteModal } from '../components/pricing/QuoteModal';
import { usePageSEO } from '../hooks/usePageSEO';

export const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  usePageSEO({
    title: language === 'ar'
      ? 'وكالة تيتان للذكاء الاصطناعي | نبني مواقع إلكترونية وحلول ذكاء اصطناعي لأعمالك'
      : 'Titan AI Agency | We Build Websites & AI Solutions for Your Business',
    description: language === 'ar'
      ? 'مواقع احترافية، ومساعدين أذكياء، وحلول رقمية لمساعدة عملك على الوصول إلى المزيد من العملاء في المملكة العربية السعودية.'
      : 'Professional websites, AI assistants, and digital solutions to help your business connect with more customers in Saudi Arabia.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Titan AI Agency',
      url: 'https://titan-ai-agency.vercel.app/',
      logo: 'https://titan-ai-agency.vercel.app/titan-logo.png',
      description:
        'Professional websites, AI assistants, and digital solutions to help your business connect with more customers.',
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
      {/* 1. HERO — What Titan does */}
      <CinematicVideoHero onGetQuote={() => setIsQuoteModalOpen(true)} />

      {/* 2. THREE MAIN SERVICE CATEGORIES */}
      <SimplifiedServicesSection />

      {/* 3. PORTFOLIO — See our work */}
      <FeaturedWork />

      {/* 4. SIMPLE WEBSITE PRICING */}
      <PricingPackagesSection />

      {/* 5. WHY CHOOSE TITAN */}
      <WhyTitanSection />

      {/* 6. HOW IT WORKS */}
      <HowTitanWorksSection />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. CONTACT */}
      <HomepageContactSection />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialPackage={{
          id: 'free-quote-inquiry',
          name: language === 'ar' ? 'استشارة وعرض سعر مجاني' : 'Free Project Quote'
        }}
      />
    </div>
  );
};
