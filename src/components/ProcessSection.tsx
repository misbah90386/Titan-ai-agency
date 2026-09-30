import React from 'react';
import { MessageSquareText, Compass, Hammer, Rocket } from 'lucide-react';
import { FadeIn } from './motion/MotionComponents';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategic Discovery',
      icon: MessageSquareText,
      description: 'We diagnose your operational friction, goals, and business constraints.',
      detail: 'Through a direct initial consultation with founder Saad Naeem, we examine your current digital setup, the bottlenecks holding your team back, and define clear business outcomes.'
    },
    {
      number: '02',
      title: 'Architectural Planning',
      icon: Compass,
      description: 'We confirm detailed technical scope, transparent pricing, and delivery milestones.',
      detail: 'Before code is written, you receive a concrete specification detailing every feature, exact milestone dates, and fixed transparent pricing. No vague estimates or hidden subscription dependencies.'
    },
    {
      number: '03',
      title: 'Engineering & Iteration',
      icon: Hammer,
      description: 'We develop your solution with clean code and incorporate your feedback.',
      detail: 'We build your responsive website, intelligent AI assistant, or workflow automation pipeline with enterprise-grade standards, providing live staging previews for feedback.'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      icon: Rocket,
      description: 'We launch into production and provide 30 days of complimentary support.',
      detail: 'We manage domain configuration, security checks, and go-live deployment, backed by 30 days of dedicated free support to ensure flawless operation and team confidence.'
    }
  ];

  return (
    <section id="process-section" className="relative py-20 sm:py-28 bg-[#EAF7FF]/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
              Engineered For Reliability
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              From Blueprint to Production
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#536477] leading-relaxed">
              A transparent four-phase engineering methodology focused on solving genuine business bottlenecks without complexity or speculative trends.
            </p>
          </div>
        </FadeIn>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={idx * 0.1} direction="up" distance={20}>
                <div
                  className="card-titan-light p-6 sm:p-7 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-[#0B1F4B] px-2.5 py-1 rounded-lg bg-[#EAF7FF] border border-[#3BA9FF]/30">
                        PHASE {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#F8FAFF] border border-slate-200 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#3BA9FF]" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#071A33] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#0B1F4B] mb-3 leading-snug">
                      {step.description}
                    </p>

                    <p className="text-xs text-[#536477] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#536477]">
                    <span>DELIVERABLE ASSURED</span>
                    <span className="text-[#3BA9FF] font-semibold">100% Client Ownership</span>
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
