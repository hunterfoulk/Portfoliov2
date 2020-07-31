import React, { useState } from "react";
import { useStateValue } from "./state";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { Link, useHistory } from "react-router-dom";

export const ProjectRoutes = ({ project }) => {
  const history = useHistory();
  return (
    <div className="route-main">
      <div className="route-header">
        {" "}
        <FaArrowAltCircleLeft
          style={{ position: "absolute", left: "10px", top: "8px" }}
          onClick={() => {
            history.push("/");
          }}
        />
        {project.project}
      </div>
      <div className="route-caro" style={{ padding: "5px 0px" }}>
        <Carousel
          className="carousel"
          centered
          infinite
          arrowLeft={<AiOutlineArrowLeft className="angle-double-left" />}
          arrowLeftDisabled={<AiOutlineArrowLeft className="angle-left" />}
          arrowRight={<AiOutlineArrowRight className="angle-double-right" />}
          arrowRightDisabled={<AiOutlineArrowRight className="angle-right" />}
          addArrowClickHandler
          slidesPerPage={1}
        >
          <img src={project.slides[0]} />
          <img src={project.slides[1]} />
          <img src={project.slides[2]} />
        </Carousel>
      </div>
      <div className="modal-para">
        <h1>Details</h1>
        <p>{project.p1}</p>
        <div className="tech-li">
          <h1>Technology Stack</h1>
          {project.tech.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div>
          <h1>Plans for future development</h1>
          <p>{project.plans}</p>
        </div>
      </div>
    </div>
  );
};
