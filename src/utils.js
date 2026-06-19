// Rola suave até a seção de oferta (todos os CTAs intermediários usam isto)
export function scrollToOferta() {
  const el = document.getElementById('oferta')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Dispara InitiateCheckout no Meta Pixel antes de mandar pro checkout
export function goToCheckout(url, plano) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', { content_name: plano })
    }
  } catch (e) {
    /* pixel ausente: segue o fluxo */
  }
  window.location.href = url
}
