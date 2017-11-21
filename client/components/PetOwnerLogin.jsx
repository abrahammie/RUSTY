import React from 'react';

const PetOwnerLogin = (props) => {
  // props will be function that submits form data

  // const onChange = this.props.onChange;
  // const submitData = this.props.submitData;

  return (
    <p>
      Email : <input type="text" name="email" /* onChange={onChange} */ /><br></br>
      Password : <input type="text" name="password" /* onChange={onChange} */ /><br></br>
      <button type="button" /* onClick={submitData} */> VALIDATE </button>
    </p>
  );
};
export default PetOwnerLogin;
