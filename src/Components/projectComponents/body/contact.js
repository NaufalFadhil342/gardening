import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgContact from '../../../Image/gardening/garden.jpg';
import { Button } from '../../button/button';

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact">
      <div className="content" style={{ backgroundImage: `url(${bgContact})` }}>
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
    </div>
  );
};
