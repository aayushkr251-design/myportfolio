import React from "react";
import { portfolio } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">Y</span>
          <span>yourname<span className="brand-dot">.</span></span>
        </a>
        <p>Made with care, curiosity & a little bit of caffeine.</p>
        <a className="footer-email" href={`mailto:${portfolio.email}`}>{portfolio.email} ↗</a>
        <span className="footer-copy">© {new Date().getFullYear()} Your Name</span>
      </div>
    </footer>
  );
}
