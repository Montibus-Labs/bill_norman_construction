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
    <div id = "services" className="container-fluid" style={{ backgroundColor: "gray" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5" style={{ color: "white" }}>Services We Offer </h1>
          <div className="row">
            {/* {allServicesYaml.edges.map(({ node }) => { */}
            {/*   return <ServiceItem title={node.title} src={node.src} /> */}
            {/* })} */}
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faHome} size="8x" color="white" />
              <h3 className="mt-5" style={{ color: "white" }}>New Construction</h3>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faPaintRoller} size="8x" color="white"/>
              <h3 className="mt-5" style={{ color: "white" }}>Remodels</h3>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faTools} size="8x" color="white"/>
              <h3 className="mt-5" style={{ color: "white" }}>Additions</h3>
            </div>
            <div className="col-lg-3 my-4 col-sm-12 text-center">
              <FontAwesomeIcon icon={faTint} size="8x" color="white"/>
              <h3 className="mt-5" style={{ color: "white" }}>Roofing</h3>
            </div>
          </div>
          <h4 className="text-center my-4"><Link to="/work" style={{ color: "white" }} >See Our Work</Link></h4>
        </div>
      </div>
    </div>
  )
}

export default Services
