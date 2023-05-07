import React, { useState, useEffect } from 'react';
import '../../Styles/project.css';
import { Header } from '../../Components/projectComponents/header/header';
import Pexels from '../../Components/api/pexels';
import { Body } from '../../Components/projectComponents/body/body';

const Projects = () => {
  const [image, setImage] = useState([]);

  const findImage = async () => {
    const result = await Pexels();

    setImage(result);
  };

  useEffect(() => {
    findImage();
  }, []);

  return (
    <div className="projectsPage">
      <Header />
      <Body images={image} />
    </div>
  );
};

export default Projects;
