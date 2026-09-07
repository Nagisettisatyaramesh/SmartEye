import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-ink-900 border border-neutral-200 shadow-soft hover:border-brand-300 hover:text-brand-700 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink-900 hover:bg-neutral-100',
}

const sizes: Record<Size, string> = {
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  children: ReactNode
  className?: string
  /** Adds a subtle, continuous glow-pulse ring — use sparingly, on the one primary CTA per view. */
  glow?: boolean
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', icon, children, className, glow, ...rest } = props
  const classes = clsx(base, variants[variant], sizes[size], glow && 'animate-glow-pulse', className)

  if ('href' in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href) || props.href.startsWith('mailto:')
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    if (isExternal) {
      return (
        <a href={props.href} className={classes} {...anchorRest}>
          {children}
          {icon}
        </a>
      )
    }
    return (
      <Link to={props.href} className={classes} {...(anchorRest as Record<string, unknown>)}>
        {children}
        {icon}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  )
}
