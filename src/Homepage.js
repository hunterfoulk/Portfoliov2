import React, { useState } from "react";
import LinkedIn from "./images/linkedIn.png";
import { useStateValue } from "./state";
import ProjectModal from "./Projectmodal";
import { Link } from "react-router-dom";
import avatar from "../src/images/avatar3.PNG";
import Stars from "./stars";
import { AiFillYoutube } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Work from "./work";
import About from "./about";

export default function Homepage({
  project,
  setBackDrop,
  setProjectModal,
  projectModal,
  modal,
  setModal,
  setDropdown,
  dropdown,
  emailModal,
}) {
  const [{ projects }] = useStateValue();
  // const [modal, setModal] = useState(false);
  const [modalContent, setContent] = useState(projects[0]);
  let isMobile = window.innerWidth <= 700;
  const [tab, setTab] = useState("WORK");

  const activeTabStyle = {
    color: "rgb(155, 155, 155)",
  };

  return (
    <div className="homepage-main">
      <div className="homepage-left">
        <div className="left-name">
          <span>Hunter Foulk</span>
        </div>
        <div className="left-pic-container">
          <div className="left-pic">
            <img src={avatar} />
          </div>
        </div>
        <div className="left-about">
          <p>
            Hi, my name is Hunter Foulk and i'm a software developer. Welcome to
            my personal portfolio!
          </p>
        </div>
        <div className="left-links-container">
          <div className="left-links">
            <a
              style={{ textDecoration: "none", color: "#0072b1" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hunterfoulk"
            >
              <FaGithub style={{ fontSize: "23px", color: "black" }} />
            </a>
          </div>
          <div
            className="left-links"
            style={{ fontSize: "23px", color: "#0072b1" }}
          >
            <a
              style={{ textDecoration: "none", color: "#0072b1" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hunterfoulk"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="left-links">
            <a
              style={{ textDecoration: "none", color: "#0072b1" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hunterfoulk"
            >
              <AiFillYoutube style={{ fontSize: "25px", color: "#FF0000" }} />
            </a>
          </div>
        </div>
        <div className="left-nav-links-container">
          <span
            style={tab === "WORK" ? activeTabStyle : {}}
            onClick={() => setTab("WORK")}
          >
            <RiPagesLine style={{ position: "relative", top: "2px" }} />{" "}
            Projects
          </span>

          <span
            style={tab === "ABOUT" ? activeTabStyle : {}}
            onClick={() => setTab("ABOUT")}
          >
            <BsFillPersonFill
              style={{ position: "relative", top: "2px", right: "3px" }}
            />
            About me
          </span>
          <span>
            <FiMail
              style={{ position: "relative", top: "2px", right: "5px" }}
            />
            Contact{" "}
          </span>
          <span>
            <AiOutlineFileText
              style={{ position: "relative", top: "2px", right: "5px" }}
            />
            Resume
          </span>
        </div>
      </div>
      <div className="homepage-right">
        {/* HEADER START*/}
        <div className="header">
          <Stars />
          <div className="header-container">
            <div className="header-content-container">
              <div className="header-text-container">
                <div className="header-name-container">
                  <h2>Hunter Foulk</h2>
                </div>
                <div className="header-texts-container">
                  <p>
                    software developer specialised in frontend and backend
                    development and has a passion for developing complex
                    scalable web apps.
                  </p>
                </div>
                <div className="header-buttons-container">
                  <button
                    onClick={() => {
                      window.scrollTo(1010, 1010);
                    }}
                    className="header-project-button"
                  >
                    <FaArrowCircleRight
                      style={{
                        position: "relative",
                        top: "2.5px",
                        right: "5px",
                      }}
                    />
                    View Projects
                  </button>
                  <button className="header-resume-button">
                    <AiOutlineFileText
                      style={{
                        position: "relative",
                        top: "2.5px",
                        right: "5px",
                      }}
                    />
                    View Resume
                  </button>
                </div>
              </div>
              <div className="face-main">
                <div className="face">
                  <div className="face-container">
                    <img src={avatar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* HEADER END */}
        <div className="tabs-container">
          {tab === "WORK" && (
            <Work
              project={project}
              setBackDrop={setBackDrop}
              setProjectModal={setProjectModal}
              projectModal={projectModal}
              modal={modal}
              setModal={setModal}
              setDropdown={setDropdown}
              dropdown={dropdown}
              emailModal={emailModal}
            />
          )}
          {tab === "ABOUT" && <About />}
        </div>
      </div>
    </div>
  );
}
