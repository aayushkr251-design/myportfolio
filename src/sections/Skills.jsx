import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolioData.js";

const toolTags = ["Figma", "VS Code", "GitHub", "Responsive design", "Design systems", "REST APIs"];

export default function Skills() {
  return (
    <section className="section section--dark" id="skills">
      <div className="container">
        <div className="skills-intro">
          <SectionHeading eyebrow="What I bring" title="A good mix of craft & curiosity.">
            <p>
              From a blank canvas to the final tiny detail, here are a few of
              the tools and skills I reach for.
            </p>
          </SectionHeading>
          <span className="skills-stamp" aria-hidden="true">MADE WITH<br />INTENTION ✳</span>
        </div>
        <div className="skills-layout">
          <div className="skill-list">
            {portfolio.skills.map((skill, index) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-row__top">
                  <span><span className="skill-index">0{index + 1}</span>{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div
                  className="skill-track"
                  role="meter"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={Number.parseInt(skill.level, 10)}
                >
                  <span style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>
          <div className="toolbox">
            <p className="toolbox__label">IN MY TOOLBOX</p>
            <div className="tool-tags">
              {toolTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="toolbox-note">
              <span className="toolbox-note__star">✳</span>
              <p>Tools change. The care you put into your work doesn&apos;t.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
