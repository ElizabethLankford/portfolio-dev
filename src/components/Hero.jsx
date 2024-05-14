import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Hero() {
  return (
    <section id="hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hello, My name is Elizabeth Lankford
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I am a passionate full stack software engineer based out of North
            Dallas, TX. I have a passion for creating, learning, and growing my
            developer skills.
          </p>
        </div>
        <div className="home-hero__cta">
          <a className="btn btn--bg" href="/#projects">
            See my projects
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a
            href="https://www.linkedin.com/in/elizabethlankford/"
            target="_blank"
            className="home-hero__social-icon-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://github.com/ElizabethLankford"
            target="_blank"
            className="home-hero__social-icon-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="/#contact"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
export default Hero;
