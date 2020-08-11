import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/images/logo-white.png'
import navigation from './../data/navigation.json'

const Header = () => {
  const [bannerFixed, setBannerFixed] = useState(true)
  const [search, setSearch] = useState(false)
  const [mobileNav, setmobileNav] = useState(false)
  const [mobileNavSubItems, setMobileNavSubItems] = useState(false)
  const [login, setLogin] = useState(false)

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

  const handleLogin = () => {
    setLogin(!login)
  }

  const handlemobileNav = () => {
    setmobileNav(!mobileNav)
  }

  const handleMobileNavSubItems = () => {
    setMobileNavSubItems(!mobileNavSubItems)
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
            placeholder="Escribe para buscar..."
            required=""
          />
          <button type="submit" className="primary-button">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div id="search" className={login ? 'open' : ''}>
        <button type="button" className="close" onClick={handleLogin}>
          ×
        </button>
        <div className="container">
          <form className="signin-form">
            <div className="row">
              <input type="text" placeholder="Nombre de Usuario" required="" />
            </div>
            <div className="row">
              <input type="password" placeholder="Contraseña" required="" />
            </div>
            <div className="main-purple-button">
              <Link onClick={''}>Iniciar Sesión</Link>
            </div>
          </form>
        </div>
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
                    {navItem.type && navItem.type === 'sign-in' ? (
                      <Link onClick={handleLogin}>{navItem.name}</Link>
                    ) : (
                      <Link to={navItem.url}>{navItem.name}</Link>
                    )}

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
          <div className="header-widgets">
            <ul className="right-menu">
              <li className="menu-item menu-search">
                <Link to={''} id="menu-search-btn" onClick={handleSearch}>
                  <i className="fa fa-search"></i>
                </Link>
              </li>
              <li className="menu-item menu-mobile-nav">
                <Link
                  to={''}
                  href="#"
                  className={mobileNav ? 'menu-bar active' : 'menu-bar'}
                  id="menu-show-mobile-nav"
                  onClick={handlemobileNav}
                >
                  <span className="hamburger"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          mobileNav ? 'mobile-nav-wrapper is-open' : 'mobile-nav-wrapper'
        }
      >
        <div className="mobile-menu-inner">
          <ul className="mobile-menu">
            {navigation.length > 0 &&
              navigation.map((navItem, index) => (
                <li
                  key={index}
                  className={
                    navItem.children && navItem.children.length > 0
                      ? 'has-sub' + (mobileNavSubItems ? ' is-open' : '')
                      : ''
                  }
                >
                  {navItem.children && navItem.children.length > 0 ? (
                    <Link to={''} onClick={handleMobileNavSubItems}>
                      {navItem.name}
                      <i className="sub-icon fa fa-angle-down"></i>
                    </Link>
                  ) : navItem.type && navItem.type === 'sign-in' ? (
                    <Link onClick={handleLogin}>{navItem.name}</Link>
                  ) : (
                    <Link to={navItem.url}>{navItem.name}</Link>
                  )}

                  <ul
                    className="sub-menu"
                    style={
                      mobileNavSubItems
                        ? { display: 'block' }
                        : { display: 'none' }
                    }
                  >
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
      </div>
      <div
        className={
          mobileNav ? 'mobile-menu-overlay is-open' : 'mobile-menu-overlay'
        }
        onClick={handlemobileNav}
      ></div>
    </header>
  )
}

export default Header
