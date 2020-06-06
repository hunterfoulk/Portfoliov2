import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import useLockBodyScroll from "./bodyScroll";
import axios from "axios";

export default function NavbarModal({ setModal, setDropdown }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://elegant-haibt-a61338.netlify.app/.netlify/functions/server/portfolio/sendemail",
        {
          name: name,
          email: email,
          message: message,
        }
      )
      .then((res) => {
        console.log("server response", res);
        console.log("email has been sent");
      })
      .catch((error) =>
        console.error("new job post was not succesfull:", error)
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="nav-modal">
      <div className="modal-close">
        <MdClose onClick={() => setModal(false)} className="md-close" />
      </div>
      <div className="nav-modal-header">
        <h1>Contact</h1>
      </div>
      <form
        onSubmit={(e) => {
          sendEmail(e);
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Name..."
        ></input>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Email..."
        ></input>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Message..."
          rows="4"
          cols="50"
        ></textarea>
        <button
          onClick={(e) => {
            sendEmail(e);
          }}
        >
          Send Email
        </button>
      </form>
    </div>
  );
}
