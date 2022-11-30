import React from "react";
import imgHome from "../../assets/img-home-sq.jpg";

const Home = ({ setActiveLink }) => {
  return (
    <section className="section--home" id="home">
      <article className="container grid">
        <img src={imgHome} alt="" className="home__img" />

        <div className="home__text | flow">
          <div className="home__header">
            <h1 className="home__title | fs-900 title-bold">Robin Regodon</h1>
            <p className="home__subtitle | flex fs-700 text-neutral-800">
              Web Developer
            </p>
          </div>
          <p className="home__copy">
            I am a professional web developer with 2 years of work experience. I
            am curious about web development and try to learn more about it by{" "}
            <a href="#certificates" className="title-medium">
              taking online courses
            </a>
            , watching YouTube videos, and reading blogs. My goal is to build
            projects that will have a positive impact on its users.
          </p>
          <a
            href="#contact"
            className="cta cta--big cta--dark"
            onClick={() => setActiveLink(6)}
          >
            Say Hello <i className="uil uil-message cta__icon"></i>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
