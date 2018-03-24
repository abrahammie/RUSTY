import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ProfileHeader from './ProfileHeader.jsx';

const style = {
  paperStyle: {
    maxWidth: 600,
    margin: '0 auto',
  },
  profileContent: {
    background: 'url(swirl.png)',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  hintStyle: {
    textAlign: 'center',
  },
};

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePromo = this.handlePromo.bind(this);
  }

  handleChange(event) {
    this.setState({ promoText: event.target.value });
  }

  handlePromo() {
    axios.post('/api/promo', {
      promo: this.state.promoText,
      businessId: this.props.user._id,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return console.error(err);
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ProfileHeader onLogOut={this.props.onLogOut} />
            <div style={style.profileContent}>
            <br />
            <Paper
              style={style.paperStyle}
              zDepth={3}
            >
              <Card>
                <CardHeader
                  title={`Welcome, ${this.props.user.businessName}!`}
                />
                <img src={this.props.user.profileImg.cloudinaryURL} style={style.image} alt="" />
                <CardMedia
                  overlay={<CardTitle title={this.props.user.businessName} />}
                />
                <CardText >
                  What Rusty users are saying about you:
                  <br />
                  <ul>
                    {this.props.reviews.map((review) => {
                      return (
                        <li>{review.description}</li>
                      );
                    })}
                  </ul>
                  <br />
                  <h3>Your special promotions:</h3>
                  <ul>
                    {this.props.promotions.map((promotion) => {
                      return (
                        <li>{promotion.description}</li>
                      );
                    })}
                  </ul>
                </CardText>
                <CardActions>
                  <TextField
                    hintText="Enter a new promotion here!"
                    hintStyle={style.hintStyle}
                    multiLine={true}
                    value={this.state.promoText}
                    onChange={event => this.handleChange(event)}
                  />
                  <FlatButton
                    label="make your offer"
                    primary={true}
                    onClick={() => this.handlePromo()}
                  />
                </CardActions>
              </Card>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default BusinessProfile;
