import realEstateImage from '../assets/images/Clean navy-and-gold real estate showcase.webp';
import bakeryImage from '../assets/images/l_etoile_bakery_showcase_1792370771731.webp';
import restaurantImage from '../assets/images/chicken_restaurant_showcase_1792371422052.webp';

export type ProjectType = 'Concept Demo' | 'Client Project';

export interface ProjectItem {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  categoryKey: 'real-estate' | 'restaurants' | 'bakeries' | 'car-rentals' | 'hotels' | 'clinics' | 'e-commerce';
  projectType: ProjectType;
  descriptionEn: string;
  descriptionAr: string;
  featuresEn: string[];
  featuresAr: string[];
  screenshotUrl: string;
  url: string;
  domain: string;
  problemEn: string;
  problemAr: string;
  solutionEn: string;
  solutionAr: string;
  technologyEn: string;
  technologyAr: string;
  outcomeEn: string;
  outcomeAr: string;
  whatsappMessageEn: string;
  whatsappMessageAr: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'real-estate-concept',
    nameEn: 'Luxury Real Estate Concept',
    nameAr: 'منصة العقارات والمشاريع الفاخرة',
    categoryEn: 'Real Estate',
    categoryAr: 'عقارات',
    categoryKey: 'real-estate',
    projectType: 'Concept Demo',
    descriptionEn: 'High-performance property showcase with responsive unit filtering, mobile-first floor plan presentations, and instant WhatsApp inquiry routing.',
    descriptionAr: 'منصة عقارية عالية الأداء مع فلترة سريعة للوحدات السكنية، ومخططات هندسية تفاعلية للجوال، وتوجيه استفسارات المستثمرين مباشرة للواتساب.',
    featuresEn: [
      'Interactive Property & Unit Filtering',
      'Mobile-Optimized Floor Plans',
      'Instant Investor WhatsApp Inquiry Routing'
    ],
    featuresAr: [
      'تصفية تفاعلية للعقارات والوحدات السكنية',
      'عروض مخططات معمارية محسنة للهواتف',
      'توجيه استفسارات المستثمرين فوراً للواتساب'
    ],
    screenshotUrl: realEstateImage,
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    domain: 'celebrated-biscuit-a7f671.netlify.app',
    problemEn: 'Property firms struggle to display architectural developments, filter units by buyer preferences, and capture high-intent investor inquiries without slow email delays.',
    problemAr: 'تواجه الشركات العقارية صعوبة في عرض المشاريع المعمارية وتصفية الوحدات حسب رغبات المشتري، مع بطء استجابة الاستفسارات عبر البريد التقليدي.',
    solutionEn: 'TITAN engineered a high-performance luxury property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
    solutionAr: 'صممت تيتان واجهة عقارية فاخرة وسريعة تتيح تصفية الوحدات وتصفح المخططات والتواصل المباشر مع مكتب المبيعات عبر الواتساب.',
    technologyEn: 'Bilingual Website / AI Property Filter / Responsive Floorplans / WhatsApp Integration',
    technologyAr: 'موقع ثنائي اللغة / فلترة عقارية ذكية / مخططات تفاعلية / توجيه واتساب',
    outcomeEn: 'Interactive concept prototype validating responsive navigation and friction-free lead capture.',
    outcomeAr: 'نموذج استعراضي تفاعلي يعكس سرعة التصفح وسهولة تحويل الزوار إلى عملاء محتملين.',
    whatsappMessageEn: 'Hello Titan AI Agency, I saw your Luxury Real Estate Concept Demo and would like to request a similar website for my business.',
    whatsappMessageAr: 'مرحباً وكالة تيتان، اطلعت على نموذج المنصة العقارية الفاخرة وأود طلب موقع إلكتروني مشابه لنشاطي التجاري.'
  },
  {
    id: 'custom-cake-bakery',
    nameEn: 'Artisanal Bakery & Customizer',
    nameAr: 'متجر ومخصص الحلويات التفاعلي',
    categoryEn: 'Bakeries',
    categoryAr: 'مخابز وحلويات',
    categoryKey: 'bakeries',
    projectType: 'Concept Demo',
    descriptionEn: 'Interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    descriptionAr: 'مخصص تفاعلي يتيح للعملاء اختيار طبقات الكيك والنكهات والتصاميم مع حاسبة أسعار فورية وإرسال الحجز بنقرة واحدة للواتساب.',
    featuresEn: [
      'Live Tier & Flavor Order Customizer',
      'Real-Time Order Price Estimation',
      'One-Tap WhatsApp Order Checkout'
    ],
    featuresAr: [
      'مخصص كيك تفاعلي للطبقات والنكهات',
      'حساب تكلفة الطلب بشكل فوري ومباشر',
      'إرسال تفاصيل الطلب بنقرة واحدة للواتساب'
    ],
    screenshotUrl: bakeryImage,
    url: 'https://sweet-dream-bakes.netlify.app/',
    domain: 'sweet-dream-bakes.netlify.app',
    problemEn: 'Custom cake orders create massive back-and-forth messaging for bakeries, quoting tiers, flavors, and delivery dates manually on busy weekends.',
    problemAr: 'تتسبب الطلبات الخاصة للمخابز والحلويات في مراسلات طويلة لتحديد الحجم والنكهات والتاريخ والتكلفة بشكل يدوي يستغرق وقتاً طويلاً.',
    solutionEn: 'TITAN built an interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    solutionAr: 'طوّرت تيتان حاسبة طلبات تفاعلية تتيح للعميل تخصيص كيكته وحساب السعر المبدئي وتحويل الطلب ببياناته الكاملة إلى واتساب المخبز.',
    technologyEn: 'Dynamic Customizer / Live Price Estimation / Mobile Order Routing / WhatsApp',
    technologyAr: 'مخصص طلبات ديناميكي / تقدير سعر فوري / توجيه طلبات الجوال / واتساب',
    outcomeEn: 'Eliminates repetitive pricing questions; routes pre-configured orders directly to the baker.',
    outcomeAr: 'يلغي الاستفسارات المكررة ويوجه الطلبات المكتملة التفاصيل مباشرة لمسؤول المبيعات.',
    whatsappMessageEn: 'Hello Titan AI Agency, I saw your Artisanal Bakery Concept Demo and would like to request an interactive ordering website for my bakery.',
    whatsappMessageAr: 'مرحباً وكالة تيتان، اطلعت على نموذج متجر المخبز والحلويات وأود طلب موقع إلكتروني بنظام طلبات مشابه.'
  },
  {
    id: 'chicken-restaurant',
    nameEn: 'Fast-Casual Restaurant Platform',
    nameAr: 'منصة المطاعم والوجبات السريعة',
    categoryEn: 'Restaurants',
    categoryAr: 'مطاعم',
    categoryKey: 'restaurants',
    projectType: 'Concept Demo',
    descriptionEn: 'Mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    descriptionAr: 'موقع مطعم سلس ومحسن للهواتف مع قائمة طعام تفاعلية، فلترة للمكونات والحساسية، وخرائط الفروع والطلب المباشر.',
    featuresEn: [
      'High-Speed Mobile Digital Menu',
      'Dietary & Allergen Filtering',
      'Instant Location Maps & Direct Order'
    ],
    featuresAr: [
      'قائمة طعام رقمية فائقة السرعة للهواتف',
      'تصنيف الوجبات المتاحة وحسب الحساسية',
      'خرائط الفروع المباشرة وروابط الطلب'
    ],
    screenshotUrl: restaurantImage,
    url: 'https://cerulean-begonia-2ecb7d.netlify.app/',
    domain: 'cerulean-begonia-2ecb7d.netlify.app',
    problemEn: 'Outdated PDF menus fail on mobile screens, loading slowly and causing diners to drop off before discovering location, allergen info, and operating hours.',
    problemAr: 'تتسبب قوائم PDF القديمة في صعوبة تصفح المنيو على الجوال وبطء تحميلها، مما يجعل الزوار يغادرون قبل معرفة الموقع وساعات العمل.',
    solutionEn: 'TITAN engineered a mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    solutionAr: 'ابتكرت تيتان منيو رقمي خفيف وسريع يتكيف مع كافة مقاسات الشاشات، مع خيارات تصفح سهلة وتوجيه فوري للفرع المباشر.',
    technologyEn: 'Mobile Speed Optimization / Interactive Digital Menu / Local SEO / Direct Links',
    technologyAr: 'تحسين سرعة الجوال / قائمة طعام رقمية / سيو محلي / روابط طلب مباشرة',
    outcomeEn: 'Fast mobile loading, instant menu access, and smooth local navigation.',
    outcomeAr: 'سرعة تصفح استثنائية، وصول فوري للمنيو، وزيادة في طلبات الفروع.',
    whatsappMessageEn: 'Hello Titan AI Agency, I saw your Fast-Casual Restaurant Demo and would like to request a website for my restaurant.',
    whatsappMessageAr: 'مرحباً وكالة تيتان، اطلعت على نموذج منصة المطاعم وأود طلب موقع إلكتروني لمطعمنا.'
  }
];

// Backwards compatibility alias
export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS;
