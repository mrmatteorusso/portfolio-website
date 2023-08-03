import React, { useRef } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ContactMe from "../pages/About";

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <li>
          <Link className="item-navbar" to="/" onClick={() => scrollToRef(homeRef)}>
            Home
          </Link>
        </li>
        <li>
          <Link className="item-navbar" to="/projects" onClick={() => scrollToRef(projectsRef)}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="item-navbar" to="/contact-me" onClick={() => scrollToRef(contactRef)}>
            Contact me
          </Link>
        </li>
      </nav>
      <Router>
        <Route path="/" element={<Home homeRef={homeRef} />} />
        <Route path="/projects" element={<Projects projectsRefRef={projectsRef} />} />
        <Route path="/contact-me" element={<ContactMe contactRef={contactRef} />} />
      </Router>
    </BrowserRouter>
  );
}
