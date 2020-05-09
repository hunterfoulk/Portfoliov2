import React from "react";
import portLogo from "./images/hf-logo.png";
import "./app.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-button-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hunterfoulk"
        >
          <button className="footer-buttons">Github</button>
        </a>
        <a>
          <button className="footer-buttons">Linkedin</button>
        </a>
        <a>
          <button className="footer-buttons">Resume</button>
        </a>
      </div>
      <img className="footer-logo" src={portLogo} />
      <span>© 2020 Hunter Foulk | All rights reserved.</span>
    </div>
  );
}
