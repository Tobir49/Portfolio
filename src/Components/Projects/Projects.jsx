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
            <p className="white">⏰ 02/03-2023</p>
            <p className="white">🪪 Sophie Buel - Architecte</p>
            <p className="white center text-project">
              💻 Création d’un code JavaScript (pas de frameworks) afin de
              rendre le site d’une architecte dynamique. Utilisation d’un token,
              création d’une fonction login, création d’une galerie de projet à
              partir d’une base de données. Gestion des routes grâce à Postman &
              Swagger.
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
            <p className="white">⏰ 04-2023</p>
            <p className="white">🪪 Gestion du développement d'un site</p>
            <p className="white center text-project">
              💻 Afin de gérer le bon développement d’un site, j’ai dû créer le
              document des spécifications techniques, gérer les étapes de chaque
              sprint, créer des user stories en prenant en compte les
              technologies à utiliser et présenter cela au chef de projet du
              client.
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
            <p className="white">⏰ 04/05-2023</p>
            <p className="white">🪪 Debug et Optimisation d'un site</p>
            <p className="white center text-project">
              💻 Avec l’aide des Chrome Devtools, il fallait rendre un site de
              photographe plus accessible, améliorer ses performances ainsi que
              SEO. L’utilisation de Javascript était nécessaire.
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
            <p className="white">⏰ 05-2023</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center text-project">
              💻 Création d’une application React à partir d’une maquette.
              Création d’un dossier ordonné et trié selon les composants et les
              pages. Logique de routage, ré-utilisation des composants (props,
              hooks) et css ordonné.
            </p>
          </div>
        </div>

        <div className="div-project">
          <img
            src={projectSix}
            alt="projet Back-End"
            className="pictures-projects"
          />
          <div>
            <p className="white">⏰ 06/07-2023</p>
            <p className="white">🪪 Back-End d'un site</p>
            <p className="white center text-project">
              💻 Clonage d’un code Front-End afin d’en créer le Back dans le but
              de rendre un site de notation de livres dynamique. Utilisation
              d’une base données MongoDB (Atlas), création d’un serveur Node et
              d’une API Express.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;
