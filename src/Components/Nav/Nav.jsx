import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="div-nav">
        <ul className="ul-nav">
          <li>
            <a href="#me" className="li-nav li-info">
              Infos
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav">
              Projets
            </a>
          </li>
          <li>
            <a href="#skills" className="li-nav">
              Compétences
            </a>
          </li>
          <li>
            <a href="#contact" className="li-nav">
              Contact
            </a>
          </li>
        </ul>
        <div className="div-cv">
          <a
            href="/_CV.pdf"
            download="CV_RIBOT_Baptiste.pdf"
            className="cv-text"
          >
            CV
            <i className="fa-solid fa-download icon-cv"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
