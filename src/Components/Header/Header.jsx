import "./header.css";

function Header() {
  return (
    <header>
      <div>
        <h1>RIBOT Baptiste</h1>
        <h2 className="h2-header">💻 Web Developper 💻</h2>
      </div>
      <a href="#projects" className="a-header">
        projects
      </a>
    </header>
  );
}

export default Header;
