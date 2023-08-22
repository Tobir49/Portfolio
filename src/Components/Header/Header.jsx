import "./header.css";

function Header() {
  return (
    <header className="column align-items justify">
      <div>
        <h1 className="white">
          {" "}
          <span itemProp={"name"}>RIBOT Baptiste</span>
        </h1>
        <h2 className="h2-header white basic">💻 Développeur Web 💻</h2>
      </div>
      <a href="#projects" className="a-header yellow">
        Projets
      </a>
    </header>
  );
}

export default Header;
