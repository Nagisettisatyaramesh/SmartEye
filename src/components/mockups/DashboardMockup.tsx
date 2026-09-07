import { CheckCircle2, TrendingUp } from 'lucide-react'

const bars = [62, 78, 54, 88, 70, 95, 82]

export function DashboardMockup() {
  return (
    <div className="w-full max-w-[460px] rounded-2xl border border-white/10 bg-ink-900/95 p-5 shadow-elevated backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">Project Overview</p>
          <p className="mt-0.5 text-sm font-bold text-white">CardioSense — SaMD v2.3</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-accent-500/15 px-2.5 py-1 text-[11px] font-semibold text-accent-300">
          <CheckCircle2 className="h-3 w-3" /> Audit Ready
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: 'Requirements', value: '284', sub: 'traced' },
          { label: 'Risk Coverage', value: '96%', sub: 'mitigated' },
          { label: 'Tests Passed', value: '91%', sub: 'this cycle' },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-xl bg-white/5 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-brand-200/70">{kpi.label}</p>
            <p className="mt-1 text-lg font-bold text-white">{kpi.value}</p>
            <p className="text-[10px] text-brand-200/50">{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-white/5 p-4">
        <div className="flex items-center justify-between text-[11px] font-medium text-brand-200/70">
          <span>Verification Progress</span>
          <span className="flex items-center gap-1 text-accent-300">
            <TrendingUp className="h-3 w-3" /> +12% this sprint
          </span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-500 to-accent-400" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: 'Design Verification', pct: 100 },
          { label: 'Risk Analysis (ISO 14971)', pct: 88 },
          { label: 'Clinical Evidence Review', pct: 64 },
        ].map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex items-center justify-between text-[11px] text-brand-100/80">
              <span>{row.label}</span>
              <span>{row.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-400" style={{ width: `${row.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
