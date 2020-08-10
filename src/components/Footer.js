import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import navigation from './../data/navigation.json'

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
              <div className="footer-heading"></div>
            </div>
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Enlaces Útiles</h4>
              </div>
              <ul className="useful-links">
                {navigation.length > 0 &&
                  navigation.map((navItem, index) => (
                    <li
                      key={index}
                      className={
                        navItem.children && navItem.children.length > 0
                          ? 'menu-item-has-children'
                          : ''
                      }
                    >
                      <Link to={navItem.url}>{navItem.name}</Link>

                      <ul className="sub-menu">
                        {navItem.children &&
                          navItem.children.length > 0 &&
                          navItem.children.map((child, i) => (
                            <li key={i}>
                              <Link to={child.url}>{child.name}</Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Ubicación</h4>
              </div>
              <p>Medellín, Colombia.</p>
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
            <div className="col-lg-3">
              <div className="footer-heading">
                <h4>Escríbenos!</h4>
              </div>
              <ul className="more-info">
                <li>
                  Email: <a href="/contact">contactenos@meraki.com</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright © 2020 <a href="#">Jonathan Vanegas</a>. All rights
                  reserved.
                  <br />
                  Powered by GoSoft
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
