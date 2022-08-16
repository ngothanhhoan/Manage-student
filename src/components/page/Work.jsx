/** @format */

import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Class list</h1>
      <div className='project-container'></div>
      {WorkCardData.map((val, ind) => {
        return (
          <WorkCard
            key={ind}
            imgscr={val.imgscr}
            title={val.title}
            text={val.text}
            view={val.view}
          />
        );
      })}
    </div>
  );
};

export default Work;
