import { FileText, CheckCircle2, Clock, PenTool } from 'lucide-react'

const steps = [
  { label: 'Drafted', icon: FileText, state: 'done' },
  { label: 'Reviewed', icon: CheckCircle2, state: 'done' },
  { label: 'Approving', icon: PenTool, state: 'active' },
  { label: 'Released', icon: Clock, state: 'pending' },
]

export function DocumentWorkflowMockup() {
  return (
    <div className="w-full max-w-[320px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-elevated">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-brand-600">DHF-014 · Design Verification Protocol</p>
      <div className="flex items-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                  step.state === 'done'
                    ? 'border-accent-500 bg-accent-500 text-white'
                    : step.state === 'active'
                      ? 'border-brand-600 bg-brand-50 text-brand-600'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-300'
                }`}
              >
                <step.icon className="h-3.5 w-3.5" />
              </div>
              <span className="text-[9px] font-medium text-neutral-500">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-1 h-0.5 flex-1 ${step.state === 'done' ? 'bg-accent-400' : 'bg-neutral-200'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
