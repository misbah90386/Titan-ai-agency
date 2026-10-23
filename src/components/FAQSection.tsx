import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FadeIn } from './motion/MotionComponents';
import { useLanguage } from '../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMessage = language === 'ar'
    ? 'مرحباً وكالة تيتان، لدي استفسار حول خدماتكم.'
    : 'Hello TITAN AI AGENCY, I have a question regarding your services.';

  const whatsappUrl = 'https://wa.me/966534182945?text=' + encodeURIComponent(whatsappMessage);

  return (
    <section id="faqs" className="relative py-12 sm:py-20 lg:py-28 bg-[#FFFFFF] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <FadeIn direction="up">
          <div className="text-center mb-8 sm:mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#3BA9FF]" />
              <span>{t.faqs.badge}</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {t.faqs.heading}
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#536477] leading-relaxed max-w-2xl mx-auto">
              {t.faqs.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.faqs.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.04} direction="up" distance={14}>
                <div
                  className="card-titan-light overflow-hidden transition-all text-start"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-start px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#071A33] leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EAF7FF] text-[#00D1FF]' : 'bg-slate-100 text-[#536477]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#536477] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Prompt to contact directly */}
        <div className="mt-12 text-center pt-8 border-t border-slate-200/80">
          <p className="text-sm text-[#536477] mb-4">
            {language === 'ar'
              ? 'هل لديك متطلب تقني خاص أو استفسار محدد لم تجد إجابته هنا؟'
              : 'Have a specialized question or unique technical requirement?'}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'ar' ? 'اسألنا مباشرة عبر واتساب' : 'Ask Directly on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
