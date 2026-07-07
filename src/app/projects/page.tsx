import { getAllProjects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        Things I&apos;ve built and worked on.
      </p>

      {projects.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-[var(--color-text-secondary)] py-12 text-center">
          Project list coming soon.
        </p>
      )}
    </div>
  )
}
