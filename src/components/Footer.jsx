import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/elizabethlankford/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ElizabethLankford"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Elizabeth Lankford</h4>
            <p className="main-footer__short-desc">
              Fullstack Developer with a passion for continuous learning and
              creating.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
