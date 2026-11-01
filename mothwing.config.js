import { defineConfig } from "mothwing"

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
  minify: true,
  sitemap: true,
  activeLinks: true,
  robots: true,
  cname: true
})
