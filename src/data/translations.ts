export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    missionVision: string;
    portfolio: string;
    aiDemo: string;
    blog: string;
    contact: string;
    startProject: string;
    whatsapp: string;
    switchLang: string;
    currentLangName: string;
    pricing: string;
  };
  pricing: {
    badge: string;
    heading: string;
    subtitle: string;
    currency: string;
    startingFrom: string;
    recommendedBadge: string;
    termsTitle: string;
    terms: string[];
    websitePackages: {
      starter: {
        id: string;
        name: string;
        price: string;
        priceNumeric: number;
        desc: string;
        cta: string;
        features: string[];
      };
      professional: {
        id: string;
        name: string;
        price: string;
        priceNumeric: number;
        desc: string;
        cta: string;
        isRecommended: boolean;
        features: string[];
      };
      advanced: {
        id: string;
        name: string;
        price: string;
        priceNumeric: number;
        desc: string;
        cta: string;
        features: string[];
      };
    };
    aiSolutions: {
      badge: string;
      heading: string;
      subtitle: string;
      notice: string;
      customQuote: string;
      cards: {
        id: string;
        title: string;
        desc: string;
        pricing: string;
        status: string;
        isWorkingService?: boolean;
      }[];
    };
    maintenance: {
      badge: string;
      heading: string;
      subtitle: string;
      planTitle: string;
      price: string;
      period: string;
      desc: string;
      cta: string;
      notice: string;
      features: string[];
    };
    quoteModal: {
      title: string;
      subtitle: string;
      selectedPackageLabel: string;
      nameLabel: string;
      businessLabel: string;
      phoneLabel: string;
      serviceLabel: string;
      requirementsLabel: string;
      messageLabel: string;
      submitBtn: string;
      whatsappBtn: string;
      successTitle: string;
      successMessage: string;
      openWhatsappNow: string;
      closeBtn: string;
    };
    trustApproach: {
      badge: string;
      heading: string;
      subtitle: string;
      principles: {
        title: string;
        desc: string;
      }[];
    };
  };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    supportingText: string;
    primaryButton: string;
    secondaryButton: string;
    serviceLine: {
      websites: string;
      seo: string;
      aiAgents: string;
      callAgents: string;
      aiVideo: string;
    };
  };
  dashboard: {
    illustrativeDemo: string;
    systemStatus: string;
    aiAgent: string;
    aiAgentStatus: string;
    aiAgentDesc: string;
    aiVoiceAgent: string;
    aiVoiceStatus: string;
    aiVoiceDesc: string;
    website: string;
    websiteStatus: string;
    websiteDesc: string;
    leads: string;
    leadsStatus: string;
    leadsDesc: string;
    automation: string;
    automationStatus: string;
    automationDesc: string;
    workflowEngine: string;
    automationFlow: string;
    step1: string;
    step2: string;
    step3: string;
  };
  servicesSection: {
    label: string;
    heading: string;
    supportingText: string;
    exploreDetails: string;
    popularBadge: string;
    cards: {
      websites: {
        title: string;
        desc: string;
        tags: string[];
      };
      seo: {
        title: string;
        desc: string;
        tags: string[];
      };
      agents: {
        title: string;
        desc: string;
        tags: string[];
      };
      calls: {
        title: string;
        desc: string;
        tags: string[];
      };
      video: {
        title: string;
        desc: string;
        tags: string[];
      };
    };
  };
  featuredWork: {
    badge: string;
    heading: string;
    subtitle: string;
    illustrativeConcept: string;
    openDemo: string;
    discussSimilar: string;
    problemLabel: string;
    solutionLabel: string;
    outcomeLabel: string;
    projects: {
      realEstate: {
        name: string;
        category: string;
        problem: string;
        solution: string;
        outcome: string;
      };
      bakery: {
        name: string;
        category: string;
        problem: string;
        solution: string;
        outcome: string;
      };
      restaurant: {
        name: string;
        category: string;
        problem: string;
        solution: string;
        outcome: string;
      };
    };
  };
  inAction: {
    badge: string;
    heading: string;
    subtitle: string;
    illustrativeBadge: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    chatDialogue: { sender: string; text: string }[];
  };
  howItWorks: {
    badge: string;
    heading: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      badge: string;
    }[];
  };
  useCases: {
    badge: string;
    heading: string;
    subtitle: string;
    industries: {
      id: string;
      name: string;
      headline: string;
      desc: string;
      items: string[];
      isFeatured?: boolean;
      highlightBadge?: string;
    }[];
  };
  whyTitan: {
    badge: string;
    heading: string;
    subtitle: string;
    points: {
      num: string;
      title: string;
      desc: string;
      detail: string;
    }[];
  };
  smartNeeds: {
    badge: string;
    heading: string;
    subtitle: string;
    options: {
      id: string;
      label: string;
      serviceName: string;
      explanation: string;
      ctaText: string;
    }[];
  };
  aboutPreview: {
    badge: string;
    heading: string;
    intro: string;
    desc: string;
    cta: string;
    cardTitle: string;
    tenets: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  faqs: {
    badge: string;
    heading: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    badge: string;
    heading: string;
    subtitle: string;
    primaryBtn: string;
    whatsappBtn: string;
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    formSection1: string;
    nameLabel: string;
    namePlaceholder: string;
    businessNameLabel: string;
    businessNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    businessTypeLabel: string;
    businessTypePlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    optional: string;
    formSection2: string;
    formSection3: string;
    challengePlaceholder: string;
    budgetLabel: string;
    contactChannelLabel: string;
    founderReview: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    sendWhatsappBtn: string;
  };
  footer: {
    desc: string;
    guarantee: string;
    coreServicesTitle: string;
    companyTitle: string;
    directContactTitle: string;
    allRightsReserved: string;
    pillar1: string;
    pillar2: string;
    pillar3: string;
    whatsappConsultation: string;
  };
  floatingWhatsapp: {
    badge: string;
    tooltip: string;
    title: string;
    directStatus: string;
    desc: string;
    fastReply: string;
    openChat: string;
    ariaLabel: string;
  };
  simplifiedServices: {
    badge: string;
    heading: string;
    subtitle: string;
    learnMore: string;
    viewAllServices: string;
    categories: {
      websites: {
        title: string;
        desc: string;
        items: string[];
        route: string;
      };
      ai: {
        title: string;
        desc: string;
        items: string[];
        route: string;
      };
      marketing: {
        title: string;
        desc: string;
        items: string[];
        route: string;
      };
    };
  };
  simplifiedPricing: {
    viewAllFeatures: string;
    hideFeatures: string;
    topFeaturesNotice: string;
    aiCardTitle: string;
    aiCardSubtitle: string;
    aiCardPrice: string;
    aiCardBadge: string;
    aiCardFeatures: string[];
    aiCardCta: string;
    maintenanceCardTitle: string;
    maintenanceCardSubtitle: string;
    maintenanceCardPrice: string;
    maintenanceCardFeatures: string[];
    maintenanceCardCta: string;
  };
  homepageContact: {
    badge: string;
    heading: string;
    subtitle: string;
    cardTitle: string;
    cardSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappDirect: string;
    whatsappDirectDesc: string;
    chatWhatsappBtn: string;
    trustNote: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      about: 'About',
      missionVision: 'Mission & Vision',
      portfolio: 'Our Work',
      aiDemo: 'AI Demo',
      blog: 'Blog',
      contact: 'Contact',
      startProject: 'Start Your Project',
      whatsapp: '+966 53 418 2945',
      switchLang: 'العربية',
      currentLangName: 'EN'
    },
    pricing: {
      badge: 'Transparent Pricing & Packages',
      heading: 'Professional Packages for Saudi Businesses',
      subtitle: 'Clear starting estimates, tailored scopes, and dependable engineering. We build professional websites, AI solutions, and maintenance care without hidden fees.',
      currency: 'SAR',
      startingFrom: 'Starting From',
      recommendedBadge: "Titan's Recommended Option",
      termsTitle: 'Important Pricing & Scoping Terms',
      terms: [
        'All prices are in Saudi Riyals (SAR).',
        'Prices are starting estimates, not guaranteed final quotations.',
        'The final price depends on project scope and requirements.',
        'Domain registration and paid hosting are quoted separately.',
        'Third-party subscriptions and AI API costs are not automatically included.',
        'Custom integrations may require additional charges based on technical complexity.',
        'Revision rounds are structured per package scope (no unlimited revisions).',
        'Existing client agreements and ongoing contracts remain unchanged.'
      ],
      websitePackages: {
        starter: {
          id: 'starter-website',
          name: 'Starter Website',
          price: 'SAR 500',
          priceNumeric: 500,
          desc: 'Designed for small businesses that need a professional online presence.',
          cta: 'Get Started',
          features: [
            'Professional business website',
            'Responsive mobile-friendly design',
            'Up to 3 pages or equivalent sections',
            'WhatsApp contact button',
            'Basic SEO setup',
            'Business information and services',
            'Google Maps integration if required',
            'Social media links',
            'Deployment assistance',
            'One round of revisions'
          ]
        },
        professional: {
          id: 'professional-website',
          name: 'Professional Website',
          price: 'SAR 1,200',
          priceNumeric: 1200,
          desc: 'Designed for growing businesses that need more advanced website features.',
          cta: 'Choose Professional',
          isRecommended: true,
          features: [
            'Everything in Starter',
            'Up to 7 pages',
            'Custom website design',
            'Arabic and English support where scoped',
            'Advanced contact forms',
            'Search engine optimization setup',
            'Business portfolio or product listings',
            'Enhanced mobile experience',
            'Performance optimization',
            'Up to 2 rounds of revisions'
          ]
        },
        advanced: {
          id: 'advanced-business-website',
          name: 'Advanced Business Website',
          price: 'SAR 2,000',
          priceNumeric: 2000,
          desc: 'Designed for companies that need dynamic features and more sophisticated websites.',
          cta: 'Request Custom Proposal',
          features: [
            'Everything in Professional',
            'Custom business functionality',
            'Dynamic listings',
            'Search and filtering systems',
            'Admin dashboard where scoped',
            'Content management capabilities',
            'Customer inquiry management',
            'Advanced integrations subject to quotation',
            'Enhanced technical SEO',
            'Testing and deployment',
            'Project-specific revisions'
          ]
        }
      },
      aiSolutions: {
        badge: 'AI Solutions & Automation',
        heading: 'Tailored AI & Voice Systems for Business',
        subtitle: 'Practical conversational assistants, telephone automation, and promotional video generation designed for Saudi enterprises.',
        notice: 'Engineering Transparency: Titan AI Agency clearly distinguishes existing working solutions from demos and services still under custom development. We never present untested AI systems as production-ready.',
        customQuote: 'Custom Quote',
        cards: [
          {
            id: 'ai-customer-support-agents',
            title: 'AI Customer Support Agents',
            desc: 'AI assistants designed to help businesses answer routine inquiries, collect customer information, and improve response workflows.',
            pricing: 'Custom Quote',
            status: 'Available for Custom Scoping',
            isWorkingService: true
          },
          {
            id: 'ai-call-agents',
            title: 'AI Call Agents',
            desc: 'Voice-based AI systems designed for handling routine business phone inquiries and supporting customer service operations.',
            pricing: 'Custom Quote',
            status: 'Prototype & Demo Tested',
            isWorkingService: false
          },
          {
            id: 'ai-business-automation',
            title: 'AI Business Automation',
            desc: 'Automation solutions for repetitive business tasks, customer inquiries, lead management, and connected workflows.',
            pricing: 'Custom Quote',
            status: 'Available for Custom Scoping',
            isWorkingService: true
          },
          {
            id: 'ai-video-creation',
            title: 'AI Video Creation',
            desc: 'AI-generated promotional videos, marketing content, and social media advertisements.',
            pricing: 'Custom Quote',
            status: 'Production Ready Workflow',
            isWorkingService: true
          },
          {
            id: 'seo-optimization-service',
            title: 'Search Engine Optimization',
            desc: 'SEO services focused on technical improvements, website performance, metadata, indexing support, and search visibility.',
            pricing: 'Custom Quote',
            status: 'Active Production Service',
            isWorkingService: true
          }
        ]
      },
      maintenance: {
        badge: 'Website Maintenance & Care',
        heading: 'Optional Care Plans to Protect Your Investment',
        subtitle: 'Keep your digital platform secure, updated, and operating smoothly with routine care.',
        planTitle: 'Website Care Plan',
        price: 'SAR 100',
        period: '/ Month',
        desc: 'Potential included services, subject to the agreed contract:',
        cta: 'Request Maintenance',
        notice: 'Maintenance services are optional. The exact support scope, update limits, response times, and any external expenses will be confirmed before subscription.',
        features: [
          'Small website content updates',
          'Text and image replacements',
          'Routine website functionality checks',
          'Basic technical support',
          'Minor bug fixes within the agreed scope',
          'Assistance with existing website configuration'
        ]
      },
      quoteModal: {
        title: 'Request a Quote / Project Proposal',
        subtitle: 'Tell us what you want to build. We provide a transparent scope and fixed quote directly from founder Saad Naeem.',
        selectedPackageLabel: 'Selected Package / Service',
        nameLabel: 'Your Name *',
        businessLabel: 'Business Name *',
        phoneLabel: 'Phone / WhatsApp *',
        serviceLabel: 'Service Required *',
        requirementsLabel: 'Project Requirements & Challenge *',
        messageLabel: 'Additional Details (Optional)',
        submitBtn: 'Send Project Inquiry',
        whatsappBtn: 'Chat Directly on WhatsApp',
        successTitle: 'Inquiry Prepared Successfully!',
        successMessage: 'Your inquiry details are ready. Click below to send directly to founder Saad Naeem on WhatsApp for fast scoping.',
        openWhatsappNow: 'Open WhatsApp Chat',
        closeBtn: 'Close'
      },
      trustApproach: {
        badge: 'Titan Engineering Standards',
        heading: "Titan's Disciplined Engineering Approach",
        subtitle: 'We build dependable digital systems that deliver real operational value for businesses in Saudi Arabia.',
        principles: [
          {
            title: 'Clearly Defined Project Scope',
            desc: 'We define every feature, timeline, and deliverable in writing before starting development so expectations are 100% aligned.'
          },
          {
            title: 'Custom Development',
            desc: 'Clean code built specifically for your business constraints without rigid bloat or cookie-cutter templates.'
          },
          {
            title: 'Responsive Website Design',
            desc: 'Pixel-perfect, mobile-optimized user experience that loads fast across smartphones, tablets, and desktops.'
          },
          {
            title: 'Transparent Pricing Process',
            desc: 'Itemized starting quotes and clear milestone schedules. Zero hidden charges or surprise retainers.'
          },
          {
            title: 'Testing Before Delivery',
            desc: 'Rigorous cross-browser and cross-device testing, link verification, and performance audits prior to launch.'
          },
          {
            title: 'Optional Ongoing Support',
            desc: '30 days of complimentary post-launch support included, plus optional flexible monthly care plans.'
          },
          {
            title: 'Practical Business-Focused Solutions',
            desc: 'We choose technology to solve real business bottlenecks and generate qualified customer leads, never to chase hype.'
          }
        ]
      }
    },
    hero: {
      badge: 'Websites & AI Solutions for Saudi Businesses',
      headlineLine1: 'We Build Websites &',
      headlineLine2: 'AI Solutions for Your Business',
      supportingText: 'Professional websites, AI assistants, and digital solutions to help your business connect with more customers.',
      primaryButton: 'Get a Free Quote',
      secondaryButton: 'View Our Work',
      serviceLine: {
        websites: 'Website Development',
        seo: 'SEO & Search Visibility',
        aiAgents: 'AI Assistants',
        callAgents: 'AI Call Agents',
        aiVideo: 'Promotional Video'
      }
    },
    dashboard: {
      illustrativeDemo: 'Illustrative Demo',
      systemStatus: 'System Status: Active',
      aiAgent: 'AI Agent',
      aiAgentStatus: 'Active',
      aiAgentDesc: 'Organize customer enquiries',
      aiVoiceAgent: 'AI Voice Agent',
      aiVoiceStatus: 'Ready',
      aiVoiceDesc: '24/7 Voice Support',
      website: 'Website',
      websiteStatus: 'Online',
      websiteDesc: 'Fast, Responsive, SEO Ready',
      leads: 'Leads',
      leadsStatus: 'Captured',
      leadsDesc: 'Instant Form & WhatsApp Routing',
      automation: 'Automation',
      automationStatus: 'Running',
      automationDesc: 'Sync CRM, Email & Notifications',
      workflowEngine: 'Live Workflow Engine',
      automationFlow: 'Active Automation Flow',
      step1: 'Customer Inquiry Received',
      step2: 'AI Auto-Qualifies & Categorizes',
      step3: 'Direct Routing to Team WhatsApp'
    },
    servicesSection: {
      label: 'CORE SERVICES',
      heading: 'Practical Websites & AI Solutions',
      supportingText: 'Engineered specifically for businesses in Saudi Arabia to capture leads, handle routine inquiries, and automate workflows.',
      exploreDetails: 'Explore Service',
      popularBadge: 'Popular',
      cards: {
        websites: {
          title: 'AI Website Development',
          desc: 'Professional bilingual-capable business websites, real estate platforms, online portfolios, booking systems, and customer inquiry forms.',
          tags: ['Bilingual Arabic/English', 'Real Estate Platforms', 'Fast Performance']
        },
        seo: {
          title: 'Search Engine Optimization',
          desc: 'Technical SEO, metadata, mobile performance improvements, search engine visibility, and Google Search Console setup.',
          tags: ['Technical SEO', 'Google Search Console', 'Mobile Speed']
        },
        agents: {
          title: 'AI Agents',
          desc: 'AI assistants that can answer routine customer questions, collect leads, and help automate business processes where implemented and tested.',
          tags: ['Customer Inquiries', 'Lead Capture', 'Process Automation']
        },
        calls: {
          title: 'AI Call Agents',
          desc: 'Voice automation solutions for handling routine business inquiries. Clearly structured for demonstration and custom business integration.',
          tags: ['Voice Automation', 'Routine Inquiries', 'Demo / Development']
        },
        video: {
          title: 'AI Video Creation',
          desc: 'AI-generated promotional content, product advertisements, and marketing videos designed for social channels and business campaigns.',
          tags: ['Promotional Content', 'Product Ads', 'Marketing Video']
        }
      }
    },
    featuredWork: {
      badge: 'PORTFOLIO & CASE STUDIES',
      heading: 'Selected Work & Interactive Concepts',
      subtitle: 'Explore real prototypes and production systems engineered by TITAN AI AGENCY.',
      illustrativeConcept: 'Illustrative Concept Prototype',
      openDemo: 'Open Live Demo',
      discussSimilar: 'Discuss Similar Project on WhatsApp',
      problemLabel: 'The Business Problem',
      solutionLabel: 'TITAN Engineering Solution',
      outcomeLabel: 'Operational Outcome',
      projects: {
        realEstate: {
          name: 'Luxury Real Estate Concept',
          category: 'Real Estate & Property',
          problem: 'Property firms struggle to display architectural developments, filter units by buyer preferences, and capture high-intent investor inquiries without slow email delays.',
          solution: 'TITAN engineered a high-performance luxury property showcase with responsive unit filtering, instant WhatsApp inquiry actions, and mobile-first floor plan presentations.',
          outcome: 'Interactive concept prototype validating sub-second navigation and friction-free lead capture.'
        },
        bakery: {
          name: 'Artisanal Bakery & Customizer',
          category: 'Food & Hospitality',
          problem: 'Custom cake orders create massive back-and-forth messaging for bakeries, quoting tiers, flavors, and delivery dates manually on busy weekends.',
          solution: 'TITAN built an interactive cake customizer allowing customers to select tiers, flavors, and design complexity with live price estimation and one-tap WhatsApp checkout.',
          outcome: 'Eliminates repetitive pricing questions; routes pre-configured orders directly to the baker.'
        },
        restaurant: {
          name: 'Fast-Casual Restaurant Platform',
          category: 'Dining & Hospitality',
          problem: 'Outdated PDF menus fail on mobile screens, loading slowly and causing diners to drop off before discovering location, allergen info, and operating hours.',
          solution: 'TITAN engineered a sub-second, mobile-first culinary website with clear menu hierarchy, dietary filters, instant location maps, and direct order links.',
          outcome: 'Fast mobile loading, instant menu access, and smooth local navigation.'
        }
      }
    },
    inAction: {
      badge: 'Interactive Technology Showcases',
      heading: 'SEE TITAN IN ACTION',
      subtitle: 'Explore how TITAN uses websites, AI, search technology, voice systems and video to solve real business problems.',
      illustrativeBadge: 'Illustrative Demo',
      card1Title: 'AI Website Experience',
      card1Desc: 'See how TITAN creates modern business websites designed to build trust, capture leads and connect with intelligent tools.',
      card2Title: 'AI Customer Assistant',
      card2Desc: 'Automated conversational agents trained on your business documents to respond to inquiries 24/7.',
      card3Title: 'AI Call Support',
      card3Desc: 'Voice agents capable of answering phone calls, handling questions, and scheduling consultations.',
      card4Title: 'Search & AI Discovery',
      card4Desc: 'Technical optimization and structured schema markup to improve visibility on Google and AI platforms.',
      card5Title: 'AI Video Marketing',
      card5Desc: 'Dynamic AI-generated video assets designed to showcase services and enhance digital marketing campaigns.',
      chatDialogue: [
        { sender: 'customer', text: 'Do you provide website design for real estate companies?' },
        { sender: 'ai', text: 'Yes. TITAN can create a professional real estate website with property listings, lead capture, WhatsApp integration and AI-powered customer assistance.' },
        { sender: 'customer', text: 'Can I request a consultation?' },
        { sender: 'ai', text: 'Absolutely. I can help you start your project or connect you with the TITAN team.' }
      ]
    },
    howItWorks: {
      badge: 'Clear 4-Step Process',
      heading: 'HOW TITAN WORKS',
      subtitle: 'An elegant, straightforward four-step process designed to build practical solutions for your business without unnecessary complexity.',
      steps: [
        {
          num: '01',
          title: 'Tell Us About Your Business',
          desc: 'We learn about your operations, your customers, and the specific goals or bottlenecks you want to resolve.',
          badge: '01 · Discovery'
        },
        {
          num: '02',
          title: 'Review Your Custom Proposal',
          desc: 'We present a clear, transparent scope of work with milestone timelines, architecture plan, and fixed pricing.',
          badge: '02 · Proposal & Scope'
        },
        {
          num: '03',
          title: 'Design and Development',
          desc: 'We design and engineer your responsive website or AI solution with modern aesthetics and robust code.',
          badge: '03 · Engineering'
        },
        {
          num: '04',
          title: 'Testing, Launch and Support',
          desc: 'We thoroughly test across devices, launch to production, and provide 30 days of complimentary post-launch support.',
          badge: '04 · Launch & 30-Day Support'
        }
      ]
    },
    useCases: {
      badge: 'Industries We Serve',
      heading: 'TAILORED SOLUTIONS FOR KEY SECTORS',
      subtitle: 'We build digital solutions tailored to the daily operational realities of businesses in Saudi Arabia.',
      industries: [
        {
          id: 'real-estate',
          name: 'Real Estate Companies',
          headline: 'High-Performance Property Showcases & Instant Inquiry Capture',
          desc: 'Titan has proven website development experience creating property platforms that showcase developments and capture high-intent inquiries.',
          isFeatured: true,
          highlightBadge: 'Specialized Experience',
          items: [
            'Interactive property showcase with unit filtering and floor plan views',
            'Direct WhatsApp inquiry actions for immediate investor and buyer connection',
            'Mobile-first responsive presentation for investors on smartphones',
            'AI assistants capable of answering common unit, pricing, and location questions',
            'Technical SEO ensuring property discoveries on Google and local searches',
            'AI-generated property marketing video reels for social campaigns'
          ]
        },
        {
          id: 'restaurants',
          name: 'Restaurants and Cafes',
          headline: 'Fast Mobile Menus & Frictionless Customer Contact',
          desc: 'Replace slow PDF menus with interactive, mobile-optimized culinary platforms and direct WhatsApp ordering.',
          items: [
            'Mobile-first culinary websites with clear menu hierarchy and dietary filters',
            'Direct WhatsApp ordering and reservation inquiry routing',
            'Instant Google Maps directions, branch hours, and local search visibility',
            'AI assistant answering location, parking, and catering questions',
            'Promotional AI video content highlighting signature dishes and promotions'
          ]
        },
        {
          id: 'car-rental',
          name: 'Car Rental Businesses',
          headline: 'Fleet Showcases & Fast WhatsApp Booking Inquiries',
          desc: 'Display vehicle categories, rental conditions, and allow customers to request availability instantly.',
          items: [
            'Digital fleet showcase organized by vehicle class, features, and rates',
            'Instant booking inquiry submission connected directly to team WhatsApp',
            'Clear FAQs covering license requirements, insurance options, and deposits',
            'Local SEO optimization for airport and neighborhood car rental searches',
            'Voice and chat automation for after-hours reservation availability queries'
          ]
        },
        {
          id: 'smes',
          name: 'Small and Medium Enterprises',
          headline: 'Trust-Building Digital Presence & Practical Automation',
          desc: 'Establish strong credibility in the Saudi market, capture qualified leads, and reduce repetitive manual tasks.',
          items: [
            'Bilingual Arabic and English corporate website establishing brand trust',
            'Qualified customer inquiry forms routing directly to management',
            'Practical AI assistants answering routine inquiries 24/7',
            'Workflow automations connecting forms, notifications, and client records',
            'Search engine visibility setup with Google Search Console verification'
          ]
        }
      ]
    },
    whyTitan: {
      badge: 'Trust & Credibility',
      heading: 'WHY CHOOSE TITAN AI AGENCY',
      subtitle: 'We build dependable digital systems that deliver real operational value for businesses in Saudi Arabia.',
      points: [
        {
          num: '01',
          title: 'CUSTOM SOLUTIONS',
          desc: 'Tailored around how your business actually operates.',
          detail: 'We do not rely on rigid templates. Every website and AI workflow is custom-engineered around your specific workflows, services, and customer requirements.'
        },
        {
          num: '02',
          title: 'RESPONSIVE WEBSITE DESIGN',
          desc: 'Fast, mobile-first performance on every screen size.',
          detail: 'Over 80% of local traffic comes from mobile devices. We engineer responsive, lightweight websites that load quickly and deliver smooth user experiences.'
        },
        {
          num: '03',
          title: 'DIRECT COMMUNICATION',
          desc: 'Work directly with the technical team.',
          detail: 'No middle managers or agency bureaucracy. You communicate directly with the engineer developing your project for clear, responsive collaboration.'
        },
        {
          num: '04',
          title: 'TRANSPARENT PROJECT SCOPE',
          desc: 'Clear deliverables, fixed pricing, and no surprise fees.',
          detail: 'Before development begins, we provide an agreed scope with transparent pricing and milestone dates, so you always know what to expect.'
        },
        {
          num: '05',
          title: 'OPTIONAL MAINTENANCE & SUPPORT',
          desc: '30 days included with flexible ongoing care.',
          detail: 'Every completed project includes 30 days of complimentary technical support. Optional monthly maintenance packages are available if you want ongoing updates.'
        },
        {
          num: '06',
          title: 'PRACTICAL AI INTEGRATION',
          desc: 'Tested, business-ready AI where it actually adds value.',
          detail: 'We focus on practical tools: customer assistants that answer real questions, automated lead routing, and tested voice prototypes that save your team time.'
        }
      ]
    },
    smartNeeds: {
      badge: 'Interactive Solution Finder',
      heading: 'WHAT ARE YOU TRYING TO IMPROVE?',
      subtitle: 'Select your immediate business requirement below to see how TITAN solves it.',
      options: [
        {
          id: 'website',
          label: 'I NEED A BETTER WEBSITE',
          serviceName: 'AI Website Development',
          explanation: 'We create modern, fast, conversion-focused websites combining custom design with lead capture, bilingual support, and WhatsApp routing.',
          ctaText: 'BUILD MY WEBSITE'
        },
        {
          id: 'visibility',
          label: 'I NEED MORE VISIBILITY',
          serviceName: 'Search Engine Optimization',
          explanation: 'Help high-value clients discover your business across traditional search engines (Google) and local search listings.',
          ctaText: 'IMPROVE MY VISIBILITY'
        },
        {
          id: 'automate',
          label: 'I WANT TO AUTOMATE TASKS',
          serviceName: 'AI Agents',
          explanation: 'We build specialized AI agents designed to handle customer interactions, qualify inquiries, and eliminate routine manual work.',
          ctaText: 'BUILD MY AI AGENT'
        },
        {
          id: 'calls',
          label: 'I NEED HELP HANDLING CALLS',
          serviceName: 'AI Call Agents',
          explanation: 'Build AI-powered voice systems that answer customer calls, answer common questions, qualify inquiries, and route priority calls.',
          ctaText: 'BUILD MY AI CALL AGENT'
        },
        {
          id: 'content',
          label: 'I NEED MARKETING CONTENT',
          serviceName: 'AI Video Creation',
          explanation: 'Professional AI video content built for business marketing, product showcases, service explainers, and social media reels.',
          ctaText: 'BUILD MY AI VIDEO'
        }
      ]
    },
    aboutPreview: {
      badge: 'Corporate Background',
      heading: 'About TITAN AI AGENCY',
      intro: 'TITAN AI AGENCY was founded by Saad Naeem to help businesses improve their online presence and everyday operations through high-performance websites, AI tools, and automation.',
      desc: 'Rather than promoting speculative trends or making unsubstantiated claims, we focus on genuine business requirements: diagnosing where your workflows lose time, building dependable software to fix those friction points, and delivering clean, maintainable systems that your business owns completely.',
      cta: 'Learn More About TITAN & Saad Naeem',
      cardTitle: 'How We Operate',
      tenets: [
        {
          num: '1',
          title: 'Direct Communication',
          desc: 'Work directly with founder Saad Naeem without intermediary account layers.'
        },
        {
          num: '2',
          title: 'Pragmatic Engineering',
          desc: 'We choose technology to solve verified business constraints, never to chase hype.'
        },
        {
          num: '3',
          title: 'Post-Launch Care',
          desc: '30 days of free support to verify that everything operates flawlessly.'
        }
      ]
    },
    faqs: {
      badge: 'Frequently Asked Questions',
      heading: 'Clear Answers for Business Owners',
      subtitle: 'Helpful information about pricing, delivery, bilingual support, client ownership, and ongoing maintenance.',
      items: [
        {
          question: 'How much does a website cost?',
          answer: 'Our Starter Website package begins at SAR 500. More advanced solutions are quoted according to project requirements.'
        },
        {
          question: 'Does the price include a domain?',
          answer: 'Domain registration and paid third-party services are quoted separately unless explicitly included in the approved proposal.'
        },
        {
          question: 'Can I update my website after launch?',
          answer: 'Yes. Website editing capabilities depend on the agreed package. Optional maintenance services may also be available.'
        },
        {
          question: 'Do you create Arabic and English websites?',
          answer: 'Arabic and English website development can be included depending on the project requirements and package.'
        },
        {
          question: 'Can I add AI features later?',
          answer: 'Additional AI capabilities can be discussed and quoted separately, subject to technical feasibility.'
        },
        {
          question: 'Do you provide maintenance?',
          answer: 'Optional maintenance starts from SAR 100 per month, with the final scope confirmed in the service agreement.'
        },
        {
          question: 'Does the client own the website and source code?',
          answer: 'Yes, 100%. Upon project completion and handover, you own all source code, design assets, and content. We believe in zero vendor lock-in, meaning you are free to host, modify, or expand your platform whenever you choose.'
        },
        {
          question: 'What are the typical project delivery timelines?',
          answer: 'Most standard business websites are completed within 2 to 4 weeks, depending on design complexity and feedback turnaround. More comprehensive platforms with custom workflows or AI integrations generally take 3 to 6 weeks.'
        }
      ]
    },
    finalCta: {
      badge: 'Direct Founder Consultation',
      heading: 'READY TO BUILD THE FUTURE OF YOUR BUSINESS?',
      subtitle: 'Tell us what you want to improve. TITAN will help you identify the right digital or AI solution.',
      primaryBtn: 'START YOUR PROJECT',
      whatsappBtn: 'CHAT ON WHATSAPP'
    },
    contact: {
      badge: 'Project Scoping & Contact',
      heading: 'Start Your Project',
      subtitle: 'Tell us what problem you want to solve. We’ll analyze your requirements and propose the right digital or AI solution.',
      formSection1: '01 — Contact & Company Information',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Tariq Al-Mansoor',
      businessNameLabel: 'Business Name *',
      businessNamePlaceholder: 'e.g. Apex Property Group',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'tariq@company.com',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+966 5X XXX XXXX',
      businessTypeLabel: 'Business Type',
      businessTypePlaceholder: 'e.g. Real Estate, Clinic, Restaurant, Advisory',
      websiteLabel: 'Website URL',
      websitePlaceholder: 'https://yourwebsite.com',
      optional: '(Optional)',
      formSection2: '02 — What Do You Need? *',
      formSection3: '03 — Main Business Challenge *',
      challengePlaceholder: 'Tell us what problem you want to solve (e.g. We miss customer calls after hours, our website does not generate leads, or repetitive inquiries take up hours every day).',
      budgetLabel: 'Estimated Project Budget (Optional)',
      contactChannelLabel: 'Contact Channel',
      founderReview: 'Direct Founder Review · Response within 24 hours',
      submitBtn: 'START MY PROJECT',
      successTitle: 'Project Request Generated!',
      successDesc: 'Your inquiry is ready. If WhatsApp didn’t open automatically, click the button below to send your project details directly to founder Saad Naeem.',
      sendWhatsappBtn: 'Send on WhatsApp'
    },
    footer: {
      desc: 'Founded by Saad Naeem. We build websites, AI assistants, call agents, and automation that help businesses showcase their work, answer enquiries faster, and reduce repetitive tasks that take up your time.',
      guarantee: 'Transparent scoping · 30 days post-launch support · Complete client ownership',
      coreServicesTitle: 'Core Services',
      companyTitle: 'Company',
      directContactTitle: 'Direct Contact',
      allRightsReserved: 'All rights reserved.',
      pillar1: 'Direct Founder Engineering',
      pillar2: '30 Days Free Launch Support',
      pillar3: '100% Client IP & Code Ownership',
      whatsappConsultation: 'Start WhatsApp Consultation'
    },
    floatingWhatsapp: {
      badge: 'Official WhatsApp Direct',
      tooltip: 'Chat on WhatsApp',
      title: 'TITAN AI AGENCY',
      directStatus: 'Official WhatsApp Direct',
      desc: 'Have a project in mind? Connect directly with TITAN on WhatsApp to discuss your project and get a clear quote.',
      fastReply: 'Fast Reply',
      openChat: 'Open Direct WhatsApp Chat',
      ariaLabel: 'Contact TITAN on WhatsApp'
    },
    simplifiedServices: {
      badge: 'Core Services',
      heading: 'Everything Your Business Needs to Grow Online',
      subtitle: 'Clear, modern digital solutions tailored for companies in Saudi Arabia. Simple to understand, fast to launch.',
      learnMore: 'Learn More',
      viewAllServices: 'View Full Technical Details',
      categories: {
        websites: {
          title: 'Website Development',
          desc: 'Fast, high-converting websites custom-built to showcase your business and attract customers.',
          items: [
            'Business websites',
            'Real estate websites',
            'Booking and inquiry systems'
          ],
          route: '/services/website-design'
        },
        ai: {
          title: 'AI Solutions',
          desc: 'Smart 24/7 customer assistants, automated phone calling, and streamlined business workflows.',
          items: [
            'AI chat assistants',
            'AI call agents',
            'Business automation'
          ],
          route: '/services/ai-agents'
        },
        marketing: {
          title: 'Digital Marketing',
          desc: 'Search engine optimization and engaging video content to reach more local customers.',
          items: [
            'SEO (Search Engine Optimization)',
            'AI promotional videos',
            'Marketing content'
          ],
          route: '/services/seo'
        }
      }
    },
    simplifiedPricing: {
      viewAllFeatures: 'View All Features',
      hideFeatures: 'Hide Extra Features',
      topFeaturesNotice: 'Key package highlights. Click below for complete feature breakdown.',
      aiCardTitle: 'AI Solutions & Automation',
      aiCardSubtitle: 'Custom AI assistants, telephone call agents, and system automation tailored to your exact business workflow.',
      aiCardPrice: 'Custom Quote',
      aiCardBadge: 'Flexible Scope',
      aiCardFeatures: [
        'AI customer support assistants (24/7 response)',
        'AI phone call agents for bookings & inquiries',
        'Business automation linking forms, CRM & WhatsApp',
        'AI promotional video creation & voiceovers'
      ],
      aiCardCta: 'Request Custom AI Quote',
      maintenanceCardTitle: 'Website Maintenance',
      maintenanceCardSubtitle: 'Ongoing technical care and security updates to keep your website fast, safe, and up to date.',
      maintenanceCardPrice: 'From SAR 100/mo',
      maintenanceCardFeatures: [
        'Regular platform and security updates',
        'Monthly reliable website backups',
        'Continuous uptime and broken-link monitoring',
        'Minor text, phone, and image updates'
      ],
      maintenanceCardCta: 'Inquire About Maintenance'
    },
    homepageContact: {
      badge: 'Get in Touch',
      heading: 'Let’s Discuss Your Next Project',
      subtitle: 'Send a quick inquiry or message founder Saad Naeem directly on WhatsApp. We provide transparent scopes and clear fixed quotes.',
      cardTitle: 'Request a Free Quote',
      cardSubtitle: 'No complicated forms. Tell us what your business needs, and we’ll reply within hours.',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Tariq Al-Mansoor',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+966 5X XXX XXXX',
      serviceLabel: 'Service Needed *',
      servicePlaceholder: 'e.g. Starter Website, AI Assistant, SEO',
      messageLabel: 'Project Details / Goal *',
      messagePlaceholder: 'Tell us briefly about your business and what you want to achieve...',
      submitBtn: 'Send Project Inquiry',
      whatsappDirect: 'Chat Directly on WhatsApp',
      whatsappDirectDesc: 'Prefer instant chat? Connect directly with founder Saad Naeem on WhatsApp.',
      chatWhatsappBtn: 'Open WhatsApp Chat (+966 53 418 2945)',
      trustNote: 'Direct founder engineering · Transparent pricing · 30 days free support'
    }
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      pricing: 'الأسعار والباقات',
      about: 'من نحن',
      missionVision: 'الرسالة والرؤية',
      portfolio: 'أعمالنا',
      aiDemo: 'تجربة الذكاء الاصطناعي',
      blog: 'المدونة',
      contact: 'تواصل معنا',
      startProject: 'ابدأ مشروعك',
      whatsapp: '+966 53 418 2945',
      switchLang: 'EN',
      currentLangName: 'العربية'
    },
    pricing: {
      badge: 'الأسعار والباقات الشفافة',
      heading: 'باقات احترافية للشركات في المملكة العربية السعودية',
      subtitle: 'تقديرات سعرية واضحة، نطاق عمل مفصل، وتنفيذ برمجي موثوق. نبني مواقع وحلول ذكاء اصطناعي دون تكاليف خفية.',
      currency: 'ريال',
      startingFrom: 'ابتداءً من',
      recommendedBadge: 'الخيار الموصى به من تيتان',
      termsTitle: 'شروط وبنود التسعير ونطاق العمل',
      terms: [
        'جميع الأسعار المعروضة بالريال السعودي (SAR).',
        'الأسعار الموضحة هي تقديرات أولية للبدء وليست عروض أسعار نهائية ملزمة.',
        'يعتمد السعر النهائي على المتطلبات الفعلية ونطاق العمل الفني المتفق عليه.',
        'تُسعَّر رسوم تسجيل النطاق (Domain) والاستضافة السحابية المدفوعة بشكل منفصل.',
        'لا تشمل الأسعار تلقائياً اشتراكات المنصات الخارجية أو تكاليف استهلاك واجهات برمجة الذكاء الاصطناعي (API).',
        'قد تتطلب عمليات الربط البرمجي المعقدة والأنظمة الخاصة تكلفة إضافية بناءً على دراستها.',
        'جولات التعديل محددة بحسب نطاق كل باقة (لا نقدم جولات تعديل غير محدودة).',
        'تبقى جميع الاتفاقيات والعقود الحالية مع العملاء سارية دون أي تغيير.'
      ],
      websitePackages: {
        starter: {
          id: 'starter-website',
          name: 'الموقع الأساسي (Starter)',
          price: '500 ريال',
          priceNumeric: 500,
          desc: 'مصممة للشركات والمتاجر الناشئة التي تحتاج إلى تواجد رقمي احترافي.',
          cta: 'ابدأ الآن',
          features: [
            'موقع إلكتروني احترافي للشركة',
            'تصميم متجاوب وسريع للهواتف الذكية',
            'حتى 3 صفحات أو أقسام مكافئة',
            'زر تواصل مباشر عبر واتساب',
            'إعداد أساسي لتهيئة محركات البحث (SEO)',
            'عرض معلومات وخدمات المنشأة',
            'ربط خرائط جوجل عند الطلب',
            'روابط منصات التواصل الاجتماعي',
            'المساعدة في النشر والإطلاق',
            'جولة واحدة من المراجعات والتعديلات'
          ]
        },
        professional: {
          id: 'professional-website',
          name: 'الموقع الاحترافي (Professional)',
          price: '1,200 ريال',
          priceNumeric: 1200,
          desc: 'مصممة للشركات المتنامية التي تحتاج إلى ميزات متقدمة وتصميم مخصص.',
          cta: 'اختر الباقة الاحترافية',
          isRecommended: true,
          features: [
            'كل ما تشمله الباقة الأساسية',
            'حتى 7 صفحات كاملة',
            'تصميم مخصص يعكس هوية شركتك',
            'دعم اللغتين العربية والإنجليزية حسب النطاق',
            'نماذج تواصل واستفسار متقدمة',
            'إعداد متكامل لتهيئة محركات البحث (SEO)',
            'معرض أعمال أو كتالوج للمنتجات',
            'تجربة تصفح محسنة ومثالية للهواتف',
            'تحسين سرعة الأداء والاستجابة',
            'حتى جولتين من المراجعات والتعديلات'
          ]
        },
        advanced: {
          id: 'advanced-business-website',
          name: 'موقع الأعمال المتقدم (Advanced)',
          price: '2,000 ريال',
          priceNumeric: 2000,
          desc: 'مصممة للشركات التي تحتاج إلى وظائف مخصصة ومواقع متطورة وديناميكية.',
          cta: 'طلب عرض مخصص',
          features: [
            'كل ما تشمله الباقة الاحترافية',
            'وظائف برمجية مخصصة للعمليات',
            'قوائم ديناميكية تفاعلية',
            'أنظمة بحث وتصفية متقدمة',
            'لوحة تحكم إدارية حسب النطاق المتفق عليه',
            'إمكانات إدارة وتحديث المحتوى',
            'إدارة وتنظيم استفسارات العملاء',
            'ربط متقدم مع الأنظمة وفق التسعير',
            'سيو تقني متقدم ومحسن لمحركات البحث',
            'اختبارات دقيقة ونشر كامل',
            'تعديلات ومراجعات محددة حسب متطلبات المشروع'
          ]
        }
      },
      aiSolutions: {
        badge: 'حلول الذكاء الاصطناعي والأتمتة',
        heading: 'أنظمة ذكاء اصطناعي وصوت مخصصة للشركات',
        subtitle: 'من فرز الاستفسارات الروتينية إلى وكلاء الاتصال الصوتي وإنتاج الفيديو التسويقي.',
        notice: 'شفافية هندسية: نميز بوضوح بين الخدمات الإنتاجية الجاهزة والنماذج التجريبية قيد التطوير المخصص. لا نعرض أي نظام غير مختبر على أنه جاهز للإنتاج.',
        customQuote: 'عرض أسعار مخصص',
        cards: [
          {
            id: 'ai-customer-support-agents',
            title: 'وكلاء دعم العملاء بالذكاء الاصطناعي',
            desc: 'مساعدون أذكياء مصممون لمساعدة الشركات في الرد على الاستفسارات الروتينية، وجمع بيانات العملاء، وتحسين مسارات الاستجابة.',
            pricing: 'عرض أسعار مخصص',
            status: 'متاح للتطوير المخصص',
            isWorkingService: true
          },
          {
            id: 'ai-call-agents',
            title: 'وكلاء الاتصال الصوتي بالذكاء الاصطناعي',
            desc: 'أنظمة ذكاء اصطناعي صوتية للرد على استفسارات الهاتف الروتينية ودعم عمليات خدمة العملاء.',
            pricing: 'عرض أسعار مخصص',
            status: 'نموذج تجريبي قيد الاختبار',
            isWorkingService: false
          },
          {
            id: 'ai-business-automation',
            title: 'أتمتة الأعمال والعمليات',
            desc: 'حلول أتمتة للمهام المتكررة، وتأهيل استفسارات العملاء، وإدارة الفرص التسويقية، وربط مسارات العمل.',
            pricing: 'عرض أسعار مخصص',
            status: 'متاح للتطوير المخصص',
            isWorkingService: true
          },
          {
            id: 'ai-video-creation',
            title: 'إنتاج الفيديو التسويقي بالذكاء الاصطناعي',
            desc: 'إنتاج مقاطع فيديو ترويجية، ومحتوى تسويقي، وإعلانات لمنصات التواصل الاجتماعي بالذكاء الاصطناعي.',
            pricing: 'عرض أسعار مخصص',
            status: 'جاهز للتنفيذ والإنتاج',
            isWorkingService: true
          },
          {
            id: 'seo-optimization-service',
            title: 'تحسين محركات البحث SEO',
            desc: 'خدمات سيو تركز على التحسينات التقنية، وسرعة الموقع، والبيانات المنظمة، ودعم الفهرسة، والظهور في نتائج البحث.',
            pricing: 'عرض أسعار مخصص',
            status: 'خدمة نشطة ومباشرة',
            isWorkingService: true
          }
        ]
      },
      maintenance: {
        badge: 'الدعم الفني والعناية المستمرة',
        heading: 'صيانة المواقع والدعم الفني',
        subtitle: 'حافظ على أمان موقعك وتحديثه واستقراره التشغيلي من خلال خطة صيانة شهرية اختيارية.',
        planTitle: 'خطة العناية بالموقع (Care Plan)',
        price: '100 ريال',
        period: '/ شهرياً',
        desc: 'خدمات محتملة مشمولة، تخضع للاتفاقية المعتمدة:',
        cta: 'طلب خطة الصيانة',
        notice: 'خدمات الصيانة اختيارية. سيتم تأكيد النطاق الدقيق للدعم، وحدود التحديثات، وأوقات الاستجابة، وأي نفقات خارجية مسبقاً قبل الاشتراك.',
        features: [
          'تحديثات طفيفة على محتوى الموقع',
          'استبدال النصوص والصور',
          'فحوصات دورية لسلامة وظائف الموقع',
          'دعم فني واستشاري أساسي',
          'إصلاح الأخطاء الطفيفة ضمن النطاق المتفق عليه',
          'المساعدة في ضبط إعدادات الموقع القائم'
        ]
      },
      quoteModal: {
        title: 'طلب عرض سعر / مقترح مشروع',
        subtitle: 'أدخل تفاصيل مشروعك للحصول على نطاق عمل محدد وتسعيرة واضحة ومباشرة من المؤسس سعد نعيم.',
        selectedPackageLabel: 'الباقة أو الخدمة المختارة',
        nameLabel: 'الاسم الكريم *',
        businessLabel: 'اسم المنشأة أو الشركة *',
        phoneLabel: 'رقم الهاتف / واتساب *',
        serviceLabel: 'الخدمة المطلوبة *',
        requirementsLabel: 'متطلبات المشروع والتحدي المطلوب حله *',
        messageLabel: 'تفاصيل إضافية (اختياري)',
        submitBtn: 'إرسال طلب المشروع',
        whatsappBtn: 'محادثة مباشرة عبر واتساب',
        successTitle: 'تم إعداد تفاصيل الطلب بنجاح!',
        successMessage: 'تم تجهيز تفاصيل طلبك. يمكنك الآن إرسالها مباشرة إلى المؤسس سعد نعيم عبر واتساب لمراجعتها بسرعة.',
        openWhatsappNow: 'فتح محادثة واتساب الآن',
        closeBtn: 'إغلاق'
      },
      trustApproach: {
        badge: 'معايير تيتان الهندسية والمصداقية',
        heading: 'نهجنا الملتزم في كل مشروع',
        subtitle: 'نبني أنظمة رقمية موثوقة تحقق عائداً تشغيلياً حقيقياً للشركات في المملكة العربية السعودية.',
        principles: [
          {
            title: 'نطاق عمل واضح ومكتوب',
            desc: 'نحدد كل ميزة، وجدول تسليم، ومخرجات المشروع كتابياً قبل بدء التطوير لضمان وضوح كامل.'
          },
          {
            title: 'تطوير برمجي مخصص',
            desc: 'شيفرة برمجية نظيفة مبنية خصيصاً لمتطلبات عملك دون حشو أو قوالب مسبقة معقدة.'
          },
          {
            title: 'تصميم متجاوب وسريع',
            desc: 'تجربة مستخدم سريعة ومتناسقة تماماً على شاشات الهواتف والأجهزة اللوحية والحواسيب.'
          },
          {
            title: 'شفافية كاملة في التسعير',
            desc: 'تسعير واضح ومفصل وجداول دفعات مرتبطة بالإنجاز. لا توجد أي تكاليف خفية أو مفاجئة.'
          },
          {
            title: 'اختبارات شاملة قبل التسليم',
            desc: 'فحص دقيق لكافة المتصفحات والأجهزة وفحص الروابط والأداء قبل إطلاق الموقع للجمهور.'
          },
          {
            title: 'دعم فني اختياري مستمر',
            desc: '30 يوماً من الدعم الفني المجاني مشمولة مع كل مشروع، إلى جانب خطط صيانة شهرية اختيارية.'
          },
          {
            title: 'حلول عملية تركز على النتائج',
            desc: 'نختار التقنيات التي تحل اختناقات العمل الفعلية وتجلب عملاء جادين، بعيداً عن مجرد المظاهر.'
          }
        ]
      }
    },
    hero: {
      badge: 'مواقع وحلول ذكاء اصطناعي للشركات السعودية',
      headlineLine1: 'نبني مواقع إلكترونية و',
      headlineLine2: 'حلول ذكاء اصطناعي لأعمالك',
      supportingText: 'مواقع احترافية، ومساعدين أذكياء، وحلول رقمية لمساعدة عملك على الوصول إلى المزيد من العملاء.',
      primaryButton: 'احصل على عرض سعر مجاني',
      secondaryButton: 'شاهد أعمالنا',
      serviceLine: {
        websites: 'تطوير المواقع',
        seo: 'تحسين محركات البحث SEO',
        aiAgents: 'مساعدين أذكياء',
        callAgents: 'وكلاء اتصال صوتي',
        aiVideo: 'فيديوهات ترويجية'
      }
    },
    dashboard: {
      illustrativeDemo: 'عرض توضيحي',
      systemStatus: 'حالة النظام: نشط ومستقر',
      aiAgent: 'وكيل الذكاء الاصطناعي',
      aiAgentStatus: 'نشط',
      aiAgentDesc: 'تنظيم استفسارات العملاء وتوجيهها',
      aiVoiceAgent: 'وكيل المكالمات الصوتية',
      aiVoiceStatus: 'جاهز',
      aiVoiceDesc: 'دعم هاتفي صوتي على مدار الساعة',
      website: 'الموقع الإلكتروني',
      websiteStatus: 'متصل',
      websiteDesc: 'سريع، متجاوب، ومهيأ لمحركات البحث',
      leads: 'العملاء المحتملون',
      leadsStatus: 'تم الاستلام',
      leadsDesc: 'توجيه فوري للنماذج ورسائل واتساب',
      automation: 'الأتمتة',
      automationStatus: 'يعمل',
      automationDesc: 'مزامنة إدارة العملاء والبريد والتنبيهات',
      workflowEngine: 'محرك سير العمل الذكي',
      automationFlow: 'مسار أتمتة نشط',
      step1: 'استلام استفسار العميل فورياً',
      step2: 'فرز وتأهيل الاستفسار بالذكاء الاصطناعي',
      step3: 'تحويل مباشر إلى واتساب فريق العمل'
    },
    servicesSection: {
      label: 'الخدمات الأساسية',
      heading: 'حلول عملية للمواقع والذكاء الاصطناعي',
      supportingText: 'طُورت خصيصاً للشركات في المملكة العربية السعودية لاستقطاب العملاء، والرد على الاستفسارات الروتينية، وأتمتة مسارات العمل.',
      exploreDetails: 'تفاصيل الخدمة',
      popularBadge: 'الأكثر طلباً',
      cards: {
        websites: {
          title: 'تطوير المواقع بالذكاء الاصطناعي',
          desc: 'مواقع إلكترونية احترافية تدعم اللغتين العربية والإنجليزية، منصات عقارية، معارض أعمال، أنظمة حجز، ونماذج استفسارات العملاء.',
          tags: ['عربي / إنجليزي ثنائي اللغة', 'منصات عقارية متطورة', 'سرعة وأداء فائق']
        },
        seo: {
          title: 'تحسين محركات البحث (SEO)',
          desc: 'تهيئة تقنية متقدمة، تحسين البيانات الوصفية، تسريع أداء الهواتف، رفع الظهور في نتائج البحث، وإعداد Google Search Console.',
          tags: ['تهيئة تقنية SEO', 'Google Search Console', 'سرعة الهواتف']
        },
        agents: {
          title: 'وكلاء الذكاء الاصطناعي',
          desc: 'مساعدون أذكياء للإجابة عن أسئلة العملاء الروتينية، وجمع بيانات العملاء المهتمين، وأتمتة العمليات اليومية بعد اختبارها.',
          tags: ['استفسارات العملاء', 'تأهيل العملاء المهتمين', 'أتمتة الأعمال']
        },
        calls: {
          title: 'وكلاء الاتصال الصوتي بالذكاء الاصطناعي',
          desc: 'حلول أتمتة صوتية للتعامل مع استفسارات الأعمال الروتينية (عرض توضيحي وتكامل مخصص متاح للمنشآت).',
          tags: ['أتمتة صوتية', 'استفسارات هاتفية', 'نموذج تجريبي / قيد التطوير']
        },
        video: {
          title: 'إنتاج الفيديو بالذكاء الاصطناعي',
          desc: 'محتوى مرئي ترويجي بالذكاء الاصطناعي، إعلانات المنتجات، وفيديوهات تسويقية مصممة لشبكات التواصل والحملات التجارية.',
          tags: ['محتوى ترويجي', 'إعلانات منتجات', 'فيديو تسويقي']
        }
      }
    },
    featuredWork: {
      badge: 'معرض الأعمال والنماذج',
      heading: 'نماذج مختارة ومشاريع تفاعلية',
      subtitle: 'استكشف نماذج أولية وتطبيقات حية طورتها وكالة تيتان للذكاء الاصطناعي لقطاعات متنوعة.',
      illustrativeConcept: 'نموذج أولي توضيحي',
      openDemo: 'فتح النموذج الحي',
      discussSimilar: 'ناقش مشروعاً مماثلاً عبر واتساب',
      problemLabel: 'التحدي التجاري',
      solutionLabel: 'حل تيتان الهندسي',
      outcomeLabel: 'النتيجة التشغيلية',
      projects: {
        realEstate: {
          name: 'نموذج المنصة العقارية الفاخرة',
          category: 'العقارات والتطوير العمراني',
          problem: 'تواجه الشركات العقارية صعوبة في استعراض المشاريع الكبرى وفرز الوحدات حسب رغبة المشتري مع بطء الرد على المستثمرين عبر البريد الإلكتروني.',
          solution: 'طوّرت تيتان منصة عقارية فائقة السرعة مع أدوات فرز ذكية للوحدات واستعراض مخططات الأدوار مع تواصل مباشر وسريع عبر واتساب.',
          outcome: 'نموذج تفاعلي يتيح تصفحاً فورياً بلا تأخير واستقبال استفسارات المستثمرين بكفاءة.'
        },
        bakery: {
          name: 'منصة تفاعلية لمخبز وتخصيص الكيك',
          category: 'الأغذية والضيافة',
          problem: 'تتطلب طلبات الكيك المخصصة محادثات طويلة لتحديد الطبقات والنكهات ومواعيد الاستلام، مما يستنزف وقت الفريق في أوقات الذروة.',
          solution: 'بنت تيتان أداة تخصيص تفاعلية تتيح للعميل اختيار الطبقات والنكهات مع حساب فوري للسعر وإرسال الطلب بنقرة واحدة عبر واتساب.',
          outcome: 'الاستغناء عن أسئلة الأسعار المتكررة وتوجيه الطلبات الجاهزة مباشرة إلى فريق الإنتاج.'
        },
        restaurant: {
          name: 'منصة مطاعم الوجبات السريعة الراقية',
          category: 'المطاعم والضيافة',
          problem: 'ملفات الـ PDF القديمة لقوائم الطعام ثقيلة على الهواتف وبطيئة في التحميل وتسبب انصراف العملاء قبل معرفة الفروع وساعات العمل.',
          solution: 'طوّرت تيتان موقعاً مخصصاً للهواتف يعرض القائمة بتصنيفات واضحة ومعلومات المكونات وخرائط الفروع والطلب السريع.',
          outcome: 'تحميل فوري وسريع على الهواتف وسهولة كاملة في الوصول للمنيو والفروع.'
        }
      }
    },
    inAction: {
      badge: 'عروض تقنية تفاعلية',
      heading: 'شاهد حلول تيتان عملياً',
      subtitle: 'اكتشف كيف نوظف المواقع والذكاء الاصطناعي والأنظمة الصوتية والمرئية لحل تحديات الأعمال اليومية.',
      illustrativeBadge: 'عرض توضيحي',
      card1Title: 'تجربة المواقع الذكية',
      card1Desc: 'شاهد كيف نصمم مواقع تجارية حديثة لترسيخ الثقة، وجذب العملاء المهتمين، والربط مع أدوات العمل اليومية.',
      card2Title: 'مساعد خدمة العملاء الذكي',
      card2Desc: 'وكلاء محادثة آليون مدربون على معلومات وبيانات شركتك للإجابة عن الاستفسارات على مدار الساعة.',
      card3Title: 'وكيل المكالمات الصوتية',
      card3Desc: 'أنظمة صوتية تجيب على الاتصالات الهاتفية، وترد على الأسئلة الشائعة، وتسجل المواعيد باحترافية.',
      card4Title: 'الظهور في محركات البحث والذكاء الاصطناعي',
      card4Desc: 'تهيئة تقنية وهيكلية متقدمة تضمن ظهور نشاطك في جوجل ومنصات الذكاء الاصطناعي (ChatGPT وغيرها).',
      card5Title: 'إنتاج الفيديو بالذكاء الاصطناعي',
      card5Desc: 'مقاطع فيديو احترافية مصممة للترويج لخدماتك وإبراز مميزات عملك عبر منصات التواصل الاجتماعي.',
      chatDialogue: [
        { sender: 'customer', text: 'هل تقدمون خدمة تصميم مواقع للشركات العقارية؟' },
        { sender: 'ai', text: 'نعم بالتأكيد! تطوّر تيتان مواقع عقارية متكاملة تشمل قوائم العقارات، وتأهيل العملاء المهتمين، والربط المباشر مع واتساب، ومساعداً ذكياً.' },
        { sender: 'customer', text: 'كيف يمكنني طلب استشارة لمشروعي؟' },
        { sender: 'ai', text: 'يسعدنا ذلك جداً. يمكنني مساعدتك في بدء تفاصيل المشروع أو ربطك مباشرة مع فريق تيتان الآن.' }
      ]
    },
    howItWorks: {
      badge: 'منهجية واضحة في 4 خطوات',
      heading: 'كيف نعمل في وكالة تيتان',
      subtitle: 'مسار عمل واضح ومنظم من أربع خطوات لتصميم وبناء حلول عملية لأعمالك دون تعقيدات غير ضرورية.',
      steps: [
        {
          num: '01',
          title: 'أخبرنا عن عملك',
          desc: 'نتعرف على طبيعة نشاطك التجاري، وكيفية تواصل عملائك، والأهداف أو التحديات المحددة التي تسعى لحلها.',
          badge: '01 · جلسة استكشافية'
        },
        {
          num: '02',
          title: 'راجع عرضك المخصص',
          desc: 'نقدم لك نطاق عمل مفصلاً ومكتوباً بوضوح، يحدد الجدول الزمني ومراحل التسليم والتكلفة الثابتة والشفافة.',
          badge: '02 · العرض ونطاق العمل'
        },
        {
          num: '03',
          title: 'التصميم والتطوير',
          desc: 'نقوم بتصميم وتطوير موقعك الإلكتروني أو نظامك الذكي بأحدث المعايير البرمجية وأعلى درجات السرعة والأمان.',
          badge: '03 · التطوير الهندسي'
        },
        {
          num: '04',
          title: 'الاختبار والإطلاق والدعم',
          desc: 'نختبر النظام عبر مختلف الأجهزة والمتصفحات، ونطلقه رسمياً، مع تقديم 30 يوماً من الدعم الفني المجاني.',
          badge: '04 · الإطلاق ودعم 30 يوماً'
        }
      ]
    },
    useCases: {
      badge: 'القطاعات التي نخدمها',
      heading: 'حلول مخصصة للقطاعات الرئيسية',
      subtitle: 'نبني حلولاً رقمية مصممة خصيصاً لتلائم الواقع التشغيلي اليومي للشركات في المملكة العربية السعودية.',
      industries: [
        {
          id: 'real-estate',
          name: 'الشركات العقارية',
          headline: 'منصات عقارية عالية الأداء واستقبال فوري للمستثمرين',
          desc: 'تمتلك تيتان خبرة عملية مثبتة في تطوير المواقع العقارية الفاخرة لعرض المشاريع الكبرى وجذب المستثمرين المهتمين.',
          isFeatured: true,
          highlightBadge: 'خبرة متخصصة',
          items: [
            'مواقع عقارية تفاعلية تعرض الوحدات والمخططات الهندسية بدقة',
            'إجراءات استفسار فورية عبر واتساب للربط المباشر مع المستثمرين والمشترين',
            'تصميم متجاوب وسريع ومخصص لتصفح المستثمرين عبر الهواتف الذكية',
            'مساعد ذكي مدرب للرد على أسئلة المساحات، والأسعار، والمواقع',
            'تهيئة محركات البحث (SEO) لضمان ظهور العقارات في عمليات البحث المحلية',
            'إنتاج مقاطع فيديو ترويجية للعقارات مناسبة لمنصات التواصل والحملات'
          ]
        },
        {
          id: 'restaurants',
          name: 'المطاعم والمقاهي',
          headline: 'قوائم طعام تفاعلية سريعة وتواصل فوري عبر واتساب',
          desc: 'استبدل ملفات الـ PDF البطيئة بقوائم طعام رقمية عصرية وسريعة للهواتف تتيح الطلب السريع وحجز الطاولات.',
          items: [
            'مواقع طعام متطورة ومصممة للهواتف مع فرز المكونات ومسببات الحساسية',
            'توجيه مباشر للطلبات واستفسارات الحجوزات إلى واتساب المطعم',
            'ربط خرائط جوجل وساعات العمل لتعزيز الظهور المحلي بالقرب من العملاء',
            'مساعد ذكي للرد على أسئلة الفروع، ومواقف السيارات، والحفلات الخارجية',
            'إنتاج فيديو تسويقي بالذكاء الاصطناعي لإبراز الأطباق المميزة والعروض'
          ]
        },
        {
          id: 'car-rental',
          name: 'شركات تأجير السيارات',
          headline: 'عرض ذكي لأسطول السيارات واستقبال طلبات الحجز فورياً',
          desc: 'استعرض فئات السيارات ومواصفاتها وشروط التأجير مع استقبال طلبات الحجز المباشرة عبر واتساب.',
          items: [
            'كاتالوج رقمي يعرض أسطول السيارات حسب الفئة والميزات وتكلفة التأجير',
            'نموذج حجز فوري واستفسار مباشر يرتبط بواتساب فريق المبيعات',
            'قسم أسئلة شائعة يوضح متطلبات الرخص، والتأمين، ومبالغ التأمين المستردة',
            'سيو محلي لظهور خدمات التأجير في نتائج البحث قرب المطارات والمناطق الحيوية',
            'أنظمة محادثة وصوت للرد على استفسارات توفر السيارات خارج أوقات العمل'
          ]
        },
        {
          id: 'smes',
          name: 'الشركات الصغيرة والمتوسطة',
          headline: 'تواجد رقمي موثوق وأتمتة عملية للمهام والعمليات',
          desc: 'رسخ مصداقية شركتك في السوق السعودي، واستقبل استفسارات العملاء المؤهلين، وتخلص من المهام اليدوية المتكررة.',
          items: [
            'موقع تنفيذي ثنائي اللغة (عربي / إنجليزي) يبني الثقة أمام العملاء والشركاء',
            'نماذج تواصل مخصصة تفرز وتؤهل العملاء الجادين تلقائياً',
            'مساعدون أذكياء للرد على الأسئلة الشائعة على مدار الساعة',
            'أتمتة مسارات العمل بين النماذج والبريد الإلكتروني وتنبيهات واتساب',
            'تهيئة محركات البحث وإعداد Google Search Console لضمان فهرسة متكاملة'
          ]
        }
      ]
    },
    whyTitan: {
      badge: 'المصداقية والثقة',
      heading: 'لماذا تختار التعامل مع وكالة تيتان؟',
      subtitle: 'نبني أنظمة رقمية موثوقة تحقق عائداً تشغيلياً حقيقياً للشركات في المملكة العربية السعودية.',
      points: [
        {
          num: '01',
          title: 'حلول مخصصة',
          desc: 'مصممة بالكامل وفق طبيعة عمل منشأتك.',
          detail: 'لا نعتمد على قوالب مسبقة ومستهلكة. كل موقع إلكتروني أو مسار أتمتة يُبنى خصيصاً ليناسب نموذج عملك وخدماتك وتوقعات عملائك.'
        },
        {
          num: '02',
          title: 'تصميم مواقع متجاوب فائق السرعة',
          desc: 'تجربة سلسة ومحسنة للهواتف الذكية أولاً.',
          detail: 'أكثر من 80% من زوار المواقع في السعودية يتصفحون عبر الهواتف. نهندس مواقع سريعة وخفيفة ومتوافقة مع مؤشرات أداء الويب الأساسية.'
        },
        {
          num: '03',
          title: 'تواصل مباشر مع الفريق التقني',
          desc: 'تعامل مباشر دون حواجز أو وسطاء إداريين.',
          detail: 'لا توجد طبقات إدارة معقدة. تتواصل مباشرة مع المهندس الذي يطور مشروعك لضمان سرعة التنفيذ ودقة الاستجابة لأفكارك.'
        },
        {
          num: '04',
          title: 'نطاق عمل واضح وشفاف',
          desc: 'مخرجات محددة، وتكلفة ثابتة بلا رسوم مفاجئة.',
          detail: 'قبل البدء في كتابة أول سطر برمجي، نقدم لك نطاق عمل مكتوباً بالتفصيل مع جدول مراحل واضح وتكلفة ثابتة تضمن راحة بالك.'
        },
        {
          num: '05',
          title: 'صيانة ودعم فني اختياري',
          desc: '30 يوماً مشمولة مجاناً مع خيارات دعم مرنة.',
          detail: 'يتضمن كل مشروع مكتمل 30 يوماً من الدعم التقني المجاني. كما نوفر باقات صيانة شهرية اختيارية لمن يرغب في تحديثات دورية ومستمرة.'
        },
        {
          num: '06',
          title: 'تكامل ذكاء اصطناعي عملي',
          desc: 'أدوات ذكية مختبرة تضيف قيمة حقيقية لأعمالك.',
          detail: 'نبتعد تماماً عن الوعود التسويقية غير الواقعية، ونركز على أدوات عملية: مساعدين للإجابة عن أسئلة العملاء، وتوجيه الطلبات، وتوفير وقت فريقك.'
        }
      ]
    },
    smartNeeds: {
      badge: 'مساعد تحديد الاحتياج',
      heading: 'ما الذي تسعى لتطويره في أعمالك؟',
      subtitle: 'اختر التحدي الذي تواجهه حالياً لتتعرف على كيفية مساهمة تيتان في حله.',
      options: [
        {
          id: 'website',
          label: 'أحتاج موقعاً إلكترونياً أفضل',
          serviceName: 'تطوير المواقع بالذكاء الاصطناعي',
          explanation: 'نطوّر مواقع حديثة وسريعة تجمع بين التصميم المخصص، ودعم اللغتين، ونماذج جذب العملاء والربط المباشر مع واتساب.',
          ctaText: 'ابنِ موقعي الإلكتروني'
        },
        {
          id: 'visibility',
          label: 'أحتاج لزيادة الظهور والوصول للعملاء',
          serviceName: 'تحسين محركات البحث SEO',
          explanation: 'ساعد العملاء في العثور على شركتك عبر محركات البحث التقليدية (Google) ونتائج البحث المحلية.',
          ctaText: 'عزز ظهور شركتي'
        },
        {
          id: 'automate',
          label: 'أريد أتمتة المهام اليومية المتكررة',
          serviceName: 'وكلاء الذكاء الاصطناعي',
          explanation: 'نبني وكلاء أذكياء للتعامل مع استفسارات العملاء، وتأهيل الطلبات الجادة، والتخلص من الأعمال الروتينية المستنزفة للوقت.',
          ctaText: 'صمم وكيل الذكاء الاصطناعي'
        },
        {
          id: 'calls',
          label: 'أحتاج للمساعدة في الرد على الاتصالات',
          serviceName: 'وكلاء الاتصال الصوتي بالذكاء الاصطناعي',
          explanation: 'أنظمة صوتية تجيب على اتصالات العملاء بلباقة، وتجيب عن الأسئلة الشائعة، وتوجه المكالمات المهمة للمختصين.',
          ctaText: 'صمم وكيل المكالمات'
        },
        {
          id: 'content',
          label: 'أحتاج لمحتوى مرئي وتسويقي',
          serviceName: 'إنتاج الفيديو بالذكاء الاصطناعي',
          explanation: 'مقاطع فيديو تسويقية احترافية مولدة بالذكاء الاصطناعي لشرح الخدمات، وعرض المنتجات، وحملات شبكات التواصل.',
          ctaText: 'صمم فيديوهات لأعمالي'
        }
      ]
    },
    aboutPreview: {
      badge: 'نبذة عن الوكالة',
      heading: 'عن وكالة تيتان للذكاء الاصطناعي',
      intro: 'أسس سعد نعيم وكالة تيتان للذكاء الاصطناعي لمساعدة المنشآت والشركات على تعزيز تواجدها الرقمي وتطوير عملياتها اليومية عبر مواقع عالية الأداء وأدوات ذكاء اصطناعي وأتمتة عملية.',
      desc: 'بدلاً من الترويج للمصطلحات المعقدة أو الوعود المبالغ فيها، نركز على متطلبات العمل الفعلية: تشخيص الأماكن التي تضيع فيها أوقات فريقك، وبناء برمجيات موثوقة لمعالجتها، وتسليم أنظمة نظيفة ومستقرة تمتلكها منشأتك بالكامل.',
      cta: 'تعرف أكثر على تيتان والمؤسس سعد نعيم',
      cardTitle: 'أسلوب عملنا المباشر',
      tenets: [
        {
          num: '1',
          title: 'تواصل مباشر مع المؤسس',
          desc: 'تعمل مباشرة مع المؤسس سعد نعيم وفريق الهندسة دون وسطاء أو حواجز إدارية.'
        },
        {
          num: '2',
          title: 'هندسة برمجية عملية',
          desc: 'نختار التقنيات لحل تحديات حقيقية ومثبتة، وليس لمجرد مجاراة الموجات الإعلامية.'
        },
        {
          num: '3',
          title: 'عناية ومتابعة بعد الإطلاق',
          desc: '30 يوماً من الدعم الفني المجاني لضمان تشغيل كل نظام وتكامل بسلاسة تامة.'
        }
      ]
    },
    faqs: {
      badge: 'الأسئلة الشائعة',
      heading: 'إجابات واضحة لأصحاب الأعمال',
      subtitle: 'معلومات مفيدة حول الأسعار، ومدة التنفيذ، ودعم اللغتين، وملكية الموقع، والصيانة المستمرة.',
      items: [
        {
          question: 'كم تبلغ تكلفة إنشاء الموقع الإلكتروني؟',
          answer: 'تبدأ باقة الموقع الأساسي (Starter) لدينا من 500 ريال سعودي. بينما تُسعَّر الحلول الأكثر تقدماً بدقة بناءً على متطلبات ونطاق المشروع.'
        },
        {
          question: 'هل يشمل السعر حجز النطاق (الدومين)؟',
          answer: 'تُسعَّر رسوم تسجيل النطاق والخدمات السحابية والاشتراكات الخارجية المدفوعة بشكل منفصل، ما لم تُذكر صراحة ضمن مقترح المشروع المعتمد.'
        },
        {
          question: 'هل يمكنني تعديل وتحديث الموقع بعد إطلاقه؟',
          answer: 'نعم. تعتمد إمكانات تعديل الموقع على الباقة المتفق عليها. كما نوفر باقات صيانة ودعم فني اختيارية للعناية المستمرة بالموقع.'
        },
        {
          question: 'هل تطورون مواقع تدعم اللغتين العربية والإنجليزية؟',
          answer: 'نعم، يمكن تضمين تطوير المواقع باللغتين العربية والإنجليزية بشكل متكامل، اعتماداً على باقة واحتياجات المشروع المعتمدة.'
        },
        {
          question: 'هل يمكنني إضافة ميزات الذكاء الاصطناعي لاحقاً؟',
          answer: 'نعم، يمكن مناقشة وإضافة ميزات الذكاء الاصطناعي لاحقاً وتحديد تكلفتها بشكل منفصل وفقاً للجدوى الفنية لعملياتك.'
        },
        {
          question: 'هل تقدمون خدمات الصيانة والدعم الفني للمواقع؟',
          answer: 'نعم، تبدأ خدمات الصيانة والدعم الفني الاختيارية من 100 ريال سعودي شهرياً، مع تأكيد نطاق الدعم وحدود التحديثات بدقة في اتفاقية الخدمة.'
        },
        {
          question: 'هل يمتلك العميل الكود المصدري والموقع بالكامل؟',
          answer: 'نعم، بنسبة 100%. عند اكتمال المشروع وتسليمه، تمتلك شركتك كافة الأكواد البرمجية، وتصميمات الواجهات، والمحتوى. نؤمن بمبدأ عدم تقييد العميل (Zero Lock-in)، مما يمنحك الحرية الكاملة لاستضافة موقعك أو تطويره مستقبلاً كما تشاء.'
        },
        {
          question: 'ما هي المدة الزمنية لتسليم مشروع الموقع؟',
          answer: 'تستغرق معظم مواقع الأعمال المعتادة ما بين أسبوعين إلى 4 أسابيع، اعتماداً على تفاصيل التصميم وسرعة تبادل الملاحظات. أما المنصات الأكبر التي تتضمن مسارات عمل مخصصة أو تكاملات ذكاء اصطناعي فتستغرق عادة من 3 إلى 6 أسابيع.'
        }
      ]
    },
    finalCta: {
      badge: 'استشارة مباشرة مع المؤسس',
      heading: 'هل أنت مستعد لتطوير مستقبل أعمالك؟',
      subtitle: 'أخبرنا بالهدف الذي تريد تحقيقه، وسنساعدك في اختيار وتنفيذ الحل الرقمي الأمثل لأعمالك.',
      primaryBtn: 'ابدأ مشروعك معنا',
      whatsappBtn: 'تحدث عبر واتساب'
    },
    contact: {
      badge: 'تحديد متطلبات المشروع والتواصل',
      heading: 'ابدأ مشروعك معنا',
      subtitle: 'أخبرنا بالتحدي الذي ترغب في حله. سندرس متطلباتك ونقترح الحل الرقمي أو الذكي الأنسب لمنشأتك.',
      formSection1: '01 — معلومات التواصل والشركة',
      nameLabel: 'اسمك الكريم *',
      namePlaceholder: 'مثال: طارق المنصور',
      businessNameLabel: 'اسم المنشأة أو الشركة *',
      businessNamePlaceholder: 'مثال: مجموعة أفق العقارية',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'tariq@company.com',
      phoneLabel: 'رقم الجوال / واتساب *',
      phonePlaceholder: '+966 5X XXX XXXX',
      businessTypeLabel: 'مجال النشاط التجاري',
      businessTypePlaceholder: 'مثال: عقارات، عيادة، مطعم، خدمات استشارية',
      websiteLabel: 'رابط الموقع الحالي',
      websitePlaceholder: 'https://yourwebsite.com',
      optional: '(اختياري)',
      formSection2: '02 — ما هو الحل الذي تحتاجه؟ *',
      formSection3: '03 — التحدي الرئيسي في أعمالك *',
      challengePlaceholder: 'أخبرنا بالمشكلة التي تود حلها (مثال: نفقد اتصالات العملاء بعد أوقات الدوام، أو موقعنا لا يجلب عملاء جدد، أو نقضي ساعات يومياً في الرد على استفسارات متكررة).',
      budgetLabel: 'الميزانية التقديرية للمشروع (اختياري)',
      contactChannelLabel: 'قناة التواصل المفضلة',
      founderReview: 'مراجعة مباشرة من المؤسس · رد خلال 24 ساعة',
      submitBtn: 'إرسال تفاصيل المشروع',
      successTitle: 'تم إعداد تفاصيل طلبك بنجاح!',
      successDesc: 'طلبك جاهز. إذا لم يفتح تطبيق واتساب تلقائياً، اضغط على الزر أدناه لإرسال تفاصيل مشروعك مباشرة إلى المؤسس سعد نعيم.',
      sendWhatsappBtn: 'إرسال عبر واتساب'
    },
    footer: {
      desc: 'أسسها سعد نعيم. نطوّر مواقع إلكترونية، ومساعدين بالذكاء الاصطناعي، ووكلاء مكالمات، وحلول أتمتة تساعد الشركات على عرض خدماتها، والرد على الاستفسارات أسرع، وتقليل المهام المتكررة.',
      guarantee: 'نطاق عمل واضح ومكتوب · دعم مجاني لمدة 30 يوماً · ملكية كاملة للعميل بنسبة 100%',
      coreServicesTitle: 'الخدمات الأساسية',
      companyTitle: 'الشركة',
      directContactTitle: 'تواصل مباشر',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      pillar1: 'هندسة برمجية مباشرة مع المؤسس',
      pillar2: 'دعم تقني مجاني لمدة 30 يوماً',
      pillar3: 'ملكية تامة بنسبة 100% للشيفرة والأصول',
      whatsappConsultation: 'بدء استشارة فورية عبر واتساب'
    },
    floatingWhatsapp: {
      badge: 'واتساب تيتان الرسمي المباشر',
      tooltip: 'محادثة عبر واتساب',
      title: 'وكالة تيتان للذكاء الاصطناعي',
      directStatus: 'واتساب تيتان الرسمي المباشر',
      desc: 'هل لديك مشروع أو فكرة في بالك؟ تواصل مباشرة مع فريق تيتان عبر واتساب لمناقشة التفاصيل والحصول على تسعيرة واضحة.',
      fastReply: 'رد سريع ومباشر',
      openChat: 'فتح محادثة واتساب المباشرة',
      ariaLabel: 'تواصل مع تيتان عبر واتساب'
    },
    simplifiedServices: {
      badge: 'الخدمات الأساسية',
      heading: 'كل ما تحتاجه أعمالك للنمو رقمياً',
      subtitle: 'حلول رقمية ذكية ومباشرة تناسب الشركات في المملكة العربية السعودية. واضحة الفهم وسريعة الإطلاق.',
      learnMore: 'اعرف المزيد',
      viewAllServices: 'استعراض كافة التفاصيل والمواصفات',
      categories: {
        websites: {
          title: 'تطوير المواقع الإلكترونية',
          desc: 'مواقع سريعة ومصممة خصيصاً لعرض خدماتك، استقبال طلبات العملاء، وتحويل الزوار إلى مبيعات.',
          items: [
            'مواقع الشركات والأعمال',
            'مواقع العقارات والمشاريع',
            'أنظمة الحجز واستقبال الطلبات'
          ],
          route: '/services/website-design'
        },
        ai: {
          title: 'حلول الذكاء الاصطناعي',
          desc: 'مساعدين أذكياء للرد على العملاء على مدار الساعة، مكالمات هاتفية آلية، وأتمتة توفر وقت فريقك.',
          items: [
            'مساعدين أذكياء للمحادثة (AI Chat)',
            'وكلاء اتصال هاتفي صوتي (AI Calls)',
            'أتمتة الأعمال والربط مع واتساب'
          ],
          route: '/services/ai-agents'
        },
        marketing: {
          title: 'التسويق الرقمي',
          desc: 'تحسين ظهورك في قوقل وفيديوهات ترويجية جذابة لمساعدة العملاء في السعودية على العثور عليك.',
          items: [
            'تحسين محركات البحث (SEO)',
            'فيديوهات ترويجية بالذكاء الاصطناعي',
            'محتوى تسويقي متخصص'
          ],
          route: '/services/seo'
        }
      }
    },
    simplifiedPricing: {
      viewAllFeatures: 'عرض كافة الميزات',
      hideFeatures: 'إخفاء الميزات الإضافية',
      topFeaturesNotice: 'أهم ميزات الباقة. اضغط على الزر أدناه لمعاينة التفاصيل الكاملة.',
      aiCardTitle: 'حلول الذكاء الاصطناعي والأتمتة',
      aiCardSubtitle: 'مساعدين أذكياء ووكلاء اتصال صوتي وأتمتة مخصصة بالكامل وفق طبيعة عملك وبياناتك.',
      aiCardPrice: 'عرض سعر مخصص',
      aiCardBadge: 'نطاق مرن',
      aiCardFeatures: [
        'مساعدين أذكياء لخدمة العملاء (استجابة 24/7)',
        'وكلاء مكالمات هاتفية للحجوزات والاستفسارات',
        'أتمتة العمليات والربط بين النماذج وواتساب وCRM',
        'إنتاج فيديوهات ترويجية وتعليق صوتي بالذكاء الاصطناعي'
      ],
      aiCardCta: 'طلب تسعيرة ذكاء اصطناعي',
      maintenanceCardTitle: 'صيانة ورعاية المواقع',
      maintenanceCardSubtitle: 'عناية تقنية وتحديثات أمان مستمرة لضمان بقاء موقعك سريعاً وآمناً ومحدثاً باستمرار.',
      maintenanceCardPrice: 'ابتداءً من 100 ريال / شهرياً',
      maintenanceCardFeatures: [
        'تحديثات دورية لمنصة الموقع والأمان',
        'نسخ احتياطي شهري موثوق لقاعدة البيانات',
        'مراقبة مستمرة لاستقرار الموقع والروابط',
        'تعديلات طفيفة على النصوص والصور وأرقام التواصل'
      ],
      maintenanceCardCta: 'الاستفسار عن خطة الصيانة'
    },
    homepageContact: {
      badge: 'تواصل معنا',
      heading: 'دعنا نناقش مشروعك القادم',
      subtitle: 'أرسل تفاصيل مشروعك أو تواصل مباشرة مع المؤسس سعد نعيم عبر واتساب للحصول على استشارة وتسعيرة دقيقة.',
      cardTitle: 'احصل على عرض سعر مجاني',
      cardSubtitle: 'بدون نماذج معقدة. أخبرنا باحتياج عملك وسنرد عليك خلال ساعات.',
      nameLabel: 'الاسم الكريم *',
      namePlaceholder: 'مثال: طارق المنصور',
      phoneLabel: 'رقم الجوال / واتساب *',
      phonePlaceholder: '+966 5X XXX XXXX',
      serviceLabel: 'الخدمة المطلوبة *',
      servicePlaceholder: 'مثال: موقع Starter، مساعد ذكي، SEO',
      messageLabel: 'تفاصيل المشروع والهدف *',
      messagePlaceholder: 'أخبرنا باختصار عن عملك والهدف الذي ترغب في تحقيقه...',
      submitBtn: 'إرسال طلب المشروع',
      whatsappDirect: 'محادثة مباشرة عبر واتساب',
      whatsappDirectDesc: 'تفضل الرد الفوري المباشر؟ تواصل مباشرة مع المؤسس سعد نعيم عبر واتساب.',
      chatWhatsappBtn: 'فتح محادثة واتساب (+966 53 418 2945)',
      trustNote: 'هندسة برمجية مباشرة مع المؤسس · تسعير شفاف · دعم فني مجاني 30 يوماً'
    }
  }
};
