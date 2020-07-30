import React, { useState } from "react";
import { useStateValue } from "./state";
import cloud from "../src/images/cloud.png";
import data from "../src/images/data.png";
import database from "../src/images/servericon.png";
import browser from "../src/images/browser.png";
import Navbar from "../src/Navbar";
import ProjectModal from "./Projectmodal";

export default function Work({
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
  let isMobile = window.innerWidth <= 700;
  const [modalContent, setContent] = useState(projects[0]);

  return (
    <div>
      <div className="technical-section-main">
        <div className="aboutme-right">
          <h1>Technologies</h1>

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
          <h1 className="project-h1">Projects</h1>

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
