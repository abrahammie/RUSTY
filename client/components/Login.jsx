import React from 'react';
import { BrowserRouter,  Route, NavLink, Switch, Redirect } from 'react-router-dom';
import BusinessLogin from './BusinessLogin.jsx';
import PetOwnerLogin from './PetOwnerLogin.jsx';

const Login = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/login/business" activeClassName="active">Business Owner</NavLink></li>
        <li><NavLink to="/login/petOwner" activeClassName="active">Pet Owner</NavLink></li>
      </ul>
      <Switch>
        <Route path="/login/business" component={BusinessLogin} />
        <Route path="/login/petOwner" component={PetOwnerLogin} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Login;
