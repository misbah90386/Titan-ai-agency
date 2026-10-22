import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ArrowRight, ShieldCheck, Phone, Instagram } from 'lucide-react';
import { FadeIn } from '../motion/MotionComponents';
import { useLanguage } from '../../context/LanguageContext';

export const HomepageContactSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const c = t.homepageContact;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Starter Website (From SAR 500)');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    { id: 'starter', label: language === 'ar' ? 'موقع Starter (ابتداءً من 500 ريال)' : 'Starter Website (From SAR 500)' },
    { id: 'professional', label: language === 'ar' ? 'موقع Professional (ابتداءً من 1,200 ريال)' : 'Professional Website (From SAR 1,200)' },
    { id: 'advanced', label: language === 'ar' ? 'موقع Advanced (ابتداءً من 2,000 ريال)' : 'Advanced Business Website (From SAR 2,000)' },
    { id: 'ai-agents', label: language === 'ar' ? 'مساعدين ذكاء اصطناعي (عرض سعر مخصص)' : 'AI Chat Assistant (Custom Quote)' },
    { id: 'ai-calls', label: language === 'ar' ? 'وكلاء اتصال صوتي آلي (عرض سعر مخصص)' : 'AI Call Agent (Custom Quote)' },
    { id: 'maintenance', label: language === 'ar' ? 'خطة صيانة المواقع (ابتداءً من 100 ريال / شهرياً)' : 'Website Maintenance (From SAR 100/mo)' },
    { id: 'other', label: language === 'ar' ? 'حل رقمي أو استشارة أخرى' : 'Other Digital Inquiry' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !details.trim()) {
      setErrorMsg(language === 'ar' ? 'يرجى تعبئة جميع الحقول المطلوبة (*)' : 'Please fill in all required fields (*)');
      return;
    }

    setErrorMsg('');
    const message = [
      `*New Project Inquiry via Titan Website*`,
      `*Name:* ${fullName.trim()}`,
      `*Phone / WhatsApp:* ${phone.trim()}`,
      `*Service Required:* ${service}`,
      `*Project Goal:* ${details.trim()}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/966534182945?text=${encodeURIComponent(message)}`;
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      data-section="homepage-contact"
      className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80 overflow-hidden text-[#071A33]"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-100/40 via-blue-50/30 to-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              <span>{c?.badge || (language === 'ar' ? 'تواصل معنا' : 'Get in Touch')}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
              {c?.heading || (language === 'ar' ? 'دعنا نناقش مشروعك القادم' : 'Let’s Discuss Your Next Project')}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {c?.subtitle || (language === 'ar' ? 'أرسل تفاصيل مشروعك أو تواصل مباشرة مع المؤسس سعد نعيم عبر واتساب للحصول على استشارة وتسعيرة دقيقة.' : 'Send a quick inquiry or message founder Saad Naeem directly on WhatsApp. We provide transparent scopes and clear fixed quotes.')}
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp & Company Contacts */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <FadeIn delay={0.1} direction="up" distance={16}>
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0B1F4B] to-[#04142E] text-white border border-[#00D1FF]/20 shadow-lg space-y-6">
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
                    href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0284C7] to-[#00D1FF] text-white flex items-center justify-center gap-2 hover:brightness-105 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{c?.chatWhatsappBtn || (language === 'ar' ? 'فتح محادثة واتساب (+966 53 418 2945)' : 'Open WhatsApp (+966 53 418 2945)')}</span>
                  </a>

                  <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#8FA0BA]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#00D1FF] shrink-0" />
                      <span className="font-mono text-white text-xs">+966 53 418 2945</span>
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

          {/* Right Column: Fast Quote Inquiry Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15} direction="up" distance={16}>
              <div className="rounded-3xl p-8 sm:p-9 bg-white border border-slate-200/90 shadow-sm text-start">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-[#071A33] mb-1">
                    {c?.cardTitle || (language === 'ar' ? 'احصل على عرض سعر مجاني' : 'Request a Free Quote')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {c?.cardSubtitle || (language === 'ar' ? 'بدون نماذج معقدة. أخبرنا باحتياج عملك وسنرد عليك خلال ساعات.' : 'No complicated forms. Tell us what your business needs, and we’ll reply within hours.')}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-emerald-950">
                      {language === 'ar' ? 'تم تجهيز طلبك بنجاح!' : 'Inquiry Formulated Successfully!'}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      {language === 'ar'
                        ? 'تم إعداد التفاصيل لإرسالها مباشرة إلى المؤسس سعد نعيم عبر واتساب لمراجعة طلبك وتقديم التسعيرة.'
                        : 'Your details have been prepared for direct delivery to founder Saad Naeem on WhatsApp for fast review and quoting.'}
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/966534182945?text=${encodeURIComponent(
                          `*Project Inquiry*\nName: ${fullName}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{language === 'ar' ? 'إعادة فتح محادثة واتساب' : 'Re-open WhatsApp Chat'}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#071A33] mb-1.5 uppercase tracking-wider">
                          {c?.nameLabel || (language === 'ar' ? 'الاسم الكريم *' : 'Your Name *')}
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={c?.namePlaceholder || (language === 'ar' ? 'مثال: طارق المنصور' : 'e.g. Tariq Al-Mansoor')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#071A33] mb-1.5 uppercase tracking-wider">
                          {c?.phoneLabel || (language === 'ar' ? 'رقم الجوال / واتساب *' : 'Phone / WhatsApp *')}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={c?.phonePlaceholder || '+966 5X XXX XXXX'}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 uppercase tracking-wider">
                        {c?.serviceLabel || (language === 'ar' ? 'الخدمة المطلوبة *' : 'Service Needed *')}
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                      >
                        {servicesList.map((sItem) => (
                          <option key={sItem.id} value={sItem.label}>
                            {sItem.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 uppercase tracking-wider">
                        {c?.messageLabel || (language === 'ar' ? 'تفاصيل المشروع والهدف *' : 'Project Details / Goal *')}
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder={c?.messagePlaceholder || (language === 'ar' ? 'أخبرنا باختصار عن عملك والهدف الذي ترغب في تحقيقه...' : 'Tell us briefly about your business and what you want to achieve...')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider btn-titan-primary shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>{c?.submitBtn || (language === 'ar' ? 'إرسال طلب المشروع' : 'Send Project Inquiry')}</span>
                        <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
