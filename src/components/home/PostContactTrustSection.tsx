import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, FileCheck, Code2, Rocket } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';

export const PostContactTrustSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Review',
      desc: 'We review your request, industry context, and operational friction.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Consultation',
      desc: 'We discuss your business, goals, and specific technical requirements.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Scope & Proposal',
      desc: 'We propose the right solution, transparent price, and project scope.',
      icon: FileCheck
    },
    {
      num: '04',
      title: 'Development',
      desc: 'After your approval, dedicated engineering and development begins.',
      icon: Code2
    },
    {
      num: '05',
      title: 'Launch & Support',
      desc: 'We test thoroughly, launch the system, and support you for 30 days free.',
      icon: Rocket
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20 overflow-hidden">
      <div className="absolute inset-0 bg-digital-grid-dark opacity-30 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <TitanIcon className="w-4 h-4" />
              <span>Transparent Client Journey</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
              WHAT HAPPENS AFTER YOU CONTACT TITAN?
            </h2>

            <p className="text-sm sm:text-base text-[#8FA0BA] leading-relaxed">
              We eliminate uncertainty from day one. Here is exactly what happens when you reach out to our team.
            </p>
          </div>
        </FadeIn>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <FadeIn key={st.num} delay={idx * 0.08} direction="up" distance={15}>
                <div className="p-5 rounded-2xl bg-[#0B1F4B]/50 border border-white/10 hover:border-[#00D1FF]/40 flex flex-col justify-between h-full transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#00D1FF]">
                        STEP {st.num}
                      </span>
                      <IconComp className="w-4 h-4 text-[#00D1FF]" />
                    </div>

                    <h3 className="font-display font-bold text-base text-white mb-2">
                      {st.title}
                    </h3>

                    <p className="text-xs text-[#8FA0BA] leading-relaxed">
                      {st.desc}
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
