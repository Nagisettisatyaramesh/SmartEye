import type { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { RevealText } from '@/components/ui/RevealText'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={clsx(
            'mb-4 inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider',
            light ? 'border-white/20 text-brand-200 bg-white/5' : 'border-brand-200 bg-brand-50 text-brand-700',
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <RevealText
        as="h2"
        text={title}
        className={clsx(
          'text-balance text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-ink-900',
        )}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={clsx('mt-4 text-lg leading-relaxed', light ? 'text-brand-100/80' : 'text-neutral-600')}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
