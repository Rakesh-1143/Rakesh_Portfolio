import React, { useContext, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(true);
  const navbarClass = theme === "dark" ? "navbar-custom navbar-custom-dark" : "navbar-custom";

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarClass}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Rakesh<span className="text-primary">.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-controls="portfolioNavbar"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse${collapsed ? "" : " show"}`}
          id="portfolioNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex mt-3 mt-lg-0 ms-lg-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
