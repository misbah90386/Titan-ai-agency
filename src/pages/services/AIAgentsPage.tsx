import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Bot,
  UserCheck,
  Database,
  Search,
  Calendar,
  Layers,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';
import { FadeIn } from '../../components/motion/MotionComponents';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I would like to discuss building Custom AI Agents for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const AGENT_EXAMPLES = [
  { title: 'Customer Support Agent', desc: 'Answers questions, troubleshoots common issues, and assists clients 24/7.' },
  { title: 'Lead Qualification Agent', desc: 'Evaluates prospect requirements, budgets, and timelines before passing to sales.' },
  { title: 'Sales Assistant', desc: 'Guides prospects through service offerings, pricing ranges, and proposals.' },
  { title: 'Website AI Assistant', desc: 'Engages site visitors interactively to provide instant guidance and capture contact details.' },
  { title: 'Internal Business Assistant', desc: 'Helps employees find internal company policies, pricing guidelines, and SOPs in seconds.' },
  { title: 'Research Assistant', desc: 'Pulls data summaries, competitor benchmarks, and reports from internal documents.' },
  { title: 'FAQ Agent', desc: 'Resolves repetitive high-volume questions across websites and messaging channels.' },
  { title: 'Appointment Assistant', desc: 'Coordinates scheduling, checks calendar availability, and confirms bookings.' }
];

const CAPABILITIES = [
  { title: 'Understand Business Information', desc: 'Ingests your product manuals, pricing structures, and company rules with high precision.' },
  { title: 'Answer Customer Questions', desc: 'Delivers clear, instant, and factually grounded responses without hallucinations.' },
  { title: 'Capture Leads', desc: 'Collects verified prospect contact info, business name, and detailed project needs.' },
  { title: 'Categorize Inquiries', desc: 'Classifies requests by urgency and department to streamline internal workflows.' },
  { title: 'Assist Employees', desc: 'Empowers staff with instant knowledge search, drafting tools, and summary generation.' },
  { title: 'Connect With Supported Business Tools', desc: 'Syncs data with your CRM, Google Workspace, WhatsApp, or databases via webhooks.' },
  { title: 'Hand Conversations to Humans', desc: 'Recognizes sensitive or complex requests and gracefully escalates to team members.' }
];

const PROBLEMS_SOLVED = [
  {
    problem: 'Repetitive customer questions',
    solution: 'Automates immediate, accurate responses to common inquiries 24 hours a day, 7 days a week.'
  },
  {
    problem: 'Slow response times',
    solution: 'Eliminates waiting time by engaging inbound prospects instantaneously across web and messaging channels.'
  },
  {
    problem: 'Employees wasting time on simple tasks',
    solution: 'Offloads routine lookups, draft compositions, and lead data entry so staff can focus on high-value client work.'
  },
  {
    problem: 'Leads not being organized',
    solution: 'Automatically parses, scores, and categorizes inbound leads directly into your pipeline without manual data entry.'
  },
  {
    problem: 'Business information scattered across systems',
    solution: 'Centralizes company documentation, pricing sheets, and policies into a single verified knowledge engine.'
  }
];

const DELIVERABLES = [
  'Detailed task boundary scoping and AI persona definition document',
  'Custom AI agent architecture engineered for your company’s specific workflows',
  'Approved data source ingestion with strict source-grounding rules and guardrails',
  'Seamless human-in-the-loop escalation interface for complex requests',
  'Integration into your website widget, WhatsApp, CRM, or internal portal',
  'Full source code handover and deployment configuration with zero vendor lock-in',
  'Staff training session and administrator operational manual',
  '30 days of post-deployment monitoring and prompt refinement'
];

