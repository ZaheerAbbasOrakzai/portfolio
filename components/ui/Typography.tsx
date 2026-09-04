import React from 'react'
import clsx from 'clsx'

// Heading Component
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  size?: HeadingSize
  gradient?: boolean
  children: React.ReactNode
}

const headingSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl'
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  size,
  gradient = false,
  className,
  children,
  ...props
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  // Default size based on heading level if not specified
  const defaultSizes: Record<HeadingLevel, HeadingSize> = {
    1: '4xl',
    2: '3xl',
    3: '2xl',
    4: 'xl',
    5: 'lg',
    6: 'base'
  }

  const actualSize = size || defaultSizes[level]

  const headingClasses = clsx(
    'text-display font-bold tracking-tight',
    headingSizes[actualSize],
    {
      'bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent': gradient,
      'text-primary': !gradient
    },
    className
  )

  return React.createElement(Tag, { className: headingClasses, ...props }, children)
}

// Text Component
type TextVariant = 'body' | 'caption' | 'label' | 'code'
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
type TextColor = 'primary' | 'secondary' | 'muted' | 'subtle' | 'inherit'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements
  variant?: TextVariant
  size?: TextSize
  weight?: TextWeight
  color?: TextColor
  children: React.ReactNode
}

const textVariants = {
  body: 'font-body leading-normal',
  caption: 'font-body text-sm leading-snug tracking-wide',
  label: 'font-body text-sm font-medium leading-tight',
  code: 'font-mono text-sm leading-normal'
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

const textWeights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const textColors = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted',
  subtle: 'text-subtle',
  inherit: 'text-inherit'
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  variant = 'body',
  size,
  weight,
  color = 'secondary',
  className,
  children,
  ...props
}) => {
  const textClasses = clsx(
    textVariants[variant],
    size && textSizes[size],
    weight && textWeights[weight],
    textColors[color],
    className
  )

  return React.createElement(as, { className: textClasses, ...props }, children)
}

// Display Text Component (for hero sections)
interface DisplayTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: '4xl' | '5xl' | '6xl' | '7xl'
  gradient?: boolean
  children: React.ReactNode
}

export const DisplayText: React.FC<DisplayTextProps> = ({
  size = '6xl',
  gradient = true,
  className,
  children,
  ...props
}) => {
  const displayClasses = clsx(
    'font-display font-extrabold tracking-tighter leading-none',
    headingSizes[size],
    {
      'bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent': gradient,
      'text-primary': !gradient
    },
    className
  )

  return (
    <h1 className={displayClasses} {...props}>
      {children}
    </h1>
  )
}

// Link Component
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'primary' | 'subtle' | 'button'
  external?: boolean
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  external = false,
  className,
  children,
  ...props
}) => {
  const linkVariants = {
    default: 'text-primary-400 hover:text-primary-300 underline underline-offset-4 decoration-primary-400/30 hover:decoration-primary-300',
    primary: 'text-primary-500 hover:text-primary-400 font-medium',
    subtle: 'text-muted hover:text-secondary transition-colors duration-200',
    button: 'inline-flex items-center px-4 py-2 bg-primary-700 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200'
  }

  const linkClasses = clsx(
    'focus-ring transition-colors duration-200',
    linkVariants[variant],
    className
  )

  return (
    <a
      className={linkClasses}
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...props}
    >
      {children}
      {external && (
        <svg
          className="ml-1 w-3 h-3 inline"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  )
}