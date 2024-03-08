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
            Hello there, nice to meet you! I am Mohammed and I'm currently a
            senior computer engineering student at Ain Shams University. I am
            passionate and always excited to explore and learn new things. As a
            part-time web developer and instructor, I'm well-versed in creating
            modern, responsive websites that are both user-friendly and visually
            appealing.
            <br /> In addition to web development, I have a deep passion for
            data science and the insights that can be gleaned from complex data
            sets. I'm always eager to explore new technologies and programming
            languages to improve my skills and stay up-to-date with the latest
            trends.
            <br /> Whether it's building a new website or analyzing data, I love
            a good challenge that requires creative thinking and
            problem-solving. I'm excited to see where my future career in both
            data science and web development takes me, and I'm committed to
            making a meaningful impact by using technology to solve real-world
            problems.
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
