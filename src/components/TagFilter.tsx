'use client'

interface TagFilterProps {
  tags: string[]
  selected: string | null
  onSelect: (tag: string | null) => void
}

export default function TagFilter({ tags, selected, onSelect }: TagFilterProps) {
  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5 mb-8">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 text-xs rounded-full border transition-colors ${
          selected === null
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
        }`}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
            selected === tag
              ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
              : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
