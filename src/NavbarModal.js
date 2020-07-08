import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import useLockBodyScroll from "./bodyScroll";
import axios from "axios";

export default function NavbarModal({ setModal, setDropdown, emailClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    // https://elegant-haibt-a61338.netlify.app/.netlify/functions/server/portfolio/sendemail
    await axios
      .post(
        "http://localhost:9000/.netlify/functions/server/portfolio/sendemail",
        {
          name: name,
          email: email,
          message: message,
        }
      )
      .then((res) => {
        console.log("server response", res);
        console.log("email has been sent");
        setSuccess(true);
      })
      .catch((error) => console.error("email was not succesfull:", error));

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="nav-modal">
      <div className="modal-close">
        <MdClose onClick={() => emailClose()} className="md-close" />
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
      {success ? (
        <span
          style={{
            fontSize: "20px",
            marginTop: "13px",
            marginLeft: "5px",
            color: "#4BB543",
            fontWeight: "600",
          }}
        >
          Email Sent!
        </span>
      ) : null}
    </div>
  );
}
