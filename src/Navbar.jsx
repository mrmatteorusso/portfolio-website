// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/ContactMe";
// import NavLink from "./components/NavLink";

// function Navbar() {
//   return (
//     <>
//       <div className="App">
//         <nav className="nav-bar">
//           <NavLink path="/" text="Home" />
//           <NavLink path="/projects" text="Projects" />
//           <NavLink path="/about" text="About" />
//         </nav>
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </>
//   );
// }

// export default Navbar;

// import React, { useRef } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import ContactMe from "./pages/ContactMe";

// const scrollToRef = (ref) => {
//   ref.current.scrollIntoView({ behavior: "smooth" });
// };

// export default function Navbar() {
//   const homeRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   return (
//     <BrowserRouter>
//       <nav className="nav-bar">
//         <li>
//           <Link className="item-navbar" to="#home"
//           // onClick={() => scrollToRef(homeRef)}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link className="item-navbar" to="#projects"
//           // onClick={() => scrollToRef(projectsRef)}
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link className="item-navbar" to="#contact-me"
//           // onClick={() => scrollToRef(contactRef)}
//           >
//             Contact me
//           </Link>
//         </li>
//       </nav>
//       <Routes>

//         <Route path="/#home" element={<Home
//         // homeRef={homeRef} 
//         />} />
//         <Route path="/#projects" element={<Projects
//         // projectsRefRef={projectsRef} 
//         />} />
//         <Route path="#contact-me" element={<ContactMe
//         // contactRef={contactRef} 
//         />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// import React, { useRef, useState } from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import ContactMe from "./pages/ContactMe";

// const scrollToRef = (ref) => {
//   ref.current.scrollIntoView({ behavior: "smooth" });
// };

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState("home");
//   const homeRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   return (
//     <BrowserRouter>
//       <nav className="nav-bar">
//         <li>
//           <Link
//             className="item-navbar"
//             to="#home"
//           // onClick={() => {
//           //   setActiveTab("home");
//           //   scrollToRef(homeRef);
//           // }}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             className="item-navbar"
//             to="#projects"
//           // onClick={() => {
//           //   setActiveTab("projects");
//           //   scrollToRef(projectsRef);
//           // }}
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             className="item-navbar"
//             to="#contact-me"
//           // onClick={() => {
//           //   setActiveTab("contact-me");
//           //   scrollToRef(contactRef);
//           // }}
//           >
//             Contact me
//           </Link>
//         </li>
//       </nav>
//       <Routes>
//         <Route path="#home" element={<Home ref={homeRef} />} />
//         <Route path="#contact-me" element={<ContactMe ref={contactRef} />} />
//         <Route path="#projects" element={<Projects ref={projectsRef} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Navbar;


export default function Navbar() {
  return (
    <nav >
      <ul className="nav-bar">
        <li>
          <a
            className="item-navbar"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="item-navbar"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="item-navbar"
            href="#contact-me"
          >
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  )
}
