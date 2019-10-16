import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";
import Layout from "../components/layout";

import "circular-std";
import "./style.scss";

const App = props => (
  <Layout location={props.location}>
    <div className="index">
      <div className="main">
        <h1 className="intro">
          Hello 👋 , I'm <span className="bold"> Shriram Balaji</span>
        </h1>

        <h3 className="bold">
          Software Engineer building tools for humans.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
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
