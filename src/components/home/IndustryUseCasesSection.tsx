import React, { useState } from 'react';
import { Building, UtensilsCrossed, Car, Briefcase, ArrowRight, CheckCircle2, MessageCircle, Star } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';

export const IndustryUseCasesSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('real-estate');

  const industryIcons: Record<string, React.ElementType> = {
    'real-estate': Building,
    'restaurants': UtensilsCrossed,
    'car-rental': Car,
    'smes': Briefcase,
  };

  const industries = t.useCases.industries;
  const current = industries.find((i) => i.id === activeTab) || industries[0];
  const CurrentIcon = industryIcons[current.id] || Building;

  const whatsappMessage = language === 'ar'
    ? `مرحباً وكالة تيتان، أنا أدير عملاً في قطاع ${current.name} وأود مناقشة الحلول الرقمية المناسبة لنا.`
    : `Hello TITAN AI AGENCY, I operate a business in ${current.name} and would like to discuss digital solutions.`;

  const whatsappUrl = 'https://wa.me/966534182945?text=' + encodeURIComponent(whatsappMessage);

  return (
    <section id="industry-use-cases" className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 text-[#071A33] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <TitanIcon className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>{t.useCases.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              {t.useCases.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              {t.useCases.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Industry Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {industries.map((ind) => {
            const IconComp = industryIcons[ind.id] || Building;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#04142E] text-white shadow-md border border-[#00D1FF]/40 -translate-y-0.5'
                    : 'bg-white hover:bg-slate-50 text-[#536477] border border-slate-200/90'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-[#00D1FF]' : 'text-slate-400'}`} />
                <span>{ind.name}</span>
                {ind.isFeatured && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive ? 'bg-[#00D1FF] text-[#04142E]' : 'bg-sky-100 text-[#0284C7]'
                  }`}>
                    {ind.highlightBadge || (language === 'ar' ? 'خبرة متخصصة' : 'Specialized')}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <FadeIn key={current.id} direction="up" distance={15}>
          <div className="card-titan-light p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto border border-[#00D1FF]/25 shadow-xl text-start">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  <CurrentIcon className="w-6 h-6 text-[#00D1FF]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold block">
                      {current.name}
                    </span>
                    {current.isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        {current.highlightBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A33] mt-0.5">
                    {current.headline}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#536477] leading-relaxed mb-6 font-normal">
              {current.desc}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {current.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFF] border border-slate-200/80 text-xs sm:text-sm text-[#071A33]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1FF] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Zone */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8FA0BA] font-mono">
                {language === 'ar' ? 'حلول مهيأة لطبيعة عملك في المملكة' : 'Engineered around your operational model'}
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'ar' ? 'ناقش احتياجات منشأتك' : 'DISCUSS YOUR BUSINESS'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
