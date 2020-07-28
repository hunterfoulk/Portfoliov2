import React, { useState } from "react";
import portLogo from "./images/hf-logo.png";
import { Link } from "react-router-dom";
import Navdropdown from "./Navdropdown";
import NavbarModal from "./NavbarModal";
import LOGO from "./images/LOGO.png";

function Navbar({ setDropdown, dropdown, modal, setModal, emailModal }) {
  return (
    <div className="navbar">
      <div className="nav-links">
        <div className="nav-left">
          <Link to="/">
            <img src={LOGO} />
          </Link>
          <Link className="nav-left-link" to="/">
            <p>HUNTER FOULK</p>
          </Link>
        </div>
        <div className="nav-right">
          <span onClick={() => emailModal()}>Contact</span>

          <span
            onClick={() => {
              window.scrollTo(1210, 1210);
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
            <Navdropdown
              setModal={setModal}
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
