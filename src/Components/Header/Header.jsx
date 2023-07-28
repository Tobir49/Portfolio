import "./header.css";

function Header() {
  return (
    <header className="column align-items">
      <div>
        <h1 className="white">RIBOT Baptiste</h1>
        <h2 className="h2-header white basic">💻 Développeur Web 💻</h2>
      </div>
      <a href="#projects" className="a-header yellow">
        projets
      </a>
    </header>
  );
}

export default Header;
