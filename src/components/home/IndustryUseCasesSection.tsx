import React, { useState } from 'react';
import { Building, Scissors, UtensilsCrossed, Briefcase, Sparkles, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';

export const IndustryUseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('real-estate');

  const industries = [
    {
      id: 'real-estate',
      name: 'Real Estate',
      icon: Building,
      headline: 'Automated Property Marketing & High-Intent Lead Capture',
      desc: 'Capture and qualify property buyers and tenants 24/7 without manual telephone bottlenecks.',
      items: [
        'Property website with interactive listings and virtual previews',
        'Property inquiry AI agent answering questions on price, location, and specs',
        'Automated lead qualification capturing buyer budget and timeline',
        'AI call handling for after-hours telephone inquiries',
        'Property promotional videos for social media reels & web showcases',
        'Local and technical SEO ensuring local property search discovery'
      ]
    },
    {
      id: 'salons',
      name: 'Salons & Clinics',
      icon: Scissors,
      headline: 'Effortless Appointment Scheduling & Routine Call Reduction',
      desc: 'Allow clients to book treatments and verify operating times instantly while your staff focuses on service.',
      items: [
        'Professional branded website showcasing treatments and staff credentials',
        'Real-time appointment booking synchronized with calendars',
        'Customer AI assistant answering pricing, services, and policies',
        'AI call agent taking incoming booking calls during busy salon hours',
        'Local SEO and Google Maps optimization for nearby customer discovery',
        'Social video content showcasing transformations and client testimonials'
      ]
    },
    {
      id: 'restaurants',
      name: 'Restaurants',
      icon: UtensilsCrossed,
      headline: 'Dynamic Menu Presentations & Automated Table Inquiries',
      desc: 'Eliminate missed reservation calls during dinner rushes with responsive telephone and web assistants.',
      items: [
        'Modern culinary business website with mobile-first menu hierarchy',
        'Interactive menu showcase with dietary indicators and pricing',
        'Reservation system integration for instant table requests',
        'AI customer assistant answering location, parking, and event questions',
        'Call support agent picking up incoming telephone queries',
        'Promotional videos spotlighting signature dishes across social platforms'
      ]
    },
    {
      id: 'professional-services',
      name: 'Professional Services',
      icon: Briefcase,
      headline: 'Authority-Building Lead Generation & Calendar Management',
      desc: 'Position your firm as an industry authority and automatically qualify consultative prospects.',
      items: [
        'High-converting lead-generation website establishing credibility',
        'Comprehensive SEO targeting high-value commercial search keywords',
        'AI sales assistant pre-qualifying client budget and project scope',
        'Direct consultation booking connected to senior partner schedules',
        'AI call agent routing priority inquiries to on-duty specialists',
        'Business explainer videos communicating complex advisory frameworks'
      ]
    },
    {
      id: 'other-businesses',
      name: 'Other Businesses',
      icon: Sparkles,
      headline: 'Custom AI Architecture Tailored to Your Operating Model',
      desc: 'Tell us your business problem and we’ll help identify the right solution.',
      items: [
        'Bespoke digital architecture tailored to unique data workflows',
        'Tailored AI agent integrations matching internal operating procedures',
        'Custom web interfaces engineered for specific customer journeys',
        'Connected automations eliminating cross-system manual data entry'
      ],
      isCustom: true
    }
  ];

  const current = industries.find((i) => i.id === activeTab) || industries[0];
  const whatsappUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent(`Hello TITAN AI AGENCY, I run a business in ${current.name} and would like to discuss the right digital solution.`);

  return (
    <section id="industry-use-cases" className="relative py-20 sm:py-28 bg-[#F8FAFF] border-t border-slate-200/80 text-[#071A33] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold">
              <TitanIcon className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Tailored Implementations</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              BUILT AROUND YOUR BUSINESS
            </h2>

            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Different businesses have different problems. TITAN designs solutions around how each company actually works.
            </p>
          </div>
        </FadeIn>

        {/* Industry Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {industries.map((ind) => {
            const IconComp = ind.icon;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#04142E] text-white shadow-md border border-[#00D1FF]/40 -translate-y-0.5'
                    : 'bg-white hover:bg-slate-100 text-[#536477] border border-slate-200/90'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-[#00D1FF]' : 'text-slate-400'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <FadeIn key={current.id} direction="up" distance={15}>
          <div className="card-titan-light p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto border border-[#00D1FF]/25 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  {React.createElement(current.icon, { className: 'w-6 h-6 text-[#00D1FF]' })}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold block">
                    Tailored Solution · {current.name}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A33]">
                    {current.headline}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#536477] leading-relaxed mb-6 font-normal">
              {current.desc}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {current.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFF] border border-slate-200/80 text-xs sm:text-sm text-[#071A33]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Zone */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8FA0BA] font-mono">
                {current.isCustom ? 'Every industry supported' : 'Configured around your operating model'}
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>DISCUSS YOUR BUSINESS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
