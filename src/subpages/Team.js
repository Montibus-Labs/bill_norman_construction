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
    <div id = "team" className="container-fluid">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Why Choose Us?</h1>
           {/* please dont use a header for this, just getting a size idea */}
          <div class="text-center" style={{ fontSize: "1.5em" }}>
            <p>With more than 20 years experience, we provide the only the highest quality craftsmanship.  We take great pride in our work and will stand behind it 100%.  We treat your home or business as if it were our own.</p>
            <p>Our residental and commercial services include new constructon, fire resotrations, roofing and emergency roofing repairs. Complete remodeling for residental and commercial</p>
            <ul style={{ listStyle: "none" }}>
              <li>Kitchens</li>
              <li>Bathrooms</li>
              <li>Basements</li>
              <li>Additions</li>
              <li>Roofing</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }

  export default Team
