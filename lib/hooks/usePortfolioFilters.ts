'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { PortfolioFilters, Project, TechnologyTag, ProjectCategory, IndustryType } from '../types/portfolio';

interface UsePortfolioFiltersProps {
  projects: Project[];
}

interface UsePortfolioFiltersReturn {
  filters: PortfolioFilters;
  filteredProjects: Project[];
  updateFilter: (key: keyof PortfolioFilters, value: any) => void;
  clearFilters: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function usePortfolioFilters({ projects }: UsePortfolioFiltersProps): UsePortfolioFiltersReturn {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize filters from URL parameters
  const initializeFilters = useCallback((): PortfolioFilters => {
    return {
      technology: searchParams.get('tech') as TechnologyTag || undefined,
      category: searchParams.get('category') as ProjectCategory || undefined,
      industry: searchParams.get('industry') as IndustryType || undefined,
      status: searchParams.get('status') as ('completed' | 'in-progress' | 'archived') || undefined,
      featured: searchParams.get('featured') === 'true' ? true : undefined,
      search: searchParams.get('search') || undefined
    };
  }, [searchParams]);

  const [filters, setFilters] = useState<PortfolioFilters>(initializeFilters);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  // Update URL when filters change
  const updateURL = useCallback((newFilters: PortfolioFilters) => {
    const params = new URLSearchParams();
    
    if (newFilters.technology) params.set('tech', newFilters.technology);
    if (newFilters.category) params.set('category', newFilters.category);
    if (newFilters.industry) params.set('industry', newFilters.industry);
    if (newFilters.status) params.set('status', newFilters.status);
    if (newFilters.featured !== undefined) params.set('featured', String(newFilters.featured));
    if (newFilters.search) params.set('search', newFilters.search);

    const queryString = params.toString();
    const newURL = queryString ? `?${queryString}` : window.location.pathname;
    
    try {
      router.push(newURL, { scroll: false });
    } catch (error) {
      console.warn('Failed to update URL, continuing with filtering:', error);
    }
  }, [router]);

  // Update filter and sync with URL
  const updateFilter = useCallback((key: keyof PortfolioFilters, value: any) => {
    const newFilters = {
      ...filters,
      [key]: value === filters[key] ? undefined : value
    };
    
    setFilters(newFilters);
    updateURL(newFilters);
  }, [filters, updateURL]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    const clearedFilters: PortfolioFilters = {};
    setFilters(clearedFilters);
    setSearchTerm('');
    updateURL(clearedFilters);
  }, [updateURL]);

  // Filter projects based on current filters
  const filteredProjects = useCallback(() => {
    return projects.filter(project => {
      // Technology filter
      if (filters.technology && !project.technologies.includes(filters.technology)) {
        return false;
      }

      // Category filter
      if (filters.category && project.category !== filters.category) {
        return false;
      }

      // Industry filter
      if (filters.industry && project.industry !== filters.industry) {
        return false;
      }

      // Status filter
      if (filters.status && project.status !== filters.status) {
        return false;
      }

      // Featured filter
      if (filters.featured !== undefined && project.featured !== filters.featured) {
        return false;
      }

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const searchableText = [
          project.title,
          project.tagline,
          project.description,
          project.longDescription,
          ...project.technologies,
          project.caseStudy.problem,
          project.caseStudy.solution,
          ...project.caseStudy.results.map(r => r.metric + ' ' + r.description)
        ].join(' ').toLowerCase();

        if (!searchableText.includes(searchLower)) {
          return false;
        }
      }

      return true;
    });
  }, [projects, filters])();

  // Update search filter when search term changes with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const normalizedSearchTerm = searchTerm || undefined;
      if (normalizedSearchTerm !== filters.search) {
        updateFilter('search', normalizedSearchTerm);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, filters.search, updateFilter]);

  // Sync filters with URL changes
  useEffect(() => {
    const urlFilters = initializeFilters();
    const hasChanged = Object.keys(urlFilters).some(
      key => urlFilters[key as keyof PortfolioFilters] !== filters[key as keyof PortfolioFilters]
    );
    
    if (hasChanged) {
      setFilters(urlFilters);
      setSearchTerm(urlFilters.search || '');
    }
  }, [searchParams, initializeFilters, filters]);

  return {
    filters,
    filteredProjects,
    updateFilter,
    clearFilters,
    searchTerm,
    setSearchTerm
  };
}