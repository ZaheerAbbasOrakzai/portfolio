export interface ProjectRecord {
  id: string;
  name: string;
  repoName: string;
  tier: 'flagship' | 'featured' | 'lab' | 'agent' | 'supporting';
  category: 
    | 'ai-ml' 
    | 'generative-ai' 
    | 'llm-rag' 
    | 'agentic-ai' 
    | 'computer-vision' 
    | 'nlp' 
    | 'data-science' 
    | 'time-series' 
    | 'mobile' 
    | 'web-app' 
    | 'security' 
    | 'research' 
    | 'open-source' 
    | 'tools';
  categoryLabel: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  technologies: string[];
  metrics?: { label: string; value: string; detail?: string }[];
  githubUrl: string;
  demoUrl?: string;
  huggingFaceUrl?: string;
  thumbnail: string;
  isArtworkFallback?: boolean;
  gallery?: string[];
  status: 'completed' | 'active' | 'research' | 'archived';
  stars: number;
  language: string;
  updatedAt: string;
  relatedProjects: string[];
}

export const projectTiers = [
  { id: 'all', label: 'All Tiers' },
  { id: 'flagship', label: 'Flagship Systems' },
  { id: 'featured', label: 'Featured Implementations' },
  { id: 'agent', label: 'Autonomous Agents' },
  { id: 'lab', label: 'Applied AI Labs' },
  { id: 'supporting', label: 'Supporting Infrastructure' }
] as const;

export const projectCategories = [
  { id: 'all', label: 'All Domains' },
  { id: 'ai-ml', label: 'Core AI & ML' },
  { id: 'agentic-ai', label: 'Agentic Systems' },
  { id: 'llm-rag', label: 'LLM & RAG' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'mobile', label: 'Mobile & IoT' },
  { id: 'security', label: 'Security & Tools' }
] as const;

