import React, { useState } from "react";

import Education from "./Education";
import Work from "./Work";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState("work");

  return (
    <section className="section--experience | container" id="experience">
      <div className="section__title | flow">
        <h2 className="fs-800 title-bold center">
          {activeExperience == "education" ? "Education" : "Work"}
        </h2>
        <p className="center">
          {activeExperience == "education"
            ? "My educational background"
            : "My work experience"}
        </p>
      </div>

      <div className="experience__toggler-group | flex">
        <button
          className={`experience__toggler ${
            activeExperience == "education" ? "active-experience" : ""
          }`}
          onClick={() => setActiveExperience("education")}
        >
          <i className="uil uil-graduation-cap"></i> Education
        </button>
        <button
          className={`experience__toggler ${
            activeExperience == "work" ? "active-experience" : ""
          }`}
          onClick={() => setActiveExperience("work")}
        >
          <i className="uil uil-building"></i> Work
        </button>
      </div>

      <div className="experience">
        {activeExperience == "education" && <Education />}
        {activeExperience == "work" && <Work />}
      </div>
    </section>
  );
};

export default Experience;
