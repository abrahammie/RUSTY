import React from 'react';
import PrimaryHeader from './PrimaryHeader.jsx';

const PetOwnerProfile = (props) => {
  return (
    <div>
      <PrimaryHeader />
      <div>
        <h1>Pet Owner PROFILE</h1>
        <p>{props.username}</p>
        <img src={props.image}>
      </div>
    </div>
  );
};

export default PetOwnerProfile;
