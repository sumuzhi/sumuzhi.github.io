import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block py-4 group border-b border-[var(--color-border)] last:border-b-0"
    >
      <div className="flex items-baseline gap-3 mb-1">
        <time className="text-xs text-[var(--color-text-secondary)] shrink-0 tabular-nums">
          {post.date}
        </time>
        <h3 className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
          {post.title}
        </h3>
      </div>
      {post.excerpt && (
        <p className="text-sm text-[var(--color-text-secondary)] ml-[calc(7rem+0.75rem)] line-clamp-1">
          {post.excerpt}
        </p>
      )}
      <div className="flex flex-wrap gap-1 ml-[calc(7rem+0.75rem)] mt-1.5">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
