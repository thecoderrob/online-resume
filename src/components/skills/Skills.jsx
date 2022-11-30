import React from "react";
import Skill from "./Skill";

import { skills } from "../../constants";

const Skills = () => {
  return (
    <section className="section--skills | container" id="skills">
      <div className="section__title | flow">
        <h2 className="fs-800 title-bold center">Skills</h2>
        <p className="center">My technical skills</p>
      </div>

      <div className="grid--skills | grid">
        {skills.map((skl) => {
          const { id, title, tSkills } = skl;
          return (
            <div className="card--skills | card" key={id}>
              <h3 className="card__title | fs-700 title-medium center">
                {title}
              </h3>
              <div className="grid--skill | grid">
                {tSkills.map((ts) => {
                  const { id } = ts;
                  return <Skill key={id} {...ts} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
