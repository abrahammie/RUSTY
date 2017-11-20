import React, { Component } from 'react';
import axios from 'axios';

const BusinessForm = () => (
  <div>hibusiness</div>
);
export default BusinessForm;

/*


class Signup extends React.Component {

  render () {
    let onChange=this.props.parent.onChange
    //console.log('message in signup = ',this.props.messreturn (
    <div>
      <div>
        <h2> in sign up component</h2>
        <h4> {this.props.message}</h4>

        Email : <input type="text" name="email" onChange={onChange}></input><br/>
        Name : <input type="text" name="name" onChange={onChange}></input><br/>
        Zip : <input type="text" name="zip" onChange={onChange} ></input><br/>
        password : <input type="text" name="password" onChange={onChange}></input><br/>
        Pet : <input type="text" name="pet" onChange={onChange}></input><br/>
        <button type="button" onClick={this.props.parent.submitData}> VALIDATE </button>
      </div>
)
  }
}

class BusinessForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      businessCategory: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { name, email, password, phone, businessCategory, street, city, state, zip } = this.state;

    axios.post('/', { fname, lname, email })
         .then((result) => {
           //access the results here....
         });
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="fname" value={fname} onChange={this.onChange} />
        <input type="text" name="lname" value={lname} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
*/
