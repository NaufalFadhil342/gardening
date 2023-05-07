import React from 'react';
import { useNavigate } from 'react-router-dom';
import garden from '../../Image/gardening/garden.jpg';
import { Button } from '../button/button';

export const Invoked = () => {
  const navigate = useNavigate();

  return (
    <div className="invoked" style={{ backgroundImage: `url(${garden})` }}>
      <div className="frontyard">
        <div>
          <p>Do you have questions? Call or visit us</p>
          <div className="phoneNumber">(+62) 1234 567 890</div>
        </div>
        <Button className="success" onClick={() => navigate('/contact')}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};
