import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Mic,
  Shield,
  PhoneForwarded,
  UserCheck
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing AI Voice Agents for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'After-Hours Telephone Reception',
    description:
      'Provides a professional spoken response when your office is closed, capturing caller details, answering basic operating questions, and logging callback tickets for morning review.',
    features: ['Natural spoken dialogue', 'Time-based automated routing', 'Instant SMS or WhatsApp staff alert']
  },
  {
    title: 'Appointment Booking & Rescheduling',
    description:
      'Guides callers through scheduling appointments or consultations against real-time calendar availability without requiring manual receptionist phone time.',
    features: ['Calendar sync via API', 'Confirmation SMS dispatch', 'Cancellation policy handling']
  },
  {
    title: 'Inbound Service Inquiry Triage',
    description:
      'Greets callers, identifies the nature of their request, and routes urgent client matters directly to on-call specialists while gathering context beforehand.',
    features: ['Caller intent recognition', 'Warm transfer capability', 'Caller transcript recording']
  },
  {
    title: 'Multilingual Inbound Routing (Arabic & English)',
    description:
      'Voice agent that detects caller language preference and conducts the inquiry smoothly in localized Arabic or professional English.',
    features: ['Localized Arabic pronunciation', 'English voice synthesis', 'Bilingual prompt switching']
  }
];

const DELIVERABLES = [
  'Voice telephony architecture and agreed caller dialogue flow design',
  'Integration with supported VoIP / SIP telephony providers',
  'Approved business knowledge base for answering common phone inquiries',
  'Live call escalation triggers and warm transfer routing to human staff',
  'Call transcript generation and summary logging to email or CRM',
  'Testing across mobile phone networks, landlines, and noisy environments',
  'Admin control panel for updating business hours and transfer numbers',
  '30 days of post-launch telephony support and speech model tuning'
];

const FAQS = [
  {
    question: 'How natural does the AI voice sound over the phone?',
    answer:
      'We use modern neural voice models optimized for conversational telephony with low latency (under 800ms). The pacing, pronunciation, and tone sound human and polished.'
  },
  {
    question: 'What happens if a caller has a complex problem or an emergency?',
    answer:
      'The voice agent is engineered with immediate transfer fallbacks. If caller intent indicates an urgent concern, dispute, or unsupported request, the call is instantly routed to a live staff member.'
  },
  {
    question: 'Do we need a new phone number to use an AI Voice Agent?',
    answer:
      'No. You can either configure conditional call forwarding from your existing business phone number (e.g. forward when busy or after hours) or connect via dedicated virtual numbers.'
  },
  {
    question: 'Are call recordings and transcripts secure and private?',
    answer:
      'Yes. Telephony data and generated audio transcripts are stored securely within your designated environment and subject to strict data governance.'
  }
];

