import "./nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <ul className="ul-nav">
          <li>
            <a href="#projects" className="li-nav yellow">
              me
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav yellow">
              projects
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav yellow">
              skills
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav yellow">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#CV" className="yellow">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Nav;
