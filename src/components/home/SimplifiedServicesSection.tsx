import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Bot, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';

export const SimplifiedServicesSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const s = t.simplifiedServices;

  const categories = [
    {
      id: 'websites',
      data: s.categories.websites,
      icon: <Globe className="w-6 h-6 text-[#0284C7]" />,
      accentBg: 'bg-sky-50 text-[#0284C7] border-sky-100',
      badge: language === 'ar' ? 'تصميم مخصص' : 'Custom Built',
      detailLink: '/services/website-design'
    },
    {
      id: 'ai',
      data: s.categories.ai,
      icon: <Bot className="w-6 h-6 text-[#0284C7]" />,
      accentBg: 'bg-blue-50 text-[#0284C7] border-blue-100',
      badge: language === 'ar' ? 'أتمتة ذكية' : 'Smart Automation',
      detailLink: '/services/ai-agents'
    },
    {
      id: 'marketing',
      data: s.categories.marketing,
      icon: <TrendingUp className="w-6 h-6 text-[#0284C7]" />,
      accentBg: 'bg-sky-50 text-[#0284C7] border-sky-100',
      badge: language === 'ar' ? 'نمو وظهور' : 'Growth & SEO',
      detailLink: '/services/seo'
    }
  ];

  return (
    <section
      id="services-preview-section"
      data-section="simplified-services"
      className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-100 overflow-hidden text-[#071A33]"
    >
      {/* Subtle light ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-100/50 via-blue-50/40 to-sky-100/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              <span>{s.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {s.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {s.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 3 Main Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {categories.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 0.08} direction="up" distance={16}>
              <div
                id={`category-card-${cat.id}`}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 flex flex-col justify-between h-full border border-slate-200/90 shadow-sm hover:border-sky-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-250 text-start"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border ${cat.accentBg} group-hover:scale-105 transition-transform duration-200`}>
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-display text-2xl font-bold text-[#071A33] mb-3 group-hover:text-[#0284C7] transition-colors duration-200">
                    {cat.data.title}
                  </h3>

                  {/* Short Simple Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6 min-h-[44px]">
                    {cat.data.desc}
                  </p>

                  {/* 3 Explicit Key Deliverables */}
                  <div className="pt-4 border-t border-slate-100 space-y-3 mb-8">
                    {cat.data.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Action Link */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                  <Link
                    to={cat.detailLink}
                    id={`learn-more-${cat.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] group-hover:text-[#0369A1] transition-colors"
                  >
                    <span>{s.learnMore}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'} transition-transform duration-200`} />
                  </Link>
                  {cat.id === 'ai' && (
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] group-hover:text-[#0369A1] transition-colors"
                    >
                      <span>Discuss Your AI Project</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quiet Reference Link to All Services */}
        <FadeIn delay={0.3} direction="up" distance={12}>
          <div className="text-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#0284C7] transition-colors"
            >
              <span>{s.viewAllServices}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
