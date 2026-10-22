import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { asset } from "mothwing"
import { Marked } from "marked"

const DOCS = fileURLToPath(new URL("../docs/", import.meta.url))
const WPM = 200

// A doc is docs/<id>.md, or docs/<id>/index.md with its images and other files next to it
const ENTRIES = fs.readdirSync(DOCS, { withFileTypes: true }).flatMap((entry) => {
  if (entry.isFile() && entry.name.endsWith(".md")) return [{ id: entry.name.slice(0, -3), file: entry.name, files: [] }]

  const folder = path.join(DOCS, entry.name)
  if (!entry.isDirectory() || !fs.existsSync(path.join(folder, "index.md"))) return []
  const files = fs.readdirSync(folder, { recursive: true, withFileTypes: true })
    .filter((file) => file.isFile())
    .map((file) => path.relative(folder, path.join(file.parentPath, file.name)).replaceAll("\\", "/"))
    .filter((file) => file !== "index.md")
  return [{ id: entry.name, file: `${entry.name}/index.md`, files }]
}).sort((a, b) => a.id.localeCompare(b.id))

export const sources = ENTRIES.flatMap(({ id, file, files }) => [`docs/${file}`, ...files.map((name) => `docs/${id}/${name}`)])

/**
 * @param {string} href As the Markdown has it: "screenshot.png", "./images/a b.png"
 * @returns {string} "screenshot.png", "images/a b.png"
 */
const localPath = (href) => decodeURI(href.replace(/^\.\//, ""))

/**
 * @param {Map<string, import("mothwing").Asset>} assets The doc's own files, by their path next to it
 * @returns {Marked}
 */
const markdown = (assets) => new Marked({
  renderer: {
    // "{#id}" after a heading gives it that id, as Parsedown Extra did, and makes it a link to itself so it can be shared
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens)
      const [, text, id] = html.match(/^(.*?)\s*\{#([^}\s]+)\}$/) ?? [, html]
      return id
        ? `<h${depth} id="${id}"><a class="heading-link" href="#${id}">${text}</a></h${depth}>\n`
        : `<h${depth}>${text}</h${depth}>\n`
    }
  },
  // An image or link to one of the doc's own files points at it in the build
  walkTokens(token) {
    if (token.type !== "image" && token.type !== "link") return
    const file = assets.get(localPath(token.href))
    if (file) token.href = file.url
  }
})

/**
 * @param {string} text The Markdown, starting with its details between "---" lines, `key: value` each
 * @returns {{ meta: Record<string, string>, body: string }}
 */
function frontMatter(text) {
  const [, head = "", body = text] = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/) ?? []
  const meta = Object.fromEntries(head.split(/\r?\n/).filter(Boolean).map((line) => {
    const at = line.indexOf(":")
    return [line.slice(0, at).trim(), line.slice(at + 1).trim()]
  }))
  return { meta, body }
}

/**
 * @param {Date} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
const format = (date, options) => date.toLocaleDateString("en-GB", { ...options, timeZone: "UTC" })

/**
 * @param {string} text
 * @returns {string} "4 min read", "a couple of secs" for less than half a minute
 */
function readingTime(text) {
  const words = text.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length
  const minutes = Math.round(words / WPM)
  return minutes < 1 ? "a couple of secs" : `${minutes} min read`
}

export default () => {
  const docs = ENTRIES.map(({ id, file, files }) => {
    // Written to the build next to the doc's page, at /docs/<id>/
    const assets = new Map(files.map((name) => [name, asset(`docs/${id}/${name}`, fs.readFileSync(path.join(DOCS, id, name)))]))
    const { meta, body } = frontMatter(fs.readFileSync(path.join(DOCS, file), "utf8"))
    const html = markdown(assets).parse(body, { async: false })
    const date = new Date(meta.date)
    return {
      id,
      title: meta.title,
      description: meta.description,
      author: meta.author ?? "Guest",
      date,
      dateText: format(date, { day: "2-digit", month: "short", year: "numeric" }),
      listDate: format(date, { day: "numeric", month: "long", year: "numeric" }),
      month: format(date, { month: "long", year: "numeric" }),
      listId: meta.title.toLowerCase().replaceAll(" ", "-"),
      readingTime: readingTime(`${meta.title} ${meta.description} ${html}`),
      html,
      assets: [...assets.values()],
      sources: [`docs/${file}`, ...files.map((name) => `docs/${id}/${name}`)]
    }
  }).sort((a, b) => b.date.getTime() - a.date.getTime())

  return {
    list: docs,
    months: [...Map.groupBy(docs, (doc) => doc.month)].map(([month, list]) => ({ month, docs: list }))
  }
}
