import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import UserLogin from './UserLogin.jsx';

const Login = ({ authenticateLogin }) => {
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
          <Route path="/login/business" render={() => (<UserLogin loginType="business" authenticateLogin={authenticateLogin} />)} />
          <Route path="/login/petOwner" render={() => (<UserLogin loginType="petOwner" authenticateLogin={authenticateLogin} />)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Login;
