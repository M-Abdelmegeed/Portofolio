import React from "react";
import "./experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Work Experience</h2>
      <Timeline
        style={{ display: "flex", justifyContent: "center", flex: 0.1 }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            Aug 2022 - Pre sent
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} style={{ flex: 7 }}>
            <Typography
              variant="h4"
              component="span"
              style={{ color: "var(--color-primary)" }}
            >
              Part-Time Web Development Instructor
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              GOMYCODE
            </Typography>

            <Typography>
              Teaching students remotely all about HTML5, CSS and JavaScript and
              building with them several projects.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            Aug 2022 - Oct 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} style={{ flex: 7 }}>
            <Typography
              variant="h4"
              component="span"
              style={{ color: "var(--color-primary)" }}
            >
              Data Science Intern
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              IBM
            </Typography>

            <Typography>
              More information on the internship can be found on my{" "}
              <a href="https://www.linkedin.com/in/mohammed-abdelmegeed/">
                LinkedIn
              </a>{" "}
              profile.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            July 2022 - Aug 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} style={{ flex: 7 }}>
            <Typography
              variant="h4"
              component="span"
              style={{ color: "var(--color-primary)" }}
            >
              IT and Infrastructure Intern
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              National Bank of Egypt
            </Typography>

            <Typography>
              Learned a lot about networks and how the IT team operates at banks
              and deals with transactions, and how the bank servers operate and
              linked with each other. I learned also about how the banks secure
              customer data against any threats or attacks.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            Aug 2021 - Oct 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} style={{ flex: 7 }}>
            <Typography
              variant="h4"
              component="span"
              style={{ color: "var(--color-primary)" }}
            >
              Software Engineering Intern
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              ASSET Technology Group
            </Typography>

            <Typography>
              Learned all about OOP using Java and, and implemented a mini java
              application that connects to a database and does all CRUD (Create,
              Read, Update, Delete) operations through the application.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            Sep 2018 - Feb 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }} style={{ flex: 7 }}>
            <Typography
              variant="h4"
              component="span"
              style={{ color: "var(--color-primary)" }}
            >
              IGCSE Economics Teaching Assistant
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              Egyptian Language School
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default Experience;
