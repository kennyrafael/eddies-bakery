import { whatsappLink, IFOOD_URL } from '../data/content'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.84 14.08c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.17 1.04-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.73-.85.93-1.15.2-.3.4-.24.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
    </svg>
  )
}

function DeliveryBagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <title>iFood icon</title>
      <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"/>
    </svg>
  )
}

const CHANNELS = {
  whatsapp: {
    label: 'Peça pelo WhatsApp',
    shortLabel: 'WhatsApp',
    href: whatsappLink(),
    Icon: WhatsAppIcon,
    solid: 'bg-eddie text-void hover:bg-eddie-bright',
    outline: 'border-eddie text-eddie-bright hover:bg-eddie hover:text-void',
    ring: 'focus-visible:outline-eddie-bright',
  },
  ifood: {
    label: 'Peça pelo iFood',
    shortLabel: 'iFood',
    href: IFOOD_URL,
    Icon: DeliveryBagIcon,
    solid: 'bg-ifood text-white hover:bg-ifood-bright',
    outline: 'border-ifood text-ifood-bright hover:bg-ifood hover:text-white',
    ring: 'focus-visible:outline-ifood-bright',
  },
}

function OrderButton({ channel, variant = 'solid', message, size = 'md', className = '' }) {
  const config = CHANNELS[channel]
  const href = channel === 'whatsapp' && message ? whatsappLink(message) : config.href
  const sizeClasses = size === 'lg' ? 'px-8 py-4 text-sm' : 'px-6 py-3 text-xs'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-sm font-display uppercase tracking-wide transition-colors duration-300 ${sizeClasses} ${
        variant === 'outline' ? `border-2 bg-transparent ${config.outline}` : config.solid
      } ${className}`}
    >
      <config.Icon className="h-5 w-5 shrink-0" />
      {size === 'lg' ? config.label : config.shortLabel}
    </a>
  )
}

// Par de botões lado a lado — usado no Hero, em "Como pedir" e no rodapé
export function OrderButtonPair({ message, size = 'md', className = '' }) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <OrderButton channel="whatsapp" variant="outline" message={message} size={size} />
      <OrderButton channel="ifood" variant="outline" size={size} />
    </div>
  )
}

export default OrderButton
