'use client';

import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import type { PortfolioFilters as PortfolioFiltersType, TechnologyTag, ProjectCategory, IndustryType } from '../../lib/types/portfolio';
import { technologyLabels, categoryLabels, industryLabels } from '../../lib/data/portfolio-data';

interface PortfolioFiltersProps {
  filters: PortfolioFiltersType;
  onUpdateFilter: (key: keyof PortfolioFiltersType, value: any) => void;
  onClearFilters: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalProjects: number;
  filteredCount: number;
}

const FilterButton: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
}> = ({ label, active, onClick, count }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      active
        ? 'border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)] scale-105'
        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-lg'
    }`}
    aria-pressed={active}
  >
    {label}
    {count !== undefined && (
      <span className={`flex h-5 items-center justify-center rounded-full px-2 text-xs font-bold ${
        active ? 'bg-cyan-400/30 text-cyan-100' : 'bg-white/10 text-slate-400'
      }`}>
        {count}
      </span>
    )}
  </button>
);

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  filters,
  onUpdateFilter,
  onClearFilters,
  searchTerm,
  onSearchChange,
  totalProjects,
  filteredCount
}) => {
  const technologies = Object.keys(technologyLabels) as TechnologyTag[];
  const categories = Object.keys(categoryLabels) as ProjectCategory[];
  const industries = Object.keys(industryLabels) as IndustryType[];

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined);

  return (
    <div className="relative space-y-8 rounded-[2rem] border border-primary-500/15 bg-gradient-to-b from-slate-950/90 to-slate-900/90 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 pointer-events-none" />

      {/* Header */}
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 text-cyan-400 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Filter className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Filter Portfolio</h3>
            <p className="text-sm text-cyan-400/90 font-bold tracking-[0.15em] uppercase mt-1">
              {filteredCount} of {totalProjects} projects
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative group z-10">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-cyan-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-12 text-base text-white placeholder-slate-500 transition-all focus:border-cyan-400/50 focus:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 shadow-inner"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-2">
        
        {/* Status & Categories Column */}
        <div className="space-y-8">
          {/* Status Filters */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Status</h4>
            <div className="flex flex-wrap gap-3">
              <FilterButton
                label="Featured"
                active={filters.featured === true}
                onClick={() => onUpdateFilter('featured', true)}
              />
              <FilterButton
                label="Completed"
                active={filters.status === 'completed'}
                onClick={() => onUpdateFilter('status', 'completed')}
              />
              <FilterButton
                label="In Progress"
                active={filters.status === 'in-progress'}
                onClick={() => onUpdateFilter('status', 'in-progress')}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Categories</h4>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  label={categoryLabels[category]}
                  active={filters.category === category}
                  onClick={() => onUpdateFilter('category', category)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Industries & Tech Column */}
        <div className="space-y-8">
          {/* Industry Filters */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Industries</h4>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <FilterButton
                  key={industry}
                  label={industryLabels[industry]}
                  active={filters.industry === industry}
                  onClick={() => onUpdateFilter('industry', industry)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Filters (Full Width) */}
      <div className="relative z-10 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Technologies</h4>
        <div className="flex flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <FilterButton
              key={tech}
              label={technologyLabels[tech]}
              active={filters.technology === tech}
              onClick={() => onUpdateFilter('technology', tech)}
            />
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="relative z-10 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-bold text-red-400 transition-all hover:border-red-500/50 hover:bg-red-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <X className="h-5 w-5" />
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilters;