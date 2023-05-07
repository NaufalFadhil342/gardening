import React from 'react';
import owner from '../../Image/worker/owner.jpg';
import farmer from '../../Image/worker/farmer.jpg';
import gardener from '../../Image/worker/gardener.jpg';

export const Staff = () => {
  return (
    <div className="staff">
      <div className="head">
        <div className="tagline">Our Professional</div>
        <h1>Meet Our Team</h1>
      </div>
      <div className="body">
        <div className="owner">
          <div className="image" style={{ backgroundImage: `url(${owner})` }} />
          <div className="staffName">Braeden</div>
          <div className="jobDesk">Owner</div>
        </div>
        <div className="farmer">
          <div className="image" style={{ backgroundImage: `url(${farmer})` }} />
          <div className="staffName">Samuel</div>
          <div className="jobDesk">Farmer</div>
        </div>
        <div className="gardener">
          <div className="image" style={{ backgroundImage: `url(${gardener})` }} />
          <div className="staffName">Felecia</div>
          <div className="jobDesk">Gardener</div>
        </div>
      </div>
    </div>
  );
};
