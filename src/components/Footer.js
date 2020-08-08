import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer-content">
      <div className="cta-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>
                Interesado
                <br />
                en <em>Publicar</em> ?
              </h2>
            </div>
            <div className="col-lg-4">
              <div className="main-white-button">
                <Link to="/contact">Escríbenos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Oxana</h4>
              </div>
              <p className="about-oxana">
                Shaman synth retro slow-carb. Vape taxidermy twee, put a bird on
                it fran xezen celiac unicorn gerstache coloring book.
              </p>
            </div>
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Useful Links</h4>
              </div>
              <ul className="useful-links">
                <li>
                  <a href="#">About Oxana</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul className="useful-links">
                <li>
                  <a href="#">Recent Posts</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ’s</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Get In Touch!</h4>
              </div>
              <ul className="more-info">
                <li>
                  Email: <a href="#">contact@oxana.com</a>
                </li>
                <li>
                  Phone: <a href="#">+1 547 6877 534</a>
                </li>
                <li>
                  Address: <a href="#">342 Better Street Peculiar, KS 64078</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Find Us</h4>
              </div>
              <p>
                Shaman synth retro slow-carb. Vape taxidermy twee, put a bird.
              </p>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright © 2020 <a href="#">Robert Imeri</a>. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
