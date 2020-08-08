import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/main.css'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/ContactForm'
import Rrss from './pages/Rrss'
import HomePage from './pages/Home'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
