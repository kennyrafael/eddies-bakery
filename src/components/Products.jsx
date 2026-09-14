import { products, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ProductCard({ product, index }) {
  const [ref, isVisible] = useReveal(0.2)

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-sm border border-steel-dark/40 bg-void-raised transition-all duration-500 hover:border-blood/60 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${(index % 3) * 80}ms` : '0ms' }}
    >
      {/* placeholder visual — trocar por foto real do produto */}
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-void-soft to-void overflow-hidden">
        <div
          aria-hidden="true"
          className="h-24 w-24 rounded-full bg-gradient-to-br from-blood-dark via-blood to-ember/40 shadow-[0_0_40px_rgba(163,28,28,0.25)] transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
        {product.tag && (
          <span className="absolute right-3 top-3 rounded-sm border border-eddie/50 bg-void/80 px-2.5 py-1 font-body text-[11px] font-semibold text-eddie-bright">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-steel-light">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{product.description}</p>
        <a
          href={whatsappLink(`Olá! Quero pedir o ${product.name} 🔥🍪`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blood-light transition-colors hover:text-eddie-bright"
        >
          Pedir agora
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="cardapio" className="relative bg-void py-24 px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mx-auto max-w-xl text-center transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="font-display text-sm font-semibold tracking-wide text-blood-light">
            O cardápio
          </span>
          <h2 className="mt-3 text-3xl font-bold text-steel-light sm:text-4xl">
            Seis receitas, forjadas com cuidado
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-steel-dark">
          * Fotos ilustrativas em breve — cardápio sujeito a variações por disponibilidade.
        </p>
      </div>
    </section>
  )
}
