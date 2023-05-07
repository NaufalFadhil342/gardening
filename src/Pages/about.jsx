import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/about.css';
import garden from '../Image/gardening/garden.jpg';
import { Working } from '../Components/aboutComponent/working';
import { Job } from '../Components/aboutComponent/Job/job';
import { Invoked } from '../Components/aboutComponent/invoked';
import { Staff } from '../Components/aboutComponent/staff';

const About = () => {
  return (
    <div className="aboutPage">
      <div className="headBackground" style={{ backgroundImage: `url(${garden})` }}>
        <div className="frontyard">
          <h1>About Us</h1>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </div>
      </div>
      <Working />
      <Job />
      <Invoked />
      <Staff />
    </div>
  );
};

export default About;
