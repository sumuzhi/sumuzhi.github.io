'use client'

import { useState, useMemo } from 'react'
import BlogCard from './BlogCard'
import TagFilter from './TagFilter'

interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
}

export default function BlogList({ posts, tags }: { posts: Post[]; tags: string[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag
    ? posts.filter(p => p.tags.includes(selectedTag))
    : posts

  return (
    <>
      <TagFilter tags={tags} selected={selectedTag} onSelect={setSelectedTag} />

      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-[var(--color-text-secondary)] py-12 text-center">
          {selectedTag ? `No posts tagged "${selectedTag}".` : 'No posts yet.'}
        </p>
      )}
    </>
  )
}
