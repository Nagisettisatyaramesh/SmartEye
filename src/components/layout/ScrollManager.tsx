import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { startSmoothScroll, smoothScrollTo, getLenis } from '@/lib/smoothScroll'

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    startSmoothScroll()
  }, [])

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        if (document.getElementById(id)) smoothScrollTo(`#${id}`, -24)
      })
      return
    }
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
