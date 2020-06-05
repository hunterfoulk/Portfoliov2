import React, { useState } from "react";
import portLogo from "./images/hf-logo.png";
import { Link } from "react-router-dom";
import Navdropdown from "./Navdropdown";

import NavbarModal from "./NavbarModal";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="navbar">
      {modal && <NavbarModal setModal={setModal} />}
      <div className="nav-links">
        <div className="nav-left">
          <Link to="/">
            <img src={portLogo} />
          </Link>
          <Link className="nav-left-link" to="/">
            <p>HUNTER FOULK</p>
          </Link>
        </div>
        <div className="nav-right">
          <span onClick={() => setModal(!modal)}>Contact</span>

          <span
            onClick={() => {
              window.scrollTo(1600, 1600);
            }}
          >
            Projects
          </span>

          <span>Resume</span>
        </div>
        <div className="hamburger" onClick={() => setDropdown(!dropdown)}>
          <p className="hamburger-icon">☰</p>
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
