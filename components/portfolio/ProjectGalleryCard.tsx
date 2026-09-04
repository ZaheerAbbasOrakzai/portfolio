"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, Code, ExternalLink, Calendar, Trophy } from 'lucide-react';
import type { Project } from '../../lib/types/portfolio';
import { technologyLabels, categoryLabels, industryLabels } from '../../lib/data/portfolio-data';

interface ProjectGalleryCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  className?: string;
}

const accentMap = {
  cyan: {
    bg: 'from-cyan-500/20 to-cyan-600/5',
    ring: 'border-cyan-400/20',
    text: 'text-cyan-400',
    glow: 'bg-cyan-500/15',
    button: 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-slate-950 hover:from-cyan-400 hover:to-cyan-500'
  },
  emerald: {
    bg: 'from-emerald-500/20 to-emerald-600/5',
    ring: 'border-emerald-400/20',
    text: 'text-emerald-400',
    glow: 'bg-emerald-500/15',
    button: 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-slate-950 hover:from-emerald-400 hover:to-emerald-500'
  },
  violet: {
    bg: 'from-violet-500/20 to-violet-600/5',
    ring: 'border-violet-400/20',
    text: 'text-violet-400',
    glow: 'bg-violet-500/15',
    button: 'bg-gradient-to-br from-violet-500 to-violet-600 text-slate-950 hover:from-violet-400 hover:to-violet-500'
  },
  orange: {
    bg: 'from-orange-500/20 to-orange-600/5',
    ring: 'border-orange-400/20',
    text: 'text-orange-400',
    glow: 'bg-orange-500/15',
    button: 'bg-gradient-to-br from-orange-500 to-orange-600 text-slate-950 hover:from-orange-400 hover:to-orange-500'
  },
  blue: {
    bg: 'from-blue-500/20 to-blue-600/5',
    ring: 'border-blue-400/20',
    text: 'text-blue-400',
    glow: 'bg-blue-500/15',
    button: 'bg-gradient-to-br from-blue-500 to-blue-600 text-slate-950 hover:from-blue-400 hover:to-blue-500'
  },
  purple: {
    bg: 'from-purple-500/20 to-purple-600/5',
    ring: 'border-purple-400/20',
    text: 'text-purple-400',
    glow: 'bg-purple-500/15',
    button: 'bg-gradient-to-br from-purple-500 to-purple-600 text-slate-950 hover:from-purple-400 hover:to-purple-500'
  },
  pink: {
    bg: 'from-pink-500/20 to-pink-600/5',
    ring: 'border-pink-400/20',
    text: 'text-pink-400',
    glow: 'bg-pink-500/15',
    button: 'bg-gradient-to-br from-pink-500 to-pink-600 text-slate-950 hover:from-pink-400 hover:to-pink-500'
  },
  green: {
    bg: 'from-green-500/20 to-green-600/5',
    ring: 'border-green-400/20',
    text: 'text-green-400',
    glow: 'bg-green-500/15',
    button: 'bg-gradient-to-br from-green-500 to-green-600 text-slate-950 hover:from-green-400 hover:to-green-500'
  }
};

const ProjectGalleryCard: React.FC<ProjectGalleryCardProps> = ({
  project,
  onViewDetails,
  className = ''
}) => {
  const theme = accentMap[project.accent];
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusBadge = () => {
    const statusStyles = {
      completed: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
      'in-progress': 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
      archived: 'bg-slate-400/10 text-slate-400 border-slate-400/20'
    };

    return (
      <span className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
        {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
      </span>
    );
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400 border border-yellow-400/20">
          <Trophy className="h-3 w-3" />
          Featured
        </div>
      )}

      <div className="relative p-6 sm:p-7">
        {project.media.thumbnail && !imageError && (
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/80 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <Image
              src={project.media.thumbnail}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
          </div>
        )}

        {/* Header */}
        <div className="mb-4 flex items-start gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.ring} text-xl transition-all duration-300 group-hover:scale-110 shrink-0`}>
            <span>{project.icon}</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              {getStatusBadge()}
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(project.startDate)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors break-words leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-1 break-words">{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed break-words">
          {project.description}
        </p>

        {/* Categories */}
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-md bg-gradient-to-br from-slate-800 to-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(0,217,255,0.1)] transition-all duration-300">
            {categoryLabels[project.category]}
          </span>
          <span className="inline-flex items-center rounded-md bg-gradient-to-br from-slate-800 to-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(0,217,255,0.1)] transition-all duration-300">
            {industryLabels[project.industry]}
          </span>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-gradient-to-br from-white/5 to-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-400 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(0,217,255,0.1)] hover:border-cyan-400/30 transition-all duration-300"
              >
                {technologyLabels[tech]}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-md bg-gradient-to-br from-white/5 to-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-400 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        {project.caseStudy.results.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400">Key Results</h4>
            <div className="space-y-1">
              {project.caseStudy.results.slice(0, 2).map((result, index) => (
                <div key={index} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-300 break-words mr-2">{result.metric}</span>
                  <span className={`font-semibold ${theme.text} shrink-0`}>{result.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 min-h-[44px]"
          >
            <Eye className="h-4 w-4" />
            View Details
          </button>
          
          {project.media.repository && (
            <a
              href={project.media.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-2.5 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 min-h-[44px] min-w-[44px]"
              aria-label={`View ${project.title} repository`}
            >
              <Code className="h-4 w-4" />
            </a>
          )}
          
          {project.media.demo && (
            <a
              href={project.media.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-2.5 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 min-h-[44px] min-w-[44px]"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectGalleryCard;