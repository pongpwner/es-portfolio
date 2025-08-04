import React from "react";
import "./skills.styles.scss";
import Skill from "../skill/skill.component";
import css from "../../assets/pictures/css-3.svg";
import html from "../../assets/pictures/html-5.svg";
import javascript from "../../assets/pictures/javascript.svg";
import react from "../../assets/pictures/react.svg";
import sass from "../../assets/pictures/sass.svg";
import git from "../../assets/pictures/git-icon.svg";
import redux from "../../assets/pictures/redux.svg";
import reduxSaga from "../../assets/pictures/redux-saga.svg";
import express from "../../assets/pictures/express.svg";
import mongodb from "../../assets/pictures/mongodb.svg";
import nodejs from "../../assets/pictures/nodejs-icon.svg";
import typescript from "../../assets/pictures/typescript-icon.svg";
import postgres from "../../assets/pictures/postgresql.svg";
import wordpress from "../../assets/pictures/wordpress-icon.svg";

const skills = [
  { name: "CSS", url: css, id: 0 },
  { name: "HTML", url: html, id: 1 },
  { name: "Javascript", url: javascript, id: 2 },
  { name: "React", url: react, id: 3 },
  { name: "Redux", url: redux, id: 6 },
  { name: "Redux-Sagas", url: reduxSaga, id: 7 },
  { name: "SASS", url: sass, id: 4 },
  { name: "Git", url: git, id: 5 },
  { name: "Express", url: express, id: 6 },
  { name: "Nodejs", url: nodejs, id: 7 },
  { name: "Mongodb", url: mongodb, id: 8 },
  { name: "Typescript", url: typescript, id: 9 },
  { name: "PostgreSQL", url: postgres, id: 10 },
  { name: "Wordpress", url: wordpress, id: 11 },
];
const Skills = () => (
  <section className="skills" id="skills">
    <h1 className="heading1 u-margin-top-small">Skills</h1>
    <div className="skills-container">
      {skills.map((skill) => (
        <Skill key={skill.id} name={skill.name} url={skill.url}></Skill>
      ))}
    </div>
  </section>
);

export default Skills;
