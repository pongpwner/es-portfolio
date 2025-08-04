import React from "react";
import "./projects.styles.scss";
import Project from "../project/project.component";
import { projects } from "./projects";

const Projects = () => (
  <section className="projects" id="projects">
    <h1 className="heading1 u-margin-top-small">Projects</h1>
    <div className="project-list">
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          githubLink={project.github}
          link={project.link}
          live={project.live}
          modalDescription={project.modalDescription}
          technologies={project.technologies}
        />
      ))}
    </div>
  </section>
);

export default Projects;
{
  /* <div className="link-container">
<a
  className="front-end-mentor-link"
  href="https://www.frontendmentor.io/profile/pongpwner"
  target="_blank"
  rel="noreferrer"
>
  front end mentor coding challenge solutions
</a>
</div> */
}
