import { defineConfig } from "mothwing"

export default defineConfig({
  domain: "alexflipnote.dev",
  // The docs' Markdown, which data/docs.js turns into their pages
  exclude: ["docs"],
  seo: {
    siteName: "AlexFlipnote",
    locale: "en_GB",
    image: { src: "/static/images/branding/avatar.png", width: 500, height: 500, alt: "AlexFlipnote's avatar" }
  },
  minify: true,
  sitemap: true,
  robots: true,
  cname: true
})
