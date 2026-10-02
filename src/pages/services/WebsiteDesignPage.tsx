import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Navigation,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Bot,
  Calendar,
  Zap,
  BarChart,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { FeaturedWork } from '../../components/FeaturedWork';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';
import { FadeIn } from '../../components/motion/MotionComponents';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I would like to discuss building an AI-Powered Website for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const CAPABILITIES = [
  { title: 'Premium Custom Design', desc: 'Distinctive, brand-aligned visual design crafted for credibility and authority.' },
  { title: 'Mobile Responsive Development', desc: 'Flawless performance and typography tailored for phone, tablet, and desktop screens.' },
  { title: 'AI Chatbot Integration', desc: 'Built-in conversational assistant answering customer questions and capturing leads 24/7.' },
  { title: 'Lead Capture Systems', desc: 'High-intent enquiry flows designed to collect verified customer requirements.' },
  { title: 'WhatsApp Integration', desc: 'Direct one-tap WhatsApp routing pre-filled with project context for instant closing.' },
  { title: 'Appointment Booking', desc: 'Automated scheduling workflows synchronized with your team’s calendars.' },
  { title: 'Contact & Quotation Forms', desc: 'Frictionless forms tailored to qualify client budget, timeline, and project needs.' },
  { title: 'Analytics & Tracking', desc: 'Clear visibility into visitor journeys, conversions, and high-performing pages.' },
  { title: 'SEO Foundations', desc: 'Semantic HTML5 structure, OpenGraph cards, and Google Search Console indexing ready.' },
  { title: 'Business Automation Integrations', desc: 'Form-to-CRM, instant email dispatch, and team notifications connected automatically.' },
  { title: 'Fast Performance', desc: 'Sub-second page speeds passing Core Web Vitals to maximize Google rank and conversions.' },
  { title: 'Conversion-Focused Layouts', desc: 'Clear visual hierarchy and strategic calls to action that turn visitors into paying customers.' }
];

const PROBLEMS_SOLVED = [
  {
    problem: 'No professional online presence',
    solution: 'Establish an authoritative, modern digital storefront that immediately builds trust with high-value clients.'
  },
  {
    problem: 'Outdated website losing visitor trust',
    solution: 'Complete overhaul with clean typography, responsive layouts, and modern technology that outshines competitors.'
  },
  {
    problem: 'Visitors not becoming customers',
    solution: 'Conversion-focused architecture and strategic value propositions that guide prospects toward action.'
  },
  {
    problem: 'Difficult customer contact',
    solution: 'Direct WhatsApp integration, automated quotation forms, and 24/7 AI chat making reaching out effortless.'
  },
  {
    problem: 'Poor mobile experience',
    solution: 'Engineered mobile-first for fluid browsing, instant tap-to-chat actions, and zero layout shifting.'
  },
  {
    problem: 'Weak brand credibility',
    solution: 'Enterprise-grade aesthetic, fast loading speeds, and cohesive brand storytelling.'
  }
];

const DELIVERABLES = [
  'Custom responsive website design engineered in React, TypeScript & Tailwind CSS',
  'Integrated AI chatbot widget trained on your business offerings and FAQs',
  'Direct WhatsApp messaging triggers and structured quotation intake forms',
  'Automated appointment booking or contact routing flows',
  'On-page SEO fundamentals, semantic schema, and Google Search Console sitemap setup',
  'Full source code and hosting configuration handover with zero proprietary lock-in',
  'Cross-browser and mobile verification testing before deployment',
  '30 days of post-launch technical support and minor adjustments'
];

