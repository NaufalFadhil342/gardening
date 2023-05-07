import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

export const Form = ({ onShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    onShow(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="name">
        <div className="first">
          <input {...register('firstName')} placeholder="First name..." />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className="last">
          <input {...register('lastName')} placeholder="Last name..." />
          <p>{errors.lastName?.message}</p>
        </div>
      </div>
      <div className="email">
        <input type="email" {...register('email')} placeholder="Your email..." />
        <p>{errors.email?.message}</p>
      </div>
      <div className="comment">
        <textarea rows="10" {...register('comment')} placeholder="Type your comment or message..." />
        <p>{errors.comment?.message}</p>
      </div>
      <div className="submit">
        <input type="submit" />
      </div>
    </form>
  );
};
