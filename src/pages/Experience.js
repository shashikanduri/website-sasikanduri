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
          date="2023 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineer - Graduate Student Developer
          </h4>
          <p style={{fontSize:"16px"}}>
            Office of Water Programs, California
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Sacramento State University, California
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h5>
          <p style={{fontSize:"16px"}}>Computer Science.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Full Stack Engineer - Aaseya IT Services
          </h4>

          <p style={{fontSize:"16px"}}>
            Hyderabad, India
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineer - JK Technosoft
          </h4>
          <p style={{fontSize:"16px"}}>
            Hyderabad, India
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Associate Engineer - Virtusa
          </h4>
          <p style={{fontSize:"16px"}}>
            Hyderabad, India
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497c", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            CVR College of Engineering - India
          </h4>
          <p style={{fontSize:"16px"}}>
            Bachelor's Degree
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
