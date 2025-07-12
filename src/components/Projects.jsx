import React from "react";                      // ✅ Correct
import "../styles/Projects.css";                // ✅ Make sure file exists and is correctly named
import projects from "../data/projects";        // ✅ Correct path if your file is at src/data/projects.js

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`Open ${project.title} project`}
          >
            <div
              className="project-card"
              style={{ backgroundImage: `url(${project.image})` }}   // ✅ Dynamic image background
            >
              <div className="project-title">{project.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
