import { testimonials } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? 'fill-ember' : 'fill-steel-dark'}`}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ item, index }) {
  const [ref, isVisible] = useReveal(0.2)

  return (
    <blockquote
      ref={ref}
      className={`flex flex-col rounded-sm border border-steel-dark/40 bg-void-raised p-6 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${(index % 2) * 100}ms` : '0ms' }}
    >
      <Stars rating={item.rating} />
      <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-steel-light">
        “{item.quote}”
      </p>
      <cite className="mt-5 font-display text-sm font-semibold not-italic text-blood-light">
        {item.name}
      </cite>
    </blockquote>
  )
}

export default function Testimonials() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section className="relative bg-void py-24 px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`mx-auto max-w-xl text-center transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="kicker text-blood-light">
            Quem já provou
          </span>
          <h2 className="mt-3 text-3xl font-bold text-steel-light sm:text-4xl">
            Não é só a <span className="text-gradient-blood">gente que fala</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
