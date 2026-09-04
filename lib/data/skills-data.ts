export interface SkillItem {
  id: string;
  name: string;
  category: string;
  icon?: string;
  projectCount: number;
  projectIds: string[];
}

export interface SkillDomain {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: 'ai-ml',
    name: 'Machine Learning & Deep Learning',
    description: 'Core ML architectures, optimization algorithms, custom loss functions, and neural frameworks.',
    skills: [
      { id: 'pytorch', name: 'PyTorch', category: 'ai-ml', projectCount: 5, projectIds: ['transformer-internals-lab', 'market-forecast-ensemble', 'AI-KidneyTumor-DeepClassifier-v1.0', 'ml-from-scratch-plus', 'AI-GoldPrice-ForecastingSystem-v1.0'] },
      { id: 'tensorflow', name: 'TensorFlow / Keras', category: 'ai-ml', projectCount: 2, projectIds: ['ai-urban-nexus', 'AI-KidneyTumor-DeepClassifier-v1.0'] },
      { id: 'xgboost', name: 'XGBoost & LightGBM', category: 'ai-ml', projectCount: 2, projectIds: ['ai-urban-nexus', 'market-forecast-ensemble'] },
      { id: 'scikit-learn', name: 'Scikit-Learn', category: 'ai-ml', projectCount: 3, projectIds: ['AI-GoldPrice-ForecastingSystem-v1.0', 'market-forecast-ensemble', 'ai-urban-nexus'] },
      { id: 'numpy', name: 'NumPy & Autograd', category: 'ai-ml', projectCount: 3, projectIds: ['ml-from-scratch-plus', 'transformer-internals-lab', 'ml-foundations-lab'] },
      { id: 'time-series', name: 'Time-Series (GRU / ARIMA)', category: 'ai-ml', projectCount: 3, projectIds: ['market-forecast-ensemble', 'ai-urban-nexus', 'AI-GoldPrice-ForecastingSystem-v1.0'] }
    ]
  },
  {
    id: 'llm-rag',
    name: 'LLMs, RAG & Generative AI',
    description: 'Retrieval-Augmented Generation, synthetic dataset engineering, attention interpretability, and Groq/Llama deployment.',
    skills: [
      { id: 'rag', name: 'RAG Architecture (Hybrid / BM25 / Dense)', category: 'llm-rag', projectCount: 5, projectIds: ['Sharia-Finance-Assistant', 'Hybrid-RAG-Eval', 'scholarsync', 'nexusdesk', 'chat-boot'] },
      { id: 'transformers', name: 'Hugging Face Transformers', category: 'llm-rag', projectCount: 4, projectIds: ['ai-hadith-authentication', 'transformer-internals-lab', 'DataForge-LLM', 'chat-boot'] },
      { id: 'vector-db', name: 'Vector DBs (FAISS / ChromaDB)', category: 'llm-rag', projectCount: 3, projectIds: ['Sharia-Finance-Assistant', 'Hybrid-RAG-Eval', 'scholarsync'] },
      { id: 'groq-llama', name: 'Groq Cloud / Llama 3.3 / Qwen', category: 'llm-rag', projectCount: 2, projectIds: ['health-hub', 'DataForge-LLM'] },
      { id: 'interpretability', name: 'Mechanistic Interpretability', category: 'llm-rag', projectCount: 2, projectIds: ['transformer-internals-lab', 'ml-from-scratch-plus'] },
      { id: 'data-curation', name: 'Synthetic Instruction Curation', category: 'llm-rag', projectCount: 2, projectIds: ['DataForge-LLM', 'ai-hadith-authentication'] }
    ]
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI & Orchestration',
    description: 'Multi-agent coordination, goal decomposition, consensus loops, and typed tool dispatch.',
    skills: [
      { id: 'langchain', name: 'LangChain & LangGraph', category: 'agentic-ai', projectCount: 8, projectIds: ['sentinel-market-intelligence', 'aegis-code-linter', 'datalens', 'briefingbot', 'marketmind', 'scholarsync', 'socraticai', 'launchpad'] },
      { id: 'crewai', name: 'CrewAI Framework', category: 'agentic-ai', projectCount: 3, projectIds: ['correspoai', 'wayfareai', 'voiceamplify'] },
      { id: 'multi-agent', name: 'Agent Coordination Mesh', category: 'agentic-ai', projectCount: 4, projectIds: ['AgentMesh', 'socraticai', 'autonomous-agent-framework', 'sentinel-market-intelligence'] },
      { id: 'tool-dispatch', name: 'Typed Tool Calling & Pydantic', category: 'agentic-ai', projectCount: 3, projectIds: ['AgentMesh', 'queryforge', 'triageai'] }
    ]
  },
  {
    id: 'computer-vision-nlp',
    name: 'Computer Vision & Natural Language',
    description: 'Real-time object detection, OCR, speech recognition, and domain text classification.',
    skills: [
      { id: 'yolov8', name: 'YOLOv8 & OpenCV', category: 'computer-vision-nlp', projectCount: 2, projectIds: ['ai-urban-nexus', 'AI-KidneyTumor-DeepClassifier-v1.0'] },
      { id: 'ocr-asr', name: 'Arabic OCR & Whisper ASR', category: 'computer-vision-nlp', projectCount: 2, projectIds: ['ai-hadith-authentication', 'minutemind'] },
      { id: 'arabic-nlp', name: 'Arabic NLP & Text Mining', category: 'computer-vision-nlp', projectCount: 2, projectIds: ['ai-hadith-authentication', 'Sharia-Finance-Assistant'] },
      { id: 'semantic-search', name: 'Sentence-Transformers', category: 'computer-vision-nlp', projectCount: 3, projectIds: ['chat-boot', 'AI-SmartATS-ResumeOptimizer-v1.0', 'Hybrid-RAG-Eval'] }
    ]
  },
  {
    id: 'mobile-fullstack',
    name: 'Mobile, Full-Stack & Systems',
    description: 'Production Android & Flutter engineering, modern React/Next.js, FastAPI backends, and offline mesh protocols.',
    skills: [
      { id: 'flutter', name: 'Flutter & Dart', category: 'mobile-fullstack', projectCount: 3, projectIds: ['ai-urban-nexus', 'saloon-Booking-app', 'events-management'] },
      { id: 'android-ble', name: 'Kotlin, Jetpack Compose & BLE', category: 'mobile-fullstack', projectCount: 1, projectIds: ['meshline-android'] },
      { id: 'react-next', name: 'Next.js & React 18/19', category: 'mobile-fullstack', projectCount: 4, projectIds: ['Sharia-Finance-Assistant', 'health-hub', 'Personal-Financial-Tracker', 'portfolio'] },
      { id: 'fastapi-flask', name: 'FastAPI & Flask', category: 'mobile-fullstack', projectCount: 4, projectIds: ['Sharia-Finance-Assistant', 'Personal-Financial-Tracker', 'ai-hadith-authentication', 'chat-boot'] },
      { id: 'databases', name: 'PostgreSQL, MongoDB & Firebase', category: 'mobile-fullstack', projectCount: 5, projectIds: ['Personal-Financial-Tracker', 'ai-hadith-authentication', 'health-hub', 'saloon-Booking-app', 'events-management'] },
      { id: 'security', name: 'Cryptography & PII Governance', category: 'mobile-fullstack', projectCount: 3, projectIds: ['meshline-android', 'vaultguard', 'Sharia-Finance-Assistant'] }
    ]
  }
];
