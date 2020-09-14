import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Section from "../Section";
import SectionItem from "../SectionItem";

const ProjectsList = () => {
  return (
    <Section title="Projects">
      <div className="row">
        <StaticQuery
          query={graphql`
            query ProjectsQuery {
              allMarkdownRemark {
                nodes {
                  frontmatter {
                    projects {
                      description
                      duration
                      link
                      name
                      tags
                      wip
                      title
                    }
                  }
                }
              }
            }
          `}
          render={({ allMarkdownRemark }) => {
            if (!allMarkdownRemark) return null;
            const frontmatter =
              allMarkdownRemark.nodes[0] &&
              allMarkdownRemark.nodes[0].frontmatter;

            const { projects } = frontmatter;
            return projects.map(
              ({ title, description, duration, tags, link }, index) => {
                return (
                  <SectionItem
                    key={index}
                    type="project"
                    title={title}
                    link={link}
                    timeperiod={duration}
                    content={description}
                  />
                );
              }
            );
          }}
        ></StaticQuery>
      </div>
    </Section>
  );
};

export default ProjectsList;
