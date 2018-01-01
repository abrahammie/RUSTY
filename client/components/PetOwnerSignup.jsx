import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PetOwnerSignup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			petName: '',
			zip: '',
			password: '',
			image:'',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

  onSubmit(ev) {
  	ev.preventDefault();
  	const obj = {};
  	obj.name = this.state.name;
  	obj.email = this.state.email;
  	obj.petName = this.state.petName;
  	obj.zip = this.state.zip;
  	obj.image = this.state.image;
  	obj.password = this.state.password;
  	this.props.signUp(obj);
  }

  onChange(ev) {
  	const obj = {};
  	obj[ev.target.name] = ev.target.value;
  	this.setState(obj);
  }

  render() {
	  const style = {
	    button: {
	      fontFamily: 'Roboto, sans-serif',
	      backgroundColor: '#7CB342',
	      color: 'white',
	    },
	  };
	  return (
	    <div>
	    <form id="signupForm" onSubmit={this.onSubmit}>
	      <TextField name="email" onChange={this.onChange} hintText="Email" />
	      <br />
	      <TextField name="name" onChange={this.onChange} hintText="Name" />
	      <br />
	      <TextField name="zip" onChange={this.onChange} hintText="Zip Code" />
	      <br />
	      <TextField name="petName" onChange={this.onChange} hintText="Pet Name" />
	      <br />
	      <TextField name="image" onChange={this.onChange} hintText="Profile Image Url" />
	      <br />
	      <TextField name="password" onChange={this.onChange} hintText="Password" />
	      <br />
	      <RaisedButton
	        containerElement="label"
	        style={{ margin: 12 }}
	        buttonStyle={style.button}
	        onClick={this.onSubmit}
	      >
	        SUBMIT
	      </RaisedButton>
	      </form>
	    </div>
	  );
  }
};

export default PetOwnerSignup;
