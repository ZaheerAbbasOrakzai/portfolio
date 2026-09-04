/**
 * Icon Registry Service
 * Manages technology icon metadata and provides query methods
 */

import { 
  TechIconMetadata, 
  TechCategory, 
  techIconsData 
} from '../data/tech-icons';

/**
 * IconRegistry class for managing and querying technology icons
 */
export class IconRegistry {
  private icons: Map<string, TechIconMetadata>;

  constructor() {
    this.icons = new Map();
    this.initialize();
  }

  /**
   * Initialize the registry with icon data
   */
  private initialize(): void {
    techIconsData.forEach(icon => {
      this.icons.set(icon.id, icon);
    });
  }

  /**
   * Register a new icon or update existing one
   * @param metadata - Icon metadata to register
   */
  register(metadata: TechIconMetadata): void {
    this.icons.set(metadata.id, metadata);
  }

  /**
   * Get icon by ID
   * @param id - Unique icon identifier
   * @returns Icon metadata or undefined if not found
   */
  get(id: string): TechIconMetadata | undefined {
    return this.icons.get(id);
  }

  /**
   * Get all icons
   * @returns Array of all icon metadata
   */
  getAll(): TechIconMetadata[] {
    return Array.from(this.icons.values());
  }

  /**
   * Get icons by category
   * @param category - Technology category to filter by
   * @returns Array of icons matching the category
   */
  getByCategory(category: TechCategory): TechIconMetadata[] {
    return Array.from(this.icons.values()).filter(
      icon => icon.category === category
    );
  }

  /**
   * Get all trending icons
   * @returns Array of trending icons
   */
  getTrending(): TechIconMetadata[] {
    return Array.from(this.icons.values()).filter(icon => icon.trending);
  }

  /**
   * Search icons by query string
   * Searches in name, category, and keywords
   * @param query - Search query string
   * @returns Array of matching icons
   */
  search(query: string): TechIconMetadata[] {
    if (!query || query.trim() === '') {
      return this.getAll();
    }

    const lowerQuery = query.toLowerCase().trim();
    
    return Array.from(this.icons.values()).filter(icon => {
      // Search in name
      if (icon.name.toLowerCase().includes(lowerQuery)) {
        return true;
      }

      // Search in category
      if (icon.category.toLowerCase().includes(lowerQuery)) {
        return true;
      }

      // Search in keywords
      if (icon.keywords.some(keyword => 
        keyword.toLowerCase().includes(lowerQuery)
      )) {
        return true;
      }

      return false;
    });
  }

  /**
   * Get icons by multiple categories
   * @param categories - Array of categories to filter by
   * @returns Array of icons matching any of the categories
   */
  getByCategoryList(categories: TechCategory[]): TechIconMetadata[] {
    return Array.from(this.icons.values()).filter(icon =>
      categories.includes(icon.category)
    );
  }

  /**
   * Get icons by skill level
   * @param level - Skill level to filter by
   * @returns Array of icons with the specified skill level
   */
  getBySkillLevel(level: string): TechIconMetadata[] {
    return Array.from(this.icons.values()).filter(
      icon => icon.experience?.level === level
    );
  }

  /**
   * Get icons related to a specific project
   * @param projectId - Project identifier
   * @returns Array of icons related to the project
   */
  getByProject(projectId: string): TechIconMetadata[] {
    return Array.from(this.icons.values()).filter(icon =>
      icon.relatedProjects?.includes(projectId)
    );
  }

  /**
   * Get icons with minimum years of experience
   * @param minYears - Minimum years of experience
   * @returns Array of icons with at least the specified years
   */
  getByMinExperience(minYears: number): TechIconMetadata[] {
    return Array.from(this.icons.values()).filter(icon =>
      icon.experience && icon.experience.years >= minYears
    );
  }

  /**
   * Get count of icons in registry
   * @returns Total number of registered icons
   */
  getCount(): number {
    return this.icons.size;
  }

  /**
   * Get count of icons by category
   * @returns Map of category to count
   */
  getCategoryCounts(): Map<TechCategory, number> {
    const counts = new Map<TechCategory, number>();
    
    Array.from(this.icons.values()).forEach(icon => {
      const currentCount = counts.get(icon.category) || 0;
      counts.set(icon.category, currentCount + 1);
    });
    
    return counts;
  }

  /**
   * Check if an icon exists
   * @param id - Icon identifier to check
   * @returns True if icon exists, false otherwise
   */
  has(id: string): boolean {
    return this.icons.has(id);
  }

  /**
   * Remove an icon from registry
   * @param id - Icon identifier to remove
   * @returns True if icon was removed, false if not found
   */
  remove(id: string): boolean {
    return this.icons.delete(id);
  }

  /**
   * Clear all icons from registry
   */
  clear(): void {
    this.icons.clear();
  }

  /**
   * Get all unique categories in registry
   * @returns Array of unique category names
   */
  getCategories(): TechCategory[] {
    const categories = new Set<TechCategory>();
    Array.from(this.icons.values()).forEach(icon => {
      categories.add(icon.category);
    });
    return Array.from(categories);
  }

  /**
   * Get icons sorted by name
   * @param ascending - Sort order (default: true)
   * @returns Sorted array of icons
   */
  getSortedByName(ascending: boolean = true): TechIconMetadata[] {
    const icons = this.getAll();
    return icons.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return ascending ? comparison : -comparison;
    });
  }

  /**
   * Get icons sorted by experience years
   * @param ascending - Sort order (default: false for most experienced first)
   * @returns Sorted array of icons
   */
  getSortedByExperience(ascending: boolean = false): TechIconMetadata[] {
    const icons = this.getAll().filter(icon => icon.experience);
    return icons.sort((a, b) => {
      const yearsA = a.experience?.years || 0;
      const yearsB = b.experience?.years || 0;
      const comparison = yearsA - yearsB;
      return ascending ? comparison : -comparison;
    });
  }
}

/**
 * Singleton instance of IconRegistry
 * Export for use throughout the application
 */
export const iconRegistry = new IconRegistry();

/**
 * Export default for convenience
 */
export default iconRegistry;
