'use client'

import React, { useState, useEffect } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { motion } from 'framer-motion'

export interface RadialProgressProps {
  value: number // 0-100
  label: string
  color?: string
  size?: number
  strokeWidth?: number
  animated?: boolean
  showValue?: boolean
  showLabel?: boolean
  className?: string
  duration?: number
  delay?: number
  gradientId?: string
  backgroundColor?: string
  textColor?: string
}

const defaultColors = [
  '#06B6D4', // cyan-500
  '#3B82F6', // blue-500  
  '#8B5CF6', // violet-500
  '#F59E0B', // amber-500
  '#EF4444', // red-500
  '#10B981', // emerald-500
  '#F97316', // orange-500
  '#EC4899', // pink-500
]

/**
 * RadialProgress Chart Component
 * 
 * Displays an animated radial progress chart using Recharts with customizable styling
 */
export const RadialProgress: React.FC<RadialProgressProps> = ({
  value,
  label,
  color,
  size = 120,
  strokeWidth = 8,
  animated = true,
  showValue = true,
  showLabel = true,
  className = '',
  duration = 1500,
  delay = 0,
  gradientId,
  backgroundColor = '#1E293B', // slate-800
  textColor = '#F1F5F9' // slate-100
}) => {
  const [animatedValue, setAnimatedValue] = useState(animated ? 0 : value)
  const [isInView, setIsInView] = useState(false)

  // Intersection Observer for animation trigger
  useEffect(() => {
    if (!animated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
          
          // Animate the progress value
          const startTime = Date.now() + delay
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            if (progress < 0) {
              requestAnimationFrame(animate)
              return
            }
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setAnimatedValue(value * easeOut)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          animate()
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById(`radial-progress-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [animated, value, duration, delay, label, isInView])

  // Update animated value when props change
  useEffect(() => {
    if (!animated) {
      setAnimatedValue(value)
    }
  }, [value, animated])

  // Generate chart data
  const chartData = [
    {
      name: label,
      value: animatedValue,
      fill: color || defaultColors[Math.floor(Math.random() * defaultColors.length)]
    }
  ]

  // Calculate radius and positioning
  const radius = (size - strokeWidth) / 2
  const centerX = size / 2
  const centerY = size / 2

  // Gradient definition
  const gradientIdFinal = gradientId || `gradient-${label.replace(/\s+/g, '-').toLowerCase()}`

  const containerProps = {
    id: `radial-progress-${label}`,
    className: `relative inline-flex flex-col items-center ${className}`
  }

  const animationProps = animated ? {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: delay / 1000 }
  } : {}

  const Container = animated ? motion.div : 'div'

  return (
    <Container {...containerProps} {...animationProps}>
      {/* Chart Container */}
      <div 
        className="relative"
        style={{ width: size, height: size }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={chartData}
            cx={centerX}
            cy={centerY}
            innerRadius={radius - strokeWidth / 2}
            outerRadius={radius + strokeWidth / 2}
            startAngle={90}
            endAngle={-270}
          >
            <defs>
              <linearGradient id={gradientIdFinal} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={chartData[0].fill} stopOpacity={1} />
                <stop offset="100%" stopColor={chartData[0].fill} stopOpacity={0.6} />
              </linearGradient>
            </defs>
            
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            
            <RadialBar
              dataKey="value"
              cornerRadius={strokeWidth / 2}
              fill={`url(#${gradientIdFinal})`}
              background={{ 
                fill: backgroundColor,
                opacity: 0.3
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {showValue && (
            <div className="text-center">
              <div 
                className="text-2xl font-bold tabular-nums"
                style={{ color: textColor }}
              >
                {Math.round(animatedValue)}%
              </div>
            </div>
          )}
        </div>

        {/* Progress ring background */}
        <svg 
          className="absolute inset-0 -rotate-90"
          width={size} 
          height={size}
          style={{ zIndex: -1 }}
        >
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            opacity={0.2}
          />
        </svg>
      </div>

      {/* Label */}
      {showLabel && (
        <div className="mt-3 text-center">
          <div 
            className="text-sm font-medium"
            style={{ color: textColor }}
          >
            {label}
          </div>
        </div>
      )}
    </Container>
  )
}

/**
 * Skill Level RadialProgress Component
 * Specialized for technology skill visualization
 */
export interface SkillProgressProps {
  skillName: string
  level: number // 0-100
  experience?: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  showExperience?: boolean
}

const skillSizes = {
  sm: { size: 80, strokeWidth: 6 },
  md: { size: 120, strokeWidth: 8 },
  lg: { size: 160, strokeWidth: 10 }
}

export const SkillProgress: React.FC<SkillProgressProps> = ({
  skillName,
  level,
  experience,
  color,
  size = 'md',
  animated = true,
  showExperience = true
}) => {
  const sizeConfig = skillSizes[size]
  
  // Determine color based on skill level if not provided
  const getSkillColor = (level: number): string => {
    if (level >= 90) return '#10B981' // emerald-500 (expert)
    if (level >= 75) return '#3B82F6' // blue-500 (advanced)
    if (level >= 60) return '#F59E0B' // amber-500 (intermediate)
    return '#EF4444' // red-500 (beginner)
  }

  const skillColor = color || getSkillColor(level)

  return (
    <div className="flex flex-col items-center">
      <RadialProgress
        value={level}
        label={skillName}
        color={skillColor}
        size={sizeConfig.size}
        strokeWidth={sizeConfig.strokeWidth}
        animated={animated}
        showValue={true}
        showLabel={false}
      />
      
      <div className="mt-2 text-center">
        <div className="text-sm font-medium text-slate-200">
          {skillName}
        </div>
        {showExperience && experience && (
          <div className="text-xs text-slate-400 mt-1">
            {experience}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Multiple Skills Grid Component
 */
export interface SkillsGridProps {
  skills: Array<{
    name: string
    level: number
    experience?: string
    color?: string
  }>
  columns?: number
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  staggerDelay?: number
  className?: string
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({
  skills,
  columns = 3,
  size = 'md',
  animated = true,
  className = ''
}) => {
  return (
    <div className={`grid gap-6 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {skills.map((skill) => (
        <div key={skill.name}>
          <SkillProgress
            skillName={skill.name}
            level={skill.level}
            experience={skill.experience}
            color={skill.color}
            size={size}
            animated={animated}
          />
        </div>
      ))}
    </div>
  )
}

export default RadialProgress