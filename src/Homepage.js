import React, { useState } from "react";
import LinkedIn from "./images/linkedIn.png";
import { useStateValue } from "./state";
import ProjectModal from "./Projectmodal";
import { Link } from "react-router-dom";
import avatar from "../src/images/avatar3.PNG";
import cloud from "../src/images/cloud.png";
import data from "../src/images/data.png";
import database from "../src/images/servericon.png";
import browser from "../src/images/browser.png";
import Navbar from "../src/Navbar";
import Stars from "./stars";

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

  return (
    <div className="homepage-main">
      <div className="header">
        <Navbar
          modal={modal}
          setModal={setModal}
          setDropdown={setDropdown}
          setBackDrop={setBackDrop}
          dropdown={dropdown}
          emailModal={emailModal}
        />
        <Stars />
        <div className="face">
          <div className="face-container">
            <img src={avatar} />
          </div>
        </div>
        <div className="header-content-container">
          <h2 className="">Hunter Foulk</h2>

          <div className="header-line"></div>
          <span className="area-span">
            Software Developer in Tucson, Arizona
          </span>
          <span className="email"> hunterfoulkdev@gmail.com</span>
          <div className="buttons-container">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hunterfoulk"
            >
              <button className="github-button">
                <img
                  src="https://images.jrdn.tech/github.svg"
                  className="github-svg"
                  alt="github"
                />
                <span className="github-span">Github</span>
              </button>
            </a>
            <button className="linkedin-button">
              <img className="linkedin-image" src={LinkedIn} alt="/"></img>
              <span className="linkedin-text">LinkedIn</span>
            </button>
          </div>

          <a className="projects-button" href="#projects-section-main">
            <span>
              See Projects <span className="down-arrow">▼</span>
            </span>
          </a>
        </div>
      </div>
      {/* <div className="aboutme-section-main">
        <div className="aboutme-left">
          <div>
            <h1>About Me</h1>
          </div>
          <div className="aboutme-line"></div>
          <div className="about-me-left-text">
            <p>
              {" "}
              Greetings, my name is Hunter! I'm a self taught Software Engineer
              currently based in Tucson, Arizona. I have many passions and
              developted skills in programming and many other areas in the
              technical world. Since i was young I've always been around and
              involved in coding with a huge passion in working in team
              environments whether it be coding and developing new applications
              or brain storming new ideas for future applications I've felt are
              needed in todays world. Since then I've shifted my learning and
              focuses to the web, thriving in fulfillment learning new and
              modern technologies of Full Stack Web Development such as modern
              Javascript, HTML , CSS and frameworks such as React with
              TypeScript, Gatsby and how far every programming language and
              other technologies have come. Some of my hobbies outside of
              programming are daily exercising, hanging out with my also coding
              friends and just living everyday to the fullest!
            </p>
          </div>
        </div>
      </div> */}

      <div className="technical-section-main">
        <div className="aboutme-right">
          <h1>Technologies</h1>
          {/* <div className="tech-line"></div> */}

          <div className="list">
            <div className="front-end">
              <div className="icon-container">
                <img src={browser} />
              </div>
              <div className="text-header">
                <h3>Front-End</h3>
              </div>
              <div className="list-text-container">
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </div>
            </div>
            <div className="front-end">
              <div className="icon-container">
                <img src={data} />
              </div>
              <div className="text-header">
                <h3>Back-End</h3>
              </div>
              <div className="list-text-container">
                <li>Nodejs</li>
                <li>Express</li>
                <li>SocketIO</li>
              </div>
            </div>
            <div className="front-end">
              <div className="icon-container">
                <img src={database} />
              </div>
              <div className="text-header">
                <h3>Databases</h3>
              </div>
              <div className="list-text-container">
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </div>
            </div>
            <div className="front-end">
              <div className="icon-container">
                <img src={cloud} />
              </div>
              <div className="text-header">
                <h3>Cloud Platforms</h3>
              </div>
              <div className="list-text-container">
                <li>AWS</li>
                <li>AWS RDS</li>
                <li>AWS S3 Bucket</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section-main" id="projects-section-main">
        <div className="project-card-container">
          <h1 className="project-h1">Personal Projects</h1>

          {projectModal && (
            <>
              <ProjectModal modalContent={modalContent} />
            </>
          )}

          {projects.map((card, i) => (
            <div className="projects-cards">
              <div className="h2-text">
                <h2>{card.project}</h2>
              </div>
              <div className="content-container">
                <div className="img-placeholder">
                  <img src={card.thumbnail} />
                </div>
                <div className="projects-cards-text">
                  <p>{card.description}</p>
                  <div className="demos">
                    <a>
                      <button
                        className="view-project-button"
                        onClick={async () => {
                          if (isMobile) {
                            window.location.href = `${card.route}`;
                          } else if (
                            !isMobile &&
                            window.location.pathname === "/"
                          ) {
                            setProjectModal(true);
                            setContent(card);
                            setBackDrop(true);
                          } else {
                            window.location.href = `${card.route}`;
                          }
                        }}
                      >
                        View Project
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={card.source}
                    >
                      <button className="view-project-button">
                        View Sourcecode
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
