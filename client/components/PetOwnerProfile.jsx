import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import ProfileHeader from './ProfileHeader.jsx';
import SearchResults from './SearchResults.jsx';
import Review from './Review.jsx';

const paperStyle_2 = {
  width: 370,
  margin: 10,
  textAlign: 'left',
};

const PetOwnerProfile = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <ProfileHeader onLogOut={props.onLogOut} />
        <br />
        <Paper
          style={paperStyle_2}
          zDepth={3}>
        <Card>
          <CardHeader
            title={'Welcome back ' + props.user.username + ' and ' + props.user.pet + '!'}
          />
          <img src={props.user.profileImg} style={{maxWidth: 370}} alt="" />
          <CardMedia
            overlay={<CardTitle title={props.user.pet}/>}
          />
        </Card>
        </Paper>
        <br />
        {props.reviews.map((review) => {
          return <Review rating={review.wags} description={review.description} />
        })}
        <SearchResults petOwnerId={props.user._id} />
      </div>
    </MuiThemeProvider>
  );
};

export default PetOwnerProfile;
