import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, Terminal, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      color: "text-primary",
      bgColor: "bg-primary",
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      color: "text-secondary",
      bgColor: "bg-secondary",
      skills: [
        { name: "React.js & Redux", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server size={24} />,
      color: "text-info",
      bgColor: "bg-info",
      skills: [
        { name: "Node.js & Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      color: "text-success",
      bgColor: "bg-success",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Testing & Tools",
      icon: <Terminal size={24} />,
      color: "text-warning",
      bgColor: "bg-warning",
      skills: [
        { name: "Playwright (Test Automation)", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      title: "Core CS",
      icon: <Wrench size={24} />,
      color: "text-accent",
      bgColor: "bg-primary",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "System Design Concepts", level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Technical <span className="text-gradient">Expertise</span></h2>
          <p className="lead text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="row g-4"
        >
          {skillCategories.map((category, idx) => (
            <motion.div variants={itemVariants} key={idx} className="col-md-6 col-lg-4">
              <div className="premium-card p-4 h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className={`p-3 rounded-circle ${category.bgColor} bg-opacity-10 ${category.color} me-3`}>
                    {category.icon}
                  </div>
                  <h4 className="h5 fw-bold mb-0">{category.title}</h4>
                </div>
                
                <div className="d-flex flex-column gap-3">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium text-muted">{skill.name}</span>
                      </div>
                      <div className="progress" style={{ height: '8px', borderRadius: '4px', backgroundColor: 'var(--border)' }}>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                          className={`progress-bar ${category.bgColor}`} 
                          role="progressbar" 
                          aria-valuenow={skill.level} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                          style={{ borderRadius: '4px' }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
