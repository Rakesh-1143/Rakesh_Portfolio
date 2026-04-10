import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <h2>Experience</h2>
            <div className="timeline-card p-5 rounded-5 shadow-xl">
              <span className="badge bg-primary mb-3">Frontend Developer Intern</span>
              <h5 className="mb-3">Tek Pyramid</h5>
              <p className="text-muted mb-4">
                Delivered polished frontend solutions and API-driven features for professional applications.
              </p>
              <ul className="list-unstyled mb-0 fw-medium">
                <li className="mb-2">• Built 12+ reusable React components with consistent UI.</li>
                <li className="mb-2">• Integrated REST APIs using Axios for seamless data flows.</li>
                <li className="mb-2">• Implemented React Router to enable intuitive navigation.</li>
                <li className="mb-2">• Delivered responsive UI using Bootstrap and Tailwind.</li>
                <li className="mb-2">• Collaborated effectively with Git in agile teams.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 rounded-5 shadow-xl bg-surface-strong border border-white">
              <h5 className="mb-4">Tools & Technologies</h5>
              <div className="d-grid gap-2">
                {[
                  "React",
                  "Bootstrap",
                  "Axios",
                  "Git",
                  "REST APIs",
                ].map((item) => (
                  <span key={item} className="badge rounded-pill bg-secondary text-white py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
