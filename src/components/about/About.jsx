import React from "react";
import "./about.css";
import ME from "../../assets/Sokhna Photo Square.jpeg";

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
            Hello there, nice to meet you! I am Mohammed, and I am an AI
            Engineer, Data Scientist, and Teaching Assistant. I have a strong
            passion for building scalable, high-performing architectures and
            solutions that deliver tangible value. My work is deeply rooted in
            data-driven decision-making, ensuring that every solution I design
            is backed by insightful analysis and evidence.
            <br /> I thrive in the ever-evolving fields of Generative AI and
            Large Language Models (LLMs), where I enjoy pushing the boundaries
            of what's possible with cutting-edge technologies. My expertise also
            spans across designing and implementing machine learning systems and
            complex pipelines leveraging cloud services such as AWS and Azure to
            address real-world challenges in innovative ways.
            <br /> As a teaching assistant, I find immense satisfaction in
            sharing knowledge, mentoring others, and fostering a collaborative
            learning environment. My journey has been shaped by curiosity and an
            eagerness to continuously learn and grow in the tech industry. From
            analyzing intricate datasets to architecting modern AI solutions, I
            am driven by a commitment to solving real-world problems through
            technology.
            <br />
            In addition to my professional pursuits, I am an advocate for
            leveraging technology to create meaningful and impactful change.
            Whether it's diagnosing cognitive abilities in children through AI
            or developing platforms that enhance developer productivity, I am
            dedicated to making a difference.
            <br />I live by a simple yet powerful philosophy that keeps me
            motivated and focused: <b>"Dreams don't work unless you do."</b>
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
