import React, { useState } from "react";
import "./contact.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    // https://elegant-haibt-a61338.netlify.app/.netlify/functions/server/portfolio/sendemail
    // http://localhost:9000/.netlify/functions/server/portfolio/sendemail

    const headers = {
      "Content-Type": "application/json",
    };

    await axios
      .post(
        "https://elegant-haibt-a61338.netlify.app/.netlify/functions/server/portfolio/sendemail",
        {
          name: name,
          email: email,
          message: message,
        },
        {
          headers: headers,
        }
      )

      .then((res) => {
        console.log("server response", res);
        console.log("email has been sent");
        setSuccess(true);
        notify();
      })
      .catch((error) => console.error("email was not succesfull:", error));

    setName("");
    setEmail("");
    setMessage("");
  };

  const notify = () =>
    toast.success("Your email has been sent! thank you! ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="contact-main">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="form-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
        </div>
        <form
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <input
            placeholder="Name..."
            type="text"
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <input
            placeholder="Email..."
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value);
            }}
          />
          <textarea
            placeholder="Message..."
            rows="4"
            cols="50"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
