function Contact() {
  return (
    <article id="contact">
      <div>
        <i className="fa-solid fa-location-dot yellow"></i>
        <p className="white">1, rue Pierre Nion. Trélazé 49800</p>
      </div>
      <div>
        <i className="fa-solid fa-envelope yellow"></i>
        <p className="white">baptisteribot@outlook.fr</p>
      </div>
      <div>
        <i className="fa-solid fa-mobile yellow"></i>
        <p className="white">06.89.97.85.41</p>
      </div>
      <div>
        <i className="fa-brands fa-github yellow"></i>
        <a href="https://github.com/Tobir49" target="blank" className="white">
          GitHub
        </a>
      </div>
      <div>
        <i className="fa-brands fa-linkedin yellow"></i>
        <a
          href="https://linkedin.com/in/baptiste-ribot-6bb910229"
          target="blank"
          className="white"
        >
          Linkedin
        </a>
      </div>
    </article>
  );
}

export default Contact;
