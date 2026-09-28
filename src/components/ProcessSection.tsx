import React from 'react';
import { MessageSquareText, Compass, Hammer, Rocket, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discuss',
      icon: MessageSquareText,
      description: 'We learn about your business, goals, and requirements.',
      detail: 'Through a direct initial conversation, we examine your current setup, the bottlenecks you want to remove, and what success looks like for your team.'
    },
    {
      number: '02',
      title: 'Plan',
      icon: Compass,
      description: 'We agree on the scope, price, and delivery milestones.',
      detail: 'Before any development begins, we provide a clear architectural scope, transparent pricing tailored to your requirements, and realistic milestones.'
    },
    {
      number: '03',
      title: 'Build & Review',
      icon: Hammer,
      description: 'We develop the solution and collect your feedback.',
      detail: 'We build your website, AI assistant, or automation pipeline, testing functionality thoroughly and incorporating your feedback during scheduled check-ins.'
    },
    {
      number: '04',
      title: 'Launch & Support',
      icon: Rocket,
      description: 'We launch the agreed project and provide 30 days of free support.',
      detail: 'We handle production deployment and provide 30 days of complimentary support to verify that everything operates smoothly and your team feels confident.'
    }
  ];

  return (
    <section id="process-section" className="relative py-20 sm:py-28 bg-[#030508] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Clear & Collaborative
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From Idea to Launch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A transparent, four-step process focused on understanding your business goals and delivering reliable software without confusion.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/40 p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                      STEP {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    {step.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Transparent Delivery</span>
                  <span className="text-blue-400/80">TITAN</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee of Support */}
        <div className="mt-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 max-w-2xl mx-auto flex items-center gap-4 text-xs sm:text-sm text-slate-300">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          <p>
            <span className="text-white font-semibold">30 Days of Free Post-Launch Support:</span> Every project includes 30 days of complimentary support after launch to resolve issues and ensure smooth operation.
          </p>
        </div>

      </div>
    </section>
  );
};
