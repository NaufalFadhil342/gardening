import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button/button';
import { BiCheck } from 'react-icons/bi';
import imageAbout from '../../../Image/gardening/about-image.jpg';

export const Abouthome = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutHome">
      <div className="image">
        <div style={{ backgroundImage: `url(${imageAbout})` }} />
      </div>
      <div className="vision">
        <div className="head">
          <div className="tagline">What Do We Do?</div>
          <h1>Our Services</h1>
        </div>
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus eu ipsum a placerat. Nam eu posuere orci, quis fringilla turpis. Suspendisse justo mi, aliquet non massa et, vestibulum tempus leo. Quisque at tellus sed
            dolor lobortis placerat.
          </p>
          <div className="benefit">
            <div>
              <BiCheck /> Strengthen bones, joint and muscles
            </div>
            <div>
              <BiCheck />
              Boost immune system
            </div>
            <div>
              <BiCheck />
              high absorption {'&'} gentle on the stomach
            </div>
            <div>
              <BiCheck />
              prenancy support / fetal bone development
            </div>
          </div>
          <Button className="success" onClick={() => navigate('/about')}>
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};
