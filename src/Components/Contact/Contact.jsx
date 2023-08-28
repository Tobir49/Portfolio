import "./contact.css";

function Contact() {
  return (
    <article id="contact" className="contact z-index column justify">
      <div className="div-one-contact">
        <i className="fa-solid fa-location-dot blue contact-icon"></i>
        <p className="blue contact-text">Trélazé 49800</p>
      </div>

      <div className="div-one-contact">
        <i className="fa-solid fa-envelope blue contact-icon"></i>
        <p className="blue contact-text">baptisteribot@outlook.fr</p>
      </div>

      <div className="div-one-contact">
        <i className="fa-solid fa-mobile blue contact-icon"></i>
        <p className="blue contact-text">06.89.97.85.41</p>
      </div>

      <div className="div-one-contact">
        <a
          href="https://github.com/Tobir49"
          target="blank"
          className="blue contact-a"
        >
          <i className="fa-brands fa-github blue contact-icon"></i>
          GitHub
        </a>
      </div>

      <div className="div-one-contact">
        <a
          href="https://linkedin.com/in/baptiste-ribot-6bb910229"
          target="blank"
          className="blue contact-a"
        >
          <i className="fa-brands fa-linkedin blue contact-icon"></i>
          Linkedin
        </a>
      </div>
    </article>
  );
}

export default Contact;
