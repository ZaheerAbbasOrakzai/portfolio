export interface TimelineMilestone {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  roleType: 'education' | 'engineering' | 'research' | 'freelance';
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  relatedProjectIds: string[];
}

export const engineeringTimeline: TimelineMilestone[] = [
  {
    id: 'comsats-graduation',
    year: '2026',
    period: 'Completed January 2026',
    title: 'Bachelor of Science, Computer Science',
    organization: 'COMSATS University Islamabad',
    roleType: 'education',
    location: 'Islamabad, Pakistan',
    summary: 'Completed undergraduate degree in Computer Science focusing on Artificial Intelligence, Machine Learning, Data Structures, Distributed Systems, and Mobile Software Architecture.',
    highlights: [
      'Comprehensive study of Algorithms, Operating Systems, Database Design, and Computer Networks',
      'Developed 2 major multi-model Final Year capstone platforms: AI Hadith Authentication & AI Urban Nexus',
      'Active researcher in practical Arabic Natural Language Processing and urban telemetry'
    ],
    technologies: ['Algorithms', 'Data Structures', 'Machine Learning', 'Computer Networks', 'Operating Systems'],
    relatedProjectIds: ['ai-hadith-authentication', 'ai-urban-nexus']
  },
  {
    id: 'ai-research-capstone',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'Final Year Project Lead: Multi-Modal AI Systems',
    organization: 'COMSATS University Islamabad / Academic Research',
    roleType: 'research',
    location: 'Islamabad, Pakistan',
    summary: 'Conducted in-depth applied ML engineering across two domain-specific production projects: Islamic text classification (34K+ narrations) and smart city telemetry (87K+ records from 12 cities).',
    highlights: [
      'Trained Hugging Face transformer models for Hadith authenticity classification with 3-tier inference fallback and Arabic OCR/ASR',
      'Engineered AI Urban Nexus with 3 integrated ML backends: YOLOv8 vehicle detection, XGBoost traffic (99.55% weighted F1), and LSTM power forecasting',
      'Integrated real-time Google Maps safe routing and Firebase Cloud Messaging within cross-platform Flutter clients'
    ],
    technologies: ['Hugging Face', 'Transformers', 'YOLOv8', 'XGBoost', 'LSTM', 'Flutter', 'Flask', 'Docker'],
    relatedProjectIds: ['ai-hadith-authentication', 'ai-urban-nexus']
  },
  {
    id: 'open-source-agent-lab',
    year: '2024 – Present',
    period: '2024 – Present',
    title: 'Open Source AI & Systems Engineer',
    organization: 'Independent Engineering / GitHub Ecosystem',
    roleType: 'engineering',
    location: 'Remote',
    summary: 'Authored and published 48 public repositories spanning decentralized mesh networking, mechanistic transformer interpretability, hybrid RAG evaluation, and multi-agent coordination frameworks.',
    highlights: [
      'Architected Meshline Android: offline-first BLE mesh messenger and PTT walkie-talkie with ECDH + AES-256-GCM encryption',
      'Built Transformer Internals Lab: mechanistic interpretability suite featuring QKV heatmaps and logit lens projections',
      'Engineered Hybrid RAG Eval: dual-path retrieval (BM25 + Dense) with Reciprocal Rank Fusion and RAG Triad benchmarks',
      'Developed AgentMesh: typed tool dispatch and coordination mesh for autonomous multi-agent systems'
    ],
    technologies: ['Kotlin', 'BLE Mesh', 'PyTorch', 'LangChain', 'LangGraph', 'FastAPI', 'Next.js', 'ChromaDB'],
    relatedProjectIds: ['meshline-android', 'transformer-internals-lab', 'Hybrid-RAG-Eval', 'AgentMesh', 'Sharia-Finance-Assistant']
  },
  {
    id: 'freelance-fullstack-dev',
    year: '2023 – Present',
    period: '2023 – Present',
    title: 'Full-Stack Software & AI Developer',
    organization: 'Technical Consulting & Freelance',
    roleType: 'freelance',
    location: 'Remote',
    summary: 'Delivered custom full-stack web platforms, Flutter mobile apps, and LLM-powered business integrations for private clients.',
    highlights: [
      'Built Health Hub: clinical nutrition platform featuring Groq LLM API with custom rate limiting and PDF reports',
      'Developed Personal Financial Tracker: FastAPI + React 19 web app with JWT authentication, budget alerts, and Recharts analytics',
      'Delivered Salon Booking App: 25+ navigation routes, Riverpod state architecture, and fl_chart business metrics',
      'Published cross-platform event management app with Firebase and Cloudinary'
    ],
    technologies: ['React 18/19', 'Next.js', 'FastAPI', 'Flutter', 'Firebase', 'PostgreSQL', 'Tailwind CSS'],
    relatedProjectIds: ['health-hub', 'Personal-Financial-Tracker', 'saloon-Booking-app', 'events-management']
  }
];
