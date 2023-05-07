import React from 'react';
import { Button } from '../../button/button';
import contactImg from '../../../Image/gardens/contact-image.jpg';
import { useNavigate } from 'react-router-dom';

export const Contacthome = () => {
  const navigate = useNavigate();

  return (
    <div className="contactHome">
      <div className="content" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="opacity" />
        <div className="head">
          <div>
            <p>Do you have a questions? Call or visit us.</p>
            <h1>(+62) 1234 567 890</h1>
          </div>
          <Button className="success" onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
