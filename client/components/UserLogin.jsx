import React from 'react';

const UserLogin = ({ loginType, authenticateLogin }) => {
  const onSubmit = (ev) => {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    authenticateLogin(email, password, loginType);
    document.getElementById("loginForm").reset();
  };

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <p>Email: <input name="email" type="email" /></p>
      <p>Password: <input name="password" type="password" /></p>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default UserLogin;
