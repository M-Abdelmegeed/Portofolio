import React from "react";
import "./portofolio.css";
import data from "./projectData";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portofolio__container">
        {data.map((project) => {
          return (
            <article className="portofolio__item" key={project.id}>
              <div className="portofolio__item-image">
                <img src={project.image} alt="" />
              </div>
              <h3>{project.title}</h3>
              <div className="portofolio__item-cta">
                <a href={project.github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