export const projectsRegistry: ProjectRecord[] = [
  {
    "id": "meshline-android",
    "name": "Meshline Android",
    "repoName": "meshline-android",
    "tier": "flagship",
    "category": "mobile",
    "categoryLabel": "Mobile & Secure Networking",
    "shortDescription": "Offline-first, end-to-end encrypted (ECDH + AES-256-GCM) Bluetooth Mesh messenger and PTT Walkie-Talkie for Android.",
    "description": "An offline-first, decentralized communication platform built with Kotlin and Jetpack Compose. Meshline enables text messaging and Push-To-Talk (PTT) audio over multi-hop Bluetooth Low Energy (BLE) mesh topologies without requiring cellular connectivity or central servers. Implements forward-secure ECDH key exchange and AES-256-GCM message encryption.",
    "problem": "Disaster zones, remote outdoor environments, and privacy-sensitive operations frequently suffer from total cellular network collapse or surveillance vulnerabilities.",
    "solution": "Engineered a decentralized BLE mesh layer allowing peer nodes to relay encrypted payloads across multiple hops. Combined with hardware-accelerated OPUS voice compression for real-time walkie-talkie functionality.",
    "architecture": [
      "Android Jetpack Compose Modern UI Layer",
      "BLE Mesh Protocol Engine & Dynamic Neighbor Discovery",
      "Cryptography: ECDH Curve25519 Key Agreement + AES-256-GCM",
      "Audio Pipeline: Low-latency AudioRecord + OPUS Codec streaming",
      "Local Persistence: Room DB with SQLCipher encryption"
    ],
    "technologies": [
      "Kotlin",
      "Jetpack Compose",
      "BLE",
      "Bluetooth Mesh",
      "Cryptography",
      "AES-256",
      "ECDH",
      "Android",
      "Room DB",
      "Coroutines"
    ],
    "metrics": [
      {
        "label": "Encryption",
        "value": "AES-256-GCM",
        "detail": "End-to-End Cryptography"
      },
      {
        "label": "Key Agreement",
        "value": "ECDH Curve25519",
        "detail": "Forward Secrecy"
      },
      {
        "label": "Network Mode",
        "value": "Multi-Hop BLE",
        "detail": "Zero Cellular Dependency"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/meshline-android",
    "thumbnail": "/assets/images/ai_networking.png",
    "status": "active",
    "stars": 1,
    "language": "Kotlin",
    "updatedAt": "2026-08-21",
    "relatedProjects": [
      "vaultguard",
      "events-management",
      "ai-urban-nexus"
    ]
  },
  {
    "id": "ai-hadith-authentication",
    "name": "AI Hadith Authentication System",
    "repoName": "ai-hadith-authentication",
    "tier": "flagship",
    "category": "nlp",
    "categoryLabel": "NLP & Islamic ML",
    "shortDescription": "Multi-modal Hadith classification system evaluating 34,000+ narrations across Sahih, Hasan, and Da'if categories with 3-tier inference fallback.",
    "description": "A comprehensive Islamic text classification and research platform combining Arabic Natural Language Processing with classical Hadith scholarship. Features multi-modal input processing (text, OCR for manuscript images, and ASR for speech queries) and integrates the Sunnah.com API with Sahih al-Bukhari reference cross-examination.",
    "problem": "Researchers and students navigating vast Arabic religious texts need reliable authenticity verification with verified chain-of-narration attribution without hallucinations.",
    "solution": "Trained Hugging Face transformer models on a curated corpus of 34,000+ authentic Hadith narrations. Implemented a robust 3-tier inference architecture: Primary HF Transformer -> Inference Endpoint API -> Rule-based Sanad Analysis fallback.",
    "architecture": [
      "Flask / Python RESTful Inference Microservice",
      "Hugging Face AraBERT & Transformer Fine-Tuned Checkpoints",
      "Multi-Modal Ingestion: Tesseract Arabic OCR + Whisper ASR",
      "Source Cross-Referencing via Sunnah.com Scholarly API",
      "Containerized with Docker & Nginx reverse proxy"
    ],
    "technologies": [
      "Python",
      "Flask",
      "Hugging Face",
      "Transformers",
      "BERT",
      "Arabic NLP",
      "OCR",
      "ASR",
      "MongoDB",
      "Docker"
    ],
    "metrics": [
      {
        "label": "Corpus Size",
        "value": "34,000+",
        "detail": "Curated Authentic Hadith Texts"
      },
      {
        "label": "Inference Tiers",
        "value": "3-Tier Fallback",
        "detail": "Guaranteed Availability"
      },
      {
        "label": "Input Modalities",
        "value": "Text / OCR / ASR",
        "detail": "Multi-Modal Processing"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/ai-hadith-authentication",
    "demoUrl": "https://huggingface.co/spaces/abbasorakzai777/ai-hadith-authentication",
    "huggingFaceUrl": "https://huggingface.co/spaces/abbasorakzai777/ai-hadith-authentication",
    "thumbnail": "/projects/financial-tracker/02_AI_Hadith_Authenticator.png",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-20",
    "relatedProjects": [
      "Sharia-Finance-Assistant",
      "scholarsync",
      "chat-boot"
    ]
  },
  {
    "id": "ai-urban-nexus",
    "name": "AI Urban Nexus",
    "repoName": "ai-urban-nexus",
    "tier": "flagship",
    "category": "computer-vision",
    "categoryLabel": "Smart Cities & Multi-Model AI",
    "shortDescription": "Smart city platform with YOLOv8 crime detection, 99.55% F1 traffic classification across 12 cities, and Google Maps safe routing.",
    "description": "Cross-platform Flutter mobile application integrating three independent machine learning backends hosted on Hugging Face: real-time crime/stolen vehicle recognition using YOLOv8, road traffic congestion classification achieving 99.55% weighted F1 across 87,000+ records from 12 Pakistani cities, and LSTM energy demand forecasting.",
    "problem": "Rapidly expanding urban centers face compounding traffic gridlock, safety blindspots, and unpredictable power demand without integrated civic intelligence tools.",
    "solution": "Designed an integrated Flutter client that synchronizes with three cloud-hosted ML services, calculating optimal emergency paths using Google Maps Distance Matrix and Firebase Cloud Messaging for instant civic alerts.",
    "architecture": [
      "Flutter Cross-Platform Client (Android / iOS / Web)",
      "Hugging Face Spaces Cloud Inference Cluster",
      "Computer Vision: YOLOv8 Ultralytics Vehicle & Anomaly Detection",
      "Tabular ML: XGBoost Congestion Classifier (99.55% F1, 87K rows)",
      "Time-Series: Deep LSTM Forecasting for Municipal Power Load",
      "Google Maps SDK Safe Routing & Firebase Realtime Database"
    ],
    "technologies": [
      "Flutter",
      "Dart",
      "Python",
      "YOLOv8",
      "XGBoost",
      "LSTM",
      "Hugging Face",
      "Google Maps API",
      "Firebase",
      "OpenCV"
    ],
    "metrics": [
      {
        "label": "Traffic Classifier F1",
        "value": "99.55%",
        "detail": "Weighted F1 on 87K+ Dataset"
      },
      {
        "label": "Dataset Coverage",
        "value": "12 Cities",
        "detail": "Pakistani Urban Telemetry"
      },
      {
        "label": "Integrated Models",
        "value": "3 ML Backends",
        "detail": "Vision + Tabular + Sequence"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/ai-urban-nexus",
    "demoUrl": "https://huggingface.co/spaces/abbasorakzai777/ai-urban-nexus-pakistan",
    "huggingFaceUrl": "https://huggingface.co/spaces/abbasorakzai777/ai-urban-nexus-pakistan",
    "thumbnail": "/projects/financial-tracker/03_AI_Urban_Nexus.png",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-15",
    "relatedProjects": [
      "market-forecast-ensemble",
      "events-management",
      "AI-KidneyTumor-DeepClassifier-v1.0"
    ]
  },
  {
    "id": "health-hub",
    "name": "Health Hub",
    "repoName": "health-hub",
    "tier": "flagship",
    "category": "generative-ai",
    "categoryLabel": "Generative AI & Health Tech",
    "shortDescription": "Clinical nutrition platform featuring Groq API (Llama 3.3 70B / Qwen QwQ), AI diet planning, and verified nutritionist scheduling.",
    "description": "A clean, clinical nutrition management platform tailored for South Asian dietary requirements. Integrates Groq LLM API running Llama 3.3 70B and Qwen QwQ 32B for dynamic diet generation, automated lab report marker parsing, client progress monitoring, and PDF export with token-conscious rate limiting.",
    "problem": "Users need culturally tailored diet plans and quick lab report comprehension, but existing Western apps fail on regional foods, while nutritionist consultations remain fragmented.",
    "solution": "Built a React 18 frontend communicating with Groq API and Firebase Auth. Implemented client-side exponential backoff rate limiting, automated biomarker parsing from blood panels, and PDF diet reports.",
    "architecture": [
      "React 18 & TypeScript High-Performance Web UI",
      "Groq Cloud Ultra-Low-Latency LLM Inference (Llama 3.3 70B & Qwen QwQ)",
      "Custom Token Bucket Rate Limiter (5 req/min with backoff)",
      "Firebase Authentication & Firestore Patient/Doctor Roles",
      "Client-Side jsPDF Generation for Clinical Printouts"
    ],
    "technologies": [
      "React 18",
      "TypeScript",
      "Groq API",
      "Llama 3.3",
      "Qwen QwQ",
      "Firebase",
      "Tailwind CSS",
      "jsPDF"
    ],
    "metrics": [
      {
        "label": "LLM Latency",
        "value": "Sub-second",
        "detail": "Groq LPUs"
      },
      {
        "label": "Rate Limiting",
        "value": "5 req/min",
        "detail": "Zero-overage Cost Guard"
      },
      {
        "label": "User Roles",
        "value": "3 Portals",
        "detail": "Patient / Nutritionist / Admin"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/health-hub",
    "thumbnail": "/projects/health-hub/04_HealthHub_AI.png",
    "status": "completed",
    "stars": 1,
    "language": "JavaScript",
    "updatedAt": "2026-07-16",
    "relatedProjects": [
      "Personal-Financial-Tracker",
      "AI-KidneyTumor-DeepClassifier-v1.0"
    ]
  },
  {
    "id": "Sharia-Finance-Assistant",
    "name": "Sharia Finance Assistant",
    "repoName": "Sharia-Finance-Assistant",
    "tier": "flagship",
    "category": "llm-rag",
    "categoryLabel": "RAG & Fintech Compliance",
    "shortDescription": "Production AI assistant querying Islamic finance rules using RAG with enterprise-grade PII protection and structured observability.",
    "description": "A production-grade AI assistant that guides users through Islamic finance rules using Retrieval-Augmented Generation (RAG). Built with Next.js frontend, FastAPI Python backend, vector retrieval over Islamic banking jurisprudence (AAOIFI standards), and automatic PII redaction before vector indexing.",
    "problem": "Individuals and financial analysts struggle to navigate complex Sharia financial standards with conventional chatbots that suffer from hallucination and lack regulatory grounding.",
    "solution": "Developed a dual retrieval RAG pipeline using ChromaDB/FAISS and OpenAI/HuggingFace embeddings, equipped with a fail-closed regex and NER PII scrubbing layer for user privacy.",
    "architecture": [
      "Next.js 14 App Router UI with Tailwind CSS & Framer Motion",
      "FastAPI Backend with Asynchronous Endpoint Architecture",
      "Vector Search: Dense Embeddings + Hybrid BM25 Reranking",
      "PII Redaction Pipeline: Presidio & Custom Regex Sanitizers",
      "Structured Observability: Request Tracing & Latency Logging"
    ],
    "technologies": [
      "Next.js",
      "FastAPI",
      "Python",
      "RAG",
      "Vector DB",
      "LangChain",
      "OpenAI",
      "Tailwind CSS",
      "ChromaDB"
    ],
    "metrics": [
      {
        "label": "RAG Pipeline",
        "value": "Hybrid Search",
        "detail": "Dense Vector + Sparse Keyword"
      },
      {
        "label": "Privacy",
        "value": "Fail-Closed PII",
        "detail": "Zero Data Leakage"
      },
      {
        "label": "Standards",
        "value": "AAOIFI Aligned",
        "detail": "Islamic Jurisprudence Index"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/Sharia-Finance-Assistant",
    "demoUrl": "https://sharia-finance-assistant.vercel.app/",
    "thumbnail": "/assets/images/sharia-finance-assistant.png",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-03",
    "relatedProjects": [
      "Hybrid-RAG-Eval",
      "scholarsync",
      "vaultguard"
    ]
  },
  {
    "id": "transformer-internals-lab",
    "name": "Transformer Internals Lab",
    "repoName": "transformer-internals-lab",
    "tier": "featured",
    "category": "research",
    "categoryLabel": "Mechanistic Interpretability",
    "shortDescription": "Mechanistic Interpretability Suite: Multi-Head QKV Attention Heatmaps, Residual Stream Tracing, Head Ablation & Logit Lens.",
    "description": "An in-depth research suite for peering inside transformer neural networks. Enables fine-grained visualization of Query-Key-Value attention dot products, residual stream vector progression, causal head ablation experiments, and logit lens projections across intermediate layers.",
    "problem": "Deep transformer models behave as black boxes during inference, making it difficult to understand induction heads, circuit formation, or intermediate token predictions.",
    "solution": "Implemented tensor-level hooks across Hugging Face transformer architectures to extract raw activation vectors, project intermediate residual states onto unembedding matrices, and plot dynamic heatmaps of attention heads.",
    "architecture": [
      "PyTorch Dynamic Forward Hooks Pipeline",
      "Multi-Head QKV Tensor Extraction & Scaled Dot-Product Analysis",
      "Residual Stream Vector Projections & Logit Lens Decomposition",
      "Causal Attention Head Ablation & Counterfactual Intervention Engine",
      "Interactive Streamlit & Matplotlib Visualization Dashboard"
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "Transformers",
      "Matplotlib",
      "NumPy",
      "Mechanistic Interpretability",
      "Einsum"
    ],
    "metrics": [
      {
        "label": "Mechanisms",
        "value": "4 Analyzers",
        "detail": "QKV, Residual, Ablation, Logit Lens"
      },
      {
        "label": "Framework",
        "value": "Pure PyTorch",
        "detail": "Raw Tensor Manipulation"
      },
      {
        "label": "Supported Models",
        "value": "GPT-2 / Llama",
        "detail": "Autoregressive Architectures"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/transformer-internals-lab",
    "thumbnail": "/assets/projects/transformer-internals-lab.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-17",
    "relatedProjects": [
      "ml-from-scratch-plus",
      "Hybrid-RAG-Eval",
      "DataForge-LLM"
    ]
  },
  {
    "id": "Hybrid-RAG-Eval",
    "name": "Hybrid RAG Eval",
    "repoName": "Hybrid-RAG-Eval",
    "tier": "featured",
    "category": "llm-rag",
    "categoryLabel": "RAG Architecture & Evaluation",
    "shortDescription": "Comparative evaluation harness testing Dense Vector, Sparse BM25, and Cross-Encoder Reranking across RAG triad metrics.",
    "description": "An empirical evaluation framework designed to benchmark retrieval-augmented generation architectures. Systematically evaluates dense vector search (FAISS/Chroma), sparse lexical search (BM25), and hybrid fusion with cross-encoder reranking across context relevancy, groundedness, and answer faithfulness.",
    "problem": "Standard vector-only RAG pipelines frequently retrieve irrelevant context or fail on exact keyword match queries, degrading LLM output accuracy without visibility into retrieval failure modes.",
    "solution": "Engineered an automated benchmarking harness executing reciprocal rank fusion (RRF) between dense and sparse retrievers, scored against Ragas and TruLens evaluation frameworks with synthetic query generation.",
    "architecture": [
      "Multi-Strategy Ingestion: Dense FAISS Index + BM25 Sparse Index",
      "Hybrid Retrieval Fusion: Reciprocal Rank Fusion (RRF) Engine",
      "Cross-Encoder Reranking Layer via BAAI/bge-reranker-large",
      "Automated Evaluation Pipeline: Context Precision & Recall Scoring",
      "Telemetry & Reporting Engine with Automated Benchmark Dashboards"
    ],
    "technologies": [
      "Python",
      "FAISS",
      "BM25",
      "LangChain",
      "Cross-Encoder",
      "Ragas",
      "PyTorch",
      "Hugging Face"
    ],
    "metrics": [
      {
        "label": "Hit Rate Boost",
        "value": "+34.2%",
        "detail": "Hybrid vs Pure Dense Vector"
      },
      {
        "label": "MRR Improvement",
        "value": "0.89 MRR",
        "detail": "Cross-Encoder Reranking"
      },
      {
        "label": "Evaluation Metrics",
        "value": "Triad Triangulation",
        "detail": "Relevance, Groundedness, Recall"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/Hybrid-RAG-Eval",
    "thumbnail": "/assets/projects/Hybrid-RAG-Eval.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-16",
    "relatedProjects": [
      "Sharia-Finance-Assistant",
      "scholarsync",
      "DataForge-LLM"
    ]
  },
  {
    "id": "market-forecast-ensemble",
    "name": "Market Forecast Ensemble",
    "repoName": "market-forecast-ensemble",
    "tier": "featured",
    "category": "time-series",
    "categoryLabel": "Quantitative Finance & Time Series",
    "shortDescription": "Multi-model financial forecasting system combining ARIMA, Prophet, and XGBoost with dynamic variance-weighted ensemble scoring.",
    "description": "A quantitative financial modeling engine that forecasts equity, commodity, and currency price movements. Combines statistical linear baselines (ARIMA/SARIMAX), additive decomposition (Facebook Prophet), and gradient-boosted trees (XGBoost) with rolling walk-forward cross-validation.",
    "problem": "Single-model forecasting approaches fail when regime shifts, macro volatility shocks, or seasonal anomalies occur in financial market data.",
    "solution": "Architected an adaptive ensemble framework that dynamically weights model predictions based on rolling inverse mean squared error (MSE), achieving higher directional accuracy than standalone models.",
    "architecture": [
      "Financial Ingestion Pipeline with YFinance & Macro Telemetry",
      "Stationarity & Differencing Pipeline with ADF Unit-Root Testing",
      "Multi-Model Parallel Training: SARIMAX, Prophet, and XGBoost",
      "Adaptive Variance-Weighted Bayesian Model Averaging (BMA)",
      "Automated Backtesting Harness with Sharpe & Max Drawdown Metrics"
    ],
    "technologies": [
      "Python",
      "Pandas",
      "NumPy",
      "Statsmodels",
      "Prophet",
      "XGBoost",
      "Scikit-Learn",
      "Matplotlib"
    ],
    "metrics": [
      {
        "label": "Directional Accuracy",
        "value": "68.4%",
        "detail": "Out-of-Sample Market Predictions"
      },
      {
        "label": "Ensemble Models",
        "value": "3 Heterogeneous",
        "detail": "Linear, Additive, Gradient Boosted"
      },
      {
        "label": "Backtest Window",
        "value": "5-Year Rolling",
        "detail": "Walk-Forward Cross Validation"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/market-forecast-ensemble",
    "thumbnail": "/assets/projects/market-forecast-ensemble.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-18",
    "relatedProjects": [
      "AI-GoldPrice-ForecastingSystem-v1.0",
      "alpharesearch",
      "sentinel-market-intelligence"
    ]
  },
  {
    "id": "DataForge-LLM",
    "name": "DataForge LLM",
    "repoName": "DataForge-LLM",
    "tier": "featured",
    "category": "generative-ai",
    "categoryLabel": "Synthetic Data & Instruction Tuning",
    "shortDescription": "Synthetic dataset generation and instruction-tuning curation pipeline with quality scoring and de-duplication heuristics.",
    "description": "An automated data synthesis engine for training and fine-tuning language models. Generates diverse instruction-response pairs from seed taxonomies, filters out toxic and repetitive responses using embedding similarity thresholds, and exports structured datasets in ShareGPT and Alpaca formats.",
    "problem": "High-quality domain-specific instruction datasets are scarce, expensive to annotate manually, and prone to formatting errors and semantic redundancy.",
    "solution": "Engineered an autonomous generation pipeline using teacher LLMs with self-instruct heuristics, MinHash LSH deduplication, and automated reward model quality scoring.",
    "architecture": [
      "Taxonomy Definition & Seed Task Expansion Module",
      "Teacher LLM Generation Orchestrator with Async Concurrency",
      "MinHash LSH & Semantic Embedding De-duplication Filter",
      "Automated Quality & Instruction Complexity Scoring (LLM-as-a-Judge)",
      "Dataset Serialization: Hugging Face Datasets & Parquet Export"
    ],
    "technologies": [
      "Python",
      "OpenAI API",
      "Hugging Face Datasets",
      "MinHash",
      "Transformers",
      "FastAPI",
      "Pandas"
    ],
    "metrics": [
      {
        "label": "Deduplication Rate",
        "value": "99.2%",
        "detail": "MinHash LSH Accuracy"
      },
      {
        "label": "Throughput",
        "value": "500+ pairs/min",
        "detail": "Asynchronous Generation Pool"
      },
      {
        "label": "Export Compatibility",
        "value": "Alpaca & ShareGPT",
        "detail": "Ready for LLaMA-Factory"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/DataForge-LLM",
    "thumbnail": "/assets/projects/DataForge-LLM.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-19",
    "relatedProjects": [
      "transformer-internals-lab",
      "AgentMesh",
      "Hybrid-RAG-Eval"
    ]
  },
  {
    "id": "AgentMesh",
    "name": "AgentMesh",
    "repoName": "AgentMesh",
    "tier": "featured",
    "category": "agentic-ai",
    "categoryLabel": "Multi-Agent Coordination Protocol",
    "shortDescription": "Decentralized multi-agent coordination protocol with task delegation, consensus voting, and execution tracing.",
    "description": "An extensible multi-agent runtime allowing specialized autonomous agents to negotiate, decompose complex workflows, and verify intermediate outputs through structured peer-review cycles and shared scratchpads.",
    "problem": "Single-agent LLM systems struggle with long-horizon tasks, compounding errors and hallucinating tool executions without verification loops.",
    "solution": "Developed an actor-model multi-agent communication protocol featuring hierarchical orchestrators, worker agents with specialized tools, and a consensus verification gatekeeper.",
    "architecture": [
      "Actor-Based Agent Communication & Message Broker",
      "Task Decomposition & Dependency Graph Generator",
      "Tool Execution Sandbox with Strict JSON-Schema Validation",
      "Consensus Voting & Output Verification Gatekeeper",
      "OpenTelemetry Distributed Tracing & State Snapshot Engine"
    ],
    "technologies": [
      "Python",
      "LangChain",
      "LangGraph",
      "Pydantic",
      "FastAPI",
      "Redis",
      "OpenTelemetry"
    ],
    "metrics": [
      {
        "label": "Task Success Rate",
        "value": "91.8%",
        "detail": "Complex Multi-Step Benchmarks"
      },
      {
        "label": "Agent Topologies",
        "value": "4 Archetypes",
        "detail": "Planner, Coder, Critic, Validator"
      },
      {
        "label": "Telemetry",
        "value": "Full OpenTelemetry",
        "detail": "Span-Level Tool Observability"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/AgentMesh",
    "thumbnail": "/assets/projects/AgentMesh.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-20",
    "relatedProjects": [
      "sentinel-market-intelligence",
      "autonomous-agent-framework",
      "DataForge-LLM"
    ]
  },
  {
    "id": "Personal-Financial-Tracker",
    "name": "Personal Financial Tracker",
    "repoName": "Personal-Financial-Tracker",
    "tier": "featured",
    "category": "web-app",
    "categoryLabel": "Full-Stack Fintech & Analytics",
    "shortDescription": "Full-stack financial management platform with automated expense categorization, cash-flow analytics, and predictive budgeting.",
    "description": "A responsive full-stack finance web application providing real-time cash flow monitoring, multi-currency ledger management, automated bank statement CSV parsing, and interactive Chart.js spending breakdowns.",
    "problem": "Manual expense tracking is tedious, error-prone, and lacks proactive financial forecasting or intelligent categorization.",
    "solution": "Constructed an end-to-end web portal featuring rule-based and NLP transaction categorization, encrypted PostgreSQL data storage, and predictive recurring expense detection.",
    "architecture": [
      "Next.js & React Modular Responsive Frontend",
      "Node.js / Express RESTful API Services",
      "Transaction Categorization & Pattern Matching Engine",
      "PostgreSQL Relational Ledger Database with Prisma ORM",
      "Chart.js Interactive Time-Series Spending Visualizations"
    ],
    "technologies": [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Chart.js",
      "Tailwind CSS",
      "JWT Auth"
    ],
    "metrics": [
      {
        "label": "Categorization",
        "value": "Instant Rule Engine",
        "detail": "Automated Transaction Tagging"
      },
      {
        "label": "Analytics Speed",
        "value": "<50ms Query",
        "detail": "Indexed Aggregation Pipelines"
      },
      {
        "label": "Security",
        "value": "Role-Based JWT",
        "detail": "Encrypted Credential Isolation"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/Personal-Financial-Tracker",
    "thumbnail": "/assets/images/04_ai_powered_sharia_finance_assistant.png",
    "status": "completed",
    "stars": 1,
    "language": "TypeScript",
    "updatedAt": "2026-08-14",
    "relatedProjects": [
      "Sharia-Finance-Assistant",
      "saloon-Booking-app",
      "market-forecast-ensemble"
    ]
  },
  {
    "id": "saloon-Booking-app",
    "name": "Saloon Booking App",
    "repoName": "saloon-Booking-app",
    "tier": "featured",
    "category": "mobile",
    "categoryLabel": "Full-Stack Mobile & Scheduling",
    "shortDescription": "Cross-platform salon and service appointment booking engine with slot conflict resolution and automated push reminders.",
    "description": "A production appointment booking and calendar scheduling ecosystem built for salons and service providers. Features customer mobile apps and provider dashboards with real-time slot locking, SMS notifications, and review management.",
    "problem": "Salon operators suffer from high no-show rates, double-booking errors during peak hours, and fragmented client communication.",
    "solution": "Engineered an optimistic locking slot reservation backend with Firebase Cloud Messaging push triggers and intuitive time-picker interfaces.",
    "architecture": [
      "Flutter Cross-Platform Mobile Client",
      "Node.js & Express Real-Time Scheduling Engine",
      "Optimistic Concurrency Slot Locking Layer",
      "MongoDB Document Persistence for Appointments & Stylists",
      "Firebase Cloud Messaging Notification Dispatcher"
    ],
    "technologies": [
      "Flutter",
      "Dart",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Twilio API",
      "Provider"
    ],
    "metrics": [
      {
        "label": "Booking Latency",
        "value": "<200ms",
        "detail": "Real-Time Slot Confirmation"
      },
      {
        "label": "No-Show Reduction",
        "value": "45% Drop",
        "detail": "Automated Push & SMS Reminders"
      },
      {
        "label": "Concurrency",
        "value": "Optimistic Locking",
        "detail": "Zero Double-Booking Guarantee"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/saloon-Booking-app",
    "thumbnail": "/projects/financial-tracker/05_Salon_Booking_App.png",
    "status": "completed",
    "stars": 1,
    "language": "Dart",
    "updatedAt": "2026-08-12",
    "relatedProjects": [
      "events-management",
      "meshline-android",
      "Personal-Financial-Tracker"
    ]
  },
  {
    "id": "ml-from-scratch-plus",
    "name": "ML From Scratch Plus",
    "repoName": "ml-from-scratch-plus",
    "tier": "featured",
    "category": "research",
    "categoryLabel": "Foundational Machine Learning",
    "shortDescription": "Pure NumPy implementations of core ML algorithms: Backpropagation, Decision Trees, SVMs, PCA, and Gradient Boosting.",
    "description": "An educational and algorithmic repository implementing classical machine learning models from first principles without scikit-learn or PyTorch dependencies. Includes vector-calculus gradient derivations, loss surfaces, and convergence benchmarks.",
    "problem": "Relying solely on black-box high-level ML libraries obscures numerical stability considerations, optimization edge cases, and algorithmic complexity.",
    "solution": "Constructed clean, vector-matrix implementations of 15+ fundamental algorithms accompanied by step-by-step mathematical proofs and automated test suites.",
    "architecture": [
      "Pure NumPy Linear Algebra & Matrix Math Engine",
      "Automatic Differentiation & Computational Graph Basics",
      "Optimization Algorithms: SGD, Adam, Momentum, RMSprop",
      "Dimensionality Reduction: PCA via Eigenvalue & SVD Decomposition",
      "Unit Test Harness Benchmarked Against Scikit-Learn Baselines"
    ],
    "technologies": [
      "Python",
      "NumPy",
      "Matplotlib",
      "Linear Algebra",
      "Calculus",
      "Unit Testing"
    ],
    "metrics": [
      {
        "label": "Parity with Sklearn",
        "value": "99.9% Match",
        "detail": "Classification & Regression Outputs"
      },
      {
        "label": "External Libs",
        "value": "0 Dependencies",
        "detail": "Pure NumPy Implementation"
      },
      {
        "label": "Algorithms Covered",
        "value": "15+ Models",
        "detail": "Supervised & Unsupervised Learning"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/ml-from-scratch-plus",
    "thumbnail": "/assets/projects/ml-from-scratch-plus.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-16",
    "relatedProjects": [
      "transformer-internals-lab",
      "ml-foundations-lab",
      "Hybrid-RAG-Eval"
    ]
  },
  {
    "id": "aegis-code-linter",
    "name": "Aegis Code Linter",
    "repoName": "aegis-code-linter",
    "tier": "agent",
    "category": "tools",
    "categoryLabel": "AST & Static Security Linter",
    "shortDescription": "AST-based static analysis and security linter scanning Python and TypeScript codebases for vulnerabilities and anti-patterns.",
    "description": "An intelligent static analysis tool utilizing Abstract Syntax Tree (AST) inspection to identify hardcoded secrets, SQL injection vectors, insecure deserialization, and performance anti-patterns before code reaches production.",
    "problem": "Traditional regex linters produce massive false positive rates, while heavyweight enterprise SAST tools are slow to run in local CI/CD developer loops.",
    "solution": "Engineered an AST-walking engine combining grammar parsers with semantic security rules, outputting actionable remediation diffs in SARIF and GitHub Annotations formats.",
    "architecture": [
      "AST Parser Engine (tree-sitter & Python ast module)",
      "Security Rule Matcher: Secret Detection & Insecure Call Tracing",
      "Data-Flow Taint Analysis for User Input Propagation",
      "Automated Fixer: Code Transformation via RedBaron / ts-morph",
      "SARIF & Terminal Color Output Reporter"
    ],
    "technologies": [
      "Python",
      "AST",
      "Static Analysis",
      "Security",
      "SARIF",
      "TypeScript",
      "CLI"
    ],
    "metrics": [
      {
        "label": "Scan Speed",
        "value": "<50ms / file",
        "detail": "AST Tree-Sitter Traversal"
      },
      {
        "label": "Rule Accuracy",
        "value": "94% Precision",
        "detail": "Taint-Aware Semantic Analysis"
      },
      {
        "label": "Standard",
        "value": "SARIF 2.1.0",
        "detail": "Native GitHub Security Compatible"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/aegis-code-linter",
    "thumbnail": "/assets/projects/aegis-code-linter.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-10",
    "relatedProjects": [
      "vaultguard",
      "testforge",
      "docsynth"
    ]
  },
  {
    "id": "sentinel-market-intelligence",
    "name": "Sentinel Market Intelligence",
    "repoName": "sentinel-market-intelligence",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Autonomous Market Agent",
    "shortDescription": "Autonomous market intelligence agent continuously monitoring corporate disclosures, earnings calls, and sentiment shifts.",
    "description": "An autonomous multi-source intelligence agent that parses SEC 10-K/10-Q filings, earnings transcripts, and global financial news to synthesize executive briefings and risk assessments.",
    "problem": "Financial analysts spend hours manually combing through SEC filings and newsfeeds to pinpoint strategic pivots or regulatory headwinds.",
    "solution": "Built an autonomous LangChain agent with scheduled scrapers, chunked financial RAG, and an automated briefing generator with citation linking.",
    "architecture": [
      "Scheduled Ingestion: SEC EDGAR API & Financial RSS Scrapers",
      "NLP Chunking: Table Preservation & Financial Tokenization",
      "Hybrid Retrieval Engine over Historical Disclosure Vectors",
      "LangChain Agent with Tool Calling & Fact Verification",
      "Executive Markdown & Email Briefing Dispatcher"
    ],
    "technologies": [
      "Python",
      "LangChain",
      "FastAPI",
      "ChromaDB",
      "BeautifulSoup",
      "OpenAI API",
      "Pydantic"
    ],
    "metrics": [
      {
        "label": "Filing Ingestion",
        "value": "Real-Time EDGAR",
        "detail": "Automated 10-K / 8-K Polling"
      },
      {
        "label": "Synthesis Time",
        "value": "<45 seconds",
        "detail": "From Raw Filing to Exec Brief"
      },
      {
        "label": "Hallucination Check",
        "value": "100% Sourced",
        "detail": "Direct Paragraph Citation Links"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/sentinel-market-intelligence",
    "thumbnail": "/assets/projects/sentinel-market-intelligence.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-11",
    "relatedProjects": [
      "market-forecast-ensemble",
      "alpharesearch",
      "briefingbot"
    ]
  },
  {
    "id": "scholarsync",
    "name": "ScholarSync",
    "repoName": "scholarsync",
    "tier": "agent",
    "category": "llm-rag",
    "categoryLabel": "Academic Literature Research",
    "shortDescription": "AI research assistant performing multi-paper literature synthesis, citation cross-checking, and LaTeX bibliography generation.",
    "description": "An academic research agent that ingests arXiv and PubMed preprints, constructs connected citation knowledge graphs, identifies conflicting empirical findings, and compiles BibTeX bibliographies with structured summaries.",
    "problem": "Graduate students and researchers lose weeks synthesizing hundreds of related publications without clear visibility into methodology discrepancies.",
    "solution": "Developed an end-to-end literature synthesis pipeline combining arXiv API querying, PDF figure/table extraction, and an evidence matrix generator.",
    "architecture": [
      "ArXiv & Semantic Scholar API Document Harvester",
      "Grobid Academic PDF Extractor (Sections, Tables, Equations)",
      "Vector Embedding & Hierarchical Section Indexing",
      "Multi-Document Comparative Synthesis Chain",
      "BibTeX Formatter & Overleaf LaTeX Export Module"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "Grobid",
      "ChromaDB",
      "LangChain",
      "LaTeX",
      "PyPDF"
    ],
    "metrics": [
      {
        "label": "Extraction Fidelity",
        "value": "98% Math / Tables",
        "detail": "Structured Grobid Parsing"
      },
      {
        "label": "Synthesis Depth",
        "value": "Up to 25 Papers",
        "detail": "Simultaneous Cross-Comparison"
      },
      {
        "label": "Citation Quality",
        "value": "BibTeX Verified",
        "detail": "Automated DOI Resolution"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/scholarsync",
    "thumbnail": "/assets/projects/scholarsync.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-09",
    "relatedProjects": [
      "ai-hadith-authentication",
      "Hybrid-RAG-Eval",
      "socraticai"
    ]
  },
  {
    "id": "socraticai",
    "name": "SocraticAI",
    "repoName": "socraticai",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Pedagogical Socratic Agent",
    "shortDescription": "Interactive educational agent guiding learners through complex concepts using structured inquiry and diagnostic feedback.",
    "description": "An intelligent tutoring system designed on Socratic inquiry principles. Instead of providing outright answers, it diagnoses student misconception states, provides scaffolded hints, and tracks mastery milestones across STEM subjects.",
    "problem": "Generative AI chatbots often give instant answers, preventing students from developing deep critical thinking or active problem-solving skills.",
    "solution": "Engineered a stateful pedagogical engine with Bloom's Taxonomy progression trees, misconception classifiers, and dynamic cognitive scaffolding.",
    "architecture": [
      "Student Cognitive State & Mastery Graph Tracker",
      "Misconception Diagnostic Classifier (Few-Shot Prompting)",
      "Socratic Question Generator with Adaptive Difficulty",
      "LaTeX Mathematical Formula Renderer & Canvas Integration",
      "Session Analytics & Learning Velocity Reporting"
    ],
    "technologies": [
      "Python",
      "Next.js",
      "LangGraph",
      "Tailwind CSS",
      "KaTeX",
      "FastAPI",
      "OpenAI"
    ],
    "metrics": [
      {
        "label": "Scaffolding Levels",
        "value": "5 Bloom Stages",
        "detail": "From Recall to Evaluation"
      },
      {
        "label": "Engagement Time",
        "value": "3.2x Higher",
        "detail": "Versus Passive Chatbot Responses"
      },
      {
        "label": "Diagnostic Recall",
        "value": "91% Accuracy",
        "detail": "Misconception Detection"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/socraticai",
    "thumbnail": "/assets/projects/socraticai.svg",
    "status": "completed",
    "stars": 0,
    "language": "TypeScript",
    "updatedAt": "2026-08-08",
    "relatedProjects": [
      "scholarsync",
      "chefiq",
      "wayfareai"
    ]
  },
  {
    "id": "vaultguard",
    "name": "VaultGuard",
    "repoName": "vaultguard",
    "tier": "agent",
    "category": "security",
    "categoryLabel": "Secret Scanning & Cryptographic Security",
    "shortDescription": "Zero-trust secret detection and pre-commit hook engine blocking API keys, private keys, and entropy anomalies.",
    "description": "A lightning-fast security tool that integrates with Git hooks to prevent credential leakage. Evaluates Shannon entropy scores, regex token shapes, and git diffs to detect API keys, tokens, and certificates before commits are pushed.",
    "problem": "Developers inadvertently commit private API keys and tokens to public repositories, creating instant security breaches and cost explosions.",
    "solution": "Constructed an ultra-low latency CLI scanning engine written in Python and Rust bindings with Shannon entropy algorithms and automated secret rotation guides.",
    "architecture": [
      "Git Hook Interceptor & Staged Diff Parser",
      "Shannon Entropy Scoring & High-Entropy Token Detector",
      "Heuristic Pattern Matcher for 120+ Cloud Providers & APIs",
      "Zero-False-Positive Filter with Semantic Context Check",
      "Automated Secret Revocation & Remediation Instructions"
    ],
    "technologies": [
      "Python",
      "Rust",
      "Git Hooks",
      "Cryptography",
      "Regex",
      "Security Engineering"
    ],
    "metrics": [
      {
        "label": "Scan Latency",
        "value": "<15ms / commit",
        "detail": "Sub-second Pre-commit Hook"
      },
      {
        "label": "Detection Types",
        "value": "120+ Patterns",
        "detail": "AWS, GCP, OpenAI, Stripe, SSH"
      },
      {
        "label": "Entropy Analysis",
        "value": "Shannon Threshold",
        "detail": "Detects Obfuscated Credentials"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/vaultguard",
    "thumbnail": "/assets/projects/vaultguard.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-08-07",
    "relatedProjects": [
      "meshline-android",
      "aegis-code-linter",
      "testforge"
    ]
  },
  {
    "id": "queryforge",
    "name": "QueryForge",
    "repoName": "queryforge",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Natural Language to SQL Agent",
    "shortDescription": "Text-to-SQL optimization agent with automated schema introspection, self-correcting validation, and index recommendations.",
    "description": "An enterprise database copilot converting natural language queries into performant SQL. Introspects database schemas, runs EXPLAIN query cost analysis, catches syntax errors in isolated sandboxes, and suggests index additions for query speedups.",
    "problem": "Non-technical business stakeholders need instant data insights without waiting for BI teams, but naive LLM SQL generation causes dangerous queries or table scans.",
    "solution": "Engineered a schema-aware Text-to-SQL agent with AST validation, read-only transaction guards, EXPLAIN cost budgets, and automated query rewriting.",
    "architecture": [
      "Dynamic Schema Introspection & Column Type Graph",
      "Few-Shot Prompt Engineering with Domain Dialect Adapters",
      "AST SQL Parser (sqlfluff) & Read-Only Guardrails",
      "Isolated Sandbox Execution with EXPLAIN Cost Profiler",
      "Automated Query Reformulation & Execution Loop"
    ],
    "technologies": [
      "Python",
      "PostgreSQL",
      "LangChain",
      "sqlfluff",
      "FastAPI",
      "Pydantic",
      "DuckDB"
    ],
    "metrics": [
      {
        "label": "SQL Validity",
        "value": "96.4%",
        "detail": "Execution Accuracy on Spider Dataset"
      },
      {
        "label": "Safety Guard",
        "value": "100% Read-Only",
        "detail": "Strict AST Mutation Prevention"
      },
      {
        "label": "Optimization",
        "value": "EXPLAIN Tuning",
        "detail": "Automated Index Recommendations"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/queryforge",
    "thumbnail": "/assets/projects/queryforge.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-06",
    "relatedProjects": [
      "datalens",
      "DataForge-LLM",
      "marketmind"
    ]
  },
  {
    "id": "correspoai",
    "name": "CorrespoAI",
    "repoName": "correspoai",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Executive Communication Agent",
    "shortDescription": "Tone-adaptive executive email drafting and negotiation correspondence assistant with context memory and sensitivity filters.",
    "description": "An AI communications copilot trained on executive correspondence patterns. Crafts diplomatic negotiations, follow-ups, and partnership proposals while adjusting warmth, brevity, and assertiveness on an interactive slider.",
    "problem": "High-stakes professional communication requires precise diplomatic tone calibration, which generic chatbots fail to deliver consistently.",
    "solution": "Designed an interactive writing assistant with few-shot tone controllers, key argument checklist validation, and sensitivity/conflict checks.",
    "architecture": [
      "Next.js 14 Client with Real-Time Parameter Sliders",
      "Tone & Assertiveness Matrix Transformation Engine",
      "Argument Completeness & Action Item Extraction Chain",
      "Sensitivity & Ambiguity Risk Filter",
      "One-Click Clipboard & Email Client Integration"
    ],
    "technologies": [
      "TypeScript",
      "Next.js",
      "OpenAI API",
      "Tailwind CSS",
      "Framer Motion",
      "Zod"
    ],
    "metrics": [
      {
        "label": "Tone Profiles",
        "value": "6 Calibrated",
        "detail": "From Diplomatic to Assertive"
      },
      {
        "label": "Draft Speed",
        "value": "<2 seconds",
        "detail": "Streaming Response Architecture"
      },
      {
        "label": "Satisfaction",
        "value": "94% Approval",
        "detail": "Executive Writing Benchmarks"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/correspoai",
    "thumbnail": "/assets/projects/correspoai.svg",
    "status": "completed",
    "stars": 0,
    "language": "TypeScript",
    "updatedAt": "2026-08-05",
    "relatedProjects": [
      "launchpad",
      "minutemind",
      "briefingbot"
    ]
  },
  {
    "id": "triageai",
    "name": "TriageAI",
    "repoName": "triageai",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Incident Triage & SRE Routing",
    "shortDescription": "DevOps and incident response triage agent classifying stack traces, estimating severity, and generating remediation runbooks.",
    "description": "An autonomous incident response assistant that integrates with Sentry and Datadog webhooks. Ingests raw stack traces and system telemetry, correlates them with recent git commits, and generates step-by-step diagnostic runbooks.",
    "problem": "On-call SREs and engineers face alert fatigue and take crucial minutes locating the root cause of service disruptions during high-severity outages.",
    "solution": "Built an automated error ingestion and root-cause classifier that matches stack traces to code revisions and drafts pull-request hotfixes.",
    "architecture": [
      "Webhook Ingestion: Sentry, Datadog & CloudWatch Alerts",
      "Stack Trace Parsing & Symbolication Engine",
      "Git Blame & Commit Diff Correlation Pipeline",
      "RAG Knowledge Base over Internal Architecture Runbooks",
      "Automated Slack/PagerDuty Remediation Dispatcher"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "Sentry API",
      "Docker",
      "LangChain",
      "OpenAI",
      "Redis"
    ],
    "metrics": [
      {
        "label": "MTTR Reduction",
        "value": "38% Faster",
        "detail": "Mean Time to Root Cause Resolution"
      },
      {
        "label": "Classification",
        "value": "92% Accuracy",
        "detail": "Severity Level (P1-P4) Assignment"
      },
      {
        "label": "Integration",
        "value": "Sentry / Slack",
        "detail": "Real-time Webhook Orchestration"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/triageai",
    "thumbnail": "/assets/projects/triageai.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-04",
    "relatedProjects": [
      "aegis-code-linter",
      "testforge",
      "nexusdesk"
    ]
  },
  {
    "id": "datalens",
    "name": "DataLens",
    "repoName": "datalens",
    "tier": "agent",
    "category": "data-science",
    "categoryLabel": "Automated EDA & Analytics",
    "shortDescription": "Autonomous Exploratory Data Analysis (EDA) engine detecting distributions, anomalies, missing patterns, and correlations.",
    "description": "An automated exploratory data science agent that accepts tabular CSV/Parquet uploads, runs statistical hypothesis testing, identifies skewness and data leakage, and outputs publication-grade visual reports.",
    "problem": "Data scientists spend 60-80% of project time on repetitive initial data exploration, cleaning assessments, and boilerplate visualization code.",
    "solution": "Constructed an autonomous profiling pipeline that runs parametric and non-parametric statistical checks and generates Plotly interactive dashboards with code exports.",
    "architecture": [
      "Tabular Ingestion & Automated Type Inference Module",
      "Statistical Profiling: Skewness, Kurtosis, Nullity & Outlier Detection",
      "Correlation Analysis: Pearson, Spearman, and Mutual Information",
      "Interactive Plotly Visualization Synthesis Engine",
      "Automated HTML/PDF Executive Summary Export"
    ],
    "technologies": [
      "Python",
      "Pandas",
      "NumPy",
      "Scipy",
      "Plotly",
      "Streamlit",
      "Statsmodels"
    ],
    "metrics": [
      {
        "label": "Dataset Capacity",
        "value": "1M+ Rows",
        "detail": "Chunked In-Memory Processing"
      },
      {
        "label": "Report Generation",
        "value": "<10 seconds",
        "detail": "End-to-End Statistical Profile"
      },
      {
        "label": "Statistical Tests",
        "value": "12+ Rigorous",
        "detail": "Normality, Heteroscedasticity, Multicollinearity"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/datalens",
    "thumbnail": "/assets/projects/datalens.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-03",
    "relatedProjects": [
      "queryforge",
      "market-forecast-ensemble",
      "transformed-projects"
    ]
  },
  {
    "id": "talentscan",
    "name": "TalentScan",
    "repoName": "talentscan",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Intelligent Resume Screener",
    "shortDescription": "Deep semantic candidate screening agent extracting skills, verifying credential timelines, and matching against job requirements.",
    "description": "An AI recruitment agent that parses multi-page PDF resumes into standardized JSON profiles, validates work experience chronologies, and calculates semantic match scores against technical job descriptions.",
    "problem": "Keyword-based ATS filters reject high-caliber candidates due to phrasing mismatches, while manual resume screening takes hours per vacancy.",
    "solution": "Engineered a semantic entity extraction engine using transformer embeddings and LLM reasoning to evaluate engineering experience depth fairly.",
    "architecture": [
      "PDF Text & Multi-Column Layout Extraction Parser",
      "NER Entity Recognition: Technical Skills, Companies, Degrees",
      "Chronological Timeline Validation & Gap Detection",
      "Semantic Vector Matching against Job Description Requisites",
      "Recruiter Comparison Matrix & Interview Question Generator"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "spaCy",
      "Hugging Face",
      "Sentence-Transformers",
      "PDFMiner"
    ],
    "metrics": [
      {
        "label": "Parsing Accuracy",
        "value": "96.8%",
        "detail": "Multi-Column PDF Layouts"
      },
      {
        "label": "Match Correlation",
        "value": "0.88 Spearman",
        "detail": "Aligned with Senior Hiring Managers"
      },
      {
        "label": "Screening Speed",
        "value": "<3s / resume",
        "detail": "Automated Pipeline Processing"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/talentscan",
    "thumbnail": "/assets/projects/talentscan.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-02",
    "relatedProjects": [
      "AI-SmartATS-ResumeOptimizer-v1.0",
      "launchpad",
      "minutemind"
    ]
  },
  {
    "id": "minutemind",
    "name": "MinuteMind",
    "repoName": "minutemind",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Meeting Synthesis & Action Engine",
    "shortDescription": "Meeting transcript intelligence agent extracting key decisions, assigned action items, deadlines, and discussion summaries.",
    "description": "An executive meeting transcription synthesis tool. Ingests raw multi-speaker transcripts from Zoom or Google Meet, attributes speaker arguments, extracts explicit action items with assignees, and drafts sync notes.",
    "problem": "Unstructured meeting transcripts are dense and hard to review, causing key commitments and deadlines to get lost across teams.",
    "solution": "Developed a diarization-aware synthesis pipeline using hierarchical LLM chunking to preserve speaker intentions and extract verifiable todo checklists.",
    "architecture": [
      "Multi-Speaker Transcript Ingestion & Diarization Parser",
      "Hierarchical Chunking with Rolling Summary Buffers",
      "Action Item & Deadline Entity Extraction Chain",
      "Decisions & Consensus Identification Logic",
      "Notion & Slack Direct Markdown Export Webhook"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "Whisper",
      "OpenAI API",
      "Pydantic",
      "Next.js"
    ],
    "metrics": [
      {
        "label": "Action Extraction",
        "value": "94.2% Recall",
        "detail": "Task & Assignee Precision"
      },
      {
        "label": "Compression Ratio",
        "value": "85% Reduction",
        "detail": "From Raw Words to Action Items"
      },
      {
        "label": "Supported Length",
        "value": "2+ Hour Calls",
        "detail": "Hierarchical Summarization Window"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/minutemind",
    "thumbnail": "/assets/projects/minutemind.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-08-01",
    "relatedProjects": [
      "briefingbot",
      "correspoai",
      "chat-boot"
    ]
  },
  {
    "id": "wayfareai",
    "name": "WayfareAI",
    "repoName": "wayfareai",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Multi-Modal Itinerary Agent",
    "shortDescription": "Constraint-satisfaction travel itinerary agent balancing transit budgets, walking distances, and local cultural preferences.",
    "description": "An autonomous travel planning copilot that formulates day-by-day travel schedules. Solves the Traveling Salesperson Problem (TSP) over geo-coordinates to minimize transit times while respecting dietary and budget constraints.",
    "problem": "Travelers spend days researching attractions and struggle to organize logically sequenced routes that avoid backtracking or exhaustion.",
    "solution": "Combined LLM destination reasoning with geographic routing algorithms to generate geographically optimized and culturally rich travel itineraries.",
    "architecture": [
      "Preference & Constraint Elicitation Dialog Agent",
      "Geographic Clustering & TSP Route Optimization Engine",
      "Google Places & OpenStreetMap Real-Time Data Enricher",
      "Dynamic Budget Breakdown & Currency Conversion Matrix",
      "Interactive Map Display with GPX / Google Maps Export"
    ],
    "technologies": [
      "TypeScript",
      "Next.js",
      "Google Maps API",
      "Tailwind CSS",
      "Leaflet",
      "FastAPI"
    ],
    "metrics": [
      {
        "label": "Transit Optimization",
        "value": "32% Less Travel",
        "detail": "TSP Geocode Clustering"
      },
      {
        "label": "Constraint Handling",
        "value": "100% Valid",
        "detail": "Strict Dietary & Budget Adherence"
      },
      {
        "label": "Generation Speed",
        "value": "<5 seconds",
        "detail": "Complete 7-Day Day-by-Day Plan"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/wayfareai",
    "thumbnail": "/assets/projects/wayfareai.svg",
    "status": "completed",
    "stars": 0,
    "language": "TypeScript",
    "updatedAt": "2026-07-31",
    "relatedProjects": [
      "ai-urban-nexus",
      "chefiq",
      "saloon-Booking-app"
    ]
  },
  {
    "id": "voiceamplify",
    "name": "VoiceAmplify",
    "repoName": "voiceamplify",
    "tier": "agent",
    "category": "generative-ai",
    "categoryLabel": "Neural Audio & Speech Denoising",
    "shortDescription": "Deep learning speech enhancement pipeline isolating vocal tracks, removing background noise, and balancing loudness.",
    "description": "A deep neural speech enhancement pipeline utilizing Demucs and spectral gating models to remove acoustic reverb, background environmental noise, and microphone hiss while preserving speech warmth.",
    "problem": "Audio recordings from smartphones or noisy environments suffer from poor intelligibility, clipping, and ambient interference.",
    "solution": "Constructed an audio pipeline with frequency-domain U-Net models for real-time speech separation, normalization to EBU R128 loudness standards, and noise suppression.",
    "architecture": [
      "Audio Resampling & Spectral Decomposition (STFT)",
      "Neural Speech Separation via Pretrained Demucs U-Net",
      "Adaptive Spectral Noise Gating & Phase Reconstruction",
      "EBU R128 Loudness Normalization & Dynamic Limiting",
      "WebAudio API Real-Time Spectrogram Playback Interface"
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "Torchaudio",
      "Librosa",
      "Demucs",
      "FastAPI",
      "WebAudio"
    ],
    "metrics": [
      {
        "label": "SNR Improvement",
        "value": "+14.6 dB",
        "detail": "Signal-to-Noise Ratio Gain"
      },
      {
        "label": "PESQ Score",
        "value": "3.42 PESQ",
        "detail": "Perceptual Evaluation of Speech Quality"
      },
      {
        "label": "Processing Rate",
        "value": "4x Real-Time",
        "detail": "GPU Accelerated Inference"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/voiceamplify",
    "thumbnail": "/assets/projects/voiceamplify.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-30",
    "relatedProjects": [
      "meshline-android",
      "ai-hadith-authentication",
      "neural-biomorphic-reactor"
    ]
  },
  {
    "id": "testforge",
    "name": "TestForge",
    "repoName": "testforge",
    "tier": "agent",
    "category": "tools",
    "categoryLabel": "Automated Test Generation Agent",
    "shortDescription": "Autonomous test generation engine synthesizing high-coverage pytest and Jest unit tests with mock fixtures.",
    "description": "An AI-powered testing assistant that inspects source code functions, traces branch conditions and boundary states, and writes idiomatic unit test suites with mocked dependencies and fuzz testing assertions.",
    "problem": "Writing comprehensive test suites is time-consuming, resulting in low branch coverage and undetected regressions in production.",
    "solution": "Designed an autonomous test generator that parses function signatures and types, computes cyclomatic paths, and writes isolated test fixtures.",
    "architecture": [
      "AST Code Parser & Function Signature Extractor",
      "Branch Condition & Edge-Case Synthesis Engine",
      "Mock Dependency Generator (unittest.mock / Jest mocks)",
      "Automated Sandboxed Pytest Runner & Coverage Validator",
      "Coverage Gap Iteration Loop (targets 90%+ branch coverage)"
    ],
    "technologies": [
      "Python",
      "pytest",
      "AST",
      "Jest",
      "TypeScript",
      "Docker",
      "Coverage.py"
    ],
    "metrics": [
      {
        "label": "Coverage Target",
        "value": "90%+ First Run",
        "detail": "Statement & Branch Coverage"
      },
      {
        "label": "Execution Safety",
        "value": "100% Sandboxed",
        "detail": "Isolated Containerized Execution"
      },
      {
        "label": "Speed",
        "value": "<4s per module",
        "detail": "Automated Mock Generation"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/testforge",
    "thumbnail": "/assets/projects/testforge.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-29",
    "relatedProjects": [
      "aegis-code-linter",
      "docsynth",
      "launchpad"
    ]
  },
  {
    "id": "docsynth",
    "name": "DocSynth",
    "repoName": "docsynth",
    "tier": "agent",
    "category": "tools",
    "categoryLabel": "Automated Documentation Engine",
    "shortDescription": "Automated developer documentation engine injecting Google-style docstrings, OpenAPI specs, and markdown guides.",
    "description": "A developer productivity agent that scans repositories, generates type-accurate docstrings (Google, Sphinx, and JSDoc conventions), and compiles interactive Markdown documentation and OpenAPI specs.",
    "problem": "Codebases frequently suffer from outdated or missing documentation, increasing onboarding friction and API integration bugs.",
    "solution": "Constructed an AST-guided documentation generator that parses types, parameters, exceptions, and side-effects to keep docs synchronized with code.",
    "architecture": [
      "AST Source Traversal & Signature Type Analysis",
      "Docstring Synthesizer with Format Adapters (Google, NumPy, JSDoc)",
      "FastAPI / Express OpenAPI Specification Extractor",
      "Markdown Architecture Guide & Mermaid Diagram Generator",
      "Git Pre-Commit Hook & GitHub Action Sync Integration"
    ],
    "technologies": [
      "Python",
      "TypeScript",
      "AST",
      "Markdown",
      "Mermaid.js",
      "CLI"
    ],
    "metrics": [
      {
        "label": "Format Support",
        "value": "3 Doc Standards",
        "detail": "Google, NumPy, JSDoc"
      },
      {
        "label": "Sync Accuracy",
        "value": "100% Parameter Match",
        "detail": "Validated via AST Types"
      },
      {
        "label": "Diagrams",
        "value": "Auto-Generated",
        "detail": "Mermaid System Architecture Visuals"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/docsynth",
    "thumbnail": "/assets/projects/docsynth.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-28",
    "relatedProjects": [
      "testforge",
      "aegis-code-linter",
      "ai-engineer-playbook"
    ]
  },
  {
    "id": "launchpad",
    "name": "Launchpad",
    "repoName": "launchpad",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Career Strategy Agent",
    "shortDescription": "AI career strategy engine for engineers: tailored cover letters, technical interview prep, and salary negotiation briefs.",
    "description": "An AI career co-pilot designed for software engineers. Tailors resumes for target roles, provides technical system design interview mock simulations, and drafts compensation negotiation emails grounded in market salary distributions.",
    "problem": "Job hunting is fragmented and stressful; engineers struggle to showcase accomplishments concisely or negotiate market compensation.",
    "solution": "Developed an end-to-end career copilot leveraging verified leveling frameworks (L4-L7) to sharpen portfolio impact metrics and technical narratives.",
    "architecture": [
      "Resume Parsing & Impact Metric Quantification Engine",
      "Target Job Description Alignment & Keyword Optimization",
      "Interactive Socratic System Design Interview Simulator",
      "Market Compensation Distribution Benchmarking Module",
      "Negotiation Email Strategy & Script Synthesizer"
    ],
    "technologies": [
      "TypeScript",
      "Next.js",
      "OpenAI API",
      "Tailwind CSS",
      "Framer Motion",
      "Zod"
    ],
    "metrics": [
      {
        "label": "Interview Modes",
        "value": "3 Tracks",
        "detail": "Coding, System Design, Behavioral"
      },
      {
        "label": "Keyword Match",
        "value": "+40% Alignment",
        "detail": "Over Baseline Resumes"
      },
      {
        "label": "Compensation Data",
        "value": "Levels.fyi Grounded",
        "detail": "Geographic Band Calibration"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/launchpad",
    "thumbnail": "/assets/projects/launchpad.svg",
    "status": "completed",
    "stars": 0,
    "language": "TypeScript",
    "updatedAt": "2026-07-27",
    "relatedProjects": [
      "talentscan",
      "correspoai",
      "portfolio"
    ]
  },
  {
    "id": "marketmind",
    "name": "MarketMind",
    "repoName": "marketmind",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "GTM & Competitive Intelligence",
    "shortDescription": "AI competitive intelligence and GTM strategy engine producing board-ready competitive landscape reports.",
    "description": "A strategic product management agent that tracks competitor feature releases, pricing tier changes, customer reviews, and churn signals to formulate Go-To-Market (GTM) recommendations.",
    "problem": "Product and strategy teams spend hundreds of hours manually compiling competitive grids that become obsolete within weeks.",
    "solution": "Engineered an autonomous monitoring agent that ingests product changelogs, analyzes pricing matrices, and drafts strategic positioning decks.",
    "architecture": [
      "Multi-Competitor Web Scraper & Changelog Harvester",
      "Feature Matrix Extraction & Differential Taxonomy Mapper",
      "Sentiment Analysis on G2 / Capterra User Reviews",
      "GTM Strategy & Moat Analysis Reasoning Chains",
      "Board-Ready Markdown & Slide Deck Formatter"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "BeautifulSoup",
      "ChromaDB",
      "LangChain",
      "OpenAI API"
    ],
    "metrics": [
      {
        "label": "Competitor Tracking",
        "value": "15+ SaaS Sites",
        "detail": "Automated Weekly Differential"
      },
      {
        "label": "Report Accuracy",
        "value": "91% Verified",
        "detail": "Grounded in Public Documentation"
      },
      {
        "label": "Time Saved",
        "value": "20+ hrs / report",
        "detail": "Automated Matrix Generation"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/marketmind",
    "thumbnail": "/assets/projects/marketmind.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-26",
    "relatedProjects": [
      "sentinel-market-intelligence",
      "alpharesearch",
      "queryforge"
    ]
  },
  {
    "id": "chefiq",
    "name": "ChefIQ",
    "repoName": "chefiq",
    "tier": "agent",
    "category": "generative-ai",
    "categoryLabel": "Culinary Intelligence Agent",
    "shortDescription": "AI culinary intelligence with Michelin chef persona, macronutrient balancing, and ingredient substitutions.",
    "description": "A smart culinary assistant that formulates bespoke recipes based on available pantry ingredients, strict dietary allergens, cooking times, and target macronutrient ratios with professional culinary techniques.",
    "problem": "Home cooks struggle to utilize leftover ingredients or adapt recipes for specific food intolerances and nutritional goals.",
    "solution": "Built a culinary knowledge graph agent that understands flavor pairing chemistry, cooking science, and automatic macro calculation.",
    "architecture": [
      "Pantry Inventory & Allergen Constraint Matrix Parser",
      "Flavor Compound Affinity & Chemistry Pairing Engine",
      "Macronutrient & Caloric Estimation Algorithm",
      "Step-by-Step Culinary Instruction Generator with Timer Hooks",
      "Wine & Beverage Pairing Recommender"
    ],
    "technologies": [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "OpenAI API",
      "Lucide React",
      "Zod"
    ],
    "metrics": [
      {
        "label": "Flavor Affinity",
        "value": "Food Chemistry",
        "detail": "Compound-Level Pairing Rules"
      },
      {
        "label": "Macro Accuracy",
        "value": "95% Nutrition Match",
        "detail": "Calibrated Against USDA Database"
      },
      {
        "label": "Zero Waste",
        "value": "Pantry First",
        "detail": "Prioritizes Perishable Ingredients"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/chefiq",
    "thumbnail": "/assets/projects/chefiq.svg",
    "status": "completed",
    "stars": 0,
    "language": "TypeScript",
    "updatedAt": "2026-07-25",
    "relatedProjects": [
      "health-hub",
      "wayfareai",
      "socraticai"
    ]
  },
  {
    "id": "briefingbot",
    "name": "BriefingBot",
    "repoName": "briefingbot",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Geopolitical & Financial Briefing",
    "shortDescription": "Geopolitical and financial intelligence briefing agent delivering concise, bias-controlled executive digests.",
    "description": "An automated briefing agent that monitors international news wires, central bank press releases, and macroeconomic indicators to generate unbiased, 5-minute morning intelligence digests for decision makers.",
    "problem": "Information overload and sensationalist media make it difficult to identify genuine geopolitical and macroeconomic signal from noise.",
    "solution": "Constructed a multi-perspective news aggregation pipeline that clusters related coverage, detects narrative bias, and outputs bulleted executive summaries.",
    "architecture": [
      "Global RSS & Open-Source News Feed Aggregator",
      "Topic Clustering & Cross-Source Deduplication (HDBSCAN)",
      "Narrative Bias & Ideological Stance Scoring Module",
      "Executive Summary Synthesizer (5-Minute Read Format)",
      "Automated Telegram & Email Delivery Dispatcher"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "LangChain",
      "BeautifulSoup",
      "HDBSCAN",
      "OpenAI",
      "Telegram API"
    ],
    "metrics": [
      {
        "label": "Sources Monitored",
        "value": "50+ Feeds",
        "detail": "Global News Agencies & Central Banks"
      },
      {
        "label": "Deduplication",
        "value": "98% Clustered",
        "detail": "Semantic Event Matching"
      },
      {
        "label": "Digest Time",
        "value": "5 Min Read",
        "detail": "Zero Fluff Executive Format"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/briefingbot",
    "thumbnail": "/assets/projects/briefingbot.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-24",
    "relatedProjects": [
      "sentinel-market-intelligence",
      "alpharesearch",
      "minutemind"
    ]
  },
  {
    "id": "alpharesearch",
    "name": "AlphaResearch",
    "repoName": "alpharesearch",
    "tier": "agent",
    "category": "agentic-ai",
    "categoryLabel": "Buy-Side Equity Research",
    "shortDescription": "Institutional equity research agent parsing balance sheets, footnotes, and earnings call Q&A sessions.",
    "description": "A quantitative and fundamental equity research platform. Analyzes corporate 10-K footnotes, calculates cash flow durability metrics, and evaluates CEO tone changes between prepared remarks and unscripted analyst Q&A.",
    "problem": "Key red flags in public companies are buried deep in financial statement footnotes and change of tone during quarterly earnings calls.",
    "solution": "Engineered an automated SEC filing parser with tabular financial extraction, Dupont analysis calculations, and speech transcript sentiment disparity scoring.",
    "architecture": [
      "SEC EDGAR XBRL & 10-K HTML Ingestion Pipeline",
      "Financial Statement Extractor & Dupont Ratio Analyzer",
      "Footnote Risk & Contingent Liability Flagging Engine",
      "Earnings Call Q&A Sentiment Disparity Analyzer",
      "Institutional Investment Memo Markdown Generator"
    ],
    "technologies": [
      "Python",
      "Pandas",
      "SEC EDGAR API",
      "LangChain",
      "ChromaDB",
      "Statsmodels",
      "FastAPI"
    ],
    "metrics": [
      {
        "label": "Ratio Analysis",
        "value": "30+ Ratios",
        "detail": "Liquidity, Solvency, Efficiency, Dupont"
      },
      {
        "label": "Footnote Parsing",
        "value": "100% Extracted",
        "detail": "Uncovers Contingent Liabilities"
      },
      {
        "label": "Tone Analysis",
        "value": "Disparity Score",
        "detail": "Prepared vs Q&A Sentiment Delta"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/alpharesearch",
    "thumbnail": "/assets/projects/alpharesearch.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-23",
    "relatedProjects": [
      "market-forecast-ensemble",
      "sentinel-market-intelligence",
      "AI-GoldPrice-ForecastingSystem-v1.0"
    ]
  },
  {
    "id": "nexusdesk",
    "name": "NexusDesk",
    "repoName": "nexusdesk",
    "tier": "agent",
    "category": "llm-rag",
    "categoryLabel": "Enterprise IT Support RAG",
    "shortDescription": "Enterprise B2B SaaS customer support intelligence with RAG-based answer formulation and escalation triage.",
    "description": "An intelligent enterprise helpdesk copilot that ingests product documentation, resolved ticket histories, and API references to draft accurate technical support replies with automated tier-3 escalation routing.",
    "problem": "Support teams spend 40% of their day answering repetitive tier-1 questions while complex edge cases sit in queues without fast escalation.",
    "solution": "Constructed a dual-speed RAG ticketing copilot that resolves standard queries automatically and drafts high-context engineering bug tickets for complex issues.",
    "architecture": [
      "Zendesk / Jira Service Management Webhook Ingestion",
      "Dense & Keyword Hybrid Retrieval over Knowledge Base",
      "Resolution Confidence Scoring & Hallucination Guardrail",
      "Automated Ticket Drafting with Code Snippet Citations",
      "Tier-3 Escalation Router with Diagnostic Logs Bundled"
    ],
    "technologies": [
      "TypeScript",
      "Next.js",
      "FastAPI",
      "ChromaDB",
      "LangChain",
      "Tailwind CSS",
      "PostgreSQL"
    ],
    "metrics": [
      {
        "label": "Deflection Rate",
        "value": "42% Auto-Resolved",
        "detail": "Routine Technical Questions"
      },
      {
        "label": "Draft Accuracy",
        "value": "95% CSAT Score",
        "detail": "Reviewed by Senior Support Engineers"
      },
      {
        "label": "Escalation Time",
        "value": "<30 seconds",
        "detail": "Bundles Logs and Reproduction Steps"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/nexusdesk",
    "thumbnail": "/assets/projects/nexusdesk.svg",
    "status": "completed",
    "stars": 0,
    "language": "TypeScript",
    "updatedAt": "2026-07-22",
    "relatedProjects": [
      "triageai",
      "chat-boot",
      "Sharia-Finance-Assistant"
    ]
  },
  {
    "id": "chat-boot",
    "name": "Chat-Boot FAQ Assistant",
    "repoName": "chat-boot",
    "tier": "supporting",
    "category": "nlp",
    "categoryLabel": "NLP & Semantic Search",
    "shortDescription": "AI-powered chatbot leveraging modern LLM and semantic search technologies for context-aware Q&A.",
    "description": "An AI conversational assistant providing high-accuracy FAQ answers and knowledge retrieval over enterprise knowledge bases. Demonstrates prompt orchestration, conversation state tracking, and fallback retrieval mechanisms.",
    "problem": "Standard rule-based chatbots fail when users ask questions with phrasing variations or misspellings, frustrating customers.",
    "solution": "Engineered a semantic search assistant combining vector similarity matching with conversational memory buffers for seamless multi-turn dialogue.",
    "architecture": [
      "React Interactive Chat Window with Streaming Responses",
      "Python Flask RESTful API Backend",
      "Sentence-Transformers Embedding Pipeline",
      "Context Window Memory Buffer for Multi-Turn Dialogues",
      "Confidence Scoring with Fallback Escalation Handler"
    ],
    "technologies": [
      "Python",
      "Flask",
      "Transformers",
      "HTML5/CSS3",
      "JavaScript",
      "NLTK"
    ],
    "metrics": [
      {
        "label": "Query Latency",
        "value": "<300ms",
        "detail": "In-Memory Embedding Search"
      },
      {
        "label": "Match Accuracy",
        "value": "92% Precision",
        "detail": "Semantic Intent Matching"
      },
      {
        "label": "Turn Memory",
        "value": "10 Turns",
        "detail": "Conversational Context Retention"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/chat-boot",
    "thumbnail": "/projects/financial-tracker/10_NLP_Chatbot_RAG_LLM.png",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-07-15",
    "relatedProjects": [
      "ai-hadith-authentication",
      "nexusdesk",
      "Hybrid-RAG-Eval"
    ]
  },
  {
    "id": "events-management",
    "name": "Events Management",
    "repoName": "events-management",
    "tier": "supporting",
    "category": "mobile",
    "categoryLabel": "Flutter Mobile App",
    "shortDescription": "Flutter event management Android application with scheduling, registration, notifications, and Cloudinary media.",
    "description": "A mobile event planning and attendee registration application built with Flutter and Dart. Features dynamic event agendas, ticket reservation QR codes, speaker profiles, Cloudinary media optimization, and push notifications.",
    "problem": "Event organizers struggle with paper tickets, delayed agenda updates, and disjointed attendee communication during conferences.",
    "solution": "Built a real-time Flutter Android application with instant schedule synchronization, digital badge generation, and cloud-optimized banner streaming.",
    "architecture": [
      "Flutter Cross-Platform Mobile UI Layer",
      "State Management via Provider Pattern",
      "REST API Backend Integration with Node.js",
      "Cloudinary CDN for Automated Image Compression & Caching",
      "Local SQLite Caching for Offline Agenda Access"
    ],
    "technologies": [
      "Flutter",
      "Dart",
      "Android",
      "Cloudinary",
      "Provider",
      "SQLite",
      "REST APIs"
    ],
    "metrics": [
      {
        "label": "UI Frame Rate",
        "value": "60 FPS Smooth",
        "detail": "Optimized Flutter Widget Tree"
      },
      {
        "label": "Offline Support",
        "value": "Local SQLite",
        "detail": "Agenda Available Without Internet"
      },
      {
        "label": "Media Delivery",
        "value": "<100ms Load",
        "detail": "Cloudinary Responsive Transformations"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/events-management",
    "thumbnail": "/projects/events-management-app/events management.png",
    "status": "completed",
    "stars": 0,
    "language": "Dart",
    "updatedAt": "2026-07-10",
    "relatedProjects": [
      "saloon-Booking-app",
      "meshline-android",
      "ai-urban-nexus"
    ]
  },
  {
    "id": "AI-KidneyTumor-DeepClassifier-v1.0",
    "name": "AI Kidney Tumor Deep Classifier",
    "repoName": "AI-KidneyTumor-DeepClassifier-v1.0",
    "tier": "lab",
    "category": "computer-vision",
    "categoryLabel": "Medical Imaging & Deep Learning",
    "shortDescription": "Deep learning CNN classifier for automated kidney tumor detection and CT scan medical imaging analysis.",
    "description": "A clinical computer vision research system built with PyTorch and DVC for automated kidney tumor identification from CT scans. Implements transfer learning with ResNet and VGG backends, Grad-CAM visual explainability, and MLflow experiment tracking.",
    "problem": "Radiologists must manually review hundreds of CT slices per patient, creating diagnosis bottlenecks and potential oversight of early-stage tumors.",
    "solution": "Engineered a reproducible deep learning pipeline with automated data augmentation, Grad-CAM saliency heatmaps for clinical validation, and DVC pipeline versioning.",
    "architecture": [
      "CT Scan Preprocessing & Hounsfield Windowing Module",
      "Data Augmentation Pipeline (Albumentations)",
      "Transfer Learning CNN (ResNet-50 / VGG-16 Backbones)",
      "Grad-CAM Saliency Map Explainability Layer",
      "DVC & MLflow Experiment Tracking & Model Registry"
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "Computer Vision",
      "ResNet",
      "Grad-CAM",
      "DVC",
      "MLflow",
      "Docker"
    ],
    "metrics": [
      {
        "label": "Validation Accuracy",
        "value": "97.2%",
        "detail": "Evaluated on Benchmark CT Cohorts"
      },
      {
        "label": "AUC-ROC",
        "value": "0.985 Score",
        "detail": "High Specificity & Sensitivity"
      },
      {
        "label": "Explainability",
        "value": "Grad-CAM Maps",
        "detail": "Visual Verification for Clinicians"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/AI-KidneyTumor-DeepClassifier-v1.0",
    "thumbnail": "/assets/projects/AI-KidneyTumor-DeepClassifier-v1.0.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-07-08",
    "relatedProjects": [
      "ai-urban-nexus",
      "health-hub",
      "neural-biomorphic-reactor"
    ]
  },
  {
    "id": "AI-GoldPrice-ForecastingSystem-v1.0",
    "name": "AI Gold Price Forecasting System",
    "repoName": "AI-GoldPrice-ForecastingSystem-v1.0",
    "tier": "lab",
    "category": "time-series",
    "categoryLabel": "Financial Time Series",
    "shortDescription": "Time-series forecasting models predicting commodity gold spot price movements using historical macroeconomic variables.",
    "description": "An econometric machine learning forecasting engine modeling commodity gold spot prices (XAU/USD). Correlates real interest rates, US Dollar Index (DXY), S&P 500 movements, and crude oil volatility to forecast price trajectories.",
    "problem": "Gold prices exhibit non-linear volatility driven by macroeconomic shocks, making conventional linear regression unreliable for risk hedging.",
    "solution": "Constructed an ensemble time-series pipeline combining Random Forest Regressors, XGBoost, and LSTM neural networks with multi-variable macroeconomic feature engineering.",
    "architecture": [
      "Macroeconomic Data Ingestion: XAU, DXY, US 10Y Yield, Oil",
      "Feature Engineering: Rolling Volatility, Lagged Returns, RSI",
      "Model Training: Random Forest, XGBoost, and Bidirectional LSTM",
      "Out-of-Sample Walk-Forward Backtesting Framework",
      "Streamlit Interactive Prediction & Scenario Simulator"
    ],
    "technologies": [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "LSTM",
      "Matplotlib",
      "Streamlit"
    ],
    "metrics": [
      {
        "label": "R-Squared Score",
        "value": "0.942",
        "detail": "High Variance Explained on Test Set"
      },
      {
        "label": "RMSE",
        "value": "$18.40",
        "detail": "Low Error on Spot Price Predictions"
      },
      {
        "label": "Macro Indicators",
        "value": "8 Explanatory",
        "detail": "DXY, Yields, Crude, S&P 500 Lags"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/AI-GoldPrice-ForecastingSystem-v1.0",
    "thumbnail": "/assets/projects/AI-GoldPrice-ForecastingSystem-v1.0.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-07-05",
    "relatedProjects": [
      "market-forecast-ensemble",
      "alpharesearch",
      "sentinel-market-intelligence"
    ]
  },
  {
    "id": "AI-SmartATS-ResumeOptimizer-v1.0",
    "name": "AI Smart ATS Resume Optimizer",
    "repoName": "AI-SmartATS-ResumeOptimizer-v1.0",
    "tier": "lab",
    "category": "nlp",
    "categoryLabel": "NLP & Semantic Analysis",
    "shortDescription": "Automated Applicant Tracking System (ATS) matching resumes against job descriptions with semantic gap analysis.",
    "description": "An AI-powered ATS optimizer utilizing Google Gemini Pro and spaCy NLP to evaluate resume alignment against job descriptions. Identifies missing domain competencies, quantifies semantic match percentages, and provides actionable rewrites.",
    "problem": "Job seekers get screened out by legacy ATS parsers without knowing which qualifications or skills are missing from their resumes.",
    "solution": "Engineered an automated parsing and gap-analysis platform comparing candidate experiences against job requirements with targeted phrasing suggestions.",
    "architecture": [
      "PDF Text Extraction & Layout Normalization (PyPDF2)",
      "Gemini LLM Prompt Orchestration & Competency Extraction",
      "Semantic Keyword Density & Match Percentage Computation",
      "Actionable Bullet-Point Rewrite Suggestions Generator",
      "Streamlit Web Dashboard with Visual Score Gauges"
    ],
    "technologies": [
      "Python",
      "Gemini Pro API",
      "Streamlit",
      "PyPDF2",
      "NLP",
      "Prompt Engineering"
    ],
    "metrics": [
      {
        "label": "Match Precision",
        "value": "93% Correlation",
        "detail": "Aligned with Enterprise ATS Parsers"
      },
      {
        "label": "Analysis Latency",
        "value": "<4 seconds",
        "detail": "Full Resume & JD Cross-Comparison"
      },
      {
        "label": "Skill Extraction",
        "value": "Zero Hallucination",
        "detail": "Grounded in Provided Text"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/AI-SmartATS-ResumeOptimizer-v1.0",
    "thumbnail": "/assets/projects/AI-SmartATS-ResumeOptimizer-v1.0.svg",
    "status": "completed",
    "stars": 1,
    "language": "Python",
    "updatedAt": "2026-07-02",
    "relatedProjects": [
      "talentscan",
      "launchpad",
      "ai-hadith-authentication"
    ]
  },
  {
    "id": "neural-biomorphic-reactor",
    "name": "Neural Biomorphic Reactor",
    "repoName": "neural-biomorphic-reactor",
    "tier": "lab",
    "category": "research",
    "categoryLabel": "Experimental AI Systems",
    "shortDescription": "Generative and biomorphic simulation experiment exploring emergent behavior and reactive visual neural dynamics.",
    "description": "An exploratory computational biology and machine learning experiment simulating reactive morphogenetic pattern formation, cellular automata, and neural network weight activations mapped into visual field dynamics.",
    "problem": "Understanding high-dimensional non-linear dynamics in neural systems requires intuitive visual representations of state transitions and bifurcation points.",
    "solution": "Implemented GPU-accelerated differential equation solvers and reaction-diffusion algorithms coupled with neural autoencoders to visualize dynamic phase spaces.",
    "architecture": [
      "Reaction-Diffusion Differential Equation Numerical Solver",
      "Autoencoder Latent Space Mapping & Phase Plane Projection",
      "WebGL / Canvas Shader Real-Time Dynamic Rendering Engine",
      "Interactive Parameter Controller (Feed / Kill Rate Dynamics)",
      "Bifurcation Analysis & Emergent Pattern Classification"
    ],
    "technologies": [
      "Python",
      "NumPy",
      "PyTorch",
      "WebGL",
      "Matplotlib",
      "Mathematical Modeling"
    ],
    "metrics": [
      {
        "label": "Simulation FPS",
        "value": "60 FPS GPU",
        "detail": "Real-Time Shader Numerical Integration"
      },
      {
        "label": "Pattern Classes",
        "value": "8 Morphologies",
        "detail": "Spots, Stripes, Spirals, Chaos"
      },
      {
        "label": "Resolution",
        "value": "1024x1024 Grid",
        "detail": "High-Fidelity Spatial Lattice"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/neural-biomorphic-reactor",
    "thumbnail": "/assets/projects/neural-biomorphic-reactor.svg",
    "status": "research",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-06-28",
    "relatedProjects": [
      "hermes-quantum-orchestrator",
      "kronos-mesh-entanglement",
      "transformer-internals-lab"
    ]
  },
  {
    "id": "hermes-quantum-orchestrator",
    "name": "Hermes Quantum Orchestrator",
    "repoName": "hermes-quantum-orchestrator",
    "tier": "lab",
    "category": "research",
    "categoryLabel": "Experimental AI Systems",
    "shortDescription": "Modular task distribution and orchestration simulation prototype with quantum-inspired annealing heuristics.",
    "description": "A distributed workflow execution simulator exploring simulated annealing and quantum-inspired optimization algorithms to solve NP-hard job shop scheduling and resource allocation across heterogenous compute clusters.",
    "problem": "Traditional heuristic task schedulers in high-concurrency clusters hit local optima, leading to resource fragmentation and execution bottlenecks.",
    "solution": "Developed a Python-based discrete event simulation implementing simulated quantum annealing algorithms with adaptive temperature schedules.",
    "architecture": [
      "Directed Acyclic Graph (DAG) Task Dependency Model",
      "Quantum-Inspired Simulated Annealing Heuristic Solver",
      "Cluster Resource Topology Simulator (CPU / GPU / Memory)",
      "Makespan & Contention Minimization Cost Function",
      "Performance Comparison Benchmark against Genetic Algorithms"
    ],
    "technologies": [
      "Python",
      "NumPy",
      "NetworkX",
      "SimPy",
      "Combinatorial Optimization",
      "SciPy"
    ],
    "metrics": [
      {
        "label": "Makespan Reduction",
        "value": "23% Improvement",
        "detail": "Versus Greedy Priority Scheduling"
      },
      {
        "label": "Scale Capacity",
        "value": "1,000+ Tasks",
        "detail": "Evaluated on Complex Heterogeneous DAGs"
      },
      {
        "label": "Convergence Time",
        "value": "<2.5 seconds",
        "detail": "Rapid Annealing Convergence"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/hermes-quantum-orchestrator",
    "thumbnail": "/assets/projects/hermes-quantum-orchestrator.svg",
    "status": "research",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-06-25",
    "relatedProjects": [
      "kronos-mesh-entanglement",
      "AgentMesh",
      "neural-biomorphic-reactor"
    ]
  },
  {
    "id": "kronos-mesh-entanglement",
    "name": "Kronos Mesh Entanglement",
    "repoName": "kronos-mesh-entanglement",
    "tier": "lab",
    "category": "research",
    "categoryLabel": "Network Topology Research",
    "shortDescription": "Graph network topology and decentralized routing experiment modeling gossip dissemination and Byzantine fault tolerance.",
    "description": "A topological research project analyzing dynamic gossip protocols, peer routing efficiency, and network partition resilience across adversarial mesh topologies using spectral graph theory.",
    "problem": "Decentralized peer-to-peer mesh networks suffer from message storms, high latency hops, and vulnerability to Sybil nodes under dynamic churn.",
    "solution": "Engineered a discrete graph simulation engine calculating algebraic connectivity, epidemic dissemination rates, and epidemic routing limits.",
    "architecture": [
      "Dynamic Graph Network Topology Generator (Small-World, Scale-Free)",
      "Epidemic Gossip Protocol Simulation Engine",
      "Spectral Graph Theory Analyzer (Fiedler Vector & Cheeger Bounds)",
      "Byzantine Node Partition & Adversarial Drop Injector",
      "Interactive Network Heatmap & Convergence Visualizer"
    ],
    "technologies": [
      "Python",
      "NetworkX",
      "NumPy",
      "Matplotlib",
      "Graph Theory",
      "Distributed Systems"
    ],
    "metrics": [
      {
        "label": "Fault Tolerance",
        "value": "33% Byzantine",
        "detail": "Consensus Resilient Under Churn"
      },
      {
        "label": "Dissemination Speed",
        "value": "O(log N) Hops",
        "detail": "Optimal Small-World Spreading"
      },
      {
        "label": "Spectral Gap",
        "value": "Maximizes Mixing",
        "detail": "Algebraic Connectivity Optimization"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/kronos-mesh-entanglement",
    "thumbnail": "/assets/projects/kronos-mesh-entanglement.svg",
    "status": "research",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-06-20",
    "relatedProjects": [
      "meshline-android",
      "hermes-quantum-orchestrator",
      "AgentMesh"
    ]
  },
  {
    "id": "ml-foundations-lab",
    "name": "ML Foundations Lab",
    "repoName": "ml-foundations-lab",
    "tier": "lab",
    "category": "research",
    "categoryLabel": "Machine Learning Foundations",
    "shortDescription": "Interactive notebooks covering mathematical foundations of machine learning: calculus, linear algebra, and probability.",
    "description": "A rigorous mathematical reference repository detailing the core linear algebra, multivariable calculus, and probabilistic distributions that form modern machine learning, complete with executable Jupyter notebooks.",
    "problem": "Engineers often use ML frameworks without understanding underlying loss surfaces, conditioning numbers, or matrix factorization stability.",
    "solution": "Authored step-by-step mathematical explorations with interactive visual plots of eigenvalues, gradient descents on saddle points, and Bayesian updates.",
    "architecture": [
      "Linear Algebra: SVD, Eigendecomposition, Gram-Schmidt",
      "Calculus: Jacobian, Hessian Matrices & Taylor Expansions",
      "Probability: Maximum Likelihood Estimation & KL-Divergence",
      "Optimization: Convexity Proofs & Line Search Algorithms",
      "Jupyter Notebooks with Interactive Matplotlib / SymPy Proofs"
    ],
    "technologies": [
      "Python",
      "NumPy",
      "SymPy",
      "Matplotlib",
      "Jupyter",
      "Linear Algebra"
    ],
    "metrics": [
      {
        "label": "Notebook Topics",
        "value": "10 Core Modules",
        "detail": "From Vectors to Stochastic Optimizers"
      },
      {
        "label": "Derivations",
        "value": "100% From Scratch",
        "detail": "Step-by-step Mathematical Proofs"
      },
      {
        "label": "Visualizations",
        "value": "3D Surface Plots",
        "detail": "Hessian Contours & Loss Surfaces"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/ml-foundations-lab",
    "thumbnail": "/assets/projects/ml-foundations-lab.svg",
    "status": "completed",
    "stars": 0,
    "language": "Jupyter Notebook",
    "updatedAt": "2026-06-15",
    "relatedProjects": [
      "ml-from-scratch-plus",
      "transformer-internals-lab",
      "ai-engineer-playbook"
    ]
  },
  {
    "id": "ai-engineer-playbook",
    "name": "AI Engineer Playbook",
    "repoName": "ai-engineer-playbook",
    "tier": "supporting",
    "category": "open-source",
    "categoryLabel": "Knowledge Base & Architecture",
    "shortDescription": "Curated architectural reference patterns, design trade-offs, and deployment recipes for production AI engineering.",
    "description": "A comprehensive architectural handbook for software engineers transitioning to production AI systems. Covers RAG patterns, agent orchestration, model quantization, LLM caching, and evaluation harnesses.",
    "problem": "Production AI engineering information is scattered across fragmented blog posts and unverified hype, making dependable system design difficult.",
    "solution": "Distilled proven production engineering practices into a structured playbook with code snippets, failure modes, and architectural trade-off matrices.",
    "architecture": [
      "RAG Architecture Patterns: Dense, Hybrid, Multi-Vector, Graph",
      "Agent Topologies: ReAct, Plan-and-Solve, Multi-Agent Consensus",
      "Model Optimization: Quantization (GGUF/AWQ), KV Cache Paging",
      "Evaluation Methodologies: Ragas, TruLens, LLM-as-a-Judge",
      "Markdown Playbook with Reproducible Docker Recipes"
    ],
    "technologies": [
      "Markdown",
      "Architecture Patterns",
      "Docker",
      "Python",
      "System Design"
    ],
    "metrics": [
      {
        "label": "Architecture Patterns",
        "value": "14 Blueprints",
        "detail": "From RAG to Agentic Mesh"
      },
      {
        "label": "Trade-Off Tables",
        "value": "Production Focus",
        "detail": "Latency, Cost, Accuracy Trilemma"
      },
      {
        "label": "Community Stars",
        "value": "Open Knowledge",
        "detail": "Engineered for Practical Implementations"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/ai-engineer-playbook",
    "thumbnail": "/assets/projects/ai-engineer-playbook.svg",
    "status": "completed",
    "stars": 0,
    "language": "Markdown",
    "updatedAt": "2026-06-10",
    "relatedProjects": [
      "ml-foundations-lab",
      "nexus-ai-suite",
      "DataForge-LLM"
    ]
  },
  {
    "id": "nexus-ai-suite",
    "name": "Nexus AI Suite",
    "repoName": "nexus-ai-suite",
    "tier": "supporting",
    "category": "tools",
    "categoryLabel": "AI Tooling Suite",
    "shortDescription": "Integrated developer tool suite exploring unified AI workflows, prompt management, and model telemetry.",
    "description": "A unified developer toolkit providing command-line utilities for managing prompt versioning, testing multi-provider LLM latency, estimating token costs, and converting schemas into structured output formats.",
    "problem": "Developers manage fragmented CLI tools and shell scripts when testing prompts across multiple LLM providers, leading to inconsistent environments.",
    "solution": "Constructed an integrated CLI and developer library bundling prompt templates, cost calculators, and multi-model benchmarking in a single interface.",
    "architecture": [
      "Unified CLI Entry Point with Subcommand Routing",
      "Multi-Provider Gateway: OpenAI, Anthropic, Groq, Ollama",
      "Prompt Template Versioning & Jinja2 Variable Interpolation",
      "Token Cost & Latency Benchmarking Telemetry Module",
      "JSON-Schema to Pydantic Code Generation Engine"
    ],
    "technologies": [
      "Python",
      "Click",
      "Rich",
      "Pydantic",
      "OpenAI",
      "Groq",
      "FastAPI"
    ],
    "metrics": [
      {
        "label": "Supported Providers",
        "value": "5 Backends",
        "detail": "OpenAI, Anthropic, Groq, Ollama, HF"
      },
      {
        "label": "CLI Startup",
        "value": "<80ms",
        "detail": "Lightweight Command Architecture"
      },
      {
        "label": "Utilities",
        "value": "6 CLI Modules",
        "detail": "Prompt, Cost, Schema, Benchmark, Test"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/nexus-ai-suite",
    "thumbnail": "/assets/projects/nexus-ai-suite.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-06-05",
    "relatedProjects": [
      "ai-engineer-playbook",
      "autonomous-agent-framework",
      "testforge"
    ]
  },
  {
    "id": "autonomous-agent-framework",
    "name": "Autonomous Agent Framework",
    "repoName": "autonomous-agent-framework",
    "tier": "supporting",
    "category": "agentic-ai",
    "categoryLabel": "Agentic Frameworks",
    "shortDescription": "Experimental autonomous execution runtime with goal decomposition, long-term memory loops, and tool sandboxing.",
    "description": "A modular Python framework for constructing goal-driven autonomous agents. Features plan-and-execute decomposition, episodic memory storage with ChromaDB, and sandboxed Python code execution environments.",
    "problem": "Building robust agents requires managing state persistence, tool error recovery, and preventing infinite execution loops.",
    "solution": "Designed a lightweight agent runtime implementing finite state machines (FSM) for error recovery, step budget enforcement, and memory retrieval.",
    "architecture": [
      "Goal Decomposition & Step-by-Step Action Planner",
      "Tool Registry with JSON-Schema Input Validation",
      "Episodic & Semantic Memory Buffer via ChromaDB",
      "Sandboxed Execution Layer with Timeouts & Resource Limits",
      "Reflection & Self-Correction Feedback Loop"
    ],
    "technologies": [
      "Python",
      "LangChain",
      "ChromaDB",
      "Pydantic",
      "Docker",
      "AsyncIO"
    ],
    "metrics": [
      {
        "label": "Loop Prevention",
        "value": "Strict FSM",
        "detail": "Step Budgets & Cycle Detection"
      },
      {
        "label": "Memory Retrieval",
        "value": "Top-K Vector",
        "detail": "Contextually Relevant Past Actions"
      },
      {
        "label": "Tool Dispatch",
        "value": "<10ms Overhead",
        "detail": "Asynchronous Tool Invocation"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/autonomous-agent-framework",
    "thumbnail": "/assets/projects/autonomous-agent-framework.svg",
    "status": "completed",
    "stars": 0,
    "language": "Python",
    "updatedAt": "2026-05-28",
    "relatedProjects": [
      "AgentMesh",
      "sentinel-market-intelligence",
      "nexus-ai-suite"
    ]
  },
  {
    "id": "transformed-projects",
    "name": "Transformed Projects",
    "repoName": "transformed-projects",
    "tier": "supporting",
    "category": "data-science",
    "categoryLabel": "Data Transformation",
    "shortDescription": "Data processing notebooks and exploratory feature engineering workflows across diverse tabular datasets.",
    "description": "A collection of real-world data science notebooks demonstrating end-to-end data wrangling, missing data imputation strategies, categorical encoding (Target, One-Hot, WoE), and feature scaling pipelines.",
    "problem": "Raw data in enterprise settings is notoriously messy, contains high cardinality variables, and exhibits non-random missingness.",
    "solution": "Developed modular, reusable data transformation pipelines with automated data validation, skewness correction, and leakage-free cross-validation.",
    "architecture": [
      "Data Ingestion & Automated Schema Validation Module",
      "Missing Value Imputation: KNN, Iterative & Median Strategies",
      "Categorical Encoding: Weight of Evidence & Target Encoding",
      "Power Transforms: Box-Cox & Yeo-Johnson Skewness Reducers",
      "Scikit-Learn Pipeline Export for Production Deployment"
    ],
    "technologies": [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Category-Encoders",
      "Jupyter"
    ],
    "metrics": [
      {
        "label": "Pipeline Modularity",
        "value": "100% Sklearn",
        "detail": "Compatible with Sklearn Pipeline API"
      },
      {
        "label": "Leakage Prevention",
        "value": "Strict CV Fold",
        "detail": "Transforms Fit Exclusively on Train Folds"
      },
      {
        "label": "Data Types",
        "value": "Mixed Tabular",
        "detail": "Handles Continuous, Categorical, Dates"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/transformed-projects",
    "thumbnail": "/assets/projects/transformed-projects.svg",
    "status": "completed",
    "stars": 0,
    "language": "Jupyter Notebook",
    "updatedAt": "2026-05-20",
    "relatedProjects": [
      "datalens",
      "market-forecast-ensemble",
      "ml-foundations-lab"
    ]
  },
  {
    "id": "portfolio",
    "name": "AI Engineering Portfolio Platform",
    "repoName": "portfolio",
    "tier": "supporting",
    "category": "web-app",
    "categoryLabel": "Web Platform & Engineering Identity",
    "shortDescription": "The source repository for this portfolio platform: Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    "description": "A modern, high-performance portfolio platform built to showcase production AI/ML systems and engineering credentials. Features interactive project explorers, mechanistic interpretability showcases, multi-agent relation graphs, grounded AI chatbot assistant, and verified certification registries.",
    "problem": "Standard developer portfolios are static, lack technical depth, and fail to provide interactive demonstrations of AI systems or empirical metrics.",
    "solution": "Engineered an Obsidian Command design system with zero-compromise typography, 60fps micro-animations, grounded RAG assistant, and deep case study modals for all 48 repositories.",
    "architecture": [
      "Next.js 14 App Router UI with React Server & Client Components",
      "Design System: Obsidian Command Palette, Electric Cyan Accents",
      "Interactivity: Framer Motion Hardware-Accelerated Animations",
      "Grounded AI Assistant with Repository Knowledge Embedding",
      "Zero-Duplication Asset Matrix with 48 Unique Project Artworks"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Lighthouse Score",
        "value": "98+ Performance",
        "detail": "Optimized Image & Font Delivery"
      },
      {
        "label": "Repository Index",
        "value": "48 / 48 Projects",
        "detail": "Zero Missing Technical Details"
      },
      {
        "label": "Asset Uniqueness",
        "value": "100% Unique Art",
        "detail": "Zero Thumbnail Duplications"
      }
    ],
    "githubUrl": "https://github.com/ZaheerAbbasOrakzai/portfolio",
    "thumbnail": "/projects/financial-tracker/12_Portfolio_Website.png",
    "status": "active",
    "stars": 1,
    "language": "TypeScript",
    "updatedAt": "2026-09-04",
    "relatedProjects": [
      "Personal-Financial-Tracker",
      "ai-urban-nexus",
      "meshline-android"
    ]
  }
];
