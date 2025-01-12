import React from "react";
import "./certifications.css";
import data from "./certificateData";

const Certifications = () => {
  return (
    <section id="certifications">
      {/* <h5>Recent Work</h5> */}
      <h2>Certifications</h2>
      <div className="container certifications__container">
        {data.map((certificate) => {
          return (
            <article className="certifications__item" key={certificate.id}>
              <div className="certifications__item-image">
                <img src={certificate.image} alt="" />
              </div>
              <h3>{certificate.title}</h3>
              <div className="certifications__item-cta">
                <a href={certificate.credly} className="btn" target="_blank">
                  Credly
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
