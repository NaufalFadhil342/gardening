import React from 'react';
import './root.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const HiddenLinks = ({ closeMenu, item }) => {
  return (
    <motion.nav className="hidden-links" variants={item} initial={{ height: 0 }} animate={{ height: '100vh' }} transition={{ duration: 0.5 }} exit={item.exit}>
      <motion.div className="links" initial={{ visibility: 'hidden', transition: { delay: 0 } }} animate={{ visibility: 'visible', transition: { delay: 0.5 } }} exit={{ visibility: 'hidden', transition: { delay: 0 } }}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
          Contact
        </NavLink>
      </motion.div>
    </motion.nav>
  );
};
