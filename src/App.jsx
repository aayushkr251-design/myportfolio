import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Education from "./sections/Education.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
