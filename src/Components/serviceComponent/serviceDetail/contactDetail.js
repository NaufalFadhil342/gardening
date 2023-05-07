import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button/button';

export const ContactDetail = ({ contactImage }) => {
  const navigate = useNavigate();

  return (
    <div className="contact" style={{ backgroundImage: `url(${contactImage})` }}>
      <div className="backyard" />
      <div className="content">
        <div>
          <p>Do you have questions? Call or visit us.</p>
          <div className="phoneNumber">(+62) 1234 567 890</div>
        </div>
        <Button className="success" onClick={() => navigate('/contact')}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};
