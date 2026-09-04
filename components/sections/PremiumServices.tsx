'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  Cloud, 
  Database, 
  Zap, 
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { PremiumButton } from '../ui/PremiumButton';
import { PremiumBadge } from '../ui/PremiumBadge';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  pricing: string;
  popular?: boolean;
  benefits: string[];
  category: 'ai' | 'development' | 'consulting';
  ctaText: string;
  ctaLink: string;
}

const services: Service[] = [
  {
    id: '1',
    icon: Brain,
    title: 'AI & ML Solutions',
    description: 'Custom artificial intelligence and machine learning solutions tailored to your business needs.',
    pricing: 'Starting at $5,000',
    popular: true,
    benefits: [
      'Custom AI model development',
      'Data preprocessing & analysis', 
      'Model training & optimization',
      'API integration & deployment',
      'Performance monitoring',
      '3 months support included'
    ],
    category: 'ai',
    ctaText: 'Start AI Project',
    ctaLink: '#contact'
  },
  {
    id: '2',
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Complete web and mobile application development from concept to deployment.',
    pricing: 'Starting at $3,000',
    benefits: [
      'React/Next.js applications',
      'Backend API development',
      'Database design & optimization',
      'Cloud deployment & hosting',
      'Performance optimization',
      '2 months support included'
    ],
    category: 'development',
    ctaText: 'Build Application',
    ctaLink: '#contact'
  },
  {
    id: '3',
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure design and implementation for modern applications.',
    pricing: 'Starting at $2,500',
    benefits: [
      'AWS/GCP/Azure setup',
      'Serverless architecture',
      'CI/CD pipeline setup',
      'Security best practices',
      'Cost optimization',
      '1 month support included'
    ],
    category: 'development',
    ctaText: 'Design Architecture',
    ctaLink: '#contact'
  },
  {
    id: '4',
    icon: Database,
    title: 'Data Engineering',
    description: 'End-to-end data pipeline development and analytics solution implementation.',
    pricing: 'Starting at $4,000',
    benefits: [
      'Data pipeline development',
      'ETL/ELT processes',
      'Real-time analytics',
      'Data warehousing',
      'Visualization dashboards',
      '2 months support included'
    ],
    category: 'ai',
    ctaText: 'Process Data',
    ctaLink: '#contact'
  },
  {
    id: '5',
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Comprehensive application and infrastructure performance optimization services.',
    pricing: 'Starting at $1,500',
    benefits: [
      'Code performance audit',
      'Database optimization',
      'Bundle size reduction',
      'Loading speed improvement',
      'SEO optimization',
      '6 weeks support included'
    ],
    category: 'development',
    ctaText: 'Optimize Performance',
    ctaLink: '#contact'
  },
  {
    id: '6',
    icon: MessageSquare,
    title: 'Technical Consulting',
    description: 'Strategic technical consulting and architecture review for your projects.',
    pricing: '$150/hour',
    benefits: [
      'Technical architecture review',
      'Technology stack recommendations',
      'Code quality assessment',
      'Scalability planning',
      'Team mentoring',
      'Flexible scheduling'
    ],
    category: 'consulting',
    ctaText: 'Book Consultation',
    ctaLink: '#contact'
  }
];

const categoryColors = {
  ai: 'from-purple-500 to-pink-500',
  development: 'from-blue-500 to-cyan-500',
  consulting: 'from-green-500 to-emerald-500'
};

const categoryIcons = {
  ai: Brain,
  development: Code2,
  consulting: MessageSquare
};

export const PremiumServices: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-500/5 via-transparent to-primary-500/5" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const CategoryIcon = categoryIcons[service.category];
            
            return (
              <div
                key={service.id}
                className="relative"
              >
                <PremiumCard>
                  <div className="h-full group hover:scale-105 transition-all duration-300 relative overflow-hidden p-6">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      </div>
                    )}

                    {/* Service Header */}
                    <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${categoryColors[service.category]} p-3 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-1">{service.title}</h3>
                        <div className="flex items-center gap-2">
                          <CategoryIcon className="w-4 h-4 text-text-tertiary" />
                          <span className="text-sm text-text-tertiary capitalize">{service.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4">{service.description}</p>
                    
                    <div className="text-2xl font-bold text-text-primary mb-4">
                      {service.pricing}
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold text-text-primary mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <PremiumButton
                    variant={service.popular ? "primary" : "outline"}
                    icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    onClick={scrollToContact}
                    className="w-full"
                  >
                    {service.ctaText}
                  </PremiumButton>

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[service.category]} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </PremiumCard>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-text-secondary mb-6">
              Every project is unique. Let&apos;s discuss your specific requirements and create a tailored solution that perfectly fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <PremiumButton
                variant="primary"
                icon={<MessageSquare className="w-4 h-4" />}
                onClick={scrollToContact}
              >
                Start a Project
              </PremiumButton>
              <PremiumButton
                variant="outline"
                icon={<MessageSquare className="w-4 h-4" />}
                onClick={scrollToContact}
              >
                Schedule Consultation
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;