import "./projects.css";
import projectOne from "../../../images/P2.png";
// import projectTwo from "../../../images/P3.png";
// import projectThree from "../../../images/P4.png";
// import projectFour from "../../../images/P5.png";
// import projectFive from "../../../images/P6.png";
// import projectSix from "../../../images/P7.png";

function Projects() {
  return (
    <article id="projects">
      <div className="filter-by">
        <h2 className="yellow bold">Filter by</h2>
        <div className="div-filter-buttons">
          <button className="button-filter yellow">All</button>
          <button className="button-filter yellow">Websites</button>
          <button className="button-filter yellow">Agility</button>
          <button className="button-filter yellow">Debug / Optimisation</button>
        </div>
      </div>

      <div className="all-projects">
        <div className="one-project">
          <div className="techno-project">
            <p className="blue">techno 1</p>
            <p className="blue">techno 2</p>
          </div>
          <img
            src={projectOne}
            alt="Projet HTML et CSS"
            className="img-project"
          />
          <div className="text-project white">
            <p>blablabla</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;
