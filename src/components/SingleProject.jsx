import { useParams } from "react-router-dom";
import projectData from "../projectData";
function SingleProject() {
  const { projectId } = useParams();
  const thisProject = projectData.find((proj) => proj.id == projectId);

  const skills = thisProject.used.map((skill) => skill);

  return (
    <>
      <section className="project-cs-hero" key={thisProject?.id}>
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{thisProject?.name}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              Below you can find all the info for this project such as the
              project overview, tools used and links to the site and repository.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a
              href={thisProject?.liveUrl}
              className="btn btn--bg"
              target="_blank"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={thisProject?.img}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Project Overview
                </h3>
                <p className="project-details__desc-para">
                  {thisProject?.fullDes}
                </p>
                <p className="project-details__desc-para"></p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {skills.map((each) => {
                    return (
                      <div key={each} className="skills__skill">
                        {each}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href={thisProject?.liveUrl}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  href={thisProject?.githubUrl}
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SingleProject;
