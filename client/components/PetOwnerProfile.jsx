import React from 'react';
import PrimaryHeader from './PrimaryHeader.jsx';
import SearchResults from './SearchResults.jsx';

const PetOwnerProfile = (props) => {
  return (
    <div>
      <PrimaryHeader />
      <div>
        <h1>Welcome, {props.user.username} and {props.user.pet}!</h1>
        <p>{props.user.username}</p>
        <img src={props.user.image}></img>
        <SearchResults />
      </div>
    </div>
  );
};

export default PetOwnerProfile;
