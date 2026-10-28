import React, { useState } from "react";
import Icon from "../components/Icon.jsx";
import { portfolio } from "../data/portfolioData.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio hello from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`,
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Have a good one in mind?</span>
          <h2>Let&apos;s make<br /><span>something matter.</span></h2>
          <p>
            Have a project, an opportunity, or just want to say hi? My inbox is
            open and the coffee is imaginary but always ready.
          </p>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            <Icon name="mail" size={18} /> {portfolio.email}
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Your name</span>
            <input
              autoComplete="name"
              name="name"
              onChange={updateField}
              placeholder="The name your friends use"
              required
              value={form.name}
            />
          </label>
          <label>
            <span>Email address</span>
            <input
              autoComplete="email"
              name="email"
              onChange={updateField}
              placeholder="you@example.com"
              required
              type="email"
              value={form.email}
            />
          </label>
          <label>
            <span>A little about it</span>
            <textarea
              name="message"
              onChange={updateField}
              placeholder="Tell me what you're thinking..."
              required
              rows="4"
              value={form.message}
            />
          </label>
          <button className="button button--light" type="submit">
            Send a message <Icon name="arrow" size={17} />
          </button>
          <p className="form-note">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  );
}
