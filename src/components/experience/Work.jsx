import React from "react";
import { workExperience } from "../../constants";

const Work = () => {
  return (
    <div>
      {workExperience.map((work) => {
        const { id, company, position, dateStart, dateEnd } = work;

        return (
          <div className="grid--experience grid" key={id}>
            {id % 2 != 0 && (
              <>
                <div>
                  <h1 className="fs-600 title-medium">{company}</h1>
                  <p>{position}</p>
                  <p className="experience__date">
                    <i className="uil uil-calendar-alt"></i> {dateStart} -{" "}
                    {dateEnd}
                  </p>
                </div>

                <div>
                  <span className="timeline__rounded"></span>

                  {id < workExperience.length && (
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

                  {id < workExperience.length && (
                    <span className="timeline__line"></span>
                  )}
                </div>

                <div>
                  <h1 className="fs-600 title-medium">{company}</h1>
                  <p>{position}</p>
                  <p className="experience__date | fs-300">
                    <i className="uil uil-calendar-alt"></i> {dateStart} -{" "}
                    {dateEnd}
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

export default Work;
