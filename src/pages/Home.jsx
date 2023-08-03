import React from "react";
import pictureMR from "../assets/img/mr1.png";
import HTML from "../assets/img/logos/HTML5_Badge.svg"
import CSS from "../assets/img/logos/CSS3_logo.svg"
import JS from "../assets/img/logos/Unofficial_JavaScript_logo_2.svg"
import PHP from "../assets/img/logos/php-logo.svg"
import ReactLogo from "../assets/img/logos/React-icon.svg"
import Git from "../assets/img/logos/Git_icon.svg"
import NPM from "../assets/img/logos/npm-square-red-1.svg"
import Heroku from "../assets/img/logos/heroku-icon.svg"
import Postman from "../assets/img/logos/postman-icon.svg"
import MySQL from "../assets/img/logos/MySQL-Logo.wine.svg"

function Home() {
  return (
    <div id="home">
      <section className="main-title">
        <h1>Matteo Russo</h1>
        <img id="pictureMR" src={pictureMR} alt="matteo russo's portrait" height="100px" />
      </section>
      <section className="main-info">
        <p>
          After years of running both a successful preschool and a Yoga business, I embarked on a transformative journey to pursue a career in technology with online courses and 1:1 <a href="https://mentors.codingcoach.io/">mentorship</a>.
          Coding allows me to immerse myself in a world of boundless possibilities, where I can craft elegant solutions to complex challenges.
          Moreover, the dynamic nature of the tech industry intrigues me, as it continually presents opportunities for learning and growth.
          In my spare time I volunteer as teacher, practice Yoga and hike.
        </p>
        <a className="linkToResume" href="https://drive.google.com/file/d/1x0DHEvPRaMJUQjrWW9DmfMCDWEmNdAXy/view?usp=drive_link">Download my Resume</a>
      </section>
      <section className="main-technologies">
        <h2 className="section-title">Technologies</h2>
        <ul className="technologies">
          <li>
            <figure>
              <img src={CSS} alt="CSS3 logo" />
              <figcaption>CSS</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={JS} alt="JS logo" />
              <figcaption>JS</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={PHP} alt="PHP logo" />
              <figcaption>PHP</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={ReactLogo} alt="React logo" />
              <figcaption>React</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={Git} alt="Git logo" />
              <figcaption>Git</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={NPM} alt="NPM logo" />
              <figcaption>NPM</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <img src={Postman} alt="Postman logo" />
              <figcaption className="postman" >Post man</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={MySQL} alt="MySQL logo" />
              <figcaption>MySQL</figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
