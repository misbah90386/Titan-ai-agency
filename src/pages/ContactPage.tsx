import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, FileCheck, Code2, Rocket, MessageSquare, Sparkles } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn } from '../components/motion/MotionComponents';
import { useLanguage } from '../context/LanguageContext';
import { QuotationForm } from '../components/pricing/QuotationForm';
import { VERIFIED_WHATSAPP_DISPLAY, VERIFIED_WHATSAPP_TARGET } from '../data/quotationServices';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();

  const pkgParam = searchParams.get('package') || undefined;
  const srvParam = searchParams.get('service') || undefined;

  usePageSEO({
    title: language === 'ar'
      ? 'ابدأ مشروعك واطلب عرض سعر | وكالة تيتان للذكاء الاصطناعي'
      : 'Start Your Project & Request a Quote | Titan AI Agency',
    description: language === 'ar'
      ? 'ابدأ مشروعك مع وكالة تيتان. باقات مواقع تبدأ من 500 ريال، وحلول ذكاء اصطناعي وأتمتة وصيانة شهرية للشركات في السعودية.'
      : 'Start your project with Titan AI Agency. Professional websites from SAR 500, custom AI agents, call agents, and monthly maintenance for Saudi businesses.',
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Titan AI Agency',
      url: 'https://titan-ai-agency.vercel.app/contact',
      description:
        'Start your project with Titan AI Agency. Tell us what you want to improve—websites, SEO, AI agents, call agents, or video creation.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Titan AI Agency',
        url: 'https://titan-ai-agency.vercel.app/',
        logo: 'https://titan-ai-agency.vercel.app/titan-logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+966534182945',
          contactType: 'sales',
          availableLanguage: ['English', 'Arabic'],
        },
      },
    },
  });

  const trustSteps = [
    {
      num: '01',
      title: language === 'ar' ? 'مراجعة المتطلبات' : 'Scope Review',
      desc: language === 'ar' ? 'ندرس متطلبات نشاطك بعناية.' : 'We review your business context and goals.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: language === 'ar' ? 'استشارة متخصصة' : 'Consultation',
      desc: language === 'ar' ? 'نحدد الحل التقني الأنسب لاحتياجاتك.' : 'We discuss details directly on WhatsApp.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: language === 'ar' ? 'عرض السعر وخطة العمل' : 'Clear Proposal',
      desc: language === 'ar' ? 'عرض سعر شفاف ومواعيد واضحة.' : 'Itemized quote, features, and timeline.',
      icon: FileCheck
    },
    {
      num: '04',
      title: language === 'ar' ? 'التطوير الهندسي' : 'Custom Build',
      desc: language === 'ar' ? 'بناء احترافي مخصص دون قوالب مكررة.' : 'High-performance engineering and custom code.',
      icon: Code2
    },
    {
      num: '05',
      title: language === 'ar' ? 'الفحص والإطلاق' : 'Launch & Support',
      desc: language === 'ar' ? 'اختبار شامل مع 30 يوماً دعم مجاني.' : 'Browser testing with 30 days free support.',
      icon: Rocket
    }
  ];

  const directChatUrl = `https://wa.me/${VERIFIED_WHATSAPP_TARGET}?text=${encodeURIComponent(
    language === 'ar'
      ? 'مرحباً وكالة تيتان، أود الاستفسار حول خدماتكم ومشروعي القادم.'
      : 'Hello Titan AI Agency, I would like to discuss my project requirements.'
  )}`;

  return (
    <div id="contact-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-digital-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono text-[#0284C7] font-bold uppercase tracking-widest shadow-xs">
              <TitanIcon className="w-4 h-4 text-[#00D1FF]" />
              <span>{language === 'ar' ? 'طلب عرض سعر واستشارة' : 'Project Quotation & Scoping'}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {language === 'ar' ? 'ابدأ مشروعك مع تيتان' : 'Start Your Project'}
            </h1>

            <p className="text-sm sm:text-base text-[#536477] font-normal leading-relaxed">
              {language === 'ar'
                ? 'أدخل متطلبات مشروعك أدناه للحصول على تفاصيل دقيقة وعرض سعر واضح، وتواصل معنا مباشرة عبر واتساب.'
                : 'Select your required service and describe your project scope. We provide clear starting estimates and transparent engineering.'}
            </p>
          </div>
        </FadeIn>

        {/* Unified Quotation Form Container */}
        <FadeIn delay={0.1} direction="up" distance={16}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 mb-14 text-start">
            <div className="flex items-center gap-2 pb-5 mb-5 border-b border-slate-100">
              <Sparkles className="w-4 h-4 text-[#0284C7]" />
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#071A33]">
                {language === 'ar' ? 'بيانات طلب عرض السعر' : 'Quotation Inquiry Details'}
              </h2>
            </div>

            <QuotationForm
              isModal={false}
              initialPackageName={pkgParam}
              initialServiceId={srvParam}
            />
          </div>
        </FadeIn>

        {/* Trust Information Section (What happens after you contact TITAN?) */}
        <FadeIn delay={0.2} direction="up" distance={20}>
          <div className="rounded-3xl bg-[#04142E] text-white p-7 sm:p-10 border border-[#00D1FF]/25 shadow-xl mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                {language === 'ar' ? 'خطوات واضحة وموثوقة' : 'Clear Steps Ahead'}
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight">
                {language === 'ar' ? 'ماذا يحدث بعد إرسال طلبك؟' : 'WHAT HAPPENS AFTER YOU CONTACT TITAN?'}
              </h2>
              <p className="text-xs sm:text-sm text-[#8FA0BA]">
                {language === 'ar'
                  ? 'عملية منظمة وشفافة تضمن وضوح النطاق والجدول الزمني قبل البدء.'
                  : 'A disciplined, predictable process that eliminates project risk and uncertainty.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {trustSteps.map((st) => {
                const IconComp = st.icon;
                return (
                  <div key={st.num} className="p-4 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-2 text-start">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#00D1FF]">
                        {st.num}
                      </span>
                      <IconComp className="w-4 h-4 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">
                      {st.title}
                    </h3>
                    <p className="text-xs text-[#8FA0BA] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Direct WhatsApp Card Alternative */}
        <FadeIn delay={0.3} direction="up">
          <div className="max-w-md mx-auto text-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#071A33] mb-1">
              {language === 'ar' ? 'تفضل المحادثة المباشرة؟' : 'Prefer Direct Chat?'}
            </h3>
            <p className="text-xs text-[#536477] mb-4 leading-relaxed">
              {language === 'ar'
                ? `تواصل مباشرة مع المؤسس سعد نعيم عبر واتساب (${VERIFIED_WHATSAPP_DISPLAY}) للاستفسارات السريعة.`
                : `Message founder Saad Naeem directly on WhatsApp (${VERIFIED_WHATSAPP_DISPLAY}) for fast scoping questions.`}
            </p>
            <a
              href={directChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'ar' ? 'محادثة عبر واتساب' : `Chat on WhatsApp`}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};
