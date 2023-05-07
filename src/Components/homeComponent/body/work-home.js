import React from 'react';
import { workIcon } from '../../work/work';

export const Workhome = () => {
  const renderedOurwork = workIcon.map((ourwork, index) => {
    return (
      <div className="rendered" key={index}>
        <div className="icon">
          <i>{ourwork.ourworkIcon}</i>
        </div>
        <h3>{ourwork.label}</h3>
        <p>{ourwork.text}</p>
      </div>
    );
  });

  return (
    <div className="workHome">
      <div className="header">
        <div className="tagline">Working Process</div>
        <h1>How Do We Work</h1>
      </div>
      <div className="body">{renderedOurwork}</div>
    </div>
  );
};
