import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { NavItem } from '@/data/nav'
import { motion, AnimatePresence } from 'framer-motion'

export function MegaMenu({ item, open }: { item: NavItem; open: boolean }) {
  if (!item.megaMenu) return null
  const { intro, groups } = item.megaMenu

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute left-1/2 top-full z-40 mt-3 w-[min(880px,90vw)] -translate-x-1/2"
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-elevated">
            <div className="grid grid-cols-[280px_1fr]">
              <div className="bg-grid relative flex flex-col justify-between bg-ink-900 p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-800/90 via-ink-900 to-ink-950" />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                    {intro.eyebrow}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{intro.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-100/80">{intro.description}</p>
                </div>
                <Link
                  to={intro.cta.href}
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-accent-200"
                >
                  {intro.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-8">
                {groups.map((group) => (
                  <div key={group.heading}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {group.heading}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            className="group block rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-brand-50"
                          >
                            <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block text-xs text-neutral-500">{child.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
