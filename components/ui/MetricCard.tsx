// @ts-nocheck
'use client'
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface MetricCardProps {
  value: number | string
  label: string
  trend?: string
  className?: string
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, trend, className = '' }) => {
  const display = typeof value === 'number' ? value.toLocaleString() : value
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 transition-all duration-300 group hover:border-white/20 ${className}`}
      role="group" 
      aria-label={`${label} metric: ${display}${trend ? `, ${trend}` : ''}`}
      whileHover={shouldReduceMotion ? {} : { 
        scale: 1.01,
        y: -2,
        transition: { duration: 0.2 } 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div 
          className="text-2xl font-bold text-white lg:text-3xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {display}
        </motion.div>
        
        <div className="mt-2 text-sm font-medium leading-snug text-slate-400">
          {label}
        </div>
        
        {trend && (
          <motion.div 
            className="mt-2 flex items-center gap-1 text-xs font-medium text-slate-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            {trend}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default MetricCard
