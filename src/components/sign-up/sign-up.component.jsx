import React, { useState } from "react";
import { connect } from "react-redux";

import { signupStart } from "../../redux/user/user.actions";

import CustomInput from "../custom-input/custom-input.component";

import "./sign-up.styles.scss";

const SignUp = ({ signupStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  // change handler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords don't match");
    }

    signupStart({ email, password, displayName });

    // handle this part with saga
    // try {
    //   firebase
    //     .createUserWithEmailAndPassword(auth, email, password)
    //     .then(async ({ user }) => {
    //       await createUserProfile(user, { displayName });

    //       // Clear form
    //       setUserCredentials({
    //         displayName: "",
    //         email: "",
    //         password: "",
    //         confirmPassword: "",
    //       });
    //     })
    //     .catch(({ message, code }) => console.log(`${message} (${code})`));
    // } catch (err) {
    //   console.error(err);
    // }
  };

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

const mapDispatchToProps = (dispatch) => ({
  signupStart: (credentials) => dispatch(signupStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
