import React from "react";
import "./style.scss";

const redirectTo = (link) =>
  window ? window.open(link, "_blank") : null;

const SectionItem = ({
  title,
  timeperiod,
  content,
  link,
}) => {
  return (
    <div
      role="presentation"
      className="card section-item col-md"
      onClick={() => redirectTo(link)}
      onKeyDown={() => redirectTo(link)}
    >
      <div className="title bold">{title}</div>
      <p className="duration">{timeperiod}</p>
      <p className="content">{content}</p>
    </div>
  );
};

export default SectionItem;
