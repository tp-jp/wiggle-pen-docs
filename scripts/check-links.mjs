import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../docs/.vitepress/dist/', import.meta.url))
const base = '/wiggle-pen-docs/'
const origin = 'https://tp-jp.github.io'
const errors = []

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(entry => {
    const target = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(target) : [target]
  }))
  return files.flat()
}

const files = await walk(root)
const htmlFiles = files.filter(file => file.endsWith('.html'))
const pages = new Map(await Promise.all(htmlFiles.map(async file => [file, await readFile(file, 'utf8')])))
let checked = 0

for (const [file, html] of pages) {
  const relative = path.relative(root, file).split(path.sep).join('/')
  const pageUrl = new URL(base + relative, origin)
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&')
    const url = new URL(value, pageUrl)
    if (url.origin !== origin) continue
    if (!url.pathname.startsWith(base)) {
      errors.push(`${relative}: サブパス外の参照 ${value}`)
      continue
    }
    let target = path.join(root, decodeURIComponent(url.pathname.slice(base.length)))
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html')
      await stat(target)
    } catch {
      errors.push(`${relative}: 存在しないリンクまたはアセット ${value}`)
      continue
    }
    checked++
    if (url.hash && pages.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1))
      const targetHtml = pages.get(target)
      if (!targetHtml.includes(`id="${id}"`)) {
        errors.push(`${relative}: 存在しない見出し ${value}`)
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`${htmlFiles.length} HTMLページ、${checked}件の内部リンク・アセット参照を確認しました（base: ${base}）。`)
}
