import React from "react";
import useLockBodyScroll from "./bodyScroll";

export default function Navdropdown({}) {
  //   useLockBodyScroll();
  return (
    <div className="navdropdown">
      <a
        onClick={() => {
          window.scrollTo(550, 550);
        }}
      >
        <p>About</p>
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
