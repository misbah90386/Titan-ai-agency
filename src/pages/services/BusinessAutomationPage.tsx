import React from 'react';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Zap,
  Bell,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  MapPin,
  CalendarCheck,
  Database,
  FileCheck,
  SendHorizontal
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing business workflow automation for my team.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Instant Multi-Channel Enquiry Notifications',
    description:
      'The moment a customer fills a website form or reaches out, immediately route formatted notification summaries via WhatsApp, SMS, or email to the right team member.',
    features: ['Zero response delay', 'Custom team routing rules', 'Mobile notification alerts']
  },
  {
    title: 'Customer Intake & Document Setup',
    description:
      'Automatically create customer folders, generate standard intake summaries, and trigger onboarding email sequences whenever a proposal is accepted.',
    features: ['Eliminates manual file creation', 'Consistent client onboarding', 'Standardized record keeping']
  },
  {
    title: 'Appointment & Payment Follow-Up Reminders',
    description:
      'Send automated, polite reminder sequences via WhatsApp or email prior to booked consultations or upcoming invoice milestones to minimize no-shows and payment friction.',
    features: ['Custom reminder schedules', 'Polite automated messaging', 'Reduces missed appointments']
  },
  {
    title: 'Record Updates Across Databases & Spreadsheets',
    description:
      'Keep your internal spreadsheets, CRM records, and project management tools in sync automatically without requiring staff to re-key customer data multiple times.',
    features: ['Two-way data synchronizing', 'Eliminates copy-paste errors', 'Clean audit history']
  }
];

const DELIVERABLES = [
  'Detailed scoping of data inputs, trigger conditions, and operational decision paths',
  'Workflow configuration connecting your approved business tools, forms, and messaging endpoints',
  'Robust validation rules and error-handling routines to prevent dropped or corrupted records',
  'Custom notification templates formatted cleanly for mobile reading on WhatsApp or email',
  'End-to-end verification testing simulating edge cases, delayed inputs, and network retries',
  'Operational handover guide explaining workflow triggers, maintenance steps, and credentials',
  'Full ownership of workflow accounts, scripts, and configuration blueprints',
  '30 days of post-launch technical support and minor workflow adjustments'
];

const FAQS = [
  {
    question: 'Which software tools can be connected with automation?',
    answer:
      'We connect tools that provide supported public APIs, webhooks, or integration platforms (such as Zapier, Make, Google Workspace, Airtable, CRMs, and email gateways). The specific systems and technical feasibility are reviewed and verified during the scoping discussion before any implementation begins.'
  },
  {
    question: 'How do automated workflows handle errors or service downtimes?',
    answer:
      'We configure automated retry logic and failure notification alerts. If an external service is temporarily unavailable, the workflow logs the error, attempts automatic retries, and notifies your designated administrator rather than silently failing.'
  },
  {
    question: 'Are automation services available for businesses in Riyadh?',
    answer:
      'Yes. TITAN AI AGENCY engineers automation pipelines for businesses in Riyadh, across Saudi Arabia, and remotely. We routinely build workflows that support regional Arabic text formatting and local business hours.'
  },
  {
    question: 'Will our team need technical programming knowledge to use the workflows?',
    answer:
      'No. The workflows run quietly in the background. Your team simply receives clear notifications on WhatsApp or email and uses your normal tools. We provide clean operational documentation at handover.'
  }
];

export const BusinessAutomationPage: React.FC = () => {
  usePageSEO({
    title: 'Business Workflow Automation in Riyadh | TITAN AI Agency',
    description:
      'Custom business workflow automation for companies in Riyadh and remotely. Connect inquiry capture, instant notifications, reminders, and database updates.',
    canonicalPath: '/services/business-automation',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Business Workflow Automation Services',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Connected digital workflows designed to capture inquiries, send instant notifications, issue reminders, and sync business records.',
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
            <span className="text-white">Business Automation</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              Business Workflow Automation Services
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Connect your website, forms, messaging channels, and internal records into smooth automated workflows that reduce manual entry and accelerate customer follow-ups.
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
                href="#automation-pipeline-concept"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
              >
                <span>View Pipeline Concept</span>
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
              Efficiency Focus
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Automations for Daily Operations
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Target routine operational bottlenecks that waste hours of employee time on manual data entry and follow-up chasing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-7 space-y-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Workflow className="w-5 h-5" />
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

      {/* 3. Clearly Labelled Automation Pipeline Concept */}
      <section id="automation-pipeline-concept" className="relative py-16 sm:py-24 bg-[#04060a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Lead Routing & Record Synchronization Pipeline
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Illustrative diagram of a four-stage workflow that captures web enquiries, filters data, sends instant mobile notifications, and updates business spreadsheets.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 01</span>
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Event Trigger</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prospect submits enquiry on website or sends initial inquiry message.
                </p>
                <div className="text-[11px] font-mono text-blue-400 bg-blue-500/10 p-2 rounded border border-blue-500/20">
                  Input: Form / Webhook
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 02</span>
                  <FileCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Validation & Triage</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Workflow verifies phone/email, extracts service category, and filters spam.
                </p>
                <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 p-2 rounded border border-cyan-500/20">
                  Filter: Data Hygiene
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 03</span>
                  <Bell className="w-4 h-4 text-indigo-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Team Notification</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Instant formatted alert dispatched to team WhatsApp or email for immediate response.
                </p>
                <div className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 p-2 rounded border border-indigo-500/20">
                  Channel: WhatsApp / Email
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl bg-black/50 border border-emerald-500/30 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 04</span>
                  <Database className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Database Sync</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  New client row logged in internal spreadsheet or CRM with clean timestamp.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                  Storage: Google Sheets / CRM
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>* Illustrative workflow architecture. Software endpoints and tools are agreed for each project.</span>
              <span className="text-blue-400">Deterministic Logic & Error Logging</span>
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
                Deliverables & Scope Policy
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We clearly specify the exact software connections, trigger rules, and notification endpoints before implementation.
              </p>
              <div className="p-4 rounded-xl bg-blue-500/[0.06] border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block font-medium mb-1">Integration Verification Policy</strong>
                We only implement verified integrations between software tools that provide supported APIs, webhooks, or integration modules agreed during project scoping.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black/40 border border-white/[0.08] p-7 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                  What You Receive
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
