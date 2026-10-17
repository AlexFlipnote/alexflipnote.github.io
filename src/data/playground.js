import fs from "fs"

/** Every playground experiment, a page each in pages/playground/. */
export default fs.readdirSync(new URL("../pages/playground/", import.meta.url))
  .filter((file) => file.endsWith(".html") && file !== "index.html")
  .map((file) => file.replace(/\.html$/, ""))
  .sort()
