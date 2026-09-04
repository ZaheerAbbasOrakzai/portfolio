export interface ProjectMedia {
  thumbnail: string;
  gallery: string[];
  demo?: string;
  repository?: string;
  video?: string;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  results: QuantifiableResult[];
  testimonial?: string;
  metrics?: ProjectMetric[];
}

export interface QuantifiableResult {
  metric: string;
  value: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export interface ProjectSEO {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export type ProjectCategory = 'ai-ml' | 'web-app' | 'mobile' | 'infrastructure' | 'research' | 'open-source';
export type IndustryType = 'fintech' | 'healthcare' | 'e-commerce' | 'education' | 'smart-cities' | 'enterprise' | 'research';
export type TechnologyTag = 
  | 'react' | 'nextjs' | 'typescript' | 'javascript' | 'nodejs' | 'python' | 'tensorflow' | 'pytorch'
  | 'aws' | 'docker' | 'kubernetes' | 'mongodb' | 'postgresql' | 'redis' | 'fastapi'
  | 'llm' | 'computer-vision' | 'nlp' | 'transformers' | 'yolo' | 'opencv' | 'bert'
  | 'multi-agent' | 'rag' | 'vector-db' | 'firebase' | 'vercel' | 'tailwind'
  | 'flask' | 'sqlite' | 'huggingface' | 'ocr' | 'asr'
  | 'flutter' | 'dart' | 'yolov8' | 'xgboost' | 'lstm' | 'google-maps'
  | 'groq-api' | 'llama' | 'qwen' | 'pdf-generation' | 'material-ui'
  | 'jwt' | 'recharts' | 'swagger' | 'restapi'
  | 'sentence-transformers' | 'streamlit' | 'semantic-search' | 'embedding'
  | 'firestore' | 'cloudinary' | 'cross-platform' | 'material-design'
  | 'riverpod' | 'provider' | 'fl_chart' | 'calendar'
  | 'nginx' | 'vite';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: TechnologyTag[];
  category: ProjectCategory;
  industry: IndustryType;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  startDate: string;
  endDate?: string;
  caseStudy: CaseStudy;
  media: ProjectMedia;
  seo: ProjectSEO;
  icon: string;
  accent: 'cyan' | 'emerald' | 'violet' | 'orange' | 'blue' | 'purple' | 'pink' | 'green';
}

export interface FilterOptions {
  technologies: TechnologyTag[];
  categories: ProjectCategory[];
  industries: IndustryType[];
  status?: ('completed' | 'in-progress' | 'archived')[];
  featured?: boolean;
}

export interface PortfolioFilters {
  technology?: TechnologyTag;
  category?: ProjectCategory;
  industry?: IndustryType;
  status?: 'completed' | 'in-progress' | 'archived';
  featured?: boolean;
  search?: string;
}

export interface PortfolioState {
  projects: Project[];
  filters: PortfolioFilters;
  selectedProject?: Project;
  isModalOpen: boolean;
  sortBy: 'date' | 'title' | 'featured';
  sortOrder: 'asc' | 'desc';
}

// Professional Experience Data Models
export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: Achievement[];
  technologies: TechnologyTag[];
  verifiable: boolean;
  verificationUrl?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  industry: IndustryType;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  impact?: string;
  metrics?: PerformanceMetric[];
  verified: boolean;
  evidence?: string;
}

// Testimonial Data Models
export interface ClientTestimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientCompanyUrl?: string;
  content: string;
  rating: number; // 1-5
  projectId?: string;
  experienceId?: string;
  verified: boolean;
  verificationMethod?: 'email' | 'linkedin' | 'phone' | 'meeting';
  verificationDate?: string;
  image?: string;
  linkedinProfile?: string;
  location?: string;
  dateGiven: string;
  featured: boolean;
}

// Performance Metrics Data Models
export interface PerformanceMetric {
  id: string;
  name: string;
  value: string | number;
  unit?: string;
  description: string;
  category: 'technical' | 'business' | 'user' | 'performance';
  verified: boolean;
  source?: string;
  dateRecorded: string;
  previousValue?: string | number;
  improvement?: {
    percentage: number;
    direction: 'positive' | 'negative';
  };
}

