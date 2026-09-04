'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Layers, 
  Cpu, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  X,
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react';
import { projectsRegistry, ProjectRecord, projectTiers, projectCategories } from '../../lib/data/projects-registry';

interface ProjectExplorerProps {
  onSelectProject: (project: ProjectRecord) => void;
  selectedTechFilter?: string | null;
  onClearTechFilter?: () => void;
}

export const ProjectExplorer: React.FC<ProjectExplorerProps> = ({ 
  onSelectProject,
  selectedTechFilter,
  onClearTechFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [sortBy, setSortBy] = useState<'tier' | 'name' | 'recent'>('tier');

  // Filtered and sorted projects list across all 48 repositories
  const filteredProjects = useMemo(() => {
    let result = projectsRegistry.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'ai-ml' && !['ai-ml', 'nlp', 'computer-vision', 'time-series', 'research'].includes(p.category)) {
          return false;
        } else if (selectedCategory !== 'ai-ml' && p.category !== selectedCategory) {
          return false;
        }
      }

      // Tier filter
      if (selectedTier !== 'all' && p.tier !== selectedTier) {
        return false;
      }

      // Tech filter (from skills section click)
      if (selectedTechFilter) {
        const hasTech = p.technologies.some(
          t => t.toLowerCase() === selectedTechFilter.toLowerCase()
        ) || p.relatedProjects.some(
          r => r.toLowerCase() === selectedTechFilter.toLowerCase()
        );
        if (!hasTech) return false;
      }

      // Text search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesText = 
          p.name.toLowerCase().includes(q) ||
          p.repoName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q));
        if (!matchesText) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'recent') {
      result.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    } else {
      // Default: Flagship first, then featured, lab, agent, supporting
      const tierRank: Record<string, number> = {
        flagship: 0,
        featured: 1,
        agent: 2,
        lab: 3,
        supporting: 4
      };
      result.sort((a, b) => (tierRank[a.tier] ?? 99) - (tierRank[b.tier] ?? 99));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTier, selectedTechFilter, sortBy]);

  const hasActiveFilters = Boolean(
    searchQuery.trim() || 
    selectedCategory !== 'all' || 
    selectedTier !== 'all' || 
    selectedTechFilter
  );

  const handleClearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTier('all');
    if (onClearTechFilter) onClearTechFilter();
  };

  return (
    <section 
      id="explorer" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] relative"
      aria-labelledby="explorer-heading"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Terminal className="w-4 h-4" />
              <span>05 // Project Explorer</span>
            </div>
            <h2 
              id="explorer-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              The 48-Repository Universe
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#64748B]">
            <div>
              Showing <span className="text-cyan-400 font-bold">{filteredProjects.length}</span> of {projectsRegistry.length} verified repositories
            </div>
          </div>
        </div>

        {/* Filter & Search Toolbar (Principle 17 & 18) */}
        <div className="space-y-4 bg-[#0A0F1E] border border-[#1F2937] p-5 rounded-2xl shadow-lg">
          
          {/* Top Bar: Search Input + Sort Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, repository name, or technology (e.g. YOLO, RAG, PyTorch)..."
                className="w-full bg-[#111827] border border-[#1F2937] rounded-xl pl-10 pr-10 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-white p-1"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111827] border border-[#1F2937] text-xs font-mono text-[#CBD5E1] shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] text-[#64748B]">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-mono text-cyan-300 focus:outline-none cursor-pointer"
              >
                <option value="tier" className="bg-[#111827]">Flagship First</option>
                <option value="recent" className="bg-[#111827]">Recently Updated</option>
                <option value="name" className="bg-[#111827]">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Tier Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1F2937]/50">
            <span className="text-[11px] font-mono text-[#64748B] mr-1">TIER:</span>
            {projectTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedTier === tier.id 
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]' 
                    : 'bg-[#111827] text-[#CBD5E1] hover:bg-[#1F2937] border border-[#1F2937]'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Domain Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            <span className="text-[11px] font-mono text-[#64748B] mr-1">DOMAIN:</span>
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                  selectedCategory === cat.id 
                    ? 'bg-violet-500 text-white font-semibold shadow-[0_0_12px_rgba(139,92,246,0.3)]' 
                    : 'bg-[#111827]/60 text-[#64748B] hover:text-[#CBD5E1] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Principle 18: ALWAYS VISIBLE ACTIVE FILTERS BAR */}
          {hasActiveFilters && (
            <div className="pt-3 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-[#64748B] uppercase tracking-wider font-semibold">
                  Active Filters:
                </span>

                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[11px]">
                    <span>Domain: {projectCategories.find(c => c.id === selectedCategory)?.label}</span>
                    <button onClick={() => setSelectedCategory('all')} className="hover:text-white ml-0.5">×</button>
                  </span>
                )}

                {selectedTier !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px]">
                    <span>Tier: {projectTiers.find(t => t.id === selectedTier)?.label}</span>
                    <button onClick={() => setSelectedTier('all')} className="hover:text-white ml-0.5">×</button>
                  </span>
                )}

                {selectedTechFilter && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px]">
                    <span>Skill: {selectedTechFilter}</span>
                    <button onClick={onClearTechFilter} className="hover:text-white ml-0.5">×</button>
                  </span>
                )}

                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#CBD5E1] text-[11px]">
                    <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                    <button onClick={() => setSearchQuery('')} className="hover:text-white ml-0.5">×</button>
                  </span>
                )}
              </div>

              <button
                onClick={handleClearAllFilters}
                className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          )}

        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-[#0A0F1E] rounded-2xl border border-[#1F2937]">
            <Sparkles className="w-10 h-10 mx-auto text-cyan-400/40" />
            <h3 className="text-lg font-mono font-bold text-[#F8FAFC]">
              No repositories match current filters
            </h3>
            <p className="text-xs font-mono text-[#64748B] max-w-md mx-auto">
              No projects matched your active search query or filter criteria. Resetting filters will show all 48 public repositories.
            </p>
            <button
              onClick={handleClearAllFilters}
              className="px-5 py-2.5 rounded-lg bg-cyan-500 text-black font-bold text-xs font-mono shadow-[0_0_16px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-colors"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0A0F1E] flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-[0_0_28px_rgba(0,242,255,0.12)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full bg-[#111827] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-70" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-cyan-500/30 text-[9px] font-mono uppercase text-cyan-300 font-bold shadow-sm">
                        {project.tier}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#CBD5E1]">
                        {project.language}
                      </span>
                    </div>
                  </div>

                  {/* Information Body */}
                  <div className="p-5 space-y-3">
                    <div>
                      <div className="text-[11px] font-mono text-[#64748B] truncate">
                        {project.repoName}
                      </div>
                      <h3 className="text-lg font-display font-bold text-[#F8FAFC] group-hover:text-cyan-400 transition-colors mt-0.5">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#CBD5E1] line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-1.5 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-[10px] font-mono text-[#CBD5E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Explicit Action Buttons (Principle 2: No Hidden Actions) */}
                <div className="p-5 pt-0 border-t border-white/[0.04] mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#080D1A] hover:bg-cyan-950/40 text-cyan-300 hover:text-cyan-200 border border-cyan-500/40 hover:border-cyan-400 text-xs font-mono font-bold transition-all shadow-[0_0_12px_rgba(0,242,255,0.15)] hover:shadow-[0_0_18px_rgba(0,242,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-[#CBD5E1] hover:text-white border border-[#1F2937] text-xs font-mono transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-cyan-400" />
                      <span>CODE</span>
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-mono text-[#64748B] hover:text-cyan-400 transition-colors"
                        title="Live Demo"
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
        )}

      </div>
    </section>
  );
};

export default ProjectExplorer;
