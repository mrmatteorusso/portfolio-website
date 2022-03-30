import React from "react";

function Contacts() {
  return (
    <div className="contacts-page">
      <ul className="contacts-main">
        <li>
          {/* <p>icon</p> */}
          <h3>Media</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/mrmatteorusso/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mrmatteorusso"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </li>
        <li>
          {/* <p>icon</p> */}
          <h3>Email</h3>
          <ul>
            <li>
              <p>mrmatteorusso@gmail.com</p>
            </li>
          </ul>
        </li>
        <li>
          {/* <p>icon</p> */}
          <h3>Phone</h3>
          <ul>
            <li>
              <p>+44 07964006210</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
