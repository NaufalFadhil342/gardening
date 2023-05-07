import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Contact } from './contact';

export const Body = ({ images }) => {
  const navigate = useNavigate();

  const rendered = images.map((image) => {
    return (
      <div className="rendered" key={image.id}>
        <div className="image-project" style={{ backgroundImage: `url(${image.src.original})` }} onClick={() => navigate(`/projects/projectDetail`)}>
          <div className="backyard" />
          <div className="title">Project Title</div>
        </div>
      </div>
    );
  });

  const gallery = rendered.slice(0, 15);

  return (
    <div className="project">
      <div className="gallery">{gallery}</div>
      <Contact />
    </div>
  );
};
