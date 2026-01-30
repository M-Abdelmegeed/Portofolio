import React from "react";
import "./about.css";
import ME from "../../assets/ourika.jpeg";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>Get To Know Me</h2>
      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards"></div> */}
          <p>
            Hello there! I'm Mohammed, an Applied AI Engineer with a passion for
            architecting and deploying production-grade AI systems that drive
            real business impact.
            <br />
            <br />
            I specialize in designing scalable Generative AI solutions and
            agentic workflows, building end-to-end ML pipelines, and leading AI
            strategy initiatives for enterprise clients. My work spans from
            hands-on development with LangGraph, LLMs, and cloud-native
            architectures (AWS, Azure) to consulting on AI adoption and digital
            transformation.
            <br />
            <br />
            Beyond engineering, I'm passionate about mentoring the next
            generation of engineers—both as a Teaching Assistant at Ain Shams
            University and through leading structured learning programs for
            junior team members.
            <br />
            <br />I live by a simple philosophy:{" "}
            <b>"Dreams don't work unless you do."</b>
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
