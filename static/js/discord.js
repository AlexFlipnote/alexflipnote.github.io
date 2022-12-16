const Status = {
  online: "57F287",
  idle: "FEE75C",
  dnd: "ED4245",
  offline: "747f8d",
}

class Spotify {
  constructor(data) {
    this.is_playing = data.is_playing
    this.title = data.title
    this.artist = data.artist
    this.album = data.album
    this.url = data.url
    this.image_url = data.image_url
    this.started_at = data.started_at
    this.ending_at = data.ending_at
  }
}

class UserInfo {
  constructor(user_id) {
    this.user_id = user_id
    this.name = null
    this.discriminator = null
    this.avatar = null
    this.spotify = null
    this.activities = null
  }

  async fetch() {
    const data = await fetch(`https://api.alexflipnote.dev/discord/${this.user_id}`).then(
      res => res.json()
    )

    this.name = data.name
    this.discriminator = data.discriminator
    this.avatar = data.avatar
    this.status = data.status
    this.activities = data.activities
    this.spotify = new Spotify(data.spotify)

    return this
  }

  status_hex() {
    return Status[this.status.priority.status]
  }

  status_text() {
    // Loop through activities
    for (let activity of this.activities) {
      if (activity.name === "Spotify") continue
      if (activity.type === 4) continue
      return `Playing: ${activity.name}`
    }
  }

  avatar_url() {
    let gif_or_png = this.avatar.startsWith("a_") ? "gif" : "png"
    return `https://cdn.discordapp.com/avatars/${this.user_id}/${this.avatar}.${gif_or_png}`
  }
}
