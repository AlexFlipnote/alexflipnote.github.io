import React from "react"
import PropTypes from "prop-types"


export default class IndexButton extends React.Component {
  constructor(props) {
    super(props)
    this.href = "#"
    this.text = "Placeholder"
    this.class = ""
  }

  render() {
    return (
      <a
        href={this.props.href}
        className={`btn ${this.props.class} animation hover`}
        target="_blank"
        rel="noreferrer"
      >
        {this.props.text}
      </a>
    )
  }
}

IndexButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  class: PropTypes.string
}
