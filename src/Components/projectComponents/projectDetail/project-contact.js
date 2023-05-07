import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button/button';

export const Projectcontact = ({ background }) => {
  const navigate = useNavigate();

  return (
    <div className="contact" style={{ backgroundImage: `url(${background})` }}>
      <div className="backyard">
        <div>
          <p>Do you have a questions? Call or visit us.</p>
          <div>(+62) 1234 567 890</div>
        </div>
        <Button className="success" onClick={() => navigate('/contact')}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};
