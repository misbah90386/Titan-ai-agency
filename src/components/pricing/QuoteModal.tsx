import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: {
    id: string;
    name: string;
    price?: string;
  } | null;
}

const WHATSAPP_NUMBER = '+966 53 418 2945';
const WHATSAPP_API_TARGET = '966534182945';

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialPackage
}) => {
  const { language, isRtl, t } = useLanguage();

  const [packageName, setPackageName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Website Development');
  const [requirements, setRequirements] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialPackage) {
      setPackageName(initialPackage.name);
      if (initialPackage.id.includes('website')) {
        setServiceNeeded('Website Development');
      } else if (initialPackage.id.includes('maintenance')) {
        setServiceNeeded('Website Maintenance');
      } else if (initialPackage.id.includes('call')) {
        setServiceNeeded('AI Call Agents');
      } else if (initialPackage.id.includes('agent')) {
        setServiceNeeded('AI Agents');
      } else if (initialPackage.id.includes('video')) {
        setServiceNeeded('AI Video Creation');
      } else if (initialPackage.id.includes('seo')) {
        setServiceNeeded('SEO & Search Visibility');
      }
    } else {
      setPackageName('Professional Website (SAR 1,200)');
    }
    setSubmitted(false);
    setErrorMessage('');
  }, [initialPackage, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!customerName.trim() || !businessName.trim() || !phone.trim() || !requirements.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى تعبئة جميع الحقول المطلوبة (الاسم، اسم المنشأة، الهاتف، متطلبات المشروع).'
          : 'Please complete all required fields (Name, Business Name, Phone/WhatsApp, Project Requirements).'
      );
      return;
    }

    setSubmitted(true);
    setErrorMessage('');

    // Formulate structured WhatsApp text
    const textLines = [
      language === 'ar' ? 'طلب عرض سعر - وكالة تيتان للذكاء الاصطناعي' : 'New Project Inquiry - TITAN AI AGENCY',
      '--------------------------------',
      `${language === 'ar' ? 'الباقة المختارة' : 'Selected Package'}: ${packageName || 'Custom Scope'}`,
      `${language === 'ar' ? 'الاسم' : 'Client Name'}: ${customerName}`,
      `${language === 'ar' ? 'المنشأة / النشاط' : 'Business Name'}: ${businessName}`,
      `${language === 'ar' ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}: ${phone}`,
      `${language === 'ar' ? 'الخدمة المطلوبة' : 'Service Required'}: ${serviceNeeded}`,
      `${language === 'ar' ? 'المتطلبات والتحدي' : 'Requirements / Challenge'}: ${requirements}`,
      additionalMessage ? `${language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}: ${additionalMessage}` : null,
      '--------------------------------',
      language === 'ar' ? 'أرجو مراجعة الطلب وموافاتي بالعرض المناسب.' : 'Please review this inquiry and provide a custom proposal.'
    ].filter(Boolean);

    const fullMessage = textLines.join('\n');
    const waUrl = `https://wa.me/${WHATSAPP_API_TARGET}?text=${encodeURIComponent(fullMessage)}`;

    // Safely redirect to WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  const getDirectWhatsAppUrl = () => {
    const promptMsg = language === 'ar'
      ? `مرحباً وكالة تيتان، أود الاستفسار مباشرة حول باقة (${packageName || 'تطوير موقع'}).`
      : `Hello TITAN AI AGENCY, I would like to inquire about ${packageName || 'Website Development'}.`;
    return `https://wa.me/${WHATSAPP_API_TARGET}?text=${encodeURIComponent(promptMsg)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#04142E] via-[#0B1F4B] to-[#04142E] text-white p-6 sm:p-7 flex items-start justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-1.5 max-w-lg">
            <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
              {t.pricing.quoteModal.title}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {packageName ? `${packageName}` : t.pricing.heading}
            </h3>
            <p className="text-xs sm:text-sm text-[#C2D4EC] leading-relaxed">
              {t.pricing.quoteModal.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close quote dialog"
            className="relative z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-140px)] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#071A33]">
                {t.pricing.quoteModal.successTitle}
              </h4>
              <p className="text-sm text-[#536477] max-w-md mx-auto leading-relaxed">
                {t.pricing.quoteModal.successMessage}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto space-y-1 font-mono text-start">
                <div><strong>{language === 'ar' ? 'العميل' : 'Client'}:</strong> {customerName} ({businessName})</div>
                <div><strong>{language === 'ar' ? 'الباقة' : 'Package'}:</strong> {packageName}</div>
                <div><strong>{language === 'ar' ? 'الهاتف' : 'Phone'}:</strong> {phone}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.pricing.quoteModal.openWhatsappNow}</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071A33] text-xs sm:text-sm font-semibold transition-colors"
                >
                  {t.pricing.quoteModal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Selected Package Badge Display */}
              <div className="p-3.5 rounded-xl bg-[#EAF7FF] border border-[#3BA9FF]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                    {t.pricing.quoteModal.selectedPackageLabel}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[#071A33]">
                    {packageName}
                  </span>
                </div>
                {initialPackage?.price && (
                  <span className="font-mono text-xs font-bold text-[#0284C7] px-2.5 py-1 rounded-lg bg-white border border-sky-200">
                    {initialPackage.price}
                  </span>
                )}
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
                    {t.pricing.quoteModal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: محمد العمري' : 'e.g. Tariq Al-Mansoor'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
                    {t.pricing.quoteModal.businessLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: شركة مساكن العقارية' : 'e.g. Apex Property Group'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
                    {t.pricing.quoteModal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
                    {t.pricing.quoteModal.serviceLabel}
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7]"
                  >
                    <option value="Website Development">
                      {language === 'ar' ? 'تطوير موقع إلكتروني' : 'Website Development'}
                    </option>
                    <option value="Website Maintenance">
                      {language === 'ar' ? 'صيانة ودعم فني' : 'Website Maintenance'}
                    </option>
                    <option value="AI Agents">
                      {language === 'ar' ? 'وكلاء دعم ذكاء اصطناعي' : 'AI Support Agents'}
                    </option>
                    <option value="AI Call Agents">
                      {language === 'ar' ? 'وكلاء اتصال صوتي' : 'AI Call Agents'}
                    </option>
                    <option value="SEO">
                      {language === 'ar' ? 'تحسين محركات البحث SEO' : 'SEO Optimization'}
                    </option>
                    <option value="AI Video Creation">
                      {language === 'ar' ? 'إنتاج فيديو تسويقي ذكي' : 'AI Video Creation'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
                  {t.pricing.quoteModal.requirementsLabel}
                </label>
                <textarea
                  required
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder={
                    language === 'ar'
                      ? 'اذكر أهداف مشروعك، مثل عدد الصفحات، الخدمات المطلوب عرضها، اللغات، ونموذج التواصل...'
                      : 'Outline your project scope: page count, required features, bilingual needs, timeline expectations...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Additional message */}
              <div>
                <label className="block text-xs font-bold text-[#536477] mb-1 font-mono uppercase">
                  {t.pricing.quoteModal.messageLabel}
                </label>
                <input
                  type="text"
                  value={additionalMessage}
                  onChange={(e) => setAdditionalMessage(e.target.value)}
                  placeholder={language === 'ar' ? 'أي متطلبات أو استفسارات أخرى...' : 'Any existing website URL, notes, or questions...'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              {/* Verified destination note */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>
                  {language === 'ar'
                    ? `مراجعة مباشرة وموثقة عبر واتساب الرسمي: ${WHATSAPP_NUMBER} دون وسطاء.`
                    : `Direct executive scoping verified to official WhatsApp destination: ${WHATSAPP_NUMBER}.`}
                </span>
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 py-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.pricing.quoteModal.whatsappBtn}</span>
                </a>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    {t.pricing.quoteModal.closeBtn}
                  </button>
                  <button
                    type="submit"
                    id="modal-submit-quote-btn"
                    className="w-1/2 sm:w-auto btn-titan-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider"
                  >
                    <span>{t.pricing.quoteModal.submitBtn}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
