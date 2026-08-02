import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Automation Engineer",
      company: "Tracxn",
      duration: "Apr 2026 – Jul 2026",
      responsibilities: [
        "Developed and maintained end-to-end automated test scripts for web applications entirely using Node.js and Playwright, strengthening regression testing coverage across releases.",
        "Executed and debugged automated test suites to identify defects early in the development cycle, ensuring robust, production-ready application performance.",
        "Worked closely with the engineering team to translate manual QA workflows into reliable, repeatable automated checks."
      ],
      tech: ["Node.js", "Playwright", "JavaScript", "QA Automation"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Test Yantra",
      duration: "Oct 2025 – Apr 2026",
      responsibilities: [
        "Developed 12+ reusable React components, reducing UI redundancy and significantly improving maintainability across the codebase.",
        "Integrated REST APIs using Axios and implemented dynamic routing with React Router for seamless, multi-page navigation.",
        "Built responsive, cross-browser applications using Tailwind CSS and Bootstrap, ensuring consistent UI across devices.",
        "Collaborated using Git workflows for feature releases and bug resolution within an agile, cross-functional team environment."
      ],
      tech: ["React.js", "Tailwind CSS", "Bootstrap", "Axios", "Git"]
    }
  ];

  return (
    <section id="experience" className="section bg-white position-relative">
      <div className="container z-1 relative">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Work <span className="text-gradient">Experience</span></h2>
          <p className="lead text-muted max-w-2xl mx-auto">
            My professional journey and contributions to the tech industry.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative">
              {/* Timeline Line */}
              <div className="position-absolute h-100 border-start border-2 border-primary border-opacity-25 d-none d-md-block" style={{ left: "50%", transform: "translateX(-50%)" }}></div>
              
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`row mb-5 align-items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="col-md-5">
                    {/* Placeholder for spacing on alternate sides */}
                  </div>
                  
                  <div className="col-md-2 d-none d-md-flex justify-content-center position-relative">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg position-relative z-1" style={{ width: "48px", height: "48px" }}>
                      <Briefcase size={20} />
                    </div>
                  </div>
                  
                  <div className="col-md-5">
                    <div className="premium-card p-4 hover-lift">
                      <div className="d-flex align-items-center mb-2 gap-2 text-primary fw-medium">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <h3 className="h4 fw-bold mb-1">{exp.role}</h3>
                      <h4 className="h6 text-muted mb-4">{exp.company}</h4>
                      
                      <ul className="list-unstyled mb-4 text-muted">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span style={{ lineHeight: 1.6 }}>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="d-flex flex-wrap gap-2 mt-auto">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="badge bg-surface-strong text-muted border px-2 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
