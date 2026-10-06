import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Search,
  Bot,
  PhoneCall,
  Video,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  featureTags: string[];
  icon: React.ReactNode;
  route: string;
  isPopular?: boolean;
}

const SERVICES_LIST: ServiceCardData[] = [
  {
    id: 'ai-websites',
    title: 'AI Websites',
    description: 'Fast, modern and intelligent websites designed to turn visitors into customers.',
    featureTags: ['Responsive Design', 'AI Integration', 'Fast Performance'],
    icon: <Globe className="w-5 h-5 text-[#0284C7]" />,
    route: '/services/website-design'
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Improve your visibility on search engines and help more customers discover your business.',
    featureTags: ['Search Optimization', 'Local SEO', 'Performance'],
    icon: <Search className="w-5 h-5 text-[#0284C7]" />,
    route: '/services/seo'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Smart AI agents that can support customers, automate tasks and help manage business workflows.',
    featureTags: ['Customer Support', 'Lead Handling', 'Automation'],
    icon: <Bot className="w-5 h-5 text-[#0284C7]" />,
    route: '/services/ai-agents',
    isPopular: true
  },
  {
    id: 'ai-call-agents',
    title: 'AI Call Agents',
    description: 'AI voice agents designed to answer calls, communicate with customers and handle common inquiries.',
    featureTags: ['AI Voice', 'Call Handling', '24/7 Assistance'],
    icon: <PhoneCall className="w-5 h-5 text-[#0284C7]" />,
    route: '/services/ai-call-agents'
  },
  {
    id: 'ai-video',
    title: 'AI Video',
    description: 'Professional AI-generated video content for advertising, social media and business marketing.',
    featureTags: ['Marketing Videos', 'Social Content', 'AI Production'],
    icon: <Video className="w-5 h-5 text-[#0284C7]" />,
    route: '/services/ai-video-creation'
  }
];

export const TitanServicesSection: React.FC = () => {
  const row1Services = SERVICES_LIST.slice(0, 3);
  const row2Services = SERVICES_LIST.slice(3, 5);

  return (
    <section
      id="services-preview-section"
      className="relative py-18 sm:py-24 lg:py-28 bg-[#FFFFFF] border-t border-slate-100 overflow-hidden"
    >
      {/* Subtle Background Glow & Network Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-[#00D1FF]/8 via-[#3BA9FF]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-50/60 rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle AI Network Connection Lines Pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="serviceLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#00D1FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M 100 240 Q 400 180, 700 260 T 1300 220"
          stroke="url(#serviceLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 200 480 Q 600 520, 950 460 T 1400 500"
          stroke="url(#serviceLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          fill="none"
        />
        <circle cx="700" cy="260" r="3" fill="#00D1FF" opacity="0.4" />
        <circle cx="950" cy="460" r="3" fill="#0284C7" opacity="0.4" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: Centered & Clean */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shadow-[0_0_6px_#00D1FF] animate-pulse" />
              <span>OUR SERVICES</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              AI Solutions Built to Grow Your Business
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From intelligent websites to AI-powered automation, Titan AI Agency builds modern digital solutions designed for real business growth.
            </p>
          </div>
        </FadeIn>

        {/* SERVICE CARDS CONTAINER */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* Row 1: 3 Cards (AI Websites, SEO, AI Agents [Popular]) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {row1Services.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.08} direction="up" distance={20}>
                <div
                  id={`service-card-${service.id}`}
                  className={`group relative bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(2,132,199,0.18)] hover:border-sky-300 ${
                    service.isPopular
                      ? 'border-2 border-sky-300/90 shadow-[0_8px_30px_rgba(2,132,199,0.08)] ring-1 ring-sky-100 bg-gradient-to-b from-white via-white to-sky-50/25'
                      : 'border border-slate-200/80 shadow-sm'
                  }`}
                >
                  {/* Popular Badge for AI Agents */}
                  {service.isPopular && (
                    <div className="absolute -top-3 right-6">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#00D1FF] text-white text-[10px] font-mono font-bold tracking-wider shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Minimal Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-sky-100/80 group-hover:border-sky-300 transition-all duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#071A33] mb-2.5 group-hover:text-[#0284C7] transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 mb-6">
                      {service.featureTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 group-hover:border-sky-200 group-hover:bg-sky-50/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <Link
                      to={service.route}
                      id={`learn-more-${service.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284C7] group-hover:text-[#0369A1] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Row 2: 2 Slightly Wider Centered Cards (AI Call Agents, AI Video) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl lg:max-w-5xl mx-auto">
            {row2Services.map((service, idx) => (
              <FadeIn key={service.id} delay={(idx + 3) * 0.08} direction="up" distance={20}>
                <div
                  id={`service-card-${service.id}`}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(2,132,199,0.18)] hover:border-sky-300"
                >
                  <div>
                    {/* Minimal Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-sky-100/80 group-hover:border-sky-300 transition-all duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#071A33] mb-2.5 group-hover:text-[#0284C7] transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 mb-6">
                      {service.featureTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 group-hover:border-sky-200 group-hover:bg-sky-50/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <Link
                      to={service.route}
                      id={`learn-more-${service.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284C7] group-hover:text-[#0369A1] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
