import React, { useEffect, useState } from 'react';
import '../Styles/home.css';
import Pexels from '../Components/api/pexels';
import { Abouthome } from '../Components/homeComponent/body/about-home';
import { Servicehome } from '../Components/homeComponent/body/service-home';
import Header from '../Components/homeComponent/header/header';
import { Workhome } from '../Components/homeComponent/body/work-home';
import { Contacthome } from '../Components/homeComponent/body/contact-home';
import { Feedhome } from '../Components/homeComponent/body/feed-home';
import { Projecthome } from '../Components/homeComponent/body/project-home';

const Home = () => {
  const [image, setImage] = useState([]);

  const findImage = async () => {
    const result = await Pexels();

    setImage(result);
  };

  useEffect(() => {
    findImage();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <Servicehome />
      <Abouthome />
      <Workhome />
      <Contacthome />
      <Feedhome />
      <Projecthome images={image} />
    </div>
  );
};

export default Home;
