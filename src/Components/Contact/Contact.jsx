import "./contact.css";

function Contact() {
  return (
    <article id="contact" className="contact z-index column justify">
      <div className="div-one-contact">
        <i className="fa-solid fa-envelope white contact-icon"></i>
        <p className="white contact-text">baptisteribot@outlook.fr</p>
      </div>

      <div className="div-one-contact">
        <i className="fa-solid fa-mobile white contact-icon"></i>
        <p className="white contact-text">06.89.97.85.41</p>
      </div>

      <div className="div-one-contact">
        <a
          href="https://github.com/Tobir49"
          target="blank"
          className="contact-a"
        >
          <i className="fa-brands fa-github contact-icon"></i>
          Mon GitHub
        </a>
      </div>

      <div className="div-one-contact">
        <a
          href="https://linkedin.com/in/baptiste-ribot-6bb910229"
          target="blank"
          className="contact-a"
        >
          <i className="fa-brands fa-linkedin contact-icon"></i>
          Mon Linkedin
        </a>
      </div>
    </article>
  );
}

export default Contact;
