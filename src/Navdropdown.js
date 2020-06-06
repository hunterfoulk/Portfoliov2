import React from "react";
import useLockBodyScroll from "./bodyScroll";

export default function Navdropdown({ setModal, setDropdown }) {
  //   useLockBodyScroll();
  return (
    <div className="navdropdown">
      <a
        onClick={() => {
          setModal(true);
        }}
      >
        <p onClick={() => setDropdown(false)}>Contact</p>
      </a>
      <a
        onClick={() => {
          window.scrollTo(1610, 1610);
        }}
      >
        <p>Projects</p>
      </a>
      <a href="/">
        <p>Resume</p>
      </a>
    </div>
  );
}
