import React from "react";

import "./style.scss";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h5 className="bold section-title">{title}</h5>
      <div className="section-units">{children}</div>
    </div>
  );
};

export default Section;
