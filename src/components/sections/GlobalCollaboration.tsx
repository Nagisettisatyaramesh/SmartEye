import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const points = [
  { x: 130, y: 95, label: 'Manchester, UK' },
  { x: 205, y: 110, label: 'Geneva, CH' },
  { x: 90, y: 150, label: 'New York, US' },
  { x: 330, y: 130, label: 'Bengaluru, IN' },
  { x: 390, y: 160, label: 'Singapore' },
  { x: 300, y: 190, label: 'Nairobi, KE' },
]

const lines = [
  [0, 1], [0, 2], [0, 3], [1, 4], [3, 4], [3, 5],
]

export function GlobalCollaboration() {
  return (
    <section className="overflow-hidden bg-neutral-50 py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Global collaboration"
            title="Built for teams working across borders"
            description="SmartEye enables global team collaboration through co-authoring, co-reviewing and co-approving — so distributed quality, engineering and regulatory teams can work from the same source of truth, wherever they are."
          />
          <ul className="mt-8 space-y-3 text-sm text-neutral-600">
            <li>— Supports companies across five continents</li>
            <li>— Navigates international regulatory pathways and quality requirements</li>
            <li>— One cloud platform, no version conflicts between sites</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-elevated"
        >
          <svg viewBox="0 0 460 260" className="w-full" role="img" aria-label="Map showing SmartEye's globally connected teams">
            <defs>
              <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="1.2" cy="1.2" r="1.2" fill="currentColor" className="text-neutral-200" />
              </pattern>
            </defs>
            <rect width="460" height="260" fill="url(#dots)" rx="16" />

            {lines.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={points[a].x}
                y1={points[a].y}
                x2={points[b].x}
                y2={points[b].y}
                stroke="currentColor"
                className="text-brand-300"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}
              />
            ))}

            {points.map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="10"
                  className="fill-accent-400/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0.6, 1.4, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                />
                <circle cx={p.x} cy={p.y} r="4.5" className="fill-brand-600" />
              </g>
            ))}
          </svg>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-100 pt-4">
            {points.map((p) => (
              <span key={p.label} className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {p.label}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
