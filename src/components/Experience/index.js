import { graphql, StaticQuery } from "gatsby";
import React from "react";
import SectionItem from "../SectionItem";
import Section from "../Section";

const Experience = () => {
  return (
    <StaticQuery
      query={graphql`
        query ExperienceQuery {
          allMarkdownRemark {
            nodes {
              frontmatter {
                experience {
                  company
                  description
                  duration
                  link
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark }) => {
        if (!allMarkdownRemark) return null;
        const frontmatter =
          allMarkdownRemark.nodes[0] && allMarkdownRemark.nodes[0].frontmatter;

        const { experience: experienceContents } = frontmatter;
        return (
          <Section title="Experience" className="experience">
            <div className="row">
              {experienceContents.map(
                ({ company, description, duration, link }, index) => (
                  <SectionItem
                    key={index}
                    type="experience"
                    link={link}
                    title={company}
                    timeperiod={duration}
                    content={description}
                  />
                )
              )}
            </div>
          </Section>
        );
      }}
    />
  );
};

export default Experience;
