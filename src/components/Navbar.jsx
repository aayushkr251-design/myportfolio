import React, { useState } from "react";
import Icon from "./Icon.jsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">Y</span>
          <span>yourname<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <div
          className={`nav-links${menuOpen ? " nav-links--open" : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <Icon name="arrow" size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
