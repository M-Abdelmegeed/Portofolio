import React from "react";
import "./experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
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
            Oct 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "grey" }}>
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
              Teaching Assistant
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              Ain Shams University
            </Typography>

            <Typography>
              Teaching and guiding university undergrads in their current
              studies and software engineering subjects
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
            Mar 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "grey" }}>
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
              Data Scientist & AI Engineer
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              Jumia Group
            </Typography>
            <Typography>
              <ul>
                <li>
                  Developed and fine-tuned NER models to extract entities across
                  diverse product categories, customiz ing pre-trained models
                  for specific use cases. Extracted entities for approximately
                  150M products in 20 different categories{" "}
                </li>
                <li>
                  Designed and implemented a large-scale-duplication system
                  using text and image embeddings from product attributes,
                  grouping similar products and improving catalog accuracy
                  across multiple regions. Enabled processing of over 500M
                  products spanning 11 countries{" "}
                </li>{" "}
                <li>
                  Migrated projects from Dataiku to AWS SageMaker, implementing
                  scalable ML and preprocessing pipelines. Utilized AWS services
                  including Step Functions, Athena, and EventBridge, enhancing
                  pipeline efficiency and reducing operational overhead.
                </li>
              </ul>
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
            Aug 2022 - Aug 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "grey" }}>
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
              Front-End Instructor
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              GOMYCODE
            </Typography>

            <Typography>
              Taught foundational and advanced web development concepts,
              including HTML, CSS, JavaScript, and React.js.
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
            Aug 2023 - Oct 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "grey" }}>
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
              AI Engineering Intern
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "var(--color-light)" }}
              align="left"
            >
              IBM
            </Typography>

            <Typography>
              <li>
                Project Manager for a team of 44 interns, overseeing the
                development of Cleopatra, a Generative AI powered platform for
                Egyptian tourism.{" "}
              </li>{" "}
              <li>
                Contributed to both AI development and front-end engineering,
                ensuring seamless integration of ad vanced Generative AI
                features with a user-friendly interface.{" "}
              </li>{" "}
              <li>
                Developed trip-planning features using OpenAI’s GPT-3.5 Turbo
                and Langchain, enabling personalized itineraries with
                recommendations for stays, transportation, and activities based
                on user preferences.{" "}
              </li>{" "}
              <li>
                Implemented avirtual tour guide leveraging GCP Cloud Vision APIs
                for place recognition and speech-to text and text-to-speech APIs
                to deliver engaging, real-time storytelling about historical
                landmarks.
              </li>
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
            Jul 2023 - Aug 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "grey" }}>
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
              AIM Technologies
            </Typography>

            <Typography>
              AIM Technology Group specializes in social media listening using
              AI and NLP, to gain information about specific brands or projects.
              These insights are then used to build dashboards and
              visualizations for their clients
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
            <TimelineDot style={{ color: "grey" }}>
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
              Backend & Integration Intern
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
            <TimelineDot style={{ color: "grey" }}>
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
            <TimelineDot style={{ color: "grey" }}>
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
            <TimelineDot style={{ color: "grey" }}>
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
