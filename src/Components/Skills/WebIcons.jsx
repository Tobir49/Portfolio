import CssIcon from "../../../images/icons/web/css.png";
import HtmlIcon from "../../../images/icons/web/html.png";
import ExpressIcon from "../../../images/icons/web/express.png";
import FigmaIcon from "../../../images/icons/web/figma.png";
import JsIcon from "../../../images/icons/web/js.png";
import MongoIcon from "../../../images/icons/web/mongodb.png";
import NodeIcon from "../../../images/icons/web/node.png";
import PostmanIcon from "../../../images/icons/web/postman.png";
import SwaggerIcon from "../../../images/icons/web/swagger.png";
import Terminal from "../../../images/icons/web/terminal.png";
import ReactIcon from "../../../images/icons/web/react.png";
import VscodeIcon from "../../../images/icons/web/vscode.png";

function WebIcons() {
  return (
    <div className="div-icons-web">
      <img
        src={Terminal}
        alt="icône Terminal"
        className="icons-skills terminal-icon"
      />
      <img src={VscodeIcon} alt="icône VS Code" className="icons-skills" />
      <img src={HtmlIcon} alt="icône HTML" className="icons-skills" />
      <img src={CssIcon} alt="icône CSS" className="icons-skills" />
      <img src={JsIcon} alt="icône JavaScript" className="icons-skills" />
      <img src={ReactIcon} alt="icône React" className="icons-skills" />
      <img src={NodeIcon} alt="icône Node js" className="icons-skills" />
      <img
        src={ExpressIcon}
        alt="icône Express js"
        className="icons-skills express-icon"
      />
      <img src={MongoIcon} alt="icône MongoDB" className="icons-skills" />
      <img src={PostmanIcon} alt="icône Postman" className="icons-skills" />
      <img src={SwaggerIcon} alt="icône Swagger" className="icons-skills" />
      <img src={FigmaIcon} alt="icône Figma" className="icons-skills" />
    </div>
  );
}

export default WebIcons;
