import React from 'react';
import background from '../../../Image/gardening/flush.jpg';
import { Button } from '../../button/button';

const Header = () => {
  return (
    <div className="header">
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <div>
          <h1>
            <i>Planting</i> and <i>Greening</i> Consultant
            <div className="line" />
          </h1>
          <p>Create an awesome planting design for your business or house to add beautiful of yours</p>
          <Button className="success">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
