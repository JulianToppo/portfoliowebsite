import React from "react";
import "./About.css";

import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-section" id="about">
        <div className="user-photo">
          <h1>About</h1>
          <img src={getImageUrl("about.jpg")} alt="about"></img>
        </div>
        <div className="skills">
          <div className="skill-items">
            <svg
              className="skillimage"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 128 128"
            >
              <path
                fill="#71c2ff"
                d="M70,44.7v43.7h20.1h24.9c1.8,0,2.7-2.2,1.4-3.4L73.4,43.3C72.1,42.1,70,43,70,44.7z"
              ></path>
              <path
                fill="#fff"
                d="M50,44.7v60.2c0,1.8,2.2,2.7,3.5,1.4l16.7-17.8h24.9c1.8,0,2.7-2.2,1.4-3.4L53.4,43.3 C52.1,42.1,50,43,50,44.7z"
              ></path>
              <path
                fill="#444b54"
                d="M42.3,24.5c-1.2,0-2.3-0.7-2.8-1.8L33.8,8.8c-0.6-1.5,0.1-3.3,1.6-3.9c1.5-0.6,3.3,0.1,3.9,1.6l5.8,13.9 c0.6,1.5-0.1,3.3-1.6,3.9C43.1,24.5,42.7,24.5,42.3,24.5z"
              ></path>
              <path
                fill="#444b54"
                d="M30.9,37c-0.3,0-0.6,0-0.9-0.1l-14.3-4.5c-1.6-0.5-2.5-2.2-2-3.8c0.5-1.6,2.2-2.5,3.8-2l14.3,4.5 c1.6,0.5,2.5,2.2,2,3.8C33.4,36.2,32.2,37,30.9,37z"
              ></path>
              <path
                fill="#444b54"
                d="M98.5,82.8L55.5,41.1c-1.4-1.4-3.6-1.8-5.4-1c-1.9,0.8-3,2.6-3,4.6v60.2c0,2.1,1.2,3.9,3.2,4.7 c0.6,0.2,1.2,0.4,1.8,0.4c1.4,0,2.7-0.6,3.6-1.6l13.5-14.4l9.2,22.2c0.5,1.2,1.6,1.8,2.8,1.8c0.4,0,0.8-0.1,1.2-0.2 c1.5-0.6,2.3-2.4,1.6-3.9l-9.3-22.3h20.4c2,0,3.9-1.2,4.6-3.1C100.5,86.4,100,84.3,98.5,82.8z M70.1,85.4c-0.8,0-1.6,0.3-2.2,1 l-14.9,16V47.1l39.6,38.4H70.1z"
              ></path>
              <path
                fill="#444b54"
                d="M59.3,25.3c-0.5,0-0.9-0.1-1.4-0.3c-1.5-0.8-2-2.6-1.3-4l7-13.3c0.8-1.5,2.6-2,4-1.3c1.5,0.8,2,2.6,1.3,4 l-7,13.3C61.4,24.7,60.4,25.3,59.3,25.3z"
              ></path>
            </svg>
            <div className="skillinfo">
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building user
                interfaces using React
              </p>
            </div>
          </div>
          <div className="skill-items">
            <img
              className="skillimage"
              src={getImageUrl("backend1.png")}
              alt="backend"
            ></img>
            <div className="skillinfo">
              <h3>Backend Developer</h3>
              <p>
                I am a backend developer with experience in building server and
                backend application using NodeJS,Express,MongoDB,SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
