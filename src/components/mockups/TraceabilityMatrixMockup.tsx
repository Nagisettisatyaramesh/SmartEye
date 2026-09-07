import { Fragment } from 'react'

const cols = ['REQ', 'RISK', 'DESIGN', 'V&V', 'CLINICAL']
const rows = [
  ['ok', 'ok', 'ok', 'ok', 'warn'],
  ['ok', 'warn', 'ok', 'ok', 'ok'],
  ['ok', 'ok', 'ok', 'warn', 'ok'],
  ['ok', 'ok', 'ok', 'ok', 'ok'],
]

const dot = {
  ok: 'bg-accent-400',
  warn: 'bg-signal-500',
}

export function TraceabilityMatrixMockup() {
  return (
    <div className="w-full max-w-[300px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-elevated">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-brand-600">Bi-Directional Traceability</p>
      <div className="grid grid-cols-[70px_repeat(5,1fr)] items-center gap-1.5 text-center">
        <div />
        {cols.map((c) => (
          <div key={c} className="text-[9px] font-bold text-neutral-400">
            {c}
          </div>
        ))}
        {rows.map((row, i) => (
          <Fragment key={i}>
            <div className="text-left text-[10px] font-semibold text-ink-800">REQ-{100 + i}</div>
            {row.map((cell, j) => (
              <div key={j} className="flex items-center justify-center py-1">
                <span className={`h-2.5 w-2.5 rounded-full ${dot[cell as 'ok' | 'warn']}`} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
