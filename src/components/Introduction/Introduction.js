import React from "react";
import "./Introduction.css"
import { getImageUrl } from "../../utils";
const Introduction = () => {
 
  return (
    <div className="introduction-body">
      <div className="introduction">
        <h1>Hi, I am Julian<img className="loveemoji" src={getImageUrl('/love.png')}></img></h1>
        <p>I'm a full stack developer with experience in
          crafting webapps using MERN Stack</p>
          <button><a className="contactlink" href="mailto:juliantoppo95@gmail.com">Contact Me!</a></button>
      </div>
      <div className="userimage">
        <img src={getImageUrl('intro.jpg')} alt="introduction"></img>
      </div>
    </div>
  );
};

export default Introduction;
