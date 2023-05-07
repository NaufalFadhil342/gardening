import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button/button';

export const Projecthome = ({ images }) => {
  const rendered = images.map((image) => {
    return (
      <div className="rendered" key={image.id}>
        <div className="image-project" style={{ backgroundImage: `url(${image.src.original})` }}>
          <div className="backyard" />
          <div className="title">Project Title</div>
        </div>
      </div>
    );
  });

  const navigate = useNavigate();

  const gallery = rendered.slice(7, 12);

  return (
    <div className="projectHome">
      <div className="head">
        <div className="tagline">Our Work</div>
        <h1>Make Your Dream Gardens Comes True</h1>
      </div>
      <div className="body">{gallery}</div>
      <div className="actions">
        <Button className="success" onClick={() => navigate('/projects')}>
          View All
        </Button>
      </div>
    </div>
  );
};
