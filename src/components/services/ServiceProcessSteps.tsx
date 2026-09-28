import React from 'react';
import { MessageSquare, FileText, Code2, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discuss Requirements',
    description: 'We meet to understand your operational needs, customer touchpoints, technical constraints, and desired outcomes.',
    icon: <MessageSquare className="w-5 h-5 text-blue-400" />
  },
  {
    number: '02',
    title: 'Agree Scope & Architecture',
    description: 'We define the exact deliverables, data flows, integration points, and fixed milestone pricing before any work starts.',
    icon: <FileText className="w-5 h-5 text-cyan-400" />
  },
  {
    number: '03',
    title: 'Engineering & Implementation',
    description: 'Our team builds the solution with clean, maintainable architecture, strictly adhering to agreed specifications.',
    icon: <Code2 className="w-5 h-5 text-indigo-400" />
  },
  {
    number: '04',
    title: 'Testing & Verification',
    description: 'We test across devices, network speeds, input scenarios, and edge cases to ensure dependable performance.',
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
  },
  {
    number: '05',
    title: 'Handover & 30-Day Support',
    description: 'You receive full ownership of source code, deployment assets, documentation, and 30 days of dedicated post-launch support.',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
  }
];

export const ServiceProcessSteps: React.FC<{ steps?: ProcessStep[] }> = ({ steps = DEFAULT_STEPS }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#05070d] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Structured Delivery Model
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How We Deliver Your Project
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Every engagement follows a disciplined, transparent process from initial consultation to deployment and operational handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/30 p-6 flex flex-col justify-between transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-slate-500">
                    STEP {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                Transparent Checkpoint
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
