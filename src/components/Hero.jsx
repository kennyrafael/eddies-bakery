import { useEffect, useState } from 'react'
import EmberParticles from './EmberParticles'
import logo from '../assets/logo.png'
import { whatsappLink } from '../data/content'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-void px-6">
      {/* fundo com glow radial fixo + leve parallax */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 60%, rgba(163,28,28,0.16), transparent 70%)',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <EmberParticles density={32} className="opacity-70" />

      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <img
          src={logo}
          alt="Eddie's Bakery — Artisanal Cookies"
          className="w-[280px] max-w-[80vw] drop-shadow-[0_0_35px_rgba(163,28,28,0.35)] sm:w-[420px] md:w-[520px]"
        />

        <p className="mt-4 max-w-md text-balance font-body text-base text-steel sm:text-lg">
          Cookies artesanais forjados no fogo, feitos pra quem gosta das coisas com atitude.
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 inline-flex items-center gap-3 rounded-sm border-2 border-eddie bg-eddie/10 px-8 py-4 font-display text-sm font-bold tracking-wide text-eddie-bright transition-colors duration-300 hover:bg-eddie hover:text-void animate-pulseGlow"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.84 14.08c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.17 1.04-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.73-.85.93-1.15.2-.3.4-.24.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
          </svg>
          Peça pelo WhatsApp
        </a>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-steel-dark text-steel transition-colors hover:border-eddie hover:text-eddie-bright"
      >
        <svg className="h-4 w-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
