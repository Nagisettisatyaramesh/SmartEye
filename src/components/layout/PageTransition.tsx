import { useEffect, useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const cinematicEase = [0.22, 1, 0.36, 1] as const

function RouteSweep() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(false)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setActive(true)
    const timeout = setTimeout(() => setActive(false), 620)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          <motion.div
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-brand-300/30 to-transparent mix-blend-overlay"
            initial={{ x: '-140%' }}
            animate={{ x: '340%' }}
            transition={{ duration: 0.6, ease: cinematicEase }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function PageTransition() {
  const location = useLocation()
  const element = useOutlet()

  // Deliberately NOT wrapping page content in AnimatePresence with an `exit` animation:
  // an `exit` object mixing a discrete property (`position`) with animatable ones (`opacity`)
  // never resolves in this framer-motion/React combination, so AnimatePresence never detects
  // exit-complete and never unmounts the outgoing page — confirmed by inspecting the DOM after
  // a few navigations (old pages piling up, invisible but never removed). React's normal
  // key-based swap unmounts the old page synchronously and safely; the RouteSweep overlay plus
  // this simple enter animation still gives a cinematic transition without that risk.
  return (
    <>
      <RouteSweep />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: cinematicEase }}
      >
        {element}
      </motion.div>
    </>
  )
}
