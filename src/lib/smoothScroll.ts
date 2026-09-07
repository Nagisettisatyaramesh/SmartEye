import Lenis from 'lenis'

let lenis: Lenis | null = null
let rafId: number | null = null

function loop(time: number) {
  lenis?.raf(time)
  rafId = requestAnimationFrame(loop)
}

export function startSmoothScroll() {
  if (lenis || typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.1,
  })
  rafId = requestAnimationFrame(loop)
}

export function stopSmoothScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy()
  lenis = null
  rafId = null
}

export function smoothScrollTo(target: string | HTMLElement, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.1 })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function getLenis() {
  return lenis
}
