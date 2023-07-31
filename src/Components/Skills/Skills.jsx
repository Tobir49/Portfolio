import "./skills.css";
import WebIcons from "./WebIcons";
import OtherIcons from "./OtherIcons";

function Skills() {
  return (
    <article id="skills" className="z-index">
      <div className="div-web">
        <h2 className="blue bold title-skills">Web :</h2>
        <WebIcons />
      </div>
      <br />
      <div className="div-others">
        <h2 className="blue bold title-skills">Autres :</h2>
        <OtherIcons />
      </div>
    </article>
  );
}

export default Skills;
