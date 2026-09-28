import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, ShieldCheck, HeartHandshake, Code2, Users } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';
import { ProcessSection } from '../components/ProcessSection';
import { usePageSEO } from '../hooks/usePageSEO';

export const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'About Titan AI Agency | AI Solutions for Modern Businesses',
    description:
      'TITAN AI AGENCY was founded by Saad Naeem to help businesses improve their online presence and everyday operations through websites, AI tools, and automation.',
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Titan AI Agency',
      url: 'https://titanaiagency.netlify.app/about',
      description:
        'TITAN AI AGENCY was founded by Saad Naeem to help businesses improve their online presence and everyday operations through websites, AI tools, and automation.',
      publisher: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png',
      },
    },
  });

  const principles = [
    {
      title: 'Practical Utility Over Hype',
      desc: 'We focus on software that delivers tangible, daily value—helping your team capture enquiries, respond faster, and eliminate repetitive tasks.',
      icon: Code2
    },
    {
      title: 'Direct, Founder-Led Collaboration',
      desc: 'You work directly with Saad Naeem and our engineering team, ensuring that your vision and technical requirements are understood from day one.',
      icon: Users
    },
    {
      title: 'Full Client Code Ownership',
      desc: 'Every website, assistant prompt, and automation pipeline we develop belongs 100% to your business, with no proprietary vendor lock-in.',
      icon: ShieldCheck
    },
    {
      title: '30 Days of Free Launch Support',
      desc: 'We remain alongside you after deployment, providing 30 days of complimentary support to verify that everything operates smoothly.',
      icon: HeartHandshake
    }
  ];

  const whatsappAboutUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent('Hello Saad and TITAN AI AGENCY, I would like to learn more about working together.');

  return (
    <div id="about-page-root" className="min-h-screen bg-[#06080d] text-slate-100 pt-28">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agency & Founder</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            About TITAN AI AGENCY
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Building practical digital systems, modern websites, and intelligent automation for growing businesses.
          </p>
        </div>
      </section>

      {/* Main Founder & Agency Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Our Story & Leadership
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Founded by Saad Naeem
            </h2>

            {/* Exact Requested Introduction */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              TITAN AI AGENCY was founded by <strong className="text-white font-semibold">Saad Naeem</strong> to help businesses improve their online presence and everyday operations through websites, AI tools, and automation.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              In an industry frequently clouded by confusing jargon and exaggerated promises, TITAN was created to offer an honest, engineering-grounded alternative. We take the time to understand your day-to-day business operations, identify where customer enquiries slow down or repetitive work piles up, and build software solutions designed specifically to address those bottlenecks.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              Whether you need a high-converting website to attract clients, an AI chatbot to resolve frequent questions 24/7, a voice assistant for call handling, or an automated pipeline connecting your tools, our focus remains unchanged: delivering dependable, high-quality work with clear communication and full transparency.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappAboutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk with Saad on WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Agency Factsheet */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-7 sm:p-8 space-y-5 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                <span>Agency Profile</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between py-2.5 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Agency</span>
                  <span className="text-white font-medium">TITAN AI AGENCY</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Founder</span>
                  <span className="text-white font-medium">Saad Naeem</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Core Focus</span>
                  <span className="text-white font-medium text-right">Websites, AI Assistants & Automation</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Direct Contact</span>
                  <span className="text-emerald-400 font-mono font-medium">+966 53 418 2945</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/[0.06] text-sm">
                  <span className="text-slate-400">Post-Launch Care</span>
                  <span className="text-white font-medium">30 Days Free Support</span>
                </div>
                <div className="flex justify-between py-2.5 text-sm">
                  <span className="text-slate-400">Code Ownership</span>
                  <span className="text-emerald-400 font-medium">100% Client Owned</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed">
                Direct collaboration from consultation to launch, with clear milestone agreements and transparent delivery.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-[#04060b] border-y border-white/[0.06] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              Our Principles
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How We Deliver Value
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              We base our business on straightforward communication, clean code, and solutions that help your business operate with greater efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
