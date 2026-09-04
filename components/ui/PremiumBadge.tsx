'use client';

import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md';

export interface PremiumBadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-neutral-800 text-neutral-300 border-neutral-700',
  primary: 'bg-primary-500/10 text-primary-400 border-primary-500/30',
  secondary: 'bg-secondary-500/10 text-secondary-400 border-secondary-500/30',
  success: 'bg-success-500/10 text-success-400 border-success-500/30',
  warning: 'bg-warning-500/10 text-warning-400 border-warning-500/30',
  error: 'bg-error-500/10 text-error-400 border-error-500/30',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const PremiumBadge: React.FC<PremiumBadgeProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  pulse = false,
  children,
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full
        border
        font-medium
        transition-all duration-200
        scale-100 opacity-100
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default PremiumBadge;
