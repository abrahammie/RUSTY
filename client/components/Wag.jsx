import React from 'react';

const Wag = (props) => {
  return (
    <button onClick={props.onWagClick}>
    {props.value}
  </button>
  );
}

export default Wag;
