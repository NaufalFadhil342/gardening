import React from 'react';
import { OurWork } from './ourWork';

export const JobDesk = ({ jobdesk, id }) => {
  return (
    <div className="jobdesk">
      <h1>{jobdesk[id - 1].label}</h1>
      <p>{jobdesk[id - 1].text}Proin imperdiet lacinia tellus nec volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <div className="image" style={{ backgroundImage: `url(${jobdesk[id - 1].image})` }} />
      <OurWork />
    </div>
  );
};
