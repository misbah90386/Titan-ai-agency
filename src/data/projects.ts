import realEstateImage from '../assets/images/Clean navy-and-gold real estate showcase.png';
import bakeryImage from '../assets/images/l_etoile_bakery_showcase_1792370771731.jpg';
import restaurantImage from '../assets/images/chicken_restaurant_showcase_1792371422052.jpg';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technology: string;
  outcome: string;
  isConceptDemo: boolean;
  url: string;
  domain: string;
  whatsappMessage: string;
  screenshotUrl: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'real-estate-concept',
    name: 'Luxury Real Estate Concept',
    category: 'Real Estate & Property',
    description: 'High-performance property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
    problem: 'Property firms struggle to display architectural developments, filter units by buyer preferences, and capture high-intent investor inquiries without slow email delays.',
    solution: 'TITAN engineered a high-performance luxury property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
    technology: 'Website / AI Integration / SEO / WhatsApp',
    outcome: 'Interactive concept prototype validating responsive navigation and friction-free lead capture.',
    isConceptDemo: true,
    url: 'https://celebrated-biscuit-a7f671.netlify.app/',
    domain: 'celebrated-biscuit-a7f671.netlify.app',
    whatsappMessage: 'Hello TITAN AI AGENCY, I saw your Real Estate Concept Demo and would like to discuss a similar project for my business.',
    screenshotUrl: realEstateImage
  },
  {
    id: 'custom-cake-bakery',
    name: 'Artisanal Bakery & Customizer',
    category: 'Food & Hospitality',
    description: 'Interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    problem: 'Custom cake orders create massive back-and-forth messaging for bakeries, quoting tiers, flavors, and delivery dates manually on busy weekends.',
    solution: 'TITAN built an interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
    technology: 'Website / Dynamic Customizer / WhatsApp Routing',
    outcome: 'Eliminates repetitive pricing questions; routes pre-configured orders directly to the baker.',
    isConceptDemo: true,
    url: 'https://sweet-dream-bakes.netlify.app/',
    domain: 'sweet-dream-bakes.netlify.app',
    whatsappMessage: 'Hello TITAN AI AGENCY, I saw your Custom Bakery Concept Demo and would like to discuss an interactive order system.',
    screenshotUrl: bakeryImage
  },
  {
    id: 'chicken-restaurant',
    name: 'Fast-Casual Restaurant Platform',
    category: 'Dining & Hospitality',
    description: 'Mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    problem: 'Outdated PDF menus fail on mobile screens, loading slowly and causing diners to drop off before discovering location, allergen info, and operating hours.',
    solution: 'TITAN engineered a mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
    technology: 'Website / Mobile Speed Optimization / Local SEO',
    outcome: 'Fast mobile loading, instant menu access, and smooth local navigation.',
    isConceptDemo: true,
    url: 'https://cerulean-begonia-2ecb7d.netlify.app/',
    domain: 'cerulean-begonia-2ecb7d.netlify.app',
    whatsappMessage: 'Hello TITAN AI AGENCY, I saw your Restaurant Website Demo and would like to discuss a project in dining & food.',
    screenshotUrl: restaurantImage
  }
];
