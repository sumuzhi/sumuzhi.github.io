---
title: "Building a Blog with Next.js"
date: 2024-06-15
tags: ["Next.js", "React", "Tutorial"]
excerpt: "How I built this blog using Next.js static export, markdown posts, and Tailwind CSS."
---

# Building a Blog with Next.js

This blog is built with **Next.js** and deployed to **GitHub Pages**. Here's a quick overview of the stack and design choices.

## Tech Stack

- **Next.js** — static export mode (`output: 'export'`), no server needed
- **Tailwind CSS** — utility-first styling with dark mode support
- **Markdown** — all posts are `.md` files with YAML frontmatter
- **Decap CMS** — optional git-based CMS at `/admin/`

## How it works

### Static export

Next.js builds all pages to static HTML at build time:

```js
// next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true },
}
```

### Reading markdown posts

Posts live in `content/blog/` as `.md` files. At build time, `gray-matter` parses the frontmatter and content:

```ts
import matter from 'gray-matter'

const { data, content } = matter(rawMarkdown)
// data = { title, date, tags, excerpt }
// content = markdown body
```

### Dark mode

Theme state persists in `localStorage` with a flash-prevention script:

```js
// Inline before paint — prevents FOUC
(function() {
  var t = localStorage.getItem('theme')
  if (t === 'dark') document.documentElement.classList.add('dark')
})()
```

## Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the site and deploys to the `gh-pages` branch. GitHub Pages serves it at `sumuzhi.github.io`.

## What's next

- [x] Basic blog with markdown
- [x] Dark/light theme
- [ ] RSS feed
- [ ] Comments with Giscus
- [ ] Decap CMS integration

Happy coding! 🚀
