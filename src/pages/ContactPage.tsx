import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';

// Clearly labeled configuration variable for WhatsApp number as specified
export const YOUR_WHATSAPP_NUMBER = '+966 53 418 2945';

// Sanitized numeric format for the WhatsApp universal click-to-chat API
const WHATSAPP_API_NUMBER = YOUR_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_API_NUMBER}?text=${encodeURIComponent(
  'Hello TITAN AI AGENCY, I have a project in mind and would like to discuss digital solutions.'
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
    <div id="contact-page-root" className="min-h-screen bg-[#06080d] text-slate-100 pt-28 pb-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient lighting and subtle technical grid */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center w-full">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 uppercase tracking-widest mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Contact</span>
        </div>

        {/* Heading: Let's Talk. */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Let's Talk.
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
          Have a project in mind? Contact TITAN directly on WhatsApp.
        </p>

        {/* Minimal, Premium WhatsApp Card */}
        <div
          id="whatsapp-contact-card"
          className="max-w-md mx-auto rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-sm transition-all duration-300"
        >
          {/* WhatsApp Icon and Label */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
              <MessageCircle className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-1">
              WhatsApp
            </span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wide">
              {YOUR_WHATSAPP_NUMBER}
            </span>
          </div>

          {/* Large Professional Action Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="chat-on-whatsapp-btn"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base sm:text-lg shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Subtle status indicator */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Line • Fast Response</span>
          </div>
        </div>
      </section>
    </div>
  );
};
