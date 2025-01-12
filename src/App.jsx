import React from "react";
import Header from "./components/header/Header";
import { Helmet } from "react-helmet";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Certifications from "./components/certifications/Certifications";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/assets/developer.png" />
      </Helmet>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Certifications></Certifications>
      <Portofolio></Portofolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
