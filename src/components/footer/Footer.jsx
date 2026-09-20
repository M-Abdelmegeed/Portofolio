import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Back To The Top
      </a>
      <ul className="permaLinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portofolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/mohammed.ahmedabdelmaguid"
          target="_blank" rel="noreferrer"
        >
          <FaFacebookF></FaFacebookF>
        </a>
        <a
          href="https://www.instagram.com/mohammed_abdelmegeed/"
          target="_blank" rel="noreferrer"
        >
          <BsInstagram></BsInstagram>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-abdelmegeed/"
          target="_blank" rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/M-Abdelmegeed" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
