import React from 'react'
import clsx from 'clsx'

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: React.ReactNode
  children: React.ReactNode
}

const baseStyles = 'inline-flex items-center rounded-full border transition-colors'

const variants = {
  default: [
    'bg-neutral-800/60',
    'border-neutral-700',
    'text-neutral-200'
  ],
  
  primary: [
    'bg-primary-500/20',
    'text-primary-300',
    'border',
    'border-primary-400/30'
  ],
  secondary: [
    'bg-accent-500/20',
    'text-accent-300',
    'border',
    'border-accent-400/30'
  ],
  success: [
    'bg-success-500/20',
    'text-success-300',
    'border',
    'border-success-400/30'
  ],
  warning: [
    'bg-warning-500/20',
    'text-warning-300',
    'border',
    'border-warning-400/30'
  ],
  error: [
    'bg-error-500/20',
    'text-error-300',
    'border',
    'border-error-400/30'
  ],
  neutral: [
    'bg-neutral-700/50',
    'text-neutral-300',
    'border',
    'border-neutral-600/50'
  ]
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-3 py-1.5 text-xs gap-1.5',
  lg: 'px-4 py-2 text-sm gap-2'
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  className,
  children,
  ...props
}) => {
  const badgeClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  return (
    <span className={badgeClasses} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="uppercase tracking-wider font-medium">{children}</span>
    </span>
  )
}

export default Badge