export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    missionVision: string;
    blog: string;
    contact: string;
    startProject: string;
    whatsapp: string;
    switchLang: string;
    currentLangName: string;
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
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      missionVision: 'Mission & Vision',
      blog: 'Blog',
      contact: 'Contact',
      startProject: 'Start Your Project',
      whatsapp: '+966 53 418 2945',
      switchLang: 'العربية',
      currentLangName: 'EN'
    },
    hero: {
      badge: 'AI Solutions for Modern Businesses',
      headlineLine1: 'Professional Websites.',
      headlineLine2: 'Practical AI for Your Business.',
      supportingText: 'We build websites, AI assistants, call agents, and automation to help you showcase your business, answer enquiries, and reduce repetitive work.',
      primaryButton: 'Discuss Your Project',
      secondaryButton: 'Explore Our Work',
      serviceLine: {
        websites: 'Websites',
        seo: 'SEO',
        aiAgents: 'AI Agents',
        callAgents: 'AI Call Agents',
        aiVideo: 'AI Video'
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
      label: 'OUR SERVICES',
      heading: 'AI Solutions Built to Grow Your Business',
      supportingText: 'From intelligent websites to AI-powered automation, Titan AI Agency builds modern digital solutions designed for real business growth.',
      exploreDetails: 'Explore Service',
      popularBadge: 'Popular',
      cards: {
        websites: {
          title: 'AI Websites',
          desc: 'Fast, modern and intelligent websites designed to turn visitors into customers.',
          tags: ['Responsive Design', 'AI Integration', 'Fast Performance']
        },
        seo: {
          title: 'SEO',
          desc: 'Improve your visibility on search engines and help more customers discover your business.',
          tags: ['Search Optimization', 'Local SEO', 'Performance']
        },
        agents: {
          title: 'AI Agents',
          desc: 'Smart AI agents that can support customers, automate tasks and help manage business workflows.',
          tags: ['Customer Support', 'Lead Handling', 'Automation']
        },
        calls: {
          title: 'AI Call Agents',
          desc: 'AI voice agents designed to answer calls, communicate with customers and handle common inquiries.',
          tags: ['AI Voice', 'Call Handling', '24/7 Assistance']
        },
        video: {
          title: 'AI Video',
          desc: 'Professional AI-generated video content for advertising, social media and business marketing.',
          tags: ['Marketing Videos', 'Social Content', 'AI Production']
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
      heading: 'FROM BUSINESS PROBLEM TO WORKING SOLUTION',
      subtitle: 'A clear, step-by-step process designed to build practical solutions for your business without unnecessary complexity.',
      steps: [
        {
          num: '01',
          title: 'DISCOVER',
          desc: 'We learn about your business, customers, challenges and goals.',
          badge: 'Discovery Sprint'
        },
        {
          num: '02',
          title: 'PLAN',
          desc: 'We identify the right AI, website, search or content solution.',
          badge: 'Architecture'
        },
        {
          num: '03',
          title: 'BUILD',
          desc: 'TITAN designs, develops and integrates the solution.',
          badge: 'Engineering'
        },
        {
          num: '04',
          title: 'LAUNCH & SUPPORT',
          desc: 'We test the system, launch it and provide support after delivery.',
          badge: 'Go-Live & 30-Day Support'
        }
      ]
    },
    useCases: {
      badge: 'Industry Solutions',
      heading: 'BUILT AROUND YOUR BUSINESS TYPE',
      subtitle: 'Whether you run a service business, hospitality venue, clinic, or consultancy, TITAN tailors technology to your daily operating realities.',
      industries: [
        {
          id: 'real-estate',
          name: 'Real Estate',
          headline: 'Automated Property Marketing & High-Intent Lead Capture',
          desc: 'Capture and qualify property buyers and tenants 24/7 without manual telephone bottlenecks.',
          items: [
            'Property website with interactive listings and virtual previews',
            'Property inquiry AI agent answering questions on price, location, and specs',
            'Automated lead qualification capturing buyer budget and timeline',
            'AI call handling for after-hours telephone inquiries',
            'Property promotional videos for social media reels & web showcases',
            'Local and technical SEO ensuring local property search discovery'
          ]
        },
        {
          id: 'salons',
          name: 'Salons & Clinics',
          headline: 'Effortless Appointment Scheduling & Routine Call Reduction',
          desc: 'Allow clients to book treatments and verify operating times instantly while your staff focuses on service.',
          items: [
            'Professional branded website showcasing treatments and staff credentials',
            'Real-time appointment booking synchronized with calendars',
            'Customer AI assistant answering pricing, services, and policies',
            'AI call agent taking incoming booking calls during busy salon hours',
            'Local SEO and Google Maps optimization for nearby customer discovery',
            'Social video content showcasing transformations and client testimonials'
          ]
        },
        {
          id: 'restaurants',
          name: 'Restaurants',
          headline: 'Dynamic Menu Presentations & Automated Table Inquiries',
          desc: 'Eliminate missed reservation calls during dinner rushes with responsive telephone and web assistants.',
          items: [
            'Modern culinary business website with mobile-first menu hierarchy',
            'Interactive menu showcase with dietary indicators and pricing',
            'Reservation system integration for instant table requests',
            'AI customer assistant answering location, parking, and event questions',
            'Call support agent picking up incoming telephone queries',
            'Promotional videos spotlighting signature dishes across social platforms'
          ]
        },
        {
          id: 'professional-services',
          name: 'Professional Services',
          headline: 'Authority-Building Lead Generation & Calendar Management',
          desc: 'Position your firm as an industry authority and automatically qualify consultative prospects.',
          items: [
            'Executive corporate website reflecting high-trust brand credentials',
            'Automated consultation request forms with qualifying screening',
            'AI research assistant indexing practice areas and publications',
            'Telephone answering voice agent handling business inquiries',
            'Authoritative SEO targeting high-value commercial search terms',
            'Corporate thought-leadership videos for LinkedIn and website'
          ]
        }
      ]
    },
    whyTitan: {
      badge: 'Core Principles',
      heading: 'WHY WORK WITH TITAN AI AGENCY?',
      subtitle: 'We build digital systems that deliver tangible operational value, designed for real businesses that value clarity and reliability.',
      points: [
        {
          num: '01',
          title: 'BUSINESS-FIRST',
          desc: 'We start with the problem, not the technology.',
          detail: 'Technology without business purpose is wasted capital. We examine repetitive tasks that take up your time first and only build what delivers real value for your business.'
        },
        {
          num: '02',
          title: 'CUSTOM SOLUTIONS',
          desc: 'Every solution is designed around the needs of the business.',
          detail: 'We do not force rigid cookie-cutter templates. Systems are built around your real team structure, customer queries, and operating requirements.'
        },
        {
          num: '03',
          title: 'CONNECTED TECHNOLOGY',
          desc: 'Websites, AI, search, voice and video can work together.',
          detail: 'Instead of five disconnected vendors, TITAN unifies your digital presence into one cohesive lead-generation and operational pipeline.'
        },
        {
          num: '04',
          title: 'MODERN EXPERIENCE',
          desc: 'Professional design and modern technology without unnecessary complexity.',
          detail: 'Clean typography, fast performance, intuitive customer navigation, and zero bloated software that your team will abandon.'
        },
        {
          num: '05',
          title: 'SUPPORT AFTER LAUNCH',
          desc: 'We help clients understand and manage what we build.',
          detail: 'Every project includes 30 days of dedicated free support, comprehensive team walkthroughs, and 100% client code and IP ownership.'
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
          serviceName: 'AI-Powered Websites',
          explanation: 'We create modern, fast, conversion-focused websites that combine professional design with built-in AI chatbots, lead capture, and WhatsApp routing.',
          ctaText: 'BUILD MY WEBSITE'
        },
        {
          id: 'visibility',
          label: 'I NEED MORE VISIBILITY',
          serviceName: 'SEO & AI Search Optimization',
          explanation: 'Help high-value clients discover your business across traditional search engines (Google) and modern AI discovery engines (ChatGPT, Perplexity, Gemini).',
          ctaText: 'IMPROVE MY VISIBILITY'
        },
        {
          id: 'automate',
          label: 'I WANT TO AUTOMATE TASKS',
          serviceName: 'Custom AI Agents',
          explanation: 'We build specialized AI agents designed to handle customer interactions, retrieve internal company documents, and eliminate routine manual work.',
          ctaText: 'BUILD MY AI AGENT'
        },
        {
          id: 'calls',
          label: 'I NEED HELP HANDLING CALLS',
          serviceName: 'AI Call Agents',
          explanation: 'Build AI-powered voice systems that answer customer calls, answer common questions, qualify inquiries, book appointments, and escalate to humans.',
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
      subtitle: 'Everything you need to know about partnering with TITAN AI AGENCY, project scopes, and post-launch support.',
      items: [
        {
          question: 'What services does TITAN AI AGENCY provide?',
          answer: 'TITAN AI AGENCY provides five core services: Website Design & Development, AI Agents for autonomous task assistance, AI Voice Agents for phone call handling, Search Optimization (SEO) for Google and AI platforms, and AI Video Creation for promotional content.'
        },
        {
          question: 'Can you redesign or upgrade an existing website?',
          answer: 'Yes. We can modernize your current website to elevate its corporate design, optimize it for mobile speed, improve local search visibility, and integrate automated enquiry workflows like direct WhatsApp routing.'
        },
        {
          question: 'Can you build custom solutions for specific industries?',
          answer: 'Yes. Our websites, conversational assistants, and automated workflows are tailored to your unique operational processes. Whether you run real estate, medical clinics, hospitality, or consulting, we build around your specific constraints.'
        },
        {
          question: 'How is project pricing determined?',
          answer: 'Project pricing is based strictly on your written scope and required functionality. Before development begins, we agree on a transparent milestone schedule with fixed pricing. There are no surprise fees or hidden costs.'
        },
        {
          question: 'What support is provided after launch?',
          answer: 'Every completed project includes 30 days of complimentary post-launch support to resolve any questions and verify that all integrations perform smoothly. Ongoing maintenance packages are also available.'
        },
        {
          question: 'How do we get started?',
          answer: 'Getting started is straightforward. Message us directly on WhatsApp at +966 53 418 2945 with a brief summary of what you want to achieve. Founder Saad Naeem will review your request and outline clear next steps.'
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
    }
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      missionVision: 'الرسالة والرؤية',
      blog: 'المدونة',
      contact: 'تواصل معنا',
      startProject: 'ابدأ مشروعك',
      whatsapp: '+966 53 418 2945',
      switchLang: 'EN',
      currentLangName: 'العربية'
    },
    hero: {
      badge: 'حلول الذكاء الاصطناعي للشركات الحديثة',
      headlineLine1: 'مواقع إلكترونية احترافية.',
      headlineLine2: 'وحلول ذكاء اصطناعي لأعمالك.',
      supportingText: 'نطوّر مواقع إلكترونية ومساعدين بالذكاء الاصطناعي ووكلاء للمكالمات وحلول أتمتة تساعدك على عرض خدماتك والرد على الاستفسارات وتقليل المهام المتكررة.',
      primaryButton: 'ناقش مشروعك معنا',
      secondaryButton: 'استعرض أعمالنا',
      serviceLine: {
        websites: 'مواقع إلكترونية',
        seo: 'تحسين محركات البحث SEO',
        aiAgents: 'وكلاء ذكاء اصطناعي',
        callAgents: 'وكلاء مكالمات',
        aiVideo: 'فيديو بالذكاء الاصطناعي'
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
      label: 'خدماتنا',
      heading: 'حلول ذكاء اصطناعي مصممة لتنمية أعمالك',
      supportingText: 'من المواقع الذكية إلى الأتمتة المتقدمة، نبني حلولاً رقمية حديثة تحقق نمواً حقيقياً لأعمالك.',
      exploreDetails: 'تفاصيل الخدمة',
      popularBadge: 'الأكثر طلباً',
      cards: {
        websites: {
          title: 'مواقع بالذكاء الاصطناعي',
          desc: 'مواقع سريعة وعصرية وذكية مصممة لتحويل الزوار إلى عملاء دائمين.',
          tags: ['تصميم متجاوب', 'تكامل الذكاء الاصطناعي', 'أداء فائق السرعة']
        },
        seo: {
          title: 'تحسين محركات البحث SEO',
          desc: 'عزز ظهورك في محركات البحث وساعد المزيد من العملاء في العثور على نشاطك التجاري.',
          tags: ['تهيئة البحث', 'سيو محلي', 'تحسين الأداء']
        },
        agents: {
          title: 'وكلاء الذكاء الاصطناعي',
          desc: 'وكلاء أذكياء لدعم العملاء، أتمتة المهام اليومية، وإدارة تدفقات العمل بكفاءة.',
          tags: ['خدمة العملاء', 'إدارة العملاء المهتمين', 'أتمتة الأعمال']
        },
        calls: {
          title: 'وكلاء الاتصال بالذكاء الاصطناعي',
          desc: 'وكلاء صوتيون ذكيون للرد على المكالمات الهاتفية، والتواصل مع العملاء، والإجابة عن الاستفسارات الشائعة.',
          tags: ['صوت ذكي طبيعي', 'معالجة المكالمات', 'متاح 24/7']
        },
        video: {
          title: 'فيديو بالذكاء الاصطناعي',
          desc: 'محتوى مرئي احترافي مولد بالذكاء الاصطناعي للإعلانات ومنصات التواصل والتسويق التجاري.',
          tags: ['فيديوهات تسويقية', 'محتوى اجتماعي', 'إنتاج احترافي بالذكاء الاصطناعي']
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
      heading: 'من فكرة التحدي إلى حل تقني يعمل',
      subtitle: 'خطوات عمل منظمة ومدروسة تضمن بناء حلول رقمية عملية لأعمالك دون تعقيد غير مبرر.',
      steps: [
        {
          num: '01',
          title: 'الاستكشاف والفهم',
          desc: 'نتعرف بعمق على طبيعة عملك، وعملائك، والتحديات اليومية التي تواجه فريقك.',
          badge: 'جلسة استكشافية'
        },
        {
          num: '02',
          title: 'التخطيط والهيكلة',
          desc: 'نحدد الحل الأنسب سواء كان موقعاً إلكترونياً، أو وكيلاً ذكياً، أو مسار أتمتة متكاملاً.',
          badge: 'التخطيط الهندسي'
        },
        {
          num: '03',
          title: 'التطوير والتنفيذ',
          desc: 'يقوم فريق تيتان بتصميم وتطوير النظام وربطه مع أدواتك الحالية وفق أعلى معايير الجودة.',
          badge: 'التطوير البرمجي'
        },
        {
          num: '04',
          title: 'الإطلاق والدعم المستمر',
          desc: 'نختبر النظام بالكامل، ونطلقه رسمياً، ونوفر دعماً تقنياً مجانياً لمدة 30 يوماً بعد الإطلاق.',
          badge: 'إطلاق ودعم 30 يوماً'
        }
      ]
    },
    useCases: {
      badge: 'حلول مخصصة للقطاعات',
      heading: 'حلول مصممة وفق طبيعة نشاطك التجاري',
      subtitle: 'سواء كنت تدير شركة عقارية، أو عيادة، أو مطعماً، أو شركة استشارية، نوائم تقنياتنا مع واقع عملك اليومي.',
      industries: [
        {
          id: 'real-estate',
          name: 'العقارات',
          headline: 'تسويق عقاري مؤتمت واستقبال فوري للمستثمرين المهتمين',
          desc: 'استقبل استفسارات المشترين والمستأجرين على مدار الساعة وافرز طلباتهم دون تأخير.',
          items: [
            'موقع عقاري متطور مع عرض تفاعلي للوحدات وتصفح المخططات',
            'وكيل ذكاء اصطناعي يجيب على أسئلة الأسعار والمواقع والمساحات',
            'تأهيل آلي للعملاء وتحديد الميزانية وفترة الشراء المتوقعة',
            'وكيل مكالمات صوتية لتلقي الاتصالات الهاتفية خارج أوقات العمل الرسمية',
            'فيديوهات ترويجية للعقارات مناسبة للنشر في ريلز وشبكات التواصل',
            'تهيئة محركات البحث لضمان العثور على عقاراتك في منطقتك'
          ]
        },
        {
          id: 'salons',
          name: 'الصالونات والعيادات',
          headline: 'جدولة حجوزات سهلة وتخفيف ضغط الاتصالات اليومية',
          desc: 'مكّن العملاء من حجز المواعيد ومعرفة أوقات العمل فورياً ليتفرغ فريقك لتقديم الخدمة.',
          items: [
            'موقع تعريفي احترافي يستعرض الخدمات والكوادر المعتمدة',
            'نظام حجز مواعيد فوري متزامن مباشرة مع جداول العمل',
            'مساعد محادثة ذكي يجيب على أسئلة الأسعار والخدمات والشروط',
            'وكيل مكالمات صوتية لتلقي اتصالات الحجز أثناء انشغال الكادر',
            'تهيئة سيو محلي وخرائط جوجل لزيادة زوار العيادة أو الصالون',
            'محتوى مرئي تسويقي يعرض نتائج الخدمات وآراء العملاء'
          ]
        },
        {
          id: 'restaurants',
          name: 'المطاعم والمقاهي',
          headline: 'عرض ذكي لقائمة الطعام واستقبال حجوزات الطاولات تلقائياً',
          desc: 'تجنب فقدان حجوزات الطاولات في ساعات الذروة بمساعدين صوتيين وتفاعليين فائقي السرعة.',
          items: [
            'موقع عصري وسريع للهواتف يعرض القائمة والأسعار بوضوح',
            'قائمة طعام تفاعلية تشمل المكونات ومسببات الحساسية',
            'ربط نظام الحجوزات لتلقي طلبات الطاولات على الفور',
            'مساعد ذكي للرد على أسئلة الفروع والمواقف والفعاليات',
            'وكيل صوتي للرد على الاتصالات والاستفسارات الهاتفية الشائعة',
            'مقاطع فيديو ترويجية تبرز الأطباق المميزة على شبكات التواصل'
          ]
        },
        {
          id: 'professional-services',
          name: 'الخدمات المهنية والشركات',
          headline: 'بناء المصداقية واستقطاب العملاء وتنسيق المواعيد تلقائياً',
          desc: 'رسخ مكانة منشأتك كمرجع موثوق في مجالك وأهّل الاستفسارات الاستشارية آلياً.',
          items: [
            'موقع تنفيذي يعكس ريادة شركتك وموثوقية خدماتك أمام العملاء',
            'نماذج طلب استشارة مؤتمتة تفرز وتحدد متطلبات العميل مسبقاً',
            'مساعد ذكاء اصطناعي مفهرس لمجالات الخبرة والمقالات المتخصصة',
            'وكيل مكالمات صوتي يستقبل اتصالات الأعمال ويوجهها للشخص المناسب',
            'تهيئة متقدمة لمحركات البحث تستهدف الكلمات التجارية الأكثر أهمية',
            'مقاطع فيديو تعزز القيادة الفكرية لشركتك على لينكد إن والموقع'
          ]
        }
      ]
    },
    whyTitan: {
      badge: 'مبادئنا الأساسية',
      heading: 'لماذا تختار الشراكة مع وكالة تيتان؟',
      subtitle: 'نبني أنظمة رقمية تحقق عائداً ملموساً لأعمالك، مصممة لأصحاب الأعمال الذين يقدرون الوضوح والموثوقية.',
      points: [
        {
          num: '01',
          title: 'الأعمال أولاً',
          desc: 'نبدأ من فهم التحدي التجاري، وليس من التقنية لمجرد التقنية.',
          detail: 'التقنية بدون هدف تجاري استنزاف للموارد. ندرس أولاً المهام المتكررة التي تضيع وقتك، ونبني فقط ما يضيف قيمة حقيقية وقابلة للقياس لأعمالك.'
        },
        {
          num: '02',
          title: 'حلول مخصصة',
          desc: 'كل نظام نصممه مصمم خصيصاً ليناسب احتياجات منشأتك.',
          detail: 'لا نفرض قوالب جاهزة ومستهلكة. نبني حلولنا لتتناسب تماماً مع هيكل فريقك، وطبيعة استفسارات عملائك، وأسلوب تشغيلك اليومي.'
        },
        {
          num: '03',
          title: 'تقنيات مترابطة',
          desc: 'المواقع، والذكاء الاصطناعي، والبحث، والأنظمة الصوتية تعمل معاً كمنظومة متكاملة.',
          detail: 'بدلاً من تشتيت أعمالك بين عدة جهات، توحد تيتان تواجدك الرقمي في مسار تشغيلي وتسويقي واحد متماسك وفعال.'
        },
        {
          num: '04',
          title: 'تجربة عصرية سلسة',
          desc: 'تصميم احترافي وتقنيات متقدمة بعيداً عن التعقيد الزائد.',
          detail: 'خطوط واضحة، وسرعة فائقة، وسهولة تصفح لعملائك، دون برمجيات ثقيلة قد يصعب على فريقك استخدامها.'
        },
        {
          num: '05',
          title: 'دعم كامل بعد الإطلاق',
          desc: 'نساعدك على فهم وإدارة كل ما نبنيه لك بكل ثقة.',
          detail: 'يشمل كل مشروع 30 يوماً من الدعم التقني المجاني، وتدريباً كاملاً لفريقك، مع ملكية كاملة بنسبة 100% للشيفرة البرمجية والأصول.'
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
          serviceName: 'مواقع بالذكاء الاصطناعي',
          explanation: 'نطوّر مواقع حديثة وسريعة مصممة لزيادة التحويلات والمبيعات مع مساعد آلي مدمج وتوجيه سريع لاستفسارات واتساب.',
          ctaText: 'ابنِ موقعي الإلكتروني'
        },
        {
          id: 'visibility',
          label: 'أحتاج لزيادة الظهور والوصول للعملاء',
          serviceName: 'تحسين محركات البحث والذكاء الاصطناعي',
          explanation: 'ساعد العملاء في العثور على شركتك عبر محركات البحث التقليدية (جوجل) ومنصات البحث بالذكاء الاصطناعي (ChatGPT وغيرها).',
          ctaText: 'عزز ظهور شركتي'
        },
        {
          id: 'automate',
          label: 'أريد أتمتة المهام اليومية المتكررة',
          serviceName: 'وكلاء الذكاء الاصطناعي المخصصون',
          explanation: 'نبني وكلاء أذكياء للتعامل مع استفسارات العملاء، والبحث في مستندات الشركة، والتخلص من الأعمال الروتينية المستنزفة للوقت.',
          ctaText: 'صمم وكيل الذكاء الاصطناعي'
        },
        {
          id: 'calls',
          label: 'أحتاج للمساعدة في الرد على الاتصالات',
          serviceName: 'وكلاء المكالمات الصوتية بالذكاء الاصطناعي',
          explanation: 'أنظمة صوتية تجيب على اتصالات العملاء بلباقة، وتجيب عن الأسئلة، وتحجز المواعيد، وتحول الحالات الخاصة لموظفيك.',
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
      heading: 'إجابات واضحة ومباشرة لأصحاب الأعمال',
      subtitle: 'كل ما تحتاج لمعرفته حول التعاون مع تيتان، ونطاق المشاريع، والدعم الفني بعد التسليم.',
      items: [
        {
          question: 'ما هي الخدمات الرئيسية التي تقدمها وكالة تيتان؟',
          answer: 'نقدم خمس خدمات أساسية: تصميم وتطوير المواقع الإلكترونية، وكلاء الذكاء الاصطناعي للمهام والمحادثات، وكلاء المكالمات الهاتفية الصوتية، تحسين محركات البحث والظهور في منصات الذكاء الاصطناعي، وإنتاج مقاطع الفيديو بالذكاء الاصطناعي.'
        },
        {
          question: 'هل يمكنكم إعادة تصميم أو تطوير موقعنا الحالي؟',
          answer: 'نعم بالتأكيد. يمكننا تحديث موقعك الحالي لترقية تصميمه، وتسريعه على الهواتف الذكية، وتحسين ظهوره في محركات البحث، وربطه بمسارات تواصل ذكية مثل واتساب المباشر.'
        },
        {
          question: 'هل تبنون حلولاً مخصصة لقطاعات وتخصصات معينة؟',
          answer: 'نعم. نصمم المواقع والمساعدين ومسارات الأتمتة لتتناسب مع إجراءات عملك بدقة، سواء في العقارات، أو المراكز الطبية والعيادات، أو المطاعم، أو الشركات الاستشارية والخدمية.'
        },
        {
          question: 'كيف يتم تحديد تكلفة المشروع؟',
          answer: 'تُحدد التكلفة بناءً على نطاق العمل المكتوب والوظائف المطلوبة تحديداً. نتفق قبل بدء التطوير على جدول تسليمات واضح وتكلفة ثابتة وشفافة بمراحل محددة دون أي رسوم مفاجئة.'
        },
        {
          question: 'ما هو الدعم المقدم بعد إطلاق المشروع؟',
          answer: 'يتضمن كل مشروع مكتمل 30 يوماً من الدعم التقني المجاني للإجابة عن الاستفسارات والتأكد من عمل كافة عمليات التكامل بشكل مثالي، مع توفر باقات صيانة شهرية اختيارية لمن يرغب.'
        },
        {
          question: 'كيف نبدأ التعاون معكم؟',
          answer: 'البدء سهل ومباشر. راسلنا مباشرة عبر واتساب على الرقم 966534182945+ مع ملخص موجز لما تود تنفيذه، وسيقوم المؤسس سعد نعيم بمراجعة متطلباتك ومناقشة الحل الأنسب وتوضيح الخطوات التالية.'
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
    }
  }
};
