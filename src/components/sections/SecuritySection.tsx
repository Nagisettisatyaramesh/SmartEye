import { motion } from 'framer-motion'
import { Cloud, KeyRound, History, PenTool, ShieldCheck, Workflow } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TiltCard } from '@/components/ui/TiltCard'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
import { securityCards, type SecurityCard } from '@/data/security'

const icons: Record<SecurityCard['icon'], typeof Cloud> = { Cloud, KeyRound, History, PenTool, ShieldCheck, Workflow }

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <AuroraBackground />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Security & Trust"
          title="Enterprise-grade security, built in"
          description="SmartEye is hosted on Azure Web Services — the hosting service of choice for many Fortune 100 companies, including the NHS — with controls built for regulated environments."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((card, i) => {
            const Icon = icons[card.icon]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <TiltCard className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-[border-color,background-color] duration-300 hover:border-accent-400/40 hover:bg-white/[0.07]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-400/10 text-accent-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/70">{card.description}</p>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
