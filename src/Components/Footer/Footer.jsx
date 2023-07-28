import "./footer.css";

function Footer() {
  return (
    <footer className="z-index">
      <div className="copyright">
        <p className="white">©2023 - Tous droits réservés</p>
        <div>
          <a
            href="https://www.figma.com/file/dYB14VWhEs610tAqB1686H/Maquette?type=design&node-id=201%3A6&mode=design&t=uhyhNG300AWhVltA-1"
            target="blank"
          >
            <i className="fa-brands fa-figma white footer-icon"></i>
          </a>
          <a href="https://github.com/Tobir49" target="blank">
            <i className="fa-brands fa-github white footer-icon"></i>
          </a>
          <a
            href="https://linkedin.com/in/baptiste-ribot-6bb910229"
            target="blank"
          >
            <i className="fa-brands fa-linkedin white footer-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
