import { ArrowRight, Award, ShieldCheck } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'

export function AboutPage() {
  return (
    <>
      <SEO
        title="Who We Are — Powered by S-Cube Technologies"
        description="SmartEye eQMS is powered by S-Cube Technologies — connecting leading innovators from the medical device and healthcare sector to the very best in specialist advice and facilities."
      />

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <Container className="relative max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
            Who we are
          </span>
          <h1 className="text-balance mt-6 text-4xl font-extrabold text-white sm:text-5xl">S-Cube Technologies</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/80">
            We are committed to bringing meaningful difference to your business, with quality solutions built from
            innovation.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-neutral-700">
            S-Cube Technologies connects leading innovators from the medical device and healthcare sector to the very
            best in specialist advice and facilities. We help forward-thinking organisations identify and access new
            markets with our software and digital solutions, all whilst offering tailored support that enhances
            business capability and innovation management.
          </p>
          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-8">
            <h2 className="text-xl font-bold text-ink-900">SmartEye eQMS: powered by S-Cube Technologies</h2>
            <p className="mt-3 leading-relaxed text-neutral-700">
              Your growth, driven by our innovation. We will help you grow your ideas by taking care of the growth,
              implementing management processes and providing you with the necessary services so you don't have to
              worry.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="Certified"
            title="Trusted, certified, accountable"
            description="You can trust us to build each step of your business with innovative solutions for your big innovation."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-ink-900">ISO 9001:2015</p>
                <p className="text-sm text-neutral-500">Quality Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-ink-900">ISO/IEC 27001:2013</p>
                <p className="text-sm text-neutral-500">Information Security Management System</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            We're ISO 9001 BSI Certified, GDPR Compliant, ISO 27001 BSI Certified.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-ink-900">Find out what SmartEye eQMS could do for your product</h2>
          <div className="mt-6">
            <Button href="/quality-management-system-qms-for-medical-devices-and-samd/" icon={<ArrowRight className="h-4 w-4" />}>
              Why SmartEye eQMS
            </Button>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
