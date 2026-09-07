import { motion } from 'framer-motion'
import { PlayCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { DashboardMockup } from '@/components/mockups/DashboardMockup'
import { TraceabilityMatrixMockup } from '@/components/mockups/TraceabilityMatrixMockup'
import { RiskMatrixMockup } from '@/components/mockups/RiskMatrixMockup'
import { DemoForm } from '@/components/sections/DemoForm'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-24 pt-16 sm:pt-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200"
          >
            eQMS for SaMD &amp; Medical Device Design Control
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Modern quality management for medical device innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80"
          >
            SmartEye eQMS connects quality, compliance, risk, design controls and traceability in one intelligent
            platform built for medical device and SaMD teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/#demo" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Request a Demo
            </Button>
            <Button
              href="/quality-management-system-qms-for-medical-devices-and-samd/"
              variant="secondary"
              size="lg"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              Explore SmartEye
            </Button>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="https://youtu.be/YjVfsjdiYAY"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition-colors hover:text-white"
          >
            <PlayCircle className="h-5 w-5" />
            Watch a Video
          </motion.a>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {[
              ['Faster', 'quality processes'],
              ['Reduced', 'quality admin'],
              ['Faster', 'product release'],
              ['Faster', 'external audits'],
            ].map(([kpi, label]) => (
              <div key={label}>
                <dt className="text-sm font-bold text-white">{kpi}</dt>
                <dd className="text-xs text-brand-200/70">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto flex max-w-[460px] flex-col items-center lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="animate-float-slow"
            >
              <DashboardMockup />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="animate-float absolute -left-10 -top-6 hidden sm:block"
            >
              <TraceabilityMatrixMockup />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="animate-float absolute -bottom-10 -right-6 hidden sm:block [animation-delay:1.5s]"
            >
              <RiskMatrixMockup />
            </motion.div>
          </div>
        </div>
      </Container>

      <Container id="demo" className="relative mt-24 scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white p-8 shadow-elevated sm:p-10"
        >
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-ink-900">Arrange your free tailored demo</h2>
            <p className="mt-2 text-neutral-600">
              See for yourself how an enhanced 360° view could benefit your SaMD design and development.
            </p>
          </div>
          <DemoForm />
        </motion.div>
      </Container>
    </section>
  )
}
