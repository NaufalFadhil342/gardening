import React, { useState, useEffect } from 'react';
import '../../Styles/projectDetail.css';
import background from '../../Image/gardening/garden.jpg';
import Pexels from '../../Components/api/pexels';
import { Projectheader } from '../../Components/projectComponents/projectDetail/project-header';
import { Projectbody } from '../../Components/projectComponents/projectDetail/project-body';
import { Projectcontact } from '../../Components/projectComponents/projectDetail/project-contact';

const ProjectDetail = () => {
  const [image, setImage] = useState([]);

  const findImage = async () => {
    const result = await Pexels();

    setImage(result);
  };

  useEffect(() => {
    findImage();
  }, []);

  return (
    <div className="projectDetail">
      <Projectheader background={background} />
      <Projectbody images={image} />
      <Projectcontact background={background} />
    </div>
  );
};

export default ProjectDetail;
