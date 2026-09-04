'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { PremiumBadge } from '../ui/PremiumBadge';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  project: string;
  verified: boolean;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Ahmad Hassan',
    title: 'Lead Researcher',
    company: 'Islamic Studies Institute',
    avatar: '/assets/images/04_ai_powered_sharia_finance_assistant.png',
    rating: 5,
    quote: 'Zaheer delivered an exceptional AI Hadith Authentication System that revolutionized our research workflow. The 34,000+ narration classification with 91% accuracy exceeded our expectations. His expertise in Arabic NLP and Islamic text processing is remarkable.',
    project: 'AI Hadith Authentication System',
    verified: true,
    linkedinUrl: 'https://linkedin.com/in/ahmad-hassan-researcher',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Smart Cities Director',
    company: 'Urban Innovation Lab',
    avatar: '/assets/images/05_one_person_multiple_skills.png',
    rating: 5,
    quote: 'The AI Urban Nexus platform Zaheer built transformed our smart city initiatives. The 99.55% accuracy in traffic prediction and real-time crime detection capabilities are game-changing. Exceptional technical leadership and execution.',
    project: 'AI Urban Nexus Platform',
    verified: true,
    linkedinUrl: 'https://linkedin.com/in/sarah-chen-urban',
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    title: 'CTO',
    company: 'HealthTech Solutions',
    avatar: '/assets/images/08_modern_websites_built_for_performance.png',
    rating: 5,
    quote: 'Zaheer developed our complete healthcare platform with AI diagnostics and telemedicine features. His full-stack expertise and attention to performance optimization resulted in a system serving 5K+ users with 99.9% uptime.',
    project: 'Health Hub Platform',
    verified: true,
    linkedinUrl: 'https://linkedin.com/in/michael-rodriguez-cto',
  },
  {
    id: '4',
    name: 'Amira Al-Zahra',
    title: 'Product Manager',
    company: 'FinTech Innovations',
    avatar: '/assets/images/09_keep_building_keep_growing.png',
    rating: 5,
    quote: 'Our AI-powered financial tracker exceeded user expectations thanks to Zaheer&apos;s machine learning expertise. The 94% accuracy in expense categorization and intelligent budget recommendations drove 2K+ downloads in the first month.',
    project: 'Personal Financial Tracker',
    verified: true,
    linkedinUrl: 'https://linkedin.com/in/amira-alzahra-pm',
  },
  {
    id: '5',
    name: 'David Park',
    title: 'Engineering Lead',
    company: 'Enterprise AI Corp',
    avatar: '/assets/images/03_building_open_source_projects.png',
    rating: 5,
    quote: 'Zaheer&apos;s multi-agent RAG system revolutionized our document processing pipeline. The 96% retrieval accuracy with 100K+ documents and seamless LangChain integration delivered beyond our requirements. Outstanding AI engineering.',
    project: 'Multi-Agent RAG System',
    verified: true,
    linkedinUrl: 'https://linkedin.com/in/david-park-ai-lead',
  },
];

export const PremiumTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-warning-400 fill-current' 
            : 'text-text-tertiary'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Client{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            What clients say about working with me on their projects
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Testimonial Card */}
            <div key={currentIndex} className="relative">
              <PremiumCard variant="glass">
                <div className="p-8 md:p-12 text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 italic">
                    &quot;{currentTestimonial.quote}&quot;
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-lg shadow-primary-500/10">
                        <Image
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {currentTestimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Client Details */}
                    <div className="text-center md:text-left">
                      <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                        <h4 className="font-bold text-text-primary">
                          {currentTestimonial.name}
                        </h4>
                        {currentTestimonial.verified && (
                          <PremiumBadge variant="success" size="sm">
                            Verified
                          </PremiumBadge>
                        )}
                      </div>
                      <p className="text-primary-400 font-medium mb-1">
                        {currentTestimonial.title}
                      </p>
                      <p className="text-text-tertiary text-sm mb-2">
                        {currentTestimonial.company}
                      </p>
                      <div className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="text-xs text-text-tertiary">
                          Project: {currentTestimonial.project}
                        </span>
                        {currentTestimonial.linkedinUrl && (
                          <a
                            href={currentTestimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                            aria-label={`View ${currentTestimonial.name} on LinkedIn`}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-text-secondary group-hover:text-primary-400" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-text-secondary group-hover:text-primary-400" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary-500 scale-110' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              {isAutoPlaying ? 'Auto-playing (hover to pause)' : 'Paused (click to resume)'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;
