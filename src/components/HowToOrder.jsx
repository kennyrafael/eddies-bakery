import { howToOrderSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import OrderButton from './OrderButtons'

const CHANNEL_CARDS = [
  {
    id: 'whatsapp',
    accent: 'border-eddie/50 hover:border-eddie',
    glow: 'bg-eddie/10',
    title: 'Prefere combinar direto?',
    description: 'Fale com a gente pelo WhatsApp: tire dúvidas, monte uma caixa mista e combine a entrega.',
  },
  {
    id: 'ifood',
    accent: 'border-ifood/50 hover:border-ifood',
    glow: 'bg-ifood/10',
    title: 'Prefere pedir pelo app?',
    description: 'Peça pelo iFood, pague por lá e acompanhe sua entrega em tempo real, do jeito que já conhece.',
  },
]

export default function HowToOrder() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="relative bg-void-soft py-24 px-6 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="text-center">
          <span className="kicker text-blood-light">Como pedir</span>
          <h2 className="mt-3 text-3xl font-bold text-steel-light sm:text-4xl">
            Dois caminhos, <span className="text-gradient-blood">sem complicação</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-steel sm:text-base">
            Escolhe o que for mais fácil pra ti: conversa direto com a gente ou peça pelo app que
            já usas no dia a dia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CHANNEL_CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative flex flex-col items-center overflow-hidden rounded-sm border bg-void-raised p-8 text-center transition-colors duration-300 ${card.accent}`}
            >
              <div aria-hidden="true" className={`absolute -top-10 h-32 w-32 rounded-full blur-3xl ${card.glow}`} />
              <h3 className="relative font-display text-xl text-steel-light">{card.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-steel">{card.description}</p>
              <OrderButton channel={card.id} variant={'outline'} size="lg" className="relative mt-6" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {howToOrderSteps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="font-display text-4xl text-steel-dark">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg text-steel-light">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
