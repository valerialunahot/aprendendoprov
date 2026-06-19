import { useEffect } from 'react'
import { CHECKOUT, PRICES } from '../data/content'
import { goToCheckout } from '../utils'

export default function DownsellPopup({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-wine/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-[2rem] border-4 border-gold bg-cream p-6 shadow-2xl sm:rounded-[2.5rem] md:border-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bark/10 text-lg text-bark">×</button>
        <div className="softbounce mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-soft bg-gold-soft/40 text-3xl shadow-inner">🛑</div>
        <h2 className="text-center font-display text-2xl font-black uppercase leading-tight text-gold-deep">Espera 🥹</h2>
        <h3 className="mt-1 text-center font-display text-base font-extrabold uppercase text-wine">Antes de levar só o básico…</h3>
        <p className="mt-4 text-sm leading-relaxed text-bark/80">
          Por só R$5 a mais, você leva o Kit Completo inteiro: o devocional, a caneca, o bolsinho, o certificado e os 4 bônus, com mais de 135 desenhos pra colorir, 40 atividades e o presente surpresa. Essa condição some quando você fechar isso aqui.
        </p>
        <div className="mt-5 flex items-baseline justify-center gap-3 rounded-2xl bg-gold-soft/40 py-4">
          <span className="text-lg text-bark/50 line-through">R${PRICES.downsellDe}</span>
          <span className="font-display text-4xl font-black text-gold-deep">R${PRICES.downsellPor}</span>
          <span className="text-sm font-semibold text-bark/70">só agora</span>
        </div>
        <div className="mt-5 space-y-3">
          <button onClick={() => goToCheckout(CHECKOUT.downsell, 'Downsell Kit Completo')} className="pulsing-btn w-full rounded-2xl border-2 border-gold-soft bg-gradient-to-r from-gold to-gold-deep py-4 text-sm font-black uppercase tracking-wide text-wine shadow-xl md:text-base">
            👉 Sim, quero o kit completo por R${PRICES.downsellPor}
          </button>
          <button onClick={() => goToCheckout(CHECKOUT.basico, 'Básico')} className="w-full px-6 py-2 text-xs font-medium text-bark/50 underline">
            Não, quero apenas o básico por R${PRICES.basicoPor}
          </button>
        </div>
      </div>
    </div>
  )
}
