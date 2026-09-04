'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { Project } from '../types/portfolio';

interface UseProjectModalProps {
  projects: Project[];
}

interface UseProjectModalReturn {
  selectedProject: Project | null;
  isOpen: boolean;
  openProject: (project: Project) => void;
  closeProject: () => void;
  nextProject: () => void;
  previousProject: () => void;
}

export function useProjectModal({ projects }: UseProjectModalProps): UseProjectModalReturn {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize from URL parameter
  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setIsOpen(true);
      }
    }
  }, [searchParams, projects]);

  // Update URL when project is selected
  const updateURL = useCallback((project: Project | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (project) {
      params.set('project', project.id);
    } else {
      params.delete('project');
    }

    const queryString = params.toString();
    const newURL = queryString ? `?${queryString}` : window.location.pathname;
    
    try {
      router.push(newURL, { scroll: false });
    } catch (error) {
      console.warn('Failed to update URL, continuing with modal operation:', error);
    }
  }, [router, searchParams]);

  const openProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
    updateURL(project);
  }, [updateURL]);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setIsOpen(false);
    updateURL(null);
  }, [updateURL]);

  const nextProject = useCallback(() => {
    if (!selectedProject || projects.length === 0) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProj = projects[nextIndex];
    
    setSelectedProject(nextProj);
    updateURL(nextProj);
  }, [selectedProject, projects, updateURL]);

  const previousProject = useCallback(() => {
    if (!selectedProject || projects.length === 0) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const prevProj = projects[prevIndex];
    
    setSelectedProject(prevProj);
    updateURL(prevProj);
  }, [selectedProject, projects, updateURL]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeProject();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeProject]);

  return {
    selectedProject,
    isOpen,
    openProject,
    closeProject,
    nextProject,
    previousProject
  };
}