import React from "react";
import "./app.scss";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import useLockBodyScroll from "./bodyScroll";

export default function Projectmodal({ modalContent }) {
  useLockBodyScroll();
  return (
    <>
      <div className="project-modal">
        <div className="modal-header">{modalContent.project}</div>

        <div style={{ padding: "0px 20px" }}>
          <Carousel
            className="carousel"
            centered
            infinite
            arrowLeft={<AiOutlineArrowLeft className="angle-double-left" />}
            arrowLeftDisabled={<AiOutlineArrowLeft className="angle-left" />}
            arrowRight={<AiOutlineArrowRight className="angle-double-right" />}
            arrowRightDisabled={<AiOutlineArrowRight className="angle-right" />}
            addArrowClickHandler
            slidesPerPage={2}
          >
            <img src={modalContent.slides[0]} />
            <img src={modalContent.slides[1]} />
            <img src={modalContent.slides[2]} />
          </Carousel>
        </div>
        <div className="modal-button-container">
          <button className="button-one">View Demo</button>
          <button className="button-two">
            <FaGithub className="button-two-github" />
            Sourcecode
          </button>
        </div>
        <div className="modal-para">
          <h1>Details</h1>
          <p>{modalContent.p1}</p>
          <div className="tech-li">
            <h1>Technology Stack</h1>
            {modalContent.tech.map((item) => (
              <li>{item}</li>
            ))}
          </div>
          <div>
            <h1>Plans for future development</h1>
            <p>{modalContent.plans}</p>
          </div>
        </div>
      </div>
    </>
  );
}
