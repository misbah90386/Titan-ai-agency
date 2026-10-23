import React, { useState } from 'react';
import { Bot, PhoneCall, Workflow, Video, Search, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';
import { useQuote } from '../../context/QuoteContext';

export const AISolutionsSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const { openQuote } = useQuote();

  const solutionIcons: Record<string, React.ElementType> = {
    'ai-customer-support-agents': Bot,
    'ai-call-agents': PhoneCall,
    'ai-business-automation': Workflow,
    'ai-video-creation': Video,
    'seo-optimization-service': Search
  };

  const handleSelectSolution = (sol: { id: string; title: string; pricing: string }) => {
    openQuote({
      id: sol.id,
      name: sol.title,
      price: sol.pricing
    });
  };

  return (
    <section
      id="ai-solutions"
      data-section="ai-solutions"
      className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              <span>{t.pricing.aiSolutions.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {t.pricing.aiSolutions.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              {t.pricing.aiSolutions.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 5 AI Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {t.pricing.aiSolutions.cards.map((sol, idx) => {
            const IconComp = solutionIcons[sol.id] || Bot;
            const isWorking = sol.isWorkingService;

            return (
              <FadeIn key={sol.id} delay={idx * 0.06} direction="up" distance={16}>
                <div
                  id={`ai-solution-card-${sol.id}`}
                  className="card-titan-light rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all duration-200 text-start group bg-white"
                >
                  <div>
                    {/* Top Status & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] group-hover:scale-105 group-hover:bg-sky-100/80 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>

                      {/* Explicit Development Status Tag */}
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                          isWorking
                            ? 'bg-sky-50 text-[#0284C7] border border-sky-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {sol.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-[#071A33] mb-2.5 group-hover:text-[#0284C7] transition-colors">
                      {sol.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {sol.desc}
                    </p>
                  </div>

                  {/* Pricing Tag & CTA Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                        {language === 'ar' ? 'التسعير' : 'Pricing'}
                      </span>
                      <span className="font-display font-bold text-sm text-[#071A33]">
                        {sol.pricing}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectSolution(sol)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>{language === 'ar' ? 'طلب تسعيرة' : 'Get Quote'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Engineering Notice Callout */}
        <FadeIn delay={0.3} direction="up" distance={14}>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5 max-w-4xl mx-auto text-start shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t.pricing.aiSolutions.notice}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
