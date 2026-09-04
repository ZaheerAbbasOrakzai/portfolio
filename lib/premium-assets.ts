/**
 * Premium Asset Mapping
 * Strategic integration of premium branded images throughout the portfolio
 */

export const premiumAssets = {
  // Hero Section
  hero: {
    background: '/assets/images/ai_networking.png',
    alternative: '/assets/images/ChatGPT Image Aug 4, 2026, 04_14_07 AM.png',
  },
  
  // About Section - Bento Grid Cards
  about: {
    multiSkills: '/assets/images/05_one_person_multiple_skills.png',
    buildingProjects: '/assets/images/03_building_open_source_projects.png',
    keepGrowing: '/assets/images/09_keep_building_keep_growing.png',
  },
  
  // Skills & Capabilities
  skills: {
    aiSolutions: '/assets/images/01_building_intelligent_ai_solutions.png',
    fullStack: '/assets/images/02_full_stack_developer.png',
    codeDeployRepeat: '/assets/images/06_code_design_deploy_repeat.png',
    modernPerformance: '/assets/images/08_modern_websites_built_for_performance.png',
  },
  
  // Projects & Showcase
  projects: {
    shariaFinance: '/assets/images/04_ai_powered_sharia_finance_assistant.png',
    shariaFinanceAlt: '/assets/images/sharia-finance-assistant.png',
  },
  
  // Alternative Profile Images
  profiles: {
    alternative: '/assets/images/zaheer pic.png',
  },
} as const;

/**
 * Strategic Placement Guide
 * 
 * HERO SECTION:
 * - Background: ai_networking.png (animated background)
 * 
 * ABOUT SECTION (Bento Grid):
 * - Card 1 (Bio): 05_one_person_multiple_skills.png
 * - Card 2 (Journey): 03_building_open_source_projects.png
 * - Card 3 (Growth): 09_keep_building_keep_growing.png
 * 
 * SKILLS SECTION:
 * - AI/ML Category: 01_building_intelligent_ai_solutions.png
 * - Full Stack Category: 02_full_stack_developer.png
 * - DevOps/Deploy: 06_code_design_deploy_repeat.png
 * - Performance: 08_modern_websites_built_for_performance.png
 * 
 * PROJECTS SECTION:
 * - Featured Project Card: 04_ai_powered_sharia_finance_assistant.png
 * 
 * TESTIMONIALS/SOCIAL PROOF:
 * - Alternative Profile: zaheer pic.png
 */

export type PremiumAssetCategory = keyof typeof premiumAssets;
export type PremiumAssetKey<T extends PremiumAssetCategory> = keyof typeof premiumAssets[T];

export function getPremiumAsset<T extends PremiumAssetCategory>(
  category: T,
  key: PremiumAssetKey<T>
): string {
  return premiumAssets[category][key] as string;
}

export default premiumAssets;
