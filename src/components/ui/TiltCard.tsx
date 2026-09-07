import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'
import clsx from 'clsx'

export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 260, damping: 22, mass: 0.4 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springConfig)
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ scale: { duration: 0.3 } }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={clsx('group group/tilt relative [transform-style:preserve-3d]', className)}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background: useTransform([glowX, glowY], (latest) => {
            const [gx, gy] = latest as [string, string]
            return `radial-gradient(240px circle at ${gx} ${gy}, rgb(41 96 214 / 0.14), transparent 65%)`
          }),
        }}
      />
      {children}
    </motion.div>
  )
}
