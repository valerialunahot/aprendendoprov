// =============================================================
//  CONTEÚDO CENTRAL DA LP — edite tudo por aqui
// =============================================================

export const CHECKOUT = {
  basico: 'https://pay.wiapy.com/VWu2HTeqarz',                 // R$14,90
  premium: 'https://pay.wiapy.com/6a34686ebc58d193b96324bd',   // R$24,90
  downsell: 'https://pay.wiapy.com/DQNCEeCzl1',                // R$19,90
}

export const PRICES = {
  basicoDe: '47,00', basicoPor: '14,90',
  premiumDe: '97,00', premiumPor: '24,90',
  downsellDe: '24,90', downsellPor: '19,90',
}

export const VSL_VIMEO_ID = '1202696010'

export const IMG = {
  hero: 'https://i.imgur.com/VlQCrOl.png',        // foto mãe + filho (Arthur)
  personalizacao: 'https://i.imgur.com/VlQCrOl.png',
  kit: 'https://i.imgur.com/V2gfLE1.png',
  lina: 'https://i.imgur.com/VvnRQXS.jpg',
  galeria: [
    { src: 'https://i.imgur.com/eFcPYF4.png', legenda: 'A historinha do dia com a turminha' },
    { src: 'https://i.imgur.com/l4yZFzX.png', legenda: 'O versículo de Provérbios pra fixar' },
    { src: 'https://i.imgur.com/LkfxnFI.png', legenda: 'O espaço pra criança refletir e responder' },
    { src: 'https://i.imgur.com/j9EDmfw.png', legenda: 'A página pra desenhar o que aprendeu' },
    { src: 'https://i.imgur.com/gNPtcht.png', legenda: 'O bolsinho porta-devocional' },
  ],
  feedbacks: [
    'https://i.imgur.com/NJQpYyN.png',
    'https://i.imgur.com/W1uqEou.png',
    'https://i.imgur.com/KzZuT3c.jpg',
    'https://i.imgur.com/McYiSPn.jpg',
    'https://i.imgur.com/Vjgeg1D.jpg',
  ],
}

// Headline do Hero (script = Caveat dourada · resto = Playfair sem caixa alta)
export const HEADLINE = {
  script: '+31 dinâmicas cristãs',
  pre: 'pra tirar seu filho da tela e ensinar ele a ',
  italic: 'amar a Deus',
  pos: '.',
}

export const FEATURES = [
  { emoji: '🕊️', border: 'border-sapphire', ring: 'border-sky bg-sky-soft', title: 'A criança longe da tela sem briga', text: 'Uma dinâmica gostosa pra ela trocar parte do tempo de celular por algo que ensina valor e diverte de verdade.' },
  { emoji: '👨‍👩‍👧', border: 'border-meadow-deep', ring: 'border-meadow bg-meadow-soft', title: 'Um momento de vocês dois', text: 'Um ritual pra fazer junto todo dia, que aproxima você do seu filho e planta a Palavra no coraçãozinho dele.' },
  { emoji: '🖨️', border: 'border-gold-deep', ring: 'border-gold-soft bg-gold-soft/40', title: 'Imprime quantas vezes quiser', text: 'É arquivo digital. Baixa uma vez e imprime sempre que precisar, pra um filho, pros sobrinhos, pra turma da escolinha.' },
  { emoji: '💰', border: 'border-blush', ring: 'border-blush bg-blush/20', title: 'E ainda pode virar renda', text: 'Se você trabalha com papelaria ou sonha em começar, esse material você imprime, monta e vende pra outras mães.' },
]

export const KIT_ITEMS = [
  'Devocional "Aprendendo com Provérbios" completo (31 dinâmicas)',
  'Capa personalizável com o nome da criança',
  'Certificado de conclusão pra celebrar cada etapa',
  'Caneca "Caminhando com Deus todos os dias"',
  'Bolsinho porta-devocional',
  'Mockups prontos pra divulgar caso queira vender',
  'Dicas de configuração pra impressão sair perfeita',
]

export const BONUS = [
  { img: 'https://i.imgur.com/NouAIOz.png', tag: 'Bônus 1', title: 'Caderno de Atividades Bíblicas', valor: '29,90', text: '40 atividades inspiradas na Bíblia, com labirintos, joguinhos e arte de caneca. A criança brinca e aprende sem perceber.' },
  { img: 'https://i.imgur.com/wtSvuRi.png', tag: 'Bônus 2', title: 'Pack Colorindo com Jesus', valor: '39,90', text: 'Livro de colorir com 45 desenhos, cards dos Dez Mandamentos, estojo, cards do Fruto do Espírito e o mural das conquistas.' },
  { img: 'https://i.imgur.com/4MRXzih.png', tag: 'Bônus 3', title: 'Versículos para Colorir', valor: '29,90', text: 'Livro A5 com 50 desenhos, marca-página e arte de caneca, naquele estilo fofo que as crianças amam pintar.' },
  { img: '', tag: 'Bônus 4', title: 'Presente surpresa 🎁', valor: 'secreto', text: 'Tem mais um presente guardado dentro do kit. A gente deixa como surpresa pra você descobrir na hora de baixar. Vale muito a pena 🥹' },
]

// Ancoragem de valor (soma riscada antes dos planos)
export const ANCORAGEM = [
  { item: 'Devocional Aprendendo com Provérbios', valor: '47,00' },
  { item: 'Caderno de Atividades Bíblicas', valor: '29,90' },
  { item: 'Pack Colorindo com Jesus', valor: '39,90' },
  { item: 'Versículos para Colorir', valor: '29,90' },
  { item: 'Caneca, bolsinho e certificado', valor: '20,00' },
]
export const ANCORAGEM_TOTAL = '166,70'

// Como você recebe (3 passos)
export const PASSOS = [
  { n: '1', cor: 'bg-sapphire text-white', title: 'Preencha seus dados', text: 'Nome, e-mail e WhatsApp pra gente enviar o material certinho.' },
  { n: '2', cor: 'bg-meadow-deep text-white', title: 'Pague no Pix', text: 'Pagamento rápido e seguro, aprovado na hora.' },
  { n: '3', cor: 'bg-gold text-wine', title: 'Receba na hora', text: 'O material chega no seu e-mail e WhatsApp logo após a compra.' },
]

export const BASICO_ITEMS = [
  'Devocional "Aprendendo com Provérbios" (31 dinâmicas)',
  'Capa personalizável com o nome da criança',
]
export const BASICO_EXCLUSOES = [
  'Os 4 bônus (mais de 135 desenhos + 40 atividades)',
  'A caneca "Caminhando com Deus"',
  'O certificado de conclusão',
  'O bolsinho porta-devocional',
  'Os mockups e dicas pra vender',
]

export const PREMIUM_ITEMS = [
  'Devocional completo "Aprendendo com Provérbios" (31 dinâmicas)',
  'Capa personalizável com o nome da criança',
  'Certificado de conclusão',
  'Caneca "Caminhando com Deus todos os dias"',
  'Bolsinho porta-devocional',
  '<b>Bônus 1:</b> Caderno de Atividades Bíblicas (40 atividades)',
  '<b>Bônus 2:</b> Pack Colorindo com Jesus (45 desenhos + Dez Mandamentos + estojo + Fruto do Espírito + mural)',
  '<b>Bônus 3:</b> Versículos para Colorir (50 desenhos + marca-página + caneca)',
  '<b>Bônus 4:</b> Presente surpresa 🎁',
  'Mockups pra divulgar e dicas de impressão',
]

export const FAQ = [
  { q: 'Vou receber um produto físico em casa?', a: 'Não. É um arquivo digital. Você recebe o acesso por e-mail e WhatsApp logo após a compra, baixa no celular ou no computador e imprime quantas vezes quiser.' },
  { q: 'Preciso saber mexer com design ou ter algum programa?', a: 'Não. Vem tudo pronto. Você só baixa, manda imprimir e monta. As dicas de impressão acompanham o kit.' },
  { q: 'Consigo imprimir em casa mesmo?', a: 'Sim. Dá pra imprimir na sua impressora de casa ou levar numa gráfica ou papelaria.' },
  { q: 'Posso imprimir e vender os produtos montados?', a: 'Sim. Você compra uma vez e pode imprimir e vender quantas vezes quiser.' },
  { q: 'Quanto tempo demora pra eu receber o acesso?', a: 'É na hora. Assim que o pagamento é confirmado, o material chega no seu e-mail e no seu WhatsApp.' },
  { q: 'Serve pra qual idade?', a: 'Foi pensado pra crianças de 4 a 10 anos, com linguagem simples e historinhas que prendem a atenção.' },
]
