import React from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';

let PetOwnerSignup = (props) => {
	let onChange=props.app.onChange;
	let onSubmit= () => {
		props.app.submitData('petOwnerSignupUserInput');
	}
	const style = {
      button: {
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: '#7CB342',
        color: 'white',
      }
    };

	return (
		<div>
			<TextField id="email" onChange={onChange} hintText="Email" />
			<br />
			<TextField id="name" onChange={onChange} hintText="Name" />
			<br />
			<TextField id="zipCode" onChange={onChange} hintText="Zip Code" />
			<br />
			<TextField id="petName" onChange={onChange} hintText="Pet Name" />
			<br/>
			<TextField id="password" onChange={onChange} hintText="Password" />
			<br/>
	    <RaisedButton
	      containerElement="label"
	      style={{ margin: 12 }}
	      buttonStyle={style.button}
				onClick={onSubmit}
	    >SUBMIT</RaisedButton>
		</div>
	);
}

export default PetOwnerSignup;
