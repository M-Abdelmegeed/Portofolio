import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Portofolio></Portofolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
