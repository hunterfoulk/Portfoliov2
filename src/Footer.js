import React from "react";
import portLogo from "./images/hf-logo.png";
import "./app.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-button-container">
        <button className="footer-buttons">Github</button>
        <button className="footer-buttons">Linkedin</button>
        <button className="footer-buttons">Resume</button>
      </div>
      <img className="footer-logo" src={portLogo} />
      <span>© 2020 Hunter Foulk | All rights reserved.</span>
    </div>
  );
}
