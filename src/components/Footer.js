import React from "react"
import { SocialIcon } from "react-social-icons"

const currentYear = new Date().getFullYear()


function Footer() {
  console.log(currentYear)
  return (
    <div>
      <footer className="py-2">
        <div className="container">
          <p className="float-right">Bill Norman Construction, Inc. © Copyright { currentYear }</p>
          <SocialIcon className="mr-4" url={"http://facebook.com/"} />
          <SocialIcon className="mr-4" url={"http://pinterest.com/"} />
          <p style={{ marginTop: "1em" }}>
            234 Storm Haven Ln
            <br/>
            Mt. Airy, NC 27030
            <br />
            <a href="tel:3367867354" style={{ color: "black" }} >(336) 786-7354</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
