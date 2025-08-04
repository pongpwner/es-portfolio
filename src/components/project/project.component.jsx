import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./project.styles.scss";
import Modal from "../modal/modal.component";
import github from "../../assets/pictures/github-icon.svg";

const Project = ({
  name,
  description,
  githubLink,
  link,
  live,
  modalDescription,
  technologies,
}) => {
  const [domReady, setDomReady] = useState(false);
  const [active, setActive] = useState(false);
  function toggleModal() {
    setActive(!active);
  }
  useEffect(() => {
    setDomReady(true);
  }, []);

  const appRoot = document.getElementById("root");

  const modal = domReady
    ? reactDom.createPortal(
        <Modal active={active} closeModal={toggleModal}>
          <h2 className="name"> {name}</h2>
          <ul className="links">
            <li>
              <a href={githubLink} target="_blank" rel="noreferrer">
                <img className="github-icon" src={github} alt="github"></img>
              </a>
            </li>
            {live ? (
              <li>
                <a
                  href={live}
                  className="live-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
              </li>
            ) : null}
          </ul>
          <img className="project-image" src={link} alt="project preview"></img>
          <div className="technologies">{technologies}</div>
          {modalDescription}
        </Modal>,
        appRoot
      )
    : null;

  return (
    <div className="project">
      {modal}
      <h2 className="title heading2">{name}</h2>
      <button className="image-button" onClick={toggleModal}>
        <img className="project-image" src={link} alt="project preview"></img>
      </button>
      <div className="group1">
        <p className="project-description">{description}</p>
        <div className="technologies">{technologies}</div>
        <ul className="links">
          <li>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <img className="github-icon" src={github} alt="github"></img>
            </a>
          </li>
          {live ? (
            <li>
              <a
                className="live-link"
                href={live}
                target="_blank"
                rel="noreferrer"
              >
                demo
              </a>
            </li>
          ) : null}
          <li>
            <button className="more-info-button" onClick={toggleModal}>
              more <br /> info
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
