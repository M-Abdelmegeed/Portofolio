import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Portfolio-Photo.png";
import HeaderSocials from "./HeaderSocials";
import { CgScrollV } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there! I'm</h5>
        <h1>Mohammed Abdelmegeed</h1>
        <h5 className="text-light">
          Software and AI Engineer | Teaching Assistant
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          <CgScrollV size={56}></CgScrollV>
        </a>
      </div>
    </header>
  );
};

export default Header;
