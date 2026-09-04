'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Play, X, Info, Code, BarChart3 } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { PremiumButton } from '../ui/PremiumButton';
import { PremiumBadge } from '../ui/PremiumBadge';
import premiumAssets from '@/lib/premium-assets';

const MotionDiv = motion.div as any;

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'ai-ml' | 'web-app' | 'mobile' | 'research';
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  technologies: string[];
  image: string;
  demo?: string;
  github?: string;
  video?: string;
  metrics?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI Hadith Authentication System',
    tagline: 'Islamic Text Classification with ML',
    description: 'Production Hadith authentication platform classifying 34,000+ narrations using Hugging Face transformers with OCR, ASR, and three-tier inference fallback.',
    category: 'ai-ml',
    featured: true,
    status: 'completed',
    technologies: ['Python', 'Flask', 'Hugging Face', 'BERT', 'OCR', 'ASR', 'Docker'],
    image: premiumAssets.projects.shariaFinance,
    demo: 'https://huggingface.co/spaces/abbasorakzai777/ai-hadith-authentication',
    github: 'https://github.com/ZaheerAbbasOrakzai/ai-hadith-authentication',
    metrics: [
      { label: 'Dataset Size', value: '34K+' },
      { label: 'Classifications', value: '4 Types' },
      { label: 'Input Modes', value: '3' },
    ],
  },
  {
    id: '2',
    title: 'AI Urban Nexus',
    tagline: 'Smart City Platform with 3 ML Models',
    description: 'Flutter smart city app with YOLOv8 crime detection, XGBoost traffic (99.55% F1), LSTM energy forecast, and Google Maps safe routing.',
    category: 'mobile',
    featured: true,
    status: 'completed',
    technologies: ['Flutter', 'YOLOv8', 'XGBoost', 'LSTM', 'Firebase', 'Google Maps'],
    image: '/assets/images/ChatGPT Image Aug 4, 2026, 04_14_07 AM.png',
    demo: 'https://huggingface.co/spaces/abbasorakzai777/ai-urban-nexus-pakistan',
    github: 'https://github.com/ZaheerAbbasOrakzai/ai-urban-nexus',
    metrics: [
      { label: 'Accuracy', value: '99.55%' },
      { label: 'Data Points', value: '87K+' },
      { label: 'ML Models', value: '3' },
    ],
  },
  {
    id: '3',
    title: 'Health Hub Platform',
    tagline: 'AI-Powered Healthcare Management',
    description: 'Comprehensive healthcare platform with AI diagnostics, appointment scheduling, telemedicine, and patient management.',
    category: 'web-app',
    featured: false,
    status: 'completed',
    technologies: ['Next.js', 'TypeScript', 'TensorFlow', 'PostgreSQL', 'WebRTC'],
    image: premiumAssets.skills.modernPerformance,
    demo: 'https://demo.healthhub.com',
    github: 'https://github.com/zaheerabbasorakzai/health-hub',
    metrics: [
      { label: 'Users', value: '5K+' },
      { label: 'Consultations', value: '10K+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: '4',
    title: 'Personal Financial Tracker',
    tagline: 'Smart Expense Management with AI',
    description: 'Financial management app with AI-powered expense categorization, budget recommendations, and investment insights.',
    category: 'mobile',
    featured: false,
    status: 'completed',
    technologies: ['React Native', 'Python', 'FastAPI', 'ML', 'Plaid API'],
    image: premiumAssets.about.keepGrowing,
    github: 'https://github.com/zaheerabbasorakzai/financial-tracker',
    metrics: [
      { label: 'Transactions', value: '50K+' },
      { label: 'AI Accuracy', value: '94%' },
      { label: 'Downloads', value: '2K+' },
    ],
  },
  {
    id: '5',
    title: 'AI Chat Bot FAQ System',
    tagline: 'RAG-Powered Customer Support',
    description: 'Intelligent FAQ chatbot using RAG (Retrieval Augmented Generation) with vector search and context-aware responses.',
    category: 'ai-ml',
    featured: false,
    status: 'completed',
    technologies: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI', 'React'],
    image: premiumAssets.skills.aiSolutions,
    demo: 'https://chatbot-demo.com',
    github: 'https://github.com/zaheerabbasorakzai/ai-chatbot-faq',
    metrics: [
      { label: 'Accuracy', value: '96%' },
      { label: 'Response Time', value: '< 2s' },
      { label: 'Queries', value: '100K+' },
    ],
  },
  {
    id: '6',
    title: 'Events Management System',
    tagline: 'Complete Event Planning Platform',
    description: 'Full-featured event management system with ticketing, attendee management, live streaming, and analytics.',
    category: 'web-app',
    featured: false,
    status: 'in-progress',
    technologies: ['Next.js', 'Stripe', 'WebRTC', 'PostgreSQL', 'AWS S3'],
    image: premiumAssets.about.buildingProjects,
    demo: 'https://events-demo.com',
    github: 'https://github.com/zaheerabbasorakzai/events-management',
    metrics: [
      { label: 'Events', value: '500+' },
      { label: 'Attendees', value: '20K+' },
      { label: 'Revenue', value: '$50K+' },
    ],
  },
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'ai-ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
  { id: 'web-app', label: 'Web Apps', count: projects.filter(p => p.category === 'web-app').length },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'research', label: 'Research', count: projects.filter(p => p.category === 'research').length },
];

