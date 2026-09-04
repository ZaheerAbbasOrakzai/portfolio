import { 
  Project, 
  Experience, 
  ClientTestimonial, 
  PerformanceMetric, 
  ContentVersion,
  PortfolioProfile 
} from '../types/portfolio';

// Data Validation Utilities
export class PortfolioValidator {
  /**
   * Validate project data structure
   */
  static validateProject(project: Partial<Project>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!project.id) errors.push('Project ID is required');
    if (!project.title) errors.push('Project title is required');
    if (!project.description) errors.push('Project description is required');
    if (!project.technologies || project.technologies.length === 0) {
      errors.push('At least one technology is required');
    }
    if (!project.category) errors.push('Project category is required');
    if (!project.startDate) errors.push('Start date is required');
    if (!project.caseStudy) {
      errors.push('Case study is required');
    } else {
      if (!project.caseStudy.problem) errors.push('Case study problem is required');
      if (!project.caseStudy.solution) errors.push('Case study solution is required');
      if (!project.caseStudy.results || project.caseStudy.results.length === 0) {
        errors.push('Case study results are required');
      }
    }

    // Validate SEO data
    if (!project.seo) {
      errors.push('SEO data is required');
    } else {
      if (!project.seo.slug) errors.push('SEO slug is required');
      if (!project.seo.metaTitle) errors.push('SEO meta title is required');
      if (!project.seo.metaDescription) errors.push('SEO meta description is required');
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validate testimonial data
   */
  static validateTestimonial(testimonial: Partial<ClientTestimonial>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!testimonial.id) errors.push('Testimonial ID is required');
    if (!testimonial.clientName) errors.push('Client name is required');
    if (!testimonial.clientCompany) errors.push('Client company is required');
    if (!testimonial.content || testimonial.content.length < 10) {
      errors.push('Testimonial content must be at least 10 characters');
    }
    if (!testimonial.rating || testimonial.rating < 1 || testimonial.rating > 5) {
      errors.push('Rating must be between 1 and 5');
    }
    if (!testimonial.dateGiven) errors.push('Date given is required');

    // Validate verification if marked as verified
    if (testimonial.verified && !testimonial.verificationMethod) {
      errors.push('Verification method is required for verified testimonials');
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validate experience data
   */
  static validateExperience(experience: Partial<Experience>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!experience.id) errors.push('Experience ID is required');
    if (!experience.company) errors.push('Company name is required');
    if (!experience.position) errors.push('Position is required');
    if (!experience.startDate) errors.push('Start date is required');
    if (!experience.description) errors.push('Description is required');
    
    // Validate date logic
    if (experience.startDate && experience.endDate) {
      const start = new Date(experience.startDate);
      const end = new Date(experience.endDate);
      if (end <= start) {
        errors.push('End date must be after start date');
      }
    }

    // Validate current flag consistency
    if (experience.current && experience.endDate) {
      errors.push('Current position cannot have an end date');
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validate portfolio profile
   */
  static validateProfile(profile: Partial<PortfolioProfile>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!profile.name) errors.push('Name is required');
    if (!profile.title) errors.push('Title is required');
    if (!profile.bio || profile.bio.length < 50) {
      errors.push('Bio must be at least 50 characters');
    }
    
    // Validate contact info
    if (!profile.contactInfo?.email) {
      errors.push('Email is required in contact info');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(profile.contactInfo.email)) {
        errors.push('Valid email address is required');
      }
    }

    return { valid: errors.length === 0, errors };
  }
}

// Data Transformation Utilities
export class PortfolioTransformer {
  /**
   * Transform project for public API (remove sensitive data)
   */
  static toPublicProject(project: Project): Omit<Project, 'seo'> & { seo: Pick<Project['seo'], 'slug'> } {
    return {
      ...project,
      seo: {
        slug: project.seo.slug
      }
    };
  }

  /**
   * Transform testimonial for display (handle verification status)
   */
  static toDisplayTestimonial(testimonial: ClientTestimonial): ClientTestimonial & { displayName: string } {
    return {
      ...testimonial,
      displayName: testimonial.verified 
        ? testimonial.clientName 
        : testimonial.clientName.replace(/(?<=^.{1}).*(?=.{1}$)/, '*'.repeat(testimonial.clientName.length - 2))
    };
  }

  /**
   * Generate project summary for listing views
   */
  static toProjectSummary(project: Project) {
    return {
      id: project.id,
      title: project.title,
      tagline: project.tagline,
      description: project.description,
      technologies: project.technologies.slice(0, 5), // Limit technologies shown
      category: project.category,
      industry: project.industry,
      featured: project.featured,
      status: project.status,
      startDate: project.startDate,
      endDate: project.endDate,
      thumbnail: project.media.thumbnail,
      slug: project.seo.slug,
      accent: project.accent,
      icon: project.icon
    };
  }

