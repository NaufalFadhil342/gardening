import React from 'react';
import { Button } from '../../button/button';
import { Location } from './location';

export const Information = () => {
  return (
    <div className="info">
      <div className="invoked">
        <h1>Our Office</h1>
        <div />
        <Button className="success">Contact Us</Button>
      </div>
      <Location />
    </div>
  );
};
