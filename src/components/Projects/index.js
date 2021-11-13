import React from "react";
import Section from "../Section";
import SectionItem from "../SectionItem";

const Projects = ({ content: projects }) => {
  return (
    <Section title="Projects & Open Source">
      <div className="row">
        {projects.map(({ title, description, duration, link }, index) => {
          return (
            <SectionItem
              small={true}
              key={index}
              type="project"
              title={title}
              link={link}
              timeperiod={duration}
              content={description}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
