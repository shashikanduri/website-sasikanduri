import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Home.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineer Intern - Office of Water Programs
          </h4>
          <p style={{fontSize:"16px"}}>
            Sacramento, California<br />
            2023 - present
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(122 85 62)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Sacramento State University
          </h4>
          <p style={{fontSize:"16px"}}>Master's Degree ins Computer Science<br/>Sacramento, California<br />
          2022 - present</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Senior Software Engineer - Aaseya IT Services
          </h4>

          <p style={{fontSize:"16px"}}>
            Hyderabad, India<br />
            2020 - 2022
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineer - JK Technosoft
          </h4>
          <p style={{fontSize:"16px"}}>
            Hyderabad, India<br />
            2019 - 2020
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Associate Engineer - Virtusa
          </h4>
          <p style={{fontSize:"16px"}}>
            Hyderabad, India<br />
            2017 - 2019
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(122 85 62)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            CVR College of Engineering
          </h4>
          <p style={{fontSize:"16px"}}>
            Bachelor's Degree in Information Technology<br />
            Hyderabad, India<br />
            2013 - 2017
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
