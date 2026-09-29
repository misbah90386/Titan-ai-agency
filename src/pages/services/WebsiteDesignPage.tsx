import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Navigation,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { FeaturedWork } from '../../components/FeaturedWork';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I am interested in discussing a website design project for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const USE_CASES = [
  {
    title: 'Corporate & Service Firm Websites',
    description:
      'Clear, authoritative websites for consultancies, B2B companies, and corporate offices that present service capabilities clearly, establish credibility, and guide visitors toward consultations.',
    features: ['Structured service breakdowns', 'Direct WhatsApp & consultation routing', 'Fast loading times on all connections']
  },
  {
    title: 'Property & Real Estate Concepts',
    description:
      'Visual property showcases displaying development portfolios, floor plans, and project specifications with clean mobile navigation and fast enquiry capture.',
    features: ['Visual portfolio galleries', 'Interactive enquiry triggers', 'Mobile-first layout for property buyers']
  },
  {
    title: 'Food, Dining & Bakery Showcase Sites',
    description:
      'Vibrant culinary websites showcasing menus, specialties, operating hours, and location maps, with direct messaging links for customer questions.',
    features: ['Menu and dish presentations', 'Direct WhatsApp ordering flows', 'Instant mobile contact actions']
  },
  {
    title: 'High-Converting Landing Pages',
    description:
      'Targeted campaign pages designed around a single business offer—focusing visitor attention on key benefits, proof points, and an effortless contact action.',
    features: ['Zero-distraction conversion focus', 'Speed-optimized assets', 'Integrated enquiry forms']
  }
];

const DELIVERABLES = [
  'Custom responsive website design engineered for phones, tablets, and desktops',
  'Intuitive navigation structure designed for effortless visitor journeys',
  'Direct WhatsApp messaging buttons and structured contact enquiry forms',
  'Portfolio, service catalog, or product showcase sections matching your branding',
  'On-page SEO fundamentals, semantic HTML5 structure, and Google Search Console sitemap',
  'Full source code and hosting configuration handover with zero proprietary lock-in',
  'Cross-browser and cross-device verification testing before deployment',
  '30 days of post-launch technical support and minor content adjustments'
];

const FAQS = [
  {
    question: 'How long does a typical website design project take?',
    answer:
      'Project timelines depend on the total scope, number of unique pages, and whether custom features (such as booking forms or interactive estimators) are requested. A standard business website is typically scoped, built, tested, and delivered within 2 to 4 weeks. Specific milestones and delivery schedules are agreed during initial scoping before work begins.'
  },
  {
    question: 'Can you add booking, online ordering, or payment integrations?',
    answer:
      'Yes. Booking forms, ordering workflows, third-party payment gateways, and CRM routing are available as features agreed according to your project requirements. During the scoping discussion, we evaluate your preferred tools and technical needs to agree on the exact integration path.'
  },
  {
    question: 'Do you work with businesses in Riyadh and across Saudi Arabia?',
    answer:
      'Yes. TITAN AI AGENCY works with businesses located in Riyadh, throughout Saudi Arabia, and remotely across international markets. Consultations, scope reviews, design revisions, and handovers are conducted smoothly via WhatsApp, video meetings, and direct digital collaboration.'
  },
  {
    question: 'Who owns the website and source code after launch?',
    answer:
      'Your business owns 100% of the website, custom source code, domain connections, and deployment accounts. We do not hold your digital assets hostage or use restrictive proprietary website builders. You receive complete handover documentation upon launch.'
  }
];

