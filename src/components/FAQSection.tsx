import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What services do you provide?',
    answer:
      'TITAN AI AGENCY provides seven core services: Website Design & Development, AI Agents for task assistance, AI Voice Agents for supported telephone communication, AI Chatbots for website customer inquiries, Business Automation to connect tools and workflows, Custom AI Solutions engineered around specific business requirements, and AI Video Creation for product showcases and business promotions.'
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We can redesign your current website to modernize its appearance, optimize it for mobile devices, improve loading speeds, and integrate direct enquiry capture such as WhatsApp or contact workflows.'
  },
  {
    question: 'Can you build a solution for my industry?',
    answer:
      'Yes. Our digital solutions, websites, conversational assistants, and automated workflows are adapted to your business processes. Whether you run a service company, real estate firm, professional practice, or online business, we tailor each project to your operational goals.'
  },
  {
    question: 'How much will my project cost?',
    answer:
      'Project pricing depends strictly on your scope, requirements, and required features. Before any work begins, we review your goals, provide a clear written scope of deliverables, and agree on a transparent price with defined milestones. There are no surprise fees.'
  },
  {
    question: 'What happens after launch?',
    answer:
      'Every project includes 30 days of free post-launch support to resolve any issues and ensure smooth operation. Please note that third-party subscriptions (such as domain registration, third-party telephony, or API usage fees) and major feature additions outside the agreed scope remain separate.'
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is simple. Contact us directly on WhatsApp at +966 53 418 2945 with a brief summary of what your business needs. We will review your requirements, answer your questions, and guide you through the next steps.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 sm:py-28 bg-[#06080d] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers about our services, pricing structure, and how we work together.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Have a question that isn't answered here?
          </p>
          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
