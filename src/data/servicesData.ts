import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'websites',
    title: 'Website Design & Development',
    category: 'Web Development',
    iconName: 'Globe',
    shortDescription:
      'Professional, responsive websites that present your business clearly and make it easy for customers to contact you.',
    overview:
      'We design and build clean, fast, and responsive websites tailored to your business goals. From modern corporate sites to conversion-focused landing pages, every website is engineered for excellent mobile performance, clean design, and effortless customer contact.',
    subcategories: [
      'Business websites',
      'Landing pages',
      'Service showcase sites',
      'Responsive design for all screens',
      'Contact & lead capture flows',
      'SEO & accessibility foundations'
    ],
    features: [
      'Modern, responsive layouts engineered for phones, tablets, and desktops',
      'Clear, high-converting calls to action and direct WhatsApp/enquiry routing',
      'Fast loading times optimized for real-world business visitors',
      'Clean typography, branded color palettes, and intuitive navigation',
      'Semantic structure prepared for search engines and Google Search Console',
      'Full source code ownership with easy ongoing maintenance'
    ],
    deliverables: [
      'Custom responsive website design and development',
      'Direct WhatsApp and enquiry integration',
      'Cross-device testing and performance check',
      'Google Search Console and XML sitemap setup',
      'Deployment to reliable cloud hosting',
      '30 days of post-launch support'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/Semantic Web'],
    typicalTimeline: 'Agreed upon project scoping'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    category: 'AI Assistants',
    iconName: 'Cpu',
    shortDescription:
      'AI assistants designed to help with specific business tasks and workflows.',
    overview:
      'We build purposeful AI assistants configured to handle repetitive operational tasks, retrieve verified business information, and assist your team in day-to-day operations with controlled guardrails.',
    subcategories: [
      'Task-specific assistants',
      'Document & knowledge lookup',
      'Operational support tools',
      'Internal workflow helpers',
      'Data extraction & summarization',
      'System integrations'
    ],
    features: [
      'Configured with strict business guardrails to prevent unverified answers',
      'Connected to your business documents, FAQs, and product knowledge',
      'Helps staff draft responses, search guidelines, and parse complex information',
      'Respects data security and operational privacy requirements',
      'Audit logs for oversight and ongoing system improvement',
      'Step-by-step human review options for sensitive tasks'
    ],
    deliverables: [
      'Configured AI assistant tailored to your specific task',
      'Knowledge base ingestion and structured prompt setup',
      'User-friendly interface or tool integration',
      'Staff operating guide and best practice guidelines',
      '30 days of post-launch support'
    ],
    technologies: ['TypeScript', 'Python', 'FastAPI', 'Retrieval Systems', 'REST APIs'],
    typicalTimeline: 'Agreed upon project scoping'
  },
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents',
    category: 'Voice Technology',
    iconName: 'PhoneCall',
    shortDescription:
      'Voice assistants for supported enquiry, appointment, and communication workflows.',
    overview:
      'We build low-latency voice assistants designed to handle structured customer calls, answer common questions, collect caller details, and route appointment requests efficiently.',
    subcategories: [
      'Inbound enquiry handling',
      'Appointment scheduling assistance',
      'Frequently asked questions on calls',
      'Caller details capture',
      'Call summary & notification routing',
      'Human handoff protocols'
    ],
    features: [
      'Natural, low-latency conversational speech interface',
      'Structured conversational flows designed for business clarity',
      'Automated caller details capture sent directly to your email or WhatsApp',
      'Clear fallback routing to your team for complex requests',
      'Call recording summaries and transcript generation',
      'Configured for your business operating hours and policies'
    ],
    deliverables: [
      'Telephony or web-voice configuration',
      'Custom dialogue flow and conversational scripts',
      'Notification triggers for team follow-up',
      'Testing across common caller scenarios',
      '30 days of post-launch support'
    ],
    technologies: ['Speech Processing', 'WebRTC', 'FastAPI', 'Telephony Gateways', 'Node.js'],
    typicalTimeline: 'Agreed upon project scoping'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    category: 'Conversational AI',
    iconName: 'MessageSquare',
    shortDescription:
      'Conversational assistants that answer common questions and collect enquiries.',
    overview:
      'Engage website visitors 24/7 with a conversational assistant grounded in your business knowledge. Answer common questions instantly, qualify customer interest, and capture verified contact enquiries directly.',
    subcategories: [
      'Website customer assistants',
      'FAQ resolution',
      'Lead and enquiry capture',
      'Service guides and recommendations',
      'Business hours and location info',
      'Direct WhatsApp redirection'
    ],
    features: [
      'Answers common questions based strictly on your official business data',
      'Interactive enquiry capture collecting customer needs and contact details',
      'Clean branded widget matching your website design',
      'Direct one-tap WhatsApp escalation when visitors prefer chatting with you',
      'Works seamlessly on mobile phones and desktop computers',
      'Weekly summaries of frequent visitor questions to help refine your copy'
    ],
    deliverables: [
      'Embeddable chat widget customized for your brand',
      'Knowledge base ingestion and approved response sets',
      'Instant notification setup (WhatsApp/Email) when a lead arrives',
      'Testing across mobile and desktop environments',
      '30 days of post-launch support'
    ],
    technologies: ['React Widget', 'Semantic Search', 'REST APIs', 'Webhooks'],
    typicalTimeline: 'Agreed upon project scoping'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'Process Workflows',
    iconName: 'Workflow',
    shortDescription:
      'Connected workflows that reduce repetitive tasks and keep information moving between tools.',
    overview:
      'Eliminate manual data copying and slow follow-ups. We connect your website, CRM, messaging tools, and internal software so enquiries are routed instantly and notifications reach the right team member immediately.',
    subcategories: [
      'Enquiry & lead routing',
      'Cross-tool data sync',
      'Instant WhatsApp/Email notifications',
      'Customer intake automation',
      'Document & invoice generation triggers',
      'Repetitive task reduction'
    ],
    features: [
      'Enquiries from your website flow automatically to your phone or CRM',
      'Instant notifications sent when an urgent client request arrives',
      'Eliminates duplicate manual data entry across multiple applications',
      'Robust error-checking so no customer request gets silently dropped',
      'Clear logs so you can see every action taken by the workflow',
      'Scales cleanly as your enquiry volume grows'
    ],
    deliverables: [
      'Workflow architecture blueprint and process map',
      'Configured integrations between your business tools',
      'End-to-end testing with sample customer workflows',
      'Alert channels for any system exceptions',
      '30 days of post-launch support'
    ],
    technologies: ['Serverless Functions', 'Webhooks', 'REST APIs', 'Node.js', 'Zapier/Make/Custom'],
    typicalTimeline: 'Agreed upon project scoping'
  },
  {
    id: 'custom-ai-solutions',
    title: 'Custom AI Solutions',
    category: 'Custom Engineering',
    iconName: 'Layers',
    shortDescription:
      'Tailored systems developed around your business requirements.',
    overview:
      'When standard off-the-shelf software doesn’t fit your workflow, we engineer custom digital solutions and AI tools built around your exact operational needs, data formats, and team structure.',
    subcategories: [
      'Custom web applications',
      'Bespoke operational dashboards',
      'Proprietary data parsing tools',
      'Specialized client portals',
      'Internal team tools',
      'Bespoke software architecture'
    ],
    features: [
      'Built specifically around your real business workflows and operational constraints',
      'Modern, intuitive user interfaces that require minimal training for your team',
      'Secure architecture respecting your business privacy and proprietary data',
      'Clean, maintainable source code owned entirely by your business',
      'Designed to adapt and evolve as your company expands',
      'Direct collaboration with our engineering team throughout development'
    ],
    deliverables: [
      'Full architectural scoping and requirement specification',
      'Custom developed application or software module',
      'Cross-device responsive interface and secure backend',
      'Full source code and deployment handover',
      '30 days of post-launch support'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Cloud APIs'],
    typicalTimeline: 'Agreed upon project scoping'
  }
];
