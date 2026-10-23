import React from 'react';
import { MessageCircle, ShieldCheck, Phone, Instagram } from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';
import { QuotationForm } from '../pricing/QuotationForm';
import { VERIFIED_WHATSAPP_DISPLAY, VERIFIED_WHATSAPP_TARGET } from '../../data/quotationServices';

export const HomepageContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const c = t.homepageContact;

  const directWhatsAppUrl = `https://wa.me/${VERIFIED_WHATSAPP_TARGET}?text=${encodeURIComponent(
    language === 'ar'
      ? 'مرحباً وكالة تيتان، أود مناقشة مشروع جديد والحصول على استشارة.'
      : 'Hello Titan AI Agency, I would like to discuss a project and receive a quote.'
  )}`;

  return (
    <section
      id="contact"
      data-section="homepage-contact"
      className="relative py-12 sm:py-20 lg:py-28 bg-[#FFFFFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-100/40 via-blue-50/30 to-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              <span>{c?.badge || (language === 'ar' ? 'تواصل معنا' : 'Get in Touch')}</span>
            </div>

            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {c?.heading || (language === 'ar' ? 'دعنا نناقش مشروعك القادم' : 'Let’s Discuss Your Next Project')}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {c?.subtitle || (language === 'ar' ? 'أرسل تفاصيل مشروعك أو تواصل مباشرة مع المؤسس سعد نعيم عبر واتساب للحصول على استشارة وتسعيرة دقيقة.' : 'Send a quick inquiry or message founder Saad Naeem directly on WhatsApp. We provide transparent scopes and clear fixed quotes.')}
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp & Company Contacts */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <FadeIn delay={0.1} direction="up" distance={16}>
              <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-[#0B1F4B] to-[#04142E] text-white border border-[#00D1FF]/20 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold block mb-2">
                    {language === 'ar' ? 'تواصل تنفيذي فوري' : 'Direct Founder Channel'}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {c?.whatsappDirect || (language === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Chat Directly on WhatsApp')}
                  </h3>
                  <p className="text-sm text-[#C5D2E2] leading-relaxed">
                    {c?.whatsappDirectDesc || (language === 'ar' ? 'تفضل الرد الفوري المباشر؟ تواصل مباشرة مع المؤسس سعد نعيم عبر واتساب.' : 'Prefer instant chat? Connect directly with founder Saad Naeem on WhatsApp.')}
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0284C7] to-[#00D1FF] text-white flex items-center justify-center gap-2 hover:brightness-105 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{c?.chatWhatsappBtn || (language === 'ar' ? `فتح محادثة واتساب (${VERIFIED_WHATSAPP_DISPLAY})` : `Open WhatsApp (${VERIFIED_WHATSAPP_DISPLAY})`)}</span>
                  </a>

                  <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#8FA0BA]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#00D1FF] shrink-0" />
                      <span className="font-mono text-white text-xs">{VERIFIED_WHATSAPP_DISPLAY}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-[#3BA9FF] shrink-0" />
                      <a
                        href="https://www.instagram.com/titanaiagency.sa?stkn=MWZsZHR5d2Q1Zzdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#00D1FF] transition-colors font-mono text-xs"
                      >
                        @titanaiagency.sa
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#8FA0BA]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00D1FF] shrink-0" />
                    <span>{language === 'ar' ? 'هندسة برمجية مباشرة مع المؤسس سعد نعيم' : 'Direct engineering with founder Saad Naeem'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00D1FF] shrink-0" />
                    <span>{language === 'ar' ? 'دعم فني مجاني لمدة 30 يوماً بعد الإطلاق' : '30 days complimentary post-launch support'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00D1FF] shrink-0" />
                    <span>{language === 'ar' ? 'ملكية تامة 100% للشيفرة والأصول البرمجية' : '100% client code & IP ownership'}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Unified Quotation Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15} direction="up" distance={16}>
              <div className="rounded-3xl p-6 sm:p-9 bg-white border border-slate-200/90 shadow-sm text-start">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-[#071A33] mb-1">
                    {c?.cardTitle || (language === 'ar' ? 'احصل على عرض سعر مجاني' : 'Request a Free Quote')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {c?.cardSubtitle || (language === 'ar' ? 'بدون نماذج معقدة. أخبرنا باحتياج عملك وسنرد عليك خلال ساعات.' : 'No complicated forms. Tell us what your business needs, and we’ll reply within hours.')}
                  </p>
                </div>

                <QuotationForm isModal={false} />
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
