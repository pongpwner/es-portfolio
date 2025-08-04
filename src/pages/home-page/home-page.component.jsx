import React from "react";
import "./home-page.styles.scss";
import Projects from "../../components/projects/projects.component";
import About from "../../components/about/about.component";
import Skills from "../../components/skills/skills.component";
import Contact from "../../components/contact/contact.component";
import Intro from "../../components/intro/intro.component";
const HomePage = () => (
  <main className="home-page">
    <Intro />
    <Skills />
    <hr></hr>
    <Projects />
    <About />
    <Contact />
  </main>
);

export default HomePage;
