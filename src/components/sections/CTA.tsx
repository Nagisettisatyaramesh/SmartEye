import { type MouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { RevealText } from '@/components/ui/RevealText'
import { AuroraBackground } from '@/components/ui/AuroraBackground'

export function CTA() {
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgb(41 96 214 / 0.25), transparent 65%)`

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <AuroraBackground />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <Container className="relative text-center">
        <RevealText
          as="h2"
          text="Ready to modernize your quality system?"
          className="mx-auto max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-4 max-w-xl text-brand-100/70"
        >
          See how SmartEye can connect your entire medical device lifecycle — arrange your free tailored demo today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8"
        >
          <Button href="/#demo" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Request a Demo
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
