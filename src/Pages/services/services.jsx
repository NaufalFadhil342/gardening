import React from 'react';
import '../../Styles/services.css';
import { ContactServices } from '../../Components/serviceComponent/body/contactServices';
import { OurServices } from '../../Components/serviceComponent/body/our-services/ourServices';
import { Head } from '../../Components/serviceComponent/header/head';

const Services = () => {
  return (
    <div className="servicesPage">
      <Head />
      <OurServices />
      <ContactServices />
    </div>
  );
};

export default Services;
