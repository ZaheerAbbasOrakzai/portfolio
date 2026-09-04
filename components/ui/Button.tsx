'use client'

import React from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const baseStyles = [
  'btn-interactive',
  'focus-ring',
  'inline-flex',
  'min-h-[44px]',
  'items-center',
  'justify-center',
  'font-semibold',
  'rounded-[12px]',
  'border',
  'transition-all',
  'duration-200',
  'ease-out',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none'
].join(' ')

const variants = {
  primary: [
    'bg-white',
    'border-white',
    'text-slate-950',
    'shadow-[0_10px_30px_rgba(255,255,255,0.12)]',
    'hover:bg-slate-100',
    'hover:border-slate-100',
    'active:bg-slate-200',
    'active:scale-[0.99]'
  ].join(' '),
  
  secondary: [
    'bg-slate-900',
    'border-white/10',
    'text-white',
    'hover:bg-slate-800',
    'hover:border-white/20',
    'active:bg-slate-700',
    'active:scale-[0.99]'
  ].join(' '),
  
  ghost: [
    'bg-transparent',
    'border-white/12',
    'text-slate-200',
    'hover:bg-white/5',
    'hover:border-white/20',
    'hover:text-white',
    'active:bg-white/10'
  ].join(' '),
  
  outline: [
    'bg-transparent',
    'border-white/12',
    'text-slate-200',
    'hover:border-white/30',
    'hover:text-white',
    'hover:bg-white/5',
    'active:bg-white/10'
  ].join(' '),
  
  danger: [
    'bg-error-500',
    'border-error-500',
    'text-white',
    'hover:bg-error-600',
    'hover:border-error-600',
    'active:bg-error-700',
    'active:scale-[0.99]'
  ].join(' ')
}

const sizes = {
  xs: 'px-3 py-2 text-xs gap-1',
  sm: 'px-4 py-2.5 text-sm gap-1.5',
  md: 'px-5 py-3 text-sm gap-2',
  lg: 'px-6 py-3.5 text-sm gap-2.5',
  xl: 'px-7 py-4 text-base gap-3'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  disabled,
  type = 'button',
  ...rest
}, ref) => {
  const isDisabled = disabled || loading

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
    >
      {loading && (
        <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      
      {children && (
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
      )}
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
