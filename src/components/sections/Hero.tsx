import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { PlayCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { RevealText } from '@/components/ui/RevealText'
import { DashboardMockup } from '@/components/mockups/DashboardMockup'
import { TraceabilityMatrixMockup } from '@/components/mockups/TraceabilityMatrixMockup'
import { RiskMatrixMockup } from '@/components/mockups/RiskMatrixMockup'
import { DemoForm } from '@/components/sections/DemoForm'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const blobY1 = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const blobY2 = useTransform(scrollYProgress, [0, 1], ['0%', '55%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const stageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springCfg = { stiffness: 120, damping: 20, mass: 0.5 }
  const dashboardX = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), springCfg)
  const dashboardY = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), springCfg)
  const traceX = useSpring(useTransform(mx, [-0.5, 0.5], [-20, 20]), springCfg)
  const traceY = useSpring(useTransform(my, [-0.5, 0.5], [-20, 20]), springCfg)
  const riskX = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), springCfg)
  const riskY = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), springCfg)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink-950 pb-24 pt-16 sm:pt-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
      <motion.div style={{ y: blobY1 }} className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px]">
        <div className="animate-aurora-1 h-full w-full rounded-full bg-brand-700/40 blur-3xl" />
      </motion.div>
      <motion.div style={{ y: blobY2 }} className="pointer-events-none absolute -right-32 top-40 h-[420px] w-[420px]">
        <div className="animate-aurora-2 h-full w-full rounded-full bg-accent-500/20 blur-3xl" />
      </motion.div>
      <div className="animate-aurora-3 pointer-events-none absolute bottom-[-20%] left-1/3 h-[380px] w-[380px] rounded-full bg-brand-400/15 blur-3xl" />

      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200"
          >
            eQMS for SaMD &amp; Medical Device Design Control
          </motion.span>

          <RevealText
            as="h1"
            text="Modern quality management for medical device innovation"
            delay={0.15}
            className="text-balance mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80"
          >
            SmartEye eQMS connects quality, compliance, risk, design controls and traceability in one intelligent
            platform built for medical device and SaMD teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/#demo" size="lg" glow icon={<ArrowRight className="h-4 w-4" />}>
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
            transition={{ duration: 0.6, delay: 0.9 }}
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
            transition={{ duration: 0.6, delay: 1 }}
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
        </motion.div>

        <motion.div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ y: stageY, scale: stageScale }}
          className="relative"
        >
          <div className="relative mx-auto flex max-w-[460px] flex-col items-center [perspective:1200px] lg:mx-0">
            <motion.div style={{ x: dashboardX, y: dashboardY }}>
              <div className="animate-float-slow">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DashboardMockup />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              style={{ x: traceX, y: traceY }}
              className="absolute -left-10 -top-6 hidden sm:block"
            >
              <div className="animate-float">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TraceabilityMatrixMockup />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              style={{ x: riskX, y: riskY }}
              className="absolute -bottom-10 -right-6 hidden sm:block"
            >
              <div className="animate-float [animation-delay:1.5s]">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <RiskMatrixMockup />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
