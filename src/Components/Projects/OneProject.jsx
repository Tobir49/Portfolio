function test(id) {
  const image = document.getElementById(id);
  // image.style.filter = "grayscale(100%)";
  console.log(image);
}

function OneProject(props) {
  return (
    <div className="all-projects">
      <div className="one-project">
        <div
          className="techno-project"
          onMouseEnter={test("1")}
          // onMouseLeave=""
        >
          <i className={`${props.technoIconOne} blue`}></i>
          <i className={`${props.technoIconTwo} blue`}></i>
          <i className={`${props.technoIconThree} blue`}></i>

          {props.isList ? (
            <ul>
              <li>{props.liOne}</li>
              <li>{props.liTwo}</li>
              <li>{props.liThree}</li>
            </ul>
          ) : (
            " "
          )}

          <a href={props.href} target="blank">
            <i className={`${props.gitHubIcon} blue`}></i>
          </a>
        </div>
        <img
          src={props.src}
          alt={props.alt}
          className="img-project"
          id={props.id}
        />
        <div className="text-project white">
          <p className="white">⏰ {props.date}</p>
          <p className="white">🪪 {props.title}</p>
          <p className="white center">💻 {props.textOne}</p>
          <p className="white center">⛔️{props.textTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default OneProject;
