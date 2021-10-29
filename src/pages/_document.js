import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head />
          <body className="dark-theme github">
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}
