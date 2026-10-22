import React from 'react';
import {
  FileText,
  Code2,
  Smartphone,
  CreditCard,
  CheckCircle2,
  LifeBuoy,
  Target,
  ShieldCheck
} from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';

export const TrustApproachSection: React.FC = () => {
  const { t } = useLanguage();

  const approachIcons = [
    FileText,
    Code2,
    Smartphone,
    CreditCard,
    CheckCircle2,
    LifeBuoy,
    Target
  ];

  return (
    <section
      id="trust-approach"
      data-section="trust-approach"
      className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.pricing.trustApproach.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {t.pricing.trustApproach.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              {t.pricing.trustApproach.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 7 Engineering & Trust Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.pricing.trustApproach.principles.map((pr, idx) => {
            const IconComp = approachIcons[idx] || CheckCircle2;

            return (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={16}>
                <div className="card-titan-light rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all duration-200 text-start group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] mb-5 group-hover:scale-105 group-hover:bg-sky-100/80 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#071A33] mb-2.5 group-hover:text-[#0284C7] transition-colors">
                      {pr.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
