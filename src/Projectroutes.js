import React, { useState } from "react";
import { useStateValue } from "./state";

export const ProjectRoutes = ({ project }) => {
  return (
    <div>
      projects route{" "}
      <span>
        {project.project}
        <p>{project.p1}</p>
      </span>
    </div>
  );
};
