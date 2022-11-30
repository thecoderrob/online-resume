import React, { useState } from "react";

import Exp from "./Exp";

import { education, workExperience } from "../../constants";

const Experience = () => {
  const [activeLabel, setActiveLabel] = useState(1);
  const [activeData, setActiveData] = useState(workExperience);

  const handleData = (label) => {
    setActiveLabel(label);
    if (label == 0) {
      setActiveData(education);
    } else {
      setActiveData(workExperience);
    }
  };

  return (
    <section className="section--experience | container" id="experience">
      <div className="section__title | flow">
        <h2 className="fs-800 title-bold center">
          {activeLabel == 0 ? "Education" : "Work"}
        </h2>
        <p className="center">
          {activeLabel == 0
            ? "My educational background"
            : "My work experience"}
        </p>
      </div>

      <div className="experience__toggler-group | flex">
        <button
          className={`cta cta--light cta--small ${
            activeLabel == 0 ? "active-cta--light" : ""
          }`}
          onClick={() => handleData(0)}
        >
          <i className="uil uil-graduation-cap"></i> Education
        </button>
        <button
          className={`cta cta--light cta--small ${
            activeLabel == 1 ? "active-cta--light" : ""
          }`}
          onClick={() => handleData(1)}
        >
          <i className="uil uil-building"></i> Work
        </button>
      </div>

      <div className="experience-timeline">
        {activeData.map((data) => {
          return <Exp key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
