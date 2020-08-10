import React from 'react'

import icon01 from './../assets/images/features-icon-01.png'
import icon02 from './../assets/images/features-icon-02.png'
import icon03 from './../assets/images/features-icon-03.png'
import banner from './../assets/images/baner-main-decoration.png'

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="parallax-banner">
        <div className="inner-header">
          <div className="inner-content">
            <h4></h4>
            <h1>
              Comunicación Participativa!!!
              <br />
              Tu VOZ Cuenta
            </h1>
            {/* <form action="#">
              <input
                type="text"
                placeholder="http://yoursite.com"
                required=""
              />
              <button>Analyze!</button>
            </form> */}
            <div className="main-decoration">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src={icon01} alt="" />
                </div>
                <h4>Encuestas</h4>
                <p>
                  En éste espacio podrás responder encuestas para medir la
                  opinión general de nuestros visitantes.
                </p>
              </div>
              <div className="main-purple-button">
                <a href="#">Tu opinión cuenta</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src={icon02} alt="" />
                </div>
                <h4>Daily Tack Records</h4>
                <p>
                  Shaman synth retro slow-carb vape dermy, put and a bird jean
                  shorts franzen unicorn knausgaard coloring book.
                </p>
              </div>
              <div className="main-purple-button">
                <a href="#">Continue Reading</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src={icon03} alt="" />
                </div>
                <h4>Easy Useful Dashboard</h4>
                <p>
                  Shaman synth retro slow-carb vape dermy, put and a bird jean
                  shorts franzen unicorn knausgaard coloring book.
                </p>
              </div>
              <div className="main-purple-button">
                <a href="#">Continue Reading</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="good-tips">
        <div className="container"></div>
      </section>
    </React.Fragment>
  )
}

export default HomePage
