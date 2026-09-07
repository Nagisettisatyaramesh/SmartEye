import type { ReactNode } from 'react'
import clsx from 'clsx'

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
