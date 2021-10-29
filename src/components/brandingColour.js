import React from "react"
import PropTypes from "prop-types"


export default class BrandingColour extends React.Component {
  constructor(props) {
    super(props)
    this.colour = "#000"
    this.text = "#fff"
    this.name = "black"
    this.part = "t-shirt"
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.colour }} className="colour">
        <span className="name">{this.props.name} <br/> ({this.props.part})</span>
        <span className="hex">{this.props.colour}</span>
      </div>
    )
  }
}

BrandingColour.propTypes = {
  colour: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
