import React from "react";
import ExperienceList from "../components/ExperienceList";
import ProjectsList from "../components/ProjectsList";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";
import Layout from "../components/layout";

import "typeface-inter";
import "./style.scss";

document.documentElement.setAttribute("data-browser", navigator.userAgent);

const App = props => (
  <Layout location={props.location}>
    <div>
      <div className="main">
        <h2 className="intro">
          <span>Hi!&nbsp;</span>
          <span>
            I'm
            <strong className="bold"> Shriram Balaji </strong>
          </span>
          <span role="img" aria-label="hand-wave-emoji">
            &nbsp;👋&nbsp;
          </span>
        </h2>
        <h4 className="bold summary">
          Software Engineer building tools for humans.
        </h4>
        <ExperienceList />
        <ProjectsList />
      </div>

      <div className="aside">
        <div className="top center-md">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
  </Layout>
);

export default App;
