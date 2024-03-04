import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="/src/assets/img/ProfilePic.jpeg"
              alt="Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">
            <Link to="/#hero">Elizabeth Lankford</Link>
          </span>
        </div>

        <div className="header__main">
          <ul
            className={`header__links navbar-links ${isOpen ? "active" : ""}`}
          >
            <li className="header__link-wrapper">
              <a className="header__link" href="/#hero">
                Home
              </a>
            </li>
            <li className="header__link-wrapper">
              <a className="header__link" href="/#projects">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">
                About{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a className="header__link" href="/#contact">
                {" "}
                Contact{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1WLUyWUN92N6_Ep7Uncjtpfx-jvgLfic3/edit?usp=sharing&ouid=107381376841140129778&rtpof=true&sd=true"
                className="header__link resume-link"
              >
                {" "}
                Resume{" "}
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src="/src/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="/src/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link to="/">Home</Link>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
            <li className="header__sm-menu-link">
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1WLUyWUN92N6_Ep7Uncjtpfx-jvgLfic3/edit?usp=sharing&ouid=107381376841140129778&rtpof=true&sd=true"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
