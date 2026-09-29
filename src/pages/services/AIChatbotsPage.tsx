import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Bot,
  User,
  Send
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing AI Chatbots for my website.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Website FAQ & Operating Info Assistant',
    description:
      'Grounded conversational widget that instantly resolves customer questions regarding services, prices, business hours, location directions, and booking procedures.',
    features: ['Instant 24/7 responsiveness', 'Strict grounding on verified documentation', 'Custom widget matching website branding']
  },
  {
    title: 'Inbound Lead Capture & Qualification',
    description:
      'Engages visitors in natural dialogue to collect essential project details, timeline expectations, and phone/email contacts before handing off to sales.',
    features: ['Polite qualification flow', 'Email & WhatsApp alert notifications', 'Direct sync to CRM or spreadsheet']
  },
  {
    title: 'Seamless WhatsApp Routing Trigger',
    description:
      'When an inquiry requires custom estimation or personal discussion, the bot provides a direct prefilled WhatsApp link so prospects continue talking to your team seamlessly.',
    features: ['Prefilled context messages', 'Zero-friction customer transition', 'Mobile-first click-to-chat']
  },
  {
    title: 'Multilingual Arabic & English Support',
    description:
      'Effortlessly handles inquiries in both English and Arabic, providing localized, culturally appropriate responses for businesses in Saudi Arabia.',
    features: ['Natural Arabic comprehension', 'Bilingual tone matching', 'Contextual language switching']
  }
];

const DELIVERABLES = [
  'Custom chat widget UI styled in your brand colors and typography',
  'Approved business knowledge base integration and strict prompt boundaries',
  'Lead notification webhooks via WhatsApp, Email, or CRM',
  'Bilingual language support (Arabic and English)',
  'Testing across mobile and desktop browsers to verify responsive behavior',
  'Embed snippet or React component ready for single-line site integration',
  'Admin documentation for updating FAQs and knowledge documents',
  '30 days of post-launch tuning and conversational monitoring support'
];

const FAQS = [
  {
    question: 'How do you prevent the chatbot from providing incorrect prices or facts?',
    answer:
      'The chatbot is strictly grounded on your verified business documents and service lists. We program explicit boundaries instructing it to admit when information is unavailable and offer a direct WhatsApp transfer to your human staff.'
  },
  {
    question: 'Can the chatbot handle both Arabic and English inquiries?',
    answer:
      'Yes. Our chatbots understand and respond naturally in both Arabic and English, allowing businesses in Saudi Arabia and regional markets to serve diverse customer bases effortlessly.'
  },
  {
    question: 'How difficult is it to install the chatbot on my existing website?',
    answer:
      'Integration is straightforward. We provide a lightweight, optimized script tag or React component that loads asynchronously without slowing down your website.'
  },
  {
    question: 'What notifications do we receive when a lead initiates chat?',
    answer:
      'You can receive real-time notifications via WhatsApp, Telegram, email, or a webhook directly to your CRM whenever a visitor provides their contact information.'
  }
];

export const AIChatbotsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Chatbots for Businesses | TITAN AI Agency',
    description:
      'Custom AI chatbots for businesses in Riyadh and remotely. Grounded 24/7 customer support, bilingual Arabic & English, and seamless WhatsApp lead capture.',
    canonicalPath: '/services/ai-chatbots',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Chatbots for Businesses',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Conversational assistants that answer common questions and collect enquiries in Riyadh and remotely.',
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
            <span className="text-white font-medium">AI Chatbots</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              AI Chatbots for Business Enquiries
            </h1>

            <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal">
              Answer common questions 24/7 using approved business information, collect visitor contact details, and seamlessly hand off conversations to your human team on WhatsApp.
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
                href="#chatbot-demo-concept"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold"
              >
                <span>View Chatbot Preview</span>
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
              Customer Experience
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Practical Use Cases for Customer Engagement
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              Designed to help website visitors find quick answers while ensuring your business never misses an off-hours enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="card-titan-light p-7 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  <MessageSquare className="w-5 h-5 text-[#00D1FF]" />
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

      {/* 3. Clearly Labelled Chatbot UI Demonstration Concept (Deep Navy) */}
      <section id="chatbot-demo-concept" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00D1FF]/15 text-[#00D1FF] border border-[#00D1FF]/30 mb-3">
              <TitanIcon className="w-4 h-4" />
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Example Interaction: FAQ Resolution & Lead Capture
            </h2>
            <p className="mt-3 text-[#8FA0BA] text-base leading-relaxed">
              Illustrative preview showing how a grounded chatbot answers questions using verified business info and invites the user to chat on WhatsApp.
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-3xl bg-[#0B1F4B] border border-[#00D1FF]/25 shadow-2xl overflow-hidden">
            {/* Widget Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#04142E] border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#00D1FF] flex items-center justify-center text-[#04142E] font-bold">
                    <Bot className="w-5 h-5 text-[#04142E]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#04142E]" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">TITAN Agency Assistant</div>
                  <div className="text-[11px] font-mono text-[#00D1FF]">Grounded Business AI • Online</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#8FA0BA] px-2.5 py-0.5 rounded bg-white/[0.06] border border-white/10">
                DEMO PREVIEW
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="p-6 space-y-4">
              {/* Bot Message 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#00D1FF]/20 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 text-[#00D1FF] text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-[#04142E] p-3.5 text-xs sm:text-sm text-[#EAF7FF] border border-white/[0.08] max-w-[85%]">
                  Hello! How can I assist you with TITAN AI AGENCY's digital solutions today?
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#00D1FF] to-[#3BA9FF] p-3.5 text-xs sm:text-sm text-[#04142E] font-semibold max-w-[85%]">
                  Do you develop custom websites for businesses in Riyadh?
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-slate-300 text-xs">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* Bot Message 2 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#00D1FF]/20 border border-[#00D1FF]/30 flex items-center justify-center shrink-0 text-[#00D1FF] text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-[#04142E] p-3.5 text-xs sm:text-sm text-[#EAF7FF] border border-white/[0.08] max-w-[85%] space-y-2">
                  <p>
                    Yes, absolutely! We engineer responsive, high-performance websites for businesses in Riyadh and remotely, complete with WhatsApp enquiry integration and 100% client code ownership.
                  </p>
                  <p className="text-[11px] text-[#8FA0BA] font-mono">
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
            <div className="p-4 bg-[#04142E] border-t border-white/[0.08] flex items-center gap-2">
              <input
                type="text"
                disabled
                placeholder="Type your question... (Demo concept)"
                className="flex-grow bg-black/40 border border-white/[0.08] rounded-xl px-4 py-2 text-xs text-slate-400 focus:outline-none cursor-not-allowed"
              />
              <button disabled className="p-2 rounded-xl bg-[#00D1FF]/50 text-[#04142E] cursor-not-allowed">
                <Send className="w-4 h-4" />
              </button>
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
                Deliverables & Engineering Standards
              </h2>
              <p className="text-[#536477] text-base leading-relaxed">
                We configure chatbots with clean styling, verified prompt boundaries, and dependable notification webhooks.
              </p>
              <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs text-[#536477] leading-relaxed">
                <strong className="text-[#071A33] block font-bold mb-1">Knowledge Grounding Policy</strong>
                Every chatbot is strictly grounded in your verified documents. We do not enable open-ended hallucination or claims outside your approved scope.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-titan-light p-7 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071A33] font-bold mb-2">
                  Included in Every Deployment
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
