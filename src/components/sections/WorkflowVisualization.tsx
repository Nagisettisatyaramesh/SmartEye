import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FileText, Compass, ShieldAlert, FlaskConical, GitBranch, BadgeCheck, Radar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AuroraBackground } from '@/components/ui/AuroraBackground'

const cinematicEase = [0.22, 1, 0.36, 1] as const

const steps = [
  { icon: FileText, title: 'Requirements', description: 'Capture and baseline what the product must do.' },
  { icon: Compass, title: 'Design Controls', description: 'Translate requirements into verified design outputs.' },
  { icon: ShieldAlert, title: 'Risk Management', description: 'Identify, assess and mitigate risk against ISO 14971.' },
  { icon: FlaskConical, title: 'Verification & Validation', description: 'Prove the design meets requirements and user needs.' },
  { icon: GitBranch, title: 'Traceability', description: 'Bi-directional links across every artifact, always current.' },
  { icon: BadgeCheck, title: 'Regulatory Compliance', description: 'Evidence mapped to ISO 13485, IEC 62304 and FDA/MDR.' },
  { icon: Radar, title: 'Post-Market', description: 'Feed real-world surveillance data back into the system.' },
]

export function WorkflowVisualization() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.4'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const cometTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const cometOpacity = useTransform(scrollYProgress, [0, 0.02, 0.96, 1], [0, 1, 1, 0])

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <AuroraBackground />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Connected by design"
          title="One lifecycle, fully connected"
          description="SmartEye connects the entire medical device lifecycle end to end, so nothing falls through the cracks between requirements and post-market."
        />

        <div ref={ref} className="relative mt-16 grid gap-x-10 lg:grid-cols-2">
          <div className="pointer-events-none absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-white/10 lg:block" />
          <motion.div
            style={{ height: lineHeight }}
            className="pointer-events-none absolute left-[19px] top-2 hidden w-px bg-gradient-to-b from-accent-400 to-brand-400 shadow-[0_0_12px_1px_rgba(45,212,191,0.5)] lg:block"
          />
          <motion.div
            style={{ top: cometTop, opacity: cometOpacity }}
            className="pointer-events-none absolute left-[19px] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-300 shadow-[0_0_20px_6px_rgba(45,212,191,0.7)] lg:block"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative flex items-start gap-4 py-5 lg:pl-2"
            >
              <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center">
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1.8 }}
                  viewport={{ once: true, margin: '-35% 0px -35% 0px' }}
                  transition={{ duration: 0.8, ease: cinematicEase }}
                  className="absolute inset-0 rounded-full bg-accent-400/25 blur-md"
                />
                <motion.div
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-35% 0px -35% 0px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-accent-300"
                >
                  <step.icon className="h-4 w-4" />
                </motion.div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Step {String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-brand-100/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
