import type { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <span
          className={clsx(
            'mb-4 inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider',
            light ? 'border-white/20 text-brand-200 bg-white/5' : 'border-brand-200 bg-brand-50 text-brand-700',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          'text-balance text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx('mt-4 text-lg leading-relaxed', light ? 'text-brand-100/80' : 'text-neutral-600')}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
