import { defineConfig } from "mothwing"

/**
 * The navbar's path to the page, /home/alexflipnote/docs/create_ssh_key.md, every folder on the way a link.
 * @param {{ route: { url: string } }} tag
 * @returns {string}
 */
function path({ route }) {
  const parts = route.url.split("/").filter(Boolean)
  if (parts[0] === "docs" && parts.length === 2) parts[1] += ".md"

  const home = parts.length
    ? `<a class="blue-raspberry-text" href="/">alexflipnote</a>`
    : `<span class="blue-raspberry-text">alexflipnote</span>`

  return [
    "/home",
    home,
    ...parts.map((part, i) => i === parts.length - 1 ? part : `<a href="/${parts.slice(0, i + 1).join("/")}/">${part}</a>`)
  ].join("/")
}

export default defineConfig({
  domain: "alexflipnote.dev",
  exclude: ["docs"],
  sass: {
    "static/css/custom.scss": "static/css/custom.css",
    "static/css/playground.scss": "static/css/playground.css",
    "playground/hexclock/style.scss": "playground/hexclock/style.css",
    "playground/keepscreenon/style.scss": "playground/keepscreenon/style.css",
    "playground/spooky/style.scss": "playground/spooky/style.css"
  },
  seo: {
    siteName: "AlexFlipnote",
    locale: "en_GB",
    image: { src: "/static/images/branding/avatar.png", width: 500, height: 500, alt: "AlexFlipnote's avatar" }
  },
  tags: { "x-path": path },
  minify: true,
  sitemap: true,
  activeLinks: true,
  robots: true,
  cname: true
})
