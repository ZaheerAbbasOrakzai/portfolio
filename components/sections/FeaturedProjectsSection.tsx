'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Radio, 
  ShieldCheck, 
  Cpu, 
  Activity,
  Layers,
  Database,
  CheckCircle2
} from 'lucide-react';
import { projectsRegistry, ProjectRecord } from '../../lib/data/projects-registry';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectRecord) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onSelectProject }) => {
  const flagshipProjects = projectsRegistry.filter(p => p.tier === 'flagship');
  const primaryProject = flagshipProjects[0]; // Meshline Android
  const secondaryProjects = flagshipProjects.slice(1); // Other flagships

  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] relative"
      aria-labelledby="featured-projects-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>03 // Flagship Deployments</span>
            </div>
            <h2 
              id="featured-projects-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Flagship Engineering Deployments
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Major systems demonstrating substantial technical depth across mobile mesh cryptography, multi-model smart city AI, and RAG compliance.
          </p>
        </div>

        {/* 1. Primary Asymmetric Flagship Showcase (Meshline Android) */}
        {primaryProject && (
          <div className="rounded-2xl overflow-hidden border border-cyan-500/40 bg-[#0A0F1E] shadow-[0_0_40px_rgba(6,182,212,0.12)] hover:border-cyan-400 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Media Column */}
              <div className="relative overflow-hidden bg-[#111827] lg:col-span-7 min-h-[340px] sm:min-h-[420px]">
                <Image
                  src={primaryProject.thumbnail}
                  alt={`${primaryProject.name} Architecture Preview`}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 750px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-70" />
                
                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    PRIMARY FLAGSHIP
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#CBD5E1]">
                    {primaryProject.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-[#CBD5E1]">
                  <span>Zero-Cellular Bluetooth Mesh</span>
                  <span className="text-emerald-400 font-bold">ECDH Curve25519</span>
                </div>
              </div>

              {/* Information & Action Column */}
              <div className="p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {primaryProject.repoName}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F8FAFC] tracking-tight mt-1">
                      {primaryProject.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {primaryProject.description}
                  </p>

                  {/* Grounded Metrics */}
                  {primaryProject.metrics && (
                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      {primaryProject.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-[#111827] border border-[#1F2937]">
                          <div className="text-sm font-mono font-bold text-cyan-400">{m.value}</div>
                          <div className="text-[10px] text-[#64748B] font-mono truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Architecture Checklist */}
                  {primaryProject.architecture && (
                    <div className="space-y-1.5 pt-2 border-t border-[#1F2937]">
                      <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                        Core Architecture Highlights:
                      </div>
                      {primaryProject.architecture.slice(0, 3).map((arch, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{arch}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {primaryProject.technologies.slice(0, 8).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-[10px] font-mono text-[#CBD5E1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explicit Visible Actions (Principle 2: No Hidden Functionality) */}
                <div className="pt-4 border-t border-[#1F2937] flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(primaryProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all shadow-[0_0_16px_rgba(0,242,255,0.3)] hover:shadow-[0_0_24px_rgba(0,242,255,0.5)] font-mono font-bold text-xs"
                    style={{
                      backgroundColor: '#080D1A',
                      border: '1.5px solid #00F2FF',
                      color: '#00F2FF'
                    }}
                  >
                    <span style={{ color: '#00F2FF', textShadow: '0 0 10px rgba(0,242,255,0.5)' }}>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: '#00F2FF' }} />
                  </button>

                  <a
                    href={primaryProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-[#F8FAFC] border border-[#1F2937] text-xs font-mono transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GITHUB REPO</span>
                  </a>

                  {primaryProject.demoUrl && (
                    <a
                      href={primaryProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 text-xs font-mono transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. Secondary Flagships (2x2 Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0A0F1E] flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Media Header */}
                <div className="relative overflow-hidden bg-[#111827] aspect-video w-full min-h-[200px]">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-60" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-300 uppercase">
                      {project.tier}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#CBD5E1]">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-[#64748B]">{project.repoName}</div>
                    <h3 className="text-xl font-display font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors mt-0.5">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#CBD5E1] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Verified Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded bg-[#111827] border border-[#1F2937]">
                          <div className="text-xs font-mono font-bold text-cyan-400">{m.value}</div>
                          <div className="text-[9px] text-[#64748B] font-mono truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-[10px] font-mono text-[#CBD5E1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Explicit Action Buttons (Principle 2: Clear Affordance) */}
              <div className="p-6 pt-0 border-t border-white/[0.04] mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-[#CBD5E1] hover:text-white border border-[#1F2937] text-xs font-mono transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GITHUB</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-mono text-[#64748B] hover:text-cyan-400 transition-colors"
                      title="Open Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>DEMO</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
