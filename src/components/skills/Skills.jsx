import React from "react";
import "./skills.css";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Get to know</h5>
      <h2 style={{ marginBottom: "0.7rem" }}>My skills</h2>
      <h5 style={{ marginBottom: "1.5rem" }}>
        Well, Im definitely still learning and improving my skillset, but these
        technologies are the ones that I'm most familiar with at the moment.
      </h5>
      <div className="grid-container">
        <div className="container-item">
          <div className="icon-container">
            <SiPython
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiPython>
          </div>
          Python
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <FaReact
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></FaReact>
          </div>
          ReactJS
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiNodedotjs
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiNodedotjs>
          </div>
          NodeJS
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiJavascript
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiJavascript>
          </div>
          JavaScript
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiMysql
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiMysql>
          </div>
          MySQL
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiMongodb
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiMongodb>
          </div>
          MongoDB
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiHtml5
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiHtml5>
          </div>
          HTML
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiCss3
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiCss3>
          </div>
          CSS
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiCplusplus
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiCplusplus>
          </div>
          C++
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiJava
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiJava>
          </div>
          Java
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiOpencv
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiOpencv>
          </div>
          OpenCV
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiTypescript
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiTypescript>
          </div>
          TypeScript
        </div>
      </div>
    </section>
  );
};

export default Skills;
