import React from "react";
import "./about.scss";
import jslogo from "./aboutlogos/jslogo.jpg";
import tslogo from "./aboutlogos/tslogo.jpg";
import reactlogo from "./aboutlogos/reactlogo.png";
import nodelogo from "./aboutlogos/nodelogo.png";
import pglogo from "./aboutlogos/pglogo.png";
import mysqllogo from "./aboutlogos/mysql.jpg";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-header">
        <h1>What i do</h1>
      </div>
      <div className="about-intro">
        <div className="intro-holder">
          <p>
            I have more than 2 years' of experience building software
            applications and growing my passion for software development. Below
            is an overview of my main technical skill sets and technologies i
            love to use.{" "}
          </p>
        </div>
      </div>

      <div className="skills-main">
        <div className="technical-header">
          <h1>Technical Skills</h1>
        </div>
        <div className="skills-container">
          <div className="skill">
            <div className="skill-header">
              <img src={jslogo} />
              <img style={{ marginLeft: "10px" }} src={tslogo} />
            </div>
            <div className="skill-name">
              <span>Javascript/Typescript</span>
            </div>
            <div className="skill-description">
              <p>
                Javascript or specifically Typescript is my favorite language to
                write code in. I believe it to be the leading language of the
                internet to create powerful websites and web applications that
                connect us all everyday.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <img src={reactlogo} />
            </div>
            <div className="skill-name">
              <span>React</span>
            </div>
            <div className="skill-description">
              <p>
                I believe React to be the most powerful and easy to use
                javascript library there is. I love to work in it and write most
                of my projects i develop with it. I admire the developers at
                facebook for inovating the web language with such a great
                library. It's definitely my specialty.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <img src={nodelogo} />
            </div>
            <div className="skill-name">
              <span>NodeJS</span>
            </div>
            <div className="skill-description">
              <p>
                Being able to write backend code in javascript and get a quick
                and reliable server up and running in just a couple of lines is
                incredibile. Working with React and NodeJS with Express just
                seems to go hand and hand so well and work so fluently between
                the client and server together.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <img src={pglogo} />
              <img
                src={mysqllogo}
                style={{ marginLeft: "10px", width: "50px" }}
              />
            </div>
            <div className="skill-name">
              <span>PostgresSQL/MySQL</span>
            </div>
            <div className="skill-description">
              <p>
                PostgresSQL and MySQL are my go to when it comes to relational
                databases. The scalabilty and design is endless when it comes to
                relational databases and the power they have. I still enjoy
                learning and mastering normalization in my databases and the
                design structure for my applications i create.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }} className="about-header">
        <h1>About me</h1>
      </div>
      <div className="about-outro">
        <div className="about-outro-text">
          I'm a self taught Software Developer currently based in Tucson,
          Arizona. I have many passions and developted skills in programming and
          many other areas in the technical world. Since i was young I've always
          been around and involved in coding with a huge passion in working in
          team environments whether it be coding and developing new applications
          or brain storming new ideas for future applications I've felt are
          needed in todays world. Since then I've shifted my learning and
          focuses to the web, gaining great fulfillment in learning new and
          modern technologies of Full Stack Web Development such as modern
          Javascript, HTML , CSS and front-end frameworks and libraries such as
          React with TypeScript, Gatsby and how far every programming language
          and other technologies have come. Some of my hobbies outside of
          programming are daily exercising, hanging out with my friends and just
          living everyday to the fullest!
        </div>
      </div>
    </div>
  );
}
