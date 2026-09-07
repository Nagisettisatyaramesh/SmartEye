export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="animate-aurora-1 absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-700/40 blur-3xl" />
      <div className="animate-aurora-2 absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-accent-500/25 blur-3xl" />
      <div className="animate-aurora-3 absolute bottom-[-15%] left-1/3 h-[460px] w-[460px] rounded-full bg-brand-400/20 blur-3xl" />
    </div>
  )
}
