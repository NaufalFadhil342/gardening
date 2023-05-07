import React from 'react';
import { Link } from 'react-router-dom';
import { ImageServices } from './imageServices';
import { workIcon } from '../../../work/work';

export const OurServices = () => {
  const rendered = workIcon.map((service) => {
    return (
      <div className="category" key={service.id}>
        <ImageServices className="image" image={service.image} work={service} />
        <div className="job">
          <i>{service.ourworkIcon}</i>
          <h1>{service.label}</h1>
          <p>{service.text}</p>
          <Link to={`/services/${service.id}`}>Read More</Link>
        </div>
      </div>
    );
  });

  return <div className="services">{rendered}</div>;
};
