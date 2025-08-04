import React from "react";
import "./skill.styles.scss";

const Skill = ({ name, url }) => (
  <div className="skill">
    <img className="skill-logo" src={url} alt={name}></img>
    <div className="name">{name}</div>
  </div>
);

export default Skill;
