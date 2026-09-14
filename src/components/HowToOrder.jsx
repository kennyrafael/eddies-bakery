import { howToOrderSteps, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function HowToOrder() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="relative bg-void-soft py-24 px-6 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="text-center">
          <span className="font-display text-sm font-semibold tracking-wide text-blood-light">
            Como pedir
          </span>
          <h2 className="mt-3 text-3xl font-bold text-steel-light sm:text-4xl">
            Do pedido à porta, sem complicação
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {howToOrderSteps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="font-display text-4xl font-black text-steel-dark">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-steel-light">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm bg-eddie px-8 py-4 font-display text-sm font-bold tracking-wide text-void transition-colors duration-300 hover:bg-eddie-bright"
          >
            Começar meu pedido
          </a>
        </div>
      </div>
    </section>
  )
}
