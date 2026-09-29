import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What services does TITAN AI AGENCY provide?',
    answer:
      'TITAN AI AGENCY provides seven core services: Website Design & Development, AI Agents for autonomous task assistance, AI Voice Agents for supported telephone communication, AI Chatbots for website customer inquiries, Business Automation to connect tools and workflows, Custom AI Solutions engineered around specific business requirements, and AI Video Creation for product showcases and business promotions.'
  },
  {
    question: 'Can you redesign or upgrade an existing website?',
    answer:
      'Yes. We can modernize your current website to dramatically elevate its corporate aesthetics, optimize it for mobile devices, achieve high Google PageSpeed scores, and integrate automated enquiry workflows such as WhatsApp routing.'
  },
  {
    question: 'Can you build custom solutions for specific industries?',
    answer:
      'Yes. Our digital solutions, websites, conversational assistants, and automated workflows are tailored to your unique operational processes. Whether you run a service company, real estate firm, medical practice, consultancy, or retail brand, we engineer specifically around your workflow constraints.'
  },
  {
    question: 'How is project pricing determined?',
    answer:
      'Project pricing is based strictly on your written scope and required functionality. Before development begins, we agree on an explicit schedule of deliverables and transparent fixed pricing with defined milestones. We do not charge surprise retainers or opaque markup.'
  },
  {
    question: 'What support is provided after launch?',
    answer:
      'Every completed project includes 30 days of complimentary post-launch support to resolve any questions and verify that all integrations perform flawlessly. Ongoing maintenance packages are also available if you prefer continuous technical oversight.'
  },
  {
    question: 'How do we get started?',
    answer:
      'Getting started is quick and straightforward. Message us directly on WhatsApp at +966 53 418 2945 with a summary of what you are looking to build. Founder Saad Naeem will review your requirements, discuss architectural possibilities, and outline the next steps.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#3BA9FF]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Clear Answers Before You Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536477] leading-relaxed">
            Everything you need to know about our engineering approach, deliverables, and partnership model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-titan-light overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#071A33]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EAF7FF] text-[#00D1FF]' : 'bg-slate-100 text-[#536477]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#536477] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt to contact directly */}
        <div className="mt-12 text-center pt-8 border-t border-slate-200/80">
          <p className="text-sm text-[#536477] mb-4">
            Have a specialized question or unique technical requirement?
          </p>
          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
