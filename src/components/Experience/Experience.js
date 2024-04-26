import React from "react";
import { skills } from "../../data/skills";
import { getImageUrl } from "../../utils";
import { exp } from "../../data/experience";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <h1 className="heading">Experience</h1>
      <div className="experience">
        <div className="techstack">
          {skills?.map((skill, id) => {
            return (
              <div key={id}>
                <div className="image-background">
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={"image" + id}
                  ></img>
                </div>
                <h4>{skill.title}</h4>
              </div>
            );
          })}
        </div>
        <div className="history">
          {exp?.map((job, id) => {
            return (
              <div key={id} className="jobdetails">
                <img src={getImageUrl(job.imageSrc)} alt={"image" + id}></img>

                <div className="worksummary">
                
                  <p className="jobTitle">{job.organisation+","+job.role}</p>
                  <p className="smalltext">
                    {job.startDate.toString() + "-" + job.endDate.toString()}
                  </p>
                  <ul>
                    {job.experiences.map((item) => {
                      return <li className="smalltext">{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
