'use client';

import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  Search, 
  FileDown, 
  Github, 
  Linkedin, 
  ExternalLink 
} from 'lucide-react';
import { profile } from '../../lib/site';
import { CommandPalette } from '../ui/CommandPalette';
import { ProjectRecord } from '../../lib/data/projects-registry';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#systems', label: 'Systems' },
  { href: '#projects', label: 'Projects' },
  { href: '#explorer', label: 'Explorer (48)' },
  { href: '#skills', label: 'Domains' },
  { href: '#research', label: 'Research' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#github', label: 'GitHub' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' }
];

interface PremiumNavigationProps {
  onOpenProject?: (project: ProjectRecord) => void;
}

export const PremiumNavigation: React.FC<PremiumNavigationProps> = ({ onOpenProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll state for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global hotkey for Command Palette: ⌘K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090B]/90 backdrop-blur-xl border-b border-[#1F2937] shadow-xl'
            : 'bg-transparent border-b border-transparent'
        }`}
        aria-label="Primary Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Engineering Brand / Logo */}
            <a 
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0A0F1E] border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-[#F8FAFC] tracking-tight group-hover:text-amber-300 transition-colors">
                  Zaheer Abbas
                </span>
                <span className="text-[10px] font-mono text-amber-400/90 font-semibold tracking-wider uppercase">
                  AI / ML Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs font-mono transition-colors relative py-1 ${
                      isActive 
                        ? 'text-cyan-400 font-semibold' 
                        : 'text-[#CBD5E1] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Cluster */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Command Palette Trigger */}
              <button
                onClick={() => setIsCommandPaletteOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-cyan-500/40 text-xs text-[#CBD5E1] transition-all font-mono shadow-sm group"
                aria-label="Open command palette (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[#64748B] group-hover:text-[#CBD5E1]">Search repos...</span>
                <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-[#1F2937] text-[10px] text-cyan-300">
                  ⌘K
                </kbd>
              </button>

              {/* Resume CTA */}
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              {/* GitHub Link */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#CBD5E1] hover:text-white bg-[#111827] border border-[#1F2937] hover:border-white/20 transition-colors"
                aria-label="View Zaheer Abbas GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu & Palette Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsCommandPaletteOpen(true)}
                className="p-2 rounded-lg bg-[#111827] border border-[#1F2937] text-cyan-400"
                aria-label="Search portfolio"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-[#111827] border border-[#1F2937] text-[#CBD5E1] hover:text-white"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#09090B]/98 border-b border-[#1F2937] px-4 pt-2 pb-6 space-y-3 backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg bg-[#111827]/60 text-xs font-mono text-[#CBD5E1] hover:text-cyan-400 hover:bg-[#111827] border border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#1F2937]">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1F2937] text-[#CBD5E1]"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1F2937] text-[#CBD5E1]"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Command Palette Modal */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenProject={onOpenProject}
      />
    </>
  );
};
export default PremiumNavigation;
