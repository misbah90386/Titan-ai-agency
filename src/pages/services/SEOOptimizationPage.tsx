import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Compass,
  Layers,
  Sparkles,
  MessageCircle,
  BarChart3,
  Globe2
} from 'lucide-react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { ServiceProcessSteps } from '../../components/services/ServiceProcessSteps';
import { ServiceFAQList } from '../../components/services/ServiceFAQList';
import { ServiceCTASection } from '../../components/services/ServiceCTASection';
import { TitanIcon } from '../../components/TitanLogo';
import { FadeIn } from '../../components/motion/MotionComponents';

const WHATSAPP_MSG =
  'Hello TITAN AI AGENCY, I would like to improve my visibility with SEO & AI Search Optimization for my business.';
const WHATSAPP_URL = `https://wa.me/966534182945?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const CAPABILITIES = [
  { title: 'Technical SEO', desc: 'Architecture audits, mobile speed, crawlability, and indexing fixes.' },
  { title: 'On-Page SEO', desc: 'Strategic title tags, meta descriptions, semantic headings, and content hierarchy.' },
  { title: 'Local SEO', desc: 'Regional map pack rankings, geographic citations, and localized landing pages.' },
  { title: 'Google Business Optimization', desc: 'Complete profile setup, category alignment, services mapping, and review strategies.' },
  { title: 'Keyword Strategy', desc: 'High-intent commercial query mapping targeting buyers ready to transact.' },
  { title: 'SEO Articles', desc: 'Authoritative, expertly structured guides that capture long-tail organic search volume.' },
  { title: 'Internal Linking', desc: 'PageRank distribution architecture connecting top pages with core service offerings.' },
  { title: 'Structured Data (JSON-LD)', desc: 'Schema.org entity markup allowing Google & AI engines to parse services, reviews, and locations.' },
  { title: 'Sitemap Optimization', desc: 'Automated XML sitemaps, robots.txt directives, and clean canonical configurations.' },
  { title: 'Search Console Setup', desc: 'Complete verification, tracking indexation status, impressions, and click growth.' },
  { title: 'Performance Improvements', desc: 'Core Web Vitals optimization, asset compression, and instant server response times.' },
  { title: 'AI Search Visibility', desc: 'Optimization for generative engines (Perplexity, ChatGPT, Gemini, Claude citations).' }
];

const PROBLEMS_SOLVED = [
  { problem: 'Business is difficult to find online', solution: 'Comprehensive search indexing ensuring your business appears when prospective clients search your services.' },
  { problem: 'Website gets little organic traffic', solution: 'Targeted keyword architecture that drives steady, unpaid qualified visitors every month.' },
  { problem: 'Competitors appear above them', solution: 'Systematic technical and semantic optimization to establish superior domain relevance and trust.' },
  { problem: 'Weak local visibility', solution: 'Google Business profile and local citations placing your company directly in Google Maps results.' },
  { problem: 'Website content is not optimized', solution: 'Content restructuring with clear semantic signals, structured FAQs, and Schema markup.' }
];

const FAQS = [
  {
    question: 'How is AI Search Optimization different from traditional SEO?',
    answer:
      'Traditional SEO focuses primarily on Google web search result pages. AI Search Optimization (LLMO/GEO) ensures your brand, services, and authority are referenced by modern AI answer engines like ChatGPT, Perplexity, Google Gemini, and Claude when users ask for recommendations.'
  },
  {
    question: 'Do you guarantee #1 rankings on Google?',
    answer:
      'No honest agency guarantees #1 rankings, and Google explicitly warns against agencies that do. Instead, we implement rigorous, white-hat technical foundations, structured entity markup, and high-intent keyword strategies that systematically improve your search authority and qualified customer inquiries.'
  },
  {
    question: 'How long before we see measurable results from SEO?',
    answer:
      'Technical fixes, structured data integration, and Google Business profile enhancements take effect in days to weeks. Organic keyword authority and competitive ranking improvements typically compound over 2 to 4 months as search engines re-index your pages and register customer engagement signals.'
  },
  {
    question: 'Do you help businesses located in Saudi Arabia and the GCC?',
    answer:
      'Yes. We specialize in both Arabic and English local SEO, Google Business optimization, and regional search visibility for businesses in Riyadh, Jeddah, Dammam, and across the GCC region.'
  }
];

export const SEOOptimizationPage: React.FC = () => {
  usePageSEO({
    title: 'SEO & AI Search Optimization | TITAN AI Agency',
    description:
      'Get discovered where customers are searching. Technical SEO, on-page optimization, local SEO, Schema markup, and AI search visibility for modern businesses.',
    canonicalPath: '/services/seo',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SEO & AI Search Optimization',
      provider: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/'
      },
      description:
        'Help businesses improve their visibility across traditional search engines and modern AI-powered discovery platforms.'
    }
  });

  return (
    <div id="seo-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 sm:py-28 bg-titan-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <FadeIn delay={0.1} direction="none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <TitanIcon className="w-4 h-4" />
              <span>CORE SERVICE 02 · SEARCH & AI DISCOVERY</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={30}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Get Discovered Where Customers Are Searching.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="text-base sm:text-xl text-[#EAF7FF]/90 max-w-3xl mx-auto leading-relaxed font-normal">
              Help businesses improve their visibility across traditional search engines and modern AI-powered discovery platforms. Drive qualified organic leads with technical clarity and semantic authority.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" distance={15}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="seo-cta-primary"
                className="btn-titan-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold shadow-[0_4px_18px_rgba(0,209,255,0.3)] hover:shadow-[0_0_24px_rgba(0,209,255,0.5)]"
              >
                <span>IMPROVE MY VISIBILITY</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#capabilities"
                className="btn-titan-secondary-dark inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </FadeIn>

          {/* Transparent Policy Disclaimer */}
          <FadeIn delay={0.5} direction="none">
            <div className="pt-6 max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs font-mono text-[#8FA0BA]">
              <AlertCircle className="w-4 h-4 text-[#00D1FF] shrink-0" />
              <span>Transparent engineering: We focus on verified technical optimization and do not make false #1 ranking guarantees.</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. BUSINESS PROBLEMS SOLVED */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
              Measurable Business Value
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Business Problems We Solve
            </h2>
            <p className="mt-3 text-[#536477] text-base">
              Search optimization is not about vanity rankings—it is about turning digital visibility into revenue opportunities.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_SOLVED.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} direction="up" distance={20}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Problem</span>
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

      {/* 3. CAPABILITIES BREAKDOWN */}
      <section id="capabilities" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold block mb-2">
                End-To-End Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
                Complete Scope & Capabilities
              </h2>
              <p className="mt-3 text-[#536477] text-base">
                Engineered for both traditional search crawlers and modern generative AI models.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={20}>
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 hover:border-[#00D1FF]/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-center shrink-0">
                      <Search className="w-4 h-4 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#071A33]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS STEPS */}
      <ServiceProcessSteps />

      {/* 5. FAQS */}
      <ServiceFAQList faqs={FAQS} serviceTitle="SEO & AI Search Optimization" />

      {/* 6. CTA SECTION */}
      <ServiceCTASection
        serviceTitle="SEO & AI Search Optimization"
        whatsappMessage={WHATSAPP_MSG}
        subtitle="Let's analyze your current visibility, identify search gaps, and structure your digital assets so customers find you first."
      />
    </div>
  );
};
