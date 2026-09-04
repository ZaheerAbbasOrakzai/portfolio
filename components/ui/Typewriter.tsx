"use client"
import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  phrases?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

const defaultPhrases = [
  'AI Systems Engineer · Multi-Agent Architect',
  'LLM Fine-tuning Expert · RAG Specialist',
  'Computer Vision Engineer · ML Infrastructure',
  'AI Platform Architect · Production ML Engineer',
  'Intelligent Systems Developer · Research Engineer'
]

export default function Typewriter({
  phrases = defaultPhrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let timeout: any
    const current = phrases[index]

    if (!deleting && charCount < current.length) {
      timeout = setTimeout(() => setCharCount(c => c + 1), typingSpeed)
    } else if (!deleting && charCount === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration)
    } else if (deleting && charCount > 0) {
      timeout = setTimeout(() => setCharCount(c => c - 1), deletingSpeed)
    } else if (deleting && charCount === 0) {
      setDeleting(false)
      setIndex(i => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charCount, deleting, index, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="typewriter-text" role="text" aria-live="polite" aria-atomic="true">
      {phrases[index].substring(0, charCount)}
    </span>
  )
}
