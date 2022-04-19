import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/user/user.actions";

import CustomInput from "../custom-input/custom-input.component";

import "./sign-in.styles.scss";

const SignIn = ({ googleSigninStart, emailSigninStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const submitHandler = (e) => {
    e.preventDefault();

    // Sign in with email
    emailSigninStart({ email, password });

    //handle this part in saga
    // firebase
    //   .signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => console.log("sign in with email"))
    //   .catch(({ message, code }) => console.log(`${message} (${code})`));

    // Clear form
    setUserCredentials({ email: "", password: "" });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

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
          <button
            className="btn btn--blue"
            type="button"
            // onClick={signInWithGoogle}
            onClick={googleSigninStart}
          >
            Sign in with google
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (emailAndPass) => dispatch(emailSigninStart(emailAndPass)),
});

export default connect(null, mapDispatchToProps)(SignIn);
