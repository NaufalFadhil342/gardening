import React, { Fragment, useState } from 'react';
import './root.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';
import { HiddenLinks } from './hiddenLinks';
import { AnimatePresence } from 'framer-motion';

export const Root = () => {
  const [linksOpen, setLinksOpen] = useState(false);

  const linksHandler = () => {
    setLinksOpen(true);
  };

  const closeHandler = () => {
    setLinksOpen(false);
  };

  const items = {
    exit: {
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

  return (
    <Fragment>
      <div className="navigation">
        <h1>
          <i>Garden</i>ing
        </h1>
        <AnimatePresence>{linksOpen && <HiddenLinks item={items} openMenu={linksHandler} closeMenu={closeHandler} />}</AnimatePresence>
        <div className="navlink">
          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Services
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="tapMenu" onClick={linksHandler}>
          <GiHamburgerMenu />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
