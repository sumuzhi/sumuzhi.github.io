import { getAllPosts } from '@/lib/posts'
import { getAllProjects } from '@/lib/projects'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

export default function Home() {
  const projects = getAllProjects()
  const posts = getAllPosts().slice(0, 5)

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Hero />

      {projects.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Latest Posts</h2>
          {posts.length >= 5 && (
            <Link
              href="/blog"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              View all &rarr;
            </Link>
          )}
        </div>
        {posts.length > 0 ? (
          <div>
            {posts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--color-text-secondary)]">
            No posts yet. Check back soon.
          </p>
        )}
      </section>
    </div>
  )
}
