import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../Image/gardening/garden.jpg';

export const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="backyard">
        <h1>Projects</h1>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
