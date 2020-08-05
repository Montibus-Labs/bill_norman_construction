import React from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"

function Team() {
  const { allTeamYaml } = useStaticQuery(graphql`
    {
      allTeamYaml {
        edges {
          node {
            name
            img
          }
        }
      }
    }
  `)
  return (
    <div id = "team" className="container-fluid" style={{ backgroundColor: "#AFECA4" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Why Choose Us?</h1>
          {/* please dont use a header for this, just getting a size idea */}
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
          {/* <div className="row my-5"> */}
          {/*   {allTeamYaml.edges.map(({ node }) => { */}
          {/*     return <TeamItem title={node.name} src={node.img} /> */}
          {/*   })} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Team
