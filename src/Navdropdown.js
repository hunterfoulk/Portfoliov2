import React from "react";
import useLockBodyScroll from "./bodyScroll";

export default function Navdropdown({}) {
  useLockBodyScroll();
  return (
    <div className="navdropdown">
      <a href="/about">
        <p>About</p>
      </a>
      <a href="/projects">
        <p>Projects</p>
      </a>
      <a href="/">
        <p>Resume</p>
      </a>
    </div>
  );
}
