import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const footerClass =
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <footer className={`text-center py-4 ${footerClass}`}>
      <div className="container">
        <p className="mb-1">© 2026 Rakesh Reddy</p>
        <small className="text-muted">
          Built with React, Bootstrap, and modern frontend best practices.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
