'use client';

import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { ProjectRecord, projectsRegistry } from '../lib/data/projects-registry';

// Layout components
import { PremiumNavigation } from '../components/layout/PremiumNavigation';
import { PremiumFooter } from '../components/layout/PremiumFooter';

// Core Sections in strict high-impact narrative order
import { PremiumHero } from '../components/sections/PremiumHero';
import { EngineeringSignalStrip } from '../components/sections/EngineeringSignalStrip';
import { PremiumAbout } from '../components/sections/PremiumAbout';
import { SystemsSection } from '../components/sections/SystemsSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { ProjectRelationGraph } from '../components/sections/ProjectRelationGraph';
import { ProjectExplorer } from '../components/sections/ProjectExplorer';
import { TechnicalDomainsSection } from '../components/sections/TechnicalDomainsSection';
import { ResearchSection } from '../components/sections/ResearchSection';
import { EngineeringTimeline } from '../components/sections/EngineeringTimeline';
import { GitHubUniverseSection } from '../components/sections/GitHubUniverseSection';
import { VerifiedCertificationsSection } from '../components/sections/VerifiedCertificationsSection';
import { ResumeSection } from '../components/sections/ResumeSection';
import { PremiumContact } from '../components/sections/PremiumContact';

// Modals
import { ProjectDetailModal } from '../components/portfolio/ProjectDetailModal';
import { PortfolioAssistantModal } from '../components/portfolio/PortfolioAssistantModal';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);

  // Skill click in TechnicalDomains scrolls to Project Explorer and filters to that skill
  const handleSelectSkill = (_skillId: string, skillName: string) => {
    setSelectedTechFilter(skillName);
    const explorerEl = document.getElementById('explorer');
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] hud-dot-grid text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* 00. Intelligent Navigation with ⌘K Command Palette & Live Telemetry */}
      <PremiumNavigation onOpenProject={setSelectedProject} />

      <main id="main">
        {/* Hero with Interactive 5-Stage Engineering Pipeline */}
        <PremiumHero />

        {/* High-Trust Verification Ribbon */}
        <EngineeringSignalStrip />

        {/* 01. About & First-Principles Technical Identity */}
        <PremiumAbout />

        {/* 02. Production Systems & Multi-Agent Architecture */}
        <SystemsSection />

        {/* 03. Flagship Engineering Deployments */}
        <FeaturedProjectsSection onSelectProject={setSelectedProject} />

        {/* 04. Subsystem Relationship Graph & Constellations */}
        <ProjectRelationGraph />

        {/* 05. The 48-Repository Universe Project Explorer */}
        <ProjectExplorer 
          onSelectProject={setSelectedProject}
          selectedTechFilter={selectedTechFilter}
          onClearTechFilter={() => setSelectedTechFilter(null)}
        />

        {/* 06. Technical Domains & Evidence-Linked Skills */}
        <TechnicalDomainsSection onSelectSkill={handleSelectSkill} />

        {/* 07. Applied AI Research & Algorithmic Rigor */}
        <ResearchSection />

        {/* 08. Engineering Timeline & Education */}
        <EngineeringTimeline />

        {/* 09. Open Source Universe & Complete 48-Repo Index */}
        <GitHubUniverseSection onSelectProject={setSelectedProject} />

        {/* 10. Verified Certifications & Credentials */}
        <VerifiedCertificationsSection />

        {/* 11. Executive Resume & Career Impact */}
        <ResumeSection />

        {/* 12. Direct Communications Command Center */}
        <PremiumContact />
      </main>

      {/* Technical Systems Footer */}
      <PremiumFooter />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Grounded Portfolio AI Assistant Modal */}
      <PortfolioAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onOpenProject={setSelectedProject}
      />

      {/* Floating AI Assistant Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0A0F1E] border border-cyan-500/40 text-cyan-400 hover:text-white hover:bg-cyan-500/20 text-xs font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_28px_rgba(6,182,212,0.5)] transition-all group"
          aria-label="Ask Portfolio AI Assistant"
        >
          <Bot className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Ask AI Assistant</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

    </div>
  );
}
