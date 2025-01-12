import React from "react";
import "./skills.css";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiApachespark } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2 style={{ marginBottom: "0.7rem" }}>Tech Stack</h2>
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
            <SiMysql
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiMysql>
          </div>
          MySQL
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiDocker
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiDocker>
          </div>
          Docker
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiGooglecloud
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiGooglecloud>
          </div>
          GCP
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiAmazonaws
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiAmazonaws>
          </div>
          AWS
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiMicrosoftazure
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiMicrosoftazure>
          </div>
          Microsoft Azure
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiOpenai
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiOpenai>
          </div>
          Generative AI & LLMs
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiPytorch
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiPytorch>
          </div>
          PyTorch
        </div>
        <div className="container-item">
          {" "}
          <div className="icon-container">
            <SiTensorflow
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiTensorflow>
          </div>
          TensorFlow
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiApachespark
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiApachespark>
          </div>
          Apache Spark
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiApachekafka
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiApachekafka>
          </div>
          Apache Kafka
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
          <div className="icon-container">
            <SiKubernetes
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiKubernetes>
          </div>
          Kubernetes
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
            <SiGithub
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiGithub>
          </div>
          GitHub
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
        <div className="container-item">
          <div className="icon-container">
            <SiLinux
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiLinux>
          </div>
          Linux
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiGraphql
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiGraphql>
          </div>
          GraphQL
        </div>
        <div className="container-item">
          <div className="icon-container">
            <SiApacheairflow
              style={{ color: "var(--color-primary)" }}
              size={42}
            ></SiApacheairflow>
          </div>
          Apache Airflow
        </div>
      </div>
    </section>
  );
};

export default Skills;
