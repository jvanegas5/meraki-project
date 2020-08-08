import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/images/logo-white.png'

const Header = () => {
  const [bannerFixed, setBannerFixed] = useState(true)

  const [search, setSearch] = useState(false)

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop
    top === 0 ? setBannerFixed(true) : setBannerFixed(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSearch = () => {
    setSearch(!search)
  }

  return (
    <header
      className={
        bannerFixed
          ? 'site-header fixed-header'
          : 'site-header fixed-header is-fixed'
      }
    >
      <div id="search" className={search ? 'open' : ''}>
        <button type="button" className="close" onClick={handleSearch}>
          ×
        </button>
        <form>
          <input
            type="search"
            value=""
            placeholder="Type to search..."
            required=""
          />
          <button type="submit" className="primary-button">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="container expanded">
        <div className="header-wrap">
          <div className="fixed-header-logo">
            <Link to="/">
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>
          <div className="is-fixed-header-logo">
            <a href="index.html">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="header-nav">
            <ul className="main-menu">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Somos</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about-us.html">Quienes Somos</a>
                  </li>
                  <li>
                    <a href="our-team.html">Nuestro Equipo</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Portfolio</a>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-v1.html">Portfolio Version 1</a>
                  </li>
                  <li>
                    <a href="portfolio-v2.html">Portfolio Version 2</a>
                  </li>
                  <li>
                    <a href="portfolio-v3.html">Portfolio Version 3</a>
                  </li>
                  <li>
                    <a href="single-project.html">Single Project</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="/rrss">Redes Sociales</Link>
                <ul className="sub-menu">
                  <li>
                    <a href="our-shop.html">Twitter</a>
                  </li>
                  <li>
                    <a href="single-product.html">Instagram</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contáctenos</Link>
              </li>
            </ul>
          </div>
          <div className="header-widgets">
            <ul className="right-menu">
              <li className="menu-item menu-search">
                <Link to={''} id="menu-search-btn" onClick={handleSearch}>
                  <i className="fa fa-search"></i>
                </Link>
              </li>
              <li className="menu-item menu-mobile-nav">
                <a href="#" className="menu-bar" id="menu-show-mobile-nav">
                  <span className="hamburger"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
