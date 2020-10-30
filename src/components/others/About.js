import React from 'react';
import santa from '../../images/santa.png';

export default () => {
  return (
    <div>
      <h1 className="display-4">About Wish List 4 Santa</h1>
      <p className="lead">Simple app to manage your Christmas wish list</p>
      <p className="text-secondary">Version 1.0.0</p>
        <p>
            <img src={santa} alt="Wish List 4 Santa" />
        </p>
    </div>
  );
};
