import "./projects.css";
import data from "../../../data/data.json";
import OneProject from "./OneProject";
import { useState, useEffect } from "react";
// import projectOne from "../../../images/P2.png";
// import projectTwo from "../../../images/P3.png";
// import projectThree from "../../../images/P4.png";
// import projectFour from "../../../images/P5.png";
// import projectFive from "../../../images/P6.png";
// import projectSix from "../../../images/P7.png";

function Projects() {
  const [filter, setFilter] = useState("all");
  useEffect(() => {}, []);

  return (
    <article id="projects" className="z-index">
      <div className="filter-by column align-items">
        <h2 className="white bold title-filter">Filtrer par</h2>
        <div className="div-filter-buttons">
          <button className="button-filter yellow" onClick={setFilter("all")}>
            Tous
          </button>
          <button
            className="button-filter yellow"
            onClick={setFilter("websites")}
          >
            Sites web
          </button>
          <button
            className="button-filter yellow"
            onClick={setFilter("agility")}
          >
            Agilité
          </button>
          <button className="button-filter yellow" onClick={setFilter("debug")}>
            Debug / Optimisation
          </button>
        </div>
      </div>
      {data
        .filter((project) => project.tags.includes(filter))
        .map((project) => (
          <OneProject
            key={project.id}
            technos={project.technos}
            skills={project.skills}
            href="https://github.com/Tobir49/Projet3"
            gitHubIcon="fa-brands fa-github"
            src={project.imagePath}
            alt="Projet JavaScript"
            id="2"
            date="02/03-2023"
            title={project.title}
            textOne={project.description}
            textTwo={project.issue}
          />
        ))}
      {/* <OneProject
        technoIconOne="fa-brands fa-html5"
        technoIconTwo="fa-brands fa-css3-alt"
        href="https://github.com/Tobir49/OpenClassrooms_Site_HTML_CSS"
        gitHubIcon="fa-brands fa-github"
        src={projectOne}
        alt="Projet HTML et CSS"
        id="1"
        date="01-2023"
        title="BOOKI"
        textOne="Dictum sit amet justo donec enim. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. A arcu cursus vitae congue. Sagittis purus sit amet volutpat consequat mauris nunc. Mauris augue neque gravida in fermentum et sollicitudin. Semper feugiat nibh sed pulvinar proin. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Dolor sit amet consectetur adipiscing. Ut venenatis tellus in metus vulputate eu scelerisque felis. Tincidunt nunc pulvinar sapien et."
        textTwo={data.issue}
      />
      <OneProject
        technoIconOne="fa-brands fa-square-js"
        technoIconTwo="fa-brands fa-html5"
        technoIconThree="fa-brands fa-css3-alt"
        href="https://github.com/Tobir49/Projet3"
        gitHubIcon="fa-brands fa-github"
        src={projectTwo}
        alt="Projet JavaScript"
        id="2"
        date="02/03-2023"
        title="Sophie Buel - Architecte"
        textOne={data.description}
        textTwo={data.issue}
      />
      <OneProject
        isList={true}
        liOne="Agilité"
        liTwo="Gestion de projet"
        liThree="User Stories"
        src={projectThree}
        alt="Gestion de projet"
        id="3"
        date="04-2023"
        title="Gestion du développement d'un site"
        textOne={data.description}
        textTwo={data.issue}
      />
      <OneProject
        technoIconOne="fa-brands fa-square-js"
        technoIconTwo="fa-brands fa-html5"
        href="https://github.com/Tobir49/Projet_5_Openclassrooms"
        gitHubIcon="fa-brands fa-github"
        src={projectFour}
        alt="Projet débug et optimisation"
        id="4"
        date="04/05-2023"
        title="Debug et Optimisation d'un site"
        textOne={data.description}
        textTwo={data.issue}
      />
      <OneProject
        technoIconOne="fa-brands fa-react"
        technoIconTwo="fa-brands fa-square-js"
        technoIconThree="fa-brands fa-css3-alt"
        href="https://github.com/Tobir49/Projet_6_Kasa"
        gitHubIcon="fa-brands fa-github"
        src={projectFive}
        alt="React"
        id="5"
        date="05-2023"
        title="Debug et Optimisation d'un site"
        textOne={data.description}
        textTwo={data.issue}
      />
      <OneProject
        technoIconOne="fa-brands fa-node-js"
        technoIconTwo="fa-brands fa-square-js"
        technoIconThree="fa-solid fa-database"
        href="https://github.com/Tobir49/P7_Mon_Vieux_Grimoire"
        gitHubIcon="fa-brands fa-github"
        src={projectSix}
        alt="Projet Back-End"
        id="6"
        date="06/07-2023"
        title="Création du Back-End et d'une base de données"
        textOne={data.description}
        textTwo={data.issue}
      /> */}
    </article>
  );
}

export default Projects;