const FAQS = [
  {
    question: 'How do you prevent the AI agent from making things up or hallucinating?',
    answer:
      'We use retrieval-augmented architecture (RAG) that restricts the agent strictly to your verified company documents, pricing guidelines, and approved FAQs. If an answer cannot be verified from approved records, the agent clearly states so and offers to transfer the user to your human team.'
  },
  {
    question: 'Can the AI agent integrate with our existing software and CRM?',
    answer:
      'Yes. Our custom AI agents connect via REST APIs and webhooks into your existing tools, including WhatsApp Business API, HubSpot, Google Workspace, Notion, Slack, or proprietary internal databases.'
  },
  {
    question: 'Does the AI agent replace our employees?',
    answer:
      'No. The goal is to eliminate repetitive operational grind so your employees can focus on high-touch client relationships, strategy, and complex problem-solving. Routine questions are resolved in seconds, while complex matters are escalated smoothly to humans.'
  },
  {
    question: 'Is our company data kept private and secure?',
    answer:
      'Absolutely. We configure enterprise-grade data isolation. Your proprietary documents, operational procedures, and customer communications are never used to train public language models.'
  }
];

export const AIAgentsPage: React.FC = () => {
  usePageSEO({
    title: 'Custom AI Agents | Built Around Your Business | TITAN AI Agency',
    description:
      'We build specialized AI agents designed to help businesses handle customer interactions and repetitive digital workflows. Customer support, lead qualification, sales, and internal assistants.',
    canonicalPath: '/services/ai-agents',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom AI Agents',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/'
      },
      description:
        'AI agents built around your business. Specialized AI assistants handling customer interactions and repetitive digital workflows with strict guardrails and human handoff.'
    }
  });

  return (
    <div id="ai-agents-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      
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
            <span className="text-white font-medium">Custom AI Agents</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <FadeIn delay={0.1} direction="none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
                <TitanIcon className="w-4 h-4" />
                <span>CORE SERVICE 03 · AUTONOMOUS AI ASSISTANTS</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={30}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                AI Agents Built Around Your Business.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal max-w-3xl">
                We build specialized AI agents designed to help businesses handle customer interactions and repetitive digital workflows. Factually grounded, strictly guarded, and engineered to escalate to humans when needed.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" distance={15}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="ai-agents-cta-primary"
                  className="btn-titan-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold shadow-[0_4px_18px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)]"
                >
                  <span>BUILD MY AI AGENT</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href="#examples"
                  className="btn-titan-secondary-dark inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold"
                >
                  <span>Explore Agent Types</span>
                </a>
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
              Operational Efficiency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Business Problems We Solve
            </h2>
            <p className="mt-3 text-[#536477] text-base">
              Free your human team from repetitive digital bottlenecks so they can focus on closing deals and serving clients.
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
                    <span>Operational Bottleneck</span>
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

      {/* 3. AGENT EXAMPLES */}
      <section id="examples" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
                Specialized Configurations
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                AI Agents Built for Your Exact Workflows
              </h2>
              <p className="mt-3 text-[#536477] text-base">
                Each agent is purpose-built with tailored business logic, memory boundaries, and verification checkpoints.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENT_EXAMPLES.map((ex, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={20}>
                <div className="card-titan-light p-6 space-y-3 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center mb-3 text-[#00D1FF]">
                      <Cpu className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#071A33] mb-1.5">
                      {ex.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {ex.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
                Technical Guardrails
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                Built With Production Capabilities
              </h2>
              <p className="mt-3 text-[#536477] text-base">
                Enterprise-grade security, data isolation, and human escalation protocols.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={20}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#00D1FF]/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#00D1FF]" />
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
                Every AI agent deployment includes full testing, knowledge base validation, and complete client code ownership with zero proprietary lock-in.
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
      <ServiceFAQList serviceTitle="Custom AI Agents" faqs={FAQS} />

      {/* 8. FINAL CTA */}
      <ServiceCTASection
        serviceTitle="Custom AI Agent"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss which workflows consume your team’s time, and let’s engineer an AI agent tailored to your company’s exact needs."
      />
    </div>
  );
};
