import React from "react";
import "./contact.styles.scss";
import linkedin from "../../assets/pictures/linkedin-icon.svg";
import github from "../../assets/pictures/github-icon.svg";
import email from "../../assets/pictures/email.png";
import resume from "../../assets/pictures/resume.png";
import EricShyuResume from "../../assets/documents/EricShyuResume.pdf";

const Contact = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file

    // Creating new object of PDF file
    const blob = EricShyuResume.blob();
    const fileURL = window.URL.createObjectURL(blob);
    // Setting various property values
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "EricShyuResume.pdf";
    alink.click();
  };
  return (
    <section className="contact flex-col" id="contact">
      <h1 className="heading1 ">Contact / Links</h1>
      <ul className="contact-list flex-row">
        <li>
          <a
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
          <a className="email" href="mailto: ericshyu98@gmail.com">
            <img className="icon" alt="email" src={email}></img>
          </a>
        </li>
        <li>
          <a href={EricShyuResume} target="_blank" rel="noreferrer">
            <img className="icon" alt="resume" src={resume}></img>
          </a>
        </li>
      </ul>
    </section>
  );
};
{
  //  <button type="button" onClick={onButtonClick}>
  //
  //         </button>
}
export default Contact;
