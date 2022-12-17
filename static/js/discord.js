class UserInfo {
  constructor(user_id) {
    this.user_id = user_id
    this.data = null
  }

  async fetch() {
    const data = await fetch(`https://api.alexflipnote.dev/discord/${this.user_id}`)
      .then( res => res.json() )

    this.data = data
    return this
  }

  status_hex() {
    const status_table = {
      online: "57F287", idle: "FEE75C",
      dnd: "ED4245", offline: "747f8d",
    }

    return status_table[this.data.status.priority.status]
  }

  status_text() {
    for (let g of this.data.activities) {
      if (g.name === "Spotify") continue
      if (g.type === 4) continue
      return `Playing: ${g.name}`
    }
  }

  avatar_url() {
    const gif_or_png = this.data.avatar.startsWith("a_") ? "gif" : "png"
    return `https://cdn.discordapp.com/avatars/${this.user_id}/${this.data.avatar}.${gif_or_png}`
  }
}

async function paste_discord_info() {
  const discord_loading = document.getElementById("discord-status-loading")
  const discord_avatar = document.getElementById("discord-avatar")
  const discord_status = document.getElementById("discord-status")
  const discord_status_name = document.getElementById("discord-status-name")
  const discord_spotify = document.getElementById("discord-spotify")
  const discord_status_circle = document.getElementById("discord-status-circle")
  const spotify_image = document.getElementById("spotify-image")
  const spotify_title = document.getElementById("spotify-title")
  const spotify_url = document.getElementById("spotify-url")
  if (!discord_avatar) return

  const discord = await new UserInfo("86477779717066752").fetch()

  discord_loading.style.display = "none"
  discord_avatar.src = discord.avatar_url()
  discord_status_circle.style.backgroundColor = `#${discord.status_hex()}`

  if (discord.data.spotify.is_playing) {
    discord_status.style.display = "none"
    discord_spotify.style.display = "flex"
    spotify_image.src = discord.data.spotify.image_url
    spotify_title.innerText = `Listening to spotify:\n${discord.data.spotify.title}`
    spotify_title.style.color = `#${discord.status_hex()}`
    spotify_url.href = discord.data.spotify.url
  } else {
    discord_spotify.style.display = "none"
    discord_status.style.display = "block"
    discord_status_name.style.color = `#${discord.status_hex()}`

    if (discord.status_text()) discord_status_name.innerText = `${discord.status_text()}`
    else discord_status_name.innerText = `Not doing anything`
  }
}
