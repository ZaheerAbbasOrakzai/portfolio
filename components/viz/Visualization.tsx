// @ts-nocheck
"use client"
import React, { Suspense, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Canvas, useFrame } from '@react-three/fiber'

// Dynamically load OrbitControls on client only to avoid server-side import of drei
const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => mod.OrbitControls), { ssr: false })

const Node: React.FC<{ pos: [number, number, number]; color: string }> = ({ pos, color }) => {
  const ref = useRef<any>(null)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2
      ref.current.position.y = pos[1] + Math.sin(state.clock.elapsedTime + pos[0]) * 0.18
    }
  })

  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[0.36, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.2} roughness={0.4} />
    </mesh>
  )
}

const Links: React.FC<{ points: [number, number, number][] }> = ({ points }) => {
  return (
    <>
      {points.map((p, i) => {
        const next = points[(i + 1) % points.length]
        const positions = new Float32Array([p[0], p[1], p[2], next[0], next[1], next[2]])
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" count={2} array={positions} itemSize={3} />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#183041" linewidth={2} />
          </line>
        )
      })}
    </>
  )
}

const Visualization: React.FC = () => {
  const nodes: [number, number, number][] = [
    [-1.2, 0.0, 0.0],
    [0.0, 0.25, 0.8],
    [1.2, -0.15, -0.6],
    [-0.6, 0.35, 1.2],
    [0.9, -0.2, 1.4]
  ]

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {nodes.map((p, i) => (
            <Node key={i} pos={p} color={i % 2 === 0 ? '#00e5ff' : '#7c3aed'} />
          ))}
          <Links points={nodes} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  )
}

export default Visualization
