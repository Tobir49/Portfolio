import "./nav.css";
import Icons from "./Icons";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="div-nav">
      <Link to="/home">
        <img
          src="../images/picture.png"
          alt="Baptiste Ribot"
          className="logo"
        />
      </Link>
      <div className="nav-bar">
        <Icons />
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
