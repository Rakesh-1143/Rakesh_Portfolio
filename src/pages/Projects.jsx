import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Projects</h2>
          <p className="text-muted mb-0">
            A selection of recent work with modern web technologies.
          </p>
        </div>
      </div>
      <div className="row g-4">
        <ProjectCard
          title="DevTinder"
          desc="Developer networking platform built with MERN, JWT auth, profile matching, and real-time collaboration features."
          tags={["React", "Node", "MongoDB", "JWT"]}
        />
        <ProjectCard
          title="Contact Manager"
          desc="Contact management system with CRUD, form validation, and REST APIs built using Express and MongoDB."
          tags={["Express", "Bootstrap", "REST", "MERN"]}
        />
      </div>
    </section>
  );
};

export default Projects;
