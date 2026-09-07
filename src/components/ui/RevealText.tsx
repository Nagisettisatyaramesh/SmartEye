import { motion } from 'framer-motion'
import type { ElementType } from 'react'

const cinematicEase = [0.22, 1, 0.36, 1] as const

export function RevealText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.055,
}: {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
}) {
  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
              <motion.span
                className="inline-block will-change-transform"
                initial={{ y: '115%', rotate: 3 }}
                whileInView={{ y: '0%', rotate: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.85, delay: delay + i * stagger, ease: cinematicEase }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </Tag>
  )
}
