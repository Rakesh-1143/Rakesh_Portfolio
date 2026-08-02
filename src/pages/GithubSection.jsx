import React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const GithubSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Open <span className="text-gradient">Source</span></h2>
          <p className="lead text-muted max-w-2xl mx-auto">
            My contributions to the developer community and continuous coding activity.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="premium-card p-4 p-md-5 overflow-hidden"
        >
          <div className="row g-4 align-items-center mb-5">
            <div className="col-md-auto text-center text-md-start">
              <div className="d-inline-flex p-4 rounded-circle bg-surface-strong text-muted border mb-3 mb-md-0 shadow-sm">
                <FaGithub size={48} />
              </div>
            </div>
            <div className="col-md text-center text-md-start">
              <h3 className="h3 fw-bold mb-1">@Rakesh-1143</h3>
              <p className="text-muted mb-0">Building things for the web.</p>
            </div>
            <div className="col-md-auto text-center">
              <a href="https://github.com/Rakesh-1143" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary rounded-pill px-4">
                Follow on GitHub
              </a>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-6 col-md-3">
              <div className="p-4 rounded-4 bg-surface-strong text-center h-100 hover-lift border">
                <Activity size={24} className="text-primary mb-2 mx-auto" />
                <h4 className="h3 fw-bold mb-1 text-primary">500+</h4>
                <p className="text-muted small mb-0 fw-medium">Contributions</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 rounded-4 bg-surface-strong text-center h-100 hover-lift border">
                <FaGithub size={24} className="text-secondary mb-2 mx-auto" />
                <h4 className="h3 fw-bold mb-1 text-secondary">25+</h4>
                <p className="text-muted small mb-0 fw-medium">Repositories</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 rounded-4 bg-surface-strong text-center h-100 hover-lift border">
                <Star size={24} className="text-warning mb-2 mx-auto" />
                <h4 className="h3 fw-bold mb-1 text-warning">10+</h4>
                <p className="text-muted small mb-0 fw-medium">Stars</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 rounded-4 bg-surface-strong text-center h-100 hover-lift border">
                <GitFork size={24} className="text-info mb-2 mx-auto" />
                <h4 className="h3 fw-bold mb-1 text-info">5+</h4>
                <p className="text-muted small mb-0 fw-medium">Forks</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-strong rounded-4 p-4 border text-center" style={{ minHeight: '200px' }}>
            <p className="text-muted mb-2 fw-medium">GitHub Contribution Graph Placeholder</p>
            <div className="d-flex flex-wrap gap-1 justify-content-center opacity-50 mt-4">
              {/* Fake contribution graph squares */}
              {Array.from({ length: 150 }).map((_, i) => (
                <div key={i} className={`rounded-1 ${Math.random() > 0.7 ? 'bg-success' : Math.random() > 0.4 ? 'bg-success bg-opacity-50' : 'bg-secondary bg-opacity-10'}`} style={{ width: '12px', height: '12px' }}></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
