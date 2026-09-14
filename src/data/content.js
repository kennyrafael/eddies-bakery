// ============================================================
// CONTEÚDO CENTRAL — edite aqui para trocar textos, produtos,
// WhatsApp, Instagram e depoimentos sem mexer nos componentes.
// ============================================================

// TODO: trocar pelo número real, formato internacional sem espaços/símbolos
export const WHATSAPP_NUMBER = '5511999999999'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e quero fazer um pedido 🔥🍪'
export const whatsappLink = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

// TODO: trocar pelo @ real do Instagram
export const INSTAGRAM_HANDLE = '@eddiesbakery'
export const INSTAGRAM_URL = 'https://instagram.com/eddiesbakery'

export const products = [
  {
    id: 'forjado-classico',
    name: 'Forjado Clássico',
    description: 'Chocolate meio-amargo derretido no centro, massa amanteigada e uma pitada de flor de sal.',
    tag: 'Mais pedido',
  },
  {
    id: 'brasa-doce-leite',
    name: 'Brasa de Doce de Leite',
    description: 'Recheio cremoso de doce de leite envolto numa massa levemente crocante nas bordas.',
    tag: null,
  },
  {
    id: 'martelo-nozes',
    name: 'Martelo de Nozes',
    description: 'Nozes tostadas, caramelo e um toque de canela. Pesado no sabor, leve na textura.',
    tag: null,
  },
  {
    id: 'red-velvet-obscuro',
    name: 'Red Velvet Obscuro',
    description: 'Cacau, cream cheese e um vermelho profundo que remonta à nossa própria identidade.',
    tag: 'Edição limitada',
  },
  {
    id: 'aco-pistache',
    name: 'Aço & Pistache',
    description: 'Pistache moído, chocolate branco e uma base amanteigada equilibrada.',
    tag: null,
  },
  {
    id: 'trovao-amendoim',
    name: 'Trovão de Amendoim',
    description: 'Pasta de amendoim, gotas de chocolate ao leite e crocância em cada mordida.',
    tag: null,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Marina Costa',
    quote: 'Nunca vi uma marca de cookies com essa personalidade. E o sabor acompanha a atitude — o Forjado Clássico é surreal.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rafael Souza',
    quote: 'Pedi pelo WhatsApp em cinco minutos e chegou certinho. O Martelo de Nozes é agora meu favorito absoluto.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juliana Prado',
    quote: 'Visual pesado, sabor impecável. Dei de presente pro meu marido que é fã de Iron Maiden e ele amou o conceito.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Thiago Almeida',
    quote: 'O Red Velvet Obscuro é insano. Textura perfeita, nem muito mole nem muito duro. Virei cliente fixo.',
    rating: 5,
  },
]

export const howToOrderSteps = [
  {
    step: '01',
    title: 'Escolha seus favoritos',
    description: 'Navegue pelo cardápio aqui no site ou dê uma olhada nas novidades do nosso Instagram.',
  },
  {
    step: '02',
    title: 'Chame no WhatsApp',
    description: 'Clique em qualquer botão de pedido e cai direto na nossa conversa, sem cadastro.',
  },
  {
    step: '03',
    title: 'Combine e receba',
    description: 'Confirmamos quantidade, forma de entrega e pagamento — simples assim.',
  },
]
