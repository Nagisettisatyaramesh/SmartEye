import { LegalPage } from '@/components/legal/LegalPage'
import { securityPolicy } from '@/data/legal'

export function SecurityPolicy() {
  return <LegalPage data={securityPolicy} />
}
