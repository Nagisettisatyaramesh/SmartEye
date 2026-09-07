import { LegalPage } from '@/components/legal/LegalPage'
import { termsAndConditions } from '@/data/legal'

export function TermsAndConditions() {
  return <LegalPage data={termsAndConditions} />
}
