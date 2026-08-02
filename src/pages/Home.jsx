import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container position-relative z-1">
        <div className="row align-items-center gy-5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-lg-7 text-center text-lg-start"
          >
            <div className="d-inline-block mb-3 px-3 py-1 rounded-pill glass text-primary fw-medium shadow-sm">
              <span className="me-2">👋</span> Available for new opportunities
            </div>
            
            <h1 className="display-3 fw-bold mb-3 text-gradient">
              Rakesh Reddy B
            </h1>
            
            <div className="h2 mb-4 text-muted fw-normal" style={{ minHeight: '40px' }}>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Python Automation Engineer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="lead mb-4 text-muted" style={{ maxWidth: '600px' }}>
              I design and develop polished web applications with thoughtful UI, solid architecture, and robust automated testing using Playwright.
            </p>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2">
                <Download size={20} /> Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2">
                <Mail size={20} /> Contact Me
              </a>
              <div className="d-flex gap-2 mt-3 mt-sm-0">
                <a href="https://github.com/Rakesh-1143" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-lg rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '54px', height: '54px' }}>
                  <FaGithub size={22} />
                </a>
                <a href="https://linkedin.com/in/rakesh-reddy78" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-lg rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '54px', height: '54px' }}>
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start text-start">
              <motion.div whileHover={{ y: -5 }} className="hero-stat p-4 premium-card text-center">
                <h2 className="display-5 fw-bold text-primary mb-1">1+</h2>
                <p className="mb-0 text-muted fw-medium">Years Experience</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="hero-stat p-4 premium-card text-center">
                <h2 className="display-5 fw-bold text-primary mb-1">10+</h2>
                <p className="mb-0 text-muted fw-medium">Projects Shipped</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="col-lg-5"
          >
            <div className="premium-card p-5 glass position-relative overflow-hidden">
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L65 35L100 50L65 65L50 100L35 65L0 50L35 35L50 0Z" fill="currentColor" className="text-primary"/>
                </svg>
              </div>
              <h3 className="mb-4 h2">Core <span className="text-gradient">Stack</span></h3>
              <p className="text-muted mb-4">
                Proficient in modern web technologies and testing frameworks.
              </p>
              <div className="d-flex flex-wrap gap-2 relative z-1">
                {['JavaScript', 'React.js', 'Node.js', 'Python', 'Playwright', 'MongoDB', 'Express', 'Tailwind CSS', 'Redux', 'Git'].map((tech, i) => (
                  <motion.span 
                    key={tech} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    className={`badge ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-info'} fs-6 px-3 py-2 rounded-pill shadow-sm`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
