import React from "react";

const Exp = ({ id, title, subtitle = null, dateStart, dateEnd }) => {
  return (
    <div className="grid--experience | grid">
      <div
        className="experience"
        style={{ "--grid-area": id % 2 === 0 ? "right" : "left" }}
      >
        <h1 className="fs-600 title-medium">{title}</h1>
        <p className="experience__subtitle">{subtitle}</p>
        <p className="experience__date | fs-300">
          {dateStart} - {dateEnd}
        </p>
      </div>
    </div>
  );
};

export default Exp;
