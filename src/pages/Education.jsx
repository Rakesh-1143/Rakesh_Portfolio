import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section bg-light position-relative">
      <div className="container z-1 relative">
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">Education & <span className="text-gradient">Certifications</span></h2>
            <p className="lead text-muted">
              My academic background and continuous learning journey.
            </p>
          </div>
        </div>

        <div className="row justify-content-center gy-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-lg-6"
          >
            <div className="premium-card p-5 h-100 position-relative overflow-hidden">
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                <GraduationCap size={100} className="text-primary" />
              </div>
              
              <div className="d-flex align-items-center mb-4 text-primary">
                <div className="p-3 rounded-circle bg-primary bg-opacity-10 me-3">
                  <GraduationCap size={24} />
                </div>
                <h3 className="h4 fw-bold mb-0">Academic Degree</h3>
              </div>
              
              <div className="ps-2 border-start border-3 border-primary border-opacity-25 mt-4 pt-2 ms-4">
                <div className="position-relative ms-4">
                  <div className="position-absolute bg-primary rounded-circle" style={{ width: '12px', height: '12px', left: '-29px', top: '6px' }}></div>
                  <span className="badge bg-surface-strong text-primary mb-2 border">2025</span>
                  <h4 className="h5 fw-bold mb-1">MCA in Computer Science</h4>
                  <p className="text-muted mb-2">Jawaharlal Nehru Technological University, Anantapur</p>
                  <p className="text-muted small">
                    Focused on advanced computer science concepts, software engineering principles, and hands-on application development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-lg-6"
          >
            <div className="premium-card p-5 h-100 position-relative overflow-hidden">
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                <Award size={100} className="text-secondary" />
              </div>

              <div className="d-flex align-items-center mb-4 text-secondary">
                <div className="p-3 rounded-circle bg-secondary bg-opacity-10 me-3">
                  <Award size={24} />
                </div>
                <h3 className="h4 fw-bold mb-0">Certifications</h3>
              </div>
              
              <div className="mt-4 pt-2">
                <div className="p-4 rounded-4 bg-surface-strong border border-opacity-50 border-secondary mb-3 hover-lift">
                  <h4 className="h6 fw-bold mb-1">Premium Certification Placeholder</h4>
                  <p className="text-muted small mb-0">Issuing Organization • Year</p>
                </div>
                <div className="p-4 rounded-4 bg-surface-strong border border-opacity-50 border-secondary hover-lift">
                  <h4 className="h6 fw-bold mb-1">Another Certification Placeholder</h4>
                  <p className="text-muted small mb-0">Issuing Organization • Year</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
