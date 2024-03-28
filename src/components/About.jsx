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
              skills including technical troubleshooting, problem-solving, and
              team collaboration. Once my military service ended, I continued
              working in IT support, system administration, and mobile device
              management roles. Driven by a passion for innovation, I
              transitioned to web design and development, merging creativity
              with technical aptitude. This allowed me to incorporate my 7+
              years of technical expertise and my personal creativity. I
              graduated in 2023 from National University with a Bachelor of Arts
              degree in digital media design. Additionally, I obtained my
              Full-stack Web Development certificate through the Grace Hopper
              program at Fullstack Academy to further my knowledge of the field
              and master the necessary software development skills.
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
              <div className="skills__skill">Node.js</div>
              <div className="skills__skill">REST API</div>
              <div className="skills__skill">Express.js</div>
              <div className="skills__skill">PostgreSQL</div>
              <div className="skills__skill">Git</div>
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
