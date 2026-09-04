'use client'

import React from 'react'
import clsx from 'clsx'

type InputVariant = 'default' | 'filled' | 'outline'
type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant
  size?: InputSize
  error?: boolean
  helperText?: string
  label?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const baseStyles = [
  'w-full',
  'font-body',
  'transition-all',
  'duration-200',
  'ease-out',
  'focus-ring',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed'
].join(' ')

const variants = {
  default: [
    'bg-neutral-900/50',
    'border',
    'border-neutral-700',
    'text-neutral-100',
    'placeholder-neutral-500',
    'focus:border-primary-500',
    'focus:bg-neutral-900/70'
  ].join(' '),
  
  filled: [
    'bg-neutral-800',
    'border',
    'border-transparent',
    'text-neutral-100',
    'placeholder-neutral-500',
    'focus:border-primary-500',
    'focus:bg-neutral-700'
  ].join(' '),
  
  outline: [
    'bg-transparent',
    'border',
    'border-neutral-600',
    'text-neutral-100',
    'placeholder-neutral-500',
    'focus:border-primary-500',
    'focus:bg-neutral-900/20'
  ].join(' ')
}

const sizes = {
  sm: 'px-3 py-2 text-sm rounded-lg',
  md: 'px-4 py-2.5 text-base rounded-lg',
  lg: 'px-5 py-3 text-lg rounded-xl'
}

const errorStyles = [
  'border-error-500',
  'focus:border-error-500',
  'text-error-400'
].join(' ')

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  variant = 'default',
  size = 'md',
  error = false,
  helperText,
  label,
  icon,
  iconPosition = 'left',
  className,
  ...props
}, ref) => {
  const inputId = React.useId()
  const helperId = `${inputId}-helper`

  const inputClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    {
      [errorStyles]: error,
      'pl-10': icon && iconPosition === 'left' && size === 'md',
      'pr-10': icon && iconPosition === 'right' && size === 'md',
      'pl-9': icon && iconPosition === 'left' && size === 'sm',
      'pr-9': icon && iconPosition === 'right' && size === 'sm',
      'pl-12': icon && iconPosition === 'left' && size === 'lg',
      'pr-12': icon && iconPosition === 'right' && size === 'lg'
    },
    className
  )

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-300 mb-2"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div
            className={clsx(
              'absolute inset-y-0 flex items-center pointer-events-none text-neutral-500',
              iconPosition === 'left' ? 'left-3' : 'right-3'
            )}
          >
            {icon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          aria-describedby={helperText ? helperId : undefined}
          aria-invalid={error}
          {...props}
        />
      </div>
      
      {helperText && (
        <p
          id={helperId}
          className={clsx(
            'mt-1 text-sm',
            error ? 'text-error-400' : 'text-neutral-500'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input