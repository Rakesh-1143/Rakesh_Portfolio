import React from "react";
import { motion } from "framer-motion";
import { Code2, Target, Users, Zap } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section bg-white position-relative">
      <div className="container z-1 relative">
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">About <span className="text-gradient">Me</span></h2>
            <p className="lead text-muted">
              Transforming complex problems into elegant, production-ready solutions.
            </p>
          </div>
        </div>

        <div className="row gy-5 align-items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-lg-6"
          >
            <motion.div variants={itemVariants} className="premium-card p-4 p-md-5 glass h-100">
              <h3 className="h4 mb-4 fw-bold">My Story</h3>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                I am a Full Stack Developer with hands-on experience building scalable MERN stack applications and developing Python-based test automation using Playwright. My journey in tech is driven by a passion for creating seamless user experiences backed by robust, secure, and efficient backend architectures.
              </p>
              <p className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
                Whether I'm designing responsive React interfaces, architecting RESTful APIs with Node.js, or writing end-to-end automated tests to catch defects before release, I bring a detail-oriented and collaborative approach to every team I work with.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-lg-6"
          >
            <div className="row g-4">
              <motion.div variants={itemVariants} className="col-sm-6">
                <div className="premium-card p-4 h-100 text-center text-sm-start hover-lift">
                  <div className="d-inline-flex p-3 rounded-circle bg-primary bg-opacity-10 text-primary mb-3">
                    <Target size={24} />
                  </div>
                  <h4 className="h5 fw-bold mb-2">Problem Solving</h4>
                  <p className="text-muted mb-0 small">
                    Strong foundation in Data Structures & Algorithms. Designing robust solutions with maintenance in mind.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="col-sm-6">
                <div className="premium-card p-4 h-100 text-center text-sm-start hover-lift">
                  <div className="d-inline-flex p-3 rounded-circle bg-secondary bg-opacity-10 text-secondary mb-3">
                    <Code2 size={24} />
                  </div>
                  <h4 className="h5 fw-bold mb-2">Quality Code</h4>
                  <p className="text-muted mb-0 small">
                    Writing clean, reusable, production-grade components and maintaining high test coverage.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="col-sm-6">
                <div className="premium-card p-4 h-100 text-center text-sm-start hover-lift">
                  <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                    <Zap size={24} />
                  </div>
                  <h4 className="h5 fw-bold mb-2">Fast Execution</h4>
                  <p className="text-muted mb-0 small">
                    Agile mindset with a consistent track record of Git-based collaboration and feature releases.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="col-sm-6">
                <div className="premium-card p-4 h-100 text-center text-sm-start hover-lift">
                  <div className="d-inline-flex p-3 rounded-circle bg-info bg-opacity-10 text-info mb-3">
                    <Users size={24} />
                  </div>
                  <h4 className="h5 fw-bold mb-2">Team Player</h4>
                  <p className="text-muted mb-0 small">
                    Translating manual workflows into reliable checks and collaborating across cross-functional teams.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
