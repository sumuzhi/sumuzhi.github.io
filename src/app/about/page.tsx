export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <div className="space-y-6 text-[var(--color-text-secondary)]">
        <p>
          Hi, I&apos;m sumuzhi — a frontend developer passionate about building
          great user experiences on the web. I enjoy working with React,
          TypeScript, and the modern JavaScript ecosystem.
        </p>

        <p>
          I work on a variety of projects — from admin dashboards to educational
          platforms and developer tools. I&apos;m always exploring new ideas and
          learning new technologies.
        </p>

        <section className="pt-4">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
              'HTML', 'CSS', 'Tailwind CSS', 'Git', 'WeChat Mini Program',
            ].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="pt-4">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">Contact</h2>
          <ul className="space-y-1">
            <li>
              GitHub:{' '}
              <a
                href="https://github.com/sumuzhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:underline"
              >
                @sumuzhi
              </a>
            </li>
            <li>
              Email:{' '}
              <a
                href="mailto:su_muzhi@163.com"
                className="text-[var(--color-accent)] hover:underline"
              >
                su_muzhi@163.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
