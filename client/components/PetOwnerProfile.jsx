import React from 'react';
import PrimaryHeader from './PrimaryHeader.jsx';
import SearchResults from './SearchResults.jsx';

const PetOwnerProfile = (props) => {
  return (
    <div>
      <PrimaryHeader />
      <div>
        <h2>Welcome, {props.user.username} and {props.user.pet}!</h2>
        <img src={props.user.profileImg} style={{maxWidth: 400}}></img>

      </div>
    </div>
  );
};

export default PetOwnerProfile;
