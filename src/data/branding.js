/**
 * @param {string} name The file's name in static/images/branding/
 * @param {string} label
 * @param {string[]} [formats] The ones it can be downloaded as, the first is the one shown
 * @returns {object}
 */
const image = (name, label, formats = ["png"]) => ({ name, label, src: `${name}.${formats[0]}`, formats })

const XELA_SEASONS = {
  xela_winter: "Winter",
  xela_spring: "Spring",
  xela_summer: "Summer",
  xela_autumn: "Autumn",
  xela_default: "Default",
  xela_halloween: "Halloween",
  xela_christmas: "Christmas",
  xela_birthday: "Birthday",
  xela_easter: "Easter",
  xela_newyear: "New Year",
  xela_pride: "Pride",
  xela_stpatricks: "St. Patrick's",
  xela_valentines: "Valentine's"
}

const xela = Object.entries(XELA_SEASONS).map(([name, season]) => image(name, `xelA: ${season}`))

/** The branding page's images. */
export default {
  avatars: [image("avatar_full", "Full body"), image("avatar", "1:1 avatar version")],
  xela
}
