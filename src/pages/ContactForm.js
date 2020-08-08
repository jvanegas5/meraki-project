import React from 'react'

import Header from './../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <React.Fragment>
       
      <div className="parallax-banner" >
       

          <div className="page-heading">
       
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">


              <div class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>Salúdanos!</h1>
              <span><a href="index.html">Inicio</a>Ingresa tú información</span>
            </div>
          </div>
        </div>
      </div>

              <div className="inner-content">






                <form id="message" action="#" method="post">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <input name="name" type="text" className="form-control" id="name" placeholder="Nombre Completo" required="" />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail" required="" />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <input name="subject" type="text" className="form-control" id="subject" placeholder="Asunto" required="" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="your-message" rows="6" className="form-control" id="your-message" placeholder="Escribe tu mensaje" required=""></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" id="form-submit" className="filled-button">Enviar Mensaje Ahora</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      </div>
      </div>
     


          <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="info-item">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <h4>Email Address</h4>
                <p><a href="#">contact@oxana.com</a><br /><a href="#">info@oxana.com</a></p>
              </div>
            </div> 
            <div className="col-lg-4">
              <div className="info-item">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <h4>Phone Number</h4>
                <p><a href="#">+1 547 6877 534</a><br /><a href="#">001 547 6877 534</a></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-item">
                <div className="icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h4>Street Address</h4>
                <p><a href="#">342 Better Street<br />Peculiar, KS 64078</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>    

   
    </React.Fragment>
  )
}

export default Contact
