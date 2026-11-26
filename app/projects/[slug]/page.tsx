import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Lock, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/ui/Icons"
import { projects } from "@/data/projects"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.name, description: project.tagline }
}

const statusBadgeClass: Record<string, string> = {
  production:       "badge badge-green",
  "in-development": "badge badge-blue",
  internal:         "badge badge-yellow",
  prototype:        "badge badge-purple",
  hackathon:        "badge badge-green",
}
// "hackathon" intentionally omitted from statusLabel — falls back to project.statusLabel
const statusLabel: Record<string, string> = {
  production:       "Production",
  "in-development": "In Development",
  internal:         "Internal",
  prototype:        "Prototype",
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
        <div className="proj-detail-header">
          <div className="wrap">
            <Link href="/#projects" className="proj-detail-back">
              <ArrowLeft size={14} />
              Back to Projects
            </Link>

            <div className="proj-detail-badges">
              <span className={statusBadgeClass[project.status] ?? "badge"}>
                {statusLabel[project.status] ?? project.statusLabel}
              </span>
              <span className="chip">{project.category}</span>
              {project.confidential && (
                <span className="badge badge-lock">
                  <Lock size={10} />
                  Confidential
                </span>
              )}
            </div>

            <h1 className="proj-detail-h1">{project.name}</h1>
            <p className="proj-detail-tagline">{project.tagline}</p>

            <div className="proj-detail-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>

            {(project.github || project.demo) && (
              <div className="proj-detail-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 13 }}>
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="proj-detail-body">
          <div className="wrap">
            {project.confidential && (
              <div className="proj-confidential">
                <Lock size={16} className="proj-confidential-icon" />
                <p>
                  This is an internal enterprise application developed at {project.org}. Source code, proprietary architecture details, and internal URLs are not publicly available.
                </p>
              </div>
            )}

            <div className="proj-section">
              <h2 className="proj-section-title">Overview</h2>
              <p>{project.overview}</p>
            </div>

            <div className="proj-section">
              <h2 className="proj-section-title">Problem Statement</h2>
              <p>{project.problemStatement}</p>
            </div>

            <div className="proj-section">
              <h2 className="proj-section-title">Key Engineering Features</h2>
              <ul className="proj-bullets">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="proj-section">
              <h2 className="proj-section-title">System Architecture</h2>
              <div className="proj-arch-box">
                {project.architectureNotes.trim().startsWith("TODO") ? (
                  <p className="todo">{project.architectureNotes}</p>
                ) : (
                  <pre>{project.architectureNotes.trim()}</pre>
                )}
              </div>
            </div>

            <div className="proj-section">
              <h2 className="proj-section-title">Challenges &amp; Solutions</h2>
              {project.challenges.map((c, i) => (
                <div key={i} className="proj-challenge-card">
                  <div className="proj-challenge-title">{c.title}</div>
                  <div className="proj-challenge-solution">{c.solution}</div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--brd)", paddingTop: 32, marginTop: 48 }}>
              <Link href="/#projects" className="proj-detail-back">
                <ArrowLeft size={14} />
                Back to all projects
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
