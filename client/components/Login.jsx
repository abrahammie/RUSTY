import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import BusinessLogin from './BusinessLogin.jsx';
import PetOwnerLogin from './PetOwnerLogin.jsx';

const Login = (props) => {
  // props will be a function to submit form data
  // props should be passed down to each form
  const buttonStyle = {
    fontSize: '15px',
  };
  return (
    <BrowserRouter>
      <div>
        <button style={buttonStyle}>
          <NavLink
            to="/login/business"
            activeStyle={{ fontWeight: 'bold' }}>
            Business Owner Login
          </NavLink>
        </button>
        <button style={buttonStyle}>
          <NavLink
            to="/login/petOwner"
            activeStyle={{ fontWeight: 'bold' }}>
            Pet Owner Login
          </NavLink>
        </button>
        <Switch>
          <Route path="/login/business" component={BusinessLogin} />
          <Route path="/login/petOwner" component={PetOwnerLogin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Login;
