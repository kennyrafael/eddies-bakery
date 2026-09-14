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
- `IFOOD_URL` — link real da loja no iFood
- `INSTAGRAM_HANDLE` e `INSTAGRAM_URL` — usuário real do Instagram
- `products` — lista de cookies (nome, descrição, tag opcional)
- `testimonials` — depoimentos reais de clientes
- `howToOrderSteps` — se o fluxo de pedido mudar

O pedido agora tem dois canais lado a lado (WhatsApp e iFood), montados pelo
componente reutilizável `src/components/OrderButtons.jsx` e usados no Hero,
em "Como pedir", no cardápio, no botão flutuante (`FloatingOrderButtons.jsx`)
e no rodapé.

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
- `ember` — âmbar/fogo (detalhes, estrelas, iFood-adjacent accent)
- `eddie` — verde (CTA do WhatsApp)
- `spark` — roxo elétrico (detalhes extra, glows)
- `ifood` — vermelho/coral (CTA do iFood)

## Tipografia

- Display (`font-display`): **Anton** — impacto tipo pôster, sem serifa
- Eyebrow/rótulos (`font-accent`, classe `.kicker`): **Oswald**
- Texto corrido (`font-body`): **Work Sans**

## Nota sobre assets

O arquivo `eddie-parallax.png` (ilustração do "Eddie" dos Iron Maiden) foi
deixado fora do redesign — é um personagem de marca registrada de terceiros,
e usá-lo publicamente no site é um risco de direitos autorais/marca. O resto
da identidade "heavy metal" (tipografia, paleta, fogo) é original da marca e
não tem esse problema.

## Notas de acessibilidade

- Animações respeitam `prefers-reduced-motion`
- Foco visível customizado (`outline` verde) em todos os elementos
  interativos
- Contraste de texto testado para fundo escuro
