import { Project } from '../types/portfolio';

export const portfolioProjects: Project[] = [
  // 1. AI HADITH AUTHENTICATION SYSTEM ⭐ FLAGSHIP
  {
    id: 'ai-hadith-authentication',
    title: 'AI Hadith Authentication System',
    tagline: 'Full-Stack Islamic Text Classification with ML',
    description: 'Production Hadith authentication platform classifying 34,000+ narrations (Sahih, Hasan, Da\'if, Mawdu\') using Hugging Face transformers with OCR, ASR, and three-tier inference fallback.',
    longDescription: 'University final year project: Full-stack Flask platform with MongoDB/SQLite, Hugging Face ML model, multi-modal input (text/image OCR/audio ASR), bilingual Arabic/English interface, Quran reader, Sunnah.com API, Bcrypt authentication, and Docker deployment.',
    technologies: ['python', 'flask', 'mongodb', 'sqlite', 'huggingface', 'transformers', 'bert', 'ocr', 'asr', 'docker'],
    category: 'ai-ml',
    industry: 'research',
    featured: true,
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-12-15',
    icon: '🕌',
    accent: 'emerald',
    caseStudy: {
      problem: 'Islamic scholars need AI tools for authentic Hadith classification that understand Arabic religious text nuances.',
      solution: 'Built ML platform with 34K+ curated narrations, 3-tier inference, multi-modal input, and Islamic text API integration.',
      results: [
        { metric: 'Dataset', value: '34,000+ narrations', description: 'Curated authentic Hadith corpus' },
        { metric: 'Classifications', value: '4 types', description: 'Sahih, Hasan, Da\'if, Mawdu\'' },
        { metric: 'Input Modes', value: '3 supported', description: 'Text, Image OCR, Audio ASR' }
      ],
      metrics: [
        { label: 'Corpus Size', value: '34K+', change: 'Curated', positive: true },
        { label: 'Languages', value: '2', change: 'AR/EN', positive: true },
        { label: 'Inference', value: '3-tier', change: 'Fallback', positive: true }
      ],
      testimonial: 'Groundbreaking combination of Islamic scholarship and modern AI.'
    },
    media: {
      thumbnail: '/projects/ai-hadith-authentication/ai hadith authentication.png',
      gallery: [
        '/projects/ai-hadith-authentication/screenshots/classification-interface.jpg',
        '/projects/ai-hadith-authentication/screenshots/multi-modal-input.jpg',
        '/projects/ai-hadith-authentication/screenshots/quran-reader.jpg'
      ],
      demo: 'https://huggingface.co/spaces/abbasorakzai777/ai-hadith-authentication',
      repository: 'https://github.com/ZaheerAbbasOrakzai/ai-hadith-authentication'
    },
    seo: {
      slug: 'ai-hadith-authentication',
      metaTitle: 'AI Hadith Authentication System | Zaheer Abbas',
      metaDescription: 'Hadith classification ML platform: 34K+ narrations, Hugging Face transformers, OCR/ASR, Sunnah.com API.',
      keywords: ['hadith', 'islamic AI', 'arabic NLP', 'hugging face', 'OCR', 'ASR']
    }
  },

  // 2. AI URBAN NEXUS ⭐ FLAGSHIP
  {
    id: 'ai-urban-nexus',
    title: 'AI Urban Nexus',
    tagline: 'Smart City Platform: 3 ML Models + Google Maps',
    description: 'Flutter smart city app with YOLOv8 crime detection, XGBoost traffic (99.55% F1, 87K+ rows, 12 cities), LSTM energy forecast, Google Maps safe routing, Firebase real-time, and role-gated admin dashboards.',
    longDescription: 'University final year project: Cross-platform Flutter mobile integrating 3 Hugging Face ML backends. Traffic classifier trained on 87,000+ rows from 12 Pakistani cities (99.55% weighted F1). Features crime-aware safe routing, Firebase Cloud Messaging, offline fallback, and admin analytics.',
    technologies: ['flutter', 'dart', 'python', 'yolov8', 'xgboost', 'lstm', 'tensorflow', 'huggingface', 'firebase', 'google-maps'],
    category: 'mobile',
    industry: 'smart-cities',
    featured: true,
    status: 'completed',
    startDate: '2023-06-01',
    endDate: '2024-02-28',
    icon: '🌆',
    accent: 'cyan',
    caseStudy: {
      problem: 'Pakistani cities lack integrated smart infrastructure for crime monitoring, traffic management, and energy optimization with citizen-facing safe routing.',
      solution: 'Built Flutter app with 3 ML backends: YOLOv8 stolen vehicle detection, XGBoost traffic classification (12 cities data), LSTM energy forecasting. Google Maps safe routing, Firebase real-time, role-based dashboards.',
      results: [
        { metric: 'Traffic F1', value: '99.55%', description: 'Weighted F1 across 3 severity classes' },
        { metric: 'Dataset', value: '87,000+ rows', description: '12 Pakistani cities real-time data' },
        { metric: 'Models', value: '3 integrated', description: 'Crime, Traffic, Energy on Hugging Face' }
      ],
      metrics: [
        { label: 'Accuracy', value: '99.55%', change: 'F1 Score', positive: true },
        { label: 'Data Points', value: '87K+', change: '12 cities', positive: true },
        { label: 'ML Backends', value: '3', change: 'HF Hosted', positive: true }
      ],
      testimonial: 'AI Urban Nexus demonstrates scalable smart city intelligence for developing nations.'
    },
    media: {
      thumbnail: '/projects/ai-urban-nexus/ai urban nexus.png',
      gallery: [
        '/projects/ai-urban-nexus/screenshots/city-dashboard.jpg',
        '/projects/ai-urban-nexus/screenshots/smart-analytics.jpg',
        '/projects/ai-urban-nexus/screenshots/urban-planning.jpg'
      ],
      demo: 'https://huggingface.co/spaces/abbasorakzai777/ai-urban-nexus-pakistan',
      repository: 'https://github.com/ZaheerAbbasOrakzai/ai-urban-nexus'
    },
    seo: {
      slug: 'ai-urban-nexus-smart-city',
      metaTitle: 'AI Urban Nexus - Smart City Platform | Zaheer Abbas',
      metaDescription: 'Flutter smart city: YOLOv8, XGBoost 99.55% traffic F1, LSTM, 87K+ dataset, 12 Pakistani cities, Google Maps routing.',
      keywords: ['smart city', 'flutter', 'YOLOv8', 'XGBoost', 'LSTM', 'traffic prediction']
    }
  },

  // 3. HEALTH HUB
  {
    id: 'health-hub',
    title: 'Health Hub',
    tagline: 'AI-Powered Health & Wellness Platform',
    description: 'React 18 health management web app with Groq API (Llama 3.3, Qwen QwQ), AI-generated diet plans, Firebase authentication, and PDF report generation with rate-limiting for efficient API usage.',
    longDescription: 'Full-stack health management platform built with React 18, leveraging Groq API for AI-powered personalized diet plans using Llama 3.3 70B and Qwen QwQ 32B models. Features include user authentication via Firebase, PDF report generation, health metrics tracking, and intelligent rate-limiting for optimized API usage.',
    technologies: ['react', 'javascript', 'groq-api', 'llama', 'qwen', 'firebase', 'pdf-generation', 'material-ui'],
    category: 'web-app',
    industry: 'healthcare',
    featured: true,
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    icon: '🏥',
    accent: 'blue',
    caseStudy: {
      problem: 'Users need personalized health and diet recommendations but lack access to affordable AI-powered health consultation tools with professional-grade reporting.',
      solution: 'Built a React 18 web application integrating Groq API with Llama 3.3 70B and Qwen QwQ 32B models for intelligent diet plan generation. Implemented Firebase for secure authentication, PDF generation for professional reports, and rate-limiting to manage API costs efficiently.',
      results: [
        { metric: 'AI Models', value: '2 integrated', description: 'Llama 3.3 70B & Qwen QwQ 32B' },
        { metric: 'Rate Limiting', value: 'Implemented', description: 'Cost-efficient API usage' },
        { metric: 'Report Format', value: 'PDF Export', description: 'Professional health reports' }
      ],
      metrics: [
        { label: 'Tech Stack', value: 'React 18', change: 'Latest', positive: true },
        { label: 'Auth', value: 'Firebase', change: 'Secure', positive: true },
        { label: 'AI Backend', value: 'Groq API', change: 'Fast', positive: true }
      ],
      testimonial: 'Health Hub provides accessible AI-powered health insights with professional report generation.'
    },
    media: {
      thumbnail: '/projects/health-hub/04_HealthHub_AI.png',
      gallery: [
        '/projects/health-hub/screenshots/nutrition-dashboard.jpg',
        '/projects/health-hub/screenshots/ai-diet-planning.jpg',
        '/projects/health-hub/screenshots/health-metrics.jpg'
      ],
      repository: 'https://github.com/ZaheerAbbasOrakzai/health-hub'
    },
    seo: {
      slug: 'health-hub-ai-wellness',
      metaTitle: 'Health Hub - AI Health & Wellness Platform | Zaheer Abbas',
      metaDescription: 'React 18 health platform with Groq API (Llama 3.3, Qwen), AI diet plans, Firebase, PDF reports.',
      keywords: ['health tech', 'AI diet planning', 'Groq API', 'Llama 3.3', 'React 18', 'Firebase']
    }
  },
  // 4. PERSONAL FINANCIAL TRACKER
  {
    id: 'personal-financial-tracker',
    title: 'Personal Financial Tracker',
    tagline: 'Full-Stack Budget Management Platform',
    description: 'FastAPI + React 19 financial management web app with JWT authentication, budget alerts, expense tracking, Recharts data visualization, and Swagger API documentation.',
    longDescription: 'Comprehensive financial tracking platform built with FastAPI backend and React 19 frontend. Features include secure JWT authentication, real-time budget alerts, income/expense categorization, interactive Recharts visualizations, RESTful API with Swagger docs, and PostgreSQL database for reliable data persistence.',
    technologies: ['fastapi', 'python', 'react', 'typescript', 'jwt', 'postgresql', 'recharts', 'swagger', 'restapi'],
    category: 'web-app',
    industry: 'fintech',
    featured: true,
    status: 'completed',
    startDate: '2024-06-01',
    endDate: '2024-08-20',
    icon: '💰',
    accent: 'emerald',
    caseStudy: {
      problem: 'Individuals need comprehensive personal finance tracking tools with secure authentication, real-time budget monitoring, and intuitive data visualization for informed financial decisions.',
      solution: 'Developed full-stack platform with FastAPI backend providing JWT-secured RESTful endpoints documented via Swagger. React 19 frontend offers responsive UI with Recharts visualizations, automated budget alerts, and comprehensive expense categorization.',
      results: [
        { metric: 'Tech Stack', value: 'FastAPI + React 19', description: 'Modern full-stack architecture' },
        { metric: 'Security', value: 'JWT Auth', description: 'Token-based authentication' },
        { metric: 'Visualization', value: 'Recharts', description: 'Interactive financial charts' }
      ],
      metrics: [
        { label: 'API Docs', value: 'Swagger', change: 'Auto-gen', positive: true },
        { label: 'Frontend', value: 'React 19', change: 'Latest', positive: true },
        { label: 'Alerts', value: 'Real-time', change: 'Budget', positive: true }
      ],
      testimonial: 'Personal Financial Tracker provides professional-grade budget management with clean architecture and excellent UX.'
    },
    media: {
      thumbnail: '/projects/personal-financial-tracker/personal finance tracker.png',
      gallery: [
        '/projects/personal-financial-tracker/screenshots/financial-overview.jpg',
        '/projects/personal-financial-tracker/screenshots/expense-tracking.jpg',
        '/projects/personal-financial-tracker/screenshots/budget-analytics.jpg'
      ],
      repository: 'https://github.com/ZaheerAbbasOrakzai/Personal-Financial-Tracker'
    },
    seo: {
      slug: 'personal-financial-tracker',
      metaTitle: 'Personal Financial Tracker - Budget Management | Zaheer Abbas',
      metaDescription: 'FastAPI + React 19 financial tracker with JWT auth, budget alerts, Recharts visualization, Swagger API docs.',
      keywords: ['financial tracker', 'budget management', 'FastAPI', 'React 19', 'JWT', 'Recharts', 'fintech']
    }
  },
  // 5. SHARIA FINANCE ASSISTANT
  {
    id: 'sharia-finance-assistant',
    title: 'Sharia Finance Assistant',
    tagline: 'Islamic finance guidance assistant for compliant financial decisions',
    description: 'AI-powered finance assistant for Sharia-compliant guidance using structured Q&A flows, retrieval-aware responses, and a polished dashboard experience for users exploring halal finance decisions.',
    longDescription: 'Sharia Finance Assistant is a financial guidance assistant designed to support users with Sharia-compliant finance questions through a clean, trustworthy AI experience. Built with a modern web interface, retrieval-aware reasoning, and a dependable backend for structured Q&A and chat interactions focused on ethical finance guidance.',
    technologies: ['nextjs', 'typescript', 'tailwind', 'fastapi', 'python', 'postgresql', 'redis', 'llm', 'rag', 'vector-db'],
    category: 'web-app',
    industry: 'fintech',
    featured: true,
    status: 'completed',
    startDate: '2026-01-01',
    endDate: '2026-08-01',
    icon: '🕌',
    accent: 'violet',
    caseStudy: {
      problem: 'Users seeking Sharia-compliant financial guidance need a trustworthy, structured assistant that can explain compliance concepts clearly without mixing professionalism with uncertainty.',
      solution: 'Built a polished AI finance assistant with retrieval-aware assistance, modular backend services, and a clean front-end interface that supports guided decision support for Islamic finance topics.',
      results: [
        { metric: 'UX', value: 'Premium', description: 'Elegant, responsive interface' },
        { metric: 'Stack', value: 'Next.js + FastAPI', description: 'Modern full-stack product architecture' },
        { metric: 'Reasoning', value: 'RAG', description: 'Context-aware response flow' }
      ],
      metrics: [
        { label: 'Frontend', value: 'Next.js', change: 'Modern', positive: true },
        { label: 'Backend', value: 'FastAPI', change: 'Structured', positive: true },
        { label: 'AI Layer', value: 'RAG', change: 'Context-aware', positive: true }
      ],
      testimonial: 'A polished, trustworthy AI assistant for Islamic finance guidance and compliance-oriented discovery.'
    },
    media: {
      thumbnail: '/assets/images/sharia-finance-assistant.png',
      gallery: [
        '/assets/images/sharia-finance-assistant.png',
        '/assets/images/sharia-finance-assistant.png',
        '/assets/images/sharia-finance-assistant.png'
      ],
      demo: 'https://sharia-finance-assistant.vercel.app/',
      repository: 'https://github.com/ZaheerAbbasOrakzai/Sharia-Finance-Assistant'
    },
    seo: {
      slug: 'sharia-finance-assistant',
      metaTitle: 'Sharia Finance Assistant | Zaheer Abbas',
      metaDescription: 'AI-powered Sharia finance guidance assistant built with Next.js, FastAPI, and retrieval-aware reasoning.',
      keywords: ['sharia finance', 'islamic finance', 'AI assistant', 'RAG', 'Next.js', 'FastAPI']
    }
  },

  // 6. CHAT-BOOT FAQ CHATBOT
  {
    id: 'chat-boot-faq',
    title: 'chat-boot FAQ Chatbot',
    tagline: 'Semantic Search-Powered FAQ System',
    description: 'Intelligent FAQ chatbot using Sentence-Transformers for semantic search, Flask backend, and Streamlit interface for natural language question answering.',
    longDescription: 'Smart FAQ chatbot leveraging Sentence-Transformers for semantic similarity matching. Built with Flask backend for API endpoints and Streamlit for interactive web interface. Features intelligent question understanding, context-aware responses, and efficient similarity search for accurate FAQ retrieval.',
    technologies: ['python', 'sentence-transformers', 'flask', 'streamlit', 'nlp', 'semantic-search', 'embedding'],
    category: 'ai-ml',
    industry: 'education',
    featured: false,
    status: 'completed',
    startDate: '2023-09-01',
    endDate: '2023-11-30',
    icon: '💬',
    accent: 'violet',
    caseStudy: {
      problem: 'Traditional FAQ systems rely on exact keyword matching, failing to understand user intent and provide relevant answers when questions are phrased differently.',
      solution: 'Built semantic search chatbot using Sentence-Transformers to encode questions as embeddings. Flask backend handles API logic while Streamlit provides user-friendly interface. System understands question intent regardless of phrasing.',
      results: [
        { metric: 'Search Method', value: 'Semantic', description: 'Context-aware matching' },
        { metric: 'Backend', value: 'Flask API', description: 'RESTful endpoints' },
        { metric: 'Interface', value: 'Streamlit', description: 'Interactive web UI' }
      ],
      metrics: [
        { label: 'Model', value: 'S-BERT', change: 'Transformer', positive: true },
        { label: 'Accuracy', value: 'High', change: 'Intent', positive: true },
        { label: 'Deploy', value: 'Flask', change: 'Simple', positive: true }
      ],
      testimonial: 'chat-boot understands what users are asking, not just keywords, providing accurate FAQ answers consistently.'
    },
    media: {
      thumbnail: '/projects/chat-boot/10_NLP_Chatbot_RAG_LLM.png',
      gallery: [
        '/projects/chat-boot-faq/screenshots/chat-interface.jpg',
        '/projects/chat-boot-faq/screenshots/semantic-search.jpg',
        '/projects/chat-boot-faq/screenshots/faq-management.jpg'
      ],
      repository: 'https://github.com/ZaheerAbbasOrakzai/chat-boot'
    },
    seo: {
      slug: 'chat-boot-faq-semantic-search',
      metaTitle: 'chat-boot FAQ Chatbot - Semantic Search | Zaheer Abbas',
      metaDescription: 'Intelligent FAQ chatbot with Sentence-Transformers semantic search, Flask backend, Streamlit interface.',
      keywords: ['FAQ chatbot', 'semantic search', 'Sentence-Transformers', 'Flask', 'Streamlit', 'NLP']
    }
  },
  // 6. EVENTS MANAGEMENT APP
  {
    id: 'events-management-app',
    title: 'Events Management App',
    tagline: 'Cross-Platform Event Organization System',
    description: 'Flutter events management app supporting 6 platforms with Firebase backend, Cloudinary image management, and MIT License open-source distribution.',
    longDescription: 'Comprehensive cross-platform events management application built with Flutter, supporting iOS, Android, Web, Windows, macOS, and Linux. Features Firebase authentication and Firestore database, Cloudinary for image hosting and optimization, event creation/editing, attendee management, real-time updates, and responsive design. Released as open-source under MIT License.',
    technologies: ['flutter', 'dart', 'firebase', 'firestore', 'cloudinary', 'cross-platform', 'material-design'],
    category: 'mobile',
    industry: 'education',
    featured: false,
    status: 'completed',
    startDate: '2023-05-15',
    endDate: '2023-08-30',
    icon: '📅',
    accent: 'orange',
    caseStudy: {
      problem: 'Event organizers need a unified solution that works across all platforms (mobile, web, desktop) with reliable image management and real-time synchronization.',
      solution: 'Developed Flutter app with single codebase deploying to 6 platforms. Firebase provides authentication, real-time database, and hosting. Cloudinary handles image uploads, optimization, and CDN delivery. MIT License enables community contributions.',
      results: [
        { metric: 'Platforms', value: '6 supported', description: 'iOS, Android, Web, Windows, macOS, Linux' },
        { metric: 'Backend', value: 'Firebase', description: 'Real-time sync & auth' },
        { metric: 'License', value: 'MIT', description: 'Open-source contribution' }
      ],
      metrics: [
        { label: 'Codebase', value: 'Single', change: '6 platforms', positive: true },
        { label: 'Images', value: 'Cloudinary', change: 'CDN', positive: true },
        { label: 'Real-time', value: 'Firestore', change: 'Sync', positive: true }
      ],
      testimonial: 'Events Management App provides truly cross-platform event organization with excellent Firebase integration.'
    },
    media: {
      thumbnail: '/projects/events-management-app/events management.png',
      gallery: [
        '/projects/events-management-app/screenshots/event-dashboard.jpg',
        '/projects/events-management-app/screenshots/calendar-view.jpg',
        '/projects/events-management-app/screenshots/attendee-management.jpg'
      ],
      repository: 'https://github.com/ZaheerAbbasOrakzai/events-management'
    },
    seo: {
      slug: 'events-management-flutter-app',
      metaTitle: 'Events Management App - Cross-Platform | Zaheer Abbas',
      metaDescription: 'Flutter events app: 6 platforms, Firebase backend, Cloudinary images, MIT License open-source.',
      keywords: ['Flutter', 'events management', 'cross-platform', 'Firebase', 'Cloudinary', 'MIT License']
    }
  },
  // 7. SALON BOOKING APP
  {
    id: 'salon-booking-app',
    title: 'Salon Booking App',
    tagline: 'Full-Featured Salon Management System',
    description: 'Flutter salon booking application with 25+ routes, calendar scheduling, Riverpod state management, Provider architecture, fl_chart analytics, and Firebase backend integration.',
    longDescription: 'Comprehensive salon management mobile application built with Flutter. Features include appointment booking with calendar integration, 25+ navigation routes for complete workflow coverage, Riverpod and Provider for robust state management, fl_chart for business analytics visualization, Firebase authentication and Firestore database, service catalog, stylist profiles, and customer management system.',
    technologies: ['flutter', 'dart', 'riverpod', 'provider', 'fl_chart', 'firebase', 'firestore', 'calendar'],
    category: 'mobile',
    industry: 'e-commerce',
    featured: false,
    status: 'completed',
    startDate: '2023-02-10',
    endDate: '2023-06-25',
    icon: '💇',
    accent: 'pink',
    caseStudy: {
      problem: 'Salons need comprehensive booking systems with calendar management, analytics, and customer tracking, but existing solutions lack proper state management and scalability.',
      solution: 'Built Flutter app with 25+ routes covering all salon workflows. Riverpod and Provider ensure predictable state management. fl_chart provides analytics dashboards. Firebase handles authentication, data storage, and real-time updates. Calendar widget enables intuitive appointment scheduling.',
      results: [
        { metric: 'Routes', value: '25+', description: 'Comprehensive navigation coverage' },
        { metric: 'State Mgmt', value: 'Riverpod + Provider', description: 'Robust architecture' },
        { metric: 'Analytics', value: 'fl_chart', description: 'Business insights visualization' }
      ],
      metrics: [
        { label: 'Navigation', value: '25+ routes', change: 'Complete', positive: true },
        { label: 'Backend', value: 'Firebase', change: 'Real-time', positive: true },
        { label: 'Charts', value: 'fl_chart', change: 'Native', positive: true }
      ],
      testimonial: 'Salon Booking App provides professional-grade management with excellent state architecture and analytics.'
    },
    media: {
      thumbnail: '/projects/salon-app/salon booking app.png',
      gallery: [
        '/projects/salon-app/screenshots/booking-interface.jpg',
        '/projects/salon-app/screenshots/salon-dashboard.jpg',
        '/projects/salon-app/screenshots/analytics-charts.jpg'
      ],
      repository: 'https://github.com/ZaheerAbbasOrakzai/saloon-Booking-app'
    },
    seo: {
      slug: 'salon-booking-management-app',
      metaTitle: 'Salon Booking App - Management System | Zaheer Abbas',
      metaDescription: 'Flutter salon app: 25+ routes, calendar, Riverpod, Provider, fl_chart analytics, Firebase backend.',
      keywords: ['salon booking', 'Flutter', 'Riverpod', 'Provider', 'fl_chart', 'Firebase', 'appointment']
    }
  }
];

