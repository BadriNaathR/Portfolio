"use client"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "accent" | "muted" | "status"
  className?: string
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-card border border-border text-secondary text-xs px-2.5 py-0.5 rounded-md",
    accent: "bg-accent/10 border border-accent/30 text-accent text-xs px-2.5 py-0.5 rounded-md",
    muted: "bg-surface border border-border-subtle text-muted text-xs px-2.5 py-0.5 rounded-md",
    status: "text-xs px-2.5 py-0.5 rounded-md border",
  }
  return (
    <span className={`inline-flex items-center font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

