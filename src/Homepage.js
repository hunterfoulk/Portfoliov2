import React, { useState } from "react";
import LinkedIn from "./images/linkedIn.png";
import { useStateValue } from "./state";
import ProjectModal from "./Projectmodal";
import { Link } from "react-router-dom";

export default function Homepage({ project }) {
  const [{ projects }] = useStateValue();
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [modalContent, setContent] = useState(projects[0]);
  let isMobile = window.innerWidth <= 700;

  return (
    <div className="homepage-main">
      <div className="header">
        <div className="face"></div>
        <div className="header-content-container">
          <h2 className="">Hunter Foulk</h2>

          <div className="header-line"></div>
          <span>Software Engineer in Tucson, Arizona</span>
          <span className="email"> hunterfoulkdev@hotmail.com</span>
          <div className="buttons-container">
            <a
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
      <div className="aboutme-section-main">
        <div className="aboutme-left">
          <div>
            <h1>About Me</h1>
          </div>
          <div className="aboutme-line"></div>
          <div>
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
              Javascript, HTML , CSS and frameworks such as React, Gatsby and
              how far every programming language and other technologies have
              come. Some of my hobbies outside of programming are daily
              exercising, hanging out with my also coding friends and just
              living everyday to the fullest!
            </p>
          </div>
        </div>
      </div>

      <div className="technical-section-main">
        <div className="aboutme-right">
          <h1>Technical Experience</h1>
          <div className="tech-line"></div>
          <h2>Skills</h2>
          <div className="list">
            <li>2+ years HTML, CSS, JavaScript</li>
            <li>1+ year React, Node.js,Express</li>
            <li>Relational Databases:MySQL, PostgreSQL</li>
            <li>Non-relational Databases: MongoDB</li>
            <li>Cloud Platforms: Netlify & AWS & Azure</li>
          </div>
        </div>
      </div>

      <div className="projects-section-main" id="projects-section-main">
        <div className="project-card-container">
          <h1 className="project-h1">Projects</h1>
          {modal && (
            <>
              <div className="backdrop" onClick={() => setModal(false)}></div>

              <ProjectModal
                modalContent={modalContent}
                setBackdrop={setBackdrop}
                setModal={setModal}
              />
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
                    <button
                      className="view-project-button"
                      onClick={async () => {
                        setContent(card);
                        // if (!isMobile) setModal(true);
                        setBackdrop(true);
                      }}
                    >
                      {/* {isMobile ? (
                        <Link to={project.route}>
                          <div className="button-text">View project</div>
                        </Link>
                      ) : (
                        <div className="button-text">View project</div>
                      )} */}
                    </button>
                    <button className="view-project-button">
                      View Sourcecode
                    </button>
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
