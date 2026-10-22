import fs from "fs"

const PAGES = new URL("../pages/playground/", import.meta.url)

const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&quot;", "\"").replaceAll("&#39;", "'")

/**
 * @param {string} html The experiment's page
 * @param {string} name What it's called without a title of its own
 * @returns {{ title: string, description: string }} From its <x-seo>, or its <title> and description <meta> if it has none
 */
function about(html, name) {
  const seo = html.match(/<x-seo\s[^>]*>/)?.[0] ?? ""
  const attr = (key) => seo.match(new RegExp(`${key}="([^"]*)"`))?.[1]
  const title = attr("title") ?? html.match(/<title>([^<]*)<\/title>/)?.[1] ?? name
  const description = attr("description") ?? html.match(/<meta content="([^"]*)" name="description"/)?.[1] ?? ""
  return { title: decode(title), description: decode(description) }
}

/** Every playground experiment, a page each in pages/playground/. */
export default fs.readdirSync(PAGES)
  .filter((file) => file.endsWith(".html") && file !== "index.html")
  .sort()
  .map((file) => {
    const id = file.replace(/\.html$/, "")
    return { id, ...about(fs.readFileSync(new URL(file, PAGES), "utf8"), id) }
  })
