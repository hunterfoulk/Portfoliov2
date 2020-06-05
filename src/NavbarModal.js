import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import useLockBodyScroll from "./bodyScroll";

export default function NavbarModal({ setModal }) {
  useLockBodyScroll();
  return (
    <div className="backdrop">
      <div className="nav-modal">
        <div className="modal-close">
          <MdClose onClick={() => setModal(false)} className="md-close" />
        </div>
        <div className="nav-modal-header">
          <h1>Contact</h1>
        </div>
        <form>
          <input placeholder="Name..."></input>
          <input placeholder="Email..."></input>
          <textarea placeholder="Message..." rows="4" cols="50"></textarea>
          <button>Send Email</button>
        </form>
      </div>
    </div>
  );
}
