import "./nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <ul className="ul-nav">
          <li>
            <a href="#projects" className="li-nav">
              me
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav">
              projects
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav">
              skills
            </a>
          </li>
          <li>
            <a href="#projects" className="li-nav">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#CV" className="p-nav">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Nav;
