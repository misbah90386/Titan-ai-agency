export interface ServiceOption {
  id: string;
  nameEn: string;
  nameAr: string;
  priceEn: string;
  priceAr: string;
  category: 'website' | 'ai' | 'marketing' | 'maintenance';
}

export const VERIFIED_WHATSAPP_DISPLAY = '+966 53 418 2945';
export const VERIFIED_WHATSAPP_TARGET = '966534182945';

export const TITAN_SERVICES: ServiceOption[] = [
  {
    id: 'starter-website',
    nameEn: 'Starter Website',
    nameAr: 'موقع Starter',
    priceEn: 'From SAR 500',
    priceAr: 'ابتداءً من 500 ريال',
    category: 'website'
  },
  {
    id: 'professional-website',
    nameEn: 'Professional Website',
    nameAr: 'موقع Professional',
    priceEn: 'From SAR 1,200',
    priceAr: 'ابتداءً من 1,200 ريال',
    category: 'website'
  },
  {
    id: 'advanced-website',
    nameEn: 'Advanced Business Website',
    nameAr: 'موقع Advanced للشركات',
    priceEn: 'From SAR 2,000',
    priceAr: 'ابتداءً من 2,000 ريال',
    category: 'website'
  },
  {
    id: 'ai-support-agents',
    nameEn: 'AI Customer Support Agents',
    nameAr: 'وكلاء دعم عملاء بالذكاء الاصطناعي',
    priceEn: 'Custom Quote',
    priceAr: 'عرض سعر مخصص',
    category: 'ai'
  },
  {
    id: 'ai-call-agents',
    nameEn: 'AI Call Agents',
    nameAr: 'وكلاء اتصال صوتي آلي',
    priceEn: 'Custom Quote',
    priceAr: 'عرض سعر مخصص',
    category: 'ai'
  },
  {
    id: 'ai-business-automation',
    nameEn: 'AI Business Automation',
    nameAr: 'أتمتة الأعمال الذكية',
    priceEn: 'Custom Quote',
    priceAr: 'عرض سعر مخصص',
    category: 'ai'
  },
  {
    id: 'seo-optimization',
    nameEn: 'Search Engine Optimization',
    nameAr: 'تحسين محركات البحث SEO',
    priceEn: 'Custom Quote',
    priceAr: 'عرض سعر مخصص',
    category: 'marketing'
  },
  {
    id: 'ai-video-creation',
    nameEn: 'AI Video Creation',
    nameAr: 'إنتاج فيديو بالذكاء الاصطناعي',
    priceEn: 'Custom Quote',
    priceAr: 'عرض سعر مخصص',
    category: 'ai'
  },
  {
    id: 'website-maintenance',
    nameEn: 'Website Maintenance',
    nameAr: 'صيانة المواقع والدعم الفني',
    priceEn: 'From SAR 100/month',
    priceAr: 'ابتداءً من 100 ريال / شهرياً',
    category: 'maintenance'
  }
];

export interface BudgetOption {
  id: string;
  labelEn: string;
  labelAr: string;
}

export const BUDGET_OPTIONS: BudgetOption[] = [
  { id: 'flexible', labelEn: 'Flexible / To be discussed', labelAr: 'مرنة / للمناقشة' },
  { id: 'tier_500', labelEn: 'Under SAR 1,000', labelAr: 'أقل من 1,000 ريال' },
  { id: 'tier_1200_2500', labelEn: 'SAR 1,000 – SAR 2,500', labelAr: '1,000 – 2,500 ريال' },
  { id: 'tier_2500_5000', labelEn: 'SAR 2,500 – SAR 5,000', labelAr: '2,500 – 5,000 ريال' },
  { id: 'tier_5000_plus', labelEn: 'SAR 5,000 – SAR 10,000+', labelAr: '5,000 – 10,000+ ريال' },
  { id: 'tier_monthly', labelEn: 'Monthly Care Plan (SAR 100 – 500+/mo)', labelAr: 'خطة صيانة شهرية (100 – 500+ ريال / شهرياً)' }
];

