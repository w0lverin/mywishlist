import React from 'react';
import santa from '../../images/santa.png';

export default () => {
  return (
    <div>
      <h2>ABOUT THIS APP</h2>
      <p className="lead">Simple app to manage your Christmas wish list</p>
        <p className="text-secondary"><b>Version 1.0.1</b></p>
        <p style={{textAlign:'center'}}>
            <img src={santa} title='Santa Claus' alt="Wish List 4 Santa" />
        </p>
    </div>
  );
};
