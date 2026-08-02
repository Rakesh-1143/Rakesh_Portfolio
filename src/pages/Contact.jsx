import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <section id="contact" className="section bg-light position-relative">
      <div className="container z-1 relative">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get In <span className="text-gradient">Touch</span></h2>
          <p className="lead text-muted max-w-2xl mx-auto">
            Ready to collaborate on your next project? Share the details and I will reply quickly.
          </p>
        </div>

        <div className="row g-4 align-items-stretch justify-content-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-lg-5"
          >
            <div className="premium-card p-5 h-100 d-flex flex-column bg-primary text-white" style={{ border: 'none' }}>
              <h3 className="h3 fw-bold mb-4">Contact Information</h3>
              <p className="mb-5 text-white-50">
                Fill up the form and I will get back to you within 24 hours.
              </p>
              
              <div className="d-flex flex-column gap-4 mb-5 flex-grow-1">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white bg-opacity-25 p-3 rounded-circle d-flex align-items-center justify-content-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1">Email</h5>
                    <a href="mailto:rakeshreddy261002@gmail.com" className="text-white text-decoration-none opacity-75">rakeshreddy261002@gmail.com</a>
                  </div>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white bg-opacity-25 p-3 rounded-circle d-flex align-items-center justify-content-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1">Phone</h5>
                    <a href="tel:+919182837081" className="text-white text-decoration-none opacity-75">+91 9182837081</a>
                  </div>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white bg-opacity-25 p-3 rounded-circle d-flex align-items-center justify-content-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1">Location</h5>
                    <span className="text-white opacity-75">Bengaluru, India</span>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 mt-auto">
                <a href="https://github.com/Rakesh-1143" target="_blank" rel="noopener noreferrer" className="text-white bg-white bg-opacity-25 p-2 rounded-circle hover-lift transition-all">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/rakesh-reddy78" target="_blank" rel="noopener noreferrer" className="text-white bg-white bg-opacity-25 p-2 rounded-circle hover-lift transition-all">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-lg-7"
          >
            <div className="premium-card p-4 p-md-5 h-100">
              <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input
                      className="form-control"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4 flex-grow-1">
                  <label className="form-label fw-semibold">Your Message</label>
                  <textarea
                    className="form-control h-100"
                    style={{ minHeight: '150px', resize: 'none' }}
                    placeholder="Tell me about your project, timeline, and budget..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button
                  className="btn btn-primary w-100 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2 fw-bold"
                  type="submit"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
