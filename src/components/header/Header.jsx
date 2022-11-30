import React, { useState } from "react";

import { navLinks } from "../../constants";

const Header = ({ activeLink, setActiveLink }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="primary-header">
      <nav className="nav | flex container">
        <a href="#home" className="nav__logo" onClick={() => setActiveLink(1)}>
          Regodon
        </a>

        <ul className="nav__list" data-expanded={isNavOpen}>
          {navLinks.map((navLink) => {
            const { id, title, link, icon } = navLink;

            return (
              <li className="nav__item" key={id}>
                <a
                  href={link}
                  className={`nav__link ${
                    id === activeLink ? "active-link" : ""
                  }`}
                  onClick={() => setActiveLink(id)}
                >
                  <i className={`uil uil-${icon} nav__icon`}></i> {title}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="nav__toggle"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          {isNavOpen ? (
            <i
              className="uil uil-times nav__toggle-icon"
              aria-hidden="true"
            ></i>
          ) : (
            <i className="uil uil-apps nav__toggle-icon" aria-hidden="true"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
