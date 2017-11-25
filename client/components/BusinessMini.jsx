import React from 'react';
import axios from 'axios';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {green500, blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import PrimaryHeader from './PrimaryHeader.jsx';
import Review from './Review.jsx'
import Wag from './Wag.jsx';

const styles = {
  errorStyle: {
    color: blue500,
  },
  underlineStyle: {
    borderColor: blue500,
  },
  floatingLabelStyle: {
    color: green500,
  },
  floatingLabelFocusStyle: {
    color: green500,
  },
};


class BusinessMini extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wags: Array(5).fill(null),
      reviewText: '',
    };
  }

  /* state contains: selected number of wags; review description */

  handleSubmit() {
    var numWags = 0;
    while (this.state.wags[numWags]) {
      numWags++;
    }
    axios.post('/api/review', {
      wags: numWags,
      description: this.state.reviewText,
      userId: this.props.userId,
      businessId: this.props.id
    })
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           return console.error(err);
         });
  }

  handleChange(event) {
    this.setState({ reviewText: event.target.value });
  }

  handleClick(i) {
    const wags = this.state.wags.map((wag, index) => {
      return index <= i ? 'X' : null;
    });
    this.setState({ wags: wags });
  }

  renderWag(i) {
    return <Wag value={this.state.wags[i]} onClick={() => this.handleClick(i)} />
  }

  render() {

    var sumWags = 0;
    const reviews = this.props.reviews;
    for (var i = 0; i < reviews.length; i++) {
      sumWags += reviews[i].wags;
    }
    var avgWags = 'no'
    if (i > 0) {
      avgWags = (sumWags / i).toString();
    }

    return (
      <Card>
        <CardHeader
          title={this.props.businessCategory}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.businessName} />}
           >
          <img src={this.props.profileImg} style={{height:200, width:200}} />
        </CardMedia>
        <CardTitle subtitle={avgWags + ' wags!'} />
        <CardText>
          {reviews.map((review) => {
             return <Review description={review.description} />
          })}
        </CardText>
        <CardActions>
          {this.renderWag(0)}
          {this.renderWag(1)}
          {this.renderWag(2)}
          {this.renderWag(3)}
          {this.renderWag(4)}
           <TextField
            hintText="your review goes here"
            value={this.state.reviewText}
            onChange={event => this.handleChange(event)}
            />
          <FlatButton label="submit a review!" primary={true} onClick={() => this.handleSubmit()}></FlatButton>
        </CardActions>
      </Card>
    );
  }
};

export default BusinessMini;
