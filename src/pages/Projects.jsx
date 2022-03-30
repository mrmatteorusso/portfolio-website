import React from "react";
import portfolio from "../assets/img/portfolio-website.PNG";
import teamGenerator from "../assets/img/team-generator.PNG";
import weather from "../assets/img/weather-app.PNG";
import todolist from "../assets/img/todolist.PNG";

function Projects() {
  return (
    <div className="projects-container">
      <ul className="projects-main">
        <li className="projects-item">
          <img src={portfolio} alt="" />
          <div className="projects-item-text">
            <h3>Portfolio Website</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              earum libero voluptatum vitae reprehenderit autem nam quasi velit!
              Assumenda similique, totam voluptatem consequatur atque mollitia
              consequuntur nesciunt soluta perspiciatis quaerat adipisci rerum,
              inventore sapiente provident velit sed veniam, ut officiis.
              Corrupti veniam, eaque distinctio libero est incidunt! Ad,
              corrupti itaque.
            </p>
            <div className="projects-item-text-links">
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
              <br />
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Code in Github
              </a>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <img src={todolist} alt="" />
          <div className="projects-item-text">
            <h3>Todo List</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              earum libero voluptatum vitae reprehenderit autem nam quasi velit!
              Assumenda similique, totam voluptatem consequatur atque mollitia
              consequuntur nesciunt soluta perspiciatis quaerat adipisci rerum,
              inventore sapiente provident velit sed veniam, ut officiis.
              Corrupti veniam, eaque distinctio libero est incidunt! Ad,
              corrupti itaque.
            </p>
            <div className="projects-item-text-links">
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
              <br />
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Code in Github
              </a>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <img src={weather} alt="" />
          <div className="projects-item-text">
            <h3>Weather App</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              earum libero voluptatum vitae reprehenderit autem nam quasi velit!
              Assumenda similique, totam voluptatem consequatur atque mollitia
              consequuntur nesciunt soluta perspiciatis quaerat adipisci rerum,
              inventore sapiente provident velit sed veniam, ut officiis.
              Corrupti veniam, eaque distinctio libero est incidunt! Ad,
              corrupti itaque.
            </p>
            <div className="projects-item-text-links">
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
              <br />
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Code in Github
              </a>
            </div>
          </div>
        </li>
        <li className="projects-item">
          <img src={teamGenerator} alt="" />
          <div className="projects-item-text">
            <h3>Team Generator</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              earum libero voluptatum vitae reprehenderit autem nam quasi velit!
              Assumenda similique, totam voluptatem consequatur atque mollitia
              consequuntur nesciunt soluta perspiciatis quaerat adipisci rerum,
              inventore sapiente provident velit sed veniam, ut officiis.
              Corrupti veniam, eaque distinctio libero est incidunt! Ad,
              corrupti itaque.
            </p>
            <div className="projects-item-text-links">
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
              <br />
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Code in Github
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
