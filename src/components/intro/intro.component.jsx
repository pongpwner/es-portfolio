import React from "react";
import "./intro.styles.scss";
import face from "../../assets/pictures/face.jpg";

const Intro = () => (
  <section className="intro" id="intro">
    <h1 className="intro-text">
      <span className="intro-heading">
        Greetings, I'm<span className="hilight1"> Eric</span>
      </span>
      <span className="intro-subheading">
        A <span className="hilight2"> front end </span>developer
      </span>
    </h1>
    <div className="intro-visual">
      <img src={face} alt="my face"></img>
    </div>
  </section>
);

export default Intro;
