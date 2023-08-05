import React from "react";
import productList from "../assets/img/product-list-homepage.PNG";
import matteorussowebsite from "../assets/img/matteorusso-yoga-frontpage.png";
import teamGenerator from "../assets/img/team-generator.PNG";
import weather from "../assets/img/weather-app.PNG";
import Vanlife from "../assets/img/vanlife-all.png";
import todolist from "../assets/img/todolist.PNG";

function Projects() {

  return (
    <div id="projects" className="projects-container">
      <h2 className="section-title">Projects</h2>
      <ul className="projects-main">
        <li className="projects-item">
          <div className="projects-item-show">
            <h3>Vanlife - Full stack</h3>
            <img
              className="projects-item-pic"
              src={Vanlife}
              alt="vanlife"
            />
          </div>
          <div className="projects-item-text">
            <p>
              This is a fiction van renting service where host can list their own van and user can navigate and access different sections such as single van, statistics, login area.
            </p>
            <h4>Technologies: React, Firebase, Netlifly</h4>
            <div className="projects-item-text-links">
              <button className="button-external-link" onClick={
                () =>
                  window.open(
                    "https://chipper-syrniki-b711fa.netlify.app/",
                    "_blank"
                  )
              }>
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/vanlife",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <div className="projects-item-show">
            <h3>Product List - Full stack</h3>
            <img
              className="projects-item-pic"
              src={productList}
              alt="product-list-fullstack"
            />
          </div>
          <div className="projects-item-text">
            <p>
              This is an online Shopping list that displays a number of products. It allows to add a new product or to select multiple products and delete them.
            </p>
            <h4>Technologies: OOP PHP, MySQL, React, Responsive Bootstrap</h4>
            <div className="projects-item-text-links">
              <button className="button-external-link" onClick={
                () =>
                  window.open(
                    "https://scandiweb-fe.herokuapp.com/",
                    "_blank"
                  ) //check link
              }>
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/product-frontend",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <div className="projects-item-show">

            <h3>matteorusso.yoga</h3>
            <img
              className="projects-item-pic"
              src={matteorussowebsite}
              alt="product-list-fullstack"
            />
          </div>
          <div className="projects-item-text">
            <p>
              This is an online business yoga website. It shows my profile, info and contacts as yoga teacher.
            </p>
            <h4>Technologies: HTML, CSS, JS</h4>
            <div className="projects-item-text-links">
              <button className="button-external-link" onClick={
                () =>
                  window.open(
                    "https://matteorusso.yoga/",
                    "_blank"
                  )
              }>
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/bormio-yoga",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <div className="projects-item-show">
            <h3>Weather App</h3>
            <img className="projects-item-pic" src={weather} alt="" />
          </div>
          <div className="projects-item-text">
            <p>
              City Weather allows you to enter a city and visualise its
              temperature, wind speed, humidity. The App is able to show 7 day
              forecasts. The programme uses APIs from openweathermap.org and
              deploys its results as text and icons.
            </p>
            <h4>Technologies: HTML, CSS, JavaScript</h4>

            <div className="projects-item-text-links">
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://city-weather-alpha.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/cityWeather",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <div className="projects-item-show">
            <h3>Team Generator</h3>
            <img className="projects-item-pic" src={teamGenerator} alt="" />
          </div>
          <div className="projects-item-text">
            <p>
              Team generator allows you to enter a list of
              name and create how many groups you wish randomly. When
              names are entered, space between letters counts and it is
              considerated a separator from one name to another.
            </p>
            <h4>Technologies: HTML, CSS, JavaScript</h4>
            <div className="projects-item-text-links">
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://team-generator-online.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/Team-Generator-Online",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
