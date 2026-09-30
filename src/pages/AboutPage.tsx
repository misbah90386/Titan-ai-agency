import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShieldCheck, HeartHandshake, Code2, Users } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';
import { ProcessSection } from '../components/ProcessSection';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn, AnimatedNumber } from '../components/motion/MotionComponents';

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
      title: 'Practical Utility Over Speculative Hype',
      desc: 'We focus on software that delivers measurable, daily business value—helping your team capture enquiries, respond faster, and eliminate repetitive tasks.',
      icon: Code2
    },
    {
      title: 'Direct, Founder-Led Collaboration',
      desc: 'You work directly with Saad Naeem and our engineering team, ensuring that your vision and technical requirements are understood from day one without account layers.',
      icon: Users
    },
    {
      title: '100% Client Code & IP Ownership',
      desc: 'Every website, assistant prompt, and automation pipeline we develop belongs completely to your business, with zero proprietary vendor lock-in or hostage licenses.',
      icon: ShieldCheck
    },
    {
      title: '30 Days of Free Launch Support',
      desc: 'We remain alongside you after deployment, providing 30 days of complimentary support to verify that every integration and workflow operates smoothly.',
      icon: HeartHandshake
    }
  ];

  const whatsappAboutUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent('Hello Saad and TITAN AI AGENCY, I would like to learn more about working together.');

  return (
    <div id="about-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      {/* Header Banner (Dark Premium Navy) */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest mb-6">
            <TitanIcon className="w-4 h-4" />
            <span>Agency & Founder</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            About TITAN AI AGENCY
          </h1>

          <p className="text-lg sm:text-xl text-[#EAF7FF]/90 max-w-3xl mx-auto leading-relaxed font-normal">
            Building practical digital systems, modern websites, and intelligent automation for growing businesses.
          </p>
        </div>
      </section>

      {/* Main Founder & Agency Introduction (Clean White, Corporate, Large Typography) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
              Our Story & Leadership
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              Founded by Saad Naeem
            </h2>

            <p className="text-lg sm:text-xl text-[#0B1F4B] font-semibold leading-relaxed">
              TITAN AI AGENCY was founded by <strong className="text-[#071A33] font-bold">Saad Naeem</strong> to help businesses improve their online presence and everyday operations through websites, AI tools, and automation.
            </p>

            <p className="text-base text-[#536477] leading-relaxed">
              In an industry frequently clouded by confusing jargon and exaggerated promises, TITAN was created to offer an honest, engineering-grounded alternative. We take the time to understand your day-to-day business operations, identify where customer enquiries slow down or repetitive work piles up, and build software solutions designed specifically to address those bottlenecks.
            </p>

            <p className="text-base text-[#536477] leading-relaxed">
              Whether you need a high-converting website to attract clients, an AI chatbot to resolve frequent questions 24/7, a voice assistant for call handling, or an automated pipeline connecting your tools, our focus remains unchanged: delivering dependable, high-quality work with clear communication and full transparency.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappAboutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-titan-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Talk with Saad on WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="btn-titan-secondary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#00D1FF]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Agency Factsheet */}
          <div className="lg:col-span-5">
            <div className="card-titan-light p-7 sm:p-8 space-y-5 bg-white border border-[#3BA9FF]/20 shadow-lg">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0B1F4B] font-bold flex items-center gap-2">
                <TitanIcon className="w-4 h-4" />
                <span>Corporate Profile</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between py-2.5 border-b border-slate-100 text-sm">
                  <span className="text-[#536477]">Agency</span>
                  <span className="text-[#071A33] font-bold">TITAN AI AGENCY</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-slate-100 text-sm">
                  <span className="text-[#536477]">Founder</span>
                  <span className="text-[#071A33] font-bold">Saad Naeem</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-slate-100 text-sm">
                  <span className="text-[#536477]">Core Focus</span>
                  <span className="text-[#071A33] font-bold text-right">Websites, AI Assistants & Automation</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-slate-100 text-sm">
                  <span className="text-[#536477]">Direct Contact</span>
                  <span className="text-emerald-600 font-mono font-bold">+966 53 418 2945</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-slate-100 text-sm">
                  <span className="text-[#536477]">Post-Launch Care</span>
                  <span className="text-[#071A33] font-bold">
                    <AnimatedNumber value={30} suffix=" Days" /> Free Support
                  </span>
                </div>
                <div className="flex justify-between py-2.5 text-sm">
                  <span className="text-[#536477]">Code Ownership</span>
                  <span className="text-emerald-600 font-bold">
                    <AnimatedNumber value={100} suffix="%" /> Client Owned
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-[#536477] leading-relaxed">
                Direct collaboration from consultation to launch, with clear milestone agreements and transparent delivery.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles (Clean Ice Blue Background) */}
      <section className="bg-[#EAF7FF]/60 border-y border-slate-200/80 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
              Our Principles
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              How We Deliver Value
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              We base our business on straightforward communication, clean code, and solutions that help your business operate with greater efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={i} delay={i * 0.08} direction="up">
                  <div
                    className="card-titan-light p-7 space-y-3 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                      <Icon className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#071A33]">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#536477] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
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
