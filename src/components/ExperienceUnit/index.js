import React from "react";
import "./style.scss";


const ExperienceUnit = props => {
  return (
    <div className="experience-unit col-md">
      <div className="title bold">{props.title}</div>
      <div className="time-period">{props.timeperiod}</div>
      <div className="subtitle">{props.subtitle}</div>
    </div>
  );
};

export default ExperienceUnit;
