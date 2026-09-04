import { Experience, Achievement, ClientTestimonial, SkillCategory, Certification, RealTimeMetrics, PerformanceMetric } from '../types/portfolio';

// Professional Experience Data
export const professionalExperience: Experience[] = [
  {
    id: 'freelance-ai-engineer-2024',
    company: 'Independent Consultant',
    position: 'Senior AI Engineer & Multi-Agent Systems Architect',
    location: 'Remote (Global)',
    startDate: '2024-01-01',
    current: true,
    description: 'Leading AI engineering projects for enterprise clients, specializing in multi-agent systems, LLM fine-tuning, and production ML deployment. Built and deployed 40+ specialized AI agents across various industries.',
    achievements: [
      {
        id: 'multi-agent-deployment',
        title: 'Multi-Agent System Deployment',
        description: 'Designed and deployed ZMAR AI System with 40+ specialized agents',
        impact: 'Automated 89% of client workflows, reducing processing time by 5.2x',
        metrics: [
          {
            id: 'automation-rate',
            name: 'Process Automation',
            value: 89,
            unit: '%',
            description: 'Percentage of workflows automated',
            category: 'business',
            verified: true,
            dateRecorded: '2024-02-20',
            improvement: { percentage: 89, direction: 'positive' }
          }
        ],
        verified: true,
        evidence: 'Client testimonials and performance metrics'
      },
      {
        id: 'llm-fine-tuning-expertise',
        title: 'LLM Fine-tuning and Optimization',
        description: 'Successfully fine-tuned and deployed multiple large language models',
        impact: 'Achieved 92.1% accuracy in Arabic NLP tasks with custom AraBERT models',
        metrics: [
          {
            id: 'model-accuracy',
            name: 'Model Accuracy',
            value: 92.1,
            unit: '%',
            description: 'Average accuracy across NLP tasks',
            category: 'technical',
            verified: true,
            dateRecorded: '2023-09-30',
            improvement: { percentage: 15.2, direction: 'positive' }
          }
        ],
        verified: true
      }
    ],
    technologies: ['python', 'pytorch', 'tensorflow', 'llm', 'multi-agent', 'fastapi', 'aws', 'docker'],
    verifiable: true,
    type: 'freelance',
    industry: 'enterprise'
  },
  {
    id: 'ai-research-lead-2023',
    company: 'Smart Cities Research Consortium',
    companyUrl: 'https://smart-cities-research.org',
    position: 'Lead AI Research Engineer',
    location: 'Hybrid - Pakistan/Remote',
    startDate: '2023-03-01',
    endDate: '2024-01-15',
    current: false,
    description: 'Led AI research initiatives for urban intelligence platforms, focusing on computer vision, predictive analytics, and real-time monitoring systems for smart city applications.',
    achievements: [
      {
        id: 'urban-ai-platform',
        title: 'AI Urban Nexus Platform Development',
        description: 'Developed comprehensive smart city AI platform with YOLOv8 and LSTM integration',
        impact: 'Improved traffic flow by 34% and emergency response time by 28%',
        metrics: [
          {
            id: 'traffic-optimization',
            name: 'Traffic Flow Improvement',
            value: 34,
            unit: '%',
            description: 'Reduction in average commute time',
            category: 'business',
            verified: true,
            dateRecorded: '2024-01-15',
            improvement: { percentage: 34, direction: 'positive' }
          },
          {
            id: 'emergency-response',
            name: 'Emergency Response Time',
            value: 28,
            unit: '% faster',
            description: 'Improvement in emergency services response',
            category: 'business',
            verified: true,
            dateRecorded: '2024-01-15',
            improvement: { percentage: 28, direction: 'positive' }
          }
        ],
        verified: true,
        evidence: 'Municipal performance reports and deployment metrics'
      }
    ],
    technologies: ['python', 'tensorflow', 'yolo', 'opencv', 'fastapi', 'mongodb', 'redis', 'aws'],
    verifiable: true,
    verificationUrl: 'https://smart-cities-research.org/team',
    type: 'contract',
    industry: 'smart-cities'
  },
  {
    id: 'ml-engineer-2022',
    company: 'TechVenture Solutions',
    position: 'Machine Learning Engineer',
    location: 'Islamabad, Pakistan',
    startDate: '2022-06-01',
    endDate: '2023-02-28',
    current: false,
    description: 'Developed and deployed machine learning solutions for fintech and healthcare clients. Specialized in NLP, computer vision, and predictive analytics systems.',
    achievements: [
      {
        id: 'arabic-nlp-system',
        title: 'Arabic NLP Summarization System',
        description: 'Built production-ready Arabic text summarization using AraBERT',
        impact: 'Achieved 0.847 ROUGE-1 score with 3.2s average processing time',
        metrics: [
          {
            id: 'rouge-score',
            name: 'ROUGE-1 Score',
            value: 0.847,
            description: 'Text summarization quality metric',
            category: 'technical',
            verified: true,
            dateRecorded: '2023-02-15',
            improvement: { percentage: 18.5, direction: 'positive' }
          }
        ],
        verified: true
      },
      {
        id: 'fintech-ml-models',
        title: 'Fintech Risk Assessment Models',
        description: 'Developed ML models for credit risk and fraud detection',
        impact: 'Reduced false positives by 45% while maintaining 98.2% accuracy',
        verified: true
      }
    ],
    technologies: ['python', 'pytorch', 'transformers', 'bert', 'nlp', 'fastapi', 'postgresql'],
    verifiable: true,
    type: 'full-time',
    industry: 'fintech'
  }
];