export const WebsiteDesignPage: React.FC = () => {
  usePageSEO({
    title: 'Website Design in Riyadh | TITAN AI Agency',
    description:
      'Professional website design and development for businesses in Riyadh and remotely. Fast, responsive websites with clear navigation and WhatsApp lead capture.',
    canonicalPath: '/services/website-design',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Website Design & Development',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png'
      },
      description:
        'Professional, responsive websites that present your business clearly, optimize mobile experience, and make it easy for customers in Riyadh and beyond to contact you.',
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#8FA0BA] mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00D1FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00D1FF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">Website Design</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Available in Riyadh & Remotely</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Website Design for Growing Businesses
            </h1>

            <p className="text-base sm:text-xl text-[#EAF7FF]/90 leading-relaxed font-normal">
              We design and build clean, fast, and responsive websites that present your business clearly, guide visitors intuitively, and convert interest into direct enquiries.
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
                href="#scope-deliverables"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold"
              >
                <span>View Deliverables & Scope</span>
                <ArrowRight className="w-4 h-4 text-[#00D1FF]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Foundations (Light Section) */}
      <section className="relative py-16 sm:py-24 bg-[#FFFFFF] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
              Engineering Principles
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Websites Engineered for Real Business Results
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              Every website we build is crafted around four fundamental pillars that ensure smooth visitor experiences and direct communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-titan-light p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                <Smartphone className="w-5 h-5 text-[#00D1FF]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#071A33]">Fluid Responsiveness</h3>
              <p className="text-sm text-[#536477] leading-relaxed">
                Flawless layout adaptation across phones, tablets, laptops, and desktop screens with zero visual clipping or horizontal scrolling.
              </p>
            </div>

            <div className="card-titan-light p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#3BA9FF]">
                <Navigation className="w-5 h-5 text-[#3BA9FF]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#071A33]">Clear Navigation</h3>
              <p className="text-sm text-[#536477] leading-relaxed">
                Simple, logical page structure that helps visitors find services, portfolios, operating information, and pricing indicators quickly.
              </p>
            </div>

            <div className="card-titan-light p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-[#00D1FF]">
                <Globe className="w-5 h-5 text-[#00D1FF]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#071A33]">Sub-Second Speed</h3>
              <p className="text-sm text-[#536477] leading-relaxed">
                Modern React architectures delivering instant page transitions and passing Google Core Web Vitals performance benchmarks.
              </p>
            </div>

            <div className="card-titan-light p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center text-emerald-600">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#071A33]">Direct WhatsApp Action</h3>
              <p className="text-sm text-[#536477] leading-relaxed">
                One-tap enquiry triggers connecting prospects directly to your WhatsApp number with prefilled context for instant follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Practical Business Use Cases (Clean Ice Blue Section) */}
      <section className="relative py-16 sm:py-24 bg-[#EAF7FF]/50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
              Tailored Configurations
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Practical Use Cases Across Industries
            </h2>
            <p className="mt-3 text-[#536477] text-base leading-relaxed">
              We engineer websites tailored to how your customers actually browse, evaluate options, and reach out to make purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div
                key={idx}
                className="card-titan-light p-7 space-y-4"
              >
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

      {/* 4. Portfolio Evidence (Live Case Studies) */}
      <FeaturedWork
        id="website-portfolio-demos"
        badge="Live Portfolio Demonstrations"
        title="Explore Website Concepts We Build"
        subtitle="Review three responsive demo projects demonstrating our design approach, navigation standards, and enquiry conversion flows. All three links are live interactive demos."
      />

      {/* 5. Deliverables & Scope (Deep Navy Section) */}
      <section id="scope-deliverables" className="relative py-16 sm:py-24 bg-[#04142E] text-white border-t border-[#00D1FF]/20">
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
                We believe in complete transparency before code is written. Every project has a written scope specification and defined milestones.
              </p>
              <div className="p-4 rounded-xl bg-[#0B1F4B]/80 border border-[#00D1FF]/30 text-xs text-[#EAF7FF] leading-relaxed">
                <strong className="text-[#00D1FF] block font-bold mb-1">Custom Integrations Notice</strong>
                Booking engines, e-commerce checkout, table reservations, and CRM routing are available as structured features agreed according to your specific project requirements.
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

      {/* 6. Simple 5-Step Process */}
      <ServiceProcessSteps />

      {/* 7. FAQs */}
      <ServiceFAQList serviceTitle="Website Design & Development" faqs={FAQS} />

      {/* 8. Final CTA Section */}
      <ServiceCTASection
        serviceTitle="Website Design"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Discuss your website concept, required pages, and conversion goals directly with our engineering team on WhatsApp."
      />
    </div>
  );
};
