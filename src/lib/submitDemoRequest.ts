export type DemoRequestPayload = {
  name: string
  email: string
  phone: string
  company: string
  country: string
  requirement: string
}

/**
 * Single integration seam for the "Get a Demo" form.
 * This rebuild has no backend of its own (the original WordPress site's
 * PHP handler isn't part of this frontend). Wire this up to whatever
 * backend/CRM/email service is chosen — e.g. a fetch() to an API route,
 * a hosted form endpoint, or a serverless function.
 */
export async function submitDemoRequest(payload: DemoRequestPayload): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.info('[submitDemoRequest] stub submission', payload)
  return { ok: true }
}

export type ContactMessagePayload = {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

/**
 * Single integration seam for the Contact page's general enquiry form
 * (distinct from the "Get a Demo" form — the live site uses a separate,
 * simpler Contact Form 7 form here: Name, Email, Phone, Company, Message).
 */
export async function submitContactMessage(payload: ContactMessagePayload): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.info('[submitContactMessage] stub submission', payload)
  return { ok: true }
}
