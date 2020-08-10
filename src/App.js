import React, { useState, useLayoutEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/main.css'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/ContactForm'
import Rrss from './pages/Rrss'
import HomePage from './pages/Home'
import Preloader from './components/Preloader'

function App() {
  const [scrollPosition, setPosition] = useState(0)
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const handleGotop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/rrss">
            <Rrss />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <Footer />

      <Link
        to={'#'}
        className="go-top"
        style={
          scrollPosition > 150 ? { display: 'inline' } : { display: 'none' }
        }
        onClick={handleGotop}
      >
        <i className="fa fa-angle-up"></i>
      </Link>
    </>
  )
}

export default App
