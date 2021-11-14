import emojiSupport from "detect-emoji-support";
import React from "react";
import "typeface-inter";
import BlogsSection from "../components/Blogs";
import ExperienceSection from "../components/Experience";
import Layout from "../components/Layout";
import ProjectsSection from "../components/Projects";
import AboutSection from "../components/Sidebar/About";
import LinksSection from "../components/Sidebar/Links";
import { parseContent } from "../lib/parseContent";

// const useStore = create((set) => ({
//   site: {
//     siteMetadata: frontmatter.siteMetadata,
//   },
//   content: {
//     about: frontmatter.about,
//     experience: frontmatter.experience,
//     projects: frontmatter.projects,
//     links: frontmatter.links,
//   },
// }));

const Main = ({ site, content, location }) => {
  const { siteMetadata } = site;
  const { title, description } = siteMetadata;
  return (
    <Layout location={location} siteMetadata={siteMetadata}>
      <div className="page">
        <div className="main">
          <h2 className="intro">
            <span>Hi!&nbsp;</span>
            <div className="greeting">
              <span>
                I'm&nbsp;
                <strong className="bold">{title}</strong>
              </span>
              {emojiSupport() && (
                <span role="img" aria-label="hand-wave-emoji">
                  &nbsp;👋&nbsp;
                </span>
              )}
            </div>
          </h2>
          <h4 className="bold summary">{description}</h4>
          <ExperienceSection content={content.experience} />
          <ProjectsSection content={content.projects} />
          <BlogsSection />
        </div>
        <div className="aside">
          <div className="top center-md">
            <AboutSection content={content.about} />
          </div>
          <div className="bottom">
            <LinksSection content={content.links} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const content = parseContent();
  const { frontmatter } = content;
  return {
    props: {
      site: {
        siteMetadata: frontmatter.siteMetadata,
      },
      content: {
        about: frontmatter.about,
        experience: frontmatter.experience,
        projects: frontmatter.projects,
        links: frontmatter.links,
      },
    },
  };
}

export default Main;
