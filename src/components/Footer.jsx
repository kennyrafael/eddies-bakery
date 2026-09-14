import logo from '../assets/logo.png'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, IFOOD_URL, whatsappLink } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-steel-dark/30 bg-void px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <img src={logo} alt="Eddie's Bakery" className="h-14 w-auto opacity-90" />

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex gap-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-steel transition-colors hover:text-eddie-bright"
            >
              WhatsApp
            </a>
            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-steel transition-colors hover:text-ifood-bright"
            >
              iFood
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-steel transition-colors hover:text-blood-light"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
          <p className="text-xs text-steel-dark">
            © {new Date().getFullYear()} Eddie's Bakery. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
