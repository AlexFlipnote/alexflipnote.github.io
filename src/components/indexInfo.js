import React from "react"
import PropTypes from "prop-types"


export default class IndexInfo extends React.Component {
  constructor(props) {
    super(props)
    this.href = "#"
    this.name = "Placeholder"
    this.desc = "some nice text"
  }

  render() {
    return (
      <p>
        <a href={this.props.href} target="_blank" rel="noreferrer">
          {this.props.name}
        </a>
        , {this.props.desc}
      </p>
    )
  }
}

IndexInfo.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
}
