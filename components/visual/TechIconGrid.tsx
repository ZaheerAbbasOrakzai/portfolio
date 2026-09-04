'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TechIcon } from './TechIcon'
import { iconRegistry, TechIconMetadata, TechCategory } from '@/lib/services'

// Type-safe motion components
const MotionDiv = motion.div as any

export interface TechIconGridProps {
  icons?: TechIconMetadata[]
  columns?: number
  gap?: string
  filterByCategory?: TechCategory[]
  sortBy?: 'name' | 'category' | 'trending' | 'experience'
  animated?: boolean
  showCategoryHeaders?: boolean
  maxIcons?: number
  className?: string
  onIconClick?: (iconData: TechIconMetadata) => void
}

interface CategoryGroup {
  category: TechCategory
  categoryLabel: string
  icons: TechIconMetadata[]
}

const categoryLabels: Record<TechCategory, string> = {
  language: 'Programming Languages',
  framework: 'Frameworks',
  library: 'Libraries',
  database: 'Databases',
  cloud: 'Cloud Platforms',
  devops: 'DevOps & Tools',
  tool: 'Development Tools',
  platform: 'Platforms & Services'
}

/**
 * Category header component
 */
const CategoryHeader: React.FC<{ 
  category: TechCategory
  count: number
  animated?: boolean
}> = ({ category, count, animated }) => {
  return (
    <div
      className="col-span-full mb-4"
    >
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold text-slate-200">
          {categoryLabels[category]}
        </h3>
        <span className="text-sm text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
          {count}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
      </div>
    </div>
  )
}

/**
 * Filter and sort controls
 */
