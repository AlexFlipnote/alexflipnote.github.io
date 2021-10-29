import React from "react"
import App from "next/app"
import PropTypes from "prop-types"

import "/public/css/modesta.css"
import "/public/css/twemoji.css"
import "/public/css/colours.css"
import "/public/scss/custom.scss"

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

CustomApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
