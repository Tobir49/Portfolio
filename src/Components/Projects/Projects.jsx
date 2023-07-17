import "./projects.css";
import projectOne from "../../../images/P2.png";
import projectTwo from "../../../images/P3.png";
import projectThree from "../../../images/P4.png";
import projectFour from "../../../images/P5.png";
import projectFive from "../../../images/P6.png";
import projectSix from "../../../images/P7.png";

function Projects() {
  return (
    <article id="projects" className="projects">
      <div className="sort-by">
        <h2 className="yellow bold">Sort by</h2>
        <label htmlFor="sorts"></label>
        <select name="types" id="sorts">
          <option value="">All projects</option>
          <option value="websites">Websites</option>
          <option value="debug-optimisation">Debug / Optimisation</option>
          <option value="agility">Agility</option>
        </select>
      </div>

      <div>
        <div className="div-project">
          <img
            src={projectOne}
            alt="projet 1 HTML et CSS"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 01-2022</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur : Ordinateur Tablette
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour rendre le site accessible à tous.
            </p>
          </div>
        </div>

        <div className="div-project">
          <img
            src={projectTwo}
            alt="projet JavaScript"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 01-2022</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur : Ordinateur Tablette
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour rendre le site accessible à tous.
            </p>
          </div>
        </div>

        <div className="div-project">
          <img
            src={projectThree}
            alt="projet gestion de projet"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 01-2022</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur : Ordinateur Tablette
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour rendre le site accessible à tous.
            </p>
          </div>
        </div>

        <div className="div-project">
          <img
            src={projectFour}
            alt="projet Débug et Optimisation"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 01-2022</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur : Ordinateur Tablette
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour rendre le site accessible à tous.
            </p>
          </div>
        </div>

        <div className="div-project">
          <img
            src={projectFive}
            alt="projet React"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 01-2022</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur : Ordinateur Tablette
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour rendre le site accessible à tous.
            </p>
          </div>
        </div>

        <div className="div-project">
          <img
            src={projectSix}
            alt="projet Bakc-End"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 01-2022</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur : Ordinateur Tablette
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour rendre le site accessible à tous.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;
