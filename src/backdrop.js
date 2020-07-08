import React from "react";
import useLockBodyScroll from "./bodyScroll";

export default function Backdrop({ emailClose }) {
  useLockBodyScroll();
  return <div onClick={() => emailClose()} className="backdrop"></div>;
}
