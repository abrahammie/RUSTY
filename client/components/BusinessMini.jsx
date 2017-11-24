import React from 'react';
import axios from 'axios';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PrimaryHeader from './PrimaryHeader.jsx';
import Wag from './Wag.jsx';

class BusinessMini extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wags: Array(5).fill(null),
      reviewText: '',
    };
    /* this.handleChange = this.handleChange.bind(this);*/
    /* this.handleClick = this.handleClick.bind(this);*/
  }

  /* state contains: selected number of wags; review description */

  handleSubmit(event) {
    var numWags = 0;
    /* for (var i = 0; i < this.state.wags.length; i++) {*/
    /* if (this.state.wags[i]) {*/
    /* numWags++;*/
    /* }*/
    /* }*/
    while (this.state.wags[numWags]) {
      numWags++;
    }
    /* TODO: pass user info */
    axios.post('/api/rating', {
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

  /* consulted reactjs.org tutorial */

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
    return (
      <div>
        <PrimaryHeader />
        <h1>Business Mini Listing</h1>
        <p>{this.props.businessName}</p>
        <img src={this.props.profileImg} />
        {this.renderWag(0)}
        {this.renderWag(1)}
        {this.renderWag(2)}
        {this.renderWag(3)}
        {this.renderWag(4)}
        <input value={this.state.reviewText} onChange={event => this.handleChange(event)}></input>
        <button onClick={event => this.handleSubmit(event)}>Submit review</button>
      </div>
    );
  }
};

export default BusinessMini;
