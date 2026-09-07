import type { ReactNode } from 'react'
import clsx from 'clsx'

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated',
        className,
      )}
    >
      {children}
    </div>
  )
}
