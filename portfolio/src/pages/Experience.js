import React from "react";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";
import "../styles/Experience.css";

function Experience() {
    return (
        <div className="Experience">
          <VerticalTimeline lineColor="#21325e" className="experience">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020-2024"
              iconStyle={{ background: "#21325e", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                McGill University | Montreal, Canada
              </h3>
              <p>
                Bachelor of Science in Computer Science
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2023 - Aug 2023"
              iconStyle={{ background: "#21325e", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">
                RBC Royal Bank | Toronto, Canada
              </h3>
              <p>
                Developer @ RBC Amplify Program
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jan 2023 - Apr 2023"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">
                Rogers Communications | Montreal, Canada
              </h3>
              <p>
                Software Engineer Intern
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Sept 2022 - Dec 2022"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">
                Hydro-Québec | Montreal, Canada
              </h3>
              <p>
                Cyber-security Intern
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      );
}

export default Experience;