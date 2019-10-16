import { graphql, StaticQuery } from "gatsby";
import React from "react";
import CiscoLogo from "../../assets/images/experience/cisco-logo.jpg";
import NetAppLogo from "../../assets/images/experience/netapp-logo.svg";
import ExperienceUnit from "../ExperienceUnit";
import Section from "../Section";

const ExperienceSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query ExperienceQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <Section title="💼&nbsp;&nbsp;Experience">
            <div className="row">
              <ExperienceUnit
                logo={NetAppLogo}
                colour="#fff"
                title="NetApp"
                link="https://www.netapp.com/"
                timeperiod="2018 - Present"
                subtitle="Building state-of-the-art tools for the enhanced developer productivity."
              />
              <ExperienceUnit
                logo={CiscoLogo}
                colour="#FFFFFF"
                title="Cisco"
                link="https://www.cisco.com/"
                timeperiod="2017 - 2018"
                subtitle="Built scalable node.js micro-service architectures as part of the Engineering Team in Team-
            One, a cloud-based messaging and collaboration tool."
              />
            </div>
          </Section>
        );
      }}
    />
  );
};

export default ExperienceSection;
