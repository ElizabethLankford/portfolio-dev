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
                <img
                  className="main-footer__icon"
                  src="/img/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ElizabethLankford"
              >
                <img
                  className="main-footer__icon"
                  src="/img/github-ico.png"
                  alt="icon"
                />
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
