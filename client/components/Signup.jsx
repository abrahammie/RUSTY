import React from 'react';
import { BrowserRouter,  Route, NavLink, Switch, Redirect } from 'react-router-dom';
import BusinessForm from './BusinessForm.jsx';
import UserForm from './UserForm.jsx';

const Signup = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/signup/business" activeClassName="active">Business Owner</NavLink></li>
        <li><NavLink to="/signup/petOwner" activeClassName="active">Pet Owner</NavLink></li>
      </ul>
      <Switch>
        <Route path="/signup/business" component={BusinessForm} />
        <Route path="/signup/petOwner" component={UserForm} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Signup;