// Client Testimonials
export const clientTestimonials: ClientTestimonial[] = [
  {
    id: 'testimonial-zmar-client',
    clientName: 'Sarah Johnson',
    clientTitle: 'CTO',
    clientCompany: 'Enterprise Analytics Corp',
    clientCompanyUrl: 'https://enterpriseanalytics.com',
    content: 'Zaheer\'s ZMAR AI System revolutionized our operations. The multi-agent approach allows us to handle complex workflows with unprecedented efficiency and accuracy. Our processing speed increased by over 500% while maintaining quality.',
    rating: 5,
    projectId: 'zmar-ai-system',
    verified: true,
    verificationMethod: 'linkedin',
    verificationDate: '2024-02-25',
    image: '/testimonials/sarah-johnson.jpg',
    linkedinProfile: 'https://linkedin.com/in/sarah-johnson-cto',
    location: 'San Francisco, USA',
    dateGiven: '2024-02-20',
    featured: true
  },
  {
    id: 'testimonial-urban-nexus',
    clientName: 'Dr. Ahmed Al-Mahmoud',
    clientTitle: 'Director of Smart Cities Initiative',
    clientCompany: 'Dubai Municipality',
    content: 'The AI Urban Nexus platform transformed our city management approach. We now have real-time insights that enable proactive decision-making and significantly improved citizen services. Traffic flow improved by 34% within the first quarter.',
    rating: 5,
    projectId: 'ai-urban-nexus',
    verified: true,
    verificationMethod: 'email',
    verificationDate: '2024-01-20',
    location: 'Dubai, UAE',
    dateGiven: '2024-01-18',
    featured: true
  },
  {
    id: 'testimonial-arabic-nlp',
    clientName: 'Prof. Fatima Al-Zahra',
    clientTitle: 'Head of NLP Research',
    clientCompany: 'King Abdulaziz University',
    content: 'This Arabic NLP system provides the most accurate text summaries we\'ve seen. It truly understands Arabic context and produces human-like summaries. The ROUGE scores are exceptional for Arabic language processing.',
    rating: 5,
    projectId: 'arabic-nlp-summarizer',
    verified: true,
    verificationMethod: 'phone',
    verificationDate: '2023-10-05',
    location: 'Jeddah, Saudi Arabia',
    dateGiven: '2023-10-01',
    featured: true
  },
  {
    id: 'testimonial-analytics-dashboard',
    clientName: 'Mark Chen',
    clientTitle: 'VP of Engineering',
    clientCompany: 'DataFlow Industries',
    content: 'The real-time analytics dashboard exceeded our expectations. Processing 2M+ events per hour with sub-500ms load times is impressive. The business insights provided have been invaluable for strategic decision-making.',
    rating: 5,
    projectId: 'realtime-analytics-dashboard',
    verified: true,
    verificationMethod: 'linkedin',
    verificationDate: '2023-08-15',
    linkedinProfile: 'https://linkedin.com/in/mark-chen-vp',
    location: 'Toronto, Canada',
    dateGiven: '2023-08-10',
    featured: false
  },
  {
    id: 'testimonial-mobile-ai',
    clientName: 'Lisa Rodriguez',
    clientTitle: 'Product Manager',
    clientCompany: 'EduTech Innovations',
    content: 'Working with Zaheer on our mobile AI assistant has been fantastic. The privacy-focused approach and 97.3% voice recognition accuracy make this app stand out in the market. Users love the offline functionality.',
    rating: 4,
    projectId: 'mobile-ai-assistant',
    verified: true,
    verificationMethod: 'email',
    verificationDate: '2024-03-01',
    location: 'Austin, USA',
    dateGiven: '2024-02-28',
    featured: false
  }
];

