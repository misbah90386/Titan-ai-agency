import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Bot,
  UserCheck,
  Database
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing AI Agents for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Customer Inquiry & Lead Qualification',
    description:
      'Agents that review inbound prospect messages, evaluate requirements against your qualification rubric, extract essential contact data, and route high-value leads directly to your team.',
    features: ['Instant structured intake', 'Configurable qualification rules', 'CRM & WhatsApp data sync']
  },
  {
    title: 'Internal Knowledge Assistants',
    description:
      'Secure internal assistants that index company standard operating procedures, documentation, price schedules, and vendor guidelines so employees can retrieve verified answers in seconds.',
    features: ['Strict source-grounded answers', 'Zero speculative hallucinations', 'Role-based access boundaries']
  },
  {
    title: 'Operational Workflow Assistance',
    description:
      'Agents that assist team members with repeatable administrative tasks: summarizing meeting notes, drafting follow-up emails, creating invoice briefs, and logging status updates in tracking boards.',
    features: ['Pre-configured task templates', 'Mandatory human approval before send', 'Audit log of agent activities']
  },
  {
    title: 'Data Extraction & Document Summarization',
    description:
      'Assistants that parse incoming reports, PDF contracts, or unstructured text to pull out key milestones, pricing figures, and action items into standardized formats.',
    features: ['Standardized schema output', 'Fast batch document processing', 'Data validation checks']
  }
];

const DELIVERABLES = [
  'Detailed task boundary specification and security architecture plan',
  'AI agent software engineered for your specific business workflow',
  'Approved data source indexing with strict source-grounding rules',
  'Human-in-the-loop review interface for high-impact action approvals',
  'Integration into your existing communication or CRM channels',
  'Full source code handover, deployment configuration, and admin documentation',
  'Live team walkthrough and operational training session',
  '30 days of post-deployment support and prompt refinement'
];

const FAQS = [
  {
    question: 'How do you prevent AI agents from making mistakes or hallucinating?',
    answer:
      'We use retrieval-augmented architecture that restricts the agent to verified company documents and approved system data. If the answer is not present in approved records, the agent is configured to state that clearly and escalate to human staff rather than guess.'
  },
  {
    question: 'Does the AI agent make decisions autonomously without human oversight?',
    answer:
      'We advocate human-in-the-loop architecture for operations involving finances, binding commitments, or customer disputes. The agent prepares structured drafts, recommendations, and summaries, but final execution requires confirmation from authorized personnel.'
  },
  {
    question: 'Where is our company data processed and stored?',
    answer:
      'Data isolation and privacy are priorities. We configure secure API integrations with enterprise data boundaries, ensuring your proprietary documents and customer information are never used to train public language models.'
  },
  {
    question: 'Can AI agents integrate with our current tools and CRM?',
    answer:
      'Yes. During scoping, we evaluate your existing software stack—including Google Workspace, WhatsApp Business API, HubSpot, Notion, or custom databases—to establish reliable webhook connections.'
  }
];

