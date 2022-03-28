import React from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

function Navbar() {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <li>
          <Link className="item-navbar" to="/">
            home
          </Link>
        </li>
        <li>
          <Link className="item-navbar" to="/projects">
            projects
          </Link>
        </li>
        <li>
          <Link className="item-navbar " to="/contacts">
            Contacts
          </Link>
        </li>
      </nav>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Router>
    </BrowserRouter>
  );
}

export default Navbar;
