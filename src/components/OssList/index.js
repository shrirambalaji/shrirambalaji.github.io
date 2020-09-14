import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Section from "../Section";
import SectionItem from "../SectionItem";

const OssList = () => {
  return (
    <Section title="Open Source">
      <div className="row">
        <StaticQuery
          query={graphql`
            query OssQuery {
              allMarkdownRemark {
                nodes {
                  frontmatter {
                    oss {
                      title
                      description
                      link
                      name
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

            const { oss } = frontmatter;
            return oss.map(
              ({ title, description, duration, tags, link }, index) => {
                return (
                  <SectionItem
                    key={index}
                    type="oss"
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

export default OssList;
