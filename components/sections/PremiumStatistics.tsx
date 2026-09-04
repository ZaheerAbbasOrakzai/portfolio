'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown, Code, Users, Clock, Star } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';

interface StatMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: number;
  trendDirection: 'up' | 'down' | 'neutral';
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

const metrics: StatMetric[] = [
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 25,
    unit: '+',
    trend: 15,
    trendDirection: 'up',
    icon: Code,
    color: 'text-primary-400',
    description: 'Successfully delivered projects',
  },
  {
    id: 'clients',
    label: 'Happy Clients',
    value: 18,
    unit: '',
    trend: 8,
    trendDirection: 'up',
    icon: Users,
    color: 'text-secondary-400',
    description: 'Satisfied clients worldwide',
  },
  {
    id: 'uptime',
    label: 'System Uptime',
    value: 99.9,
    unit: '%',
    trend: 2.1,
    trendDirection: 'up',
    icon: TrendingUp,
    color: 'text-success-400',
    description: 'Average application uptime',
  },
  {
    id: 'response',
    label: 'Avg Response Time',
    value: 120,
    unit: 'ms',
    trend: -15,
    trendDirection: 'down',
    icon: Clock,
    color: 'text-accent-400',
    description: 'API response time improvement',
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    value: 98,
    unit: '%',
    trend: 5,
    trendDirection: 'up',
    icon: Star,
    color: 'text-warning-400',
    description: 'Client satisfaction rating',
  },
];

const AnimatedCounter: React.FC<{ 
  value: number; 
  duration?: number; 
  decimals?: number 
}> = ({ value, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const currentValue = progress * value;
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return <span ref={countRef}>{count.toFixed(decimals)}</span>;
};

export const PremiumStatistics: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Performance{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Metrics
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-time insights into project delivery and system performance
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trendDirection === 'up' ? TrendingUp : TrendingDown;
            
            return (
              <div
                key={metric.id}
                className="group hover:scale-105 transition-all duration-300"
              >
                <PremiumCard 
                  variant="glass" 
                  hover 
                  glow
                >
                  <div className="p-6 text-center relative overflow-hidden h-full">
                    {/* Background Glow */}
                    <div className="absolute inset-0 opacity-20">
                      <div className={`w-full h-full bg-gradient-to-br ${
                        metric.color.includes('primary') ? 'from-primary-500/20 to-primary-600/20' :
                        metric.color.includes('secondary') ? 'from-secondary-500/20 to-secondary-600/20' :
                        metric.color.includes('accent') ? 'from-accent-500/20 to-accent-600/20' :
                        metric.color.includes('success') ? 'from-success-500/20 to-success-600/20' :
                        'from-warning-500/20 to-warning-600/20'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center ${metric.color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Value */}
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-text-primary">
                          <AnimatedCounter 
                            value={metric.value} 
                            decimals={metric.unit === '%' || metric.unit === 'ms' ? 1 : 0}
                          />
                        </span>
                        <span className={`text-lg font-medium ${metric.color} ml-1`}>
                          {metric.unit}
                        </span>
                      </div>

                      {/* Label */}
                      <h3 className="text-sm font-medium text-text-secondary mb-3">
                        {metric.label}
                      </h3>

                      {/* Trend */}
                      <div className="flex items-center justify-center gap-1">
                        <TrendIcon 
                          className={`w-4 h-4 ${
                            metric.trendDirection === 'up' 
                              ? 'text-success-400' 
                              : 'text-error-400'
                          }`} 
                        />
                        <span className={`text-xs font-medium ${
                          metric.trendDirection === 'up' 
                            ? 'text-success-400' 
                            : 'text-error-400'
                        }`}>
                          {Math.abs(metric.trend)}%
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-text-tertiary mt-2">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Technologies', value: '25+' },
            { label: 'AI Agents Deployed', value: '40+' },
            { label: 'Code Commits', value: '2K+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-tertiary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumStatistics;