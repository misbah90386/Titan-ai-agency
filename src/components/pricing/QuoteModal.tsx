import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { QuotationForm } from './QuotationForm';

export interface QuotePackageInfo {
  id: string;
  name: string;
  price?: string;
}

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: QuotePackageInfo | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialPackage
}) => {
  const { language } = useLanguage();

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const headerTitle = initialPackage?.name
    ? initialPackage.name
    : (language === 'ar' ? 'طلب استشارة وعرض سعر' : 'Request Project Quotation');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quotation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#02060F]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_60px_rgba(2,6,15,0.4)] border border-slate-200 overflow-hidden my-4 sm:my-8 text-start max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#04142E] via-[#0B1F4B] to-[#04142E] text-white p-5 sm:p-7 flex items-start justify-between relative shrink-0 overflow-hidden">
          {/* Subtle cyan ambient glow in header */}
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#00D1FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-1.5 max-w-lg pe-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-[11px] font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
              <Sparkles className="w-3 h-3 text-[#00D1FF]" />
              <span>{language === 'ar' ? 'وكالة تيتان للذكاء الاصطناعي' : 'Titan AI Agency'}</span>
            </div>

            <h3 id="quotation-modal-title" className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              {headerTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#C2D4EC] leading-relaxed">
              {language === 'ar'
                ? 'حدد الخدمة المطلوبة، واكتب متطلبات مشروعك للحصول على عرض سعر دقيق واستشارة فورية.'
                : 'Select your service, describe your requirements, and receive transparent pricing for your business.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            className="relative z-10 p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          <QuotationForm
            isModal={true}
            initialPackageName={initialPackage?.name}
            initialServiceId={initialPackage?.id}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};
