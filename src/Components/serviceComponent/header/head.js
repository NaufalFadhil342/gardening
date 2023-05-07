import React from 'react';
import { NavLink } from 'react-router-dom';
import background from '../../../Image/gardens/contact-image.jpg';

export const Head = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="backyard">
        <h1>Service</h1>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
      </div>
    </div>
  );
};
