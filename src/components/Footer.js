import React from "react"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.GITHUB_URL = "https://github.com/AlexFlipnote/alexflipnote.github.io"
  }

  render() {
    return (
      <footer className="text-center box-container primary-bg">
        <p className="no-margin">
          <a href={`${this.GITHUB_URL}/blob/master/LICENSE`} target="_blank" rel="noreferrer">LICENSE</a>
          <span className="footer-name">AlexFlipnote</span>
          <a href={this.GITHUB_URL} target="_blank" rel="noreferrer">Source</a>
        </p>
      </footer>
    )
  }
}
