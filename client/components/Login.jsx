import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import UserLogin from './UserLogin.jsx';

const Login = ({ authenticateLogin }) => {
  const linkTextStyle = {
    fontFamily: 'Roboto, sans-serif',
    display: 'inline'
  };
  const style = {
    height: 'auto',
    width: 'auto',
    padding: 25,
    margin: 20,
    textAlign: 'left',
    display: 'inline-block',
  };

  return (
    <div>
    <Paper style={style} zDepth={5}>
    <BrowserRouter>
      <div style={{ whiteSpace: 'nowrap', marginTop: 15, backgroundColor: 'white' }}>

        <h3 style={linkTextStyle}>Login as a </h3>
        <NavLink
            to="/login/business"
            style={linkTextStyle}
            activeStyle={{ fontWeight: 'bold' }}>
            Business
        </NavLink>
        <h3 style={linkTextStyle}> or a </h3>
          <NavLink
            to="/login/petOwner"
            style={linkTextStyle}
            activeStyle={{ fontWeight: 'bold' }}>
            Pet Owner
          </NavLink>
       <h3 style={linkTextStyle}>?</h3>
        <Switch>
          <Route path="/login/business" render={() => (<UserLogin userType="Business" authenticateLogin={authenticateLogin} />)} />
          <Route path="/login/petOwner" render={() => (<UserLogin userType="Pet Owner" authenticateLogin={authenticateLogin} />)} />
        </Switch>

      </div>
    </BrowserRouter>
    </Paper>
    </div>
  );
};

export default Login;
