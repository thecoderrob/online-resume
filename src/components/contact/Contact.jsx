import React from "react";

import { contactInfo } from "../../constants";

const Contact = () => {
  return (
    <section className="section--contact | container" id="contact">
      <div className="section__title | center">
        <h2 className="fs-800 title-bold">Contact</h2>
        <p>My contact information</p>
      </div>
      <div className="grid--contact | grid">
        {contactInfo.map((info) => {
          const { id, title, logo, data } = info;
          return (
            <div className="card--contact | card center" key={id}>
              <i className={`${logo} fs-800 title-medium`}></i>
              <h3 className="fs-700 title-medium">{title}</h3>
              <p>{data}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
