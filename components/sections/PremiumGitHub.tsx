'use client';

import React from 'react';
import { GitBranch, Star, GitFork, ExternalLink, Calendar } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { PremiumBadge } from '../ui/PremiumBadge';

interface Repository {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  lastUpdated: string;
}

const repositories: Repository[] = [
  {
    name: 'ai-hadith-authentication',
    description: 'ML-powered Hadith classification system with 34K+ narrations, OCR/ASR support, and multi-tier inference',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 24,
    forks: 8,
    url: 'https://github.com/ZaheerAbbasOrakzai/ai-hadith-authentication',
    lastUpdated: '2024-01-15',
  },
  {
    name: 'ai-urban-nexus-pakistan',
    description: 'Smart city platform with YOLOv8 crime detection, XGBoost traffic prediction (99.55% F1), and LSTM energy forecasting',
    language: 'Flutter',
    languageColor: '#02569B',
    stars: 18,
    forks: 6,
    url: 'https://github.com/ZaheerAbbasOrakzai/ai-urban-nexus',
    lastUpdated: '2024-02-28',
  },
  {
    name: 'premium-portfolio-nextjs',
    description: 'Premium dark-mode portfolio with glassmorphism, Framer Motion animations, and AI-focused design',
    language: 'TypeScript',
    languageColor: '#2b7489',
    stars: 32,
    forks: 12,
    url: 'https://github.com/ZaheerAbbasOrakzai/premium-portfolio',
    lastUpdated: '2024-03-10',
  },
  {
    name: 'multi-agent-rag-system',
    description: 'Enterprise RAG system with multiple specialized AI agents, vector search, and LangChain integration',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 41,
    forks: 15,
    url: 'https://github.com/ZaheerAbbasOrakzai/multi-agent-rag',
    lastUpdated: '2024-03-05',
  },
  {
    name: 'health-hub-platform',
    description: 'Healthcare management platform with AI diagnostics, telemedicine, and patient analytics',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 27,
    forks: 9,
    url: 'https://github.com/ZaheerAbbasOrakzai/health-hub',
    lastUpdated: '2024-01-20',
  },
  {
    name: 'financial-tracker-ai',
    description: 'Personal finance app with AI expense categorization and investment recommendations',
    language: 'React Native',
    languageColor: '#61DAFB',
    stars: 19,
    forks: 7,
    url: 'https://github.com/ZaheerAbbasOrakzai/financial-tracker',
    lastUpdated: '2023-12-15',
  },
];

const githubStats = [
  { label: 'Total Repositories', value: '45+', icon: GitBranch },
  { label: 'Total Stars', value: '280+', icon: Star },
  { label: 'Total Forks', value: '95+', icon: GitFork },
  { label: 'Contributions', value: '2.1K+', icon: Calendar },
];

export const PremiumGitHub: React.FC = () => {
  const buildContributionData = () => {
    const end = new Date();
    const start = new Date(end);
    start.setDate(end.getDate() - 364);

    const hashString = (input: string) => {
      let hash = 2166136261;
      for (let i = 0; i < input.length; i += 1) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
      return hash >>> 0;
    };

    return Array.from({ length: 365 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      const dateKey = date.toISOString().split('T')[0];
      const bucket = hashString(dateKey) % 100;

      const count =
        bucket < 58 ? 0 :
        bucket < 76 ? 1 :
        bucket < 88 ? 2 :
        bucket < 96 ? 3 :
        4;

      return { date: dateKey, count };
    });
  };

  const contributionData = buildContributionData();

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-white/5';
    if (count <= 1) return 'bg-primary-500/30';
    if (count <= 2) return 'bg-primary-500/50';
    if (count <= 3) return 'bg-primary-500/70';
    return 'bg-primary-500';
  };

  return (
    <section className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            GitHub{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Open source contributions and project development activity
          </p>
        </div>

        {/* GitHub Stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {githubStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <PremiumCard key={index} variant="glass" hover>
                <div className="p-4 text-center">
                  <Icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-tertiary">
                    {stat.label}
                  </div>
                </div>
              </PremiumCard>
            );
          })}
        </div>

        {/* Contribution Graph */}
        <div
          className="mb-12"
        >
          <PremiumCard variant="glass">
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold text-text-primary">
                  Contribution Activity (Last 12 Months)
                </h3>
                <PremiumBadge variant="secondary" size="sm">
                  Sample Data
                </PremiumBadge>
              </div>

              <div className="overflow-x-auto">
                <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[820px]">
                  {contributionData.map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} transition-all hover:scale-110`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-sm text-text-tertiary">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-sm bg-white/5" />
                  <div className="w-3 h-3 rounded-sm bg-primary-500/30" />
                  <div className="w-3 h-3 rounded-sm bg-primary-500/50" />
                  <div className="w-3 h-3 rounded-sm bg-primary-500/70" />
                  <div className="w-3 h-3 rounded-sm bg-primary-500" />
                </div>
                <span>More</span>
              </div>
            </div>
          </PremiumCard>
        </div>

        {/* Pinned Repositories */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Pinned Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {repositories.map((repo, index) => (
              <div
                key={repo.name}
                className="group hover:scale-105 transition-all duration-300"
              >
                <PremiumCard 
                  variant="glass" 
                  hover 
                  glow 
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Repository Header */}
                    <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-primary-400" />
                      <h4 className="font-bold text-text-primary text-lg">
                        {repo.name}
                      </h4>
                    </div>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <ExternalLink className="w-4 h-4 text-text-tertiary group-hover:text-primary-400" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-4 flex-grow">
                    {repo.description}
                  </p>

                  {/* Repository Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Language */}
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: repo.languageColor }}
                        />
                        <span className="text-xs text-text-tertiary">
                          {repo.language}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-text-tertiary" />
                        <span className="text-xs text-text-tertiary">
                          {repo.stars}
                        </span>
                      </div>

                      {/* Forks */}
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-text-tertiary" />
                        <span className="text-xs text-text-tertiary">
                          {repo.forks}
                        </span>
                      </div>
                    </div>

                    {/* Last Updated */}
                    <span className="text-xs text-text-tertiary">
                      Updated {new Date(repo.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                  </div>
                </PremiumCard>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Profile CTA */}
        <div
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ZaheerAbbasOrakzai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
          >
            <GitBranch className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumGitHub;
