import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { workIcon } from '../../work/work';

export const Servicehome = () => {
  const navigate = useNavigate();

  return (
    <div className="serviceHome">
      <div className="head">
        <div className="highlight">
          <div className="tagline">What do we do ?</div>
          <h1>Our Service</h1>
        </div>
        <div className="toService">
          <Link to="/services">View all services</Link>
        </div>
      </div>
      <div className="body">
        {workIcon.map((service) => {
          return (
            <div className="serviceAction" key={service.id} onClick={() => navigate(`/services/${service.id}`)}>
              <div className="icon">
                <i>{service.ourworkIcon}</i>
              </div>
              <h3>{service.label}</h3>
              <p>{service.text}</p>
              <div className="readMore">
                <Link to={`/services/${service.id}`}>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
