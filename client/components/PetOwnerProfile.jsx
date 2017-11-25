import React from 'react';
import ProfileHeader from './PrimaryHeader.jsx';
import SearchResults from './SearchResults.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const PetOwnerProfile = (props) => {
  return (
    <MuiThemeProvider>
    <div>
      <ProfileHeader />
      <Subheader>Welcome back, {props.user.username} and {props.user.pet}!</Subheader>
      <Divider />
      <div>
        <img src={props.user.profileImg} style={{maxHeight: 300}}></img>
        <SearchResults userId={props.user._id} />
      </div>
    </div>
    </MuiThemeProvider>
  );
};

export default PetOwnerProfile;
