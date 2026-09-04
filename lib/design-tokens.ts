/**
 * Premium Portfolio Design Tokens
 * Centralized design system for consistent styling
 */

// Color Palette - Dark Mode First
export const colors = {
  // Base Colors
  background: {
    primary: '#09090B',
    surface: '#18181B',
    elevated: '#27272A',
    muted: '#3F3F46',
  },
  
  // Accent Colors
  accent: {
    primary: '#3B82F6',      // Electric Blue
    secondary: '#06B6D4',    // Cyan
    tertiary: '#8B5CF6',     // Violet
    success: '#10B981',      // Green
    warning: '#F59E0B',      // Amber
    error: '#EF4444',        // Red
  },
  
  // Text Colors
  text: {
    primary: '#FAFAFA',
    secondary: '#A1A1AA',
    tertiary: '#71717A',
    muted: '#52525B',
  },
  
  // Border Colors
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    focus: 'rgba(59, 130, 246, 0.5)',
    hover: 'rgba(255, 255, 255, 0.2)',
  },
} as const;

// Typography Scale with Responsive Clamp
export const typography = {
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    accent: "'Space Grotesk', -apple-system, sans-serif",
  },
  
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',      // 12-14px
    sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',       // 14-16px
    base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',      // 16-18px
    lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',    // 18-20px
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',        // 20-24px
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',   // 24-30px
    '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', // 30-36px
    '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',       // 36-48px
    '5xl': 'clamp(3rem, 2.55rem + 2.25vw, 4rem)',         // 48-64px
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// Spacing Scale - 8px Base Unit
export const spacing = {
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const;

// Border Radius Scale
export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',  // Pill shape
} as const;

// Shadow Scale
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
  glow: '0 0 20px rgba(59, 130, 246, 0.4)',
  glowCyan: '0 0 20px rgba(6, 182, 212, 0.4)',
  glowViolet: '0 0 20px rgba(139, 92, 246, 0.4)',
} as const;

// Breakpoints
export const breakpoints = {
  xs: '375px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1920px',
} as const;

// Container
export const container = {
  maxWidth: '1280px',
  padding: {
    mobile: '1rem',    // 16px
    tablet: '2rem',    // 32px
    desktop: '3rem',   // 48px
  },
} as const;

// Grid System
export const grid = {
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
  },
  gutter: {
    mobile: '0.75rem',  // 12px
    tablet: '1rem',     // 16px
    desktop: '1.5rem',  // 24px
  },
} as const;

// Z-Index Scale
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  modal: 300,
  popover: 400,
  tooltip: 500,
} as const;

// Glassmorphism Effect
export const glassmorphism = {
  background: 'rgba(24, 24, 27, 0.7)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
} as const;

// Animation Durations
export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '600ms',
} as const;

// Animation Easings
export const easing = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// Export all tokens
export const designTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  container,
  grid,
  zIndex,
  glassmorphism,
  duration,
  easing,
} as const;

export default designTokens;
