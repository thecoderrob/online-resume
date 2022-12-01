import React from "react";

const Exp = ({
  id,
  title,
  subtitle = null,
  list = null,
  dateStart,
  dateEnd,
}) => {
  return (
    <div className="grid--experience | grid">
      <div
        className="experience"
        style={{ "--grid-area": id % 2 === 0 ? "right" : "left" }}
      >
        <div className="experience__header | flow">
          <p className="experience__date | fw-medium">
            {dateStart} - {dateEnd}
          </p>
          <h1 className="fs-600 title-medium">{title}</h1>
          <p className="experience__subtitle | fw-medium">{subtitle}</p>
        </div>
        <ul className="experience__summary | flow">
          {list != null &&
            list.map((item) => {
              return (
                <li className="experience__summary__item | grid">
                  <i class="bx bxs-check-circle"></i>
                  <p>{item}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Exp;
