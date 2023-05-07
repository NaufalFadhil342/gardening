import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ background }) => {
  return (
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="backyard">
        <h1>Contact Us</h1>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
