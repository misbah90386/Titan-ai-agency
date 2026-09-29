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
    icon: <MessageSquare className="w-5 h-5 text-[#00D1FF]" />
  },
  {
    number: '02',
    title: 'Agree Scope & Architecture',
    description: 'We define the exact deliverables, data flows, integration points, and fixed milestone pricing before any work starts.',
    icon: <FileText className="w-5 h-5 text-[#3BA9FF]" />
  },
  {
    number: '03',
    title: 'Engineering & Build',
    description: 'Our team builds the solution with clean, maintainable architecture, strictly adhering to agreed specifications.',
    icon: <Code2 className="w-5 h-5 text-[#00D1FF]" />
  },
  {
    number: '04',
    title: 'Testing & Verification',
    description: 'We test across devices, network speeds, input scenarios, and edge cases to ensure dependable performance.',
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />
  },
  {
    number: '05',
    title: 'Handover & 30-Day Support',
    description: 'You receive full ownership of source code, deployment assets, documentation, and 30 days of dedicated post-launch support.',
    icon: <ShieldCheck className="w-5 h-5 text-[#3BA9FF]" />
  }
];

export const ServiceProcessSteps: React.FC<{ steps?: ProcessStep[] }> = ({ steps = DEFAULT_STEPS }) => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#EAF7FF]/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
            Structured Delivery Model
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
            How We Deliver Your Project
          </h2>
          <p className="mt-3 text-[#536477] text-base leading-relaxed">
            Every engagement follows a disciplined, transparent process from initial consultation to deployment and operational handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-titan-light p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#0B1F4B] px-2 py-0.5 rounded-md bg-[#EAF7FF] border border-[#3BA9FF]/30">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#F8FAFF] border border-slate-200 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-[#071A33] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#536477] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-[#3BA9FF] font-semibold">
                Transparent Step
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
