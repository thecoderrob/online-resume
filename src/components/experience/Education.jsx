import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <div>
      {education.map((educ) => {
        const { id, school, course = null, yearStart, yearEnd } = educ;

        return (
          <div className="grid--experience | grid" key={id}>
            {id % 2 != 0 && (
              <>
                <div>
                  <h1 className="fs-600 title-medium">{school}</h1>
                  <p>{course}</p>
                  <p className="experience__date">
                    <i className="uil uil-calendar-alt"></i> {yearStart} -{" "}
                    {yearEnd}
                  </p>
                </div>

                <div>
                  <span className="timeline__rounded"></span>

                  {id < education.length && (
                    <span className="timeline__line"></span>
                  )}
                </div>

                <div></div>
              </>
            )}

            {id % 2 == 0 && (
              <>
                <div></div>

                <div>
                  <span className="timeline__rounded"></span>

                  {id < education.length && (
                    <span className="timeline__line"></span>
                  )}
                </div>

                <div>
                  <h1 className="fs-600 title-medium">{school}</h1>
                  <p>{course}</p>
                  <p className="experience__date">
                    <i className="uil uil-calendar-alt"></i> {yearStart} -{" "}
                    {yearEnd}
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Education;
