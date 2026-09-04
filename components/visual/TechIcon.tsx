'use client'

import React, { useState, Suspense } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { iconRegistry, TechIconMetadata } from '@/lib/services'

// Type-safe motion components
const MotionDiv = motion.div as any

export interface TechIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showTooltip?: boolean
  tooltip?: {
    title: string
    experience?: string
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  }
  animated?: boolean
  className?: string
  onClick?: () => void
}

interface TechIconSize {
  container: string
  svg: string
  pixels: number
}

const sizes: Record<string, TechIconSize> = {
  sm: { container: 'w-8 h-8', svg: 'w-6 h-6', pixels: 32 },
  md: { container: 'w-12 h-12', svg: 'w-8 h-8', pixels: 48 },
  lg: { container: 'w-16 h-16', svg: 'w-12 h-12', pixels: 64 },
  xl: { container: 'w-24 h-24', svg: 'w-16 h-16', pixels: 96 }
}

/**
 * Dynamic SVG icon component with error handling
 */
const DynamicSvgIcon: React.FC<{ iconData: TechIconMetadata; size: TechIconSize }> = ({ 
  iconData, 
  size 
}) => {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (error) {
    return (
      <div 
        className={`${size.svg} flex items-center justify-center bg-slate-700 rounded text-slate-400 text-xs font-medium`}
        title={`${iconData.name} icon not available`}
      >
        {iconData.name.substring(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
    <div className={`${size.svg} relative`}>
      {!loaded && (
        <div className={`${size.svg} animate-pulse bg-slate-700 rounded`} />
      )}
      <Image
        src={iconData.svgPath}
        alt={`${iconData.name} logo`}
        fill
        sizes="48px"
        className={`object-contain transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          filter: 'brightness(0) saturate(100%) invert(0.8) sepia(0.2) saturate(0.5) hue-rotate(180deg)'
        }}
        unoptimized
      />
    </div>
  )
}

/**
 * Tooltip component with experience information
 */
const Tooltip: React.FC<{
  iconData: TechIconMetadata
  tooltip?: TechIconProps['tooltip']
  children: React.ReactNode
}> = ({ iconData, tooltip, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  const tooltipContent = tooltip || {
    title: iconData.name,
    experience: iconData.experience ? `${iconData.experience.years} years` : undefined,
    level: iconData.experience?.level
  }

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <MotionDiv
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 shadow-xl min-w-max">
              <div className="text-sm font-medium text-slate-100">
                {tooltipContent.title}
              </div>
              
              {tooltipContent.experience && (
                <div className="text-xs text-slate-400 mt-1">
                  Experience: {tooltipContent.experience}
                </div>
              )}
              
              {tooltipContent.level && (
                <div className="text-xs text-slate-400 capitalize">
                  Level: {tooltipContent.level}
                </div>
              )}
              
              {iconData.trending && (
                <div className="text-xs text-cyan-400 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                  Trending
                </div>
              )}
              
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-700"></div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Technology Icon Component
 * 
 * Displays technology logos with optional tooltips, animations, and interactivity
 */
export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 'md',
  showTooltip = true,
  tooltip,
  animated = true,
  className = '',
  onClick
}) => {
  const iconData = iconRegistry.get(name)
  const sizeConfig = sizes[size]

  // Fallback for missing icons
  if (!iconData) {
    console.warn(`Icon not found: ${name}`)
    return (
      <div 
        className={`${sizeConfig.container} ${className} flex items-center justify-center bg-slate-700 rounded text-slate-400 text-xs font-medium cursor-default`}
        title={`${name} icon not available`}
      >
        {name.substring(0, 2).toUpperCase()}
      </div>
    )
  }

  // Base component with icon
  const iconElement = (
    <MotionDiv
      className={`
        ${sizeConfig.container} 
        ${className}
        relative flex items-center justify-center
        ${animated ? 'transition-transform duration-200' : ''}
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
      `}
      onClick={onClick}
      whileHover={animated ? { 
        scale: 1.1,
        transition: { duration: 0.2 }
      } : undefined}
      whileTap={animated && onClick ? { 
        scale: 0.95,
        transition: { duration: 0.1 }
      } : undefined}
    >
      {/* Background circle for better visibility */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none rounded-full bg-slate-800/30 backdrop-blur-sm"
        style={{
          background: `radial-gradient(circle, ${iconData.color}15 0%, transparent 70%)`
        }}
      />
      
      {/* Icon */}
      <Suspense fallback={
        <div className={`${sizeConfig.svg} animate-pulse bg-slate-700 rounded`} />
      }>
        <DynamicSvgIcon iconData={iconData} size={sizeConfig} />
      </Suspense>

      {/* Trending badge */}
      {iconData.trending && (
        <MotionDiv
          className="absolute -top-1 -right-1 w-3 h-3 -z-10 pointer-events-none bg-cyan-400 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
        >
          <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
        </MotionDiv>
      )}
    </MotionDiv>
  )

  // Wrap with tooltip if enabled
  if (showTooltip) {
    return (
      <Tooltip iconData={iconData} tooltip={tooltip}>
        {iconElement}
      </Tooltip>
    )
  }

  return iconElement
}

export default TechIcon