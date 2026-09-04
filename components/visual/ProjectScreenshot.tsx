'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useOptimizedImage } from '@/lib/hooks/useOptimizedImage'

export interface ProjectScreenshotProps {
  projectId: string
  imageIndex: number | string
  alt: string
  sizes?: string
  priority?: boolean
  quality?: number
  className?: string
  onLoad?: () => void
  onError?: (error: Error) => void
  lazy?: boolean
  showPlaceholder?: boolean
  aspectRatio?: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

/**
 * Loading placeholder component
 */
const LoadingPlaceholder: React.FC<{ 
  aspectRatio?: number
  className?: string
  showBlur?: boolean
  blurSrc?: string
}> = ({ 
  aspectRatio = 16/9, 
  className = '',
  showBlur = false,
  blurSrc
}) => {
  return (
    <div 
      className={`relative overflow-hidden bg-slate-800 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder background */}
      {showBlur && blurSrc && (
        <Image
          src={blurSrc}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 object-cover scale-110 blur-xl opacity-30"
          aria-hidden="true"
          unoptimized
        />
      )}
      
      {/* Animated loading skeleton */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
      
      {/* Loading indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-slate-600 border-t-slate-400 rounded-full animate-spin" />
      </div>
    </div>
  )
}

/**
 * Error placeholder component
 */
const ErrorPlaceholder: React.FC<{ 
  aspectRatio?: number
  className?: string
  alt?: string
  onRetry?: () => void
}> = ({ 
  aspectRatio = 16/9, 
  className = '',
  alt,
  onRetry
}) => {
  return (
    <div 
      className={`relative overflow-hidden bg-slate-800 border-2 border-red-900/50 ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-12 h-12 mb-3 text-red-400">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div className="text-sm text-slate-400 mb-2">Failed to load image</div>
        {alt && <div className="text-xs text-slate-500 mb-3">{alt}</div>}
        {onRetry && (
          <button 
            onClick={onRetry}
            className="text-xs text-red-400 hover:text-red-300 underline transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  )
}

/**
 * Intersection Observer hook for lazy loading
 */
const useIntersectionObserver = (
  ref: React.RefObject<HTMLDivElement | null>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options])

  return isIntersecting
}

/**
 * ProjectScreenshot Component
 * 
 * Optimized image component with modern format delivery, lazy loading, and blur placeholders
 */
export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({
  projectId,
  imageIndex,
  alt,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  className = '',
  onLoad,
  onError,
  lazy = true,
  showPlaceholder = true,
  aspectRatio = 16/9,
  objectFit = 'cover'
}) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Lazy loading intersection observer
  const isInView = useIntersectionObserver(
    containerRef,
    { rootMargin: '50px', threshold: 0.1 }
  )

  // Determine if we should load the image
  const shouldLoad = priority || !lazy || isInView

  // Generate image path
  const imagePath = `${projectId}/${typeof imageIndex === 'string' ? imageIndex : `screenshot-${imageIndex}`}`
  
  // Get optimized image data
  const imageData = useOptimizedImage(imagePath, sizes)

  // Handle image load
  const handleLoad = () => {
    setLoaded(true)
    setError(null)
    onLoad?.()
  }

  // Handle image error
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const error = new Error(`Failed to load image: ${imagePath}`)
    setError(error)
    onError?.(error)
  }

  // Handle retry
  const handleRetry = () => {
    setError(null)
    setLoaded(false)
    setRetryCount(prev => prev + 1)
  }

  // Reset states when image path changes
  useEffect(() => {
    setLoaded(false)
    setError(null)
    setRetryCount(0)
  }, [imagePath])

  // Preload image if priority
  useEffect(() => {
    if (priority && imageData && typeof window !== 'undefined') {
      const img = new window.Image()
      img.src = imageData.fallback.src
    }
  }, [priority, imageData])

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ aspectRatio }}
    >
      <AnimatePresence mode="wait">
        {/* Loading state */}
        {(!imageData || !shouldLoad || (!loaded && !error)) && (
          <div
            key="loading"
            className="absolute inset-0"
          >
            <LoadingPlaceholder
              aspectRatio={aspectRatio}
              className="w-full h-full"
              showBlur={!!imageData?.placeholder && showPlaceholder}
              blurSrc={imageData?.placeholder}
            />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            key="error"
            className="absolute inset-0"
          >
            <ErrorPlaceholder
              aspectRatio={aspectRatio}
              className="w-full h-full"
              alt={alt}
              onRetry={handleRetry}
            />
          </div>
        )}

        {/* Image */}
        {imageData && shouldLoad && !error && (
          <picture
            key={`image-${retryCount}`}
            className="absolute inset-0"
          >
            {/* Modern format sources */}
            {imageData.sources.map((source, index) => (
              <source
                key={`${source.type}-${index}`}
                srcSet={source.srcSet}
                type={source.type}
                sizes={source.sizes || sizes}
              />
            ))}
            
            {/* Fallback image */}
            <Image
              src={imageData.fallback.src}
              alt={alt}
              fill
              sizes={sizes}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={handleLoad}
              onError={handleError}
              className={`w-full h-full object-${objectFit} transition-opacity duration-300`}
              style={{
                aspectRatio: `${imageData.fallback.width} / ${imageData.fallback.height}`
              }}
              unoptimized
            />
          </picture>
        )}
      </AnimatePresence>

      {/* Blur placeholder overlay during loading */}
      {imageData?.placeholder && !loaded && !error && showPlaceholder && (
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: `url(${imageData.placeholder})`,
            zIndex: -1
          }}
        />
      )}
    </div>
  )
}

/**
 * ProjectScreenshotGallery Component
 * 
 * Grid layout for multiple project screenshots
 */
export interface ProjectScreenshotGalleryProps {
  projectId: string
  screenshots: Array<{
    index: number | string
    alt: string
    caption?: string
  }>
  columns?: number
  gap?: string
  aspectRatio?: number
  priority?: number // Index of priority image to load first
  onImageClick?: (index: number | string) => void
  className?: string
}

export const ProjectScreenshotGallery: React.FC<ProjectScreenshotGalleryProps> = ({
  projectId,
  screenshots,
  columns = 2,
  gap = 'gap-4',
  aspectRatio = 16/9,
  priority = 0,
  onImageClick,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} ${gap} ${className}`}>
      {screenshots.map((screenshot, index) => (
        <div
          key={screenshot.index}
          className="group cursor-pointer"
          onClick={() => onImageClick?.(screenshot.index)}
        >
          <ProjectScreenshot
            projectId={projectId}
            imageIndex={screenshot.index}
            alt={screenshot.alt}
            priority={index === priority}
            aspectRatio={aspectRatio}
            className="transition-transform duration-200 group-hover:scale-105"
          />
          
          {screenshot.caption && (
            <div className="mt-2 text-sm text-slate-400 text-center">
              {screenshot.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectScreenshot