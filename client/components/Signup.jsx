import React from 'react';
import { BrowserRouter,  Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import BusinessSignup from './BusinessSignup.jsx';
import PetOwnerSignup from './PetOwnerSignup.jsx';

const Signup = (props) => {
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

        <h3 style={linkTextStyle}>Sign up as a </h3>
        <NavLink
            to="/signup/business"
            style={linkTextStyle}
            activeStyle={{ fontWeight: 'bold' }}>
            Business
        </NavLink>
        <h3 style={linkTextStyle}> or a </h3>
          <NavLink
            to="/signup/petOwner"
            style={linkTextStyle}
            activeStyle={{ fontWeight: 'bold' }}>
            Pet Owner
          </NavLink>
       <h3 style={linkTextStyle}>?</h3>
       <br/>
       <br/>
        <Switch>
          <Route path="/signup/business" render={() => (<BusinessSignup app={props.app} userType="Business" />)} />
          <Route path="/signup/petOwner" render={() => (<PetOwnerSignup app={props.app} userType="Pet Owner" />)} />
        </Switch>

      </div>
    </BrowserRouter>
    </Paper>
    </div>
  )
};

export default Signup;

