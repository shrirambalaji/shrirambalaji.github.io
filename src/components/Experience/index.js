import React from "react";
import Section from "../Section";
import SectionItem from "../SectionItem";

const ExperienceSection = ({ content }) => {
  return (
    <Section title="Experience">
      <div className="row">
        {content.map(({ company, description, duration, link }, index) => (
          <SectionItem
            key={index}
            type="experience"
            link={link}
            title={company}
            timeperiod={duration}
            content={description}
          />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
