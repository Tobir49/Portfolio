import "./contact.css";

function Contact() {
  return (
    <article id="contact" className="contact z-index">
      <div className="div-one-contact">
        <i className="fa-solid fa-location-dot yellow contact-icon"></i>
        <p className="white contact-text">1, rue Pierre Nion. Trélazé 49800</p>
      </div>

      <div className="div-one-contact">
        <i className="fa-solid fa-envelope yellow contact-icon"></i>
        <p className="white contact-text">baptisteribot@outlook.fr</p>
      </div>

      <div className="div-one-contact">
        <i className="fa-solid fa-mobile yellow contact-icon"></i>
        <p className="white contact-text">06.89.97.85.41</p>
      </div>

      <div className="div-one-contact">
        <a
          href="https://github.com/Tobir49"
          target="blank"
          className="white contact-a"
        >
          <i className="fa-brands fa-github yellow contact-icon"></i>
          GitHub
        </a>
      </div>

      <div className="div-one-contact">
        <a
          href="https://linkedin.com/in/baptiste-ribot-6bb910229"
          target="blank"
          className="white contact-a"
        >
          <i className="fa-brands fa-linkedin yellow contact-icon"></i>
          Linkedin
        </a>
      </div>
    </article>
  );
}

export default Contact;
