import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolioData.js";

export default function About() {
  return (
    <section className="section section--light" id="about">
      <div className="container about-grid">
        <SectionHeading eyebrow="A bit about me" title="Good work starts with good questions.">
          <p>{portfolio.intro}</p>
        </SectionHeading>
        <div className="about-note">
          <span className="about-note__mark">“</span>
          <p>
            I believe the best digital experiences are the ones that make
            someone&apos;s day a little easier.
          </p>
          <span className="about-note__caption">A small principle I build by</span>
        </div>
      </div>
      <div className="container about-facts">
        <div className="fact">
          <span className="fact__number">01</span>
          <span>Curious by default</span>
        </div>
        <div className="fact">
          <span className="fact__number">02</span>
          <span>Thoughtful in the details</span>
        </div>
        <div className="fact">
          <span className="fact__number">03</span>
          <span>Always learning, always making</span>
        </div>
      </div>
    </section>
  );
}
