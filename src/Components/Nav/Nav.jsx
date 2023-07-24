import "./nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <ul className="ul-nav">
          <li>
            <a href="#me" className="li-nav yellow">
              Infos
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav yellow">
              Projets
            </a>
          </li>
          <li>
            <a href="#skills" className="li-nav yellow">
              Compétences
            </a>
          </li>
          <li>
            <a href="#contact" className="li-nav yellow">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#" className="yellow">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Nav;
