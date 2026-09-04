'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  User,
  Mail,
  MessageCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { useConversionOptimizer } from '../lib/conversion-optimizer'
import { profile } from '../lib/site'

// Type-safe motion components
const MotionDiv = motion.div as any

interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: string
  budget: string
  timeline: string
  message: string
  source: string
  urgency: 'low' | 'medium' | 'high'
}

interface ValidationErrors {
  [key: string]: string
}

interface ContactHandlerProps {
  variant?: 'modal' | 'inline' | 'sidebar'
  onClose?: () => void
  prefilledData?: Partial<ContactFormData>
  className?: string
}

/* ---------------------------------------------------------------------------
   Shared style helpers — kept in sync with design tokens (blue/cyan/violet)
   --------------------------------------------------------------------------- */

const labelClass = 'mb-2 block text-sm font-medium text-text-secondary'
const inputBaseClass =
  'w-full rounded-2xl border bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-5 py-4 text-text-primary placeholder-text-tertiary transition-all duration-200 focus:outline-none focus:ring-2'
const inputValidClass = 'border-white/10 focus:border-primary-500 focus:ring-primary-500/25'
const inputInvalidClass = 'border-error-500/60 focus:border-error-500 focus:ring-error-500/25'
const iconInInputClass =
  'pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-tertiary'

const primaryActionClass =
  'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 font-bold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:from-primary-400 hover:to-secondary-400 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]'

const secondaryActionClass =
  'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] font-bold text-text-primary transition-all duration-200 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/[0.10] hover:to-white/[0.04] hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]'

const fieldErrorClass = 'mt-1.5 flex items-center gap-1.5 text-sm text-error-400'

