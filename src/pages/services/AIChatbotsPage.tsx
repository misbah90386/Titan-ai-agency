import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Clock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  MapPin,
  HelpCircle,
  Send,
  Bot,
  User
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing an AI chatbot for my business website.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: '24/7 Inbound Customer Enquiry Intake',
    description:
      'Engage website visitors after business hours, collect their specific service requirements and contact info, and ensure no prospective lead leaves without leaving their details.',
    features: ['Instant greeting & lead capture', 'Structured intake fields', 'Instant notification to your team']
  },
  {
    title: 'Instant FAQ & Business Information',
    description:
      'Answer recurring questions regarding your service offerings, branch locations, operating hours, delivery policies, and general company information using approved documents.',
    features: ['Grounded knowledge source', 'Reduces repetitive support tickets', 'Up-to-date business data']
  },
  {
    title: 'Preliminary Lead Qualification',
    description:
      'Ask structured qualifying questions—such as timeline, project type, or specific requirements—to help your sales team prioritize consultations effectively.',
    features: ['Tailored question flows', 'Lead profile enrichment', 'Pre-consultation context']
  },
  {
    title: 'Seamless WhatsApp & Human Escalation',
    description:
      'When a customer requests human assistance or asks a complex question, the chatbot provides an immediate one-tap transition to your WhatsApp chat or email support.',
    features: ['Direct WhatsApp transfer', 'Contextual conversation handoff', 'No frustrating dead-ends']
  }
];

const DELIVERABLES = [
  'Custom branded chat widget styled to match your website design and typography',
  'Knowledge base configuration referencing your verified FAQs, service lists, and policies',
  'Strict response boundaries preventing unverified answers or hallucinated promises',
  'Lead capture flow recording visitor name, phone/email, and inquiry description',
  'Automated team notifications (via WhatsApp or email) whenever a new enquiry arrives',
  'One-tap escalation button routing conversations to your human team members',
  'Cross-browser and mobile device testing to ensure responsive usability',
  '30 days of post-launch support, response auditing, and knowledge refinements'
];

const FAQS = [
  {
    question: 'Can the chatbot guarantee 100% perfect answers to every question?',
    answer:
      'No chatbot can guarantee perfection for every possible phrasing. However, our chatbots are built to minimize errors by strictly answering only from your approved business data. When a query falls outside the verified materials, the bot gracefully informs the visitor and offers an instant connection to your human team on WhatsApp.'
  },
  {
    question: 'How does the chatbot hand off conversations to a human?',
    answer:
      'Whenever a visitor requests to speak with a person, or when their question requires custom evaluation, the widget presents an immediate WhatsApp action button with their enquiry context pre-filled. This ensures a frictionless handoff without forcing customers to repeat themselves.'
  },
  {
    question: 'Does the chatbot work on mobile phones as well as desktops?',
    answer:
      'Yes. Our chat widgets are engineered mobile-first. They expand cleanly on mobile viewports without covering important site elements or trapping the screen, and they load quickly on cellular data.'
  },
  {
    question: 'Do you configure chatbots for businesses in Riyadh and across Saudi Arabia?',
    answer:
      'Yes. We build chatbots for companies operating in Riyadh, throughout Saudi Arabia, and remotely. We can ground the chatbot in Arabic and English content, ensuring it speaks naturally to your target clientele.'
  }
];

export const AIChatbotsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Chatbots for Businesses in Riyadh | TITAN AI Agency',
    description:
      'Intelligent AI chatbots for business websites in Riyadh and remotely. Answer questions 24/7 from approved company data, collect leads, and escalate to your team.',
    canonicalPath: '/services/ai-chatbots',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Chatbots for Business Websites',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Conversational assistants grounded in approved business information to answer common questions 24/7, qualify inquiries, and escalate to human staff.',
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
            <span className="text-white">AI Chatbots</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              AI Chatbots for Business Enquiries
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Answer common questions 24/7 using approved business information, collect visitor contact details, and seamlessly hand off conversations to your human team on WhatsApp.
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
                href="#chatbot-demo-concept"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
              >
                <span>View Chatbot Preview</span>
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
              Customer Experience
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Use Cases for Customer Engagement
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Designed to help website visitors find quick answers while ensuring your business never misses an off-hours enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-7 space-y-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MessageSquare className="w-5 h-5" />
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

      {/* 3. Clearly Labelled Chatbot UI Demonstration Concept */}
      <section id="chatbot-demo-concept" className="relative py-16 sm:py-24 bg-[#04060a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Example Interaction: FAQ Resolution & Lead Capture
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Illustrative preview showing how a grounded chatbot answers questions using verified business info and invites the user to chat on WhatsApp.
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-3xl bg-[#090d18] border border-white/[0.1] shadow-2xl overflow-hidden">
            {/* Widget Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0d1322] border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0d1322]" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">TITAN Agency Assistant</div>
                  <div className="text-[11px] font-mono text-emerald-400">Grounded Business AI • Online</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                DEMO PREVIEW
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="p-6 space-y-4">
              {/* Bot Message 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-800/80 p-3.5 text-xs sm:text-sm text-slate-200 border border-white/[0.06] max-w-[85%]">
                  Hello! How can I assist you with TITAN AI AGENCY's services today?
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="rounded-2xl rounded-tr-sm bg-blue-600 p-3.5 text-xs sm:text-sm text-white max-w-[85%]">
                  Do you develop custom websites for businesses in Riyadh?
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-slate-300 text-xs">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* Bot Message 2 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-800/80 p-3.5 text-xs sm:text-sm text-slate-200 border border-white/[0.06] max-w-[85%] space-y-2">
                  <p>
                    Yes, absolutely! We build responsive, high-performance websites for businesses in Riyadh and remotely, complete with WhatsApp enquiry integration and full code ownership.
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Would you like to connect directly with our engineering team on WhatsApp to review your requirements?
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mock Input Bar */}
            <div className="p-4 bg-[#0d1322] border-t border-white/[0.08] flex items-center gap-2">
              <input
                type="text"
                disabled
                placeholder="Type your question... (Demo concept)"
                className="flex-grow bg-black/40 border border-white/[0.08] rounded-xl px-4 py-2 text-xs text-slate-400 focus:outline-none cursor-not-allowed"
              />
              <button disabled className="p-2 rounded-xl bg-blue-600/50 text-white/50 cursor-not-allowed">
                <Send className="w-4 h-4" />
              </button>
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
                Deliverables & Engineering Standards
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We configure chatbots with clean styling, verified prompt boundaries, and dependable notification webhooks.
              </p>
              <div className="p-4 rounded-xl bg-blue-500/[0.06] border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block font-medium mb-1">Knowledge Grounding Policy</strong>
                Every chatbot is strictly grounded in your verified documents. We do not enable open-ended hallucination or claims outside your approved scope.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black/40 border border-white/[0.08] p-7 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                  Included in Every Deployment
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
      <ServiceFAQList serviceTitle="AI Chatbots" faqs={FAQS} />

      {/* 7. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="AI Chatbots"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss your website FAQ volume, lead capture goals, and custom chatbot requirements directly on WhatsApp."
      />
    </div>
  );
};
