import React from 'react';
import { BrowserRouter,  Route, NavLink, Switch, Redirect } from 'react-router-dom';
import BusinessSignup from './BusinessSignup.jsx';
import PetOwnerSignup from './PetOwnerSignup.jsx';

const Signup = (props) => {
  const linkTextStyle = {
    fontFamily: 'Roboto, sans-serif',
    display: 'inline'
  };

console.log('test retrieving data from app =',props.test)
console.log('propsfrom app =',props)
console.log("in sign up before return statement")
  return (
    <BrowserRouter>
      <div style={{whiteSpace: 'nowrap', marginTop: 15}}>
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
        <Switch>
          <Route path="/signup/business" render={()=> <BusinessSignup app={props.app}  />} />
          <Route path="/signup/petOwner" render={()=> <PetOwnerSignup app={props.app}  />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default Signup;

