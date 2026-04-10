import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="section hero-section d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <p className="text-primary fw-semibold mb-3">
              Building premium web experiences
            </p>
            <h1 className="display-5 fw-bold mb-3">Hello, I'm Rakesh Reddy.</h1>
            <p className="lead mb-4 text-muted">
              I design and develop polished MERN applications with thoughtful
              UI, solid architecture, and production-ready performance.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a
                href="#contact"
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill"
              >
                Explore Work
              </a>
            </div>
            <div className="mt-5 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start text-start">
              <div className="hero-stat p-3 rounded-4 bg-white shadow-sm">
                <h3 className="h5 mb-1">6</h3>
                <p className="mb-0 text-muted">Month experience</p>
              </div>
              <div className="hero-stat p-3 rounded-4 bg-white shadow-sm">
                <h3 className="h5 mb-1">10+</h3>
                <p className="mb-0 text-muted">Projects shipped</p>
              </div>
              <div className="hero-stat p-3 rounded-4 bg-white shadow-sm">
                <h3 className="h5 mb-1">MERN</h3>
                <p className="mb-0 text-muted">Stack expertise</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="hero-card p-5 rounded-5 shadow-xl">
              <h3 className="mb-3">Featured Skills</h3>
              <p className="text-muted mb-4">
                Crafting elegant interfaces with strong system design and
                high-quality maintainable code.
              </p>
              <div className="d-grid gap-2">
                <span className="badge rounded-pill bg-primary">React</span>
                <span className="badge rounded-pill bg-secondary">Node.js</span>
                <span className="badge rounded-pill bg-info text-dark">
                  Bootstrap
                </span>
                <span className="badge rounded-pill bg-success">MongoDB</span>
                <span className="badge rounded-pill bg-warning text-dark">
                  APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
