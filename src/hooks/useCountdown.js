import { useEffect, useState } from 'react'

const STORAGE_KEY = 'proverbios_offer_deadline'
const DURATION_MS = 24 * 60 * 60 * 1000 // 24h

function getDeadline() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const ts = parseInt(saved, 10)
      if (!Number.isNaN(ts) && ts > Date.now()) return ts
    }
  } catch (e) {
    /* localStorage indisponível: usa janela em memória */
  }
  const deadline = Date.now() + DURATION_MS
  try {
    localStorage.setItem(STORAGE_KEY, String(deadline))
  } catch (e) {
    /* ignore */
  }
  return deadline
}

function format(ms) {
  if (ms <= 0) return { h: '00', m: '00', s: '00', done: true }
  const total = Math.floor(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const pad = (n) => String(n).padStart(2, '0')
  return { h: pad(h), m: pad(m), s: pad(s), done: false }
}

// Timer único compartilhado: garante topo e bloco de planos sincronizados.
export default function useCountdown() {
  const [time, setTime] = useState(() => format(getDeadline() - Date.now()))

  useEffect(() => {
    const deadline = getDeadline()
    const tick = () => setTime(format(deadline - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
