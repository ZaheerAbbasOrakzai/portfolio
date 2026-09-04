'use client';

import React, { useState } from 'react';
import { Grid, List, SortAsc, SortDesc } from 'lucide-react';
import { portfolioProjects } from '../../lib/data/portfolio-data';
import { usePortfolioFilters } from '../../lib/hooks/usePortfolioFilters';
import { useProjectModal } from '../../lib/hooks/useProjectModal';
import { useAnalytics } from '../../lib/analytics-tracker';
import PortfolioFilters from './PortfolioFilters';
import ProjectGalleryCard from './ProjectGalleryCard';
import ProjectDetailModal from './ProjectDetailModal';
import type { Project } from '../../lib/types/portfolio';

type SortOption = 'date' | 'title' | 'featured';
type SortOrder = 'asc' | 'desc';
type ViewMode = 'grid' | 'list';

const PortfolioGallery: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const { trackEngagement, trackEvent } = useAnalytics();
  
  const {
    filters,
    filteredProjects,
    updateFilter,
    clearFilters,
    searchTerm,
    setSearchTerm
  } = usePortfolioFilters({ projects: portfolioProjects });

  function sortedProjects(): Project[] {
    const sorted = [...filteredProjects].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'date':
          comparison = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'featured':
          if (a.featured && !b.featured) comparison = -1;
          else if (!a.featured && b.featured) comparison = 1;
          else comparison = new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }

  const projects = sortedProjects();

  const {
    selectedProject,
    isOpen: isModalOpen,
    openProject,
    closeProject,
    nextProject,
    previousProject
  } = useProjectModal({ projects });

  const handleSort = (newSortBy: SortOption) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
    
    // Track sort interaction
    trackEngagement('interaction', 1, 'portfolio_sort')
  };

  const handleProjectView = (project: Project) => {
    openProject(project)
    
    // Track portfolio engagement
    trackEvent({
      name: 'portfolio_project_viewed',
      category: 'engagement',
      label: project.title,
      value: 1,
      parameters: {
        project_id: project.id,
        project_category: project.category,
        project_technologies: project.technologies.join(','),
        view_mode: viewMode
      }
    })
  };

  const currentProjectIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : -1;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Explore my <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">projects</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400 max-w-2xl">
          Showcase of AI/ML, web applications, and research.
        </p>
      </div>

      {/* Filters */}
      <PortfolioFilters
        filters={filters}
        onUpdateFilter={updateFilter}
        onClearFilters={clearFilters}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalProjects={portfolioProjects.length}
        filteredCount={filteredProjects.length}
      />

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* View Mode Toggle */}
        <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition min-h-[40px] ${
              viewMode === 'grid'
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="h-4 w-4" />
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition min-h-[40px] ${
              viewMode === 'list'
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <List className="h-4 w-4" />
            List
          </button>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">Sort by:</span>
          <div className="flex items-center gap-3">
            {(['featured', 'date', 'title'] as SortOption[]).map((option) => (
              <button
                key={option}
                onClick={() => handleSort(option)}
                className={`inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium transition min-h-[40px] ${
                  sortBy === option
                    ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
                {sortBy === option && (
                  <>
                    {sortOrder === 'asc' ? (
                      <SortAsc className="h-3 w-3" />
                    ) : (
                      <SortDesc className="h-3 w-3" />
                    )}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      {filteredProjects.length !== portfolioProjects.length && (
        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
          <p className="text-sm text-cyan-300">
            Showing {filteredProjects.length} of {portfolioProjects.length} projects
          </p>
        </div>
      )}

      {/* Projects Grid/List */}
      {projects.length > 0 ? (
        <div
          className={
            viewMode === 'grid'
              ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'space-y-4'
          }
        >
          {projects.map((project) => (
            <div key={project.id} data-portfolio-project data-project-id={project.id}>
              <ProjectGalleryCard
                project={project}
                onViewDetails={handleProjectView}
                className={viewMode === 'list' ? 'w-full' : ''}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-sm text-slate-400 mb-2">No projects found</p>
          <p className="text-sm text-slate-400 mb-4">
            Adjust filters or search terms
          </p>
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20 min-h-[44px]"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProject}
          onNext={currentProjectIndex < projects.length - 1 ? nextProject : undefined}
          onPrevious={currentProjectIndex > 0 ? previousProject : undefined}
          hasNext={currentProjectIndex < projects.length - 1}
          hasPrevious={currentProjectIndex > 0}
        />
      )}
    </div>
  );
};

export default PortfolioGallery;