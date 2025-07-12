import React from "react";
import "../styles/Projects.css";
import projects from "../data/projects";

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
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-title">{project.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
