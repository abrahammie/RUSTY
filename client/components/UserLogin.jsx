import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const UserLogin = ({ userType, authenticateLogin }) => {
  const onSubmit = (ev) => {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    authenticateLogin(email, password, userType);
    document.getElementById('loginForm').reset();
  };

  const style = {
    button: {
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: '#7CB342',
      color: 'white',
    },
  };

  return (
    <div>
      <form id="loginForm" onSubmit={onSubmit}>
        <TextField
          id="email"
          hintText="Email"
          type="email"
        />
        <br />
        <TextField
          id="pasword"
          hintText="Password"
          type="password"
        />
        <br />
        <br />
        <RaisedButton buttonStyle={style.button} type="submit">SUBMIT</RaisedButton>
      </form>
    </div>
  );
};

export default UserLogin;
