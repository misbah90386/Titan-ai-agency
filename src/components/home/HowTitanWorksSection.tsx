import React from 'react';
import { Search, Compass, Cpu, Rocket, ArrowRight } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';

export const HowTitanWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'We learn about your business, customers, challenges and goals.',
      icon: Search,
      badge: 'Discovery Sprint'
    },
    {
      num: '02',
      title: 'PLAN',
      desc: 'We identify the right AI, website, search or content solution.',
      icon: Compass,
      badge: 'Architecture'
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'TITAN designs, develops and integrates the solution.',
      icon: Cpu,
      badge: 'Engineering'
    },
    {
      num: '04',
      title: 'LAUNCH & SUPPORT',
      desc: 'We test the system, launch it and provide support after delivery.',
      icon: Rocket,
      badge: 'Go-Live & 30-Day Support'
    }
  ];

  return (
    <section id="how-titan-works" className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <TitanIcon className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Disciplined Execution Process</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              FROM BUSINESS PROBLEM TO WORKING SOLUTION
            </h2>

            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              A transparent, four-stage engineering methodology designed to deliver measurable business outcomes without guesswork.
            </p>
          </div>
        </FadeIn>

        {/* Desktop Horizontal Connected Timeline */}
        <div className="hidden lg:block relative my-12">
          {/* Continuous connector line */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#00D1FF]/40 via-[#3BA9FF]/40 to-[#00D1FF]/40 -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <FadeIn key={st.num} delay={idx * 0.1} direction="up" distance={20}>
                  <div className="group card-titan-light p-6 rounded-2xl flex flex-col justify-between h-full hover:-translate-y-2 hover:border-[#00D1FF]/60 hover:shadow-[0_12px_32px_rgba(0,209,255,0.15)] transition-all duration-300">
                    <div>
                      {/* Top Node */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-sm font-bold text-[#00D1FF]">
                          {st.num} —
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#0B1F4B] group-hover:border-[#00D1FF] group-hover:shadow-[0_0_12px_rgba(0,209,255,0.3)] transition-all">
                          <IconComp className="w-5 h-5 text-[#00D1FF]" />
                        </div>
                      </div>

                      <h3 className="font-display font-extrabold text-xl text-[#071A33] mb-2.5 tracking-tight group-hover:text-[#0B1F4B]">
                        {st.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#8FA0BA]">
                      <span>{st.badge}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Connected Timeline */}
        <div className="lg:hidden relative space-y-6 my-8">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00D1FF] via-[#3BA9FF] to-[#00D1FF]/40 pointer-events-none" />

          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <FadeIn key={st.num} delay={idx * 0.08} direction="up" distance={15}>
                <div className="relative pl-14">
                  <div className="absolute left-3.5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#00D1FF] flex items-center justify-center shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#00D1FF]" />
                  </div>

                  <div className="card-titan-light p-6 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#00D1FF]">
                        {st.num} — {st.badge}
                      </span>
                      <IconComp className="w-4 h-4 text-[#00D1FF]" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#071A33]">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
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
