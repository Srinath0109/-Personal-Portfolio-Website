import React from "react";

const projects = [
    { title: "E-Commerce Website", description: "A full-stack e-commerce platform.", link: "#" },
    { title: "AI Chatbot", description: "An NLP-based chatbot for customer support.", link: "#" },
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
