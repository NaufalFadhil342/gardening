import React, { useRef } from 'react';
import { Notification } from '../../notifications/notification';
import { Form } from './form';

export const Request = () => {
  const notivedRef = useRef();

  return (
    <div className="request">
      <hr />
      <div className="head">
        <h1>Get In Touch</h1>
        <p>Your email address will not be published. Required fields are marked *</p>
        <div />
      </div>
      <div className="body">
        <Form
          onShow={() => {
            notivedRef.current.show();
          }}
        />
        <Notification ref={notivedRef} message="Your requests are successful!" type="success" />
      </div>
    </div>
  );
};
