import React from 'react';

const UserLogin = ({ userType, authenticateLogin }) => {
  const onSubmit = (ev) => {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    authenticateLogin(email, password, userType);
    document.getElementById("loginForm").reset();
  };

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <p>{userType} Email: <input name="email" type="email" /></p>
      <p>Password: <input name="password" type="password" /></p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserLogin;
