import React from 'react';
import './../Styles/contact.css';
import { Header } from '../Components/contactComponent/header/header';
import { Information } from '../Components/contactComponent/body/information';
import background from '../Image/gardens/contact-image.jpg';
import { Request } from '../Components/contactComponent/body/request';

const Contact = () => {
  return (
    <div className="contactPage">
      <Header background={background} />
      <Information />
      <Request />
    </div>
  );
};

export default Contact;
