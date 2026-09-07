import { LegalPage } from '@/components/legal/LegalPage'
import { privacyPolicy } from '@/data/legal'

export function PrivacyPolicy() {
  return <LegalPage data={privacyPolicy} />
}
