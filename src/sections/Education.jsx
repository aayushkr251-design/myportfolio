import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section className="section section--paper" id="education">
      <div className="container education-grid">
        <div>
          <SectionHeading eyebrow="The learning never stops" title="My path so far." />
          <p className="education-aside">
            A few milestones that shaped the way I think, learn, and make things.
          </p>
          <span className="education-doodle" aria-hidden="true">↘</span>
        </div>
        <div className="timeline">
          {portfolio.education.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.degree}`}>
              <span className="timeline-dot" />
              <p className="timeline-period">{item.period}</p>
              <h3>{item.degree}</h3>
              <p className="timeline-school">{item.school}</p>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
