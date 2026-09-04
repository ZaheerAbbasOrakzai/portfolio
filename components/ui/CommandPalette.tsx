'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, 
  Terminal, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  Award, 
  Mail, 
  ExternalLink, 
  FileDown, 
  X,
  Sparkles,
  ArrowRight,
  Code
} from 'lucide-react';
import { projectsRegistry, ProjectRecord } from '../../lib/data/projects-registry';
import { profile } from '../../lib/site';

interface CommandItem {
  id: string;
  type: 'action' | 'project' | 'tech';
  title: string;
  subtitle?: string;
  badge?: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject?: (project: ProjectRecord) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ 
  isOpen, 
  onClose,
  onOpenProject 
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Base navigation actions
  const defaultActions: CommandItem[] = useMemo(() => [
    {
      id: 'nav-projects',
      type: 'action',
      title: 'Go to Featured Projects',
      subtitle: 'Browse 48 production systems and specialized agents',
      badge: 'Navigate',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      onSelect: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      type: 'action',
      title: 'Go to Skills & Domains',
      subtitle: 'Machine learning, RAG, and multi-agent systems',
      badge: 'Navigate',
      icon: <Cpu className="w-4 h-4 text-violet-400" />,
      onSelect: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-timeline',
      type: 'action',
      title: 'Go to Engineering Timeline',
      subtitle: 'COMSATS University BSCS & project milestones',
      badge: 'Navigate',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      onSelect: () => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-github',
      type: 'action',
      title: 'Go to GitHub Universe',
      subtitle: 'Explore the complete 48-repository audit index',
      badge: 'Index',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      onSelect: () => {
        document.getElementById('github')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-certifications',
      type: 'action',
      title: 'Go to Verified Certifications',
      subtitle: 'Kaggle Machine Learning, Time Series & technical credentials',
      badge: 'Certificates',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      onSelect: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'action-resume',
      type: 'action',
      title: 'Download Resume (PDF)',
      subtitle: 'Verified computer science & engineering profile',
      badge: 'Document',
      icon: <FileDown className="w-4 h-4 text-cyan-400" />,
      onSelect: () => {
        window.open(profile.resumePath, '_blank');
        onClose();
      }
    },
    {
      id: 'action-github-external',
      type: 'action',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/ZaheerAbbasOrakzai (48 repos)',
      badge: 'External',
      icon: <ExternalLink className="w-4 h-4 text-text-muted" />,
      onSelect: () => {
        window.open(profile.github, '_blank');
        onClose();
      }
    },
    {
      id: 'action-linkedin-external',
      type: 'action',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/zaheerabbasorakzai',
      badge: 'External',
      icon: <ExternalLink className="w-4 h-4 text-text-muted" />,
      onSelect: () => {
        window.open(profile.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'nav-contact',
      type: 'action',
      title: 'Contact Zaheer Abbas',
      subtitle: 'Email or direct WhatsApp message',
      badge: 'Action',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      onSelect: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ], [onClose]);

  // Filtered items based on query
  const items: CommandItem[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return defaultActions;
    }

    const matchedProjects: CommandItem[] = projectsRegistry
      .filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.repoName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
        );
      })
      .map((p) => ({
        id: `proj-${p.id}`,
        type: 'project' as const,
        title: p.name,
        subtitle: `${p.categoryLabel} • ${p.technologies.slice(0, 4).join(', ')}`,
        badge: p.tier.toUpperCase(),
        icon: <Code className="w-4 h-4 text-cyan-400" />,
        onSelect: () => {
          if (onOpenProject) {
            onOpenProject(p);
          } else {
            window.open(p.githubUrl, '_blank');
          }
          onClose();
        }
      }));

    const matchedActions = defaultActions.filter((a) => 
      a.title.toLowerCase().includes(q) || (a.subtitle && a.subtitle.toLowerCase().includes(q))
    );

    return [...matchedProjects, ...matchedActions];
  }, [query, defaultActions, onOpenProject, onClose]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, items.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % Math.max(1, items.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (items[selectedIndex]) {
          items[selectedIndex].onSelect();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, items, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div 
        className="w-full max-w-2xl bg-[#0A0F1E] border border-[#1F2937] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#1F2937] bg-[#111827]/80">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search 48 projects, technologies (e.g. YOLO, RAG, BLE), or actions..."
            className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none font-mono"
          />
          <button 
            onClick={onClose}
            className="text-[#64748B] hover:text-[#F8FAFC] p-1 rounded transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div 
          ref={listRef} 
          className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.03]"
        >
          {items.length === 0 ? (
            <div className="py-12 text-center text-[#64748B]">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-cyan-400/40" />
              <p className="text-sm">No matching repositories, technologies, or actions found.</p>
              <p className="text-xs text-[#64748B] mt-1">Try &quot;YOLO&quot;, &quot;RAG&quot;, &quot;BLE&quot;, &quot;Flutter&quot;, &quot;FastAPI&quot;, or &quot;Resume&quot;.</p>
            </div>
          ) : (
            items.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.onSelect}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-150 ${
                    isSelected 
                      ? 'bg-cyan-500/10 text-[#F8FAFC] border border-cyan-500/30' 
                      : 'text-[#CBD5E1] hover:bg-[#111827] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-4">
                    <div className={`p-2 rounded-md ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-[#111827] text-[#64748B]'}`}>
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-cyan-300/80 border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.subtitle && (
                        <p className="text-xs text-[#64748B] truncate mt-0.5 font-mono">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-transparent'}`} />
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard Shortcut Footer */}
        <div className="px-4 py-2 bg-[#09090B] border-t border-[#1F2937] flex items-center justify-between text-[11px] text-[#64748B] font-mono">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-white">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-white">↵</kbd> select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-white">esc</kbd> close</span>
          </div>
          <span>48 Repositories Indexed</span>
        </div>
      </div>
    </div>
  );
};
