import { SEO } from '@/components/ui/SEO'
import { Hero } from '@/components/sections/Hero'
import { ValueProps } from '@/components/sections/ValueProps'
import { PlatformOverview } from '@/components/sections/PlatformOverview'
import { WorkflowVisualization } from '@/components/sections/WorkflowVisualization'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SecuritySection } from '@/components/sections/SecuritySection'
import { RoleSwitcher } from '@/components/sections/RoleSwitcher'
import { AnalyticsShowcase } from '@/components/sections/AnalyticsShowcase'
import { GlobalCollaboration } from '@/components/sections/GlobalCollaboration'
import { FAQ } from '@/components/sections/FAQ'
import { ResourcesPreview } from '@/components/sections/ResourcesPreview'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <SEO
        title="Best eQMS for Medical Devices & SaMD Compliance"
        description="SmartEye eQMS connects quality, compliance, risk, design controls and traceability in one intelligent platform built for medical device and SaMD teams."
      />
      <Hero />
      <ValueProps />
      <PlatformOverview />
      <WorkflowVisualization />
      <ComplianceSection />
      <SecuritySection />
      <RoleSwitcher />
      <AnalyticsShowcase />
      <GlobalCollaboration />
      <FAQ />
      <ResourcesPreview />
      <CTA />
    </>
  )
}
