import React from 'react'
import { NavLink} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

//styling our NavBar 



function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid fs-6 fw-bold"> 
      <NavLink 
        class="nav-link active"
        to="/"
        exact
      >
        Home
      </NavLink>

      <NavLink
        to="/allcharacter"
        exact
      >
        LandList 
      </NavLink>

      <NavLink
        to="/characterhint"
        exact
      >
        Available Data 
      </NavLink>
      </div>
      </nav>
   
  )
}

export default NavBar








