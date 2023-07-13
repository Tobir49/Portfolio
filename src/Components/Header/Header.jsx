import "./header.css";

function Header() {
  return (
    <header>
      <div>
        <h1 className="white">RIBOT Baptiste</h1>
        <h2 className="h2-header white basic">💻 Web Developper 💻</h2>
      </div>
      <a href="#projects" className="a-header yellow">
        projects
      </a>
    </header>
  );
}

export default Header;
