import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';

// Clearly labeled configuration variable for WhatsApp number as specified
export const YOUR_WHATSAPP_NUMBER = '+966 53 418 2945';

// Sanitized numeric format for the WhatsApp universal click-to-chat API
const WHATSAPP_API_NUMBER = YOUR_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_API_NUMBER}?text=${encodeURIComponent(
  'Hello TITAN AI AGENCY, I have a project in mind and would like to discuss digital solutions.'
)}`;

const CLOSING_WHATSAPP_URL = `https://wa.me/${WHATSAPP_API_NUMBER}?text=${encodeURIComponent(
  "Hello TITAN AI AGENCY, let's build our next business solution."
)}`;

export const ContactPage: React.FC = () => {
  usePageSEO({
    title: 'Contact Titan AI Agency | AI Automation Solutions',
    description:
      'Connect directly with Titan AI Agency via WhatsApp for custom AI automation, AI agents, workflow optimization, and business development inquiries.',
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Titan AI Agency',
      url: 'https://titanaiagency.netlify.app/contact',
      description:
        'Connect directly with Titan AI Agency via WhatsApp for custom AI automation, AI agents, workflow optimization, and business development inquiries.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+966534182945',
          contactType: 'sales',
          availableLanguage: ['English', 'Arabic'],
        },
      },
    },
  });

  return (
    <div id="contact-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20 pb-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient lighting and subtle technical grid */}
      <div className="absolute inset-0 bg-digital-grid opacity-50 pointer-events-none" />

      {/* Primary WhatsApp Contact Hero */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center w-full">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono text-[#0B1F4B] font-bold uppercase tracking-widest mb-8">
          <TitanIcon className="w-4 h-4" />
          <span>Direct Founder Contact</span>
        </div>

        {/* Heading: Let's Talk. */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#071A33] tracking-tight mb-6 leading-tight">
          Let's Talk.
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-2xl text-[#536477] font-normal leading-relaxed max-w-2xl mx-auto mb-12">
          Have a project in mind? Contact TITAN directly on WhatsApp.
        </p>

        {/* Minimal, Premium WhatsApp Card */}
        <div
          id="whatsapp-contact-card"
          className="max-w-md mx-auto rounded-3xl bg-white border border-[#3BA9FF]/25 hover:border-[#00D1FF] p-8 sm:p-10 shadow-[0_10px_40px_rgba(11,31,75,0.06)] hover:shadow-[0_15px_50px_rgba(0,209,255,0.15)] transition-all duration-300"
        >
          {/* WhatsApp Icon and Label */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
              <MessageCircle className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#536477] mb-1">
              WhatsApp
            </span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-[#071A33] tracking-wide">
              {YOUR_WHATSAPP_NUMBER}
            </span>
          </div>

          {/* Large Professional Action Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="chat-on-whatsapp-btn"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Direct status note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-emerald-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Line · Fast Response</span>
          </div>
        </div>
      </section>

      {/* Strong Closing Section (Deep Navy) */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full text-center">
        <div className="rounded-3xl bg-gradient-to-b from-[#0B1F4B] to-[#04142E] border border-[#00D1FF]/25 p-8 sm:p-12 text-white shadow-xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            LET’S BUILD YOUR NEXT <span className="text-[#00D1FF]">BUSINESS SOLUTION.</span>
          </h2>
          <p className="text-[#EAF7FF]/90 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Tell us what your business needs. We’ll help you define the right next step.
          </p>
          <a
            href={CLOSING_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-start-conversation-btn"
            className="btn-titan-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold"
          >
            <MessageCircle className="w-5 h-5 stroke-[2.5]" />
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </section>
    </div>
  );
};
