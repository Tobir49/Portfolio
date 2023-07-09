import "./nav.css";
import Icons from "./Icons";

function Nav() {
  return (
    <div className="div-nav">
      <img src="../images/picture.png" alt="Baptiste Ribot" className="logo" />
      <div className="nav-bar">
        <Icons />
      </div>
    </div>
  );
}

export default Nav;
