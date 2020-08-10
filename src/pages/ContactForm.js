import React, { useState, useEffect } from 'react'

const initialState = {
  fullname: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [contactForm, setContactForm] = useState(initialState)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const onChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      contactForm.fullname === '' ||
      contactForm.email === '' ||
      contactForm.subject === '' ||
      contactForm.message === ''
    ) {
      console.log('complete bien el formulario')
      return
    }

    console.log(contactForm)
  }

  return (
    <React.Fragment>
      <div className="parallax-banner">
        <div className="page-heading">
          <section className="contact-us">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-heading page-heading-radius">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <h1>Salúdanos!</h1>
                          <span>
                            <a href="index.html">Inicio</a>Ingresa tú
                            información
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inner-content">
                    <form id="message" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <input
                            name="fullname"
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder="Nombre Completo"
                            required=""
                            onChange={onChange}
                            value={contactForm.fullname}
                          />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="E-Mail"
                            required=""
                            onChange={onChange}
                            value={contactForm.email}
                          />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Asunto"
                            required=""
                            onChange={onChange}
                            value={contactForm.subject}
                          />
                        </div>
                        <div className="col-lg-12">
                          <textarea
                            name="message"
                            rows="6"
                            className="form-control"
                            id="message"
                            placeholder="Escribe tu mensaje"
                            required=""
                            onChange={onChange}
                            value={contactForm.message}
                          ></textarea>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            id="form-submit"
                            className="filled-button"
                          >
                            Enviar Mensaje Ahora
                          </button>
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
                <p>
                  <a href="#">contactenos@meraki.com</a>
                  <br />
                  <a href="#">info@meraki.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="info-item">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <h4>Phone Number</h4>
                <p>
                  <a href="#">+1 547 6877 534</a>
                  <br />
                  <a href="#">001 547 6877 534</a>
                </p>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="info-item">
                <div className="icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h4>Ubicación</h4>
                <p>
                  <a href="#">Medellín, Colombia.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact
