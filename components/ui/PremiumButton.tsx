'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-primary-500 to-primary-600
    text-white
    shadow-lg shadow-primary-500/20
    hover:shadow-xl hover:shadow-primary-500/30
    hover:from-primary-600 hover:to-primary-700
    active:scale-[0.98]
  `,
  secondary: `
    bg-gradient-to-r from-secondary-500 to-secondary-600
    text-white
    shadow-lg shadow-secondary-500/20
    hover:shadow-xl hover:shadow-secondary-500/30
    hover:from-secondary-600 hover:to-secondary-700
    active:scale-[0.98]
  `,
  outline: `
    bg-transparent
    border-2 border-primary-500/30
    text-text-primary
    hover:bg-primary-500/10
    hover:border-primary-500/60
    active:scale-[0.98]
  `,
  ghost: `
    bg-transparent
    text-text-primary
    hover:bg-white/5
    active:bg-white/10
    active:scale-[0.98]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      children,
      disabled,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center gap-2
          rounded-lg
          font-medium
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:scale-[1.02] active:scale-[0.98]
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!loading && icon && icon}
        {children}
      </button>
    );
  }
);

PremiumButton.displayName = 'PremiumButton';

export default PremiumButton;
