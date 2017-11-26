import React from 'react';

/* TODO: pass in links to other profiles */
const Review = (props) => {
  return (
    <div>
      <div>
        <p>{props.rating}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Review;
