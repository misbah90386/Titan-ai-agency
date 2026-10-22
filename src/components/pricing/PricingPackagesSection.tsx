import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Info, ChevronDown, ChevronUp, Bot, Wrench } from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';
import { QuoteModal } from './QuoteModal';

export const PricingPackagesSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState<{ id: string; name: string; price?: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [showTerms, setShowTerms] = useState(false);

  const pkgs = t.pricing.websitePackages;
  const sp = t.simplifiedPricing;

  const packagesList = [
    {
      ...pkgs.starter,
      isFeatured: false,
    },
    {
      ...pkgs.professional,
      isFeatured: true,
    },
    {
      ...pkgs.advanced,
      isFeatured: false,
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectPackage = (pkg: { id: string; name: string; price: string }) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <section
      id="pricing"
      data-section="pricing-packages"
      className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]"
    >
      {/* Subtle Light Ice Blue Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-sky-100/60 via-blue-50/40 to-sky-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              <span>{t.pricing.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {t.pricing.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              {t.pricing.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 3 Website Pricing Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-14">
          {packagesList.map((pkg, idx) => {
            const isRec = pkg.isFeatured;
            const isExpanded = !!expandedCards[pkg.id];
            const topFeatures = pkg.features.slice(0, 4);
            const extraFeatures = pkg.features.slice(4);

            return (
              <FadeIn key={pkg.id} delay={idx * 0.08} direction="up" distance={18}>
                <div
                  id={`pricing-card-${pkg.id}`}
                  className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between h-full transition-all duration-250 text-start ${
                    isRec
                      ? 'bg-gradient-to-b from-white via-white to-sky-50/40 border-2 border-sky-400 shadow-[0_16px_40px_-10px_rgba(2,132,199,0.22)] ring-4 ring-sky-100/70 lg:-translate-y-2'
                      : 'bg-white border border-slate-200/90 shadow-sm hover:border-sky-300 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  {/* Recommended Highlight Badge */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0284C7] to-[#00D1FF] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{t.pricing.recommendedBadge}</span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Package Name */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A33]">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px] mb-6 font-normal">
                      {pkg.desc}
                    </p>

                    {/* Price Block */}
                    <div className="pb-6 mb-6 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider font-semibold">
                        {t.pricing.startingFrom}
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#071A33] tracking-tight">
                          {pkg.priceNumeric.toLocaleString()}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-600 font-mono">
                          {t.pricing.currency}
                        </span>
                      </div>
                    </div>

                    {/* Top 4 Features List */}
                    <div className="space-y-3 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                        {language === 'ar' ? 'أهم 4 ميزات:' : 'Key Included Features:'}
                      </span>
                      {topFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isRec ? 'bg-sky-100 text-[#0284C7]' : 'bg-slate-100 text-slate-600'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable "View All Features" Section */}
                    {extraFeatures.length > 0 && (
                      <div className="mb-6">
                        {isExpanded && (
                          <div className="space-y-3 pt-3 pb-3 border-t border-dashed border-slate-200">
                            {extraFeatures.map((feat, eIdx) => (
                              <div key={eIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                                </div>
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleExpand(pkg.id)}
                          className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-[#0284C7] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>
                            {isExpanded
                              ? (sp?.hideFeatures || (language === 'ar' ? 'إخفاء الميزات الإضافية' : 'Hide Extra Features'))
                              : (sp?.viewAllFeatures || (language === 'ar' ? 'عرض كافة الميزات' : 'View All Features'))}
                          </span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Call to Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      id={`cta-btn-${pkg.id}`}
                      onClick={() => handleSelectPackage(pkg)}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
                        isRec
                          ? 'btn-titan-primary shadow-[0_6px_20px_rgba(2,132,199,0.35)]'
                          : 'bg-white hover:bg-sky-50 text-[#0284C7] border-2 border-sky-300 hover:border-sky-400'
                      }`}
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Separate AI Service Pricing & Website Maintenance Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: AI Solutions (Custom Quote) */}
          <FadeIn delay={0.15} direction="up" distance={16}>
            <div className="rounded-3xl p-8 sm:p-9 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between h-full text-start hover:border-sky-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284C7] flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200">
                    {sp?.aiCardPrice || 'Custom Quote'}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#071A33] mb-2">
                  {sp?.aiCardTitle || 'AI Solutions & Automation'}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {sp?.aiCardSubtitle || 'Custom AI assistants, telephone call agents, and system automation tailored to your exact business workflow.'}
                </p>

                <div className="space-y-3 mb-8">
                  {(sp?.aiCardFeatures || [
                    'AI customer support assistants (24/7 response)',
                    'AI phone call agents for bookings & inquiries',
                    'Business automation linking forms, CRM & WhatsApp',
                    'AI promotional video creation & voiceovers'
                  ]).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleSelectPackage({
                    id: 'ai-solutions-custom',
                    name: sp?.aiCardTitle || 'AI Solutions & Automation',
                    price: sp?.aiCardPrice || 'Custom Quote'
                  })}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>{sp?.aiCardCta || 'Request Custom AI Quote'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Website Maintenance (From SAR 100/mo) */}
          <FadeIn delay={0.2} direction="up" distance={16}>
            <div className="rounded-3xl p-8 sm:p-9 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between h-full text-start hover:border-sky-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284C7] flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {sp?.maintenanceCardPrice || 'From SAR 100/mo'}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#071A33] mb-2">
                  {sp?.maintenanceCardTitle || 'Website Maintenance'}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {sp?.maintenanceCardSubtitle || 'Ongoing technical care and security updates to keep your website fast, safe, and up to date.'}
                </p>

                <div className="space-y-3 mb-8">
                  {(sp?.maintenanceCardFeatures || [
                    'Regular platform and security updates',
                    'Monthly reliable website backups',
                    'Continuous uptime and broken-link monitoring',
                    'Minor text, phone, and image updates'
                  ]).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleSelectPackage({
                    id: 'website-maintenance-plan',
                    name: sp?.maintenanceCardTitle || 'Website Maintenance',
                    price: sp?.maintenanceCardPrice || 'From SAR 100/month'
                  })}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-white hover:bg-sky-50 text-[#0284C7] border-2 border-sky-200 hover:border-sky-400 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>{sp?.maintenanceCardCta || 'Inquire About Maintenance'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Collapsible Important Pricing Terms (Section 1 Terms) */}
        <FadeIn delay={0.25} direction="up" distance={16}>
          <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 p-6 sm:p-8 text-start">
            <button
              type="button"
              onClick={() => setShowTerms(!showTerms)}
              className="w-full flex items-center justify-between gap-3 text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Info className="w-5 h-5 text-[#0284C7]" />
                <h4 className="font-display font-bold text-sm sm:text-base text-[#071A33] group-hover:text-[#0284C7] transition-colors">
                  {t.pricing.termsTitle}
                </h4>
              </div>
              <span className="text-xs font-semibold text-[#0284C7] flex items-center gap-1">
                <span>{showTerms ? (language === 'ar' ? 'إخفاء الشروط' : 'Hide terms') : (language === 'ar' ? 'عرض الشروط' : 'View terms')}</span>
                {showTerms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {showTerms && (
              <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-600">
                {t.pricing.terms.map((term, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0 mt-2" />
                    <span className="leading-relaxed">{term}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>

      </div>

      {/* Quote Dialog */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={selectedPackage}
      />
    </section>
  );
};
