import React from "react";

const ProjectCard = ({ title, desc, tags = [] }) => {
  return (
    <div className="col-md-6">
      <div className="card project-card h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted flex-grow-1">{desc}</p>
          <div className="mb-3">
            {tags.map((tag) => (
              <span key={tag} className="badge bg-secondary me-1 mb-1">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="btn btn-outline-primary mt-auto align-self-start"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
