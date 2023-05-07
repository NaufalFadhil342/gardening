import React from 'react';
import { Link } from 'react-router-dom';

export const Projectheader = ({ background }) => {
  return (
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="backyard">
        <h1>Project Detail</h1>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};
