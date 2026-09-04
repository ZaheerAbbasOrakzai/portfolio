"use client"
import React, { useEffect, useRef } from 'react'

type Node = {
  id: string
  x: number
  y: number
  radius: number
  baseRadius: number
  drift: number
  speed: number
  hue: number
  label: string
  category: string
  level: string
  years: number
}

const skillNodes: Array<{ id: string; label: string; category: string; level: string; years: number }> = [
  // AI & Machine Learning
  { id: 'llm', label: 'LLM Engineering', category: 'AI/ML', level: 'Expert', years: 3 },
  { id: 'multi-agent', label: 'Multi-Agent Systems', category: 'AI/ML', level: 'Expert', years: 2 },
  { id: 'nlp', label: 'NLP', category: 'AI/ML', level: 'Expert', years: 4 },
  { id: 'cv', label: 'Computer Vision', category: 'AI/ML', level: 'Advanced', years: 4 },
  { id: 'rag', label: 'RAG Systems', category: 'AI/ML', level: 'Expert', years: 2 },
  
  // Technical Stack
  { id: 'python', label: 'Python', category: 'Technical', level: 'Expert', years: 6 },
  { id: 'pytorch', label: 'PyTorch', category: 'Technical', level: 'Expert', years: 4 },
  { id: 'typescript', label: 'TypeScript', category: 'Technical', level: 'Advanced', years: 3 },
  { id: 'tensorflow', label: 'TensorFlow', category: 'Technical', level: 'Advanced', years: 3 },
  { id: 'fastapi', label: 'FastAPI', category: 'Technical', level: 'Expert', years: 3 },
  
  // Cloud & DevOps
  { id: 'aws', label: 'AWS', category: 'Cloud', level: 'Advanced', years: 3 },
  { id: 'docker', label: 'Docker', category: 'Cloud', level: 'Advanced', years: 4 },
  { id: 'kubernetes', label: 'Kubernetes', category: 'Cloud', level: 'Advanced', years: 2 },
  
  // Databases
  { id: 'vector-db', label: 'Vector DB', category: 'Data', level: 'Advanced', years: 2 },
  { id: 'mongodb', label: 'MongoDB', category: 'Data', level: 'Advanced', years: 3 },
  { id: 'postgresql', label: 'PostgreSQL', category: 'Data', level: 'Advanced', years: 3 },
  
  // Specialized
  { id: 'arabic-nlp', label: 'Arabic NLP', category: 'Research', level: 'Expert', years: 2 },
  { id: 'smart-city', label: 'Smart Cities', category: 'Research', level: 'Expert', years: 1 },
  { id: 'ml-ops', label: 'MLOps', category: 'Operations', level: 'Advanced', years: 3 },
]

