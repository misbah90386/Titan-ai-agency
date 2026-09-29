import React from 'react';
import { Link } from 'react-router-dom';
import {
  Workflow,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Zap,
  FileCheck,
  Bell,
  Database
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing Business Automation for my operations.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Inbound Lead Triage & Immediate Notifications',
    description:
      'Connects your website inquiry forms directly to team WhatsApp chats or emails, ensuring immediate alerts when a new prospect reaches out with preformatted summaries.',
    features: ['Zero lead response delay', 'Custom team alert routing', 'Lead data normalization']
  },
  {
    title: 'CRM & Spreadsheet Data Synchronization',
    description:
      'Eliminates duplicate manual copy-pasting by synchronizing customer records across Google Sheets, Airtable, HubSpot, or SQL databases in real time.',
    features: ['Bidirectional or trigger sync', 'Automated data cleaning', 'Field mapping rules']
  },
  {
    title: 'Automated Customer Follow-Up Sequences',
    description:
      'Triggers personalized confirmation messages, appointment reminders, and onboarding documents automatically when a customer books or purchases.',
    features: ['WhatsApp & email dispatch', 'Scheduled reminder triggers', 'Dynamic customer variables']
  },
  {
    title: 'Internal Operational Alerts & Task Triggers',
    description:
      'Notifies project managers or team members when key milestones occur, contracts are signed, or client requests need attention without manual chasing.',
    features: ['Milestone-based triggers', 'Multi-channel dispatch', 'Audit logs of triggered events']
  }
];

const DELIVERABLES = [
  'Detailed workflow architecture blueprint and trigger logic map',
  'Automated pipeline configuration connecting agreed software endpoints',
  'Data validation checks to prevent incomplete or corrupt record entry',
  'Error handling routines and fallback failure notification alerts',
  'Full end-to-end testing with mock and staging business data',
  'Admin handover documentation and webhook credential transfer',
  '100% client ownership of all automation scripts and platform accounts',
  '30 days of complimentary post-launch pipeline monitoring support'
];

const FAQS = [
  {
    question: 'Which software tools can be connected via automation?',
    answer:
      'We connect most modern business software that provides API endpoints or webhook support, including Google Workspace, WhatsApp Business API, HubSpot, Notion, Stripe, Airtable, Slack, and custom databases.'
  },
  {
    question: 'What happens if a third-party service is temporarily down?',
    answer:
      'Our automation pipelines incorporate retry logic and fallback failure alerts. If an external service returns a temporary error, the pipeline retries automatically or notifies your administrator without losing customer data.'
  },
  {
    question: 'Do we need paid third-party automation subscriptions?',
    answer:
      'Depending on your preferred architecture, we can build custom serverless webhooks that run without ongoing platform subscriptions or configure standard tools like Make or Zapier if your team prefers a visual dashboard.'
  },
  {
    question: 'How do you ensure our sensitive customer data remains secure?',
    answer:
      'We use encrypted API credentials, scoped permissions, and adhere strictly to data privacy standards. Credentials and integration tokens are handed over directly to your internal accounts upon completion.'
  }
];

export const BusinessAutomationPage: React.FC = () => {
  usePageSEO({
    title: 'Business Automation Services | TITAN AI Agency',
    description:
      'Streamline operations with custom business automation for companies in Riyadh and remotely. Connect forms, CRMs, WhatsApp notifications, and operational databases.',
    canonicalPath: '/services/business-automation',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Business Automation Services',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Connected workflows that reduce repetitive tasks and keep information moving between tools in Riyadh and remotely.',
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
            <span className="text-white font-medium">Business Automation</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Business Workflow Automation Services
            </h1>

            <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal">
              Connect your website, forms, messaging channels, and internal records into smooth automated workflows that reduce manual entry and accelerate customer follow-ups.
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
                href="#automation-pipeline-concept"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold"
              >
                <span>View Pipeline Concept</span>
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
              Efficiency Focus
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Practical Automations for Daily Operations
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              Target routine operational bottlenecks that waste hours of employee time on manual data entry and follow-up chasing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="card-titan-light p-7 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  <Workflow className="w-5 h-5 text-[#00D1FF]" />
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

      {/* 3. Clearly Labelled Automation Pipeline Concept (Deep Navy) */}
      <section id="automation-pipeline-concept" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00D1FF]/15 text-[#00D1FF] border border-[#00D1FF]/30 mb-3">
              <TitanIcon className="w-4 h-4" />
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Lead Routing & Record Synchronization Pipeline
            </h2>
            <p className="mt-3 text-[#8FA0BA] text-base leading-relaxed">
              Illustrative diagram of a four-stage workflow that captures web enquiries, filters data, sends instant mobile notifications, and updates business spreadsheets.
            </p>
          </div>

          <div className="card-titan-dark p-6 sm:p-10 bg-[#0B1F4B]/80 border border-[#00D1FF]/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 01</span>
                  <Zap className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Event Trigger</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Prospect submits enquiry on website or sends initial inquiry message.
                </p>
                <div className="text-[11px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 p-2 rounded-lg border border-[#00D1FF]/20">
                  Input: Form / Webhook
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 02</span>
                  <FileCheck className="w-4 h-4 text-[#3BA9FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Validation & Triage</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Workflow verifies phone/email, extracts service category, and filters spam.
                </p>
                <div className="text-[11px] font-mono text-[#3BA9FF] bg-[#3BA9FF]/10 p-2 rounded-lg border border-[#3BA9FF]/20">
                  Filter: Data Hygiene
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 03</span>
                  <Bell className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Team Notification</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Instant formatted alert dispatched to team WhatsApp or email for immediate response.
                </p>
                <div className="text-[11px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 p-2 rounded-lg border border-[#00D1FF]/20">
                  Channel: WhatsApp / Email
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-[#04142E] border border-emerald-500/30 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 04</span>
                  <Database className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Database Sync</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  New client row logged in internal spreadsheet or CRM with clean timestamp.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  Storage: Google Sheets / CRM
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-[#8FA0BA]">
              <span>* Illustrative workflow architecture. Software endpoints and tools are agreed for each project.</span>
              <span className="text-[#00D1FF]">Deterministic Logic & Error Logging</span>
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
                Deliverables & Scope Policy
              </h2>
              <p className="text-[#536477] text-base leading-relaxed">
                We clearly specify the exact software connections, trigger rules, and notification endpoints before implementation.
              </p>
              <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs text-[#536477] leading-relaxed">
                <strong className="text-[#071A33] block font-bold mb-1">Integration Verification Policy</strong>
                We only implement verified integrations between software tools that provide supported APIs, webhooks, or integration modules agreed during project scoping.
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
      <ServiceFAQList serviceTitle="Business Automation" faqs={FAQS} />

      {/* 7. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="Business Automation"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss which manual task or notification workflow your team would like to automate on WhatsApp."
      />
    </div>
  );
};
