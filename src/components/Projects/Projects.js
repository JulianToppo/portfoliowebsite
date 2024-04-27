import React from "react";
import { projects } from "../../data/projects";
import { getImageUrl } from "../../utils";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="heading">Projects</h1>
      <div className="projects">
        {projects.map((projects, id) => {
          return (
            <div className="project-tab">
              <img className="projectPhoto"src={getImageUrl(projects.imageSrc)}></img>
              <p className="projectHeading">{projects.title}</p>
              <p className="projectHeading">{projects.description}</p>
              <div className="techtags">
                {projects.skills.map((tech) => {
                  return (
                   
                      <div className="tags"> {tech}</div>
                    
                  );
                })}
              </div>

              <div className="buttons-bars">
                {/* <button>
                  <a href={projects.demo}>Demo</a>
                </button> */}
                <button>
                  <a href={projects.source}>Source</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
