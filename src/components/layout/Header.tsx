import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import clsx from 'clsx'
import { primaryNav } from '@/data/nav'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/layout/Logo'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { MobileNav } from '@/components/layout/MobileNav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-neutral-200/80 bg-white/85 backdrop-blur-md'
            : 'border-b border-transparent bg-white/60 backdrop-blur-sm',
        )}
      >
        <div className="container-page">
          <div className={clsx('flex items-center justify-between transition-all duration-300', scrolled ? 'h-16' : 'h-20')}>
            <Logo />

            <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
              {primaryNav.map((item) => {
                const hasDropdown = Boolean(item.megaMenu || item.submenu)
                return (
                  <div key={item.label} className="relative" onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-ink-800 transition-colors hover:bg-neutral-100 hover:text-brand-700"
                    >
                      {item.label}
                      {hasDropdown && (
                        <ChevronDown
                          className={clsx(
                            'h-3.5 w-3.5 text-neutral-400 transition-transform duration-200',
                            openMenu === item.label && 'rotate-180',
                          )}
                        />
                      )}
                    </Link>
                    {item.megaMenu && <MegaMenu item={item} open={openMenu === item.label} />}
                    {item.submenu && (
                      <div
                        className={clsx(
                          'absolute left-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-xl border border-neutral-200 bg-white py-2 shadow-elevated transition-all duration-150',
                          openMenu === item.label ? 'opacity-100 translate-y-0' : 'pointer-events-none -translate-y-1 opacity-0',
                        )}
                      >
                        {item.submenu.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button href="/#demo" size="md" className="hidden sm:inline-flex">
                Get a Demo
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="rounded-full p-2.5 text-ink-800 hover:bg-neutral-100 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