const FAQS = [
  {
    question: 'How are TITAN websites different from traditional web design agencies?',
    answer:
      'We do not simply build static digital brochures. We build AI-Powered Websites engineered to attract, convert, and grow: combining custom aesthetic design with built-in AI chatbots, instant WhatsApp conversion flows, appointment scheduling, and automated backend routing.'
  },
  {
    question: 'How long does an AI-Powered Website project take?',
    answer:
      'A standard business website with integrated AI tools is typically scoped, built, tested, and delivered within 2 to 4 weeks. Specific milestones and delivery schedules are agreed during initial scoping before work begins.'
  },
  {
    question: 'Who owns the website and source code after launch?',
    answer:
      'Your business owns 100% of the website, custom source code, domain connections, and deployment accounts. We do not use locked proprietary website builders. You receive complete handover documentation upon launch.'
  },
  {
    question: 'Can you integrate our existing CRM or booking systems?',
    answer:
      'Yes. We connect with your existing tools, whether Google Calendar, HubSpot, WhatsApp Business, Notion, or custom databases, ensuring captured leads flow directly where your team works.'
  }
];

export const WebsiteDesignPage: React.FC = () => {
  usePageSEO({
    title: 'AI-Powered Websites | Built to Attract, Convert and Grow | TITAN AI Agency',
    description:
      'We create modern, fast, conversion-focused websites that combine professional design with AI and business tools. Built for Riyadh and global businesses.',
    canonicalPath: '/services/website-design',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI-Powered Websites',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'AI-Powered Websites built to attract, convert and grow. Combining professional design with AI chatbot integration, lead capture, and WhatsApp routing.'
    }
  });

  return (
    <div id="ai-websites-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#8FA0BA] mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00D1FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00D1FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">AI-Powered Websites</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <FadeIn delay={0.1} direction="none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
                <TitanIcon className="w-4 h-4" />
                <span>CORE SERVICE 01 · WEB ENGINEERING & CONVERSION</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={30}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                AI-Powered Websites Built to Attract, Convert and Grow.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal max-w-3xl">
                We create modern, fast, conversion-focused websites that combine professional design with AI and business tools. Turn passive web visitors into qualified paying clients.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" distance={15}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="website-cta-primary"
                  className="btn-titan-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold shadow-[0_4px_18px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)]"
                >
                  <span>BUILD MY WEBSITE</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href="#capabilities"
                  className="btn-titan-secondary-dark inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Business Problems Solved */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
              Business Transformation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Business Problems We Solve
            </h2>
            <p className="mt-3 text-[#536477] text-base">
              A website should be an active revenue-generating asset, not a digital placeholder.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_SOLVED.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} direction="up" distance={20}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Business Problem</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#071A33] mb-3">
                    {item.problem}
                  </h3>
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-[#00D1FF] font-bold text-xs mb-1.5 font-mono uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>TITAN Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Capabilities Section */}
      <section id="capabilities" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
                Engineering & Features
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                Capabilities Included In Every Build
              </h2>
              <p className="mt-3 text-[#536477] text-base">
                Everything required to launch, convert, and scale your digital presence.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={20}>
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 hover:border-[#00D1FF]/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#071A33]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Live Portfolio Case Studies */}
      <FeaturedWork
        id="website-portfolio-demos"
        badge="Live Portfolio Demonstrations"
        title="Explore Concepts We Build"
        subtitle="Review three responsive demo projects demonstrating our design approach, navigation standards, and enquiry conversion flows. All three links are live interactive demos."
      />

      {/* 5. Deliverables & Scope */}
      <section id="scope-deliverables" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                Transparent Boundaries
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Included Deliverables & Technical Scope
              </h2>
              <p className="text-[#8FA0BA] text-base leading-relaxed">
                We believe in complete transparency before code is written. Every project has a written scope specification, milestones, and 100% client code ownership.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="card-titan-dark p-7 space-y-4 bg-[#0B1F4B]/60 border border-[#00D1FF]/20">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold mb-2">
                  Scope Checklist
                </h3>
                <ul className="space-y-3.5">
                  {DELIVERABLES.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#EAF7FF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D1FF] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Steps */}
      <ServiceProcessSteps />

      {/* 7. FAQs */}
      <ServiceFAQList serviceTitle="AI-Powered Websites" faqs={FAQS} />

      {/* 8. Final CTA */}
      <ServiceCTASection
        serviceTitle="AI-Powered Website"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss your website vision, required features, and conversion goals directly with our engineering team on WhatsApp."
      />
    </div>
  );
};
