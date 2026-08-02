import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="col-lg-6 mb-4"
    >
      <div className="premium-card h-100 d-flex flex-column overflow-hidden group">
        {/* Hero Image Placeholder */}
        <div className="bg-surface-strong position-relative" style={{ height: "240px" }}>
          <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-muted">
            <span className="fw-medium">Project Image Carousel Placeholder</span>
          </div>
          <div className="position-absolute top-0 end-0 m-3 d-flex gap-2 z-1">
            <span className="badge bg-primary rounded-pill shadow-sm">Responsive</span>
          </div>
        </div>

        <div className="p-4 d-flex flex-column flex-grow-1">
          <h4 className="h4 fw-bold mb-2">{project.title}</h4>
          <p className="text-muted mb-4">{project.desc}</p>
          
          <div className="mb-4">
            <h6 className="fw-bold mb-2 text-primary">Key Features:</h6>
            <ul className="text-muted small ps-3 mb-0">
              {project.features.map((feature, i) => (
                <li key={i} className="mb-1">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto">
            <div className="d-flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>

            <div className="d-flex gap-3 border-top pt-4 border-opacity-10">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary d-flex align-items-center gap-2 flex-grow-1 justify-content-center">
                  <FaGithub size={18} /> Source Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary d-flex align-items-center gap-2 flex-grow-1 justify-content-center">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
