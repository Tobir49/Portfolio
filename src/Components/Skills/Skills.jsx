import "./skills.css";
import WebIcons from "./WebIcons";
import OtherIcons from "./OtherIcons";

function Skills() {
  return (
    <article id="skills">
      <div className="div-web">
        <h2 className="white basic">Web :</h2>
        <WebIcons />
      </div>
      <br />
      <div className="div-others">
        <h2 className="white basic">Others :</h2>
        <OtherIcons />
      </div>

      <br />

      <div className="div-soft-skills">
        <h2 className="white basic">Soft Skills :</h2>
        <div className="div-icons-soft-skills">
          <div className="div-one-soft-skill">
            <i className="fa-solid fa-people-line white icon-soft-skill"></i>
            <p className="white text-soft-skill">Esprit d'équipe</p>
          </div>

          <div className="div-one-soft-skill">
            <i className="fa-solid fa-hands-holding-child white icon-soft-skill"></i>
            <p className="white text-soft-skill">Autonome</p>
          </div>

          <div className="div-one-soft-skill">
            <i className="fa-solid fa-people-group white icon-soft-skill"></i>
            <p className="white text-soft-skill">Gestion d'équipe</p>
          </div>

          <div className="div-one-soft-skill">
            <i className="fa-solid fa-handshake-simple white icon-soft-skill"></i>
            <p className="white text-soft-skill">Communication</p>
          </div>

          <div className="div-one-soft-skill">
            <i className="fa-solid fa-shuffle white icon-soft-skill"></i>
            <p className="white text-soft-skill">Flexibilité</p>
          </div>

          <div className="div-one-soft-skill">
            <i className="fa-solid fa-people-arrows white icon-soft-skill"></i>
            <p className="white text-soft-skill">Sociabilité</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Skills;
