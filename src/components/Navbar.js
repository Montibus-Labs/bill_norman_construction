import React from "react"
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from "react-social-icons"

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

  const navItemStyle = {
    color: "white",
    fontWeight: "400",
    fontSize: "1.5em",
  }



  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <AnchorLink class="nav-link" href="#" style={navItemStyle}>
                Home <span class="sr-only">(current)</span>
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#services" style={navItemStyle}>
                Services
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#contact" style={navItemStyle}>
                Contact
              </AnchorLink>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/work" style={navItemStyle}>
                Our Work
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <h4 style={companyNametextStyle}>Bill Norman Construction, Inc.</h4>
        <SocialIcon className="mr-4" url={"http://facebook.com/"} />
        <SocialIcon className="mr-4" url={"http://pinterest.com/"} />
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