export interface RealTimeMetrics {
  id: string;
  apiUptime: number;
  responseTime: number;
  dailyCalls: number;
  systemsDeployed: number;
  activeProjects: number;
  clientsSatisfied: number;
  lastUpdated: string;
  status: 'operational' | 'degraded' | 'maintenance';
}

// Content Versioning Data Models
export interface ContentVersion {
  id: string;
  contentType: 'project' | 'experience' | 'testimonial' | 'profile' | 'metrics';
  contentId: string;
  version: string;
  changes: ContentChange[];
  author: string;
  timestamp: string;
  published: boolean;
  previousVersion?: string;
  nextVersion?: string;
  metadata: {
    title?: string;
    description?: string;
    tags?: string[];
  };
}

export interface ContentChange {
  field: string;
  oldValue: any;
  newValue: any;
  changeType: 'create' | 'update' | 'delete';
  reason?: string;
}

export interface ContentUpdateSystem {
  lastSync: string;
  updateFrequency: 'real-time' | 'hourly' | 'daily' | 'weekly';
  autoPublish: boolean;
  reviewRequired: boolean;
  backupRetention: number; // days
  versionLimit: number;
}

// Skills and Expertise Data Models
export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
  displayOrder: number;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  category: string;
  projects: string[]; // Project IDs
  certifications?: Certification[];
  lastUsed: string;
  trending: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  verified: boolean;
}

// Portfolio Overview Data Model
export interface PortfolioProfile {
  id: string;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  shortBio: string;
  contactInfo: ContactInformation;
  socialProfiles: SocialMediaLinks;
  availability: AvailabilityStatus;
  location: LocationInfo;
  languages: Language[];
  timeZone: string;
  workingHours: WorkingHours;
  rates: RateInformation;
  lastUpdated: string;
  version: string;
}

export interface ContactInformation {
  email: string;
  phone?: string;
  whatsapp?: string;
  calendlyUrl?: string;
  preferredContactMethod: 'email' | 'phone' | 'whatsapp' | 'linkedin';
  businessHours: string;
}

export interface SocialMediaLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  behance?: string;
  dribbble?: string;
  medium?: string;
  website?: string;
  huggingFace?: string;
}

export interface AvailabilityStatus {
  available: boolean;
  nextAvailable?: string;
  capacity: 'full' | 'limited' | 'booked';
  lookingFor: ProjectType[];
  notInterestedIn: ProjectType[];
}

export interface LocationInfo {
  city: string;
  country: string;
  timezone: string;
  remoteOnly: boolean;
  willingToRelocate: boolean;
  travelAvailable: boolean;
}

export interface Language {
  name: string;
  proficiency: 'native' | 'fluent' | 'conversational' | 'basic';
  verified: boolean;
}

export interface WorkingHours {
  timezone: string;
  schedule: {
    [key: string]: { // day of week
      start: string;
      end: string;
      available: boolean;
    };
  };
  flexibleHours: boolean;
}

export interface RateInformation {
  hourlyRate?: {
    min: number;
    max: number;
    currency: string;
  };
  projectRate?: {
    min: number;
    max: number;
    currency: string;
  };
  retainerAvailable: boolean;
  equityConsidered: boolean;
  proBonoAvailable: boolean;
}

export type ProjectType = 'ai-consulting' | 'full-stack-dev' | 'ml-engineering' | 'data-science' | 'research' | 'training';

// Complete Portfolio Data Structure
export interface CompletePortfolio {
  profile: PortfolioProfile;
  projects: Project[];
  experience: Experience[];
  testimonials: ClientTestimonial[];
  skills: SkillCategory[];
  metrics: RealTimeMetrics;
  certifications: Certification[];
  contentSystem: ContentUpdateSystem;
  versions: ContentVersion[];
  lastUpdated: string;
  version: string;
}

// Re-export all types for easy access
export * from './portfolio';

// Export utility types
export type PortfolioDataAccess = {
  projects: Project[];
  experience: Experience[];
  testimonials: ClientTestimonial[];
  skills: SkillCategory[];
  metrics: RealTimeMetrics;
  profile: PortfolioProfile;
};

export type ContentManagementConfig = {
  versioningEnabled: boolean;
  autoPublish: boolean;
  reviewRequired: boolean;
  backupRetention: number;
};