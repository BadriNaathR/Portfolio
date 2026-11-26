interface SectionLabelProps {
  index: string
  label: string
  className?: string
}

export function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-12 ${className}`}>
      <span className="text-muted text-sm font-mono">— {index}</span>
      <span className="text-muted text-sm font-medium tracking-widest uppercase">{label}</span>
    </div>
  )
}

