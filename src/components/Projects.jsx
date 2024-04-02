import { Link } from "react-router-dom";
import projectData from "../projectData.js";

function Projects() {
  const projectArr = projectData.map((item) => {
    return (
      <div key={item.id} className="projects__row">
        <div className="projects__row-img-cont">
          <Link to={`/${item.id}`}>
            <img
              src={item.img}
              alt="Software Screenshot"
              className="projects__row-img"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="projects__row-content">
          <h3 className="projects__row-content-title">{item.name}</h3>
          <p className="projects__row-content-desc">{item.shortDes}</p>
          <Link
            className="btn btn--med btn--theme dynamicBgClr"
            to={`/${item.id}`}
          >
            Learn more
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            All my projects include links to the code and live version. Click
            the button to learn more about each one.
          </span>
        </h2>
        <div className="projects__content">{projectArr}</div>
      </div>
    </section>
  );
}
export default Projects;
