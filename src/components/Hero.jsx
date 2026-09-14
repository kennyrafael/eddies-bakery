import { useEffect, useState } from 'react'
import EmberParticles from './EmberParticles'
import logo from '../assets/logo.png'
import { OrderButtonPair } from './OrderButtons'

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
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-void px-6 py-16">
      {/* fundo com glow radial colorido + leve parallax */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 55%, rgba(163,28,28,0.18), transparent 70%), radial-gradient(ellipse 45% 35% at 20% 80%, rgba(224,138,44,0.12), transparent 70%), radial-gradient(ellipse 40% 35% at 80% 20%, rgba(178,75,243,0.10), transparent 70%)',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <EmberParticles density={32} className="opacity-70" />

      <div
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <img
          src={logo}
          alt="Eddie's Bakery — Artisanal Cookies"
          className="w-[320px] max-w-[85vw] drop-shadow-[0_0_35px_rgba(163,28,28,0.35)] sm:w-[460px] md:w-[560px]"
        />

        <p className="mt-4 max-w-md text-balance font-body text-base text-steel sm:text-lg">
          Cookies artesanais forjados no fogo, feitos pra quem gosta das coisas com atitude.
        </p>

        <OrderButtonPair size="lg" className="mt-10" />
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