export const technologyLabels: Record<string, string> = {
  'react': 'React',
  'nextjs': 'Next.js',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'nodejs': 'Node.js',
  'python': 'Python',
  'tensorflow': 'TensorFlow',
  'pytorch': 'PyTorch',
  'aws': 'AWS',
  'docker': 'Docker',
  'kubernetes': 'Kubernetes',
  'mongodb': 'MongoDB',
  'postgresql': 'PostgreSQL',
  'sqlite': 'SQLite',
  'redis': 'Redis',
  'fastapi': 'FastAPI',
  'flask': 'Flask',
  'llm': 'LLM',
  'computer-vision': 'Computer Vision',
  'nlp': 'NLP',
  'transformers': 'Transformers',
  'huggingface': 'Hugging Face',
  'bert': 'BERT',
  'yolo': 'YOLO',
  'yolov8': 'YOLOv8',
  'xgboost': 'XGBoost',
  'lstm': 'LSTM',
  'opencv': 'OpenCV',
  'multi-agent': 'Multi-Agent',
  'rag': 'RAG',
  'vector-db': 'Vector DB',
  'firebase': 'Firebase',
  'firestore': 'Firestore',
  'vercel': 'Vercel',
  'tailwind': 'Tailwind CSS',
  'flutter': 'Flutter',
  'dart': 'Dart',
  'groq-api': 'Groq API',
  'llama': 'Llama',
  'qwen': 'Qwen',
  'pdf-generation': 'PDF Generation',
  'material-ui': 'Material-UI',
  'jwt': 'JWT',
  'recharts': 'Recharts',
  'swagger': 'Swagger',
  'restapi': 'REST API',
  'sentence-transformers': 'Sentence-Transformers',
  'streamlit': 'Streamlit',
  'semantic-search': 'Semantic Search',
  'embedding': 'Embeddings',
  'cloudinary': 'Cloudinary',
  'cross-platform': 'Cross-Platform',
  'material-design': 'Material Design',
  'riverpod': 'Riverpod',
  'provider': 'Provider',
  'fl_chart': 'FL Chart',
  'calendar': 'Calendar',
  'ocr': 'OCR',
  'asr': 'ASR',
  'google-maps': 'Google Maps'
};

export const categoryLabels: Record<string, string> = {
  'ai-ml': 'AI & Machine Learning',
  'web-app': 'Web Applications',
  'mobile': 'Mobile Applications',
  'infrastructure': 'Infrastructure',
  'research': 'Research Projects',
  'open-source': 'Open Source'
};

export const industryLabels: Record<string, string> = {
  'fintech': 'FinTech',
  'healthcare': 'Healthcare',
  'e-commerce': 'E-Commerce',
  'education': 'Education',
  'smart-cities': 'Smart Cities',
  'enterprise': 'Enterprise',
  'research': 'Research'
};