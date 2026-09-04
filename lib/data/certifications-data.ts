export interface VerifiedCertification {
  id: string;
  name: string;
  issuer: string;
  category: 'ml-ai' | 'engineering' | 'digital-skills';
  imagePath: string;
  issueDate: string;
  verificationUrl?: string;
  skills: string[];
}

export const verifiedCertifications: VerifiedCertification[] = [
  {
    id: 'kaggle-intro-to-machine-learning',
    name: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    category: 'ml-ai',
    imagePath: '/assets/certifications/zaheer abbas - Intro to Machine Learning.png',
    issueDate: 'Verified',
    verificationUrl: 'https://www.kaggle.com/zaheerabbas',
    skills: ['Model Validation', 'Decision Trees', 'Random Forests', 'Underfitting & Overfitting']
  },
  {
    id: 'kaggle-time-series',
    name: 'Time Series',
    issuer: 'Kaggle',
    category: 'ml-ai',
    imagePath: '/assets/certifications/zaheer abbas - Time Series.png',
    issueDate: 'Verified',
    verificationUrl: 'https://www.kaggle.com/zaheerabbas',
    skills: ['Trend Analysis', 'Seasonality', 'Time Series as Features', 'Hybrid Forecasting']
  },
  {
    id: 'advanced-seo',
    name: 'Advanced SEO',
    issuer: 'DigiSkills / Punjab IT Board',
    category: 'digital-skills',
    imagePath: '/assets/certifications/certification-3-advanced-seo.png',
    issueDate: 'Verified',
    skills: ['Technical SEO', 'Structured Data', 'Performance Optimization', 'Search Analytics']
  },
  {
    id: 'ecommerce-specialist',
    name: 'E-Commerce Specialist',
    issuer: 'DigiSkills Training Program',
    category: 'digital-skills',
    imagePath: '/assets/certifications/certification-4-ecommerce-specialist.png',
    issueDate: 'Verified',
    skills: ['Digital Storefronts', 'Catalog Management', 'Conversion Funnels', 'Payment Integrations']
  },
  {
    id: 'freelancing-professional',
    name: 'Freelancing & Technical Consulting',
    issuer: 'DigiSkills Training Program',
    category: 'digital-skills',
    imagePath: '/assets/certifications/certification-6-freelancing.png',
    issueDate: 'Verified',
    skills: ['Client Communication', 'Scope Management', 'Milestone Delivery', 'Global Contracts']
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design & Digital UI',
    issuer: 'DigiSkills Training Program',
    category: 'digital-skills',
    imagePath: '/assets/certifications/certification-7-graphic-design.png',
    issueDate: 'Verified',
    skills: ['Visual Hierarchy', 'Typography Systems', 'Vector Layouts', 'Design Principles']
  },
  {
    id: 'electrician-apprentice',
    name: 'Electrical Engineering & Hardware Foundations',
    issuer: 'Technical & Vocational Training',
    category: 'engineering',
    imagePath: '/assets/certifications/certification-5-electrician-apprentice.png',
    issueDate: 'Verified',
    skills: ['Circuit Analysis', 'Hardware Interfacing', 'Signal Measurement', 'Power Systems']
  }
];
