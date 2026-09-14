# Eddie's Bakery — Landing Page

Landing page em React + Vite + Tailwind CSS para a Eddie's Bakery, com tema
inspirado em heavy metal (Iron Maiden) aplicado a uma marca de cookies
artesanais.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview   # pra conferir a build localmente
```

## O que trocar antes de publicar

Tudo que é placeholder está centralizado em **`src/data/content.js`**:

- `WHATSAPP_NUMBER` — número real no formato internacional (ex: `5511999999999`)
- `INSTAGRAM_HANDLE` e `INSTAGRAM_URL` — usuário real do Instagram
- `products` — lista de cookies (nome, descrição, tag opcional)
- `testimonials` — depoimentos reais de clientes
- `howToOrderSteps` — se o fluxo de pedido mudar

### Fotos dos produtos

Os cards de produto em `src/components/Products.jsx` usam um placeholder
visual (círculo com gradiente). Para trocar por fotos reais:

1. Coloque as imagens em `src/assets/products/`
2. Importe cada imagem no `content.js` e adicione um campo `image` a cada
   produto
3. No `ProductCard` (dentro de `Products.jsx`), troque a `div` do placeholder
   por uma tag `<img>` com a imagem do produto

## Estrutura

```
src/
  components/       # cada seção da landing page é um componente
  data/content.js    # todo o conteúdo textual e links (edite aqui)
  hooks/useReveal.js # hook de scroll-reveal (Intersection Observer)
  assets/            # logo e outras imagens
```

## Paleta (Tailwind config)

- `void` — pretos (fundo)
- `blood` — vermelho do logo
- `steel` — prata/cinza (textos, bordas)
- `ember` — âmbar/fogo (detalhes, estrelas)
- `eddie` — verde (CTAs, accent — referência ao mascote clássico do Iron Maiden)

## Notas de acessibilidade

- Animações respeitam `prefers-reduced-motion`
- Foco visível customizado (`outline` verde) em todos os elementos
  interativos
- Contraste de texto testado para fundo escuro
