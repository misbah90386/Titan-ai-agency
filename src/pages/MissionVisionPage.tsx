import React from 'react';
import { Sparkles, Target, Eye, Compass, Shield, ArrowDown, Cpu, Globe, Rocket, CheckCircle2, Terminal } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';
import { usePageSEO } from '../hooks/usePageSEO';

export const MissionVisionPage: React.FC = () => {
  usePageSEO({
    title: 'Our Mission & Vision | Titan AI Agency',
    description:
      'Discover the mission and vision of Titan AI Agency: building purposeful, reliable AI systems, simplifying business operations, and advancing practical enterprise AI.',
    canonicalPath: '/mission-vision',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Our Mission & Vision | Titan AI Agency',
      url: 'https://titanaiagency.netlify.app/mission-vision',
      description:
        'Discover the mission and vision of Titan AI Agency: building purposeful, reliable AI systems, simplifying business operations, and advancing practical enterprise AI.',
      publisher: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png',
      },
    },
  });
  const missionTenets = [
    { title: 'Build useful technology', desc: 'Software engineered strictly to address genuine friction, eliminating bloated, performative code.' },
    { title: 'Simplify complex processes', desc: 'Transforming unwieldy, multi-step operations into streamlined, manageable software workflows.' },
    { title: 'Create practical digital systems', desc: 'Designing architectures that function reliably under day-to-day production demands.' },
    { title: 'Make advanced technology easier to use', desc: 'Abstracting difficult mathematics and distributed systems behind clean, intuitive interfaces.' },
    { title: 'Develop solutions around real business requirements', desc: 'Grounding every technical specification in verified organizational necessity.' },
    { title: 'Continuously improve its products and services', desc: 'Refining codebases, performance benchmarks, and user workflows on an ongoing basis.' }
  ];

  const visionTenets = [
    { title: 'Building advanced AI systems', desc: 'Conducting iterative systems research into deterministic reasoning and multi-modal intelligence.' },
    { title: 'Creating intelligent AI agents', desc: 'Architecting autonomous software engines capable of resilient, error-checked execution.' },
    { title: 'Developing powerful automation platforms', desc: 'Constructing unified orchestration layers connecting distributed enterprise software suites.' },
    { title: 'Building technology products', desc: 'Expanding from bespoke agency implementations into dedicated, scalable software platforms.' },
    { title: 'Creating scalable digital systems', desc: 'Engineering cloud-native infrastructures capable of handling millions of concurrent events.' },
    { title: 'Exploring future technologies', desc: 'Staying at the frontier of emerging paradigms, from neural compute to ambient voice systems.' },
    { title: 'Continuous research and development', desc: 'Investing sustained development cycles into experimental technology prototypes.' }
  ];

  const beliefs = [
    {
      title: 'Technology Should Be Useful',
      desc: 'Technology should solve real problems rather than exist only because it is new. Novelty is never a substitute for functional utility.'
    },
    {
      title: 'Simplicity Matters',
      desc: 'Powerful technology should still be easy for people to understand and use. True architectural excellence reduces cognitive overhead.'
    },
    {
      title: 'Build With Purpose',
      desc: 'Every system should have a clear purpose and objective. We define concrete requirements before writing a single line of code.'
    },
    {
      title: 'Keep Improving',
      desc: 'Technology constantly changes, so TITAN should continue learning, testing, and improving. Stagnation is the greatest technical debt.'
    },
    {
      title: 'Think Long Term',
      desc: 'Build systems and ideas that can develop and evolve over time. We prioritize modular, maintainable foundations over short-term hacks.'
    }
  ];

  return (
    <div id="mission-vision-root" className="min-h-screen bg-[#06080d] text-slate-100 pt-28">
      {/* 1. HERO */}
      <section className="relative py-20 sm:py-28 border-b border-white/[0.06] overflow-hidden text-center">
        <div className="absolute inset-0 grid-pattern opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Foundations</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Our Mission & Vision
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Building useful technology today while creating a bigger vision for tomorrow.
          </p>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section id="our-mission-section" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold uppercase">
              <Target className="w-4 h-4" />
              <span>Current Purpose</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Mission
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              TITAN's mission is to create useful, accessible, modern digital solutions that help businesses use technology more effectively.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              We bridge the gap between complex software advances and concrete business applications. Rather than chasing fleeting tech jargon, our engineering practice is dedicated to building robust software systems that reduce friction, automate workflows, and operate reliably every single day.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.08] text-xs font-mono text-slate-300">
              <div className="text-blue-400 font-semibold mb-1">// MISSION MANDATE:</div>
              "Practical engineering delivering measurable operational clarity for real businesses."
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {missionTenets.map((tenet, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>TENET 0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {tenet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {tenet.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION */}
      <section id="our-vision-section" className="py-20 sm:py-28 bg-[#04060b] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold uppercase">
                <Eye className="w-4 h-4" />
                <span>Long-Term Horizon</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Our Vision
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                TITAN's vision is to become a technology company known for building powerful digital systems, AI solutions, intelligent agents, automation tools, and other advanced technologies.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                As we deliver targeted solutions for businesses today, we are systematically investing our engineering bandwidth into the future. Our trajectory aims at creating scalable software products, sophisticated agentic runtimes, and resilient automation platforms that empower businesses at scale.
              </p>

              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                <strong className="text-blue-400 block font-mono uppercase mb-1">
                  Clarifying Current vs. Future Scope
                </strong>
                We are transparent about where we stand: today, we are a focused digital solutions agency delivering production websites, agents, and automations. Our vision represents our intentional long-term direction and ongoing research, not premature claims.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3">
                {visionTenets.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 flex items-start gap-4 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-blue-400 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BELIEVE */}
      <section id="what-we-believe-section" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Guiding Philosophy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What We Believe
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            The core principles that govern how TITAN designs software, selects technology stacks, and handles client partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, i) => (
            <div
              key={i}
              className={`p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/40 transition-colors flex flex-col justify-between ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 mb-4 inline-block">
                  PRINCIPLE 0{i + 1}
                </span>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {belief.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {belief.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 text-[10px] font-mono text-slate-500 uppercase">
                TITAN STANDARD
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHAT WE WANT TO BUILD: Visual Timeline / Roadmap */}
      <section id="roadmap-section" className="py-20 sm:py-28 bg-[#04060a] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              Technological Trajectory
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              What We Want to Build
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              A transparent view of our evolution: active production systems today, near-term platform expansions, and our long-term research horizon.
            </p>
            <div className="mt-4 text-xs font-mono text-blue-400 px-3 py-1 inline-block rounded-full bg-blue-500/10 border border-blue-500/20">
              * The "Next" and "Future" tiers represent TITAN's vision and direction, not current products.
            </div>
          </div>

          {/* Timeline Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Tier 1: TODAY */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#070b14]/90 border border-blue-500/40 p-7 shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase">
                    STAGE 01
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    LIVE TODAY
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Today
                </h3>

                <p className="text-xs text-slate-400 mb-6">
                  Active production systems and services delivered directly to businesses:
                </p>

                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-semibold">Websites</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-semibold">AI Agents</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-semibold">Voice Agents</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-semibold">Chatbots</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-semibold">Business Automation</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                STATUS: DEPLOYING ACTIVELY
              </div>
            </div>

            {/* Tier 2: NEXT */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/60 to-[#070b14]/70 border border-white/[0.12] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                    STAGE 02
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/25">
                    DEVELOPMENT HORIZON
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Next
                </h3>

                <p className="text-xs text-slate-400 mb-6">
                  Expanding from custom agency builds into repeatable platforms and advanced runtimes:
                </p>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>More advanced AI systems</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Custom platforms</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Intelligent business tools</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Advanced automation</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-500">
                STATUS: R&D & PROTOTYPING
              </div>
            </div>

            {/* Tier 3: FUTURE */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/40 to-[#070b14]/50 border border-white/[0.08] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-wider uppercase">
                    STAGE 03
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                    FUTURE VISION
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Future
                </h3>

                <p className="text-xs text-slate-400 mb-6">
                  Long-term aspiration as a foundational technology company:
                </p>

                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>Large-scale technology products</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>Advanced AI platforms</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>New technology research</span>
                  </li>
                  <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>Next-generation digital systems</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-500">
                STATUS: STRATEGIC NORTH STAR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE TITAN MINDSET */}
      <section id="titan-mindset-section" className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/40 border border-blue-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />

          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-4">
            Core Agency Doctrine
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Think Bigger. Build Smarter. <br />
            <span className="text-blue-400">Keep Moving Forward.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Technology is in a continuous state of evolution. At TITAN, our engineering mindset is built on constant learning, methodical experimentation, disciplined construction, and relentless improvement. We don't rely on complacency or yesterday's patterns—we engineer software designed for what's ahead.
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 text-xs font-mono text-slate-500 uppercase tracking-widest">
            <span>DISCIPLINE</span>
            <span>•</span>
            <span>CRAFTSMANSHIP</span>
            <span>•</span>
            <span>PROGRESS</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
