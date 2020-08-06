import React from "react"
import Fade from "react-reveal/Fade"

const contactButtonStyles = {
  background: 'red',
  color: 'white',
  border: 'none',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '30px',
  textTransform: 'uppercase',
  fontWeight : '600',
}

export default function End() {
  return (
    <div className="container-fluid" id="contact">
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Let Us Help With Your Next Project!</h1>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" id="contact">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact"/>
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Your Email"
                    name="email"
                  />
                </div>
              </div>
              <textarea rows = "2" name="message" className="inputBox mb-4" placeholder="Your Message" />
              <button className="btn mb-4 py-3 submitButton">
                Submit
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  )
}
