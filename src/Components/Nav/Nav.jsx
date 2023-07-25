import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="div-nav">
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
        <div className="div-cv">
          <a href="#" className="cv-text">
            CV
            <i className="fa-solid fa-download icon-cv"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
