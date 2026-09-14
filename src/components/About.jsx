import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="sobre" className="relative overflow-hidden bg-void-soft py-24 px-6 sm:py-32">
      {/* brasa pulsante decorativa */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/10 blur-3xl animate-flicker"
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span className="font-display text-sm font-semibold tracking-wide text-blood-light">
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
    </section>
  )
}
