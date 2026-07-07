import { getAllPosts, getAllTags } from '@/lib/posts'
import BlogList from '@/components/BlogList'

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        Thoughts on frontend, JavaScript, and building things.
      </p>

      <BlogList posts={posts} tags={tags} />
    </div>
  )
}
