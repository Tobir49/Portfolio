import "./footer.css";

function Footer() {
  return (
    <footer>
      <h2 className="footer-text footer-title">Baptiste Ribot</h2>
      <h3 className="footer-text footer-year">2023</h3>
      <div>
        <ul className="ul-footer">
          <li className="li-footer">
            <a
              href="https://www.figma.com/file/dYB14VWhEs610tAqB1686H/Maquette?type=design&node-id=21%3A207&mode=design&t=RoRBmjrV1D17j73w-1"
              target="blank"
              className="a-footer"
            >
              <i className="fa-brands fa-figma footer-icon"></i>
            </a>
          </li>
          <li className="li-footer">
            <a
              href="https://github.com/Tobir49"
              target="blank"
              className="a-footer"
            >
              <i className="fa-brands fa-github footer-icon"></i>
            </a>
          </li>
          <li className="li-footer">
            <a
              href="https://www.linkedin.com/in/baptiste-ribot-6bb910229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7nAd76VISAmq8ifGtXbIXA%3D%3D"
              target="blank"
              className="a-footer"
            >
              <i className="fa-brands fa-linkedin footer-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
