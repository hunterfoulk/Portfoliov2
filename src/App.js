import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { useStateValue } from "./state";
import "./app.scss";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { ProjectRoutes } from "./Projectroutes";
import NavbarModal from "./NavbarModal";
import Backdrop from "./backdrop";
import ModalTransition from "./transition";

function App() {
  const [{ projects }, dispatch] = useStateValue();
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [backdrop, setBackDrop] = useState(false);
  const [projectModal, setProjectModal] = useState(false);

  const emailModal = () => {
    setModal(true);
    setBackDrop(true);
  };

  const emailClose = () => {
    setBackDrop(false);
    setModal(false);
    setProjectModal(false);
  };
  return (
    <>
      <Router>
        {backdrop && <Backdrop emailClose={emailClose} />}

        {modal && (
          <NavbarModal
            emailClose={emailClose}
            setDropdown={setDropdown}
            setModal={setModal}
          />
        )}

        {/* <Homepage /> */}
        {/* HOME ROUTE */}
        <Route
          exact
          path="/"
          render={() => (
            <>
              {" "}
              <Homepage
                setProjectModal={setProjectModal}
                projectModal={projectModal}
                modal={modal}
                setModal={setModal}
                setDropdown={setDropdown}
                setBackDrop={setBackDrop}
                dropdown={dropdown}
                emailModal={emailModal}
              />
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