const ContactHandler: React.FC<ContactHandlerProps> = ({
  variant = 'inline',
  onClose,
  prefilledData = {},
  className = '',
}) => {
  const { trackEvent } = useConversionOptimizer()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'ai_consulting',
    budget: '10k_25k',
    timeline: '3_6_months',
    message: '',
    source: 'website',
    urgency: 'medium',
    ...prefilledData,
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const formRef = useRef<HTMLFormElement>(null)

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contact_form_data')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData((prev) => ({ ...prev, ...parsed }))
      } catch (error) {
        console.warn('Failed to load saved form data:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (formData.name || formData.email || formData.message) {
      localStorage.setItem('contact_form_data', JSON.stringify(formData))
    }
  }, [formData])

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Please provide more details (at least 10 characters)'
        return ''
      default:
        return ''
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value as string)
      if (error) {
        newErrors[key] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    // Track form interaction
    if (name === 'email' && value) {
      trackEvent('form_started', 'contact_form', 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      trackEvent('form_validation_failed', 'contact_form')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Simulate API call - In real implementation, this would call your backend
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Track successful submission
      trackEvent('form_completed', 'contact_form', 1)

      setIsSubmitted(true)

      // Clear saved form data
      localStorage.removeItem('contact_form_data')

      // Send email using mailto as fallback
      const emailSubject = encodeURIComponent(`New Project Inquiry from ${formData.name}`)
      const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Urgency: ${formData.urgency}

Message:
${formData.message}

Source: ${formData.source}
      `)

      window.open(`mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`)
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact me directly.')
      trackEvent('form_submission_failed', 'contact_form')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep === 1) {
      const step1Errors = ['name', 'email'].reduce((acc, field) => {
        const error = validateField(field, formData[field as keyof ContactFormData] as string)
        if (error) acc[field] = error
        return acc
      }, {} as ValidationErrors)

      if (Object.keys(step1Errors).length === 0) {
        setCurrentStep(2)
        setErrors({})
      } else {
        setErrors(step1Errors)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <MotionDiv
        className={`${className} rounded-2xl border border-success-500/25 bg-[#0B100D]/90 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-500/15 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
          <CheckCircle className="h-8 w-8 text-success-400" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">Your message is on the way.</h3>
        <p className="mx-auto mb-5 max-w-md text-sm leading-7 text-text-secondary">
          {`Thanks for reaching out. I'll reply with a clear next step, feasibility notes, and the best path forward.`}
          the best path forward.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-text-secondary">
          <p className="font-medium text-white">Prefer a faster conversation?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-5 py-2 font-medium text-[#25D366] transition-all hover:-translate-y-0.5 hover:border-[#25D366]/45 hover:bg-[#25D366]/15 hover:shadow-lg hover:shadow-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://calendly.com/zaheer-abbas-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-primary-500/25 bg-primary-500/10 px-5 py-2 font-medium text-primary-400 transition-all hover:-translate-y-0.5 hover:border-primary-500/45 hover:bg-primary-500/15 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <Calendar className="h-4 w-4" />
              Schedule a call
            </a>
          </div>
        </div>
      </MotionDiv>
    )
  }

  const isModal = variant === 'modal'

  return (
    <div className={`${className} ${isModal ? 'relative' : ''}`}>
      <div className="mb-6 rounded-2xl border border-primary-500/30 bg-gradient-to-r from-primary-500/15 via-secondary-500/15 to-accent-500/15 p-5 shadow-[0_8px_32px_rgba(6,182,212,0.15)]">
        <p className="text-base font-semibold text-white">
          Tell me about the problem, the ambition, and the timeline.
        </p>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          I'll respond with a sharp recommendation, a realistic implementation path, and the
          next best step.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#101013]/95 to-[#0A0A0D]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8"
      >
        {/* Progress indicator for multi-step */}
        <div className="mb-8 flex items-center space-x-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-base font-bold transition-all duration-300 ${
              currentStep >= 1
                ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-[0_0_24px_rgba(6,182,212,0.5)]'
                : 'border border-white/15 bg-white/[0.06] text-text-tertiary'
            }`}
          >
            1
          </div>
          <div
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              currentStep >= 2 ? 'bg-gradient-to-r from-primary-500 to-secondary-500 shadow-[0_0_12px_rgba(6,182,212,0.4)]' : 'bg-white/10'
            }`}
          />
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-base font-bold transition-all duration-300 ${
              currentStep >= 2
                ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-[0_0_24px_rgba(6,182,212,0.5)]'
                : 'border border-white/15 bg-white/[0.06] text-text-tertiary'
            }`}
          >
            2
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <MotionDiv
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="mb-5 text-xl font-semibold text-white">Let's Connect</h3>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your Name *
                </label>
                <div className="relative">
                  <User className={iconInInputClass} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${inputBaseClass} pl-11 ${
                      errors.name ? inputInvalidClass : inputValidClass
                    }`}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                {errors.name && (
                  <p className={fieldErrorClass}>
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className={iconInInputClass} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${inputBaseClass} pl-11 ${
                      errors.email ? inputInvalidClass : inputValidClass
                    }`}
                    placeholder="your.email@company.com"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <p className={fieldErrorClass}>
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Company (Optional) */}
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`${inputBaseClass} ${inputValidClass}`}
                  placeholder="Your company name"
                  autoComplete="organization"
                />
              </div>

              <button
                type="button"
                onClick={nextStep}
                className={`${primaryActionClass} w-full`}
              >
                <span>Continue</span>
                <MotionDiv
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </MotionDiv>
              </button>
            </MotionDiv>
          )}

          {currentStep === 2 && (
            <MotionDiv
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="mb-5 text-xl font-semibold text-white">Project Details</h3>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className={labelClass}>
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={`${inputBaseClass} ${inputValidClass} appearance-none`}
                >
                  <option value="ai_consulting" className="bg-[#18181B]">
                    AI Strategy & Consulting
                  </option>
                  <option value="ml_development" className="bg-[#18181B]">
                    ML Model Development
                  </option>
                  <option value="multi_agent" className="bg-[#18181B]">
                    Multi-Agent Systems
                  </option>
                  <option value="ai_integration" className="bg-[#18181B]">
                    AI Integration & Deployment
                  </option>
                  <option value="data_engineering" className="bg-[#18181B]">
                    Data Engineering & MLOps
                  </option>
                  <option value="other" className="bg-[#18181B]">
                    Other / Custom Solution
                  </option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={`${inputBaseClass} ${inputValidClass} appearance-none`}
                >
                  <option value="5k_10k" className="bg-[#18181B]">
                    $5K - $10K
                  </option>
                  <option value="10k_25k" className="bg-[#18181B]">
                    $10K - $25K
                  </option>
                  <option value="25k_50k" className="bg-[#18181B]">
                    $25K - $50K
                  </option>
                  <option value="50k_100k" className="bg-[#18181B]">
                    $50K - $100K
                  </option>
                  <option value="100k_plus" className="bg-[#18181B]">
                    $100K+
                  </option>
                  <option value="discuss" className="bg-[#18181B]">
                    Prefer to discuss
                  </option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={`${inputBaseClass} ${inputValidClass} appearance-none`}
                >
                  <option value="asap" className="bg-[#18181B]">
                    ASAP (Rush project)
                  </option>
                  <option value="1_3_months" className="bg-[#18181B]">
                    1-3 months
                  </option>
                  <option value="3_6_months" className="bg-[#18181B]">
                    3-6 months
                  </option>
                  <option value="6_12_months" className="bg-[#18181B]">
                    6-12 months
                  </option>
                  <option value="flexible" className="bg-[#18181B]">
                    Flexible
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`${inputBaseClass} resize-none ${
                    errors.message ? inputInvalidClass : inputValidClass
                  }`}
                  placeholder="Tell me about your project goals, challenges, and how I can help..."
                />
                {errors.message && (
                  <p className={fieldErrorClass}>
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {submitError && (
                <div className="rounded-xl border border-error-500/30 bg-error-500/10 p-3">
                  <p className="flex items-center gap-2 text-sm text-error-400">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </p>
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`${secondaryActionClass} flex-1`}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${primaryActionClass} flex-1 disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </form>

      {/* Alternative contact methods */}
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="mb-4 text-sm font-medium text-text-tertiary">Prefer a different way to connect?</p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-5 text-sm font-bold text-text-secondary transition-all duration-200 hover:border-[#25D366]/50 hover:bg-[#25D366]/15 hover:text-[#25D366] hover:shadow-[0_4px_16px_rgba(37,211,102,0.2)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
          >
            <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://calendly.com/zaheer-abbas-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-5 text-sm font-bold text-text-secondary transition-all duration-200 hover:border-primary-500/50 hover:bg-primary-500/15 hover:text-primary-400 hover:shadow-[0_4px_16px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
          >
            <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Schedule Call</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactHandler
