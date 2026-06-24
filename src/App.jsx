import { useState, useCallback, useEffect, useRef } from 'react'
import useCountdown from './hooks/useCountdown'
import useReveal from './hooks/useReveal'
import { scrollToOferta, goToCheckout } from './utils'
import VslPlayer from './components/VslPlayer'
import DownsellPopup from './components/DownsellPopup'
import {
  CHECKOUT, PRICES, IMG, HEADLINE, FEATURES, KIT_ITEMS, BONUS,
  ANCORAGEM, ANCORAGEM_TOTAL, PASSOS, BASICO_ITEMS, BASICO_EXCLUSOES,
  PREMIUM_ITEMS, FAQ as FAQ_DATA,
} from './data/content'

function Reveal({ as: Tag = 'section', className = '', children }) {
  const [ref, vis] = useReveal()
  return <Tag ref={ref} className={`reveal ${vis ? 'vis' : ''} ${className}`}>{children}</Tag>
}

function GoldBtn({ children, onClick, className = '' }) {
  return <button onClick={onClick || scrollToOferta} className={`btn-gold pulsing-btn ${className}`}>{children}</button>
}

/* ---------- BARRA DE URGÊNCIA ---------- */
function UrgencyBar() {
  const { h, m, s } = useCountdown()
  return (
    <div className="sticky top-0 z-40 w-full bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-wine shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-[10px] font-extrabold uppercase tracking-widest md:text-sm">
        <span>✨ Condição especial de lançamento</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">encerra em</span>
        <span className="rounded-full bg-wine/15 px-2 py-0.5 font-black tabular-nums tracking-normal">{h}:{m}:{s}</span>
      </div>
    </div>
  )
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-sky-soft to-cream px-4 pt-10 pb-10 md:py-20">
      <div aria-hidden className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-meadow/40 mix-blend-multiply blur-3xl opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold-soft/40 mix-blend-multiply blur-3xl opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-soft px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-wine shadow-sm md:text-xs">🔥 Mais de 100 compras nas últimas 24 horas</span>
            <h1 className="mt-4 text-wine drop-shadow-sm">
              <span className="block font-script text-4xl font-bold leading-none text-gold-deep sm:text-5xl md:text-6xl">{HEADLINE.script}</span>
              <span className="mt-2 block font-display text-lg font-bold leading-snug sm:text-2xl md:text-[26px] lg:text-[30px]">
                {HEADLINE.pre}<span className="italic text-sapphire">{HEADLINE.italic}</span>{HEADLINE.pos}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-bark/80 md:mx-0 md:text-base">
              Cada uma das 31 dinâmicas tem uma historinha com a turminha, um versículo de Provérbios e uma atividade pro seu filho fazer. Você baixa, imprime na sua casa e recebe tudo no seu e-mail e WhatsApp.
            </p>
            <div className="mt-7"><GoldBtn className="md:mx-0">👉 Quero começar as 31 dinâmicas com meu filho</GoldBtn></div>
            <div className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-meadow/40 bg-meadow-soft px-4 py-3 text-xs font-bold text-meadow-deep shadow-sm md:text-sm">
              <span>🛡</span> Acesso imediato. Você recebe no e-mail e no WhatsApp logo após a compra
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="mx-auto max-w-[340px] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl md:border-8">
              <img src={IMG.hero} alt="Mãe e filho com o devocional Aprendendo com Provérbios personalizado" fetchpriority="high" decoding="async" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ---------- DEPOIMENTOS ---------- */
function Depoimentos() {
  return (
    <Reveal className="relative overflow-hidden border-y-4 border-white bg-sky-soft px-4 pt-10 pb-12 md:py-20">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-meadow/30 mix-blend-multiply blur-3xl opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-meadow/30 bg-white px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-meadow-deep md:text-xs">💬 Depoimentos reais de mães</span>
          <h2 className="mt-4 font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine drop-shadow-sm md:text-3xl lg:text-4xl">Mães que já imprimiram em casa 💛</h2>
        </div>
        <div className="mx-auto max-w-md text-center">
          <p className="mx-auto max-w-xl font-script text-2xl leading-snug text-sapphire md:text-3xl">Prepara o coração 🥹 veja o que a Lucia falou depois de imprimir tudo em casa.</p>
          <VslPlayer onCtaClick={scrollToOferta} />
        </div>
        <p className="mt-10 text-center text-sm font-semibold text-bark/70 md:text-base">E não para por aí. Olha o que outras mães mandaram depois de baixar e montar 👇</p>
        <div className="no-scrollbar mt-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-2 pb-4 md:gap-6 md:px-4">
          {IMG.feedbacks.map((src, i) => (
            <div key={src} className="w-56 shrink-0 snap-center overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 sm:w-64 md:w-72 md:border-8">
              <img src={src} loading="lazy" decoding="async" className="h-auto w-full object-contain" alt={`Depoimento ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button onClick={scrollToOferta} className="btn-blue pulsing-btn">Quero esse momento com meu filho também ⬇️</button>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- DEMONSTRAÇÃO ---------- */
function Demonstracao() {
  return (
    <Reveal className="bg-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-12">
          <span className="font-script text-2xl text-sapphire md:text-3xl">Veja por dentro 📖</span>
          <h2 className="mx-auto mt-1 max-w-3xl font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine md:text-3xl">Cada dinâmica prende a atenção e ensina um valor de verdade</h2>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-4 md:justify-center md:gap-6 md:px-4">
          {IMG.galeria.map((it) => (
            <figure key={it.src} className="w-[78%] shrink-0 snap-center sm:w-64">
              <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl md:border-8">
                <img src={it.src} loading="lazy" decoding="async" className="aspect-square w-full object-cover" alt={it.legenda} />
              </div>
              <figcaption className="mt-2 px-2 text-sm font-semibold text-bark/80">{it.legenda}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-9 text-center"><GoldBtn>Quero esse devocional em casa</GoldBtn></div>
      </div>
    </Reveal>
  )
}

/* ---------- PERSONALIZAÇÃO ---------- */
function Personalizacao() {
  return (
    <Reveal className="bg-gradient-to-b from-blush/10 to-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="mx-auto max-w-[320px] overflow-hidden rounded-3xl border-4 border-white shadow-xl md:border-8">
            <img src={IMG.personalizacao} loading="lazy" decoding="async" className="w-full object-cover" alt="Devocional com o nome da criança na capa" />
          </div>
          <div className="text-center md:text-left">
            <span className="font-script text-2xl text-blush md:text-3xl">Um detalhe que emociona 💛</span>
            <h2 className="mt-1 font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine md:text-3xl">A capa vai com o nome do seu filho</h2>
            <p className="mt-3 text-sm leading-relaxed text-bark/80 md:text-base">Você coloca o nome da criança na capa e o devocional vira um presente exclusivo, só dele. É aquele tipo de lembrança que a criança guarda a vida toda e que a mãe se emociona de receber. E pra quem vende, é o detalhe que faz a mãe pagar mais caro e ainda agradecer.</p>
            <div className="mt-6"><GoldBtn className="md:mx-0">Quero com o nome do meu filho</GoldBtn></div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- FEATURES ---------- */
function Features() {
  return (
    <Reveal className="bg-gradient-to-b from-cream via-sky-soft to-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine drop-shadow-sm md:mb-16 md:text-3xl">Feito pra você que deseja:</h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {FEATURES.map((f) => (
            <div key={f.title} className={`flex flex-col items-center rounded-2xl border-b-4 ${f.border} bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:rounded-[2.5rem] md:border-b-8 md:p-10`}>
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 ${f.ring} text-3xl shadow-inner md:h-20 md:w-20 md:text-4xl`}>{f.emoji}</div>
              <h3 className="mb-2 font-display text-base font-extrabold uppercase text-wine md:text-xl">{f.title}</h3>
              <p className="text-sm leading-relaxed text-bark/70 md:text-base">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><GoldBtn>Quero garantir o meu agora</GoldBtn></div>
      </div>
    </Reveal>
  )
}

/* ---------- QUEM É A LINA ---------- */
function QuemELina() {
  return (
    <Reveal className="bg-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <img src={IMG.lina} loading="lazy" decoding="async" className="h-36 w-36 shrink-0 rounded-full border-4 border-blush object-cover shadow-lg md:h-40 md:w-40" alt="Lina" />
          <div>
            <h2 className="font-display text-2xl font-extrabold text-wine md:text-3xl">Oi, eu sou a Lina 💛</h2>
            <p className="mt-3 text-sm leading-relaxed text-bark/80 md:text-base">Sou mãe, apaixonada por Jesus e por papelaria. Crio cada arquivo no meu ateliê, a casinha rosa, pensando em facilitar a vida de quem quer ensinar os filhos com carinho e de quem quer fazer uma renda com algo cheio de propósito. Esse devocional eu fiz com o coração.</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- KIT PRINCIPAL ---------- */
function KitPrincipal() {
  return (
    <Reveal className="bg-white px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine md:text-3xl">No Kit Completo você recebe tudo isso 🎁</h2>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ul className="space-y-3 md:space-y-4">
            {KIT_ITEMS.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl border border-sky/60 bg-cream p-3 text-sm font-semibold text-bark transition-colors hover:bg-sky-soft md:gap-4 md:rounded-2xl md:p-4 md:text-base">
                <span className="text-xl md:text-2xl">✅</span><span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border-4 border-white shadow-xl md:border-8">
            <img src={IMG.kit} loading="lazy" decoding="async" className="w-full object-contain" alt="Kit completo Aprendendo com Provérbios" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- BÔNUS ---------- */
function Bonus() {
  return (
    <Reveal className="bg-gradient-to-b from-sky-soft via-meadow-soft to-sky-soft px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-wine md:text-xs">🎁 Bônus exclusivos</span>
          <h2 className="mt-4 font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine md:text-3xl">E ainda leva mais 4 presentes</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-bark/70 md:text-base">Só no Kit Completo. Sozinhos eles já valem muito mais que a oferta inteira.</p>
        </div>
        <div className="space-y-6">
          {BONUS.map((b) => (
            <div key={b.tag} className="flex flex-col items-center gap-5 rounded-2xl border-2 border-white bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-start md:gap-8 md:rounded-[2rem] md:border-4 md:p-8">
              {b.img ? (
                <img src={b.img} loading="lazy" decoding="async" className="w-32 shrink-0 rounded-xl object-cover shadow-md md:w-48" alt={b.title} />
              ) : (
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft to-blush text-5xl shadow-md md:h-44 md:w-48">🎁</div>
              )}
              <div className="text-center sm:text-left">
                <div className="mb-3 flex flex-col items-center gap-2 sm:flex-row sm:items-start">
                  <span className="rounded-full bg-gold px-2 py-1 text-xs font-black uppercase tracking-wide text-wine">{b.tag}</span>
                  <h3 className="font-display text-base font-extrabold uppercase text-wine md:text-xl">{b.title}</h3>
                </div>
                <p className="mb-2 text-sm text-bark/60">
                  {b.valor === 'secreto' ? (
                    <span className="font-extrabold text-meadow-deep">Grátis</span>
                  ) : (
                    <>Valor: <span className="text-bark/40 line-through">R$ {b.valor}</span> | Hoje: <span className="font-extrabold text-meadow-deep">Grátis</span></>
                  )}
                </p>
                <p className="text-sm leading-relaxed text-bark/70 md:text-base">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- RENDA EXTRA ---------- */
function RendaExtra() {
  return (
    <Reveal className="bg-wine px-4 py-12 text-white md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-xl font-extrabold uppercase leading-snug tracking-wide md:text-3xl">Compra uma vez e imprime pra sempre 💰</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/80 md:text-base">Se você é artesã, encadernadora, tem gráfica em casa ou quer começar uma renda extra, esse kit trabalha por você. Você imprime, monta e vende pra todas as mães da sua igreja e da sua cidade. A capa com o nome da criança faz a mãe pagar mais caro e ainda agradecer.</p>
        <div className="mx-auto mt-8 max-w-md rounded-3xl bg-white/5 p-6 ring-1 ring-white/15">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-white/70">Investimento (o kit completo)</dt><dd className="font-bold">R$ {PRICES.premiumPor}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-white/70">Venda de cada devocional</dt><dd className="font-bold">R$ 25 a R$ 40</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-white/70">Pra recuperar o investimento</dt><dd className="font-bold">1 venda</dd></div>
            <div className="my-2 border-t border-dashed border-white/20" />
            <div className="flex justify-between gap-4 text-base"><dt className="text-gold-soft">10 vendas no mês</dt><dd className="font-display text-2xl font-extrabold text-gold-soft">≈ R$ 300</dd></div>
          </dl>
        </div>
        <div className="mt-8 text-center"><GoldBtn>Quero imprimir e vender</GoldBtn></div>
      </div>
    </Reveal>
  )
}

/* ---------- ANCORAGEM DE VALOR ---------- */
function Ancoragem() {
  return (
    <Reveal className="bg-cream px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine md:text-2xl">Se você fosse comprar tudo isso separado</h2>
        <div className="mx-auto mt-6 max-w-md rounded-3xl border border-bark/10 bg-white p-6 text-left shadow-soft">
          <dl className="space-y-2 text-sm text-bark/80">
            {ANCORAGEM.map((a) => (
              <div key={a.item} className="flex justify-between gap-4"><dt>{a.item}</dt><dd className="text-bark/40 line-through">R$ {a.valor}</dd></div>
            ))}
            <div className="mt-2 flex justify-between gap-4 border-t border-bark/10 pt-3 font-bold text-bark"><dt>Tudo isso valeria</dt><dd className="text-bark/50 line-through">R$ {ANCORAGEM_TOTAL}</dd></div>
          </dl>
          <div className="mt-4 rounded-2xl bg-gold-soft/40 py-4 text-center">
            <p className="text-sm font-semibold text-bark">Hoje, tudo junto, por</p>
            <p className="font-display text-4xl font-black text-gold-deep">R$ {PRICES.premiumPor}</p>
          </div>
        </div>
        <div className="mt-7"><GoldBtn>Quero tudo por R${PRICES.premiumPor}</GoldBtn></div>
      </div>
    </Reveal>
  )
}

/* ---------- PRICING ---------- */
function Pricing({ onOpenDownsell }) {
  const { h, m, s } = useCountdown()
  return (
    <section id="oferta" className="reveal vis bg-gradient-to-b from-sky-soft to-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-center font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine drop-shadow-sm md:text-3xl">Escolha o melhor pacote pra você ⬇️</h2>
        <div className="mx-auto mb-12 flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2 text-wine">
          <span className="text-xs font-extrabold uppercase tracking-wide">Oferta encerra em</span>
          <span className="rounded-full bg-wine/15 px-2 py-0.5 font-black tabular-nums">{h}:{m}:{s}</span>
        </div>
        <div className="flex flex-col items-stretch justify-center gap-8 lg:flex-row lg:gap-10">
          <div className="flex w-full flex-col rounded-2xl border border-bark/10 bg-bark/[0.03] p-6 opacity-90 shadow-sm lg:mt-10 lg:w-[42%] md:rounded-3xl md:p-8">
            <h3 className="font-display text-lg font-bold uppercase text-bark/60">Plano Básico</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-bark/40">só o essencial</p>
            <p className="mt-3 text-xs text-bark/40 line-through">De R$ {PRICES.basicoDe}</p>
            <p className="font-display text-3xl font-black text-bark/70">R$ {PRICES.basicoPor}</p>
            <p className="mt-1 text-xs font-semibold text-bark/50">à vista no Pix</p>
            <ul className="mt-4 space-y-2 text-sm text-bark/70">
              {BASICO_ITEMS.map((i) => <li key={i} className="flex gap-2"><span className="text-meadow-deep">✓</span>{i}</li>)}
            </ul>
            <div className="mt-4 rounded-xl border border-bark/10 bg-white/60 p-3">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-bark/40">No básico você fica de fora de:</p>
              <ul className="space-y-1 text-xs text-bark/40">
                {BASICO_EXCLUSOES.map((e) => <li key={e} className="flex gap-2"><span className="text-blush">✗</span>{e}</li>)}
              </ul>
            </div>
            <button onClick={onOpenDownsell} className="mt-5 block w-full rounded-full border border-bark/15 px-6 py-3 text-sm font-medium text-bark/50 transition-colors hover:bg-bark/5">Quero mesmo assim só o básico</button>
          </div>
          <div className="relative flex w-full flex-col rounded-2xl border-4 border-gold bg-white p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-2 lg:w-[58%] lg:-translate-y-2 md:rounded-[2.5rem] md:border-8 md:p-9">
            <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border-2 border-white bg-gradient-to-r from-gold-deep via-gold to-gold-deep px-5 py-2 text-xs font-black uppercase tracking-widest text-wine shadow-xl md:border-4 md:px-8 md:text-lg">⭐ Mais escolhido</div>
            <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-bark">Kit Completo VIP</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-gold-deep">leva absolutamente tudo</p>
            <div className="mt-3 flex items-end gap-3">
              <div>
                <p className="text-sm text-bark/50 line-through">De R$ {PRICES.premiumDe}</p>
                <p className="font-display text-5xl font-black leading-none text-gold-deep md:text-6xl">R$ {PRICES.premiumPor}</p>
              </div>
              <span className="mb-1 rounded-full bg-meadow-soft px-2 py-1 text-[11px] font-extrabold text-meadow-deep">-70%</span>
            </div>
            <p className="mt-1 text-sm font-extrabold text-meadow-deep">você economiza mais de R$ 70 hoje</p>
            <p className="mt-4 rounded-2xl bg-gold-soft/40 px-4 py-3 text-sm font-bold text-bark">🖨️ Imprime quantas vezes quiser. Uma compra, lucro ilimitado.</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-wide text-bark/50">Tudo que você recebe:</p>
            <ul className="mt-3 flex-1 space-y-2 text-sm text-bark/90">
              {PREMIUM_ITEMS.map((i) => (
                <li key={i} className="flex gap-2"><span className="mt-0.5 text-meadow-deep">✅</span><span dangerouslySetInnerHTML={{ __html: i }} /></li>
              ))}
            </ul>
            <button onClick={() => goToCheckout(CHECKOUT.premium, 'Kit Completo VIP')} className="pulsing-btn mt-6 flex w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 border-gold-soft bg-gradient-to-r from-gold to-gold-deep py-4 text-base font-black uppercase tracking-wide text-wine shadow-xl md:py-6 md:text-xl">
              <span>👉 Quero o pacote completo</span>
              <span className="text-xs font-bold normal-case tracking-normal opacity-80">com todos os bônus por R$ {PRICES.premiumPor}</span>
            </button>
            <p className="mt-3 text-center text-xs text-bark/55">🔒 Compra protegida · Acesso imediato · Garantia de 7 dias</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- COMO VOCÊ RECEBE ---------- */
function ComoRecebe() {
  return (
    <Reveal className="bg-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-wine md:text-2xl">Como você recebe (é simples assim)</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {PASSOS.map((p) => (
            <div key={p.n} className="rounded-2xl border border-sky/60 bg-cream p-6 shadow-soft">
              <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-black ${p.cor}`}>{p.n}</div>
              <h3 className="mt-3 font-display text-base font-extrabold uppercase text-wine">{p.title}</h3>
              <p className="mt-1 text-sm text-bark/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- GARANTIA ---------- */
function Garantia() {
  const selos = ['Pix ou Cartão', 'Acesso imediato', 'E-mail e WhatsApp', 'Compra protegida']
  return (
    <Reveal className="bg-gradient-to-b from-cream to-sky-soft px-4 py-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="softbounce mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-meadow/40 bg-meadow-soft text-4xl shadow-inner md:h-28 md:w-28 md:text-5xl">🛡️</div>
        <h2 className="font-display text-2xl font-extrabold uppercase text-wine md:text-3xl">Garantia de 7 dias</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-bark/80 md:text-base">Baixe o material, imprima e faça o teste com seu filho. Se não for tudo o que você esperava, é só pedir o reembolso em até 7 dias e devolvemos cada centavo. O risco é todo nosso.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {selos.map((x) => <span key={x} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-bark/70 shadow-sm">{x}</span>)}
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- FAQ ---------- */
function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <Reveal className="bg-gradient-to-b from-sky-soft to-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-display text-xl font-extrabold uppercase tracking-wide text-wine md:text-3xl">Perguntas frequentes</h2>
        <div className="space-y-3">
          {FAQ_DATA.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-xl border border-sky/60 bg-white">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left font-bold text-wine transition-colors hover:bg-sky-soft md:px-6 md:py-5">
                <span className="text-sm md:text-base">{f.q}</span>
                <span className={`text-gold-deep transition-transform ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="border-t border-sky/40 px-4 py-3 text-sm leading-relaxed text-bark/70 md:px-6 md:py-4">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-9 text-center"><GoldBtn>Ainda dá tempo, quero o meu 💛</GoldBtn></div>
      </div>
    </Reveal>
  )
}

/* ---------- CTA FINAL ---------- */
function CtaFinal({ onOpenDownsell }) {
  return (
    <Reveal className="bg-wine px-4 py-12 text-white md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mx-auto max-w-2xl font-display text-xl font-semibold italic leading-relaxed text-gold-soft md:text-2xl">"Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele."</p>
        <p className="mt-2 text-sm text-white/60">Provérbios 22:6 💛</p>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">Comece essas 31 dinâmicas com seu filho hoje, por menos do que custa um lanche. Baixa agora, imprime ainda hoje e amanhã já faz a primeira com ele.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={onOpenDownsell} className="rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white md:text-base">Quero só o devocional por R$ {PRICES.basicoPor}</button>
          <button onClick={() => goToCheckout(CHECKOUT.premium, 'Kit Completo VIP - CTA final')} className="pulsing-btn flex items-center justify-center gap-2 rounded-full border-2 border-gold-soft bg-gradient-to-r from-gold to-gold-deep px-7 py-4 text-base font-black uppercase tracking-wide text-wine shadow-xl">Quero o kit completo por R$ {PRICES.premiumPor}</button>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- APP ---------- */
export default function App() {
  const [downsellOpen, setDownsellOpen] = useState(false)
  const openDownsell = useCallback(() => setDownsellOpen(true), [])
  const closeDownsell = useCallback(() => setDownsellOpen(false), [])
  const exitShown = useRef(false)

  useEffect(() => {
    const onLeave = (e) => {
      if (!exitShown.current && e.clientY <= 0 && !e.relatedTarget) {
        exitShown.current = true
        setDownsellOpen(true)
      }
    }
    document.addEventListener('mouseout', onLeave)
    return () => document.removeEventListener('mouseout', onLeave)
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <UrgencyBar />
      <main>
        <Hero />
        <Depoimentos />
        <Demonstracao />
        <Personalizacao />
        <Features />
        <QuemELina />
        <KitPrincipal />
        <Bonus />
        <RendaExtra />
        <Ancoragem />
        <Pricing onOpenDownsell={openDownsell} />
        <ComoRecebe />
        <Garantia />
        <Faq />
        <CtaFinal onOpenDownsell={openDownsell} />
      </main>
      <footer className="bg-wine px-4 py-7 text-center text-xs text-white/55">
        <p>Pirataria é crime. Proibida a comercialização e distribuição não autorizada.</p>
        <p className="mt-1">© 2026 Lina Criativa. Produto digital. Imagens dos produtos montados são ilustrativas.</p>
      </footer>
      <DownsellPopup open={downsellOpen} onClose={closeDownsell} />
    </div>
  )
}
