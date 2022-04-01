import React, { useState } from "react";

import firebase, {
  auth,
  createUserProfile,
} from "../../firebase/firebase.utils";

import CustomInput from "../custom-input/custom-input.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords don't match");
    }

    try {
      firebase
        .createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          await createUserProfile(user, { displayName });

          // Clear form
          setUserCredentials({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch(({ message, code }) => console.log(`${message} (${code})`));
    } catch (err) {
      console.error(err);
    }
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

export default SignUp;
