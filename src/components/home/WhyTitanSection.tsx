import React from 'react';
import { Sliders, Smartphone, MessageSquare, ShieldCheck, LifeBuoy, Bot, ArrowRight } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const WhyTitanSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  const pointIcons = [
    Sliders,
    Smartphone,
    MessageSquare,
    ShieldCheck,
    LifeBuoy,
    Bot
  ];

  return (
    <section id="why-titan" className="relative py-20 sm:py-28 bg-[#04142E] text-white border-t border-[#00D1FF]/20 overflow-hidden">
      <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <TitanIcon className="w-4 h-4" />
              <span>{t.whyTitan.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {t.whyTitan.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#8FA0BA] leading-relaxed">
              {t.whyTitan.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyTitan.points.map((pt, idx) => {
            const IconComp = pointIcons[idx] || Sliders;
            return (
              <FadeIn key={pt.num} delay={idx * 0.07} direction="up" distance={16}>
                <div className="group card-titan-dark p-7 rounded-2xl flex flex-col justify-between h-full bg-[#0B1F4B]/50 border border-white/10 hover:border-[#00D1FF]/50 hover:-translate-y-1 transition-all duration-220 text-start">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#00D1FF]">
                        {pt.num} — {language === 'ar' ? 'المبدأ' : 'PRINCIPLE'}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:border-[#00D1FF] group-hover:bg-[#00D1FF]/10 transition-colors">
                        <IconComp className="w-5 h-5 text-[#00D1FF]" />
                      </div>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white mb-2 tracking-tight group-hover:text-[#00D1FF] transition-colors">
                      {pt.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#EAF7FF] mb-2 leading-snug">
                      {pt.desc}
                    </p>

                    <p className="text-xs text-[#8FA0BA] leading-relaxed font-normal">
                      {pt.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Founder Direct Scoping CTA Banner */}
        <FadeIn delay={0.4} direction="up" distance={16}>
          <div className="mt-10 card-titan-dark p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B1F4B] to-[#04142E] border border-[#00D1FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-start">
            <div className="space-y-1 max-w-xl">
              <span className="font-mono text-xs font-bold text-[#00D1FF] block uppercase tracking-wider">
                {language === 'ar' ? 'تواصل تنفيذي مباشر' : 'Direct Executive Scoping'}
              </span>
              <h4 className="font-display font-bold text-xl text-white">
                {language === 'ar' ? 'تواصل مباشرة مع المؤسس سعد' : 'Work Directly With Saad Naeem'}
              </h4>
              <p className="text-xs sm:text-sm text-[#8FA0BA] leading-relaxed">
                {language === 'ar'
                  ? 'محادثة واضحة وسريعة لتحديد متطلبات مشروعك، بدون طبقات وسيطة أو إجراءات معقدة.'
                  : 'Clear, direct collaboration on your project requirements from day one with zero agency bureaucracy.'}
              </p>
            </div>

            <Link
              to="/contact"
              className="btn-titan-primary shrink-0 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>{language === 'ar' ? 'ابدأ محادثة المشروع' : 'Start a Conversation'}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
