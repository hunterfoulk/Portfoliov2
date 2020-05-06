import React, { useState } from "react";
import portLogo from "./images/hf-logo.png";
import { Link } from "react-router-dom";
import Navdropdown from "./Navdropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

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
          <Link className="resume-link" to="/projects">
            <span>Resume</span>
          </Link>
        </div>
        <div className="hamburger" onClick={() => setDropdown(!dropdown)}>
          <p>☰</p>
        </div>
        {dropdown && (
          <>
            <Navdropdown dropdown={dropdown} setDropdown={setDropdown} />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
