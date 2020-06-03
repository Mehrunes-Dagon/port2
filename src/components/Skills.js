import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="twelve main-col">
      <p>
        I am a full-stack developer versed in many technologies and frameworks. Here are a few.
      </p>

      <div className="skill-tables">
        <div className="bars">
          <ul className="skills">
            <li>
              <em>Javascript</em>
            </li>
            <li>
              <em>Vue</em>
            </li>
            <li>
              <em>Vuex</em>
            </li>
            <li>
              <em>Nuxt</em>
            </li>
            <li>
              <em>HTTP Protocol</em>
            </li>
            <li>
              <em>CSS3</em>
            </li>
            <li>
              <em>HTML5</em>
            </li>
          </ul>
        </div>
        <div className="bars">
          <ul className="skills">
            <li>
              <em>PHP</em>
            </li>
            <li>
              <em>Laravel</em>
            </li>
            <li>
              <em>Node</em>
            </li>
            <li>
              <em>Express</em>
            </li>
            <li>
              <em>MongoDB</em>
            </li>
            <li>
              <em>SQL</em>
            </li>
            <li>
              <em>OAuth</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
