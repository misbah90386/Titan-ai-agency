import React from 'react';
import { HelpCircle } from 'lucide-react';

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQListProps {
  serviceTitle: string;
  faqs: ServiceFAQItem[];
}

export const ServiceFAQList: React.FC<ServiceFAQListProps> = ({ serviceTitle, faqs }) => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FFFFFF] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
            Clear Answers
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
            Frequently Asked Questions: {serviceTitle}
          </h2>
          <p className="mt-3 text-[#536477] text-base leading-relaxed">
            Direct, practical answers to common scoping, technical, and implementation questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-titan-light p-6 sm:p-7 space-y-3.5"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#00D1FF]">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#071A33] leading-snug">
                  {faq.question}
                </h3>
              </div>

              <p className="text-sm text-[#536477] leading-relaxed pl-11 font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
