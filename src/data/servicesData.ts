import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'websites',
    title: 'Websites',
    category: 'Digital Infrastructure',
    iconName: 'Globe',
    shortDescription: 'Modern, responsive, professional websites built around the needs of a business.',
    overview: 'High-performance web applications and corporate websites engineered for clarity, speed, and cross-platform reliability. Every site is built with modern frontend architecture and clean typography.',
    subcategories: [
      'Business websites',
      'Landing pages',
      'E-commerce websites',
      'Custom websites',
      'Responsive design',
      'Modern UI/UX'
    ],
    features: [
      'Engineered with modern frameworks (React, Next.js, Vite)',
      'Fully responsive fluid layouts tailored for all screen viewports',
      'Search engine optimized semantic HTML and structured schema',
      'Sub-second initial load speeds and Core Web Vitals optimization',
      'Accessible UI compliant with WCAG accessibility standards',
      'Secure content management system (CMS) integrations'
    ],
    deliverables: [
      'Custom UI/UX component design system',
      'Fully tested production codebase',
      'Cross-device responsive test suites',
      'Analytics and conversion tracking setup',
      'Deployment pipeline & hosting configuration'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Node.js'],
    typicalTimeline: '2 - 6 weeks depending on scale'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    category: 'Intelligent Systems',
    iconName: 'Cpu',
    shortDescription: 'Custom AI agents designed to handle specific tasks and workflows.',
    overview: 'Autonomous and semi-autonomous software agents that execute multi-step business logic, reason over complex internal documents, and integrate with your existing operational software.',
    subcategories: [
      'Custom AI agents',
      'Task automation',
      'Business assistants',
      'Workflow agents',
      'Information processing',
      'Custom integrations'
    ],
    features: [
      'Custom-configured tool-calling and API execution logic',
      'Retrieval-Augmented Generation (RAG) over internal databases',
      'Deterministic guardrails ensuring output precision and compliance',
      'Role-based security protocols for enterprise data protection',
      'Continuous audit logging of agent decision trees and actions',
      'Seamless multi-platform integration (CRMs, ERPs, messaging)'
    ],
    deliverables: [
      'Domain-adapted AI agent runtime',
      'Custom tool & API connector bridge',
      'Evaluation benchmarks & accuracy harness',
      'Real-time observability dashboard',
      'Operational playbook & security documentation'
    ],
    technologies: ['Python', 'TypeScript', 'LangChain/LlamaIndex', 'PostgreSQL/Vector', 'REST/gRPC APIs'],
    typicalTimeline: '3 - 8 weeks'
  },
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents',
    category: 'Voice Technology',
    iconName: 'PhoneCall',
    shortDescription: 'AI-powered voice assistants for business communication and customer interactions.',
    overview: 'Natural, ultra-low-latency voice interfaces that manage inbound phone calls, schedule client appointments, and triage customer queries with human-grade conversational flow.',
    subcategories: [
      'AI phone assistants',
      'Voice-based customer interactions',
      'Appointment handling',
      'Customer inquiries',
      'Call automation'
    ],
    features: [
      'Ultra-low latency speech-to-speech interaction loops (<600ms)',
      'Realistic acoustic models with interruption handling (barge-in)',
      'Direct synchronization with calendar and booking engines',
      'Automated caller verification and CRM record lookup',
      'Intelligent transfer protocols to human team members',
      'Full call transcription, sentiment tagging, and summary logs'
    ],
    deliverables: [
      'Telephony gateway connection (SIP / WebRTC)',
      'Custom conversational prompt & dialogue engine',
      'Calendar and database integration endpoints',
      'Real-time call transcription & analysis pipeline',
      'Live fallback routing system'
    ],
    technologies: ['WebRTC', 'Streaming STT/TTS', 'FastAPI', 'Telephony APIs', 'Node.js'],
    typicalTimeline: '3 - 6 weeks'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    category: 'Conversational AI',
    iconName: 'MessageSquare',
    shortDescription: 'Intelligent chatbots for websites, customer support, inquiries, and lead collection.',
    overview: 'Precision-tuned conversational interfaces deployed on websites and client portals to answer inquiries, collect qualified leads, and resolve frequent support requests 24/7.',
    subcategories: [
      'Website chatbots',
      'Customer support',
      'Business information',
      'Lead collection',
      'Automated conversations'
    ],
    features: [
      'Grounded strictly in verified business knowledge bases',
      'Dynamic interactive lead capture and qualification questionnaires',
      'Seamless ticket escalation to human support agents',
      'Multi-language detection and localized conversational response',
      'Embeddable widget customized to match exact brand aesthetics',
      'Weekly automated query insight reports identifying user trends'
    ],
    deliverables: [
      'Lightweight embeddable web chat widget',
      'Knowledge ingestion pipeline & vector index',
      'Lead capture webhook directly to CRM/Email',
      'Admin monitoring and analytics interface',
      'Custom response styling & brand integration'
    ],
    technologies: ['React Widget', 'Vector DB', 'Semantic Search', 'Webhooks', 'Express/FastAPI'],
    typicalTimeline: '2 - 4 weeks'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'Process Engineering',
    iconName: 'Workflow',
    shortDescription: 'Automated workflows that reduce repetitive manual work and connect business processes.',
    overview: 'End-to-end process automation architectures connecting disparate software tools, synchronizing data silos, and eliminating repetitive manual copy-paste bottlenecks.',
    subcategories: [
      'Workflow automation',
      'Repetitive task automation',
      'Data processing',
      'Notifications',
      'Connecting different business systems'
    ],
    features: [
      'Bidirectional data synchronization across CRMs, ERPs, and spreadsheets',
      'Automated document extraction, parsing, and structured filing',
      'Event-driven instant alert systems via Slack, Teams, Email, or SMS',
      'Resilient retry logic and idempotent transaction handling',
      'Zero manual data re-entry across sales, finance, and operations',
      'Comprehensive error telemetry and automated exception routing'
    ],
    deliverables: [
      'Custom microservice connectors and webhook handlers',
      'Process mapping and logic workflow blueprints',
      'Automated data sanitization and validation pipeline',
      'Monitoring alerts and failure notification channels',
      'Architecture documentation & maintenance guide'
    ],
    technologies: ['Serverless', 'Message Queues', 'REST APIs', 'Node.js', 'Python', 'Webhooks'],
    typicalTimeline: '2 - 5 weeks'
  },
  {
    id: 'custom-ai-solutions',
    title: 'Custom AI Solutions',
    category: 'Specialized Engineering',
    iconName: 'Layers',
    shortDescription: 'Custom AI-powered systems and tools designed for specific business requirements.',
    overview: 'Bespoke computational models, domain-specific algorithms, and custom analytical systems engineered when off-the-shelf software and standard services cannot meet exact organizational needs.',
    subcategories: [
      'Custom AI solutions',
      'Proprietary model fine-tuning',
      'Specialized enterprise tools',
      'Custom internal dashboards',
      'Predictive computation engines',
      'Bespoke data processing pipelines'
    ],
    features: [
      'Tailored model architecture adapted to proprietary business data',
      'Custom analytical dashboards with interactive visualizations',
      'Private cloud or on-premise infrastructure deployment options',
      'End-to-end data pipeline from raw ingestion to model inferencing',
      'Rigorous security compliance matching enterprise governance standards',
      'Modular architecture engineered for future technological iteration'
    ],
    deliverables: [
      'Custom machine learning or inferencing pipeline',
      'Bespoke frontend dashboard or command center',
      'Isolated cloud deployment architecture',
      'Full source code, API keys, and model weights',
      'Technical team training and system handoff documentation'
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Docker', 'Kubernetes', 'FastAPI', 'React'],
    typicalTimeline: '4 - 12 weeks'
  }
];
