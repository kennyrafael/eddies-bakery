import EmberParticles from './EmberParticles'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function InstagramCTA() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="relative overflow-hidden bg-void-soft py-24 px-6 sm:py-28">
      <EmberParticles density={16} className="opacity-40" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-xl text-center transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-steel-light sm:text-4xl">
          Acompanhe as fornadas em tempo real
        </h2>
        <p className="mt-4 text-base leading-relaxed text-steel">
          Bastidores, novidades do cardápio e sorteios saem primeiro no Instagram.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-sm border-2 border-steel-dark px-8 py-4 font-display text-sm font-bold tracking-wide text-steel-light transition-colors duration-300 hover:border-blood hover:text-blood-light"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.25.06 2.1.25 2.84.54.77.3 1.42.7 2.07 1.35.65.65 1.05 1.3 1.35 2.07.29.74.48 1.59.54 2.84.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.25-.25 2.1-.54 2.84-.3.77-.7 1.42-1.35 2.07-.65.65-1.3 1.05-2.07 1.35-.74.29-1.59.48-2.84.54-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.25-.06-2.1-.25-2.84-.54-.77-.3-1.42-.7-2.07-1.35-.65-.65-1.05-1.3-1.35-2.07-.29-.74-.48-1.59-.54-2.84C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.25.25-2.1.54-2.84.3-.77.7-1.42 1.35-2.07.65-.65 1.3-1.05 2.07-1.35.74-.29 1.59-.48 2.84-.54C8.4 2.2 8.8 2.2 12 2.2zm0 1.98c-3.14 0-3.52 0-4.76.07-1.02.05-1.57.21-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.8 1.2-.14.37-.3.92-.35 1.94-.06 1.24-.07 1.62-.07 4.76s0 3.52.07 4.76c.05 1.02.21 1.57.35 1.94.2.49.43.84.8 1.2.36.37.71.6 1.2.8.37.14.92.3 1.94.35 1.24.06 1.62.07 4.76.07s3.52 0 4.76-.07c1.02-.05 1.57-.21 1.94-.35.49-.2.84-.43 1.2-.8.37-.36.6-.71.8-1.2.14-.37.3-.92.35-1.94.06-1.24.07-1.62.07-4.76s0-3.52-.07-4.76c-.05-1.02-.21-1.57-.35-1.94-.2-.49-.43-.84-.8-1.2a3.31 3.31 0 00-1.2-.8c-.37-.14-.92-.3-1.94-.35-1.24-.06-1.62-.07-4.76-.07zM12 7.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.98a2.92 2.92 0 100 5.84 2.92 2.92 0 000-5.84zm6.24-2.13a1.14 1.14 0 11-2.28 0 1.14 1.14 0 012.28 0z" />
          </svg>
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  )
}
