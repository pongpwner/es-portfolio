import React, { useState } from "react";
import "./header.styles.scss";
import linkedin from "../../assets/pictures/linkedin-icon.svg";
import github from "../../assets/pictures/github-icon.svg";
import email from "../../assets/pictures/email.png";
import resume from "../../assets/pictures/resume.png";
import EricShyuResume from "../../assets/documents/EricShyuResume.pdf";
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  function toggleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <header className="header">
      <nav>
        <div
          className={`burger ${navbar ? "burger-x" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="burger-line burger-line-1 "></div>
          <div className="burger-line burger-line-2 "></div>
          <div className="burger-line burger-line-3"></div>
        </div>
        <ul
          className={`list-container ${navbar ? "flex-col" : "display-none"}`}
        >
          <li onClick={() => setNavbar(false)}>
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li onClick={() => setNavbar(false)}>
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li onClick={() => setNavbar(false)}>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li onClick={() => setNavbar(false)}>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className={`contact-container ${navbar ? "" : "display-none"}`}>
          <li>
            <a
              className="icon-background"
              href="https://www.linkedin.com/in/eric-shyu-105a84191/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-icon icon"
                src={linkedin}
                alt="linkedin icon"
              ></img>
            </a>
          </li>

          <li>
            <a
              className="icon-background"
              href="https://github.com/pongpwner"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github-icon icon"
                src={github}
                alt="github icon"
              ></img>
            </a>
          </li>
          <li>
            <a
              className="email icon-background"
              href="mailto: ericshyu98@gmail.com"
            >
              <img className="icon" alt="email" src={email}></img>
            </a>
          </li>
          <li>
            <a href={EricShyuResume} target="_blank" rel="noreferrer">
              <img className="icon" alt="resume" src={resume}></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
