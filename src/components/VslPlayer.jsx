import { useEffect, useRef, useState } from 'react'
import { VSL_VIMEO_ID } from '../data/content'

// Carrega a API do Vimeo uma única vez
function loadVimeoApi() {
  return new Promise((resolve) => {
    if (window.Vimeo) return resolve(window.Vimeo)
    const existing = document.querySelector('script[src*="player.vimeo.com/api/player.js"]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Vimeo))
      return
    }
    const s = document.createElement('script')
    s.src = 'https://player.vimeo.com/api/player.js'
    s.async = true
    s.onload = () => resolve(window.Vimeo)
    document.body.appendChild(s)
  })
}

export default function VslPlayer({ onCtaClick }) {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    let mounted = true
    loadVimeoApi().then((Vimeo) => {
      if (!mounted || !iframeRef.current) return
      try {
        playerRef.current = new Vimeo.Player(iframeRef.current)
        playerRef.current.on('ended', () => setEnded(true))
      } catch (e) {
        /* noop */
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  const play = () => {
    setStarted(true)
    if (playerRef.current) playerRef.current.play().catch(() => {})
  }
  const replay = () => {
    setEnded(false)
    if (playerRef.current) playerRef.current.setCurrentTime(0).then(() => playerRef.current.play()).catch(() => {})
  }

  const src = `https://player.vimeo.com/video/${VSL_VIMEO_ID}?badge=0&autopause=0&title=0&byline=0&portrait=0&dnt=1&controls=0&playsinline=1&app_id=58479`

  return (
    <div className="relative mx-auto mt-5 w-full max-w-[320px] overflow-hidden rounded-3xl border-4 border-white bg-wine shadow-2xl md:border-8">
      <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
        <iframe
          ref={iframeRef}
          src={src}
          title="Depoimento da Lucia"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>

      {!started && (
        <button
          onClick={play}
          className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-between bg-gradient-to-b from-sapphire/30 via-wine/20 to-wine/85 p-5 text-white"
          aria-label="Assistir ao depoimento da Lucia"
        >
          <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm">
            💬 Depoimento real
          </span>
          <span className="flex flex-col items-center">
            <span className="pulsing-btn flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl">
              <span className="ml-1.5 text-3xl text-sapphire">▶</span>
            </span>
            <span className="mt-4 font-script text-3xl leading-none drop-shadow-md">Veja o que a Lucia falou</span>
            <span className="mt-1 text-sm font-semibold drop-shadow">👇 toque pra assistir com o som</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-black text-wine">L</span>
            <span className="text-xs font-semibold drop-shadow">Lucia · cliente da Lina Criativa</span>
          </span>
        </button>
      )}

      {ended && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-wine/90 p-6 text-center text-white">
          <p className="font-script text-3xl text-gold-soft">Lindo, né? 🥹</p>
          <p className="text-sm font-semibold leading-snug">Você também pode viver isso com seu filho a partir de hoje.</p>
          <button onClick={onCtaClick} className="pulsing-btn mt-1 rounded-full border-2 border-gold-soft bg-gradient-to-r from-gold to-gold-deep px-6 py-3 text-sm font-black uppercase tracking-wide text-wine shadow-xl">
            Quero o meu também
          </button>
          <button onClick={replay} className="text-xs text-white/60 underline">assistir de novo</button>
        </div>
      )}
    </div>
  )
}
