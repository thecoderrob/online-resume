import React from "react";
import imgHome from "../../assets/img-home-sq.jpg";

const Home = () => {
  return (
    <section className="section--home" id="home">
      <article className="container grid">
        <img src={imgHome} alt="" className="home__img" />

        <div className="home__text | flow">
          <h1 className="home__title | fs-900 title-bold">Robin Regodon</h1>
          <p className="home__subtitle | flex fs-700 text-neutral-800">
            Web Developer
          </p>
          <p className="home__copy">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur accusamus sapiente error libero eaque veniam at nihil
            maiores adipisci eligendi.
          </p>
          <a href="#contact" className="cta cta--big cta--dark">
            Say Hello <i className="uil uil-message cta__icon"></i>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