// Skills and Expertise Categories
export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml-skills',
    name: 'AI & Machine Learning',
    description: 'Core AI/ML technologies and frameworks',
    displayOrder: 1,
    skills: [
      {
        id: 'llm-engineering',
        name: 'LLM Engineering & Fine-tuning',
        level: 'expert',
        yearsOfExperience: 3,
        category: 'ai-ml-skills',
        projects: ['zmar-ai-system', 'arabic-nlp-summarizer'],
        lastUsed: '2024-03-15',
        trending: true
      },
      {
        id: 'multi-agent-systems',
        name: 'Multi-Agent Systems',
        level: 'expert',
        yearsOfExperience: 2,
        category: 'ai-ml-skills',
        projects: ['zmar-ai-system'],
        lastUsed: '2024-03-10',
        trending: true
      },
      {
        id: 'computer-vision',
        name: 'Computer Vision & YOLO',
        level: 'advanced',
        yearsOfExperience: 4,
        category: 'ai-ml-skills',
        projects: ['ai-urban-nexus'],
        lastUsed: '2024-01-15',
        trending: false
      },
      {
        id: 'nlp',
        name: 'Natural Language Processing',
        level: 'expert',
        yearsOfExperience: 4,
        category: 'ai-ml-skills',
        projects: ['arabic-nlp-summarizer', 'mobile-ai-assistant'],
        lastUsed: '2024-02-28',
        trending: true
      }
    ]
  },
  {
    id: 'technical-skills',
    name: 'Technical Stack',
    description: 'Programming languages and technical frameworks',
    displayOrder: 2,
    skills: [
      {
        id: 'python',
        name: 'Python',
        level: 'expert',
        yearsOfExperience: 6,
        category: 'technical-skills',
        projects: ['ai-urban-nexus', 'zmar-ai-system', 'arabic-nlp-summarizer'],
        lastUsed: '2024-03-15',
        trending: false
      },
      {
        id: 'pytorch',
        name: 'PyTorch',
        level: 'expert',
        yearsOfExperience: 4,
        category: 'technical-skills',
        projects: ['ai-urban-nexus', 'arabic-nlp-summarizer'],
        lastUsed: '2024-01-15',
        trending: false
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        level: 'advanced',
        yearsOfExperience: 3,
        category: 'technical-skills',
        projects: ['realtime-analytics-dashboard'],
        lastUsed: '2024-03-01',
        trending: false
      }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Cloud platforms and deployment technologies',
    displayOrder: 3,
    skills: [
      {
        id: 'aws',
        name: 'Amazon Web Services',
        level: 'advanced',
        yearsOfExperience: 3,
        category: 'cloud-devops',
        projects: ['ai-urban-nexus', 'zmar-ai-system'],
        lastUsed: '2024-02-20',
        trending: false
      },
      {
        id: 'docker',
        name: 'Docker & Containerization',
        level: 'advanced',
        yearsOfExperience: 4,
        category: 'cloud-devops',
        projects: ['ai-urban-nexus', 'zmar-ai-system', 'realtime-analytics-dashboard'],
        lastUsed: '2024-02-20',
        trending: false
      }
    ]
  }
];

// Professional Certifications
export const certifications: Certification[] = [
  {
    id: 'aws-ml-specialty',
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    issueDate: '2023-08-15',
    expiryDate: '2026-08-15',
    credentialId: 'AWS-MLS-2023-ZA-001',
    verificationUrl: 'https://aws.amazon.com/verification',
    verified: true
  },
  {
    id: 'pytorch-certified',
    name: 'PyTorch Certified Developer',
    issuer: 'PyTorch Foundation',
    issueDate: '2023-06-20',
    expiryDate: '2025-06-20',
    credentialId: 'PYTORCH-DEV-2023-001',
    verified: true
  },
  {
    id: 'kubernetes-admin',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    issueDate: '2023-04-10',
    expiryDate: '2026-04-10',
    credentialId: 'CKA-2023-ZA-789',
    verificationUrl: 'https://training.linuxfoundation.org/certification/verify',
    verified: true
  }
];

// Real-time Performance Metrics
export const realTimeMetrics: RealTimeMetrics = {
  id: 'live-metrics-2024',
  apiUptime: 99.8,
  responseTime: 125,
  dailyCalls: 12547,
  systemsDeployed: 42,
  activeProjects: 8,
  clientsSatisfied: 15,
  lastUpdated: '2024-03-15T14:30:00Z',
  status: 'operational'
};

// Performance Metrics History
export const performanceMetrics: PerformanceMetric[] = [
  {
    id: 'uptime-q1-2024',
    name: 'System Uptime',
    value: 99.8,
    unit: '%',
    description: 'Overall system availability across all deployed services',
    category: 'technical',
    verified: true,
    source: 'AWS CloudWatch',
    dateRecorded: '2024-03-15',
    previousValue: 99.5,
    improvement: { percentage: 0.3, direction: 'positive' }
  },
  {
    id: 'response-time-q1-2024',
    name: 'Average Response Time',
    value: 125,
    unit: 'ms',
    description: 'Average API response time across all endpoints',
    category: 'performance',
    verified: true,
    source: 'Application Performance Monitoring',
    dateRecorded: '2024-03-15',
    previousValue: 180,
    improvement: { percentage: 30.6, direction: 'positive' }
  },
  {
    id: 'client-satisfaction-2024',
    name: 'Client Satisfaction Score',
    value: 4.8,
    unit: '/5',
    description: 'Average client satisfaction rating',
    category: 'business',
    verified: true,
    source: 'Client feedback surveys',
    dateRecorded: '2024-03-01',
    previousValue: 4.6,
    improvement: { percentage: 4.3, direction: 'positive' }
  },
  {
    id: 'project-success-rate',
    name: 'Project Success Rate',
    value: 96.3,
    unit: '%',
    description: 'Percentage of projects completed successfully on time and budget',
    category: 'business',
    verified: true,
    source: 'Project management system',
    dateRecorded: '2024-03-01',
    previousValue: 94.1,
    improvement: { percentage: 2.3, direction: 'positive' }
  }
];