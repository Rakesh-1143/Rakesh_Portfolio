import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "DevTinder — Developer Networking",
      desc: "A full-stack MERN application enabling developers to create profiles, and send, accept, or reject connection requests in real time.",
      features: [
        "Secure JWT-based authentication & protected routes.",
        "Real-time profile matching and connection requests.",
        "RESTful APIs and optimized MongoDB schemas."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/Rakesh-1143/DevTinder-fullStack",
      demo: "https://devtinder-web-5ydb.onrender.com/"
    },
    {
      title: "Contact Manager",
      desc: "A comprehensive CRUD web application to manage contact records efficiently with a clean responsive UI.",
      features: [
        "Full CRUD functionality (Add, Update, Delete, Search).",
        "Structured storage using MongoDB.",
        "RESTful API integration with responsive frontend."
      ],
      tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/Rakesh-1143/contact-manager",
      demo: "https://contact-manager-q43k.vercel.app/contactlist"
    }
  ];

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Featured <span className="text-gradient">Projects</span></h2>
          <p className="lead text-muted max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and problem-solving skills.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
