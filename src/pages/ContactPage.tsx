import { Mail, Phone, MapPin, PlayCircle } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { DemoForm } from '@/components/sections/DemoForm'

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'info@scube-technologies.com', href: 'mailto:info@scube-technologies.com' },
  { icon: Phone, label: 'Mobile', value: '+44 (0) 7459153907 / +41 799036836', href: 'tel:+447459153907' },
  { icon: MapPin, label: 'UK', value: '125 Deansgate, Manchester, M3 2LH, United Kingdom', href: undefined },
]

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Talk to the SmartEye eQMS team — browse our videos or get in touch with one of our experts today for a free demo."
      />

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Contact Us
            </span>
            <h1 className="text-balance mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Talk to the SmartEye eQMS team
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-100/80">
              Want to understand more about how SmartEye eQMS could transform the way you manage your SaMD design and
              development process? Browse our selection of videos or get in touch with one of our expert team today
              for a free and easy demo from those who built it.
            </p>

            <a
              href="https://youtu.be/YjVfsjdiYAY"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white"
            >
              <PlayCircle className="h-5 w-5" />
              Watch a Video
            </a>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-300">
                    <detail.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-white hover:text-accent-300">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-white">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-elevated">
            <h2 className="text-xl font-bold text-ink-900">Get a Demo</h2>
            <p className="mt-2 text-sm text-neutral-500">Tell us a little about your requirements and we'll be in touch.</p>
            <div className="mt-6">
              <DemoForm compact />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
