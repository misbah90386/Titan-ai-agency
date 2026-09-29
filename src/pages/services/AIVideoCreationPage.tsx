import React from 'react';
import { Link } from 'react-router-dom';
import {
  Film,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  ShieldAlert
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { VideoShowcase } from '../../components/VideoShowcase';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';

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
    <div className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      {/* 1. Hero Section (Dark Premium Navy) */}
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

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              AI Video Creation for Businesses
            </h1>

            <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal">
              Turn your business message into compelling visual content. We create AI-generated video concepts tailored to your brand style, promotional campaigns, and target audience.
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
                href="#use-cases"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold"
              >
                <span>Explore Video Use Cases</span>
                <ArrowRight className="w-4 h-4 text-[#00D1FF]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Practical Business Use Cases (Clean White / Light Ice Blue) */}
      <section id="use-cases" className="relative py-16 sm:py-24 bg-[#FFFFFF] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
              Visual Formats
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Practical Video Concepts for Your Business
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              From horizontal website hero teasers to vertical social media ads, we tailor video formats to your marketing distribution channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="card-titan-light p-7 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                  <Film className="w-5 h-5 text-[#00D1FF]" />
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

      {/* 3. Portfolio Evidence: Video Showcase Container */}
      <VideoShowcase />

      {/* 4. Deliverables & Scope Policy (Deep Navy) */}
      <section id="deliverables" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                Transparent Boundaries
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Production Deliverables & Creative Scope
              </h2>
              <p className="text-[#8FA0BA] text-base leading-relaxed">
                We agree on duration, aspect ratio, script outline, voiceover language, and revisions before production begins.
              </p>
              <div className="p-4 rounded-xl bg-[#0B1F4B]/80 border border-[#00D1FF]/30 text-xs text-[#EAF7FF] leading-relaxed space-y-1.5">
                <strong className="text-[#00D1FF] block font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#00D1FF]" />
                  <span>Illustrative Visuals Notice</span>
                </strong>
                <p>
                  For property and product videos, AI-generated scenes are illustrative concepts unless based on verified reference material provided by the client. We do not present generated scenes as footage of an actual property or product tour.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-titan-dark p-7 space-y-4 bg-[#0B1F4B]/60 border border-[#00D1FF]/20">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold mb-2">
                  What You Receive
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
