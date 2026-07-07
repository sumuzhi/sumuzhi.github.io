'use client'

import { useEffect, useRef } from 'react'

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || container.querySelector('script')) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'sumuzhi/sumuzhi.github.io')
    script.setAttribute('data-repo-id', 'R_kgDO_NOT_SET')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDO_NOT_SET')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', document.documentElement.classList.contains('dark') ? 'dark_dimmed' : 'light')
    script.setAttribute('data-lang', 'zh-CN')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    container.appendChild(script)
  }, [])

  return (
    <section className="mt-16 pt-8 border-t border-[var(--color-border)]">
      <h2 className="text-lg font-semibold mb-6">Comments</h2>
      <div ref={ref} />
      <p className="text-xs text-[var(--color-text-secondary)] mt-4">
        Comments powered by{' '}
        <a href="https://giscus.app" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
          Giscus
        </a>
        . To comment, enable GitHub Discussions on this repo.
      </p>
    </section>
  )
}
