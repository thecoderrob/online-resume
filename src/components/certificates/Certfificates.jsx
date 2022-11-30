import React from "react";

import { certificates } from "../../constants";

const Certfificates = () => {
  return (
    <section className="section--certificates | container" id="certificates">
      <div className="section__title center">
        <h2 className="fs-800 title-bold">Certificates</h2>
        <p>From the courses I attended</p>
      </div>

      <div className="grid--certificates | grid">
        {certificates.map((cert) => {
          const { id, title, subtitle, link, logo } = cert;

          return (
            <div className="card--certificate | card grid" key={id}>
              <img
                src={logo}
                alt="institute logo"
                className="certificate__logo"
              />
              <div>
                <h3 className="fs-700 title-medium">{title}</h3>
                <p>{subtitle}</p>
              </div>
              <a
                href={link}
                target="_blank"
                className="cta cta--xsmall cta--light"
              >
                Verify <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certfificates;
