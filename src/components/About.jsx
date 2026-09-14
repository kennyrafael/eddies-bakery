import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import cookiesPile from '../assets/cookies-pile.png'

export default function About() {
  const [ref, isVisible] = useReveal()
  const parallaxRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const node = parallaxRef.current
          if (node) {
            const rect = node.getBoundingClientRect()
            const distanceFromCenter = window.innerHeight / 2 - (rect.top + rect.height / 2)
            setOffset(distanceFromCenter * 0.15)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="sobre" className="relative overflow-hidden bg-void-soft py-24 px-6 sm:py-32">
      {/* brasa pulsante decorativa */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-ember/20 to-spark/10 blur-3xl animate-flicker"
      />

      <div
        ref={ref}
        className={`relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 transition-all duration-700 lg:grid-cols-[3fr_2fr] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="text-center lg:text-left">
          <span className="kicker text-blood-light">
            A forja
          </span>
          <h2 className="mt-3 text-3xl font-bold text-steel-light sm:text-4xl">
            Cookies não deveriam ser <span className="text-gradient-blood">delicados</span>
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-steel sm:text-lg">
            A gente cresceu ouvindo que doceria tem que ser clara, suave, delicada. Discordamos.
            Cada fornada passa por calor de verdade — manteiga dourada, chocolate derretido,
            bordas tostadas — e sai com a mesma atitude que a gente coloca no som que ouve
            enquanto assa. Eddie não é só um personagem na nossa logo: é o espírito de fazer
            as coisas com intensidade, sem pedir desculpas por isso.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-steel sm:text-lg">
            O resultado são cookies pesados no sabor e generosos no recheio — porque para nós,
            artesanal significa cuidado de verdade, não estética de vitrine.
          </p>
        </div>

        <div ref={parallaxRef} className="relative mx-auto hidden max-w-xs lg:block">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-gradient-to-br from-ember/20 via-blood/15 to-spark/15 blur-3xl"
          />
          <img
            src={cookiesPile}
            alt="Pilha de cookies artesanais recém-assados"
            className="relative w-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)] will-change-transform"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
      </div>
    </section>
  )
}
