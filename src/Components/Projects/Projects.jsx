import "./projects.css";
import projectOne from "../../../images/P2.png";
import projectTwo from "../../../images/P3.png";
import projectThree from "../../../images/P4.png";
import projectFour from "../../../images/P5.png";
import projectFive from "../../../images/P6.png";
import projectSix from "../../../images/P7.png";

function test(id) {
  const image = document.getElementById(id);
  // image.style.filter = "grayscale(100%)";
  console.log(image);
}

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
          <div
            className="techno-project"
            onMouseEnter={test("1")}
            // onMouseLeave=""
          >
            <i className="fa-brands fa-html5 blue"></i>
            <i className="fa-brands fa-css3-alt blue"></i>
            <a
              href="https://github.com/Tobir49/OpenClassrooms_Site_HTML_CSS"
              target="blank"
            >
              <i className="fa-brands fa-github blue"></i>
            </a>
          </div>
          <img
            src={projectOne}
            alt="Projet HTML et CSS"
            className="img-project"
            id="1"
          />
          <div className="text-project white">
            <p className="white">⏰ 01-2023</p>
            <p className="white">🪪 BOOKI</p>
            <p className="white center">
              💻 Intégration d’un contenu web statique à partir d’une maquette
              Figma. Le site devait être responsive sur Ordinateur, Tablette et
              Mobile. Première utilisation de GitHub sur ce projet, ainsi que de
              GitHub Pages pour héberger l'intégration.
            </p>
            <p className="white center">
              L'utilisation de Flexbox ainsi que l'optimisation des images ont
              été les éléments les plus durs à gérer lors de ce projet (puisque
              débutant).
            </p>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <div className="one-project">
          <div className="techno-project">
            <i className="fa-brands fa-square-js blue"></i>
            <i className="fa-brands fa-html5 blue"></i>
            <i className="fa-brands fa-css3-alt blue"></i>
            <a href="https://github.com/Tobir49/Projet3" target="blank">
              <i className="fa-brands fa-github blue"></i>
            </a>
          </div>
          <img
            src={projectTwo}
            alt="Projet JavaScript"
            className="img-project"
          />
          <div className="text-project white">
            <p className="white">⏰ 02/03-2023</p>
            <p className="white">🪪 Sophie Buel - Architecte</p>
            <p className="white center">
              💻 Création d’un code JavaScript (pas de frameworks) afin de
              rendre le site d’une architecte dynamique. Utilisation d’un token,
              création d’une fonction login, création d’une galerie de projet à
              partir d’une base de données. Gestion des routes grâce à Postman &
              Swagger.
            </p>
            <p className="white center">
              N'ayant jamais utilisé JavaScript, son utilisation n'était pas
              simple ni évidente au début du projet. C'est pourquoi la
              compréhension de fetch et les fonctions pour trier et afficher les
              modales sont ce qui m'a pris le plus de temps à réaliser lors de
              ce projet.
            </p>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <div className="one-project">
          <div className="techno-project">
            <p className="blue">Agilité</p>
            <p className="blue">Gestion de projet</p>
            <p className="blue">User Stories</p>
          </div>
          <img
            src={projectThree}
            alt="Gestion de projet, agilité"
            className="img-project"
          />
          <div className="text-project white">
            <p className="white">⏰ 04-2023</p>
            <p className="white">🪪 Gestion du développement d'un site</p>
            <p className="white center">
              💻 Afin de gérer le bon développement d’un site, j’ai dû créer le
              document des spécifications techniques, gérer les étapes de chaque
              sprint, créer des users stories en prenant en compte les
              technologies à utiliser avant de présenter cela au chef de projet
              du client.
            </p>
            <p className="white center">
              Ce projet m'a permis de développer des compétences importantes en
              tant que développeur : l'agilité, entre autres. Néanmoins créer
              des users stories n'est pas simple lorsque l'on débute dans
              l'agilité et ses façons de faire.
            </p>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <div className="one-project">
          <div className="techno-project">
            <i className="fa-brands fa-square-js blue"></i>
            <i className="fa-brands fa-html5 blue"></i>
            <a
              href="https://github.com/Tobir49/Projet_5_Openclassrooms"
              target="blank"
            >
              <i className="fa-brands fa-github blue"></i>
            </a>
          </div>
          <img
            src={projectFour}
            alt="Projet débug et optimisation"
            className="img-project"
          />
          <div className="text-project white">
            <p className="white">⏰ 04/05-2023</p>
            <p className="white">🪪 Debug et Optimisation d'un site</p>
            <p className="white center">
              💻 Avec l’aide des Chrome Devtools, il fallait rendre un site de
              photographe plus accessible, améliorer ses performances ainsi que
              SEO. L’utilisation de Javascript, des balises meta et de
              manipulation d'extension d'images était nécessaire.
            </p>
            <p className="white center">
              Durant ce projet, la seule problématique que j'ai rencontrée était
              le fait de débugger une fonction. L'objectif était de corriger
              l'erreur dans une fonction JavaScript, qui empêchait de passer
              d'une image à l'autre sur la modale.
            </p>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <div className="one-project">
          <div className="techno-project">
            <i className="fa-brands fa-react blue"></i>
            <i className="fa-brands fa-square-js blue"></i>
            <i className="fa-brands fa-css3-alt blue"></i>
            <a href="https://github.com/Tobir49/Projet_6_Kasa" target="blank">
              <i className="fa-brands fa-github blue"></i>
            </a>
          </div>
          <img src={projectFive} alt="Projet react" className="img-project" />
          <div className="text-project white">
            <p className="white">⏰ 05-2023</p>
            <p className="white">🪪 KASA</p>
            <p className="white center">
              💻 Un site d'hébergements souhaitait refaire le code de leur site
              en utilisant React. Mon objectif était de, à partir d'une
              maquette, créer une application React. L'utilisation de Create
              React App et React Router était obligatoire, tout comme le fait de
              n'utiliser que ces deux technologies.
            </p>
            <p className="white center">
              Certaines fonctions utilisant les hooks et les props m'ont posé
              problème durant la création de cette application. En effet, j'ai
              mis du temps à comprendre leur utilisation et leur fonctionnement.
            </p>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <div className="one-project">
          <div className="techno-project">
            <i className="fa-brands fa-square-js blue"></i>
            <i className="fa-brands fa-node-js blue"></i>
            <i className="fa-solid fa-database blue"></i>
            <a
              href="https://github.com/Tobir49/P7_Mon_Vieux_Grimoire"
              target="blank"
            >
              <i className="fa-brands fa-github blue"></i>
            </a>
          </div>
          <img src={projectSix} alt="Projet Back-End" className="img-project" />
          <div className="text-project white">
            <p className="white">⏰ 06/07-2023</p>
            <p className="white">🪪 Back-End d'un site</p>
            <p className="white center">
              💻 Un site de notation de livres souhaitait ajouter du Back-End à
              leur site. La 1e étape consistait à cloner le code Front-End avant
              d'y intégrer mon application Back. Pour créer ce que souhaitait le
              clien j'ai :
            </p>
            <ul>
              <li className="white center">créé des APIs,</li>
              <li className="white center">
                créé une base de données Atlas (MongoDB),
              </li>
              <li className="white center">
                créé des fonctions pour envoyer des livres dans la base de
                données.
              </li>
            </ul>
            <p className="white center">
              N'ayant jamais fait de Back ni utilisé Nodejs et Expressjs, j'ai
              mis du temps à comprendre le fonctionnement de ces frameworks
              ainsi que la manipulation des requêtes et leur lien avec la base
              de données.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;
