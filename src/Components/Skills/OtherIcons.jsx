import DavinciIcon from "../../../images/icons/others/davinci.png";
import FilmoraIcon from "../../../images/icons/others/filmora.png";
import GimpIcon from "../../../images/icons/others/gimp.png";
import NotionIcon from "../../../images/icons/others/notion.png";
import PhotoshopIcon from "../../../images/icons/others/photoshop.png";
import PowerpointIcon from "../../../images/icons/others/powerpoint.png";
import SlackIcon from "../../../images/icons/others/slack.png";
import TrelloIcon from "../../../images/icons/others/trello.png";
import WordIcon from "../../../images/icons/others/word.png";

function OtherIcons() {
  return (
    <div className="div-icons-others">
      <img src={DavinciIcon} alt="icône Davinci" className="icons-skills" />
      <img src={FilmoraIcon} alt="icône Filmora" className="icons-skills" />
      <img src={GimpIcon} alt="icône Gimp" className="icons-skills" />
      <img src={NotionIcon} alt="icône Notion" className="icons-skills" />
      <img src={PhotoshopIcon} alt="icône Photoshop" className="icons-skills" />
      <img
        src={PowerpointIcon}
        alt="icône Powerpoint"
        className="icons-skills"
      />
      <img src={SlackIcon} alt="icône Slack" className="icons-skills" />
      <img src={TrelloIcon} alt="icône Trello" className="icons-skills" />
      <img src={WordIcon} alt="icône Word" className="icons-skills" />
    </div>
  );
}

export default OtherIcons;
