import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import clsx from 'clsx'
import { primaryNav } from '@/data/nav'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-ink-950/40 lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 p-5">
              <span className="font-display text-lg font-bold text-ink-900">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-5">
              <ul className="space-y-1">
                {primaryNav.map((item) => {
                  const childItems = item.megaMenu
                    ? item.megaMenu.groups.flatMap((g) => g.items)
                    : item.submenu
                  return (
                    <li key={item.label} className="border-b border-neutral-100 py-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className="flex-1 py-3 text-base font-semibold text-ink-900"
                        >
                          {item.label}
                        </Link>
                        {childItems && (
                          <button
                            onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                            aria-label={`Toggle ${item.label} submenu`}
                            className="p-3 text-neutral-500"
                          >
                            <ChevronDown
                              className={clsx(
                                'h-4 w-4 transition-transform',
                                expanded === item.label && 'rotate-180',
                              )}
                            />
                          </button>
                        )}
                      </div>
                      {childItems && expanded === item.label && (
                        <ul className="ml-2 mb-3 space-y-2 border-l border-neutral-200 pl-4">
                          {childItems.map((child) => (
                            <li key={child.label}>
                              <Link
                                to={child.href}
                                onClick={onClose}
                                className="block py-1.5 text-sm text-neutral-600 hover:text-brand-700"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="border-t border-neutral-200 p-5">
              <Button href="/#demo" onClick={onClose} className="w-full">
                Request a Demo
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
