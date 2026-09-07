import { motion } from 'framer-motion'
import { Link2, Gauge, ShieldAlert, Rocket, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const values = [
  { icon: Link2, title: 'Join Up Data', description: 'Bring requirements, risk, design and test data together in one connected system.' },
  { icon: Gauge, title: 'Go Toll Free', description: 'Remove the manual admin overhead that slows quality teams down.' },
  { icon: ShieldAlert, title: 'Mitigate Risk', description: 'Identify and manage risk continuously across the product lifecycle.' },
  { icon: Rocket, title: 'Accelerate Compliance', description: 'Move faster through reviews, approvals and audits with built-in workflows.' },
  { icon: Sparkles, title: 'Enhance Quality', description: 'Raise the bar on quality without adding headcount or overhead.' },
]

export function ValueProps() {
  return (
    <section className="border-b border-neutral-100 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why teams switch to SmartEye"
          title="Transform the way you manage compliance"
          description="Our team of experts have led careers in quality management software and digital solutions for the medical device and healthcare sector — built into a platform that mitigates risk, accelerates compliance and improves quality."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-ink-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
