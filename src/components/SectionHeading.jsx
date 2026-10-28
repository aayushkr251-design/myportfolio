import React from "react";

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <div className="section-heading__description">{children}</div>}
    </div>
  );
}
