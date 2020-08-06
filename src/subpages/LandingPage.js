import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundImage:
    "url(https://burst.shopifycdn.com/photos/house-in-trees.jpg?width=1850&format=pjpg&exif=0&iptc=0)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    // letterSpacing: "0.25em",
  }

  return (
    <section id = "home" style={pageStyle} className = "container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <h1 style={welcomeStyle}>{welcomeText}</h1>
          <h4>{landingText}</h4>
          <button
            style={{
              width: "200px",
              padding: "10px",
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: "red",
              borderRadius: "30px",
              textTransform: "uppercase",
              color : "white",
              fontWeight : "600",
              marginTop : "20px"
            }}
          >
            <AnchorLink id="contactUsButton" href="#contact" style={{ color: "white" }}>
              Contact Us
            </AnchorLink>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
