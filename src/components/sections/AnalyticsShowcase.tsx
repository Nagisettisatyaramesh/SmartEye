import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useCountUp } from '@/hooks/useCountUp'

const kpis = [
  { label: 'Requirement Coverage', value: 96, suffix: '%' },
  { label: 'Test Execution', value: 91, suffix: '%' },
  { label: 'Risk Mitigated', value: 88, suffix: '%' },
  { label: 'Audit Readiness', value: 100, suffix: '%' },
]

const projects = [
  { name: 'CardioSense — SaMD v2.3', progress: 82, status: 'On Track' },
  { name: 'NeuroTrack Wearable', progress: 64, status: 'In Review' },
  { name: 'PulseGuard Implant', progress: 95, status: 'Audit Ready' },
]

function Kpi({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, value: animated } = useCountUp<HTMLParagraphElement>(value)
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{label}</p>
      <p ref={ref} className="mt-2 font-display text-4xl font-extrabold text-brand-700">
        {animated}
        {suffix}
      </p>
    </div>
  )
}

export function AnalyticsShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Analytics"
          title="See compliance progress at a glance"
          description="Easy-to-use analytics dashboards measure the progress of every compliance phase — filterable by user, team or project."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <Kpi key={k.label} {...k} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft sm:p-8"
        >
          <p className="mb-5 text-sm font-bold text-ink-900">Project Progress</p>
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink-800">{p.name}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">{p.status}</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