export default function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let pulses: Array<{ from: number; to: number; progress: number; speed: number }> = []

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildNodes()
      buildPulses()
    }

    const buildNodes = () => {
      const centerX = width / 2
      const centerY = height / 2
      const maxRadius = Math.min(width, height) * 0.35
      
      // Group nodes by category for better organization
      const categories = ['AI/ML', 'Technical', 'Cloud', 'Data', 'Research', 'Operations']
      const categoryColors: Record<string, number> = {
        'AI/ML': 187,
        'Technical': 221,
        'Cloud': 145,
        'Data': 287,
        'Research': 167,
        'Operations': 246
      }
      
      nodes = skillNodes.map((node, index) => {
        const categoryIndex = categories.indexOf(node.category)
        const categoryAngle = (categoryIndex / categories.length) * Math.PI * 2
        const nodesInCategory = skillNodes.filter(n => n.category === node.category).length
        const nodeIndexInCategory = skillNodes.filter(n => n.category === node.category).indexOf(node)
        
        const angleOffset = (nodeIndexInCategory / nodesInCategory) * 0.8 - 0.4
        const angle = categoryAngle + angleOffset
        const distanceFromCenter = maxRadius * (0.4 + (nodeIndexInCategory / nodesInCategory) * 0.5)
        
        const x = centerX + Math.cos(angle) * distanceFromCenter
        const y = centerY + Math.sin(angle) * distanceFromCenter
        
        // Size based on expertise level
        const levelMultiplier = node.level === 'Expert' ? 1.3 : node.level === 'Advanced' ? 1.0 : 0.7
        const baseRadius = 5 + (node.years * 0.5) * levelMultiplier
        
        return {
          id: node.id,
          x,
          y,
          radius: baseRadius,
          baseRadius,
          drift: (Math.random() * 0.015 + 0.008) * (index % 2 === 0 ? 1 : -1),
          speed: 0.003 + Math.random() * 0.002,
          hue: categoryColors[node.category] || 200,
          label: node.label,
          category: node.category,
          level: node.level,
          years: node.years
        }
      })
    }

    const buildPulses = () => {
      // Create pulses between related skills
      pulses = []
      const connections = [
        [0, 1], [0, 2], [1, 4], // AI/ML connections
        [5, 6], [5, 9], [6, 7], // Technical connections
        [10, 11], [11, 12], // Cloud connections
        [13, 14], [14, 15], // Data connections
        [16, 17], [0, 16], // Research connections
        [5, 10], [0, 18], // Cross-category connections
      ]
      
      connections.forEach(([from, to]) => {
        if (from < skillNodes.length && to < skillNodes.length) {
          pulses.push({
            from,
            to,
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.003
          })
        }
      })
    }

    const drawHudFrame = (time: number) => {
      const pad = 14
      ctx.save()
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.35)'
      ctx.lineWidth = 1

      const corners = [
        [pad, pad + 18, pad, pad, pad + 18, pad],
        [width - pad - 18, pad, width - pad, pad, width - pad, pad + 18],
        [pad, height - pad - 18, pad, height - pad, pad + 18, height - pad],
        [width - pad - 18, height - pad, width - pad, height - pad, width - pad, height - pad - 18],
      ]
      corners.forEach(([x1, y1, x2, y2, x3, y3]) => {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.lineTo(x3, y3)
        ctx.stroke()
      })

      ctx.font = '10px monospace'
      ctx.fillStyle = 'rgba(125, 211, 252, 0.55)'
      ctx.fillText('SKILLS_MATRIX_v2.0', pad + 4, pad + 12)
      ctx.fillText(`${skillNodes.length} SKILLS MAPPED`, width - pad - 140, pad + 12)

      if (!prefersReducedMotion) {
        const scanY = pad + ((time * 0.04) % (height - pad * 2))
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.08)'
        ctx.beginPath()
        ctx.moveTo(pad, scanY)
        ctx.lineTo(width - pad, scanY)
        ctx.stroke()
      }
      ctx.restore()
    }

    const drawGrid = (time: number) => {
      ctx.save()
      ctx.globalAlpha = 0.12
      const gridSize = 40
      ctx.strokeStyle = '#7dd3fc'
      ctx.lineWidth = 0.5
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.restore()

      // Central glow representing core expertise
      const centerX = width / 2
      const centerY = height / 2
      const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.min(width, height) * 0.4)
      glow.addColorStop(0, 'rgba(34,211,238,0.12)')
      glow.addColorStop(0.5, 'rgba(139,92,246,0.05)')
      glow.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      // Central hub indicator
      const pulse = 1 + Math.sin(time * 0.0015) * 0.04
      ctx.beginPath()
      ctx.arc(centerX, centerY, 28 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(125, 211, 252, 0.08)'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, 16 * pulse, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.3)'
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.font = '8px monospace'
      ctx.fillStyle = 'rgba(248,250,252,0.6)'
      ctx.textAlign = 'center'
      ctx.fillText('AI/ML', centerX, centerY - 4)
      ctx.fillText('CORE', centerX, centerY + 6)
      ctx.textAlign = 'left'
    }

    const drawConnections = () => {
      const centerX = width / 2
      const centerY = height / 2
      
      // Draw connections to center
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(node.x, node.y)
        ctx.strokeStyle = 'rgba(125, 211, 252, 0.08)'
        ctx.lineWidth = 0.6
        ctx.stroke()
      })

      // Draw connections between related skills
      const relatedConnections = [
        [0, 1], [0, 2], [1, 4], // AI/ML
        [5, 6], [5, 9], [6, 7], // Technical
        [10, 11], [11, 12], // Cloud
        [13, 14], [14, 15], // Data
        [16, 17], [0, 16], // Research
        [5, 10], [0, 18], // Cross-category
      ]

      relatedConnections.forEach(([fromIndex, toIndex]) => {
        const from = nodes[fromIndex]
        const to = nodes[toIndex]
        if (!from || !to) return

        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        gradient.addColorStop(0, `hsla(${from.hue}, 85%, 72%, 0.15)`)
        gradient.addColorStop(1, `hsla(${to.hue}, 85%, 72%, 0.15)`)
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.quadraticCurveTo((from.x + to.x) / 2, (from.y + to.y) / 2 - 20, to.x, to.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.8
        ctx.stroke()
      })
    }

    const drawPulses = () => {
      if (prefersReducedMotion) return

      pulses.forEach((pulse) => {
        const from = nodes[pulse.from]
        const to = nodes[pulse.to]
        if (!from || !to) return

        pulse.progress += pulse.speed
        if (pulse.progress > 1) pulse.progress = 0

        const t = pulse.progress
        const cx = (from.x + to.x) / 2
        const cy = (from.y + to.y) / 2 - 28
        const x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x
        const y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 6)
        glow.addColorStop(0, 'rgba(34,211,238,0.9)')
        glow.addColorStop(1, 'rgba(34,211,238,0)')
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
      })
    }

    const drawNodes = (time: number) => {
      const centerX = width / 2
      const centerY = height / 2

      nodes.forEach((node, index) => {
        if (!prefersReducedMotion) {
          const orbitX = centerX + Math.cos(time * 0.0003 + index * 0.7) * 5
          const orbitY = centerY + Math.sin(time * 0.0003 + index * 0.5) * 4
          node.x += (orbitX - node.x) * 0.02
          node.y += (orbitY - node.y) * 0.02
        }

        const targetRadius = node.baseRadius + Math.sin(time * 0.0015 + index) * 0.3
        node.radius += (targetRadius - node.radius) * 0.1

        // Glow effect based on expertise level
        const glowIntensity = node.level === 'Expert' ? 0.4 : node.level === 'Advanced' ? 0.3 : 0.2
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2.5)
        glow.addColorStop(0, `hsla(${node.hue}, 85%, 72%, ${glowIntensity})`)
        glow.addColorStop(1, `hsla(${node.hue}, 85%, 72%, 0)`)
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Main node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(248,250,252,0.9)'
        ctx.fill()

        // Inner colored circle based on expertise
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${node.hue}, 90%, 65%, 0.9)`
        ctx.fill()

        // Expertise level indicator ring
        if (node.level === 'Expert') {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius * 0.8, 0, Math.PI * 2)
          ctx.strokeStyle = `hsla(${node.hue}, 90%, 70%, 0.6)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Labels
        ctx.font = '7px monospace'
        ctx.fillStyle = 'rgba(203,213,225,0.8)'
        ctx.textAlign = 'center'
        ctx.fillText(node.category, node.x, node.y + node.radius + 10)
        
        ctx.font = '8px sans-serif'
        ctx.fillStyle = 'rgba(248,250,252,0.85)'
        ctx.fillText(node.label, node.x, node.y + node.radius + 20)
        
        // Years of experience
        ctx.font = '6px monospace'
        ctx.fillStyle = 'rgba(148,163,184,0.7)'
        ctx.fillText(`${node.years}y`, node.x, node.y + node.radius + 28)
        
        ctx.textAlign = 'left'
      })
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      drawGrid(time)
      drawHudFrame(time)
      drawConnections()
      drawPulses()
      drawNodes(time)
      animationId = window.requestAnimationFrame(animate)
    }

    resize()
    animate(0)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Interactive skills visualization showing 19 professional skills across AI/ML, Technical, Cloud, Data, Research, and Operations categories with expertise levels and years of experience"
      className="h-full w-full"
    />
  )
}
