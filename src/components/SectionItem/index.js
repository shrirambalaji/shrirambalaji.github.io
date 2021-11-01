import React from "react";
import "./style.scss";

const SectionItem = ({
  title,
  timeperiod,
  content,
  link,
  small,
}) => {
  return (
    <div
      role="presentation"
      className={`card section-item ${
        small ? "col-width-small col-md" : "col-lg col-md-12"
      }`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        <div className="card-content">
          <div className="title bold">{title}</div>
          <p className="duration">{timeperiod}</p>
          <p className="content">{content}</p>
        </div>
      </a>
    </div>
  );
};

export default SectionItem;
