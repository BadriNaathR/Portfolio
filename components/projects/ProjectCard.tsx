import Link from "next/link"
import { ArrowUpRight, Lock } from "lucide-react"
import type { Project } from "@/data/projects"

const statusBadgeClass: Record<string, string> = {
  production:      "badge badge-green",
  "in-development":"badge badge-blue",
  internal:        "badge badge-yellow",
  prototype:       "badge badge-purple",
  hackathon:       "badge badge-green",
}
// "hackathon" intentionally omitted — falls back to project.statusLabel
const statusLabel: Record<string, string> = {
  production:      "Production",
  "in-development":"In Development",
  internal:        "Internal",
  prototype:       "Prototype",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="proj-card">
      <div className="proj-card-top">
        <div>
          <div className="proj-cat">{project.category}</div>
          <div className="proj-name">{project.name}</div>
        </div>
        <div className="proj-badges">
          <span className={statusBadgeClass[project.status] ?? "badge"}>
            {statusLabel[project.status] ?? project.statusLabel}
          </span>
          {project.confidential && (
            <span className="badge badge-lock">
              <Lock size={10} />
              Confidential
            </span>
          )}
        </div>
      </div>

      <div className="proj-desc">{project.tagline}</div>

      <div className="proj-stack">
        {project.techStack.slice(0, 5).map((tech) => (
          <span key={tech} className="chip">{tech}</span>
        ))}
        {project.techStack.length > 5 && (
          <span className="chip">+{project.techStack.length - 5}</span>
        )}
      </div>

      <div className="proj-footer">
        <Link href={`/projects/${project.slug}`}>
          View Case Study
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  )
}
