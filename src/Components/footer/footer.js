import React from 'react';
import './footer.css';
import { GrFacebookOption, GrTwitter, GrInstagram, GrLinkedinOption } from 'react-icons/gr';

const socmed = [{ icon: <GrFacebookOption /> }, { icon: <GrTwitter /> }, { icon: <GrInstagram /> }, { icon: <GrLinkedinOption /> }];

export const Footer = () => {
  const renderedIcon = socmed.map((icon, index) => {
    return (
      <div className="icon" key={index}>
        <i>{icon.icon}</i>
      </div>
    );
  });

  return (
    <div className="footer">
      <div className="footer-info">
        <div className="forMoreInfo">
          <h1>
            Garden<i>ing</i>
          </h1>
          <div>
            <p>Do you have questions? Call or visit us.</p>
            <p className="tel-number">(+62) 1234 567 890</p>
            <div className="sosmed">{renderedIcon}</div>
          </div>
        </div>
        <div className="aboutInfo">
          <h2>About Us</h2>
          <div>
            <p>16730 Bogor West Java, Indonesia</p>
            <p>yourname@gmail.com</p>
            <p>Monday - Fri: 9am - 6pm</p>
            <p>Saturday - Sun: close</p>
          </div>
        </div>
        <div className="servicesInfo">
          <h2>Our Services</h2>
          <div>
            <p>Arbor Management</p>
            <p>Landscape</p>
            <p>Enhancement</p>
            <p>Pest Control</p>
            <p>Nursery {'&'} Tree Farm </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <i>&copy;</i>2023. Proudly powered by Naudhil
        </p>
      </div>
    </div>
  );
};
