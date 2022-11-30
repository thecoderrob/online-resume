import React from "react";

import { socials } from "../../constants";

const Footer = ({ setActiveLink }) => {
  return (
    <footer className="center | flow">
      <a href="#" className="footer__logo | fs-900 title-bold">
        Regodon
      </a>
      <div className="footer__socials | flex">
        {socials.map((social) => {
          const { id, icon, link } = social;

          return (
            <a href={link} target="_blank" className="footer__social">
              <i className={`${icon} footer__social-icon`}></i>
            </a>
          );
        })}
      </div>

      <p className="fs-300">&copy; Robin Regodon. All rights reserved</p>

      <a
        href="#home"
        className="back-to-top fs-700"
        onClick={() => setActiveLink(1)}
      >
        <i class="uil uil-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
