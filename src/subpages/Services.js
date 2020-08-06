import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPaintRoller, faTools, faTint } from "@fortawesome/free-solid-svg-icons"

function Services() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            src
          }
        }
      }
    }
  `)
  return (
    <div id = "services" className="container-fluid" style={{ backgroundColor: "white", margin: "2em" }} id="services">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5" style={{ color: "black" }}>Services We Offer </h1>
          <div className="row">
            {/* {allServicesYaml.edges.map(({ node }) => { */}
            {/*   return <ServiceItem title={node.title} src={node.src} /> */}
            {/* })} */}
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faHome} size="8x" color="black" />
              <h3 className="mt-5" style={{ color: "black" }}>New Construction</h3>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faPaintRoller} size="8x" color="black"/>
              <h3 className="mt-5" style={{ color: "black" }}>Remodels</h3>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faTools} size="8x" color="black"/>
              <h3 className="mt-5" style={{ color: "black" }}>Additions</h3>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faTint} size="8x" color="black"/>
              <h3 className="mt-5" style={{ color: "black" }}>Roofing</h3>
            </div>
          </div>
          <Link class="text-center" target="_blank" href="https://www.facebook.com/pg/bnconstruct/photos/"> 
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
              See Our Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
