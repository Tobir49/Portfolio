import "./skills.css";
import WebIcons from "./WebIcons";
import OtherIcons from "./OtherIcons";

function Skills() {
  return (
    <article>
      <div>
        <h2 className="white basic">Web :</h2>
        <WebIcons />
      </div>

      <div>
        <h2 className="white basic">Others :</h2>
        <OtherIcons />
      </div>

      <div className="soft-skills">
        <h2 className="white basic">Soft Skills :</h2>

        <div className="div-one-soft-skill">
          <i className="fa-solid fa-people-line white"></i>
          <p className="white">Esprit d'équipe</p>
        </div>

        <div className="div-one-soft-skill">
          <i className="fa-solid fa-hands-holding-child white"></i>
          <p className="white">Autonome</p>
        </div>

        <div className="div-one-soft-skill">
          <i className="fa-solid fa-people-group white"></i>
          <p className="white">Gestion d'équipe</p>
        </div>

        <div className="div-one-soft-skill">
          <i className="fa-solid fa-handshake-simple white"></i>
          <p className="white">Communication</p>
        </div>

        <div className="div-one-soft-skill">
          <i className="fa-solid fa-shuffle white"></i>
          <p className="white">Flexibilité</p>
        </div>

        <div className="div-one-soft-skill">
          <i className="fa-solid fa-people-arrows white"></i>
          <p className="white">Sociabilité</p>
        </div>
      </div>
    </article>
  );
}

export default Skills;
