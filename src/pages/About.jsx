import React from "react";
import pictureMR from "../assets/img/mr1.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-main">
        <section id="about-picture">
          <img id="pictureMR" src={pictureMR} alt="" />

          <h3>Connect with me</h3>
          <ul>
            <li>
              <p>mrmatteorusso@gmail.com</p>
            </li>
            <li id="about-picture-container-buttons">
              <button
                className="about-picture-container-button-external-link"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mrmatteorusso/",
                    "_blank"
                  )
                }
              >
                Linkedin
              </button>
              <button
                className="about-picture-container-button-external-link"
                onClick={() =>
                  window.open("https://github.com/mrmatteorusso", "_blank")
                }
              >
                Github
              </button>
            </li>
          </ul>
        </section>
        <section id="about-text">
          <h3>My path</h3>
          <p>
            My focus for years was on running my pre-school and yoga business.
            The pandemic changed many things.
          </p>
          <p>
            I remained positive and seized the opportunity to commit: to
            learning coding and finance. I concentrated on web development with
            great enthusiasm, drive, grit and mentorship.
          </p>
          <p>
            Today, I remain focused on my quest to work as a Software Developer.
            I continue to leverage code challenges, pre-designed projects, and
            mock real-time interviews with my mentors… all to informally train
            and practice my newly acquired skills.
          </p>
          <p>
            I belong in tech: I love logic, efficiency, problem-solving, and
            living on the cutting edge.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
