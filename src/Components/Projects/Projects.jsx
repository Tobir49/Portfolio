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
    <article id="projects">
      <div className="filter-by">
        <h2 className="yellow bold">Filtrer par</h2>
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
        textOne="Afin de gérer le bon développement d’un site, j’ai dû créer le
        document des spécifications techniques, gérer les étapes de chaque
        sprint, créer des users stories en prenant en compte les
        technologies à utiliser avant de présenter cela au chef de projet
        du client."
        textTwo="Ce projet m'a permis de développer des compétences importantes en
        tant que développeur : l'agilité, entre autres. Néanmoins créer
        des users stories n'est pas simple lorsque l'on débute dans
        l'agilité et ses façons de faire."
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
        textOne="Avec l’aide des Chrome Devtools, il fallait rendre un site de
        photographe plus accessible, améliorer ses performances ainsi que
        SEO. L’utilisation de Javascript, des balises meta et de
        manipulation d'extension d'images était nécessaire."
        textTwo="Durant ce projet, la seule problématique que j'ai rencontrée était
        le fait de débugger une fonction. L'objectif était de corriger
        l'erreur dans une fonction JavaScript, qui empêchait de passer
        d'une image à l'autre sur la modale."
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
        textOne="Un site d'hébergements souhaitait refaire le code de leur site
        en utilisant React. Mon objectif était de, à partir d'une
        maquette, créer une application React. L'utilisation de Create
        React App et React Router était obligatoire, tout comme le fait de
        n'utiliser que ces deux technologies."
        textTwo="Certaines fonctions utilisant les hooks et les props m'ont posé
        problème durant la création de cette application. En effet, j'ai
        mis du temps à comprendre leur utilisation et leur fonctionnement."
      />

      <OneProject
        // onMouseEnter={test("6")}
        technoIconOne="fa-brands fa-node-js"
        technoIconTwo="fa-brands fa-node-js"
        technoIconThree="fa-solid fa-database"
        href="https://github.com/Tobir49/P7_Mon_Vieux_Grimoire"
        gitHubIcon="fa-brands fa-github"
        src={projectSix}
        alt="Projet Back-End"
        id="6"
        date="06/07-2023"
        title="Création du Back-End et d'une base de données"
        textOne="Un site de notation de livres souhaitait ajouter du Back-End à
        leur site. La 1e étape consistait à cloner le code Front-End avant
        d'y intégrer mon application Back. Pour créer ce que souhaitait le
        clien j'ai créé des APIs, créé une base de données Atlas (MongoDB) et écrit des fonctions pour envoyer des livres dans la base de
        données."
        textTwo="N'ayant jamais fait de Back ni utilisé Nodejs et Expressjs, j'ai
        mis du temps à comprendre le fonctionnement de ces frameworks
        ainsi que la manipulation des requêtes et leur lien avec la base
        de données."
      />
    </article>
  );
}

export default Projects;
