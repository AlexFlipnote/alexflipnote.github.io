import fs from "fs"

const projects = JSON.parse(fs.readFileSync(new URL("../data/projects.json", import.meta.url), "utf8"))

export const sources = ["data/projects.json"]

/** The homepage's projects with where they live. */
export default () => ({
  cards: projects.map((project) => {
    const url = new URL(project.url)
    return { ...project, where: `${url.hostname}${url.pathname}`.replace(/\/$/, "") }
  }),
  projectCount: projects.length
})
