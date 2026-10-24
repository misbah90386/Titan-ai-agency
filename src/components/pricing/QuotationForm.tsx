import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw, Lock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import {
  TITAN_SERVICES,
  BUDGET_OPTIONS,
  VERIFIED_WHATSAPP_DISPLAY,
  QuotationInquiry,
  formatWhatsAppQuotationMessage,
  buildWhatsAppUrl,
  matchServiceId
} from '../../data/quotationServices';

export interface QuotationFormProps {
  initialServiceId?: string;
  initialPackageName?: string;
  onSuccess?: (inquiry: QuotationInquiry) => void;
  onCancel?: () => void;
  isModal?: boolean;
}

export const QuotationForm: React.FC<QuotationFormProps> = ({
  initialServiceId,
  initialPackageName,
  onSuccess,
  onCancel,
  isModal = false
}) => {
  const { language, isRtl } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('professional-website');
  const [budgetTier, setBudgetTier] = useState<string>('flexible');
  const [description, setDescription] = useState('');

  const [validationErrors, setValidationErrors] = useState<{
    fullName?: string;
    description?: string;
    general?: string;
  }>({});

  const [isPrepared, setIsPrepared] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState('');
  const [activeInquiry, setActiveInquiry] = useState<QuotationInquiry | null>(null);

  // Sync initial service & pre-fill description when opened or changed
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    } else if (initialPackageName) {
      setSelectedServiceId(matchServiceId(initialPackageName));
    }

    if (initialPackageName && (initialPackageName.toLowerCase().includes('similar to') || initialPackageName.includes('مشابه'))) {
      const isAr = language === 'ar';
      const cleanName = initialPackageName.replace(/^(Website similar to:|موقع إلكتروني مشابه لـ:)\s*/i, '');
      const prefill = isAr
        ? `أود طلب موقع إلكتروني مشابه لمشروع "${cleanName}". المتطلبات والتعديلات الخاصة بنشاطي التجاري:`
        : `I am interested in a website similar to "${cleanName}". My business requirements and customizations:`;
      
      setDescription((prev) => (prev.trim() === '' || prev.includes('similar to') || prev.includes('مشابه') ? prefill : prev));
    }
  }, [initialServiceId, initialPackageName, language]);

  const selectedService = TITAN_SERVICES.find((s) => s.id === selectedServiceId) || TITAN_SERVICES[1];
  const selectedBudget = BUDGET_OPTIONS.find((b) => b.id === budgetTier);

  const validate = (): boolean => {
    const errors: { fullName?: string; description?: string; general?: string } = {};

    const cleanName = fullName.trim();
    if (!cleanName) {
      errors.fullName = language === 'ar' ? 'يرجى إدخال اسمك الكامل.' : 'Please enter your full name.';
    } else if (cleanName.length < 2) {
      errors.fullName = language === 'ar' ? 'الاسم يجب أن يتكون من حرفين على الأقل.' : 'Name must be at least 2 characters.';
    }

    const cleanDesc = description.trim();
    if (!cleanDesc) {
      errors.description = language === 'ar' ? 'يرجى وصف متطلبات مشروعك.' : 'Please enter a description of your project requirements.';
    } else if (cleanDesc.length < 10) {
      errors.description = language === 'ar' ? 'الوصف يجب أن يتكون من 10 أحرف على الأقل لمراجعة متطلباتك بدقة.' : 'Please provide at least 10 characters so we can understand your requirements.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePrepareSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const serviceLabel = language === 'ar'
      ? `${selectedService.nameAr} (${selectedService.priceAr})`
      : `${selectedService.nameEn} (${selectedService.priceEn})`;

    const budgetLabel = selectedBudget && selectedBudget.id !== 'flexible'
      ? (language === 'ar' ? selectedBudget.labelAr : selectedBudget.labelEn)
      : undefined;

    const inquiry: QuotationInquiry = {
      fullName: fullName.trim(),
      businessName: businessName.trim() || undefined,
      whatsappNumber: whatsappNumber.trim() || undefined,
      serviceId: selectedService.id,
      serviceLabel,
      description: description.trim(),
      budgetLabel,
      language,
      timestamp: new Date().toISOString()
    };

    const formattedMessage = formatWhatsAppQuotationMessage(
      {
        fullName: inquiry.fullName,
        businessName: inquiry.businessName,
        whatsappNumber: inquiry.whatsappNumber,
        serviceLabel: inquiry.serviceLabel,
        budgetLabel: inquiry.budgetLabel,
        description: inquiry.description
      },
      language
    );

    const waUrl = buildWhatsAppUrl(formattedMessage);
    setPreparedUrl(waUrl);
    setActiveInquiry(inquiry);
    setIsPrepared(true);

    if (onSuccess) {
      onSuccess(inquiry);
    }
  };

  const handleOpenWhatsApp = () => {
    if (!preparedUrl) return;
    window.open(preparedUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEditDetails = () => {
    setIsPrepared(false);
  };

  // State: Quotation Prepared Confirmation
  if (isPrepared && activeInquiry) {
    return (
      <div className="py-2 text-start space-y-6 animate-in fade-in duration-200">
        <div className="text-center space-y-3 pb-2">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
          </div>
          <h3 className="font-display text-2xl font-extrabold text-[#071A33] tracking-tight">
            {language === 'ar' ? 'تم تجهيز طلب عرض السعر' : 'Quotation Inquiry Prepared'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {language === 'ar'
              ? 'تم تنسيق تفاصيل مشروعك بالكامل. انقر أدناه لفتح تطبيق واتساب ومراجعة رسالتك وإرسالها مباشرة لفريق وكالة تيتان.'
              : 'Your project details have been formatted. Click below to open WhatsApp with your pre-filled message, review it, and press Send to Titan AI Agency.'}
          </p>
        </div>

        {/* Structured Preview Card */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
              {language === 'ar' ? 'الخدمة المختارة' : 'Selected Service'}
            </span>
            <span className="font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
              {activeInquiry.serviceLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <div>
              <span className="text-slate-400 block text-[11px]">
                {language === 'ar' ? 'الاسم الكامل:' : 'Full Name:'}
              </span>
              <span className="font-semibold text-[#071A33]">{activeInquiry.fullName}</span>
            </div>

            {activeInquiry.businessName && (
              <div>
                <span className="text-slate-400 block text-[11px]">
                  {language === 'ar' ? 'النشاط التجاري:' : 'Business Name:'}
                </span>
                <span className="font-semibold text-[#071A33]">{activeInquiry.businessName}</span>
              </div>
            )}

            {activeInquiry.whatsappNumber && (
              <div>
                <span className="text-slate-400 block text-[11px]">
                  {language === 'ar' ? 'رقم التواصل:' : 'Contact Phone / WhatsApp:'}
                </span>
                <span className="font-mono text-[#071A33] dir-ltr">{activeInquiry.whatsappNumber}</span>
              </div>
            )}

            {activeInquiry.budgetLabel && (
              <div>
                <span className="text-slate-400 block text-[11px]">
                  {language === 'ar' ? 'الميزانية المقترحة:' : 'Preferred Budget:'}
                </span>
                <span className="font-medium text-[#071A33]">{activeInquiry.budgetLabel}</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-200">
            <span className="text-slate-400 block text-[11px] mb-1">
              {language === 'ar' ? 'متطلبات المشروع:' : 'Project Requirements:'}
            </span>
            <p className="text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200 whitespace-pre-wrap">
              {activeInquiry.description}
            </p>
          </div>
        </div>

        {/* Clear Notice on deliberate customer send */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-amber-900 text-xs leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            {language === 'ar'
              ? `سيفتح واتساب مع الرقم الرسمي الموثق لوكالة تيتان (${VERIFIED_WHATSAPP_DISPLAY}). يرجى الضغط على زر "إرسال" داخل واتساب لإتمام تسليم طلبك.`
              : `WhatsApp will open with Titan's official verified business number (${VERIFIED_WHATSAPP_DISPLAY}). Please press "Send" in WhatsApp to deliver your inquiry.`}
          </span>
        </div>

        {/* Primary and Secondary Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            id="open-whatsapp-inquiry-btn"
            onClick={handleOpenWhatsApp}
            className="w-full sm:flex-1 min-h-[48px] px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-[0_4px_18px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            <span>{language === 'ar' ? 'فتح واتساب لإرسال الطلب' : 'Open WhatsApp to Send Inquiry'}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          <button
            type="button"
            onClick={handleEditDetails}
            className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'ar' ? 'تعديل البيانات' : 'Edit Details'}</span>
          </button>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-semibold text-slate-700 transition-colors inline-flex items-center justify-center cursor-pointer"
            >
              <span>{language === 'ar' ? 'إغلاق' : 'Close'}</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // State: Quotation Form Input
  return (
    <form onSubmit={handlePrepareSubmission} className="space-y-4 sm:space-y-5 text-start" noValidate>
      
      {/* General validation banner */}
      {validationErrors.general && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
          {validationErrors.general}
        </div>
      )}

      {/* Field 1 & 2: Full Name (Required) and Business Name (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
            <span>{language === 'ar' ? 'الاسم الكامل' : 'Full Name'}</span>
            <span className="text-rose-500 ms-1">*</span>
          </label>
          <input
            type="text"
            required
            maxLength={80}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (validationErrors.fullName) {
                setValidationErrors((prev) => ({ ...prev, fullName: undefined }));
              }
            }}
            placeholder={language === 'ar' ? 'مثال: محمد العمري' : 'e.g. Tariq Al-Mansoor'}
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border text-sm text-[#071A33] transition-all focus:outline-none focus:ring-2 ${
              validationErrors.fullName
                ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-100 bg-rose-50/20'
                : 'border-slate-200 focus:border-[#0284C7] focus:ring-sky-100'
            }`}
          />
          {validationErrors.fullName && (
            <p className="text-[11px] text-rose-600 mt-1 font-medium">{validationErrors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
            <span>{language === 'ar' ? 'اسم النشاط التجاري' : 'Business Name'}</span>
            <span className="text-slate-400 font-normal ms-1 text-[11px]">
              {language === 'ar' ? '(اختياري)' : '(Optional)'}
            </span>
          </label>
          <input
            type="text"
            maxLength={100}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder={language === 'ar' ? 'مثال: شركة مساكن العقارية' : 'e.g. Apex Property Group'}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100"
          />
        </div>
      </div>

      {/* Field 3 & 4: Service Required (Required) and Preferred Budget (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
            <span>{language === 'ar' ? 'الخدمة المطلوبة' : 'Service Required'}</span>
            <span className="text-rose-500 ms-1">*</span>
          </label>
          <select
            value={selectedServiceId}
            onChange={(e) => setSelectedServiceId(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100 cursor-pointer"
          >
            {TITAN_SERVICES.map((srv) => (
              <option key={srv.id} value={srv.id}>
                {language === 'ar'
                  ? `${srv.nameAr} — ${srv.priceAr}`
                  : `${srv.nameEn} — ${srv.priceEn}`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
            <span>{language === 'ar' ? 'الميزانية المتوقعة' : 'Preferred Budget'}</span>
            <span className="text-slate-400 font-normal ms-1 text-[11px]">
              {language === 'ar' ? '(اختياري)' : '(Optional)'}
            </span>
          </label>
          <select
            value={budgetTier}
            onChange={(e) => setBudgetTier(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100 cursor-pointer"
          >
            {BUDGET_OPTIONS.map((b) => (
              <option key={b.id} value={b.id}>
                {language === 'ar' ? b.labelAr : b.labelEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Field 5: WhatsApp Number (Optional) */}
      <div>
        <label className="block text-xs font-bold text-[#071A33] mb-1 font-mono uppercase">
          <span>{language === 'ar' ? 'رقم الواتساب أو الهاتف' : 'WhatsApp / Contact Number'}</span>
          <span className="text-slate-400 font-normal ms-1 text-[11px]">
            {language === 'ar' ? '(اختياري للمتابعة)' : '(Optional for follow-up)'}
          </span>
        </label>
        <input
          type="tel"
          maxLength={30}
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          placeholder="+966 5X XXX XXXX"
          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100"
        />
      </div>

      {/* Field 6: Project Description (Required) */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-xs font-bold text-[#071A33] font-mono uppercase">
            <span>{language === 'ar' ? 'تفاصيل ومتطلبات المشروع' : 'Project Description & Scope'}</span>
            <span className="text-rose-500 ms-1">*</span>
          </label>
          <span className="text-[10px] font-mono text-slate-400">
            {description.length}/1500
          </span>
        </div>
        <textarea
          required
          rows={isModal ? 3 : 4}
          maxLength={1500}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (validationErrors.description) {
              setValidationErrors((prev) => ({ ...prev, description: undefined }));
            }
          }}
          placeholder={
            language === 'ar'
              ? 'صف طبيعة نشاطك وما تريد إنجازه (مثال: إنشاء موقع لشركتنا، صفحات الخدمات، نموذج طلب عرض، وربط واتساب)...'
              : 'Describe your business goals, required features, pages, or automation needs (e.g. bilingual company website, inquiry routing, timeline)...'
          }
          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFF] border text-sm text-[#071A33] leading-relaxed transition-all focus:outline-none focus:ring-2 ${
            validationErrors.description
              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-100 bg-rose-50/20'
              : 'border-slate-200 focus:border-[#0284C7] focus:ring-sky-100'
          }`}
        />
        {validationErrors.description && (
          <p className="text-[11px] text-rose-600 mt-1 font-medium">{validationErrors.description}</p>
        )}
      </div>

      {/* Short Privacy Notice */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600">
        <Lock className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
        <span>
          {language === 'ar'
            ? 'خصوصيتك محمية: يتم استخدام المعلومات المدخلة حصراً لمراجعة نطاق مشروعك وإعداد عرض السعر.'
            : 'Your privacy is protected: Entered information is strictly used to assess project scope and respond to your quotation inquiry.'}
        </span>
      </div>

      {/* Form Action Controls */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Verified destination badge */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>WhatsApp: {VERIFIED_WHATSAPP_DISPLAY}</span>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="w-1/2 sm:w-auto min-h-[46px] px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {language === 'ar' ? 'إلغاء' : 'Cancel'}
            </button>
          )}

          <button
            type="submit"
            id="quotation-form-submit-btn"
            className={`${onCancel ? 'w-1/2 sm:w-auto' : 'w-full sm:w-auto'} min-h-[46px] btn-titan-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,209,255,0.25)] hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] cursor-pointer`}
          >
            <span>{language === 'ar' ? 'متابعة الطلب عبر واتساب' : 'Continue to WhatsApp'}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

    </form>
  );
};
