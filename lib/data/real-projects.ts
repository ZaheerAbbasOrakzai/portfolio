import { Project } from '../types/portfolio';

/**
 * Accurate Portfolio Projects - Based on Zaheer Abbas Resume
 * All projects are real, with actual links and metrics from resume
 */

export const realProjects: Project[] = [
  // PROJECT 1: AI Hadith Authentication System (University Final Year Project)
  {
    id: 'ai-hadith-authentication',
    title: 'AI Hadith Authentication System',
    tagline: 'Full-Stack Islamic Text Classification Platform',
    description: 'Production ML system classifying 34,000+ Hadith narrations into Sahih, Hasan, Da\'if, or Mawdu\' categories with multi-modal input support and three-tier inference fallback.',
    longDescription: 'A comprehensive Hadith authenticity classification platform combining machine learning with Islamic scholarship. The system processes Arabic religious texts through a Hugging Face-hosted model trained on 34,000+ curated narrations, featuring OCR for image-based text, ASR for audio queries, and integration with Sunnah.com API for source attribution.',
    technologies: ['python', 'flask', 'mongodb', 'huggingface', 'transformers', 'bert', 'ocr', 'asr', 'docker', 'nginx'],
    category: 'ai-ml',
    industry: 'research',
    featured: true,
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-12-15',
    icon: '🕌',
    accent: 'emerald',
    caseStudy: {
      problem: 'Islamic scholars and students need accurate Hadith authentication but lack accessible AI tools that understand Arabic religious text nuances and provide reliable classification with source attribution.',
      solution: 'Built a full-stack platform using Hugging Face transformers with a three-tier inference system (direct model → HF Inference API → rule-based analysis), multi-modal input processing (text, image OCR, audio ASR), and integration with Islamic text databases.',
      results: [
        {
          metric: 'Dataset Size',
          value: '34,000+ narrations',
          description: 'Curated corpus of authentic Hadith texts for model training'
        },
        {
          metric: 'Classification Types',
          value: '4 categories',
          description: 'Sahih (authentic), Hasan (good), Da\'if (weak), Mawdu\' (fabricated)'
        },
        {
          metric: 'Input Methods',
          value: '3 modes',
          description: 'Text input, OCR for images, ASR for audio - full accessibility'
        }
      ],
      metrics: [
        { label: 'Narrations Corpus', value: '34K+', change: 'Curated', positive: true },
        { label: 'Languages Supported', value: '2', change: 'AR/EN', positive: true },
        { label: 'Inference Tiers', value: '3', change: 'Fallback', positive: true }
      ],
      testimonial: 'A groundbreaking tool for Islamic scholarship combining traditional knowledge with modern AI technology.'
    },
    media: {
      thumbnail: '/projects/ai-hadith-authentication/ai hadith authentication.png',
      gallery: [
        '/projects/hadith-auth/classification-interface.jpg',
        '/projects/hadith-auth/multi-modal-input.jpg',
        '/projects/hadith-auth/quran-reader.jpg'
      ],
      demo: 'https://huggingface.co/spaces/abbasorakzai777/ai-hadith-authentication',
      repository: 'https://github.com/ZaheerAbbasOrakzai/ai-hadith-authentication',
      video: undefined
    },
    seo: {
      slug: 'ai-hadith-authentication-islamic-ml-system',
      metaTitle: 'AI Hadith Authentication System - Islamic Text Classification | Zaheer Abbas',
      metaDescription: 'Full-stack Hadith authenticity classification platform using Hugging Face transformers, trained on 34K+ narrations with OCR, ASR, and Sunnah.com API integration.',
      keywords: ['hadith authentication', 'islamic AI', 'arabic NLP', 'text classification', 'hugging face', 'religious text ML']
    }
  },

  // PROJECT 2: AI Urban Nexus - Smart City Platform (University Final Year Project)
  {
    id: 'ai-urban-nexus',
    title: 'AI Urban Nexus',
    tagline: 'Smart City Intelligence Platform with Multi-Model ML',
    description: 'Cross-platform Flutter mobile app integrating 3 ML backends: crime detection (YOLOv8), traffic classification (99.55% F1), and LSTM energy forecasting with Google Maps safe routing.',
    longDescription: 'Comprehensive smart city platform combining computer vision, predictive analytics, and mobile development. Features crime-aware safe routing using Google Maps, real-time traffic congestion classification trained on 87,000+ Pakistani city records, and role-based admin dashboards for city officials.',
    technologies: ['flutter', 'dart', 'python', 'yolov8', 'xgboost', 'lstm', 'huggingface', 'firebase', 'google-maps', 'opencv'],
    category: 'mobile',
    industry: 'smart-cities',
    featured: true,
    status: 'completed',
    startDate: '2023-06-01',
    endDate: '2024-02-28',
    icon: '🌆',
    accent: 'cyan',
    caseStudy: {
      problem: 'Pakistani cities lack integrated smart infrastructure for crime monitoring, traffic management, and energy optimization. Citizens need safe routing that considers real-time crime and traffic data.',
      solution: 'Built a Flutter mobile platform with three independent ML backends on Hugging Face: YOLOv8 for stolen vehicle recognition, XGBoost for traffic congestion (trained on 12 cities), LSTM for energy demand forecasting. Integrated Google Maps API for crime-traffic-aware safe routing with Firebase real-time updates.',
      results: [
        {
          metric: 'Traffic Classifier F1 Score',
          value: '99.55%',
          description: 'Weighted F1 across 3 severity classes on 87,000+ evaluation set'
        },
        {
          metric: 'Dataset Coverage',
          value: '12 Pakistani cities',
          description: 'Real-time traffic data collected from major urban centers'
        },
        {
          metric: 'Platform Reach',
          value: 'Cross-platform',
          description: 'Single Flutter codebase deployed to Android, iOS, Web'
        }
      ],
      metrics: [
        { label: 'ML Models', value: '3', change: 'Integrated', positive: true },
        { label: 'Traffic F1 Score', value: '99.55%', change: 'SOTA', positive: true },
        { label: 'Dataset Rows', value: '87K+', change: '12 cities', positive: true }
      ],
      testimonial: 'AI Urban Nexus demonstrates the future of smart city management with actionable real-time intelligence.'
    },
    media: {
      thumbnail: '/projects/ai-urban-nexus/ai urban nexus.png',
      gallery: [
        '/projects/urban-nexus/safe-routing.jpg',
        '/projects/urban-nexus/admin-dashboard.jpg',
        '/projects/urban-nexus/crime-detection.jpg',
        '/projects/urban-nexus/traffic-analysis.jpg'
      ],
      demo: 'https://huggingface.co/spaces/abbasorakzai777/ai-urban-nexus-pakistan',
      repository: 'https://github.com/ZaheerAbbasOrakzai/ai-urban-nexus',
      video: undefined
    },
    seo: {
      slug: 'ai-urban-nexus-smart-city-flutter-ml',
      metaTitle: 'AI Urban Nexus - Smart City ML Platform | Zaheer Abbas',
      metaDescription: 'Flutter smart city app with 3 ML backends: YOLOv8 crime detection, 99.55% F1 traffic classification, LSTM energy forecasting, and Google Maps safe routing.',
      keywords: ['smart city', 'flutter', 'YOLOv8', 'XGBoost', 'LSTM', 'traffic prediction', 'crime detection', 'Google Maps API']
    }
  },

  // PROJECT 3: Health Hub - AI Nutrition Platform
  {
    id: 'health-hub-nutrition',
    title: 'Health Hub',
    tagline: 'AI-Powered Nutrition & Diet Management Platform',
    description: 'React 18 nutrition platform with Groq API integration (Llama 3.3/Qwen) for AI diet plans, lab report analysis, recipe discovery, and nutritionist booking with Firebase role-based access.',
    longDescription: 'Comprehensive nutrition management platform for Pakistani users featuring AI-generated multi-day diet plans using Groq LLM API with custom rate limiting (5 req/min, exponential backoff). Includes lab report analysis, recipe recommendations, professional appointment scheduling, and PDF report generation for patients, nutritionists, and admins.',
    technologies: ['react', 'vite', 'tailwind', 'groq-api', 'llm', 'firebase', 'firestore', 'pdf-generation', 'typescript'],
    category: 'web-app',
    industry: 'healthcare',
    featured: true,
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-08-15',
    icon: '🥗',
    accent: 'green',
    caseStudy: {
      problem: 'Pakistani users lack accessible, culturally-relevant nutrition guidance and AI-powered diet planning tools with professional nutritionist integration and lab report analysis.',
      solution: 'Developed a React 18 platform with Groq API (Llama 3.3/Qwen) for AI diet generation with custom rate limiting, Firebase role-based access for patients/nutritionists/admins, recipe discovery, appointment booking, and professional PDF report generation.',
      results: [
        {
          metric: 'AI Diet Plans',
          value: 'Multi-day generated',
          description: 'LLM-powered personalized diet plans with rate limiting'
        },
        {
          metric: 'User Roles',
          value: '3 types',
          description: 'Patient, Nutritionist, Admin with Firebase authentication'
        },
        {
          metric: 'Features',
          value: '4 core modules',
          description: 'Diet planning, lab analysis, recipes, appointments'
        }
      ],
      metrics: [
        { label: 'LLM Integration', value: 'Groq', change: 'Rate-limited', positive: true },
        { label: 'Request Limit', value: '5/min', change: 'Backoff', positive: true },
        { label: 'Auth System', value: 'Firebase', change: 'Role-based', positive: true }
      ],
      testimonial: 'Health Hub brings AI-powered personalized nutrition guidance to Pakistani healthcare.'
    },
    media: {
      thumbnail: '/projects/health-hub/04_HealthHub_AI.png',
      gallery: [
        '/projects/health-hub/diet-plans.jpg',
        '/projects/health-hub/lab-analysis.jpg',
        '/projects/health-hub/appointment-booking.jpg'
      ],
      demo: undefined,
      repository: 'https://github.com/ZaheerAbbasOrakzai/health-hub',
      video: undefined
    },
    seo: {
      slug: 'health-hub-ai-nutrition-diet-platform',
      metaTitle: 'Health Hub - AI Nutrition Platform | Zaheer Abbas',
      metaDescription: 'React 18 nutrition platform with Groq API (Llama 3.3/Qwen) for AI diet plans, lab report analysis, recipe discovery, and nutritionist booking.',
      keywords: ['AI nutrition', 'diet planning', 'Groq API', 'LLM', 'health platform', 'Firebase', 'React']
    }
  }
];
