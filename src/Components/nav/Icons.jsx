import { Link } from "react-router-dom";

function Icons() {
  return (
    <>
      <ul className="ul-nav">
        <li>
          <Link to="/home">
            <i className="fa-solid fa-house not-colored"></i>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="fa-solid fa-briefcase not-colored"></i>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa-solid fa-comment-dots not-colored"></i>
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <i className="fa-solid fa-chart-simple not-colored"></i>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Icons;
