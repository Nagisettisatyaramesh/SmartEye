import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { standards } from '@/data/compliance'

export function ComplianceSection() {
  return (
    <section id="compliance" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Built for regulated teams"
          title="Built around the standards medical device teams work with"
          description="SmartEye's workflows are configured around the standards and regulations that already govern how your team designs, tests and releases medical devices and SaMD."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-elevated"
            >
              <p className="font-display text-xl font-extrabold text-brand-700">{s.code}</p>
              <p className="mt-2 text-sm font-semibold text-ink-900">{s.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
