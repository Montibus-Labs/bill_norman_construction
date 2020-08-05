import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const companyNametextStyle = {
    color: "white",
    fontWeight: "600",
    letterSpacing: "0.1em",
  }

  const phoneNumberStyle = {
    color: "white",
    fontWeight: "400",
    marginLeft: "0.5em"
  }

  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light   p-4">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <AnchorLink class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#services">
                Services
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <h4 style={companyNametextStyle}>Bill Norman Construction, Inc.</h4>
        <div>
          <FontAwesomeIcon icon={faPhone} size="1x" />
          <a href="tel:336-325-8203" style={phoneNumberStyle}>(336) 325-8203</a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