export const PremiumProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'metrics'>('overview');

  const filteredProjects = activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <MotionDiv 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-world applications solving complex problems with AI and modern web technologies
          </p>
        </MotionDiv>

        {/* Category Filters */}
        <MotionDiv 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <MotionDiv
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Projects Grid */}
        <MotionDiv
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group hover:scale-105 transition-all duration-300"
              >
              <PremiumCard variant="glass" hover glow>
                <div className="h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent" />
                    
                    {/* Badges Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.featured && (
                        <PremiumBadge variant="primary" size="sm">
                          Featured
                        </PremiumBadge>
                      )}
                      <PremiumBadge 
                        variant={project.status === 'completed' ? 'success' : 'warning'}
                        size="sm"
                      >
                        {project.status === 'completed' ? '✓ Completed' : '🔄 In Progress'}
                      </PremiumBadge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent-400 mb-3 font-medium">
                      {project.tagline}
                    </p>
                    <p className="text-sm leading-relaxed text-text-secondary mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 rounded text-xs text-text-tertiary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-text-tertiary">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6 flex gap-2">
                    {project.demo && (
                      <button className="flex-1 px-3 py-2 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </button>
                    )}
                    {project.github && (
                      <button className="flex-1 px-3 py-2 bg-white/5 hover:bg-white/10 text-text-secondary rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <Code2 className="w-4 h-4" />
                        Code
                      </button>
                    )}
                  </div>
                </div>
              </PremiumCard>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* View All Projects CTA */}
        <MotionDiv 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <PremiumButton size="lg" variant="outline">
            View All Projects
          </PremiumButton>
        </MotionDiv>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <MotionDiv 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal */}
          <MotionDiv 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background-elevated/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background-primary/80 hover:bg-background-primary rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-elevated via-background-elevated/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.featured && (
                    <PremiumBadge variant="primary">Featured</PremiumBadge>
                  )}
                  <PremiumBadge variant="success">{selectedProject.status}</PremiumBadge>
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-accent-400 font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 border-b border-white/10">
                {[
                  { id: 'overview', label: 'Overview', icon: Info },
                  { id: 'tech', label: 'Technologies', icon: Code },
                  { id: 'metrics', label: 'Metrics', icon: BarChart3 },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-400'
                          : 'border-transparent text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === 'overview' && (
                  <p className="text-text-secondary leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}
                {activeTab === 'tech' && (
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-text-secondary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {activeTab === 'metrics' && selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-tertiary">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.demo && (
                  <PremiumButton
                    icon={<ExternalLink className="w-4 h-4" />}
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                  >
                    View Live Demo
                  </PremiumButton>
                )}
                {selectedProject.github && (
                  <PremiumButton
                    variant="outline"
                    icon={<Code2 className="w-4 h-4" />}
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    View Source Code
                  </PremiumButton>
                )}
                {selectedProject.video && (
                  <PremiumButton
                    variant="ghost"
                    icon={<Play className="w-4 h-4" />}
                    onClick={() => window.open(selectedProject.video, '_blank')}
                  >
                    Watch Video
                  </PremiumButton>
                )}
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </section>
  );
};

export default PremiumProjects;
