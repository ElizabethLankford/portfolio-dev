function Hero() {
  return (
    <section id="hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hello, My name is Elizabeth Lankford
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I am a passionate fullstack developer based in North Dallas, TX. I
            have a passion for creating, learning, and growing my developer
            skills.
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
            <img
              src="/img/linkedin-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://github.com/ElizabethLankford"
            target="_blank"
            className="home-hero__social-icon-link"
          >
            <img
              src="/img/github-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="mailto:elizabethlankford1@gmail.com"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="/svg/envelope-solid.svg"
              alt="icon"
              className="home-hero__social-icon"
            />
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
