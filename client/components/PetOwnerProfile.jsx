import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ProfileHeader from './ProfileHeader.jsx';
import SearchResults from './SearchResults.jsx';

const style = {
  paperStyle: {
    maxWidth: 600,
    margin: '0 auto',
  },
  profileContent: {
    background: 'url(swirl.png)',
  },
  image: {
    maxWidth: 600,
  },
};

const PetOwnerProfile = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <ProfileHeader onLogOut={props.onLogOut} />
          <div style={style.profileContent}>
          <br />
          <Paper
            style={style.paperStyle}
            zDepth={3}
          >
            <Card>
              <CardHeader
                title={'Welcome ' + props.user.username + ' and ' + props.user.pet + '!'}
              />
              <img src={props.user.profileImg.cloudinaryURL} style={style.image} alt="" />
              <CardMedia
                overlay={<CardTitle title={props.user.pet} />}
              />
              <CardText>
                <h4>Browse local pet-friendly businesses.
                Whistle for {props.user.pet} and Enjoy!</h4>
              </CardText>
            </Card>
          </Paper>
          <br/>
          <SearchResults petOwnerId={props.user._id} />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default PetOwnerProfile;

