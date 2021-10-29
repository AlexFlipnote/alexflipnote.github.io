import React from "react"
import PropTypes from "prop-types"




export default class DefaultStyle extends React.Component {
  componentDidMount() {
    document.body.classList.add("dark-theme")
    document.body.classList.add("github")
  }

  componentWillUnmount() {
    document.body.classList.remove("dark-theme")
    document.body.classList.remove("github")
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}


DefaultStyle.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
