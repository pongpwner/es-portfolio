import React from "react";
import "./about.styles.scss";

import EricShyuResume from "../../assets/documents/EricShyuResume.pdf";

const About = () => (
  <section className="about flex-col " id="about">
    <h1 className="heading1 u-margin-top-small">About</h1>

    <p className="paragraph">
      My name is Eric Shyu. I am a front end developer with a Computer Science
      degree from UNC Chapel Hill. Take a look at my{" "}
      <a
        className="resume"
        href={EricShyuResume}
        target="_blank"
        rel="noreferrer"
      >
        resume.
      </a>
    </p>
    <p className="paragraph">
      I am a self-motivated and curious individual who enjoys tackling complex
      challenges and finding creative solutions to problems. I have a strong
      foundation in front end technologies such as HTML, CSS, JavaScript, and
      React. I am also familiar with back end technologies, such as Node,
      Express, and PostgreSQL. I am always eager to learn new technologies and
      techniques to enhance my skills and take my development capabilities to
      the next level.
    </p>
    <p className="paragraph">
      Coding aside I enjoy playing video games, watching anime, exercising, and
      trying new hobbies. I dabble in yoyoing, drawing, piano, pen spinning,
      breakdancing, balisong, diabolo, kendama, and juggling.
    </p>
  </section>
);
export default About;
