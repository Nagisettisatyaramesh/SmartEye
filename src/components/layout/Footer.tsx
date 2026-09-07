import { Link } from 'react-router-dom'
import { MapPin, Mail, ShieldCheck, Award } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'
import { footerNav, socialLinks } from '@/data/nav'
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '@/components/layout/SocialIcons'

const socialIcons = { Facebook: FacebookIcon, Twitter: TwitterIcon, LinkedIn: LinkedInIcon, Instagram: InstagramIcon }

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-neutral-300">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              SmartEye eQMS is powered by S-Cube Technologies Limited, connecting quality, compliance and traceability
              for medical device and SaMD teams.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                125 Deansgate, Manchester, M3 2LH, United Kingdom
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <a href="mailto:info@scube-technologies.com" className="hover:text-white">
                  info@scube-technologies.com
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-brand-400 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.values(footerNav).map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">{group.heading}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">© S-Cube Technologies Limited {new Date().getFullYear()}</p>
          <div className="flex items-center gap-5 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-brand-400" /> ISO 9001 Certified
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-400" /> ISO/IEC 27001 Certified
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
