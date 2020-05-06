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
        {/* <Homepage /> */}

        {/* HOME ROUTE */}
        <Route
          exact
          path="/"
          render={() => (
            <>
              {" "}
              <Homepage />
            </>
          )}
        ></Route>

        {/* MOBILE PROJECT ROUTE */}
        {projects.map((project, i) => (
          <Route
            exact
            path={project.route}
            key={i}
            render={() => <ProjectRoutes project={project} />}
          ></Route>
        ))}
      </Router>
      <Footer />
    </>
  );
}

export default App;
