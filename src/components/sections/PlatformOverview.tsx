import { motion } from 'framer-motion'
import {
  ListChecks, FlaskConical, ShieldAlert, Compass, GitBranch, Lock,
  Stethoscope, Radar, FileStack, BadgeCheck, ClipboardList, BarChart3, ArrowUpRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { modules, type ModuleItem } from '@/data/modules'

const icons: Record<ModuleItem['icon'], typeof ListChecks> = {
  ListChecks, FlaskConical, ShieldAlert, Compass, GitBranch, Lock,
  Stethoscope, Radar, FileStack, BadgeCheck, ClipboardList, BarChart3,
}

export function PlatformOverview() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The SmartEye Platform"
          title="One connected eQMS ecosystem"
          description="SmartEye allows you to access everything you need for design and development in one seamless platform — a one-stop boutique for QARA, from design control and cyber security to clinical trials and post-market surveillance."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((mod, i) => {
            const Icon = icons[mod.icon]
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-elevated"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-neutral-300 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-brand-600" />
                </div>
                <h3 className="relative mt-4 font-bold text-ink-900">{mod.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-neutral-600">{mod.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
