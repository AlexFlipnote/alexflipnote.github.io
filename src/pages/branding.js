import React from "react"

import BrandingColour from "/src/components/brandingColour"
import Head from "/src/components/Head"
import Footer from "/src/components/Footer"

export default class Branding extends React.Component {
  render() {
    return (
      <>
        <Head
          title="Branding"
          description="Personal branding assets for whatever usage"
        />
        <section className="container">
          <h1 className="no-margin text-center sun-flower-text">AlexFlipnote Branding</h1>
          <div id="about" className="box-container">
            <h1 className="no-margin">About</h1>
            <p>
              I&#39;m a Developer that spends time coding scripts and building websites.
              Releasing my branding materials if you desire to use it.
              Only requirement I have for using this is to give proper information
              about where the image comes from (alexflipnote.dev)
            </p>
          </div>
          <div id="colours" className="box-container">
            <h1 className="no-margin">Colour usage</h1>
            <p>These colours are the correct HEX codes to the original avatar.
    The seasonal versions are not included in here.
            </p>
            <div className="flex-grid">
              <BrandingColour colour="#FF2E30" text="#fff" name="Pelati" part="hair" />
              <BrandingColour colour="#1A191A" text="#fff" name="Eerie Black" part="clothes" />
              <BrandingColour colour="#9E3716" text="#fff" name="Deep Dumpling" part="belt colour" />
              <BrandingColour colour="#FE860F" text="#000" name="Jubilation" part="belt holder colour" />
              <BrandingColour colour="#EFE9EF" text="#000" name="Violet Clues" part="the mask" />
              <BrandingColour colour="#F7B082" text="#000" name="Apricot Wash" part="skin colour" />
              <BrandingColour colour="#8F4A2D" text="#fff" name="Gingerbread" part="shoes color" />
            </div>
          </div>
          <div id="images" className="box-container">
            <h1 className="no-margin">Current avatar</h1>
            <p>The official avatar I use under the username <b>AlexFlipnote</b> online <br/>
              <span className="sun-flower-text">Note: </span>
              This image is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer">CC BY-NC-SA 4.0</a>
            </p>
            <div className="flex-grid">
              <div className="col-xs-6 image-preview center-flex"><img src="./images/branding/avatar_full.svg"/><span className="image-text">Full body</span>
                <div className="image-links"><a download="avatar_full" href="./images/branding/avatar_full.png" target="_blank">.png</a><a download="avatar_full" href="assets/avatar_full.svg" target="_blank">.svg</a>
                </div>
              </div>
              <div className="col-xs-6 image-preview center-flex"><img src="./images/branding/avatar.png"/><span className="image-text">1:1 avatar version (PNG only)</span>
                <div className="image-links"><a download="avatar_full" href="./images/branding/avatar.png" target="_blank">.png</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}
