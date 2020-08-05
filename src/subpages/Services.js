import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"
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
    <div id = "services" className="container-fluid" style={{ backgroundColor: "lightgray" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Services We Offer </h1>
          <div className="row">
            {/* {allServicesYaml.edges.map(({ node }) => { */}
            {/*   return <ServiceItem title={node.title} src={node.src} /> */}
            {/* })} */}
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faHome} size="8x" />
              <h3 className="mt-5">New Construction</h3>
              <p>Here is some stuff a bout building a house</p>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faPaintRoller} size="8x" />
              <h3 className="mt-5">Remodels</h3>
              <p>Here is some stuff a bout building a house</p>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faTools} size="8x" />
              <h3 className="mt-5">Additions</h3>
              <p>Here is some stuff a bout building a house</p>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faTint} size="8x" />
              <h3 className="mt-5">Roofing</h3>
              <p>Here is some stuff a bout building a house</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
