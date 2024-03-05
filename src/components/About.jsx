function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            <p>
              My professional career began in the IT field when I joined the
              Marine Corps in 2015. Throughout this period, I mastered key
              skills including technical troubleshooting and team collaboration.
              Once my service ended, I continued my career in the IT field while
              working multiple jobs focusing on customer service, system
              administration, and device management. After approximately 6 years
              in the IT field, I had a strong desire to use more of my
              creativity and troubleshooting skills. I chose to transition to
              web design and development because it allows me to incorporate my
              creativity while still utilizing some of the key technical skills.
              I learned throughout my experience in IT. I graduated from
              National University with a Bachelor’s degree in digital media
              design. Additionally, I obtained my Full-stack Web Development
              certificate through the Grace Hopper Full stack Web development
              program to further my knowledge of the field and master the
              necessary skills.
            </p>
            <a
              href="./#contact"
              className="btn btn--med btn--theme dynamicBgClr contact-btn"
            >
              Contact
            </a>
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">React Router</div>
              <div className="skills__skill">Redux</div>
              <div className="skills__skill">Express.js</div>
              <div className="skills__skill">PostgreSQL</div>
              <div className="skills__skill">GitHub</div>
              <div className="skills__skill">Figma</div>
              <div className="skills__skill">Adobe Illustrator</div>
              <div className="skills__skill">Adobe Photoshop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
