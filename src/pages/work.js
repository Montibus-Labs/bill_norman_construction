import React from "react"
import "../global.css"
import Navbar from "../components/Navbar"

function Work() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <h1 className="text-center my-4">Our Work</h1>
        {/* link to each type work in a sub-menu bar here */}
      </div>
    </div>
  )
}

export default Work
