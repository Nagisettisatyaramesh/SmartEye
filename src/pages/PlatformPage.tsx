import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { qmsProcessGroups, whySmartEyeReasons } from '@/data/compliance'
import { DocumentWorkflowMockup } from '@/components/mockups/DocumentWorkflowMockup'

const regulations = [
  'Design inputs and outputs',
  'Risk management and hazard analysis',
  'Design verification and validation (V&V)',
  'Design reviews and approvals',
  'Software development life cycle (SDLC) documentation',
]

export function PlatformPage() {
  return (
    <>
      <SEO
        title="Best QMS For Medical Device Design Control And SaMD"
        description="SmartEye is your all-in-one Quality Management System (QMS), purpose-built for medical device design control and Software as a Medical Device (SaMD) compliance."
      />

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-600/30 blur-3xl" />
        <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Why SmartEye eQMS
            </span>
            <h1 className="text-balance mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Best QMS for medical device design control and SaMD
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80">
              SmartEye is your all-in-one Quality Management System (QMS) solution, purpose-built for medical device
              design control and Software as a Medical Device (SaMD) compliance. Whether you're developing
              hardware-based devices or standalone medical software, SmartEye helps you streamline your product
              lifecycle while staying compliant with global regulatory standards.
            </p>
            <div className="mt-8">
              <Button href="/#demo" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Get a Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <DocumentWorkflowMockup />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Why SmartEye for Design Control and SaMD?"
            title="Centralizing and automating your design control processes"
            description="Developing a medical device — especially software-based solutions — requires strict adherence to regulations like FDA 21 CFR Part 820, ISO 13485, and IEC 62304. SmartEye centralizes and automates your design control processes, making it easy to manage:"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {regulations.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl bg-neutral-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                <span className="text-sm leading-relaxed text-ink-800">{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-neutral-600">
            S-Cube Technologies, with its experience in Quality and Regulatory Affairs, has proved to know how to keep
            your company compliant. It has developed an electronic Quality Management System (eQMS) called SmartEye
            which will guide you to success with workflows that are already configured to follow all the medical
            device standards.
          </p>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Transforming Medical Compliance" title="Why teams choose SmartEye" align="center" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {whySmartEyeReasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-600" />
                <span className="text-sm font-medium text-ink-800">{reason}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Core QMS Processes"
            title="SmartEye eQMS is the all-in-one solution for your QMS"
            description="These five process groups form the foundation of a compliant, effective QMS for medical device companies."
          />

          <div className="mt-14 space-y-6">
            {qmsProcessGroups.map((group, i) => (
              <motion.div
                key={group.id}
                id={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="scroll-mt-28 grid gap-6 rounded-2xl border border-neutral-200 bg-white p-7 shadow-soft sm:grid-cols-[auto_1fr] sm:p-8"
              >
                <div className="flex sm:flex-col sm:items-center">
                  <span className="font-display text-3xl font-extrabold text-brand-200 sm:text-4xl">{group.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900">{group.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-500">{group.summary}</p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {group.processes.map((process) => (
                      <li key={process} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-400" />
                        {process}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
