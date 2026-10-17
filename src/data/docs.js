import fs from "fs"
import { Marked } from "marked"

const DOCS = new URL("../docs/", import.meta.url)
const FILES = fs.readdirSync(DOCS).filter((file) => file.endsWith(".md")).sort()
// Reading speed for the time it takes, in words per minute
const WPM = 200

export const sources = FILES.map((file) => `docs/${file}`)

// "{#id}" after a heading gives it that id, as Parsedown Extra did, and a link to itself so it can be shared
const marked = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens)
      const [, text, id] = html.match(/^(.*?)\s*\{#([^}\s]+)\}$/) ?? [, html]
      return id
        ? `<h${depth} id="${id}"><a style="color: #fff;" href="#${id}">${text}</a></h${depth}>\n`
        : `<h${depth}>${text}</h${depth}>\n`
    }
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

/** The docs, newest first, and the same grouped by month for /docs/. */
export default () => {
  const docs = FILES.map((file) => {
    const id = file.replace(/\.md$/, "")
    const { meta, body } = frontMatter(fs.readFileSync(new URL(file, DOCS), "utf8"))
    const html = marked.parse(body, { async: false })
    const date = new Date(meta.date)
    return {
      id,
      title: meta.title,
      description: meta.description,
      author: meta.author ?? "Guest",
      banner: meta.banner ? `/static/images/docs/${id}/${meta.banner}` : false,
      date,
      dateText: format(date, { day: "2-digit", month: "short", year: "numeric" }),
      listDate: format(date, { day: "numeric", month: "long", year: "numeric" }),
      month: format(date, { month: "long", year: "numeric" }),
      // The id the docs list gives it, so it can be linked to there
      listId: meta.title.toLowerCase().replaceAll(" ", "-"),
      readingTime: readingTime(`${meta.title} ${meta.description} ${html}`),
      html,
      sources: [`docs/${file}`]
    }
  }).sort((a, b) => b.date.getTime() - a.date.getTime())

  return {
    list: docs,
    months: [...Map.groupBy(docs, (doc) => doc.month)].map(([month, list]) => ({ month, docs: list }))
  }
}
