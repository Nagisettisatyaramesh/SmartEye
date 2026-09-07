import { ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="flex min-h-[60vh] items-center bg-white py-24">
        <Container className="max-w-lg text-center">
          <p className="font-display text-6xl font-extrabold text-brand-200">404</p>
          <h1 className="mt-4 text-2xl font-bold text-ink-900">Page not found</h1>
          <p className="mt-3 text-neutral-600">The page you're looking for doesn't exist or may have moved.</p>
          <div className="mt-8">
            <Button href="/" icon={<ArrowLeft className="h-4 w-4" />}>
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
