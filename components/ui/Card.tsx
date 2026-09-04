'use client'

import React from 'react'
import clsx from 'clsx'

type CardVariant = 'default' | 'glass' | 'elevated' | 'interactive' | 'bordered'
type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

type CardProps<T extends React.ElementType> = {
  as?: T
  variant?: CardVariant
  padding?: CardPadding
  className?: string
  children?: React.ReactNode
  interactive?: boolean
  onClick?: () => void
}

const baseStyles = [
  'relative',
  'rounded-[16px]',
  'transition-all',
  'duration-300',
  'ease-out'
].join(' ')

const variants = {
  default: [
    'bg-slate-950/80',
    'border',
    'border-white/10',
    'backdrop-blur-sm'
  ].join(' '),
  
  glass: [
    'bg-slate-950/40',
    'border',
    'border-white/10',
    'backdrop-blur-xl'
  ].join(' '),
  
  elevated: [
    'bg-slate-950',
    'border',
    'border-white/10'
  ].join(' '),
  
  interactive: [
    'bg-slate-950/60',
    'border',
    'border-white/10',
    'backdrop-blur-lg',
    'cursor-pointer',
    'hover:border-cyan-400/30',
    'hover:bg-slate-950/80',
    'hover:-translate-y-1'
  ].join(' '),
  
  bordered: [
    'bg-transparent',
    'border',
    'border-cyan-400/20',
    'hover:border-cyan-400/40'
  ].join(' ')
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10'
}

const Card = <T extends React.ElementType = 'div'>({
  as,
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  children,
  onClick,
  ...props
}: CardProps<T>) => {
  const Component = (as || 'div') as React.ElementType
  
  // Use interactive variant if onClick is provided or interactive is true
  const finalVariant = (onClick || interactive) ? 'interactive' : variant
  
  const cardClasses = clsx(
    baseStyles,
    variants[finalVariant],
    paddings[padding],
    className
  )

  return (
    <Component
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      } : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}

// Card composition components
const CardHeader = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('flex items-start justify-between gap-4 mb-4', className)} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={clsx('text-display text-xl font-semibold text-primary', className)} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={clsx('text-body text-muted mt-2', className)} {...props}>
    {children}
  </p>
)

const CardContent = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('text-body', className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('flex items-center justify-between gap-4 mt-6 pt-4 border-t border-white/8', className)} {...props}>
    {children}
  </div>
)

// Export compound component
export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter
})
