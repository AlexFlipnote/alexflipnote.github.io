import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

export default class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
        <meta name="theme-color" content="#14bae4"/>

        <meta content={this.props.title} property="og:title"/>
        <meta content={this.props.description} property="og:description"/>
        <meta content={this.props.description} name="description"/>

        <meta name="revisit-after" content="2 days"/>
        <meta name="keywords" content="AlexFlipnote, Twitter, Developer, Github"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:site_name" content="AlexFlipnote"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@AlexFlipnote"/>
      </Helmet>
    )
  }
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
