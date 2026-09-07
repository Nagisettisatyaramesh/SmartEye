import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/App'

const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })))
const PlatformPage = lazy(() => import('@/pages/PlatformPage').then((m) => ({ default: m.PlatformPage })))
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage })))
const ResourceArticlePage = lazy(() =>
  import('@/pages/ResourceArticlePage').then((m) => ({ default: m.ResourceArticlePage })),
)
const CareersPage = lazy(() => import('@/pages/CareersPage').then((m) => ({ default: m.CareersPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const PrivacyPolicy = lazy(() => import('@/pages/legal/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })))
const TermsAndConditions = lazy(() =>
  import('@/pages/legal/TermsAndConditions').then((m) => ({ default: m.TermsAndConditions })),
)
const CookiePolicy = lazy(() => import('@/pages/legal/CookiePolicy').then((m) => ({ default: m.CookiePolicy })))
const QualityPolicy = lazy(() => import('@/pages/legal/QualityPolicy').then((m) => ({ default: m.QualityPolicy })))
const SecurityPolicy = lazy(() => import('@/pages/legal/SecurityPolicy').then((m) => ({ default: m.SecurityPolicy })))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: withSuspense(<HomePage />) },
      { path: '/quality-management-system-qms-for-medical-devices-and-samd/', element: withSuspense(<PlatformPage />) },
      { path: '/powered-by-s-cube/', element: withSuspense(<AboutPage />) },
      { path: '/resources/', element: withSuspense(<ResourcesPage />) },
      { path: '/category/jobs/', element: withSuspense(<CareersPage />) },
      { path: '/contact/', element: withSuspense(<ContactPage />) },
      { path: '/privacy-policy/', element: withSuspense(<PrivacyPolicy />) },
      { path: '/terms-and-conditions/', element: withSuspense(<TermsAndConditions />) },
      { path: '/website-cookie-policy/', element: withSuspense(<CookiePolicy />) },
      { path: '/quality-policy/', element: withSuspense(<QualityPolicy />) },
      { path: '/security-policy/', element: withSuspense(<SecurityPolicy />) },
      { path: '/:slug/', element: withSuspense(<ResourceArticlePage />) },
      { path: '*', element: withSuspense(<NotFoundPage />) },
    ],
  },
])
