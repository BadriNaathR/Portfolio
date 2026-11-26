import { ProjectCard } from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="sec-label">02 &nbsp; Projects</div>
        <div className="proj-header">
          <h2>Selected Work</h2>
          <p>Enterprise AI applications, independent engineering projects, and award-winning hackathon builds.</p>
        </div>
        <div className="proj-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
