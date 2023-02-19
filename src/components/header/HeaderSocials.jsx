import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mohammed-abdelmegeed/"
        target="_blank"
      >
        <BsLinkedin size={28}></BsLinkedin>
      </a>
      <a href="https://github.com/M-Abdelmegeed" target="_blank">
        <BsGithub size={28}></BsGithub>
      </a>
    </div>
  );
};

export default HeaderSocials;
