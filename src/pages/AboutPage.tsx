import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Terminal, Layers, Cpu, CheckCircle2, Sparkles, Compass, Lightbulb, Hammer, RefreshCw } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';
import { usePageSEO } from '../hooks/usePageSEO';

export const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'About Titan AI Agency | AI Solutions for Modern Businesses',
    description:
      'About Titan AI Agency. We engineer dependable AI systems, automation pipelines, and high-performance digital architectures tailored for modern enterprise growth.',
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Titan AI Agency',
      url: 'https://titanaiagency.netlify.app/about',
      description:
        'About Titan AI Agency. We engineer dependable AI systems, automation pipelines, and high-performance digital architectures tailored for modern enterprise growth.',
      publisher: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png',
      },
    },
  });
  const domains = [
    { name: 'Web Development', desc: 'Robust frontend architectures, responsive portals, and modern web applications built for reliability and speed.' },
    { name: 'AI Systems', desc: 'Machine learning inference engines, semantic vector stores, and custom computational workflows.' },
    { name: 'AI Agents', desc: 'Autonomous reasoning pipelines capable of interacting with databases, APIs, and multi-step business logic.' },
    { name: 'Voice Technology', desc: 'Low-latency telephony and voice-enabled conversational interfaces for customer inquiry and scheduling.' },
    { name: 'Chatbots', desc: 'Knowledge-grounded conversational widgets designed for customer support, service information, and lead capture.' },
    { name: 'Automation', desc: 'Resilient event-driven pipelines synchronizing data across CRMs, ERPs, and operational backends.' },
    { name: 'Custom Digital Solutions', desc: 'Bespoke software systems engineered when off-the-shelf software cannot meet organizational parameters.' }
  ];

  const steps = [
    {
      step: '01',
      title: 'Understand',
      icon: Compass,
      description: 'We begin by thoroughly diagnosing the technical and operational requirements of your business. We examine existing workflows, data inputs, performance constraints, and architectural dependencies before proposing any software solution.'
    },
    {
      step: '02',
      title: 'Plan',
      icon: Lightbulb,
      description: 'We draft clear architectural blueprints, select the appropriate technology stack, design data schemas, and establish deterministic guardrails. Every implementation detail is planned to ensure stability, maintainability, and security.'
    },
    {
      step: '03',
      title: 'Build',
      icon: Hammer,
      description: 'Our engineering team develops production-grade software adhering to strict coding standards. We integrate APIs, conduct thorough testing cycles, optimize performance benchmarks, and deploy into your infrastructure.'
    },
    {
      step: '04',
      title: 'Improve',
      icon: RefreshCw,
      description: 'Technology is never static. Once deployed, systems are monitored with real-time observability telemetry. We iterate based on actual operational telemetry, edge cases, and evolving business requirements.'
    }
  ];

  return (
    <div id="about-page-root" className="min-h-screen bg-[#06080d] text-slate-100 pt-28">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Profile</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            About TITAN
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            TITAN AI AGENCY is a technology-focused agency providing modern digital solutions for businesses.
          </p>
        </div>
      </section>

      {/* Main Introduction & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering Practical Digital Infrastructure
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              At TITAN, we operate on a straightforward premise: technology exists to solve practical business problems. We do not promote speculative trends or make unsubstantiated claims about automatic business growth. Instead, we focus on rigorous engineering, robust system architecture, and delivering high-quality digital solutions.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Whether building an ultra-fast web application, an autonomous agent that parses dense documentation, or an automated pipeline synchronizing multiple data platforms, our objective is always the same: create dependable, high-performance software that works cleanly within your organization.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Evidence-Based Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Zero Hallucination Safeguards
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Maintainable Source Code
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-8 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                Agency Factsheet
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between py-2 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Firm</span>
                  <span className="text-white font-medium">TITAN AI AGENCY</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Focus</span>
                  <span className="text-white font-medium">Digital Solutions & AI Systems</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Target Segment</span>
                  <span className="text-white font-medium">Modern Businesses & Enterprises</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Delivery Model</span>
                  <span className="text-white font-medium">Full-Cycle Bespoke Engineering</span>
                </div>
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-slate-400">Code Ownership</span>
                  <span className="text-emerald-400 font-medium">100% Client Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="bg-[#05070c] border-y border-white/[0.06] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Where TITAN Operates
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              TITAN works across the entire spectrum of modern digital software and intelligent systems engineering:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((dom, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-mono font-bold text-blue-400 mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {dom.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {dom.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach: Understand → Plan → Build → Improve */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Our Approach
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            TITAN focuses on understanding the requirement first, then selecting and building the appropriate technology. We don't jump straight into coding until the problem is clearly mapped.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                      STEP {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-slate-500 uppercase">
                  Systematic Execution
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
