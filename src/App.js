import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { useStateValue } from "./state";
import "./app.scss";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { ProjectRoutes } from "./Projectroutes";
import NavbarModal from "./NavbarModal";

function App() {
  const [{ projects }, dispatch] = useStateValue();
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Router>
        <Navbar
          modal={modal}
          setModal={setModal}
          setDropdown={setDropdown}
          dropdown={dropdown}
        />
        {modal && <NavbarModal setDropdown={setDropdown} setModal={setModal} />}
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
