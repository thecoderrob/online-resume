import React, { useState } from "react";

import { portfolio } from "../../constants";

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState(0);

  return (
    <section className="section--portfolio | container" id="portfolio">
      <div className="section__title | center">
        <h2 className="fs-800 title-bold">Portfolio</h2>
        <p>My most recent works</p>
      </div>

      <div className="portfolio__selector-group | flex">
        <button
          className={`portfolio__toggler ${
            activePortfolio == 0 ? "active-portfolio" : ""
          }`}
          onClick={() => setActivePortfolio(0)}
        >
          All
        </button>
        {portfolio.map((p) => {
          const { id, title } = p;
          return (
            <button
              key={id}
              className={`portfolio__toggler ${
                activePortfolio == id ? "active-portfolio" : ""
              }`}
              onClick={() => setActivePortfolio(id)}
            >
              {title}
            </button>
          );
        })}
      </div>

      {portfolio
        .filter((p) => {
          if (activePortfolio == 0) return p;
          return p.id == activePortfolio;
        })
        .map((p) => {
          const { id, projects } = p;

          return (
            <div className="grid--portfolio grid" key={id}>
              {projects.map((proj) => {
                const { id, img, title, siteUrl, githubUrl } = proj;

                return (
                  <div className="card--project card" key={id}>
                    <div className="card__img-wrapper">
                      <img src={img} alt="" className="card__img" />
                    </div>

                    <h3 className="card__title fs-600 title-medium">{title}</h3>

                    <div className="card__footer | flex">
                      <a
                        href={githubUrl}
                        target="_blank"
                        className="project__repo"
                      >
                        Repo
                      </a>
                      <a
                        href={siteUrl}
                        target="_blank"
                        className="project__site"
                      >
                        Demo <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </section>
  );
};

export default Portfolio;
