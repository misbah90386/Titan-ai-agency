import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  FileSearch,
  CheckCircle2,
  Shield,
  ArrowRight,
  MessageCircle,
  Sparkles,
  MapPin,
  Bot,
  UserCheck,
  Workflow,
  Database
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing AI agents for my business operations.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Internal Document & Policy Lookup',
    description:
      'Assist staff in retrieving verified answers from company SOPs, service manuals, employee guidelines, and compliance records in seconds, reducing internal research bottlenecks.',
    features: ['Approved internal data grounding', 'Instant document citation', 'Staff-facing private interface']
  },
  {
    title: 'Inbound Inquiry Triage & Task Dispatch',
    description:
      'Evaluate incoming client messages, extract key requirements, categorize request urgency, and prepare formatted ticket drafts for the right team member.',
    features: ['Structured data extraction', 'Priority classification', 'Drafting response suggestions']
  },
  {
    title: 'Assisted Client Correspondence Drafting',
    description:
      'Generate accurate, professional response drafts to routine client inquiries based strictly on your approved pricing guidelines and service terms, ready for staff review and sending.',
    features: ['Brand tone consistency', 'Human-in-the-loop review', 'Repetitive writing reduction']
  },
  {
    title: 'Multi-Step Operational Coordination',
    description:
      'Execute defined sequences such as pulling customer records, compiling summary notes before sales meetings, or flagging missing information on customer intake submissions.',
    features: ['Step-by-step task execution', 'Audit trail visibility', 'Systematic error handling']
  }
];

const DELIVERABLES = [
  'Task scoping and structured prompt architecture tailored to your specific workflow',
  'Knowledge base ingestion from your approved documentation, FAQs, and business records',
  'Strict deterministic guardrails preventing speculative or unverified outputs',
  'Human-in-the-loop checkpoints allowing staff review before sensitive actions execute',
  'Clean web interface or tool connector enabling seamless employee usage',
  'Verification testing across edge cases, invalid inputs, and boundary scenarios',
  'Operational handover guide and staff best practices documentation',
  '30 days of post-launch engineering support and prompt refinement'
];

const FAQS = [
  {
    question: 'Can AI agents independently run my entire business?',
    answer:
      'No. We do not claim or build systems that run a business autonomously without oversight. Our AI agents are built to carry out specific, well-defined operational tasks using approved tools and data. Where sensitive decisions, high-value client communications, or financial transactions are involved, we configure human approval checkpoints.'
  },
  {
    question: 'How do you prevent the AI from giving inaccurate information?',
    answer:
      'We use grounded retrieval architectures where the agent only draws answers from your approved company materials (such as official price sheets, product specifications, or service manuals). If a visitor or employee asks something outside the approved knowledge base, the agent is configured to state that it does not have that verified information and escalate to a team member.'
  },
  {
    question: 'Are your AI agent services available for businesses in Riyadh?',
    answer:
      'Yes. We build and deploy AI agent workflows for companies operating in Riyadh, across Saudi Arabia, and remotely worldwide. We coordinate directly with your operational stakeholders to ensure the assistant respects your regional business practices and languages.'
  },
  {
    question: 'What do I need to prepare before starting an AI agent project?',
    answer:
      'You only need to identify the repetitive task you want to streamline and provide sample documentation (such as past email inquiries, standard operating procedures, or FAQ documents). During our initial requirements session, we review your material and define the exact scope together.'
  }
];

export const AIAgentsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Agents for Business in Riyadh | TITAN AI Agency',
    description:
      'Custom AI agents for businesses in Riyadh and remotely. Automate repetitive operational tasks, search internal knowledge, and assist your team with human review.',
    canonicalPath: '/services/ai-agents',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Agents for Business',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Custom-engineered AI assistants that carry out defined operational workflows using approved business information, with human approval checkpoints.',
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
            <span className="text-white">AI Agents</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              AI Agents for Business Operations
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              We engineer purposeful AI agents that perform defined business tasks using your approved data and systems—designed to assist your team with strict guardrails and human review.
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
                href="#agent-workflow-concept"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
              >
                <span>View Example Workflow</span>
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
              Operational Impact
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Use Cases for Your Team
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Target high-frequency repetitive tasks where manual data handling slows down your operational momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-7 space-y-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu className="w-5 h-5" />
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

      {/* 3. Clearly Labelled Workflow Demonstration Concept */}
      <section id="agent-workflow-concept" className="relative py-16 sm:py-24 bg-[#04060a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Example Operational Workflow: Inbound Enquiry Triage
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Illustrative flow diagram showing how an AI agent safely parses an incoming customer message, references verified company documentation, drafts a response, and prompts staff approval.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 01</span>
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Enquiry Ingestion</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Customer submits project details via website form or messaging channel with initial requirements.
                </p>
                <div className="text-[11px] font-mono text-blue-400 bg-blue-500/10 p-2 rounded border border-blue-500/20">
                  Trigger: New Request
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 02</span>
                  <Database className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Knowledge Grounding</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Agent queries approved company service list, pricing parameters, and calendar availability.
                </p>
                <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 p-2 rounded border border-cyan-500/20">
                  Context: Verified Data Only
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 03</span>
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Draft Generation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Agent structures a personalized proposal outline and prepares response draft for team review.
                </p>
                <div className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 p-2 rounded border border-indigo-500/20">
                  Action: Formatted Draft
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl bg-black/50 border border-emerald-500/30 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 04</span>
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Staff Verification</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Team member inspects draft, confirms details, and approves message before dispatch.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                  Control: Human Approval
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>* Illustrative operational model. Systems are configured according to approved customer requirements.</span>
              <span className="text-blue-400">Strict Data Privacy & Isolation</span>
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
                Deliverables & Engineering Scope
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We engineer agents to operate within strict boundary conditions. We agree on tools, access permissions, and success criteria prior to development.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-300 block font-medium mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Operational Governance Policy</span>
                </strong>
                Our AI agents are configured with approved tools, verified data access, and mandatory review steps for high-risk operations. We do not provide unmonitored systems.
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
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
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
      <ServiceFAQList serviceTitle="AI Agents" faqs={FAQS} />

      {/* 7. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="AI Agents"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss which operational bottleneck you would like to streamline and explore a scoped AI agent implementation on WhatsApp."
      />
    </div>
  );
};