  /**
   * Generate experience summary
   */
  static toExperienceSummary(experience: Experience) {
    return {
      id: experience.id,
      company: experience.company,
      position: experience.position,
      startDate: experience.startDate,
      endDate: experience.endDate,
      current: experience.current,
      technologies: experience.technologies.slice(0, 8),
      type: experience.type,
      industry: experience.industry,
      achievementCount: experience.achievements.length
    };
  }
}

// SEO and Metadata Utilities
export class PortfolioSEOUtils {
  /**
   * Generate SEO-friendly slug from title
   */
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim()
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }

  /**
   * Generate meta description from content
   */
  static generateMetaDescription(content: string, maxLength = 160): string {
    const cleaned = content.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleaned.length <= maxLength) return cleaned;
    
    const truncated = cleaned.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > maxLength * 0.8 
      ? truncated.substring(0, lastSpace) + '...'
      : truncated + '...';
  }

  /**
   * Extract keywords from project content
   */
  static extractKeywords(project: Project): string[] {
    const text = `${project.title} ${project.description} ${project.longDescription} ${project.caseStudy.problem} ${project.caseStudy.solution}`;
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3);

    // Count word frequency
    const wordCounts = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Return top keywords
    return Object.entries(wordCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }

  /**
   * Generate structured data for project
   */
  static generateProjectStructuredData(project: Project, baseUrl: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': project.title,
      'description': project.description,
      'creator': {
        '@type': 'Person',
        'name': 'Zaheer Abbas',
        'jobTitle': 'AI Engineer'
      },
      'dateCreated': project.startDate,
      'dateModified': project.endDate || project.startDate,
      'genre': project.category,
      'keywords': project.technologies.join(', '),
      'url': `${baseUrl}/portfolio/${project.seo.slug}`,
      'image': `${baseUrl}${project.media.thumbnail}`,
      'workExample': project.media.demo ? {
        '@type': 'WebApplication',
        'name': `${project.title} Demo`,
        'url': project.media.demo
      } : undefined
    };
  }
}

// Analytics and Performance Utilities
export class PortfolioAnalytics {
  /**
   * Calculate project performance metrics
   */
  static calculateProjectMetrics(projects: Project[]) {
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === 'completed').length;
    const featuredProjects = projects.filter(p => p.featured).length;
    
    // Technology usage
    const techUsage = projects
      .flatMap(p => p.technologies)
      .reduce((acc, tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const topTechnologies = Object.entries(techUsage)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([tech, count]) => ({ technology: tech, count }));

    // Category distribution
    const categoryDist = projects
      .reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    // Average project duration (for completed projects)
    const completedWithDates = projects.filter(p => 
      p.status === 'completed' && p.startDate && p.endDate
    );
    
    const avgDuration = completedWithDates.length > 0 
      ? completedWithDates.reduce((sum, project) => {
          const start = new Date(project.startDate);
          const end = new Date(project.endDate!);
          return sum + (end.getTime() - start.getTime());
        }, 0) / completedWithDates.length / (1000 * 60 * 60 * 24) // Convert to days
      : 0;

    return {
      totalProjects,
      completedProjects,
      featuredProjects,
      completionRate: Math.round((completedProjects / totalProjects) * 100),
      topTechnologies,
      categoryDistribution: categoryDist,
      averageProjectDuration: Math.round(avgDuration)
    };
  }

  /**
   * Calculate testimonial insights
   */
  static calculateTestimonialInsights(testimonials: ClientTestimonial[]) {
    const total = testimonials.length;
    const verified = testimonials.filter(t => t.verified).length;
    const featured = testimonials.filter(t => t.featured).length;
    
    const avgRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / total;
    
    const ratingDistribution = testimonials.reduce((acc, t) => {
      acc[t.rating] = (acc[t.rating] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const verificationMethods = testimonials
      .filter(t => t.verified)
      .reduce((acc, t) => {
        if (t.verificationMethod) {
          acc[t.verificationMethod] = (acc[t.verificationMethod] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>);

    return {
      total,
      verified,
      featured,
      verificationRate: Math.round((verified / total) * 100),
      averageRating: Math.round(avgRating * 10) / 10,
      ratingDistribution,
      verificationMethods
    };
  }

  /**
   * Generate content freshness report
   */
  static generateFreshnessReport(versions: ContentVersion[]) {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentVersions = versions.filter(v => new Date(v.timestamp) > thirtyDaysAgo);

    const contentTypes = recentVersions.reduce((acc, version) => {
      acc[version.contentType] = (acc[version.contentType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const changeTypes = recentVersions
      .flatMap(v => v.changes)
      .reduce((acc, change) => {
        acc[change.changeType] = (acc[change.changeType] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return {
      recentUpdates: recentVersions.length,
      contentTypesUpdated: Object.keys(contentTypes).length,
      contentTypeBreakdown: contentTypes,
      changeTypeBreakdown: changeTypes,
      lastUpdate: versions.length > 0 ? versions[0].timestamp : null
    };
  }
}

// Export all utilities
export const portfolioUtils = {
  validator: PortfolioValidator,
  transformer: PortfolioTransformer,
  seo: PortfolioSEOUtils,
  analytics: PortfolioAnalytics
};