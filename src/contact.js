import React, { useState } from "react";
import "./contact.scss";
import axios from "axios";

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
      })
      .catch((error) => console.error("email was not succesfull:", error));

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-main">
      <div className="form-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
        </div>
        <form>
          <input placeholder="Name..." type="text" />
          <input placeholder="Email..." type="text" />
          <textarea placeholder="Message..." rows="4" cols="50" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