export const AIAgentsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Agents for Businesses | TITAN AI Agency',
    description:
      'Deploy autonomous and semi-autonomous AI agents engineered for business operations in Riyadh and remotely. Strict guardrails, verified data grounding, and human review.',
    canonicalPath: '/services/ai-agents',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Agents for Businesses',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'AI assistants designed to help with specific business tasks and workflows in Riyadh and remotely.',
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
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiNetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3BA9FF" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path d="M 80 140 L 260 220 L 420 120 L 640 200 L 860 100 L 1100 180" stroke="url(#aiNetGrad)" strokeWidth="1" strokeDasharray="4 6" fill="none" className="animate-network-flow" />
          <path d="M 180 340 L 360 260 L 540 330 L 760 230 L 980 310" stroke="url(#aiNetGrad)" strokeWidth="1" strokeDasharray="3 5" fill="none" className="animate-network-flow" />
          <circle cx="260" cy="220" r="2.5" fill="#00D1FF" className="animate-node-pulse" />
          <circle cx="420" cy="120" r="2" fill="#3BA9FF" className="animate-node-pulse" />
          <circle cx="640" cy="200" r="2.5" fill="#00D1FF" className="animate-node-pulse" />
          <circle cx="860" cy="100" r="2" fill="#3BA9FF" className="animate-node-pulse" />
          <circle cx="360" cy="260" r="2" fill="#00D1FF" className="animate-node-pulse" />
          <circle cx="540" cy="330" r="2.5" fill="#3BA9FF" className="animate-node-pulse" />
          <circle cx="760" cy="230" r="2" fill="#00D1FF" className="animate-node-pulse" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none animate-ambient-1" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#8FA0BA] mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00D1FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00D1FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">AI Agents</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              AI Agents for Business Operations
            </h1>

            <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal">
              We engineer purposeful AI agents that perform defined business tasks using your approved data and systems—designed to assist your team with strict guardrails and human review.
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
                href="#agent-workflow-concept"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold"
              >
                <span>View Example Workflow</span>
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
              Operational Impact
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Practical Use Cases for Your Team
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              Target high-frequency repetitive tasks where manual data handling slows down your operational momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="card-titan-light p-7 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  <Cpu className="w-5 h-5 text-[#00D1FF]" />
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

      {/* 3. Clearly Labelled Workflow Demonstration Concept (Deep Navy) */}
      <section id="agent-workflow-concept" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00D1FF]/15 text-[#00D1FF] border border-[#00D1FF]/30 mb-3">
              <TitanIcon className="w-4 h-4" />
              <span>Demonstration Concept</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Example Operational Workflow: Inbound Enquiry Triage
            </h2>
            <p className="mt-3 text-[#8FA0BA] text-base leading-relaxed">
              Illustrative flow diagram showing how an AI agent safely parses an incoming customer message, references verified company documentation, drafts a response, and prompts staff approval.
            </p>
          </div>

          <div className="card-titan-dark p-6 sm:p-10 bg-[#0B1F4B]/80 border border-[#00D1FF]/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 01</span>
                  <MessageCircle className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Enquiry Ingestion</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Customer submits project details via website form or messaging channel with initial requirements.
                </p>
                <div className="text-[11px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 p-2 rounded-lg border border-[#00D1FF]/20">
                  Trigger: New Request
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 02</span>
                  <Database className="w-4 h-4 text-[#3BA9FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Knowledge Grounding</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Agent queries approved company service list, pricing parameters, and calendar availability.
                </p>
                <div className="text-[11px] font-mono text-[#3BA9FF] bg-[#3BA9FF]/10 p-2 rounded-lg border border-[#3BA9FF]/20">
                  Context: Verified Data Only
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-[#04142E] border border-white/[0.08] p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 03</span>
                  <Bot className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Draft Generation</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Agent structures a personalized proposal outline and prepares response draft for team review.
                </p>
                <div className="text-[11px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 p-2 rounded-lg border border-[#00D1FF]/20">
                  Action: Formatted Draft
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-[#04142E] border border-emerald-500/30 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8FA0BA]">
                  <span>STAGE 04</span>
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Staff Verification</h4>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  Team member inspects draft, confirms details, and approves message before dispatch.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  Control: Human Approval
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-[#8FA0BA]">
              <span>* Illustrative operational model. Systems are configured according to approved customer requirements.</span>
              <span className="text-[#00D1FF]">Strict Data Privacy & Isolation</span>
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
                Deliverables & Engineering Scope
              </h2>
              <p className="text-[#536477] text-base leading-relaxed">
                We engineer agents to operate within strict boundary conditions. We agree on tools, access permissions, and success criteria prior to development.
              </p>
              <div className="p-4 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs text-[#536477] leading-relaxed">
                <strong className="text-[#071A33] block font-bold mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#3BA9FF]" />
                  <span>Operational Governance Policy</span>
                </strong>
                Our AI agents are configured with approved tools, verified data access, and mandatory review steps for high-risk operations. We do not provide unmonitored systems.
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
