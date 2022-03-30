import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav className="nav-bar">
          <Link className="item-navbar" to="/">
            Home
          </Link>
          <Link className="item-navbar" to="/projects">
            Projects
          </Link>
          <Link className="item-navbar " to="/contacts">
            Contacts
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
