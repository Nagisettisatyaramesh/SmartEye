import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import clsx from 'clsx'
import { countries } from '@/data/countries'
import { submitDemoRequest } from '@/lib/submitDemoRequest'
import { Button } from '@/components/ui/Button'

const inputClasses =
  'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-neutral-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100'

export function DemoForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()

    if (!name || !email) {
      setError('Please fill in your name and email.')
      return
    }

    setStatus('submitting')
    try {
      await submitDemoRequest({
        name,
        email,
        phone: String(form.get('phone') || ''),
        company: String(form.get('company') || ''),
        country: String(form.get('country') || ''),
        requirement: String(form.get('requirement') || ''),
      })
      setStatus('success')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent-200 bg-accent-50 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-600" />
        <h3 className="mt-4 text-lg font-bold text-ink-900">Thanks — we've got your request</h3>
        <p className="mt-2 max-w-xs text-sm text-neutral-600">
          A member of the SmartEye team will be in touch shortly to arrange your tailored demo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={clsx('grid gap-4', !compact && 'sm:grid-cols-2')} noValidate>
      <input name="name" type="text" required placeholder="your Name" className={inputClasses} autoComplete="name" />
      <input name="email" type="email" required placeholder="your Email" className={inputClasses} autoComplete="email" />
      <input name="phone" type="text" placeholder="Phone Number" className={inputClasses} autoComplete="tel" />
      <input name="company" type="text" placeholder="Company Name" className={inputClasses} autoComplete="organization" />
      <select name="country" defaultValue="" className={clsx(inputClasses, !compact && 'sm:col-span-2', 'appearance-none')}>
        <option value="" disabled>
          Country
        </option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <textarea
        name="requirement"
        placeholder="Your Requirement"
        rows={3}
        className={clsx(inputClasses, !compact && 'sm:col-span-2', 'resize-none')}
      />

      {error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p>}

      <p className={clsx('text-xs text-neutral-500', !compact && 'sm:col-span-2')}>
        Please review our{' '}
        <a href="/privacy-policy/" className="font-semibold text-brand-700 hover:underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms-and-conditions/" className="font-semibold text-brand-700 hover:underline">
          Terms of Use.
        </a>
      </p>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className={clsx('w-full', !compact && 'sm:col-span-2')}
        icon={status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
      >
        {status === 'submitting' ? 'Sending…' : 'Get a Demo'}
      </Button>
    </form>
  )
}