const GridControls: React.FC<{
  totalCount: number
  sortBy: TechIconGridProps['sortBy']
  onSortChange: (sort: TechIconGridProps['sortBy']) => void
  filterByCategory?: TechCategory[]
  onCategoryChange: (categories: TechCategory[]) => void
  availableCategories: TechCategory[]
}> = ({ 
  totalCount, 
  sortBy, 
  onSortChange, 
  filterByCategory, 
  onCategoryChange, 
  availableCategories 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-400">
          {totalCount} technologies
        </span>
        {filterByCategory && filterByCategory.length > 0 && (
          <span className="text-xs text-cyan-400">
            ({filterByCategory.length} categories filtered)
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Sort controls */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-400">Sort by:</label>
          <select
            value={sortBy || 'name'}
            onChange={(e) => onSortChange(e.target.value as TechIconGridProps['sortBy'])}
            className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="trending">Trending First</option>
            <option value="experience">Experience</option>
          </select>
        </div>

        {/* Category filter */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm text-slate-200 hover:bg-slate-600 transition-colors"
          >
            Filter Categories
          </button>
          
          {isOpen && (
            <div
              className="absolute right-0 top-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-20 min-w-48"
            >
              <div className="p-3">
                <div className="space-y-2">
                  <button
                    onClick={() => onCategoryChange([])}
                    className="block w-full text-left px-2 py-1 text-sm text-slate-300 hover:bg-slate-700 rounded transition-colors"
                  >
                    All Categories
                  </button>
                  {availableCategories.map((category) => (
                    <label key={category} className="flex items-center gap-2 px-2 py-1 hover:bg-slate-700 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filterByCategory?.includes(category) || false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            onCategoryChange([...(filterByCategory || []), category])
                          } else {
                            onCategoryChange((filterByCategory || []).filter(c => c !== category))
                          }
                        }}
                        className="form-checkbox text-cyan-500"
                      />
                      <span className="text-sm text-slate-300 capitalize">
                        {categoryLabels[category]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

/**
 * Technology Icon Grid Component
 * 
 * Displays a responsive grid of technology icons with filtering, sorting, and animations
 */
export const TechIconGrid: React.FC<TechIconGridProps> = ({
  icons,
  columns = 6,
  gap = 'gap-4',
  filterByCategory,
  sortBy = 'name',
  animated = true,
  showCategoryHeaders = false,
  maxIcons,
  className = '',
  onIconClick
}) => {
  const [localFilterByCategory, setLocalFilterByCategory] = useState<TechCategory[] | undefined>(filterByCategory)
  const [localSortBy, setLocalSortBy] = useState<TechIconGridProps['sortBy']>(sortBy)

  // Get all icons if not provided
  const allIcons = icons || iconRegistry.getAll()
  
  // Get available categories
  const availableCategories = useMemo(() => {
    const categories = new Set<TechCategory>()
    allIcons.forEach(icon => categories.add(icon.category))
    return Array.from(categories).sort()
  }, [allIcons])

  // Filter and sort icons
  const processedIcons = useMemo(() => {
    let filtered = allIcons

    // Apply category filter
    if (localFilterByCategory && localFilterByCategory.length > 0) {
      filtered = filtered.filter(icon => localFilterByCategory.includes(icon.category))
    }

    // Apply max limit
    if (maxIcons && maxIcons > 0) {
      filtered = filtered.slice(0, maxIcons)
    }

    // Sort icons
    switch (localSortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'category':
        filtered.sort((a, b) => {
          const categoryCompare = a.category.localeCompare(b.category)
          return categoryCompare !== 0 ? categoryCompare : a.name.localeCompare(b.name)
        })
        break
      case 'trending':
        filtered.sort((a, b) => {
          if (a.trending && !b.trending) return -1
          if (!a.trending && b.trending) return 1
          return a.name.localeCompare(b.name)
        })
        break
      case 'experience':
        filtered.sort((a, b) => {
          const aExp = a.experience?.years || 0
          const bExp = b.experience?.years || 0
          return bExp - aExp || a.name.localeCompare(b.name)
        })
        break
      default:
        break
    }

    return filtered
  }, [allIcons, localFilterByCategory, localSortBy, maxIcons])

  // Group by category for headers
  const categoryGroups: CategoryGroup[] = useMemo(() => {
    if (!showCategoryHeaders) return []

    const groups = new Map<TechCategory, TechIconMetadata[]>()
    
    processedIcons.forEach(icon => {
      if (!groups.has(icon.category)) {
        groups.set(icon.category, [])
      }
      groups.get(icon.category)!.push(icon)
    })

    return Array.from(groups.entries()).map(([category, icons]) => ({
      category,
      categoryLabel: categoryLabels[category],
      icons
    })).sort((a, b) => a.categoryLabel.localeCompare(b.categoryLabel))
  }, [processedIcons, showCategoryHeaders])

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animated ? 0.05 : 0,
        delayChildren: animated ? 0.1 : 0
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }

  // Handle icon click
  const handleIconClick = (iconData: TechIconMetadata) => {
    if (onIconClick) {
      onIconClick(iconData)
    } else {
      // Default behavior: filter portfolio by related projects
      console.log('Icon clicked:', iconData.name, 'Related projects:', iconData.relatedProjects)
    }
  }

  const gridClass = `
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${columns} ${gap}
    ${className}
  `.trim()

  return (
    <div className="w-full">
      {/* Controls */}
      <GridControls
        totalCount={processedIcons.length}
        sortBy={localSortBy}
        onSortChange={setLocalSortBy}
        filterByCategory={localFilterByCategory}
        onCategoryChange={setLocalFilterByCategory}
        availableCategories={availableCategories}
      />

      {/* Grid with category headers */}
      {showCategoryHeaders ? (
        <div className="space-y-8">
          {categoryGroups.map((group, groupIndex) => (
            <div
              key={group.category}
            >
              <CategoryHeader
                category={group.category}
                count={group.icons.length}
                animated={animated}
              />
              
              <div
                className={gridClass}
              >
                {group.icons.map((iconData, index) => (
              <div
                key={`${group.category}-${iconData.id}`}
                className="flex justify-center"
              >
                <TechIcon
                  name={iconData.id}
                  size="lg"
                  animated={animated}
                  onClick={() => handleIconClick(iconData)}
                />
              </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Grid without category headers */
        <div
          className={gridClass}
        >
          {processedIcons.map((iconData, index) => (
            <div
              key={iconData.id}
              className="flex justify-center"
            >
              <TechIcon
                name={iconData.id}
                size="lg"
                animated={animated}
                onClick={() => handleIconClick(iconData)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {processedIcons.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-2">No technologies found</div>
          <div className="text-sm text-slate-500">
            Try adjusting your filters or search criteria
          </div>
        </div>
      )}
    </div>
  )
}

export default TechIconGrid