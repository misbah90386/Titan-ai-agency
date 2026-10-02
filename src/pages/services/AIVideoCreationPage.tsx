import React from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Layers,
  Globe2,
  Film,
  ShieldAlert
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { VideoShowcase } from '../../components/VideoShowcase';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';
import { FadeIn } from '../../components/motion/MotionComponents';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I would like to create Professional AI Video Content for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const VIDEO_FORMATS = [
  { title: 'Promotional Videos', desc: 'High-impact brand videos communicating your value proposition and business strengths in 30-60 seconds.' },
  { title: 'Product Showcase Videos', desc: 'Sleek visual demonstrations highlighting product features, craftsmanship, and benefits.' },
  { title: 'Service Explanations', desc: 'Clear, engaging walkthroughs that deconstruct complex service offerings for prospective buyers.' },
  { title: 'Social Media Video Content', desc: 'Dynamic 9:16 vertical reels and shorts optimized for Instagram, TikTok, and paid video ads.' },
  { title: 'Brand Announcement Videos', desc: 'Cinematic reveals for new service launches, company milestones, and event promotions.' },
  { title: 'Explainer Videos', desc: 'Educational and onboarding videos that guide customers through how your solution works.' },
  { title: 'Multilingual Video Content', desc: 'Same core creative localized with native Arabic, English, and other regional voiceovers.' }
];

const PROBLEMS_SOLVED = [
  {
    problem: 'Video production is too expensive',
    solution: 'Eliminates costly film crews, physical studios, and lengthy production overhead, delivering agency-quality video at a fraction of standard rates.'
  },
  {
    problem: 'Producing videos takes too much time',
    solution: 'Cuts production turnarounds from months to days through accelerated AI synthesis, scriptwriting, and editing workflows.'
  },
  {
    problem: 'Lack of consistent video content for marketing',
    solution: 'Empowers your brand to publish continuous, high-polish video campaigns across social platforms and websites without burning out your team.'
  },
  {
    problem: 'Difficult to produce videos in multiple languages or formats',
    solution: 'Rapidly re-render the same video in 9:16 vertical or 16:9 landscape with localized voiceovers in Arabic, English, and more.'
  }
];

const DELIVERABLES = [
  'Concept definition, script outline, and agreed visual storyboard before production starts',
  'High-resolution AI-generated video master tailored to your business brand style',
  'Multi-aspect ratio formatting: 16:9 widescreen for websites and 9:16 vertical for reels',
  'Professional neural voiceover synthesis and synchronized on-screen caption styling',
  'Commercial background audio track licensing included for digital publishing',
  'Structured collaborative review cycle with agreed revision checkpoints',
  'Final MP4 video file delivery ready for publishing on your website or social media',
  'Full commercial publishing rights with zero recurring fees'
];

const FAQS = [
  {
    question: 'How do you ensure AI video looks professional rather than artificial?',
    answer:
      'We do not produce random, generic AI clips. Every video is built as a serious business asset: we start with an agreed marketing script, brand style guides, consistent visual composition, professional typography, neural voiceovers, and human post-production editing.'
  },
  {
    question: 'Can you produce videos in both Arabic and English?',
    answer:
      'Yes. We specialize in bilingual video campaigns tailored for Saudi Arabia and the Gulf, with authentic Arabic pronunciation, localized script nuances, and English counterparts.'
  },
  {
    question: 'What is the typical production timeline for a business video?',
    answer:
      'Once the script and creative brief are approved, standard production takes 1 to 2 weeks including review and revision cycles.'
  },
  {
    question: 'Are AI-generated scenes real property or product footage?',
    answer:
      'For property and product videos, AI-generated scenes represent illustrative visual concepts unless built directly upon verified assets provided by you. We always present visual concepts transparently and professionally.'
  }
];

export const AIVideoCreationPage: React.FC = () => {
  usePageSEO({
    title: 'AI Video Creation | Professional Business Marketing Videos | TITAN AI Agency',
    description:
      'Professional AI video content built for business growth. Promotional videos, product showcases, service explanations, and social reels tailored for marketing results.',
    canonicalPath: '/services/ai-video-creation',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Video Creation',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/'
      },
      description:
        'Professional AI Video Content Built for Business Growth. Promotional videos, product showcases, explainer videos, and social media reels.'
    }
  });

  return (
    <div id="ai-video-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      
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
            <span className="text-white font-medium">AI Video Creation</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <FadeIn delay={0.1} direction="none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
                <TitanIcon className="w-4 h-4" />
                <span>CORE SERVICE 05 · VISUAL CONTENT & VIDEO MARKETING</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={30}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Professional AI Video Content Built for Business Growth.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal max-w-3xl">
                Not random AI clips—focused marketing assets built to attract customers, demonstrate services, and scale brand credibility across websites and social media.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" distance={15}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="ai-video-cta-primary"
                  className="btn-titan-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold shadow-[0_4px_18px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)]"
                >
                  <span>BUILD MY AI VIDEO</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href="#formats"
                  className="btn-titan-secondary-dark inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold"
                >
                  <span>Explore Video Formats</span>
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
              Marketing ROI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Business Problems We Solve
            </h2>
            <p className="mt-3 text-[#536477] text-base">
              Eliminate production friction so your business can publish polished video content consistently.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS_SOLVED.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} direction="up" distance={20}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Production Hurdle</span>
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

      {/* 3. BUSINESS VIDEO FORMATS */}
      <section id="formats" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
                Focused Marketing Assets
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                Business Video Formats We Produce
              </h2>
              <p className="mt-3 text-[#536477] text-base">
                Engineered specifically for business promotions, product showcases, and client conversion.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_FORMATS.map((fmt, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={20}>
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 hover:border-[#00D1FF]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center mb-3 text-[#00D1FF]">
                      <Video className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#071A33] mb-1.5">
                      {fmt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {fmt.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE SECTION */}
      <VideoShowcase />

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
                Before production begins, we agree on the concept, script outline, format, and revision milestones. You receive final master MP4 files ready for publication.
              </p>
              <div className="p-4 rounded-xl bg-[#0B1F4B]/80 border border-[#00D1FF]/30 text-xs text-[#EAF7FF] leading-relaxed">
                <strong className="text-[#00D1FF] block font-bold mb-1">Illustrative Concepts Notice</strong>
                For property and product videos, AI-generated scenes represent illustrative visual concepts unless built from your verified reference photography.
              </div>
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
      <ServiceFAQList serviceTitle="AI Video Creation" faqs={FAQS} />

      {/* 8. FINAL CTA */}
      <ServiceCTASection
        serviceTitle="AI Video Creation"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Share your campaign goal, product link, or video concept, and our production team will outline an initial script and format plan."
      />
    </div>
  );
};
