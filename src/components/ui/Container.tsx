import type { ReactNode } from 'react'
import clsx from 'clsx'

export function Container({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <div id={id} className={clsx('container-page', className)}>
      {children}
    </div>
  )
}
