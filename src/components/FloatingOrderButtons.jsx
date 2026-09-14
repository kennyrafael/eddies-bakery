import { useState } from 'react'
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 8h12l1.2 11.2a2 2 0 0 1-2 2.3H6.8a2 2 0 0 1-2-2.3L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
      <path d="M9 12h6" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export default function FloatingOrderButtons() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <a
          href={IFOOD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir pelo iFood"
          className="flex items-center gap-2 rounded-full bg-ifood py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 hover:bg-ifood-bright"
        >
          <DeliveryBagIcon className="h-5 w-5" />
          iFood
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir pelo WhatsApp"
          className="flex items-center gap-2 rounded-full bg-eddie py-3 pl-4 pr-5 text-sm font-semibold text-void shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 hover:bg-eddie-bright"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Fechar opções de pedido' : 'Abrir opções de pedido'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blood via-ember to-spark text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <span className="font-display text-xl">🍪</span>}
      </button>
    </div>
  )
}
