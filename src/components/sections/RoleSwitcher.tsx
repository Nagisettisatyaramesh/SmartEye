import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { roles } from '@/data/roles'

export function RoleSwitcher() {
  const [active, setActive] = useState(roles[0].id)
  const role = roles.find((r) => r.id === active) ?? roles[0]

  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Role-based experience"
          title="One platform. Every role."
          description="SmartEye adapts to your entire workforce, with access levels, roles and permissions tailored to how each part of your team actually works."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={clsx(
                'rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200',
                active === r.id
                  ? 'border-brand-600 bg-brand-600 text-white shadow-soft'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:text-brand-700',
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="relative mt-8 min-h-[280px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft">
          <AnimatePresence mode="wait">
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.2fr]"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{role.label}</span>
                <h3 className="mt-2 text-2xl font-bold text-ink-900">{role.headline}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{role.description}</p>
              </div>
              <ul className="space-y-3">
                {role.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 rounded-xl bg-neutral-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                    <span className="text-sm leading-relaxed text-ink-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
