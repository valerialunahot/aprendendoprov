import { useEffect, useRef, useState } from 'react'

// Revela o elemento ao entrar na viewport. Desliga sozinho após revelar.
export default function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}
