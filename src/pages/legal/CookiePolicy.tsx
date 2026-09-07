import { LegalPage } from '@/components/legal/LegalPage'
import { cookiePolicy } from '@/data/legal'

export function CookiePolicy() {
  return <LegalPage data={cookiePolicy} />
}
