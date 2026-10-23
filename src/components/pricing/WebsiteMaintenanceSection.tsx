import React, { useState } from 'react';
import { LifeBuoy, Check, AlertCircle, ArrowRight, Shield } from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';
import { useQuote } from '../../context/QuoteContext';

export const WebsiteMaintenanceSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const { openQuote } = useQuote();

  const main = t.pricing.maintenance;

  const handleOpenMaintenanceQuote = () => {
    openQuote({
      id: 'website-maintenance',
      name: language === 'ar' ? 'صيانة المواقع والدعم الفني (100 ريال / شهرياً)' : 'Website Maintenance (From SAR 100/mo)',
      price: language === 'ar' ? '100 ريال / شهرياً' : 'SAR 100 / Mo'
    });
  };

  return (
    <section
      id="maintenance"
      data-section="website-maintenance"
      className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>{main.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {main.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              {main.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Highlighted Maintenance Card */}
        <FadeIn delay={0.1} direction="up" distance={18}>
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white via-white to-sky-50/30 border-2 border-sky-200 p-8 sm:p-12 shadow-[0_12px_36px_-10px_rgba(2,132,199,0.14)] text-start relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-100">
              {/* Left Column: Plan Title & Price */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                  {language === 'ar' ? 'خطة الدعم الفني والصيانة' : 'Ongoing Website Support'}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33]">
                  {main.planTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  {main.desc}
                </p>
              </div>

              {/* Right Column: Price Display & CTA */}
              <div className="lg:col-span-5 flex flex-col sm:items-end justify-center">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  {t.pricing.startingFrom}
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#071A33] tracking-tight">
                    100
                  </span>
                  <span className="text-base font-bold text-slate-600 font-mono">
                    {t.pricing.currency} {main.period}
                  </span>
                </div>
                <div className="mt-4 w-full sm:w-auto">
                  <button
                    type="button"
                    id="request-maintenance-btn"
                    onClick={handleOpenMaintenanceQuote}
                    className="w-full sm:w-auto btn-titan-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md"
                  >
                    <span>{main.cta}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Checklist of Included Services */}
            <div className="pt-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#071A33] font-bold block mb-4">
                {language === 'ar' ? 'الخدمات المحتمل شمولها وفقاً للاتفاقية المعتمدة:' : 'Potential Included Services (Subject to Agreed Contract):'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {main.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm text-slate-700 shadow-2xs"
                  >
                    <div className="w-4 h-4 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Crucial Section 3 Notice Note (Explicit contract terms) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200/90 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed space-y-1">
                <p className="font-semibold text-[#071A33]">
                  {main.notice}
                </p>
                <p className="text-slate-500 font-normal">
                  {language === 'ar'
                    ? 'لا نقدم وعوداً بتعديلات غير محدودة أو ضمان جاهزية مطلقة 100%. نحدد استجابات واضحة وحصص تحديث محددة لكل عميل.'
                    : 'We do not advertise unlimited changes or guaranteed uptime. Maintenance agreements define clear response windows and update allotments.'}
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
