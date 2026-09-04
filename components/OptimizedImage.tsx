'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [actualSrc, setActualSrc] = useState(src)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActualSrc(src)
    setError(false)
    setIsLoaded(false)
  }, [src])

  const handleImageLoad = () => {
    setIsLoaded(true)
    setError(false)
    onLoad?.()
  }

  const handleImageError = () => {
    setError(true)
    setIsLoaded(false)
    onError?.()
  }

  useEffect(() => {
    if (!priority && loading === 'lazy' && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new window.Image()
              img.src = actualSrc
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '80px' }
      )

      observer.observe(imgRef.current)
      return () => observer.disconnect()
    }
  }, [actualSrc, priority, loading])

  const imageProps = {
    src: actualSrc,
    alt,
    quality,
    onLoad: handleImageLoad,
    onError: handleImageError,
    className: `${className} transition-all duration-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`,
    ...(fill ? { fill: true } : { width, height }),
    ...(sizes && { sizes }),
    ...(placeholder === 'blur' && {
      placeholder: 'blur' as const,
      blurDataURL: blurDataURL || 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
    }),
    priority,
    unoptimized: true
  }

  const wrapperStyle = fill
    ? { width: '100%', height: '100%' }
    : { width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }

  return (
    <div ref={imgRef} className="relative overflow-hidden" style={wrapperStyle}>
      {!isLoaded && !error && (
        <div
          className={`absolute inset-0 animate-pulse bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 ${className}`}
          style={wrapperStyle}
        />
      )}

      {error ? (
        <div
          className={`flex items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 text-center text-xs font-medium text-slate-300 ${className}`}
          style={wrapperStyle}
        >
          <span>Preview unavailable</span>
        </div>
      ) : (
        <Image {...imageProps} alt={alt || ''} />
      )}
    </div>
  )
}