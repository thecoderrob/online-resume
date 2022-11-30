import React from "react";

const Skill = ({ skill, proficiency }) => (
  <div className="skill | flex">
    <i className="bx bxs-badge-check | text-neutral-800"></i>
    <div className="skill__text | flow">
      <h4 className="fs-600 title-medium">{skill}</h4>
      <p className="fs-300">{proficiency}</p>
    </div>
  </div>
);

export default Skill;
