import React, { useState } from "react";

import CustomInput from "../custom-input/custom-input.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { displayName, email, password, confirmPassword } = userCredentials;

  return (
    <div className="signup">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">I do not have an account</h2>
        <p className="form__subtitle">Sign up with your email and password</p>
        <CustomInput
          type="text"
          name="displayName"
          labelText="Display Name"
          value={displayName}
          changeHandler={changeHandler}
          required
        />
        <CustomInput
          type="email"
          labelText="Email"
          name="email"
          value={email}
          changeHandler={changeHandler}
          required
        />
        <CustomInput
          type="password"
          name="password"
          labelText="Password"
          value={password}
          changeHandler={changeHandler}
          required
        />
        <CustomInput
          type="password"
          name="confirmPassword"
          labelText="Confirm Password"
          value={confirmPassword}
          changeHandler={changeHandler}
        />
        <button className="btn btn--black" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
