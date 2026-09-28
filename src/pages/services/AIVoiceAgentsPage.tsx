import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Volume2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  MapPin,
  Mic,
  Radio,
  Share2,
  ShieldAlert
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing AI voice agents for my phone inquiries.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Inbound Phone Enquiry Reception',
    description:
      'Answer incoming customer calls on the first ring, provide verified answers to frequent questions regarding services, branch locations, and hours, and eliminate hold-time drop-offs.',
    features: ['Zero queue latency', 'Natural spoken conversational cadence', '24/7 call answering']
  },
  {
    title: 'Appointment & Booking Request Intake',
    description:
      'Collect caller details, requested booking times, and specific service needs over the phone, feeding structured appointment requests directly to your scheduling calendar.',
    features: ['Spoken intake collection', 'SMS confirmation triggers', 'Calendar slot coordination']
  },
  {
    title: 'After-Hours Emergency & Triage Routing',
    description:
      'Field calls received outside normal business hours, classify urgent requests from standard enquiries, and notify on-call personnel according to approved dispatch rules.',
    features: ['Priority classification', 'Instant team alerting', 'Call audio & transcript logging']
  },
  {
    title: 'Warm Call Transfers to Team Members',
    description:
      'When a caller requires personal evaluation or requests a specific department, the voice assistant summarizes the caller need and bridges the line to staff.',
    features: ['Contextual call handoff', 'Department forwarding', 'No repeat questioning']
  }
];

const DELIVERABLES = [
  'Telephony or web-voice platform configuration tailored to your existing phone infrastructure',
  'Approved conversational dialogue scripts and response pathways agreed prior to deployment',
  'Natural voice synthesis selection matching your target business tone and language preferences',
  'Instant notification triggers (via WhatsApp or email) containing caller name, number, and call summary',
  'Strict response boundaries preventing unverified commitments, false pricing, or inaccurate promises',
  'Rigorous caller scenario testing across accents, speech rates, audio noise, and edge cases',
  'Staff administrative dashboard or intake logs with searchable call summaries and audio records',
  '30 days of dedicated post-launch engineering support and dialogue refinement'
];

const FAQS = [
  {
    question: 'Which languages and dialects are supported?',
    answer:
      'Supported languages—including Modern Standard Arabic, regional dialects, and English—are agreed, configured, and tested specifically for each project. During the requirements phase, we evaluate your caller demographics to select appropriate speech synthesis models and verify speech recognition accuracy before launch.'
  },
  {
    question: 'How does the voice agent integrate with our current telephone number?',
    answer:
      'Voice agents can be integrated via telephony forwarding, virtual SIP trunks, or dedicated inbound numbers that forward complex calls back to your office lines. The exact technical setup depends on your existing telecom provider and is agreed during project scoping.'
  },
  {
    question: 'Do you work with businesses in Riyadh and across Saudi Arabia?',
    answer:
      'Yes. TITAN AI AGENCY engineers voice solutions for clinics, maintenance firms, service offices, and corporate operations in Riyadh, throughout Saudi Arabia, and remotely. We ensure the voice dialogue matches the formal and polite conversational norms expected by Saudi callers.'
  },
  {
    question: 'What happens if the caller asks something unexpected or speaks with heavy background noise?',
    answer:
      'When audio clarity is poor or an enquiry falls outside the approved script, the voice agent is programmed to politely ask for clarification or offer an immediate transfer to a human staff member or take a callback message. It never makes unverified guesses.'
  }
];

export const AIVoiceAgentsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Voice Agents & Telephony Solutions | TITAN AI Agency',
    description:
      'AI voice agents for businesses in Riyadh and remotely. Handle common phone inquiries and appointment requests with natural voice dialogue and human escalation.',
    canonicalPath: '/services/ai-voice-agents',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Voice Agents & Telephony Solutions',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Automated voice assistants configured to handle common phone inquiries, intake calls, and appointment requests with human staff escalation.',
      areaServed: [
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'Country', name: 'Saudi Arabia' }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 pt-28">
      {/* 1. Hero Section */}
      <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">AI Voice Agents</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              AI Voice Agents for Automated Phone Inquiries
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Handle common phone inquiries, collect appointment details, and route caller requests with natural spoken dialogue—configured with agreed scripts and staff escalation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Project on WhatsApp</span>
              </a>

              <a
                href="#voice-workflow-concept"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
              >
                <span>View Telephony Concept</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Practical Business Use Cases */}
      <section className="relative py-16 sm:py-24 bg-[#05070c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              Telephony Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Use Cases for Business Phone Lines
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Target high-volume phone bottlenecks such as missed off-hours calls and repetitive schedule inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-7 space-y-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {uc.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {uc.description}
                </p>
                <div className="pt-2 border-t border-white/[0.06] space-y-2">
                  {uc.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clearly Labelled Voice Workflow Concept */}
      <section id="voice-workflow-concept" className="relative py-16 sm:py-24 bg-[#04060a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Inbound Voice Call Intake Pipeline
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Illustrative diagram demonstrating how an incoming customer call is received, verified against approved business data, and logged for staff action.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 01</span>
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Call Reception</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call answered on first ring with agreed polite branded greeting (English or Arabic).
                </p>
                <div className="text-[11px] font-mono text-blue-400 bg-blue-500/10 p-2 rounded border border-blue-500/20">
                  Latency: Sub-Second
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 02</span>
                  <Mic className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Intent Recognition</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Speech model transcribes request, recognizes inquiry intent (booking, hours, service info).
                </p>
                <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 p-2 rounded border border-cyan-500/20">
                  Processing: Real-Time Stream
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 03</span>
                  <Volume2 className="w-4 h-4 text-indigo-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Spoken Resolution</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Assistant answers from verified knowledge base or collects appointment time and caller name.
                </p>
                <div className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 p-2 rounded border border-indigo-500/20">
                  Voice: Natural Cadence
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl bg-black/50 border border-emerald-500/30 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 04</span>
                  <Share2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Structured Dispatch</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call transcript and structured summary sent to team WhatsApp/email; caller bridged if needed.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                  Output: Immediate Notification
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>* Illustrative telephony architecture. Telecom carrier integration agreed for each project.</span>
              <span className="text-blue-400">Custom Audio & Language Scoping</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deliverables & Scope */}
      <section className="relative py-16 sm:py-24 bg-[#05070d] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Transparent Boundaries
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Deliverables & Telephony Standards
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We agree on phone number routing, speech models, and caller escalation rules before any telephony integration takes place.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-300 block font-medium mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Carrier & Dialect Agreement Policy</span>
                </strong>
                Languages (such as English or Arabic), phone systems, integrations, and capabilities are agreed and tested for each specific project based on verified requirements.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black/40 border border-white/[0.08] p-7 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                  What We Deliver
                </h3>
                <ul className="space-y-3.5">
                  {DELIVERABLES.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Simple 5-Step Process */}
      <ServiceProcessSteps />

      {/* 6. FAQs */}
      <ServiceFAQList serviceTitle="AI Voice Agents" faqs={FAQS} />

      {/* 7. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="AI Voice Agents"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss your call volume, desired language capabilities, and telephony integration requirements on WhatsApp."
      />
    </div>
  );
};
