import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import GithubSection from "./pages/GithubSection";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubSection />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;