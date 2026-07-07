import fs from 'fs'
import path from 'path'

export interface Project {
  name: string
  description: string
  url: string
  tags: string[]
  stars?: number
}

export function getAllProjects(): Project[] {
  const filepath = path.join(process.cwd(), 'data/projects.json')
  if (!fs.existsSync(filepath)) return []

  const raw = fs.readFileSync(filepath, 'utf-8')
  return JSON.parse(raw)
}
