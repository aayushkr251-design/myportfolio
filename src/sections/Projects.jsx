import React from "react";
import Icon from "../components/Icon.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <section className="section section--light" id="work">
      <div className="container">
        <div className="projects-heading">
          <SectionHeading eyebrow="Selected work" title="A few things I’ve made.">
            <p>A little strategy, a lot of care, and plenty of happy accidents.</p>
          </SectionHeading>
          <span className="project-count">2023 — 2025<br />SELECTED PROJECTS</span>
        </div>
        <div className="project-grid">
          {portfolio.projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <a
                className="project-art"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} project`}
              >
                <span className="project-art__number">{project.number} / 03</span>
                <span className="project-art__mark">{project.mark}</span>
                <span className="project-art__shape project-art__shape--one" />
                <span className="project-art__shape project-art__shape--two" />
                <span className="project-art__open"><Icon name="arrow" size={18} /></span>
                <span className="project-art__caption">A little more human, by design.</span>
              </a>
              <div className="project-info">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="project-disclaimer">
          Project names and descriptions are starter content — swap in your own work.
        </p>
      </div>
    </section>
  );
}
