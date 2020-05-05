import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { useStateValue } from "./state";
import "./app.scss";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { ProjectRoutes } from "./Projectroutes";

function App() {
  const [{ projects }, dispatch] = useStateValue();
  const [modalOpen, openModal] = useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
        <Footer />

        {/* MOBILE PROJECT ROUTE */}
        {/* {projects.map((project, i) => (
          <Route
            path={project.route}
            key={i}
            render={() => (
              <div className="project-route">
                <ProjectRoutes project={project} />
              </div>
            )}
          ></Route>
        ))} */}
      </Router>
    </>
  );
}

export default App;
