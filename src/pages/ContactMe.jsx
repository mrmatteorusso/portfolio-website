import React from "react";
import LinkedinLogo from "../assets/img/logos/linkedin-svgrepo-com.svg"
import GithubLogo from "../assets/img/logos/GitHub_Invertocat_Logo.svg"
import Mail from "../assets/img/logos/email-svgrepo-com.svg"

function ContactMe({ contactMeRef }) {
  return (
    <div id="contact-me" className="contact-me-main" ref={contactMeRef}>

      <h2 className="section-title">Contact me</h2>
      <ul>
        <li id="contact-me-picture-container-buttons">
          <a
            href="https://github.com/mrmatteorusso"
          >
            <img src={GithubLogo} alt="Github Logo" />
          </a>
        </li>
        <li><a
          href="mailto:mrmatteorusso@gmail.com"
          onClick={(e) => {
            window.location.href = "mailto:mrmatteorusso@gmail.com";
            e.preventDefault();
          }}
        >
          <img src={Mail} alt="mail logo" />

        </a></li>

        <li id="contact-me-picture-container-buttons">
          <a
            className="contact-me-picture-container-button-external-link"
            href="https://www.linkedin.com/in/mrmatteorusso"
          >
            <img src={LinkedinLogo} alt="Linkedin Logo" />

          </a>
        </li>

      </ul>
    </div>
  );
}

export default ContactMe;
