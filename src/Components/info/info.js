import React from 'react';
import './info.css';
import { MdEmail, MdPhone } from 'react-icons/md';

export const Info = () => {
  return (
    <div className="info">
      <div>
        <MdEmail />
        <p>office@example.com</p>
      </div>
      <div>
        <MdPhone />
        <p>11233455</p>
      </div>
    </div>
  );
};
