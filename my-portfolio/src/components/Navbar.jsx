import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Ahmed <span>Kotb</span></div>

      {}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      {}
      <div
        className={`menu-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="burger"></span>
        <span className="burger"></span>
        <span className="burger"></span>
      </div>
    </nav>
  );
};

export default Navbar;
