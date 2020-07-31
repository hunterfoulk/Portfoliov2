import React from "react";
import useLockBodyScroll from "./bodyScroll";

export default function Navdropdown({ setModal, setDropdown, setTab }) {
  //   useLockBodyScroll();
  return (
    <div className="navdropdown">
      <a
        onClick={() => {
          setModal(true);
        }}
      >
        {/* <p style={{ display: "none" }} onClick={() => setDropdown(false)}>
          Contact
        </p> */}
      </a>
      <a onClick={() => setTab("ABOUT")}>
        <p>About</p>
      </a>
      <a
        onClick={() => {
          setTab("WORK");
          window.scrollTo(1605, 1605);
        }}
      >
        <p>Projects</p>
      </a>
      <a onClick={() => setTab("CONTACT")}>
        <p>Contact</p>
      </a>

      <a href="/">
        <p>Resume</p>
      </a>
    </div>
  );
}
