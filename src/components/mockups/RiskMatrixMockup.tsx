const grid = [
  ['low', 'low', 'med', 'high', 'high'],
  ['low', 'low', 'med', 'med', 'high'],
  ['low', 'med', 'med', 'high', 'high'],
  ['med', 'med', 'high', 'high', 'high'],
  ['med', 'high', 'high', 'high', 'high'],
]

const shade = {
  low: 'bg-accent-300/70',
  med: 'bg-signal-500/70',
  high: 'bg-red-500/75',
}

export function RiskMatrixMockup() {
  return (
    <div className="w-full max-w-[280px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-elevated">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-brand-600">Risk Matrix</p>
      <p className="mb-3 text-[10px] text-neutral-400">Severity × Probability — ISO 14971</p>
      <div className="grid grid-cols-5 gap-1">
        {grid.flatMap((row, i) =>
          row.map((cell, j) => (
            <div key={`${i}-${j}`} className={`aspect-square rounded-[3px] ${shade[cell as 'low' | 'med' | 'high']}`} />
          )),
        )}
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px] font-medium text-neutral-400">
        <span>Probability →</span>
        <span>Severity ↑</span>
      </div>
    </div>
  )
}
