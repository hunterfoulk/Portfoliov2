import React from "react";
import portLogo from "./images/hf-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <div className="nav-left">
          <img src={portLogo} />
          <p>HUNTER FOULK</p>
        </div>
        <div className="nav-right">
          <Link className="about-link" to="/about">
            <span>About</span>
          </Link>
          <Link className="projects-link" to="/projects">
            <span>Projects</span>
          </Link>
          <span className="resume-link">Resume</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
