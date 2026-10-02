import React from 'react';
import { Target, Sliders, Network, Sparkles, LifeBuoy, ArrowRight } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';
import { Link } from 'react-router-dom';

export const WhyTitanSection: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'BUSINESS-FIRST',
      desc: 'We start with the problem, not the technology.',
      detail: 'Technology without business purpose is wasted capital. We examine your operational bottlenecks first and only build what delivers measurable ROI.',
      icon: Target
    },
    {
      num: '02',
      title: 'CUSTOM SOLUTIONS',
      desc: 'Every solution is designed around the needs of the business.',
      detail: 'We do not force rigid cookie-cutter templates. Systems are built around your real team structure, customer queries, and operating requirements.',
      icon: Sliders
    },
    {
      num: '03',
      title: 'CONNECTED TECHNOLOGY',
      desc: 'Websites, AI, search, voice and video can work together.',
      detail: 'Instead of five disconnected vendors, TITAN unifies your digital presence into one cohesive lead-generation and operational pipeline.',
      icon: Network
    },
    {
      num: '04',
      title: 'MODERN EXPERIENCE',
      desc: 'Professional design and modern technology without unnecessary complexity.',
      detail: 'Clean typography, fast performance, intuitive customer navigation, and zero bloated software that your team will abandon.',
      icon: Sparkles
    },
    {
      num: '05',
      title: 'SUPPORT AFTER LAUNCH',
      desc: 'We help clients understand and manage what we build.',
      detail: 'Every project includes 30 days of dedicated free support, comprehensive team walkthroughs, and 100% client code and IP ownership.',
      icon: LifeBuoy
    }
  ];

  return (
    <section id="why-titan" className="relative py-20 sm:py-28 bg-[#04142E] text-white border-t border-[#00D1FF]/20 overflow-hidden">
      <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <TitanIcon className="w-4 h-4" />
              <span>Core Principles</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              WHY BUSINESSES CHOOSE TITAN
            </h2>

            <p className="text-base sm:text-lg text-[#8FA0BA] leading-relaxed">
              Transparent engineering, direct founder collaboration, and purposeful digital systems built for long-term reliability.
            </p>
          </div>
        </FadeIn>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <FadeIn key={pt.num} delay={idx * 0.08} direction="up" distance={20}>
                <div className="group card-titan-dark p-7 rounded-2xl flex flex-col justify-between h-full bg-[#0B1F4B]/50 border border-white/10 hover:border-[#00D1FF]/50 hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#00D1FF]">
                        {pt.num} — PRINCIPLE
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:border-[#00D1FF]">
                        <IconComp className="w-5 h-5 text-[#00D1FF]" />
                      </div>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white mb-2 tracking-tight group-hover:text-[#00D1FF] transition-colors">
                      {pt.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#EAF7FF] mb-2 leading-snug">
                      {pt.desc}
                    </p>

                    <p className="text-xs text-[#8FA0BA] leading-relaxed">
                      {pt.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}

          {/* 6th Card: Direct Founder Scoping Callout */}
          <FadeIn delay={0.4} direction="up" distance={20}>
            <div className="card-titan-dark p-7 rounded-2xl flex flex-col justify-between h-full bg-gradient-to-br from-[#0B1F4B] to-[#04142E] border border-[#00D1FF]/30">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-400 block mb-4">
                  06 — DIRECT FOUNDER COLLABORATION
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Direct Engineering Oversight
                </h3>
                <p className="text-xs text-[#8FA0BA] leading-relaxed">
                  You work directly with founder Saad Naeem on architecture and milestones, eliminating agency bureaucracy and communication lag.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/contact"
                  className="btn-titan-primary w-full py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
