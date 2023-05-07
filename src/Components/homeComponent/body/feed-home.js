import React from 'react';
import { FeedBack } from '../../work/work';

export const Feedhome = () => {
  const rendered = FeedBack.map((feed, index) => {
    return (
      <div className="rendered" key={index}>
        <p>
          {'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur ligula augue, elementum aliquet eros pulvinar sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.{'"'}
        </p>
        <div className="user">
          <img src={feed.icon} alt={feed.label} />
          <div>
            <h3>{feed.label}</h3>
            <p>{feed.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="feedHome">{rendered}</div>;
};
