import React from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Film,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Clapperboard,
  Tv,
  Smartphone,
  ShieldAlert
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { VideoShowcase } from '../../components/VideoShowcase';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in AI video creation for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Business Promotional Videos',
    description:
      'Polished video introductions for websites and digital campaigns that communicate your core business value, service breadth, and brand positioning in under 60 seconds.',
    features: ['Structured visual script', 'Brand styling alignment', '16:9 landscape or 9:16 vertical']
  },
  {
    title: 'Product Showcase Concepts',
    description:
      'Dynamic visual highlights demonstrating product concepts, feature benefits, and modern aesthetics designed to capture customer interest across social channels.',
    features: ['High-definition rendering', 'Feature callouts & typography', 'Clean background music']
  },
  {
    title: 'Real Estate Concept Teasers',
    description:
      'Atmospheric property concept videos combining architecture imagery, clean typography overlays, and agency branding for property marketing presentations.',
    features: ['Illustrative concept visuals', 'Property feature highlights', 'Brand watermark integration']
  },
  {
    title: 'Social Media Reels & Short Advertisements',
    description:
      'Attention-grabbing short-form vertical videos (9:16) tailored for Instagram Reels, TikTok, and digital ad campaigns designed for mobile viewers.',
    features: ['Hook-driven pacing', 'Synchronized captions & subtitles', 'Mobile-first 9:16 framing']
  }
];

const DELIVERABLES = [
  'Concept definition, script outline, and agreed visual format before production starts',
  'AI-generated video composition tailored to your brand style and target audience',
  'Resolution format delivered in full high-definition (1080p, in 16:9 landscape or 9:16 vertical)',
  'Voiceover synthesis and synchronized caption styling (where agreed in project scope)',
  'Background music integration licensed for digital business publishing',
  'Structured collaborative review cycle with agreed revision checkpoints',
  'Final MP4 video file delivery ready for publishing on your website or social media',
  'Transparent production terms with no hidden fees or automated subscriptions'
];

const FAQS = [
  {
    question: 'How do you determine video duration, aspect ratio, and revisions?',
    answer:
      'Every video project begins with an agreed scope. We discuss your target platform (for instance, 16:9 landscape for websites or 9:16 vertical for Instagram Reels), desired length (typically 15 to 60 seconds), voiceover requirements, and agreed revision rounds before production begins.'
  },
  {
    question: 'Are AI-generated property or product scenes footage of real locations?',
    answer:
      'No. For property and product videos, AI-generated scenes are illustrative visual concepts unless they are built directly upon verified reference material supplied by you. We always clearly clarify that generated scenes represent illustrative creative concepts rather than footage of an actual filmed property tour.'
  },
  {
    question: 'Do you create AI videos for businesses in Riyadh and Saudi Arabia?',
    answer:
      'Yes. We collaborate with companies in Riyadh, throughout Saudi Arabia, and remotely. We can produce visual content with localized Arabic or English captions, voiceovers, and cultural aesthetics tailored to Saudi and regional audiences.'
  },
  {
    question: 'What assets do I need to supply to get started?',
    answer:
      'You only need to share your core idea, preferred message, and any brand assets you currently have (such as high-resolution logos, brand color codes, or product photos). If you do not have a script, we collaborate with you to outline the script during initial scoping.'
  }
];

export const AIVideoCreationPage: React.FC = () => {
  usePageSEO({
    title: 'AI Video Creation for Businesses | TITAN AI Agency',
    description:
      'Custom AI video creation for businesses in Riyadh and remotely. High-impact promotional videos, product showcases, and social media reels tailored to your brand.',
    canonicalPath: '/services/ai-video-creation',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Video Creation for Businesses',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Custom AI-generated video concepts for business promotions, product showcases, property concepts, and social media content.',
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
            <span className="text-white">AI Video Creation</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              AI Video Creation for Businesses
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Turn your business message into compelling visual content. We create AI-generated video concepts tailored to your brand style, promotional campaigns, and target audience.
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
                href="#video-showcase"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-medium transition-colors"
              >
                <span>Watch Video Showcase</span>
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
              Visual Formats
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Practical Video Concepts for Your Business
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              From horizontal website hero teasers to vertical social media ads, we tailor video formats to your marketing distribution channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-7 space-y-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Film className="w-5 h-5" />
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

      {/* 3. Portfolio Evidence: Video Showcase */}
      <VideoShowcase />

      {/* 4. Deliverables & Scope Policy */}
      <section className="relative py-16 sm:py-24 bg-[#05070d] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Transparent Boundaries
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Production Deliverables & Creative Scope
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We agree on duration, aspect ratio, script outline, voiceover language, and revisions before production begins.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-xs text-slate-300 leading-relaxed space-y-1.5">
                <strong className="text-amber-300 block font-medium flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Illustrative Visuals Notice</span>
                </strong>
                <p>
                  For property and product videos, AI-generated scenes are illustrative concepts unless based on verified reference material provided by the client. We do not present generated scenes as footage of an actual property or product tour.
                </p>
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
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
      <ServiceFAQList serviceTitle="AI Video Creation" faqs={FAQS} />

      {/* 7. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="AI Video Creation"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Share your video concept, preferred aspect ratio, and target audience with our production team on WhatsApp."
      />
    </div>
  );
};
