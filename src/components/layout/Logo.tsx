import { Link } from 'react-router-dom'
import clsx from 'clsx'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="SmartEye eQMS home">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M16 2 L29 9 V23 L16 30 L3 23 V9 Z"
          className={light ? 'fill-white/10 stroke-white' : 'fill-brand-50 stroke-brand-700'}
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="6.5" className={light ? 'stroke-white' : 'stroke-brand-700'} strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2.4" className={light ? 'fill-accent-300' : 'fill-accent-500'} />
      </svg>
      <span className={clsx('font-display text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink-900')}>
        SmartEye
      </span>
    </Link>
  )
}
