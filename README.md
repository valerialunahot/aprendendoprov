# Aprendendo com Provérbios — Landing Page

LP de alta conversão do Devocional Infantil Cristão da Lina Criativa.
Stack: Vite + React 18 + Tailwind CSS 3.

## Rodar e buildar
```bash
npm install
npm run dev       # desenvolvimento
npm run build     # gera /dist para produção
npm run preview   # testa o build
```

## Deploy na Vercel
1. Suba esta pasta num repositório no GitHub.
2. Em vercel.com → Add New → Project → importe o repositório.
3. A Vercel detecta Vite sozinha (Build: `npm run build`, Output: `dist`). É só clicar em Deploy.

## Onde editar (sem mexer no layout)
Tudo fica em `src/data/content.js`:
- `CHECKOUT` — os 3 links Wiapy (já preenchidos: básico, premium, downsell)
- `PRICES` — todos os preços e valores riscados de ancoragem
- `IMG` — todas as imagens (hero, kit, galeria, feedbacks, Lina)
- `VSL_VIMEO_ID` — id do vídeo de depoimento no Vimeo
- `HEADLINE` — a headline do Hero (com as palavras destacadas)
- `FEATURES`, `KIT_ITEMS`, `BONUS`, `BASICO_ITEMS`, `BASICO_EXCLUSOES`, `PREMIUM_ITEMS`, `FAQ`

## Meta Pixel
No `index.html`, troque `SEU_PIXEL_ID_AQUI` (2 lugares) pelo seu Pixel ID.
O botão de compra já dispara `InitiateCheckout` antes de ir pro checkout (ver `src/utils.js`).

## Fluxo de conversão
- Todos os CTAs intermediários rolam até a seção de planos (`#oferta`).
- O botão do plano básico abre o popup de downsell (R$19,90) antes do checkout.
- Os botões VIP e do CTA final vão direto pro checkout do kit completo (Wiapy).
- Exit-intent no desktop abre o downsell ao tentar sair.
- Player de depoimento (Vimeo) sem branding, com capa da Lucia e CTA no fim.

## Estrutura
```
src/
  App.jsx                  # a página inteira (todas as seções)
  components/
    VslPlayer.jsx          # player estilo VTurb com Vimeo
    DownsellPopup.jsx      # popup de downsell
  hooks/
    useCountdown.js        # timer 24h (localStorage, sincronizado)
    useReveal.js           # animação de entrada das seções
  data/content.js          # TODO o conteúdo editável
  utils.js                 # scroll âncora + tracking de checkout
  index.css                # Tailwind + animações
```

## Observações
- Imagens hospedadas no imgur. Se trocar alguma, use o formato direto `i.imgur.com/<id>.<ext>`.
- A simulação de renda (R$25 a R$40) e os valores riscados são ajustáveis em `content.js` / `RendaExtra`.
