import { useMemo } from 'react'

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw.trim() }

  const data = {}
  match[1].split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    if (key) data[key] = val
  })

  return { data, content: match[2].trim() }
}

export function useProjects() {
  return useMemo(() => {
    const modules = import.meta.glob('../projects/*.md', {
      query: '?raw',
      import: 'default',
      eager: true,
    })

    return Object.entries(modules)
      .map(([path, raw]) => {
        const { data, content } = parseFrontmatter(raw)
        const slug = path.split('/').pop().replace('.md', '')
        return { slug, content, ...data }
      })
      .sort((a, b) => Number(a.order ?? 99) - Number(b.order ?? 99))
  }, [])
}
