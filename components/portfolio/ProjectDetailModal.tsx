'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Code,
  Sparkles
} from 'lucide-react';
import { ProjectRecord } from '../../lib/data/projects-registry';

interface ProjectDetailModalProps {
  project: ProjectRecord | null;
  onClose: () => void;
  onSelectRelated?: (project: ProjectRecord) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectRelated
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="w-full max-w-4xl bg-[#0A0F1E] border border-[#1F2937] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 text-[#CBD5E1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2937] bg-[#111827]/80 sticky top-0 z-20 backdrop-blur-lg">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.tier}
            </span>
            <span className="text-xs font-mono text-[#64748B] truncate">
              {project.repoName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#0A0F1E] hover:bg-white/10 text-[#CBD5E1] hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Live Demo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Case Study Layout */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-[#1F2937]/60">
          
          {/* Section 01: Hero & Overview */}
          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {project.categoryLabel}
              </div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-bold text-[#F8FAFC]">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Visual Header / Thumbnail */}
            <div className="relative rounded-xl overflow-hidden bg-[#111827] border border-[#1F2937] aspect-video w-full max-h-[360px] shadow-lg">
              <Image
                src={project.thumbnail}
                alt={`${project.name} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-50" />
            </div>

            {/* Verified Metrics Strip (if available) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#111827] border border-[#1F2937]">
                    <div className="text-xl font-mono font-bold text-cyan-400">{m.value}</div>
                    <div className="text-xs font-semibold text-[#F8FAFC] mt-0.5">{m.label}</div>
                    {m.detail && <div className="text-[11px] text-[#64748B] font-mono mt-0.5">{m.detail}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 02 & 03: Problem & Solution (if available) */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {project.problem && (
                <div className="p-5 rounded-xl bg-[#111827] border border-red-500/20 space-y-2">
                  <div className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <span>02 // The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-5 rounded-xl bg-[#111827] border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <span>03 // The Engineering Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Section 04: Architecture Flow & System Diagram (Principle 20) */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-4 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>04 // System Architecture & Directional Flow</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {project.architecture.length} Subsystems
                </span>
              </div>

              {/* Visual Directional Flow Nodes */}
              <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748B]">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Directional Execution Pipeline:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                  {project.architecture.map((layer, idx) => {
                    const isLast = idx === project.architecture!.length - 1;
                    return (
                      <div key={idx} className="relative flex flex-col justify-between p-3 rounded-lg bg-[#0A0F1E] border border-white/5 hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                            L{idx + 1}
                          </span>
                          {!isLast && (
                            <ArrowRight className="w-3.5 h-3.5 text-violet-400 hidden lg:block opacity-60" />
                          )}
                        </div>
                        <span className="text-xs font-mono text-[#F8FAFC] font-medium leading-snug">
                          {layer}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Section 05: Verified Technologies */}
          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <Code className="w-4 h-4" />
              <span>05 // Verified Technical Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-lg bg-[#111827] border border-[#1F2937] text-xs font-mono text-[#CBD5E1] hover:border-cyan-500/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 06: Full Technical Description */}
          <div className="space-y-3 pt-8">
            <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider font-semibold">
              06 // Technical Deep Dive
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Section 07: Actions & Direct Repository Access */}
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#64748B]">
              Language: <span className="text-[#F8FAFC]">{project.language}</span> • Status: <span className="text-cyan-400 uppercase">{project.status}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono transition-colors shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>OPEN REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-[#F8FAFC] border border-[#1F2937] text-xs font-mono transition-colors"
                >
                  <span>LAUNCH DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ProjectDetailModal;