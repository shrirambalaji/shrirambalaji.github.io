import React from "react";
import "./style.scss";

const redirectTo = link => window.open(link, "_blank");

const SectionItem = ({ title, timeperiod, subtitle, link }) => {
  return (
    <div className="card section-item col-md" onClick={() => redirectTo(link)}>
      <div className="title bold">{title}</div>
      <p className="duration">{timeperiod}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default SectionItem;
