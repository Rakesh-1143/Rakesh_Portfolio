import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="p-5 rounded-5 shadow-xl bg-white border border-white">
              <h2>About Me</h2>
              <p className="lead text-muted mb-4">
                I build polished web applications and products that solve real problems. My strengths are clean UI, thoughtful architecture, and performance-driven results.
              </p>
              <div className="row g-3 mt-4">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-surface-strong">
                    <p className="mb-1 text-primary fw-semibold">Problem Solving</p>
                    <p className="mb-0 text-muted">Designing robust solutions with maintenance in mind.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-surface-strong">
                    <p className="mb-1 text-primary fw-semibold">UI Quality</p>
                    <p className="mb-0 text-muted">Friendly interfaces that work on every device.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 rounded-5 shadow-xl bg-white border border-white">
              <h5 className="mb-4">Core Skills</h5>
              <div className="row g-3">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Bootstrap",
                  "REST APIs",
                  "Git",
                ].map((skill) => (
                  <div key={skill} className="col-6">
                    <div className="p-3 rounded-4 bg-surface-strong text-center">
                      <span className="fw-semibold">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
