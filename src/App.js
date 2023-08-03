import React from "react";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
