import React from "react"

import Head from "/src/components/Head"
import Footer from "/src/components/Footer"
import IndexButton from "/src/components/indexButton"
import IndexInfo from "/src/components/indexInfo"


export default class Index extends React.Component {
  scrollTo(get_id) {
    // Thanks Bowser65 <3
    if (typeof document === "undefined") return
    let id = get_id.replace("#", "")
    const el = document.getElementById(id)
    el.scrollIntoView({behavior: "smooth", inline: "nearest"})
    history.pushState(null, null, `#${id}`)
  }

  getTimeCoded() {
    let years_since = new Date("2015-08-01").getTime()
    let today = new Date().getTime()

    let ms = today - years_since
    let m = Math.floor(ms / 60000)
    let h = Math.floor(m / 60)
    let d = Math.floor(h / 24)
    let y = Math.floor(d / 365)

    return `${y} years`
  }

  render() {
    return (
      <>
        <Head
          title="AlexFlipnote"
          description="My personal homepage"
        />
        <main className="next-body">
          <div className="fullscreen">
            <div style={{ backgroundImage: "url('./images/background.jpg')" }} className="background"></div>
            <div className="center-object">
              <div className="container">
                <section className="me unset">
                  <div className="avatar-container"><img draggable="false" src="./images/profile.png" className="image-title"/></div>
                  <div className="unset">
                    <h1 className="title monospace">AlexFlipnote</h1>
                    <p className="undertitle monospace"><i className="emoji norway"></i> I do coding, yes.</p>
                  </div>
                </section>
                <div className="buttons">
                  <IndexButton href="https://discord.gg/DpxkY3x" class="discord-dropshadow white-text" text="Discord" />
                  <IndexButton href="https://github.com/AlexFlipnote" class="github-dropshadow white-text" text="GitHub" />
                  <IndexButton href="https://twitter.com/AlexFlipnote" class="twitter-dropshadow white-text" text="Twitter" />
                  <IndexButton href="/branding" class="sun-flower-dropshadow black-text" text="Branding" />
                  <IndexButton href="https://typing.alexflipnote.dev/" class="alizarin-dropshadow white-text" text="Typing test" />
                  <IndexButton href="mailto:root@alexflipnote.dev" class="emerald-dropshadow white-text" text="Email" />
                </div>
              </div>
            </div>
            <span onClick={() => this.scrollTo("information")} className="info-button">
              <div id="fade" className="arrow bounce">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.32 291.98" className="white-fill">
                  <path d="M466.5,15.5L466,15c-19.8-19.8-52-19.8-71.9,0L240.8,168.3L87.2,14.8C67.4-5,35.2-5,15.4,14.8l-0.5,0.5 C-5,35.2-5,67.4,14.8,87.2l186.6,186.6c0.9,1,1.8,2,2.7,3v0c3.8,3.8,8.1,6.9,12.7,9.3c17,9,38.1,7.7,53.9-3.9 c2.2-1.6,4.4-3.4,6.4-5.4L466.5,87.4C486.4,67.6,486.4,35.4,466.5,15.5z"></path>
                </svg>
              </div>
            </span>
          </div>
          <section id="information" className="container">
            <div className="box-container">
              <h1 className="title emerald-text"><i className="emoji alexcoffee"></i> Information:</h1>
              <div className="info-container">
                <p>
                  Hello, my name is <span emerald-text="emerald-text">Alex</span>, but known as <span emerald-text="emerald-text">AlexFlipnote</span>
                  over the internet. I&#39;m a developer that spends time coding scripts and building websites.
                  Been coding for around <span id="years-of-coding" className="sun-flower-text">{this.getTimeCoded()}</span> now
                  and still on the road to learn more. Current coding languages I know fair enough are
                  <span className="emerald-text">HTML, CSS, SCSS, JavaScript, Python</span> and <span className="emerald-text">SQL</span>
                </p>
              </div>
            </div>
            <div className="box-container">
              <h1 className="title emerald-text"><i className="emoji alexnoted"></i> Projects:
              </h1>
              <div className="info_container">
                <IndexInfo href="https://alexflipnote.dev/homepage" name="AlexFlipnote/homepage" desc="website that can be used as a personal start page with clock and date." />
                <IndexInfo href="https://github.com/AlexFlipnote/CoffeeAPI" name="CoffeeAPI" desc="simple, yet powerful API providing random images." />
                <IndexInfo href="https://github.com/AlexFlipnote/diskspace" name="diskspace" desc="making it possible to use Linux df & du command on Windows" />
                <IndexInfo href="https://github.com/xelA/discord_bot.py" name="discord_bot.py" desc="a simple discord bot that helps you get started within discord.py" />
                <IndexInfo href="https://github.com/AlexFlipnote/Modesta" name="Modesta" desc="a responsive CSS framework with built-in dark and light theme" />
                <IndexInfo href="https://typing.alexflipnote.dev" name="Typing test" desc="how fast can you type? Find out today with a typing test!" />
                <IndexInfo href="https://xela.dev" name="xelA" desc="the only bot your Discord would ever need, it's time to ditch Mee6 and Tickets" />
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </>
    )
  }
}
