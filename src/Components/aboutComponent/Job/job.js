import React from 'react';
import { CountUp } from './countUp';

export const Job = () => {
  return (
    <div className="job">
      <div className="projects">
        <CountUp end={1000} className="amount" />
        <h3>Project Done</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor dui augue, eget vehicula ex facilisis at.</p>
      </div>
      <div className="clients">
        <CountUp end={500} className="amount" />
        <h3>Clients</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor dui augue, eget vehicula ex facilisis at.</p>
      </div>
      <div className="plants">
        <CountUp end={800} className="amount" />
        <h3>Plants Type</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor dui augue, eget vehicula ex facilisis at.</p>
      </div>
    </div>
  );
};
