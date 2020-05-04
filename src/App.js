import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { useStateValue } from "./state";
import "./app.scss";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import ProjectModal from "./Projectmodal";

function App() {
  const [{ projects }, dispatch] = useStateValue();
  const [modalOpen, openModal] = useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
      </Router>
    </>
  );
}

export default App;
