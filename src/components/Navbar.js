import React from 'react'
//import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div className="container">
  <a className="navbar-brand" href=""> <img className="logo" src="logo.png" alt="loading..." /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: 'beige'}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item active">
       <Link smooth={true} to="home" offset={ -110 } className="nav-link "  href="#">home <span className="sr-only"></span></Link>
      </li>
    <li className="nav-item">
       <Link smooth={true} to="about" offset={ -110 } className="nav-link" href="#">About </Link>
      </li>
      <li className="nav-item">
       <Link smooth={true} to="skills" offset={ -110 } className="nav-link" href="#">Skills </Link>
      </li>
      <li className="nav-item">
       <Link smooth={true} to="portfolio" offset={ -110 } className="nav-link" href="#">Portfolio </Link>
      </li> 
      <li className="nav-item">
       <Link smooth={true} to="contacts" offset={ -110 } className="nav-link" href="#">Contacts </Link>
      </li>
     
    </ul>
    </div>
    
  </div>
</nav>
    )
}

export default Navbar
