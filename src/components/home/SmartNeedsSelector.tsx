import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Search, Cpu, PhoneCall, Video, ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';

export const SmartNeedsSelector: React.FC = () => {
  const [selectedNeed, setSelectedNeed] = useState<number>(0);

  const options = [
    {
      id: 'website',
      label: 'I NEED A BETTER WEBSITE',
      icon: Globe,
      serviceName: 'AI-Powered Websites',
      explanation: 'We create modern, fast, conversion-focused websites that combine professional design with built-in AI chatbots, lead capture, and WhatsApp routing.',
      route: '/services/website-design',
      ctaText: 'BUILD MY WEBSITE'
    },
    {
      id: 'visibility',
      label: 'I NEED MORE VISIBILITY',
      icon: Search,
      serviceName: 'SEO & AI Search Optimization',
      explanation: 'Help high-value clients discover your business across traditional search engines (Google) and modern AI discovery engines (ChatGPT, Perplexity, Gemini).',
      route: '/services/seo',
      ctaText: 'IMPROVE MY VISIBILITY'
    },
    {
      id: 'automate',
      label: 'I WANT TO AUTOMATE TASKS',
      icon: Cpu,
      serviceName: 'Custom AI Agents',
      explanation: 'We build specialized AI agents designed to handle customer interactions, retrieve internal company documents, and eliminate routine manual work.',
      route: '/services/ai-agents',
      ctaText: 'BUILD MY AI AGENT'
    },
    {
      id: 'calls',
      label: 'I NEED HELP HANDLING CALLS',
      icon: PhoneCall,
      serviceName: 'AI Call Agents',
      explanation: 'Build AI-powered voice systems that answer customer calls, answer common questions, qualify inquiries, book appointments, and escalate to humans.',
      route: '/services/ai-call-agents',
      ctaText: 'BUILD MY AI CALL AGENT'
    },
    {
      id: 'content',
      label: 'I NEED MARKETING CONTENT',
      icon: Video,
      serviceName: 'AI Video Creation',
      explanation: 'Professional AI video content built for business marketing, product showcases, service explainers, and social media reels.',
      route: '/services/ai-video-creation',
      ctaText: 'BUILD MY AI VIDEO'
    }
  ];

  const current = options[selectedNeed];
  const whatsappUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent(`Hello TITAN AI AGENCY, I selected "${current.label}" and would like to discuss ${current.serviceName}.`);

  return (
    <section id="smart-needs-selector" className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80 text-[#071A33] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Interactive Solution Matcher</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              WHAT ARE YOU TRYING TO IMPROVE?
            </h2>

            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Select your primary business objective below to see the recommended TITAN technology solution.
            </p>
          </div>
        </FadeIn>

        {/* 5 Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {options.map((opt, idx) => {
            const IconComp = opt.icon;
            const isSelected = selectedNeed === idx;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedNeed(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between gap-3 border ${
                  isSelected
                    ? 'bg-[#04142E] text-white border-[#00D1FF] shadow-lg -translate-y-1'
                    : 'bg-[#F8FAFF] hover:bg-slate-100 text-[#071A33] border-slate-200'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/10 text-[#00D1FF]' : 'bg-[#EAF7FF] text-[#0B1F4B]'}`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider leading-snug">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Recommended Solution Card */}
        <FadeIn key={current.id} direction="up" distance={15}>
          <div className="card-titan-light p-8 sm:p-10 rounded-3xl max-w-4xl mx-auto border border-[#00D1FF]/40 shadow-xl bg-gradient-to-br from-white to-[#F8FAFF]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-1">
                  RECOMMENDED TITAN SOLUTION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33]">
                  {current.serviceName}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                {React.createElement(current.icon, { className: 'w-6 h-6 text-[#00D1FF]' })}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#536477] leading-relaxed mb-8">
              {current.explanation}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                to={current.route}
                className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="btn-titan-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Start Project</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
