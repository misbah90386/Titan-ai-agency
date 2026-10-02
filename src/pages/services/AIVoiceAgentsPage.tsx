import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Mic,
  Shield,
  PhoneForwarded,
  UserCheck,
  Calendar,
  Clock,
  Volume2,
  AlertCircle
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';
import { FadeIn } from '../../components/motion/MotionComponents';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I would like to discuss building AI Call Agents for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const CAPABILITIES = [
  { title: 'Answer Common Customer Questions', desc: 'Answers questions about opening hours, location, pricing parameters, and core service offerings.' },
  { title: 'Collect Lead Information', desc: 'Captures caller name, phone number, company, specific requirements, and urgency.' },
  { title: 'Qualify Inquiries', desc: 'Screens inbound calls according to your qualification criteria before forwarding to sales.' },
  { title: 'Book Appointments', desc: 'Schedules consultations directly into your calendar during the live phone call.' },
  { title: 'Confirm Appointments', desc: 'Sends automated SMS or WhatsApp confirmation and handles rescheduling requests.' },
  { title: 'Route Calls', desc: 'Directs callers smoothly to the appropriate team member, department, or office branch.' },
  { title: 'Provide Service Information', desc: 'Explains complex service packages clearly based strictly on verified documentation.' },
  { title: 'Escalate to a Human Team Member', desc: 'Seamlessly transfers complex, sensitive, or high-priority calls to human staff.' }
];

const PROBLEMS_SOLVED = [
  {
    problem: 'Missed calls',
    solution: 'Picks up every incoming ring within seconds, ensuring zero potential customer opportunities are lost.'
  },
  {
    problem: 'Slow phone responses',
    solution: 'Eliminates hold times and busy signals during peak operational hours with simultaneous call capacity.'
  },
  {
    problem: 'Employees repeating the same information',
    solution: 'Handles repetitive FAQs over the phone so staff can dedicate their voices to closing high-value deals.'
  },
  {
    problem: 'Lost leads outside working hours',
    solution: 'Operates 24/7/365 to capture caller intent, answer basic questions, and schedule meetings while you sleep.'
  },
  {
    problem: 'Too much time spent on basic calls',
    solution: 'Pre-screens and qualifies inquiries before they reach your calendar or front desk.'
  }
];

const DELIVERABLES = [
  'Virtual business telephony setup with supported SIP / VoIP providers',
  'Custom conversational scripts, natural speech persona, and decision tree architecture',
  'Real-time calendar booking and SMS/WhatsApp confirmation workflows',
  'Instant human transfer protocols for designated team members or departments',
  'Call transcript generation, recording archive, and summary alerts sent to email/CRM',
  'Comprehensive testing across diverse phone lines, accents, and noisy environments',
  '30 days of post-deployment telephony support and speech model tuning'
];

const FAQS = [
  {
    question: 'How do callers transfer to a real human team member?',
    answer:
      'We build clear human escalation pathways into every voice flow. Whenever a caller requests to speak with a person, has a complex or unsupported inquiry, or demonstrates frustration, the call is transferred immediately to your designated staff phone number or department queue.'
  },
  {
    question: 'How natural does the AI call agent sound?',
    answer:
      'We use modern neural voice models engineered for telephony with sub-second response latency (under 800ms). The rhythm, tone, and pacing sound natural, professional, and conversational.'
  },
  {
    question: 'Do we need a new phone number to use an AI call agent?',
    answer:
      'No. You can easily set up conditional call forwarding from your existing business line (e.g., forward when busy, after hours, or when unanswered after 3 rings), or choose to use a new dedicated virtual number.'
  },
  {
    question: 'Can the call agent handle both inbound and outbound calls?',
    answer:
      'Yes. Our systems handle incoming caller inquiries as well as outbound automated workflows such as appointment reminders, follow-up surveys, and confirmation calls.'
  }
];

export const AIVoiceAgentsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Call Agents | AI Voice Agents for Businesses | TITAN AI Agency',
    description:
      'Build AI-powered voice systems that assist businesses with incoming or outgoing customer interactions. Answer common questions, book appointments, and escalate to humans.',
    canonicalPath: '/services/ai-voice-agents',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Call Agents',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/'
      },
      description:
        'AI Voice Agents that help your business answer every opportunity. Inbound call answering, lead collection, appointment booking, and seamless human escalation.'
    }
  });

  return (
    <div id="ai-call-agents-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#8FA0BA] mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00D1FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00D1FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">AI Call Agents</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <FadeIn delay={0.1} direction="none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
                <TitanIcon className="w-4 h-4" />
                <span>CORE SERVICE 04 · VOICE AI & TELEPHONY</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={30}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                AI Voice Agents That Help Your Business Answer Every Opportunity.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal max-w-3xl">
                Build AI-powered voice systems that can assist businesses with incoming or outgoing customer interactions where appropriate. Answer questions, book meetings, and transfer complex calls to humans.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" distance={15}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="call-agents-cta-primary"
                  className="btn-titan-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold shadow-[0_4px_18px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)]"
                >
                  <span>BUILD MY AI CALL AGENT</span>
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

            {/* Human Transfer Assurance */}
            <FadeIn delay={0.5} direction="none">
              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-[#8FA0BA]">
                <Shield className="w-4 h-4 text-[#00D1FF] shrink-0" />
                <span>Always in control: Important or complex conversations are transferred directly to your human staff.</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS PROBLEMS SOLVED */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
              Telephony Efficiency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Business Problems We Solve
            </h2>
            <p className="mt-3 text-[#536477] text-base">
              Every unanswered phone call is potential lost revenue. Keep your lines open and responsive 24/7.
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
                    <span>Phone Bottleneck</span>
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

      {/* 3. CAPABILITIES */}
      <section id="capabilities" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
                Voice Features & Protocol
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                Complete Call Agent Capabilities
              </h2>
              <p className="mt-3 text-[#536477] text-base">
                Engineered for natural conversational pacing, accurate appointment booking, and instant human transfer.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={20}>
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 hover:border-[#00D1FF]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center mb-3 text-[#00D1FF]">
                      <PhoneCall className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#071A33] mb-1.5">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HUMAN TRANSFER HIGHLIGHT */}
      <section className="py-16 bg-[#EAF7FF]/40 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#00D1FF]/30 shadow-md flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#04142E] flex items-center justify-center shrink-0 text-[#00D1FF]">
              <PhoneForwarded className="w-8 h-8 text-[#00D1FF]" />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#071A33]">
                Human Team Handshake Protocol
              </h3>
              <p className="text-sm text-[#536477] leading-relaxed">
                We believe AI should empower human relationships, not replace them. When a conversation requires discretion, emotional nuance, pricing negotiations, or high-value consultation, the AI Call Agent transfers the caller smoothly to your designated team member with context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES & SCOPE */}
      <section className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
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
                Every voice agent deployment includes thorough audio testing, conversational script reviews, calendar synchronization, and full documentation.
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

      {/* 6. PROCESS STEPS */}
      <ServiceProcessSteps />

      {/* 7. FAQS */}
      <ServiceFAQList serviceTitle="AI Call Agents" faqs={FAQS} />

      {/* 8. FINAL CTA */}
      <ServiceCTASection
        serviceTitle="AI Call Agent"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss your call volume, common inquiries, and appointment booking requirements with our engineering team on WhatsApp."
      />
    </div>
  );
};
