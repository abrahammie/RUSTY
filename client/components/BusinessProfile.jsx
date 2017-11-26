import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red500, blue500} from 'material-ui/styles/colors';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ProfileHeader from './ProfileHeader.jsx';
import SearchResults from './SearchResults.jsx';
import Review from './Review.jsx';

const paperStyle_2 = {
  width: 500,
  margin: 10,
  textAlign: 'left',
};


const BusinessProfile = (props) => {
  console.log('PROPS:', props.reviews)
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
            title={'Welcome, ' + props.user.businessName}
          />
          <img src={props.user.profileImg} style={{maxWidth: 500}} alt="" />
          <CardMedia
            overlay={<CardTitle title={props.user.businessName}/>}
          />
          <CardText >
            What people are saying about you:
            <br />
            <ul>
              {props.reviews.map((review) => {
                return (
                  <li>{review.description}</li>
                )
              })}
            </ul>
         </CardText>
        </Card>
        </Paper>


       </div>

     </MuiThemeProvider>
  );
};

export default BusinessProfile;

/*


   class Profile extends React.Component {



   render () {
   //console.log('in PRofile ')
   let dataz=this.props.parent.state.mockedServerRetrievedData;
   //console.log('in PRofile dataz = ', dataz)

   return (
   <div>

   <h2> in Profile component // THIS IS SERVER RETRIEVED DATA </h2>

   Email : {dataz.email || ''} <br/>
   Name : {dataz.name || ''} <br/>
   Zip : {dataz.zip || ''} <br/>
   password : {dataz.password || ''} <br/>
   Pet : {dataz.pet || ''}
   </div>
   )
   }
   }


 */
