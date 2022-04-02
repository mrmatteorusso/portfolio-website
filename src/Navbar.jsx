import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NavLink from "./components/NavLink";

function Navbar() {
  return (
    <>
      <div className="App">
        <nav className="nav-bar">
          <NavLink path="/" text="Home" />
          <NavLink path="/projects" text="Projects" />
          <NavLink path="/about" text="About" />
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Navbar;