export const AIVoiceAgentsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Voice Agents for Telephony | TITAN AI Agency',
    description:
      'Custom AI voice agents for automated phone reception in Riyadh and remotely. Natural spoken dialogue, appointment booking, and seamless human staff transfer.',
    canonicalPath: '/services/ai-voice-agents',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Voice Agents for Businesses',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Voice assistants for supported enquiry, appointment, and communication workflows in Riyadh and remotely.',
      areaServed: [
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'Country', name: 'Saudi Arabia' }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      {/* 1. Hero Section (Dark Premium Navy) */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#8FA0BA] mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00D1FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00D1FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">AI Voice Agents</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              AI Voice Agents for Automated Phone Inquiries
            </h1>

            <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal">
              Handle common phone inquiries, collect appointment details, and route caller requests with natural spoken dialogue—configured with agreed scripts and staff escalation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-titan-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Discuss Your Project on WhatsApp</span>
              </a>

              <a
                href="#voice-workflow-concept"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold"
              >
                <span>View Telephony Concept</span>
                <ArrowRight className="w-4 h-4 text-[#00D1FF]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Practical Business Use Cases (Clean White) */}
      <section className="relative py-16 sm:py-24 bg-[#FFFFFF] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
              Telephony Efficiency
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Practical Voice Automation for Your Phone Line
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              Ensure callers receive immediate, polite attention even during peak incoming hours or when your staff is engaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="card-titan-light p-7 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  <PhoneCall className="w-5 h-5 text-[#00D1FF]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#071A33]">
                  {uc.title}
                </h3>
                <p className="text-sm text-[#536477] leading-relaxed font-normal">
                  {uc.description}
                </p>
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {uc.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#536477] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clearly Labelled Voice Telephony Flow (Deep Navy) */}
      <section id="voice-workflow-concept" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00D1FF]/15 text-[#00D1FF] border border-[#00D1FF]/30 mb-3">
              <TitanIcon className="w-4 h-4" />
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Illustrative Call Handling Architecture
            </h2>
            <p className="mt-3 text-[#8FA0BA] text-base leading-relaxed">
              Step-by-step caller path demonstrating natural spoken voice synthesis, calendar verification, and seamless staff escalation.
            </p>
          </div>

          <div className="card-titan-dark p-6 sm:p-10 bg-[#0B1F4B]/80 border border-[#00D1FF]/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STEP 01</span>
                  <PhoneCall className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Call Arrival</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Inbound call received via SIP trunking. Agent answers with personalized greeting in &lt;1 second.
                </p>
                <div className="text-[11px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 p-2 rounded-lg border border-[#00D1FF]/20">
                  Latency: Sub-Second
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STEP 02</span>
                  <Mic className="w-4 h-4 text-[#3BA9FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Intent Classification</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Real-time speech-to-text processes caller audio and identifies whether caller needs info or booking.
                </p>
                <div className="text-[11px] font-mono text-[#3BA9FF] bg-[#3BA9FF]/10 p-2 rounded-lg border border-[#3BA9FF]/20">
                  Processing: Neural Audio
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STEP 03</span>
                  <UserCheck className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Action or Booking</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Voice agent reads back confirmed appointment slot or resolves question using approved facts.
                </p>
                <div className="text-[11px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 p-2 rounded-lg border border-[#00D1FF]/20">
                  API: Calendar Synced
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-[#04142E] border border-emerald-500/30 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STEP 04</span>
                  <PhoneForwarded className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Warm Escalation</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  If caller requests personal advisor or has custom requirements, call is transferred live to staff.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  Fallback: Live Transfer
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-[#8FA0BA]">
              <span>* Illustrative telephony model. Voice flows are customized around your business requirements.</span>
              <span className="text-[#00D1FF]">Compliant Call Data Handling</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deliverables & Scope (Light Section) */}
      <section className="relative py-16 sm:py-24 bg-[#F8FAFF] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                Transparent Boundaries
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                Deliverables & Telephony Standards
              </h2>
              <p className="text-[#536477] text-base leading-relaxed">
                We establish explicit telephony bounds, call durations, and escalation rules prior to deployment.
              </p>
              <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs text-[#536477] leading-relaxed">
                <strong className="text-[#071A33] block font-bold mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#3BA9FF]" />
                  <span>Escalation & Safety Notice</span>
                </strong>
                Voice agents are configured strictly for pre-agreed conversational scenarios. Unhandled requests immediately trigger live staff transfer or structured callback logging.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-titan-light p-7 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071A33] font-bold mb-2">
                  What You Receive
                </h3>
                <ul className="space-y-3.5">
                  {DELIVERABLES.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#536477]">
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

      {/* 5. Simple 5-Step Process */}
      <ServiceProcessSteps />

      {/* 6. FAQs */}
      <ServiceFAQList serviceTitle="AI Voice Agents" faqs={FAQS} />

      {/* 7. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="AI Voice Agents"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss your daily call volume, preferred telephone carrier, and appointment booking requirements directly on WhatsApp."
      />
    </div>
  );
};
