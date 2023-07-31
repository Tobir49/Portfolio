import "./projects.css";
import data from "../../../data/data.json";
import OneProject from "./OneProject";
// import { useState, useEffect } from "react";

function Projects() {
  // const [filter, setFilter] = useState("all");
  // useEffect(() => {}, []);

  return (
    <article id="projects" className="z-index">
      <div className="filter-by column align-items">
        <h2 className="white bold title-filter">Filtrer par</h2>
        <div className="div-filter-buttons">
          <button className="button-filter yellow">Tous</button>
          <button className="button-filter yellow">Sites web</button>
          <button className="button-filter yellow">Agilité</button>
          <button className="button-filter yellow">Debug / Optimisation</button>
        </div>
      </div>

      {data.map((project) => (
        <OneProject
          key={project.id}
          id={project.id}
          technos={project.technos}
          skills={project.skills}
          href={project.href}
          gitHubIcon={project.gitHubIcon}
          src={project.imagePath}
          alt={project.alt}
          date={project.date}
          title={project.title}
          textOne={project.description}
          textTwo={project.issue}
        />
      ))}
    </article>
  );
}

export default Projects;
