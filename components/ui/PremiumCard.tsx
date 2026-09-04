'use client';

import React from 'react';

export type CardVariant = 'glass' | 'solid' | 'bordered';

export interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  glass: `
    bg-[rgba(24,24,27,0.7)]
    backdrop-blur-xl
    border border-white/10
    shadow-[0_8px_32px_rgba(0,0,0,0.1)]
  `,
  solid: `
    bg-background-surface
    border border-white/5
    shadow-lg
  `,
  bordered: `
    bg-transparent
    border-2 border-white/10
  `,
};

// Compound Components
const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`p-6 pb-4 ${className}`}>{children}</div>;

const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`p-6 pt-4 border-t border-white/5 ${className}`}>{children}</div>
);

interface PremiumCardComponent
  extends React.ForwardRefExoticComponent<PremiumCardProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

const PremiumCardBase = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ variant = 'glass', hover = true, glow = false, children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-xl
          transition-all duration-300
          ${variantStyles[variant]}
          ${hover ? 'hover:border-white/20 hover:shadow-2xl' : ''}
          ${glow ? 'hover:shadow-glow-primary' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PremiumCardBase.displayName = 'PremiumCard';

const PremiumCard = PremiumCardBase as PremiumCardComponent;
PremiumCard.Header = CardHeader;
PremiumCard.Body = CardBody;
PremiumCard.Footer = CardFooter;

export { PremiumCard };
export default PremiumCard;
