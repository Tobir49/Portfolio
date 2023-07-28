import "./projects.css";
import data from "../../../data/data.json";
import OneProject from "./OneProject";
import projectOne from "../../../images/P2.png";
import projectTwo from "../../../images/P3.png";
import projectThree from "../../../images/P4.png";
import projectFour from "../../../images/P5.png";
import projectFive from "../../../images/P6.png";
import projectSix from "../../../images/P7.png";

function Projects() {
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

      <OneProject
        // onMouseEnter={test("1")}
        technoIconOne="fa-brands fa-html5"
        technoIconTwo="fa-brands fa-css3-alt"
        href="https://github.com/Tobir49/OpenClassrooms_Site_HTML_CSS"
        gitHubIcon="fa-brands fa-github"
        src={projectOne}
        alt="Projet HTML et CSS"
        id="1"
        date="01-2023"
        title="BOOKI"
        textOne={data.description}
        textTwo={data.issue}
      />

      <OneProject
        // onMouseEnter={test("2")}
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
        // onMouseEnter={test("3")}
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
        // onMouseEnter={test("4")}
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
        // onMouseEnter={test("5")}
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
        // onMouseEnter={test("6")}
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
      />
    </article>
  );
}

export default Projects;