export interface QuotationInquiry {
  fullName: string;
  businessName?: string;
  whatsappNumber?: string;
  serviceId: string;
  serviceLabel: string;
  description: string;
  budgetLabel?: string;
  language: 'en' | 'ar';
  timestamp: string;
}

/**
 * Formats a clean WhatsApp message for quotation inquiries
 */
export function formatWhatsAppQuotationMessage(
  inquiry: {
    fullName: string;
    businessName?: string;
    whatsappNumber?: string;
    serviceLabel: string;
    budgetLabel?: string;
    description: string;
  },
  language: 'en' | 'ar'
): string {
  if (language === 'ar') {
    const lines: string[] = [
      'مرحباً وكالة تيتان للذكاء الاصطناعي،',
      '',
      'أود طلب عرض سعر لمشروعي.',
      '',
      `الاسم: ${inquiry.fullName.trim()}`
    ];

    if (inquiry.businessName && inquiry.businessName.trim()) {
      lines.push(`النشاط التجاري: ${inquiry.businessName.trim()}`);
    }

    if (inquiry.whatsappNumber && inquiry.whatsappNumber.trim()) {
      lines.push(`رقم التواصل: ${inquiry.whatsappNumber.trim()}`);
    }

    lines.push(`الخدمة المطلوبة: ${inquiry.serviceLabel.trim()}`);

    if (inquiry.budgetLabel && inquiry.budgetLabel.trim()) {
      lines.push(`الميزانية: ${inquiry.budgetLabel.trim()}`);
    }

    lines.push(`المتطلبات: ${inquiry.description.trim()}`);
    lines.push('');
    lines.push('يرجى التواصل معي بخصوص هذا المشروع.');

    return lines.join('\n');
  }

  // English default
  const lines: string[] = [
    'Hello Titan AI Agency,',
    '',
    'I would like to request a quotation.',
    '',
    `Name: ${inquiry.fullName.trim()}`
  ];

  if (inquiry.businessName && inquiry.businessName.trim()) {
    lines.push(`Business: ${inquiry.businessName.trim()}`);
  }

  if (inquiry.whatsappNumber && inquiry.whatsappNumber.trim()) {
    lines.push(`Contact: ${inquiry.whatsappNumber.trim()}`);
  }

  lines.push(`Service: ${inquiry.serviceLabel.trim()}`);

  if (inquiry.budgetLabel && inquiry.budgetLabel.trim()) {
    lines.push(`Budget: ${inquiry.budgetLabel.trim()}`);
  }

  lines.push(`Requirements: ${inquiry.description.trim()}`);
  lines.push('');
  lines.push('Please contact me regarding my project.');

  return lines.join('\n');
}

/**
 * Builds the verified WhatsApp web URL
 */
export function buildWhatsAppUrl(messageText: string): string {
  return `https://wa.me/${VERIFIED_WHATSAPP_TARGET}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Maps arbitrary package strings or IDs to one of the 9 official services
 */
export function matchServiceId(input?: string): string {
  if (!input) return 'professional-website';

  const clean = input.toLowerCase();

  if (clean.includes('starter') || clean.includes('500')) {
    return 'starter-website';
  }
  if (clean.includes('advanced') || clean.includes('2000') || clean.includes('2,000')) {
    return 'advanced-website';
  }
  if (clean.includes('call') || clean.includes('voice') || clean.includes('phone')) {
    return 'ai-call-agents';
  }
  if (clean.includes('automation') || clean.includes('workflow')) {
    return 'ai-business-automation';
  }
  if (clean.includes('seo') || clean.includes('search')) {
    return 'seo-optimization';
  }
  if (clean.includes('video')) {
    return 'ai-video-creation';
  }
  if (clean.includes('maintenance') || clean.includes('care') || clean.includes('100')) {
    return 'website-maintenance';
  }
  if (clean.includes('agent') || clean.includes('chat') || clean.includes('support')) {
    return 'ai-support-agents';
  }
  if (clean.includes('website') || clean.includes('1200') || clean.includes('1,200') || clean.includes('professional')) {
    return 'professional-website';
  }

  return 'professional-website';
}
