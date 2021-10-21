import React from 'react';

function Random({ max, min }) {
  let numbers = Math.floor(Math.random() * max) + min;
  return (
    <div className="box">
      Random number between {min} and {max} is: {numbers}.
    </div>
  );
}

export default Random;
