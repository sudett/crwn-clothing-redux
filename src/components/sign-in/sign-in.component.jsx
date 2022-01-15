import React, { useState } from "react";

import CustomInput from "../custom-input/custom-input.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  return (
    <div className="signin">
      <form className="form" onSubmit={submitHandler}>
        <h3 className="form__title">I already have an account</h3>
        <p className="form__subtitle">Sign in with your email and password</p>
        <CustomInput
          labelText="Email"
          type="email"
          name="email"
          value={email}
          changeHandler={changeHandler}
          required
        />
        <CustomInput
          labelText="Password"
          type="password"
          name="password"
          value={password}
          changeHandler={changeHandler}
          required
        />
        <div className="buttons-container">
          <button className="btn btn--black" type="submit">
            Sign in
          </button>
          <button className="btn btn--blue" type="button">
            Sign in with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
