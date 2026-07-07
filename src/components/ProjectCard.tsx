import Link from 'next/link'

interface Project {
  name: string
  description: string
  url: string
  tags: string[]
  stars?: number
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-colors group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
          {project.name}
        </h3>
        {project.stars !== undefined && (
          <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {project.stars}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
