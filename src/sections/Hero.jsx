import React from "react";
import { portfolio } from "../data/portfolioData.js";
import Icon from "../components/Icon.jsx";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Open to opportunities
          </div>
          <p className="hero-kicker">Hey there, I&apos;m {portfolio.name} 👋</p>
          <h1>
            I make the web
            <br />
            feel <span className="highlight">more human.</span>
          </h1>
          <p className="hero-description">
            A {portfolio.role} creating thoughtful, accessible, and memorable
            experiences for the people on the other side of the screen.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              Explore my work <Icon name="arrow" size={17} />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <Icon name="arrowRight" size={17} />
            </a>
          </div>
          <div className="hero-meta">
            <span>{portfolio.location}</span>
            <span className="meta-divider" />
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract portrait illustration">
          <div className="art-orbit art-orbit--one" />
          <div className="art-orbit art-orbit--two" />
          <div className="art-sun" />
          <div className="art-card">
            <div className="art-card__top">
              <span>CREATIVE MIND</span>
              <span>✳</span>
            </div>
            <div className="art-face">
              <div className="face-hair" />
              <div className="face-ear face-ear--left" />
              <div className="face-ear face-ear--right" />
              <div className="face-neck" />
              <div className="face-neckline" />
              <div className="face-shape">
                <span className="face-brow face-brow--left" />
                <span className="face-brow face-brow--right" />
                <span className="face-eye face-eye--left" />
                <span className="face-eye face-eye--right" />
                <span className="face-nose" />
                <span className="face-mouth" />
                <span className="face-blush face-blush--left" />
                <span className="face-blush face-blush--right" />
              </div>
            </div>
            <div className="art-card__bottom">
              <span>DESIGN WITH INTENTION</span>
              <span>✦ &nbsp; 2025</span>
            </div>
          </div>
          <div className="floating-note floating-note--top">a little curious, always</div>
          <div className="floating-note floating-note--bottom">building good things ↗</div>
          <span className="art-spark art-spark--one">✳</span>
          <span className="art-spark art-spark--two">✦</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <Icon name="down" size={16} />
      </a>
    </section>
  );
}
