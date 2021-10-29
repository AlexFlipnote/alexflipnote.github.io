import React from "react"

import Head from "/src/components/Head"


export default class HTTP404 extends React.Component {
  render() {
    return (
      <>
        <Head title="404: Page not found" description="HTTP 404"/>
        <style jsx>{`
          h1 { font-size: 3em; }
          .alexsleepy { height: 128px; width: 128px; }
          .cursor { animation: 1s blink step-end infinite; font-weight: bolder; }
          @keyframes blink {
            from, to { opacity: 0; }
            50% { opacity: 1; }
          }
        `}</style>
        <section className="fullscreen monospace">
          <div className="background"></div>
          <div className="center-object center-text"><img src="/images/AlexSleepy.png" className="alexsleepy"/>
            <h1 className="bold no-margin"><span className="alizarin-text">404 <br/> Page not found <span className="cursor">_</span></span>
            </h1>
            <div className="buttons">
              <a href="/" className="btn alizarin-bg white-text">Back to home</a>
              <a href="#" onClick={() => {window.history.go(-1); return false}} className="btn emerald-bg white-text">Go one step back</a>
            </div>
          </div>
        </section>
      </>
    )
  }
}
