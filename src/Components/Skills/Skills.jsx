import "./skills.css";
import WebIcons from "./WebIcons";
import OtherIcons from "./OtherIcons";

function Skills() {
  return (
    <article id="skills">
      <div className="div-web">
        <h2 className="yellow basic">Web :</h2>
        <WebIcons />
      </div>
      <br />
      <div className="div-others">
        <h2 className="yellow basic">Autres :</h2>
        <OtherIcons />
      </div>
    </article>
  );
}

export default Skills;
