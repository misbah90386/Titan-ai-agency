import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, PhoneCall, MessageSquare, Workflow, Layers, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { AbstractTechHeroVisual } from '../components/AbstractTechHeroVisual';
import { FinalCTA } from '../components/FinalCTA';
import { ServiceModal } from '../components/ServiceModal';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'websites':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'ai-agents':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'ai-voice-agents':
        return <PhoneCall className="w-5 h-5 text-blue-400" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'business-automation':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'custom-ai-solutions':
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div id="home-page-root" className="min-h-screen bg-[#06080d] text-slate-100">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle grid and ambient lighting */}
        <div className="absolute inset-0 grid-pattern opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Agency Brand Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono font-semibold text-blue-400 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>TITAN AI AGENCY</span>
              </div>

              {/* Large Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Digital Solutions <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                  Built for Business.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Websites, AI Agents, Voice Agents, AI Chatbots, Business Automation, and Custom AI Solutions.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/services"
                  id="hero-explore-services-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-200"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  id="hero-about-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-base border border-white/10 transition-all duration-200"
                >
                  <span>About TITAN</span>
                </Link>
              </div>

              {/* Technical Credibility Markers */}
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
                <div>
                  <div className="text-slate-200 font-semibold text-sm">Engineered</div>
                  <div className="text-slate-400">Production Code</div>
                </div>
                <div>
                  <div className="text-slate-200 font-semibold text-sm">Deterministic</div>
                  <div className="text-slate-400">AI Guardrails</div>
                </div>
                <div>
                  <div className="text-slate-200 font-semibold text-sm">Custom Fit</div>
                  <div className="text-slate-400">Targeted Systems</div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Futuristic Tech Visual */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <AbstractTechHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section id="services-preview-section" className="relative py-20 sm:py-28 bg-[#05070c] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
                Core Capabilities
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What We Provide
              </h2>
            </div>
            <Link
              to="/services"
              id="view-all-services-header-btn"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Six Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={`home-service-card-${service.id}`}
                className="group relative rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-white/[0.08] hover:border-blue-500/40 p-7 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Subtle Card Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-colors pointer-events-none" />

                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:border-blue-400/40 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              id="view-all-services-cta-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white text-sm font-semibold transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section id="about-preview-section" className="relative py-20 sm:py-28 bg-[#04060a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Agency Background
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Meet TITAN
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                TITAN AI AGENCY is a technology-focused agency providing modern digital solutions, high-performance websites, AI systems, automation pipelines, and custom technology solutions for businesses.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Rather than relying on ungrounded hype or unrealistic promises, our engineering practice focuses on deep technical understanding: dissecting the core requirements of your business, choosing the appropriate technological stack, and building robust, dependable software designed to operate seamlessly.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  id="meet-titan-learn-more-btn"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-semibold text-sm transition-colors"
                >
                  <span>Learn More About TITAN</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Highlights */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-6 sm:p-8 space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Engineering Tenets
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">1</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Requirement-First Scoping</div>
                      <div className="text-xs text-slate-400">Selecting technology strictly to solve genuine operational constraints.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">2</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Deterministic Reliability</div>
                      <div className="text-xs text-slate-400">Zero tolerance for hallucination or untracked state mutations.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">3</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Full Source Code Ownership</div>
                      <div className="text-xs text-slate-400">Your systems remain your proprietary assets, deployable in your clouds.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>DISCIPLINE OVER HYPETRAIN</span>
                  <span className="text-blue-400">TITAN TECH LABS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <FinalCTA />

      {/* Modals for Interactive Inspection */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
