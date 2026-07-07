export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--color-text-secondary)]">
        <span>&copy; {new Date().getFullYear()} sumuzhi</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sumuzhi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="/rss.xml"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  )
}
