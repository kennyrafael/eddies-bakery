import { products, IFOOD_URL } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import OrderButton from './OrderButtons'
import cookiesSettled from '../assets/cookies-settled.png'

const ACCENTS = [
  { ring: 'from-blood-dark via-blood to-ember/40', border: 'hover:border-blood/60', tag: 'border-blood/50 text-blood-light' },
  { ring: 'from-ember/70 via-ember to-spark/30', border: 'hover:border-ember/60', tag: 'border-ember/50 text-ember-bright' },
  { ring: 'from-eddie-bright/60 via-eddie to-ember/30', border: 'hover:border-eddie/60', tag: 'border-eddie/50 text-eddie-bright' },
  { ring: 'from-spark/70 via-spark to-blood/30', border: 'hover:border-spark/60', tag: 'border-spark/50 text-spark-bright' },
]

function ProductCard({ product, index }) {
  const [ref, isVisible] = useReveal(0.2)
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-sm border border-steel-dark/40 bg-void-raised transition-all duration-500 ${accent.border} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${(index % 3) * 80}ms` : '0ms' }}
    >
      {/* placeholder visual — trocar por foto real do produto quando disponível */}
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-void-soft to-void overflow-hidden">
        <div
          aria-hidden="true"
          className={`h-24 w-24 rounded-full bg-gradient-to-br ${accent.ring} shadow-[0_0_40px_rgba(224,138,44,0.2)] transition-transform duration-500 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
        {product.tag && (
          <span className={`absolute right-3 top-3 rounded-sm border bg-void/80 px-2.5 py-1 font-body text-[11px] font-semibold ${accent.tag}`}>
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-steel-light">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{product.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <OrderButton
            channel="whatsapp"
            variant="outline"
            message={`Olá! Quero pedir o ${product.name} 🔥🍪`}
            className="!px-4 !py-2"
          />
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-steel transition-colors hover:text-ifood-bright"
          >
            ou pelo iFood
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="cardapio" className="relative overflow-hidden bg-void py-24 px-6 sm:py-32">
      <img
        src={cookiesSettled}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 w-72 opacity-[0.08] sm:w-96"
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mx-auto max-w-xl text-center transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="kicker text-blood-light">O cardápio</span>
          <h2 className="mt-3 text-3xl font-bold text-steel-light sm:text-4xl">
            Seis receitas, <span className="text-gradient-blood">forjadas com cuidado</span>
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
