import React from "react";
import portfolio from "../assets/img/portfolio-website.PNG";
import productList from "../assets/img/product-list-homepage.PNG";
import matteorussowebsite from "../assets/img/matteorusso-yoga-frontpage.png";
import teamGenerator from "../assets/img/team-generator.PNG";
import weather from "../assets/img/weather-app.PNG";
import todolist from "../assets/img/todolist.PNG";
import { useNavigate } from "react-router-dom";

function Projects() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="projects-container">
      <ul className="projects-main">

        <li className="projects-item">
          <img
            className="projects-item-pic"
            src={productList}
            alt="product-list-fullstack"
          />
          <div className="projects-item-text">
            <h3>Product List - Full stack</h3>
            <h4>Technologies: OOP PHP, MySQL, React, Responsive Bootstrap</h4>
            <p>
              This is an online Shopping list that displays a number of products. It allows to add a new product or to select multiple products and delete them.
            </p>
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
          <img
            className="projects-item-pic"
            src={matteorussowebsite}
            alt="product-list-fullstack"
          />
          <div className="projects-item-text">
            <h3>matteorusso.yoga - My current business website</h3>
            <h4>Technologies: HTML, CSS, JS</h4>
            <p>
              This is an online business yoga website. It shows my profile, info and contacts as yoga teacher.
            </p>
            <div className="projects-item-text-links">
              <button className="button-external-link" onClick={
                () =>
                  window.open(
                    "https://matteorusso.yoga/",
                    "_blank"
                  ) //check link
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
          <img
            className="projects-item-pic"
            src={portfolio}
            alt="Portfolio Website"
          />
          <div className="projects-item-text">
            <h3>Portfolio Website</h3>
            <h4>Technologies: HTML, CSS, Javascript, React</h4>
            <p>
              This is my Portfolio Website where I show my projects and my
              contact details. In the Projects session is stored a list of
              projects with a snapshot of the main page, a short description of
              the project, a link to the Live and a link to the code on Github.
            </p>
            <div className="projects-item-text-links">
              <button className="button-external-link" onClick={handleClick}>
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/portfolio-website",
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
          <img className="projects-item-pic" src={todolist} alt="Todo List" />
          <div className="projects-item-text">
            <h3>Memory Aid</h3>
            <h4>Technologies: HTML, CSS, Javascript, React</h4>
            <p>
              Memory aid allows you to enter how many items you need and store
              them temporarly. Please note that once the page is refreshed or
              re-opened the items will disappear.
            </p>
            <div className="projects-item-text-links">
              <button
                className="button-external-link"
                onClick={
                  () =>
                    window.open(
                      "https://memoryaid-thingstoremember.vercel.app/",
                      "_blank"
                    ) //check link
                }
              >
                Live
              </button>
              <button
                className="button-external-link"
                onClick={() =>
                  window.open(
                    "https://github.com/mrmatteorusso/todo-react",
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
          <img className="projects-item-pic" src={weather} alt="" />
          <div className="projects-item-text">
            <h3>Weather App</h3>
            <h4>Technologies: HTML, CSS, JavaScript</h4>
            <p>
              City Weather allows you to enter a city and visualise its
              temperature, wind speed, humidity. The App is able to show 7 day
              forecasts. The programme uses APIs from openweathermap.org and
              deploys its results as text and icons.
            </p>

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
          <img className="projects-item-pic" src={teamGenerator} alt="" />
          <div className="projects-item-text">
            <h3>Team Generator</h3>
            <h4>Technologies: HTML, CSS, JavaScript</h4>
            <p>
              Team generator is a sleek App that allows you to enter a list of
              name and create how many groups you wish in a random fashion. When
              names are entered, space between letters counts and it is
              considerated a separator from one name to another.The generate
              button allows to create as many combination as needed and the
              output can be selected, copied and pasted.
            </p>
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
