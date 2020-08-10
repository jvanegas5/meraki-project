import React from 'react'

const Rrss = () => {
  return (
    <React.Fragment>
      <div className="parallax-banner">
        <div className="inner-header">
          <div className="inner-content">
            <h4>Twitter</h4>
            <h1>contenido</h1>

            <div className="main-decoration"></div>
          </div>
        </div>
      </div>
      <section>
        <a
          class="twitter-timeline"
          href="https://twitter.com/5Meraki/lists/cuentas-pol-ticas?ref_src=twsrc%5Etfw"
        >
          A Twitter List by 5Meraki
        </a>{' '}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </section>
    </React.Fragment>
  )
}

export default Rrss
