import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <div className="p-5 rounded-5 shadow-xl bg-white border border-white">
              <h2>Contact</h2>
              <p className="text-muted mb-4">
                Ready to collaborate on your next project? Share the details and
                I will reply quickly.
              </p>
              <p className="mb-2">
                <strong>Email:</strong> rakeshreddy261002@gmail.com
              </p>
              <p className="mb-0">
                <strong>Location:</strong> Hyderabad, India
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="p-5 rounded-5 shadow-xl bg-white border border-white">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control form-control-lg"
                    rows="6"
                    placeholder="Tell me about your project"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary btn-lg w-100 rounded-pill"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
