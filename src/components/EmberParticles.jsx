import { useEffect, useRef } from 'react'

// Faíscas sutis subindo em canvas — leve, sem dependências externas.
// Respeita prefers-reduced-motion (não anima nesse caso).
export default function EmberParticles({ density = 28, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    let width, height, particles, animationId

    const colors = ['#E08A2C', '#F5A623', '#C4302F']

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    function makeParticle() {
      return {
        x: Math.random() * width,
        y: height + Math.random() * 40,
        r: Math.random() * 1.8 + 0.6,
        speed: Math.random() * 0.6 + 0.25,
        drift: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        flicker: Math.random() * Math.PI * 2,
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: density }, makeParticle)
    }

    function tick() {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speed
        p.x += p.drift
        p.flicker += 0.05
        const flickerOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.flicker))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = flickerOpacity
        ctx.fill()

        if (p.y < -10) Object.assign(p, makeParticle(), { y: height + 10 })
      }
      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(tick)
    }

    init()
    tick()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
