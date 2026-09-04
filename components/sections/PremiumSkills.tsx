'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PremiumCard } from '../ui/PremiumCard';
import premiumAssets from '@/lib/premium-assets';

const MotionDiv = motion.div as any;

interface Skill {
  name: string;
  icon: string;
  years: number;
  proficiency: number;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI/ML Engineering',
    description: 'Building intelligent systems with cutting-edge AI technologies',
    image: premiumAssets.skills.aiSolutions,
    gradient: 'from-primary-500 to-primary-600',
    skills: [
      { name: 'Generative AI', icon: '🤖', years: 3, proficiency: 95 },
      { name: 'LangChain', icon: '⛓️', years: 2, proficiency: 92 },
      { name: 'RAG Systems', icon: '📚', years: 2, proficiency: 90 },
      { name: 'Vector Databases', icon: '🗄️', years: 2, proficiency: 88 },
      { name: 'PyTorch', icon: '🔥', years: 3, proficiency: 85 },
      { name: 'TensorFlow', icon: '📊', years: 3, proficiency: 82 },
    ],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    description: 'Creating modern, scalable web applications end-to-end',
    image: premiumAssets.skills.fullStack,
    gradient: 'from-secondary-500 to-secondary-600',
    skills: [
      { name: 'Next.js', icon: '▲', years: 4, proficiency: 95 },
      { name: 'React', icon: '⚛️', years: 5, proficiency: 98 },
      { name: 'TypeScript', icon: '📘', years: 4, proficiency: 93 },
      { name: 'Node.js', icon: '🟢', years: 5, proficiency: 90 },
      { name: 'Python', icon: '🐍', years: 5, proficiency: 95 },
      { name: 'FastAPI', icon: '⚡', years: 3, proficiency: 88 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    description: 'Streamlined deployment pipelines and infrastructure',
    image: premiumAssets.skills.codeDeployRepeat,
    gradient: 'from-accent-500 to-accent-600',
    skills: [
      { name: 'Docker', icon: '🐳', years: 4, proficiency: 90 },
      { name: 'AWS', icon: '☁️', years: 3, proficiency: 85 },
      { name: 'CI/CD', icon: '🔄', years: 4, proficiency: 88 },
      { name: 'Git', icon: '📦', years: 5, proficiency: 95 },
      { name: 'Linux', icon: '🐧', years: 5, proficiency: 87 },
      { name: 'Nginx', icon: '🌐', years: 3, proficiency: 82 },
    ],
  },
  {
    id: 'performance',
    title: 'Performance & Optimization',
    description: 'Building fast, efficient, and optimized applications',
    image: premiumAssets.skills.modernPerformance,
    gradient: 'from-success-500 to-success-600',
    skills: [
      { name: 'Performance Tuning', icon: '⚡', years: 4, proficiency: 90 },
      { name: 'Caching Strategies', icon: '💾', years: 4, proficiency: 88 },
      { name: 'Database Optimization', icon: '🗃️', years: 4, proficiency: 85 },
      { name: 'SEO', icon: '🔍', years: 4, proficiency: 87 },
      { name: 'Web Vitals', icon: '📈', years: 3, proficiency: 90 },
      { name: 'Code Splitting', icon: '✂️', years: 3, proficiency: 88 },
    ],
  },
];

export const PremiumSkills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-success-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <MotionDiv 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-5">
            Technical{' '}
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
              Skills
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building world-class applications
          </p>
        </MotionDiv>

        {/* Skills Grid */}
        <MotionDiv 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <MotionDiv
              key={category.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <div className="group hover:-translate-y-1 transition-all duration-500">
                <PremiumCard variant="glass" hover className="h-full rounded-3xl">
                  <div className="h-full overflow-hidden group">
                    {/* Category Header with Image */}
                    <div className="relative h-56 overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover opacity-25 group-hover:opacity-35 group-hover:scale-110 transition-all duration-700"
                        />
                      </div>

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`} />

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{category.title}</h3>
                        <p className="text-white/95 text-base font-medium drop-shadow-md">{category.description}</p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="p-8 space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="group/skill"
                        >
                          {/* Skill Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                              <span className="text-text-primary font-semibold text-base">{skill.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs font-bold text-text-tertiary bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">{skill.years}y exp</span>
                              <span className="text-sm font-bold text-primary-400">
                                {skill.proficiency}%
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div
                              className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative transition-all duration-1000 shadow-[0_0_20px_rgba(0,217,255,0.3)]`}
                              style={{ width: `${skill.proficiency}%` }}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Stats */}
                    <div className="px-8 pb-8 pt-6 border-t border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary-400" />
                          <span className="text-sm font-semibold text-text-secondary">
                            {category.skills.length} Technologies
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-success-400" />
                          <span className="text-sm font-semibold text-text-secondary">
                            Avg. {Math.round(
                              category.skills.reduce((acc, skill) => acc + skill.proficiency, 0) /
                                category.skills.length
                            )}
                            % Proficiency
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Additional Tech Stack */}
        <MotionDiv 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-text-tertiary uppercase tracking-[0.2em] mb-2">Also experienced with</p>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          
          <MotionDiv 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { name: 'MongoDB', icon: '🗄️' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Redis', icon: '⚡' },
              { name: 'GraphQL', icon: '📊' },
              { name: 'REST APIs', icon: '🔌' },
              { name: 'WebSockets', icon: '🔗' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Framer Motion', icon: '🎬' },
              { name: 'Jest', icon: '🧪' },
              { name: 'Pytest', icon: '✅' },
              { name: 'Hugging Face', icon: '🤗' },
              { name: 'OpenAI API', icon: '🤖' },
              { name: 'Anthropic', icon: '🧠' },
              { name: 'Groq', icon: '⚙️' },
              { name: 'Pinecone', icon: '🌲' },
              { name: 'Supabase', icon: '🗃️' },
            ].map((tech, index) => (
              <MotionDiv
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
              >
                <div className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.10] hover:to-white/[0.04] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 cursor-default">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                  <span className="text-sm font-semibold text-text-secondary text-center">{tech.name}</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default PremiumSkills;
